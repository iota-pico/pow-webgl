var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var coreError_1 = require("@iota-pico/core/dist/error/coreError");
var tritsHasherFactory_1 = require("@iota-pico/crypto/dist/factories/tritsHasherFactory");
var trits_1 = require("@iota-pico/data/dist/data/trits");
var add_1 = __importDefault(require("../shaders/add"));
var checkCol_1 = __importDefault(require("../shaders/checkCol"));
var checkDo_1 = __importDefault(require("../shaders/checkDo"));
var checkK_1 = __importDefault(require("../shaders/checkK"));
var finalize_1 = __importDefault(require("../shaders/finalize"));
var headers_1 = __importDefault(require("../shaders/headers"));
var increment_1 = __importDefault(require("../shaders/increment"));
var init_1 = __importDefault(require("../shaders/init"));
var transform_1 = __importDefault(require("../shaders/transform"));
var webGLWorker_1 = require("../webGL/webGLWorker");
var pearlDiverState_1 = require("./pearlDiverState");
/**
 * PearlDiver.
 * Converted from https://github.com/iotaledger/curl.lib.js/blob/master/src/pearldiver.js
 */
var PearlDiver = /** @class */ (function () {
    /* @internal */
    function PearlDiver() {
        this._webGLWorker = new webGLWorker_1.WebGLWorker();
        var curl = tritsHasherFactory_1.TritsHasherFactory.instance().create("curl");
        var curlConstants = curl.getConstants();
        this._hashLength = curlConstants.HASH_LENGTH;
        this._stateLength = curlConstants.STATE_LENGTH;
        this._numberRounds = curlConstants.NUMBER_OF_ROUNDS;
        this._transactionLength = this._hashLength * 33;
        this._nonceLength = this._hashLength / 3;
        this._nonceStart = this._hashLength - this._nonceLength;
        this._webGLWorker.initialize(this._stateLength + 1, PearlDiver.TEXEL_SIZE);
        this._offset = 0;
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
    PearlDiver.initialize = function () {
        if (!PearlDiver.instance) {
            PearlDiver.instance = new PearlDiver();
        }
    };
    /**
     * Perform a search using trytes.
     * @param trytes The trytes to perform the search on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns Promise which resolves to the trytes from the search.
     */
    PearlDiver.prototype.searchWithTrytes = function (trytes, minWeightMagnitude) {
        return __awaiter(this, void 0, void 0, function () {
            var searchStates;
            return __generator(this, function (_a) {
                searchStates = this.prepare(trytes);
                return [2 /*return*/, this.search(searchStates, minWeightMagnitude)];
            });
        });
    };
    /**
     * Sets an offset to start pow search from
     * @param offset The offset to start the search from.
     */
    PearlDiver.prototype.setOffset = function (offset) {
        this._offset = offset;
    };
    /**
     * Interrupts the currently running proof-of-work function.
     */
    PearlDiver.prototype.interrupt = function () {
        if (this._state === pearlDiverState_1.PearlDiverState.searching) {
            this._state = pearlDiverState_1.PearlDiverState.interrupted;
        }
    };
    /**
     * Continues the proof-of-work that you just interrupted.
     */
    PearlDiver.prototype.resume = function () {
        this.searchDoNext();
    };
    /**
     * Removes the proof-of-work job that you had previously queued.
     */
    PearlDiver.prototype.remove = function () {
        this._queue.pop();
    };
    /* @internal */
    PearlDiver.prototype.prepare = function (transactionTrytes) {
        var curl = tritsHasherFactory_1.TritsHasherFactory.instance().create("curl");
        curl.initialize();
        var transactionTrits = trits_1.Trits.fromTrytes(transactionTrytes).toArray();
        curl.absorb(transactionTrits, 0, this._transactionLength - this._hashLength);
        var curlState = curl.getState();
        transactionTrits
            .slice(this._transactionLength - this._hashLength, this._transactionLength)
            .forEach(function (value, index) {
            curlState[index] = value;
        });
        return this.searchToPair(curlState);
    };
    /* @internal */
    PearlDiver.prototype.search = function (states, minWeight) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (minWeight >= this._hashLength || minWeight <= 0) {
                    return [2 /*return*/, Promise.reject(new coreError_1.CoreError("Bad Min-Weight Magnitude", { minWeight: minWeight }))];
                }
                // promise will complete when the search has completed
                // tslint:disable-next-line:promise-must-complete
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this._queue.push({
                            states: states,
                            minWeightMagnitude: minWeight,
                            callback: resolve
                        });
                        if (_this._state === pearlDiverState_1.PearlDiverState.ready) {
                            _this.searchDoNext();
                        }
                    })];
            });
        });
    };
    /* @internal */
    PearlDiver.prototype.searchToPair = function (state) {
        var states = {
            low: new Int32Array(this._stateLength),
            high: new Int32Array(this._stateLength)
        };
        state.forEach(function (trit, index) {
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
    };
    /* @internal */
    PearlDiver.prototype.searchOffset = function (states, offset) {
        states.low[offset + 0] = PearlDiver.LOW_0;
        states.low[offset + 1] = PearlDiver.LOW_1;
        states.low[offset + 2] = PearlDiver.LOW_2;
        states.low[offset + 3] = PearlDiver.LOW_3;
        states.high[offset + 0] = PearlDiver.HIGH_0;
        states.high[offset + 1] = PearlDiver.HIGH_1;
        states.high[offset + 2] = PearlDiver.HIGH_2;
        states.high[offset + 3] = PearlDiver.HIGH_3;
    };
    /* @internal */
    PearlDiver.prototype.searchDoNext = function () {
        var next = this._queue.shift();
        if (this._state !== pearlDiverState_1.PearlDiverState.searching) {
            this._state = pearlDiverState_1.PearlDiverState.searching;
            this.webGLFindNonce(next);
        }
        else {
            this._state = pearlDiverState_1.PearlDiverState.ready;
        }
    };
    /* @internal */
    PearlDiver.prototype.webGLFindNonce = function (searchObject) {
        var _this = this;
        this.webGLWriteBuffers(searchObject.states);
        this._webGLWorker.writeData(this._currentBuffer);
        this._webGLWorker.runProgram("init", 1, { name: "gr_offset", value: this._offset });
        setTimeout(function () { return _this.webGLSearch(searchObject); }, 1);
    };
    /* @internal */
    PearlDiver.prototype.webGLWriteBuffers = function (states) {
        for (var i = 0; i < this._stateLength; i++) {
            this._currentBuffer[i * PearlDiver.TEXEL_SIZE] = states.low[i];
            this._currentBuffer[i * PearlDiver.TEXEL_SIZE + 1] = states.high[i];
            this._currentBuffer[i * PearlDiver.TEXEL_SIZE + 2] = states.low[i];
            this._currentBuffer[i * PearlDiver.TEXEL_SIZE + 3] = states.high[i];
        }
    };
    /* @internal */
    PearlDiver.prototype.webGLSearch = function (searchObject) {
        var _this = this;
        this._webGLWorker.runProgram("increment", 1);
        this._webGLWorker.runProgram("twist", this._numberRounds);
        this._webGLWorker.runProgram("check", 1, { name: "minWeightMagnitude", value: searchObject.minWeightMagnitude });
        this._webGLWorker.runProgram("col_check", 1);
        if (this._webGLWorker.readData(this._stateLength, 0, 1, 1)[2] === -1) {
            if (this._state === pearlDiverState_1.PearlDiverState.interrupted) {
                return this.saveSearch(searchObject);
            }
            setTimeout(function () { return _this.webGLSearch(searchObject); }, 1);
        }
        else {
            this._webGLWorker.runProgram("finalize", 1);
            var nonce = this._webGLWorker.readData(0, 0, this._webGLWorker.getDimensions().x, 1)
                .reduce(this.pack(4), [])
                .slice(0, this._hashLength)
                .map(function (x) { return x[3]; });
            searchObject.callback(trits_1.Trits.fromArray(nonce).toTrytes());
            this.searchDoNext();
        }
    };
    /* @internal */
    PearlDiver.prototype.saveSearch = function (searchObject) {
        this._currentBuffer
            .reduce(this.pack(4), [])
            .slice(0, this._stateLength)
            .reduce(function (a, v) { return a.map(function (c, i) { return c.push(v[i]); }) && a; }, [[], []])
            .reduce(function (a, v, i) { return (i % 2 ? a.set("high", v) : a.set("low", v)) && a; }, new Map())
            .forEach(function (v, k) { return k === "low" ? searchObject.states.low = v : searchObject.states.high = v; });
        this._queue.unshift(searchObject);
    };
    /* @internal */
    PearlDiver.prototype.pack = function (l) {
        return function (r, currentValue, currentIndex) { return (currentIndex % l === 0 ? r.push([currentValue]) : r[r.length - 1].push(currentValue)) && r; };
    };
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
    return PearlDiver;
}());
exports.PearlDiver = PearlDiver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVhcmxEaXZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9wZWFybERpdmVyL3BlYXJsRGl2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0VBQWlFO0FBQ2pFLDBGQUF5RjtBQUN6Rix5REFBd0Q7QUFFeEQsdURBQWlDO0FBQ2pDLGlFQUEyQztBQUMzQywrREFBeUM7QUFDekMsNkRBQXVDO0FBQ3ZDLGlFQUEyQztBQUMzQywrREFBeUM7QUFDekMsbUVBQTZDO0FBQzdDLHlEQUFtQztBQUNuQyxtRUFBNkM7QUFDN0Msb0RBQW1EO0FBR25ELHFEQUFvRDtBQUNwRDs7O0dBR0c7QUFDSDtJQWtESSxlQUFlO0lBQ2Y7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO1FBQ3RDLElBQU0sSUFBSSxHQUFHLHVDQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxRCxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUMsV0FBVyxDQUFDO1FBQzdDLElBQUksQ0FBQyxZQUFZLEdBQUcsYUFBYSxDQUFDLFlBQVksQ0FBQztRQUMvQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNwRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUV4RCxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUs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