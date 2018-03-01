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
var cryptoError_1 = require("@iota-pico/crypto/dist/error/cryptoError");
var spongeFactory_1 = require("@iota-pico/crypto/dist/factories/spongeFactory");
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
        var curl = spongeFactory_1.SpongeFactory.instance().create("curl");
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
        var curl = spongeFactory_1.SpongeFactory.instance().create("curl");
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
                    return [2 /*return*/, Promise.reject(new cryptoError_1.CryptoError("Bad Min-Weight Magnitude", { minWeight: minWeight }))];
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
            searchObject.callback(trits_1.Trits.fromNumberArray(nonce).toTrytes());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVhcmxEaXZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9wZWFybERpdmVyL3BlYXJsRGl2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0VBQXVFO0FBQ3ZFLGdGQUErRTtBQUMvRSx5REFBd0Q7QUFFeEQsdURBQWlDO0FBQ2pDLGlFQUEyQztBQUMzQywrREFBeUM7QUFDekMsNkRBQXVDO0FBQ3ZDLGlFQUEyQztBQUMzQywrREFBeUM7QUFDekMsbUVBQTZDO0FBQzdDLHlEQUFtQztBQUNuQyxtRUFBNkM7QUFDN0Msb0RBQW1EO0FBR25ELHFEQUFvRDtBQUNwRDs7O0dBR0c7QUFDSDtJQWtESSxlQUFlO0lBQ2Y7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO1FBQ3RDLElBQU0sSUFBSSxHQUFHLDZCQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQyxXQUFXLENBQUM7UUFDN0MsSUFBSSxDQUFDLFlBQVksR0FBRyxhQUFhLENBQUMsWUFBWSxDQUFDO1FBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDLGdCQUFnQixDQUFDO1FBQ3BELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBRXhELElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxD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