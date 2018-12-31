Object.defineProperty(exports, "__esModule", { value: true });
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
const spongeFactory_1 = require("@iota-pico/crypto/dist/factories/spongeFactory");
const trits_1 = require("@iota-pico/data/dist/data/trits");
const add_1 = require("../shaders/add");
const checkCol_1 = require("../shaders/checkCol");
const checkDo_1 = require("../shaders/checkDo");
const checkK_1 = require("../shaders/checkK");
const finalize_1 = require("../shaders/finalize");
const headers_1 = require("../shaders/headers");
const increment_1 = require("../shaders/increment");
const init_1 = require("../shaders/init");
const transform_1 = require("../shaders/transform");
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
        this._webGLWorker.addProgram("init", headers_1.headers + add_1.add + init_1.init, "gr_offset");
        this._webGLWorker.addProgram("increment", headers_1.headers + add_1.add + increment_1.increment);
        this._webGLWorker.addProgram("twist", headers_1.headers + transform_1.transform);
        this._webGLWorker.addProgram("check", headers_1.headers + checkDo_1.checkDo + checkK_1.checkK, "minWeightMagnitude");
        this._webGLWorker.addProgram("col_check", headers_1.headers + checkCol_1.checkCol);
        this._webGLWorker.addProgram("finalize", headers_1.headers + checkDo_1.checkDo + finalize_1.finalize);
        this._state = pearlDiverState_1.PearlDiverState.ready;
        this._queue = [];
    }
    /**
     * Initialize the PearlDiver main instance.
     * @param webGLPlatform The platform so initialize the pearl diver with.
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
    async searchWithTrytes(trytes, minWeightMagnitude) {
        const searchStates = this.prepare(trytes);
        return this.search(searchStates, minWeightMagnitude);
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
    async search(states, minWeight) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVhcmxEaXZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wZWFybERpdmVyL3BlYXJsRGl2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDRFQUF5RTtBQUN6RSxrRkFBK0U7QUFDL0UsMkRBQXdEO0FBR3hELHdDQUFxQztBQUNyQyxrREFBK0M7QUFDL0MsZ0RBQTZDO0FBQzdDLDhDQUEyQztBQUMzQyxrREFBK0M7QUFDL0MsZ0RBQTZDO0FBQzdDLG9EQUFpRDtBQUNqRCwwQ0FBdUM7QUFDdkMsb0RBQWlEO0FBQ2pELHNEQUFtRDtBQUduRCx1REFBb0Q7QUFDcEQ7OztHQUdHO0FBQ0gsTUFBYSxVQUFVO0lBZ0RuQixlQUFlO0lBQ2YsWUFBb0IsYUFBNkI7UUFDN0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztRQUN0QyxNQUFNLElBQUksR0FBRyw2QkFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBRXhELElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENB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