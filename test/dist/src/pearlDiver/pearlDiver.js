var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
const spongeFactory_1 = require("@iota-pico/crypto/dist/factories/spongeFactory");
const trits_1 = require("@iota-pico/data/dist/data/trits");
const add_1 = __importDefault(require("../shaders/add"));
const checkCol_1 = __importDefault(require("../shaders/checkCol"));
const checkDo_1 = __importDefault(require("../shaders/checkDo"));
const checkK_1 = __importDefault(require("../shaders/checkK"));
const finalize_1 = __importDefault(require("../shaders/finalize"));
const headers_1 = __importDefault(require("../shaders/headers"));
const increment_1 = __importDefault(require("../shaders/increment"));
const init_1 = __importDefault(require("../shaders/init"));
const transform_1 = __importDefault(require("../shaders/transform"));
const webGLWorker_1 = require("../webGL/webGLWorker");
const pearlDiverState_1 = require("./pearlDiverState");
/**
 * PearlDiver.
 * Converted from https://github.com/iotaledger/curl.lib.js/blob/master/src/pearldiver.js
 */
class PearlDiver {
    /* @internal */
    constructor(webGLPlatform) {
        this._webGLWorker = new webGLWorker_1.WebGLWorker();
        const curl = spongeFactory_1.SpongeFactory.instance().create("curl");
        this._hashLength = curl.getConstant("HASH_LENGTH");
        this._stateLength = curl.getConstant("STATE_LENGTH");
        this._numberRounds = curl.getConstant("NUMBER_OF_ROUNDS");
        this._transactionLength = this._hashLength * 33;
        this._nonceLength = this._hashLength / 3;
        this._nonceStart = this._hashLength - this._nonceLength;
        this._webGLWorker.initialize(webGLPlatform, this._stateLength + 1, PearlDiver.TEXEL_SIZE);
        this._currentBuffer = this._webGLWorker.getIpt().data;
        this._webGLWorker.addProgram("init", headers_1.default + add_1.default + init_1.default, "gr_offset");
        this._webGLWorker.addProgram("increment", headers_1.default + add_1.default + increment_1.default);
        this._webGLWorker.addProgram("twist", headers_1.default + transform_1.default);
        this._webGLWorker.addProgram("check", headers_1.default + checkDo_1.default + checkK_1.default, "minWeightMagnitude");
        this._webGLWorker.addProgram("col_check", headers_1.default + checkCol_1.default);
        this._webGLWorker.addProgram("finalize", headers_1.default + checkDo_1.default + finalize_1.default);
        this._state = pearlDiverState_1.PearlDiverState.ready;
        this._queue = [];
    }
    /**
     * Initialize the PearlDiver main instance.
     */
    static initialize(webGLPlatform) {
        if (!PearlDiver.instance) {
            PearlDiver.instance = new PearlDiver(webGLPlatform);
        }
    }
    /**
     * Closedown the PearlDiver main instance.
     */
    static closedown() {
        if (PearlDiver.instance) {
            PearlDiver.instance = undefined;
        }
    }
    /**
     * Perform a search using trytes.
     * @param trytes The trytes to perform the search on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns Promise which resolves to the trytes from the search.
     */
    searchWithTrytes(trytes, minWeightMagnitude) {
        return __awaiter(this, void 0, void 0, function* () {
            const searchStates = this.prepare(trytes);
            return this.search(searchStates, minWeightMagnitude);
        });
    }
    /* @internal */
    prepare(transactionTrytes) {
        const curl = spongeFactory_1.SpongeFactory.instance().create("curl");
        curl.initialize();
        const transactionTrits = trits_1.Trits.fromTrytes(transactionTrytes).toArray();
        curl.absorb(transactionTrits, 0, this._transactionLength - this._hashLength);
        const curlState = curl.getState();
        transactionTrits
            .slice(this._transactionLength - this._hashLength, this._transactionLength)
            .forEach((value, index) => {
            curlState[index] = value;
        });
        return this.searchToPair(curlState);
    }
    /* @internal */
    search(states, minWeight) {
        return __awaiter(this, void 0, void 0, function* () {
            // promise will complete when the search has completed
            // tslint:disable-next-line:promise-must-complete
            return new Promise((resolve, reject) => {
                this._queue.push({
                    states: states,
                    minWeightMagnitude: minWeight,
                    callback: resolve
                });
                if (this._state === pearlDiverState_1.PearlDiverState.ready) {
                    this.searchDoNext();
                }
            });
        });
    }
    /* @internal */
    searchToPair(state) {
        const states = {
            low: new Int32Array(this._stateLength),
            high: new Int32Array(this._stateLength)
        };
        state.forEach((trit, index) => {
            switch (trit) {
                case 0:
                    states.low[index] = PearlDiver.HIGH_BITS;
                    states.high[index] = PearlDiver.HIGH_BITS;
                    break;
                case 1:
                    states.low[index] = PearlDiver.LOW_BITS;
                    states.high[index] = PearlDiver.HIGH_BITS;
                    break;
                default:
                    states.low[index] = PearlDiver.HIGH_BITS;
                    states.high[index] = PearlDiver.LOW_BITS;
            }
        });
        this.searchOffset(states, this._nonceStart);
        return states;
    }
    /* @internal */
    searchOffset(states, offset) {
        states.low[offset + 0] = PearlDiver.LOW_0;
        states.low[offset + 1] = PearlDiver.LOW_1;
        states.low[offset + 2] = PearlDiver.LOW_2;
        states.low[offset + 3] = PearlDiver.LOW_3;
        states.high[offset + 0] = PearlDiver.HIGH_0;
        states.high[offset + 1] = PearlDiver.HIGH_1;
        states.high[offset + 2] = PearlDiver.HIGH_2;
        states.high[offset + 3] = PearlDiver.HIGH_3;
    }
    /* @internal */
    searchDoNext() {
        const next = this._queue.shift();
        if (objectHelper_1.ObjectHelper.isEmpty(next)) {
            this._state = pearlDiverState_1.PearlDiverState.ready;
        }
        else {
            this._state = pearlDiverState_1.PearlDiverState.searching;
            this.webGLFindNonce(next);
        }
    }
    /* @internal */
    webGLFindNonce(searchObject) {
        this.webGLWriteBuffers(searchObject.states);
        this._webGLWorker.writeData(this._currentBuffer);
        this._webGLWorker.runProgram("init", 1, { name: "gr_offset", value: 0 });
        setTimeout(() => this.webGLSearch(searchObject), 1);
    }
    /* @internal */
    webGLWriteBuffers(states) {
        for (let i = 0; i < this._stateLength; i++) {
            this._currentBuffer[i * PearlDiver.TEXEL_SIZE] = states.low[i];
            this._currentBuffer[i * PearlDiver.TEXEL_SIZE + 1] = states.high[i];
            this._currentBuffer[i * PearlDiver.TEXEL_SIZE + 2] = states.low[i];
            this._currentBuffer[i * PearlDiver.TEXEL_SIZE + 3] = states.high[i];
        }
    }
    /* @internal */
    webGLSearch(searchObject) {
        this._webGLWorker.runProgram("increment", 1);
        this._webGLWorker.runProgram("twist", this._numberRounds);
        this._webGLWorker.runProgram("check", 1, { name: "minWeightMagnitude", value: searchObject.minWeightMagnitude });
        this._webGLWorker.runProgram("col_check", 1);
        if (this._webGLWorker.readData(this._stateLength, 0, 1, 1)[2] === -1) {
            setTimeout(() => this.webGLSearch(searchObject), 10);
        }
        else {
            this._webGLWorker.runProgram("finalize", 1);
            const nonce = this._webGLWorker.readData(0, 0, this._webGLWorker.getDimensions().x, 1)
                .reduce(this.pack(4), [])
                .slice(0, this._hashLength)
                .map(x => x[3]);
            searchObject.callback(trits_1.Trits.fromNumberArray(nonce).toTrytes());
            this.searchDoNext();
        }
    }
    /* @internal */
    pack(l) {
        return (r, currentValue, currentIndex) => (currentIndex % l === 0 ? r.push([currentValue]) : r[r.length - 1].push(currentValue)) && r;
    }
}
/* @internal */
PearlDiver.TEXEL_SIZE = 4;
/* @internal */
PearlDiver.LOW_BITS = 0; // 00000000
/* @internal */
PearlDiver.HIGH_BITS = -1; // 0xFFFFFFFF,FFFFFFFF,4294967295
/* @internal */
PearlDiver.LOW_0 = 0xDB6DB6DB; // 6DB6DB6D,
/* @internal */
PearlDiver.LOW_1 = 0xF1F8FC7E; // 3F1F8FC7,
/* @internal */
PearlDiver.LOW_2 = 0x7FFFE00F; // FFFC01FF,
/* @internal */
PearlDiver.LOW_3 = 0xFFC00000; // 07FFFFFF,
/* @internal */
PearlDiver.HIGH_0 = 0xB6DB6DB6; // DB6DB6DB,
/* @internal */
PearlDiver.HIGH_1 = 0x8FC7E3F1; // F8FC7E3F,
/* @internal */
PearlDiver.HIGH_2 = 0xFFC01FFF; // F803FFFF,
/* @internal */
PearlDiver.HIGH_3 = 0x003FFFFF; //FFFFFFFF,
exports.PearlDiver = PearlDiver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVhcmxEaXZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9wZWFybERpdmVyL3BlYXJsRGl2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNEVBQXlFO0FBQ3pFLGtGQUErRTtBQUMvRSwyREFBd0Q7QUFHeEQseURBQWlDO0FBQ2pDLG1FQUEyQztBQUMzQyxpRUFBeUM7QUFDekMsK0RBQXVDO0FBQ3ZDLG1FQUEyQztBQUMzQyxpRUFBeUM7QUFDekMscUVBQTZDO0FBQzdDLDJEQUFtQztBQUNuQyxxRUFBNkM7QUFDN0Msc0RBQW1EO0FBR25ELHVEQUFvRDtBQUNwRDs7O0dBR0c7QUFDSDtJQWdESSxlQUFlO0lBQ2YsWUFBb0IsYUFBNkI7UUFDN0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztRQUN0QyxNQUFNLElBQUksR0FBRyw2QkFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBRXhELElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJ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