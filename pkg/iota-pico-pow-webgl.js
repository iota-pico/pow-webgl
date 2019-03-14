(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@iota-pico/core/dist/helpers/numberHelper"), require("@iota-pico/core/dist/helpers/objectHelper"), require("@iota-pico/crypto/dist/error/cryptoError"), require("@iota-pico/crypto/dist/factories/spongeFactory"), require("@iota-pico/crypto/dist/proofOfWork/proofOfWorkBase"), require("@iota-pico/data/dist/data/trits"), require("@iota-pico/data/dist/data/trytes"));
	else if(typeof define === 'function' && define.amd)
		define("@iota-pico/pow-webgl", ["@iota-pico/core/dist/helpers/numberHelper", "@iota-pico/core/dist/helpers/objectHelper", "@iota-pico/crypto/dist/error/cryptoError", "@iota-pico/crypto/dist/factories/spongeFactory", "@iota-pico/crypto/dist/proofOfWork/proofOfWorkBase", "@iota-pico/data/dist/data/trits", "@iota-pico/data/dist/data/trytes"], factory);
	else if(typeof exports === 'object')
		exports["@iota-pico/pow-webgl"] = factory(require("@iota-pico/core/dist/helpers/numberHelper"), require("@iota-pico/core/dist/helpers/objectHelper"), require("@iota-pico/crypto/dist/error/cryptoError"), require("@iota-pico/crypto/dist/factories/spongeFactory"), require("@iota-pico/crypto/dist/proofOfWork/proofOfWorkBase"), require("@iota-pico/data/dist/data/trits"), require("@iota-pico/data/dist/data/trytes"));
	else
		root["IotaPicoPowWebgl"] = factory(root["@iota-pico/core/dist/helpers/numberHelper"], root["@iota-pico/core/dist/helpers/objectHelper"], root["@iota-pico/crypto/dist/error/cryptoError"], root["@iota-pico/crypto/dist/factories/spongeFactory"], root["@iota-pico/crypto/dist/proofOfWork/proofOfWorkBase"], root["@iota-pico/data/dist/data/trits"], root["@iota-pico/data/dist/data/trytes"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_helpers_numberHelper__, __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_helpers_objectHelper__, __WEBPACK_EXTERNAL_MODULE__iota_pico_crypto_dist_error_cryptoError__, __WEBPACK_EXTERNAL_MODULE__iota_pico_crypto_dist_factories_spongeFactory__, __WEBPACK_EXTERNAL_MODULE__iota_pico_crypto_dist_proofOfWork_proofOfWorkBase__, __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_trits__, __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_trytes__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist.es6/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist.es6/index.js":
/*!***************************!*\
  !*** ./dist.es6/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/**
 * Combined index of all the modules.
 */
tslib_1.__exportStar(__webpack_require__(/*! ./proofOfWorkWebGl */ "./dist.es6/proofOfWorkWebGl.js"), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7R0FFRztBQUNILDZEQUFtQyJ9

/***/ }),

/***/ "./dist.es6/pearlDiver/pearlDiver.js":
/*!*******************************************!*\
  !*** ./dist.es6/pearlDiver/pearlDiver.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "@iota-pico/core/dist/helpers/objectHelper");
const spongeFactory_1 = __webpack_require__(/*! @iota-pico/crypto/dist/factories/spongeFactory */ "@iota-pico/crypto/dist/factories/spongeFactory");
const trits_1 = __webpack_require__(/*! @iota-pico/data/dist/data/trits */ "@iota-pico/data/dist/data/trits");
const add_1 = __webpack_require__(/*! ../shaders/add */ "./dist.es6/shaders/add.js");
const checkCol_1 = __webpack_require__(/*! ../shaders/checkCol */ "./dist.es6/shaders/checkCol.js");
const checkDo_1 = __webpack_require__(/*! ../shaders/checkDo */ "./dist.es6/shaders/checkDo.js");
const checkK_1 = __webpack_require__(/*! ../shaders/checkK */ "./dist.es6/shaders/checkK.js");
const finalize_1 = __webpack_require__(/*! ../shaders/finalize */ "./dist.es6/shaders/finalize.js");
const headers_1 = __webpack_require__(/*! ../shaders/headers */ "./dist.es6/shaders/headers.js");
const increment_1 = __webpack_require__(/*! ../shaders/increment */ "./dist.es6/shaders/increment.js");
const init_1 = __webpack_require__(/*! ../shaders/init */ "./dist.es6/shaders/init.js");
const transform_1 = __webpack_require__(/*! ../shaders/transform */ "./dist.es6/shaders/transform.js");
const webGLWorker_1 = __webpack_require__(/*! ../webGL/webGLWorker */ "./dist.es6/webGL/webGLWorker.js");
const pearlDiverState_1 = __webpack_require__(/*! ./pearlDiverState */ "./dist.es6/pearlDiver/pearlDiverState.js");
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
    searchWithTrytes(trytes, minWeightMagnitude) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVhcmxEaXZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wZWFybERpdmVyL3BlYXJsRGl2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0RUFBeUU7QUFDekUsa0ZBQStFO0FBQy9FLDJEQUF3RDtBQUd4RCx3Q0FBcUM7QUFDckMsa0RBQStDO0FBQy9DLGdEQUE2QztBQUM3Qyw4Q0FBMkM7QUFDM0Msa0RBQStDO0FBQy9DLGdEQUE2QztBQUM3QyxvREFBaUQ7QUFDakQsMENBQXVDO0FBQ3ZDLG9EQUFpRDtBQUNqRCxzREFBbUQ7QUFHbkQsdURBQW9EO0FBQ3BEOzs7R0FHRztBQUNILE1BQWEsVUFBVTtJQWdEbkIsZUFBZTtJQUNmLFlBQW9CLGFBQTZCO1FBQzdDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7UUFDdEMsTUFBTSxJQUFJLEdBQUcsNkJBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUV4RCxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxD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

/***/ }),

/***/ "./dist.es6/pearlDiver/pearlDiverState.js":
/*!************************************************!*\
  !*** ./dist.es6/pearlDiver/pearlDiverState.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * PearlDiver State.
 */
var PearlDiverState;
(function (PearlDiverState) {
    PearlDiverState[PearlDiverState["ready"] = 0] = "ready";
    PearlDiverState[PearlDiverState["searching"] = 1] = "searching";
    PearlDiverState[PearlDiverState["interrupted"] = -1] = "interrupted";
})(PearlDiverState = exports.PearlDiverState || (exports.PearlDiverState = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVhcmxEaXZlclN0YXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3BlYXJsRGl2ZXIvcGVhcmxEaXZlclN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRztBQUNILElBQVksZUFJWDtBQUpELFdBQVksZUFBZTtJQUN2Qix1REFBUyxDQUFBO0lBQ1QsK0RBQWEsQ0FBQTtJQUNiLG9FQUFnQixDQUFBO0FBQ3BCLENBQUMsRUFKVyxlQUFlLEdBQWYsdUJBQWUsS0FBZix1QkFBZSxRQUkxQiJ9

/***/ }),

/***/ "./dist.es6/proofOfWorkWebGl.js":
/*!**************************************!*\
  !*** ./dist.es6/proofOfWorkWebGl.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "@iota-pico/core/dist/helpers/numberHelper");
const objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "@iota-pico/core/dist/helpers/objectHelper");
const cryptoError_1 = __webpack_require__(/*! @iota-pico/crypto/dist/error/cryptoError */ "@iota-pico/crypto/dist/error/cryptoError");
const proofOfWorkBase_1 = __webpack_require__(/*! @iota-pico/crypto/dist/proofOfWork/proofOfWorkBase */ "@iota-pico/crypto/dist/proofOfWork/proofOfWorkBase");
const trytes_1 = __webpack_require__(/*! @iota-pico/data/dist/data/trytes */ "@iota-pico/data/dist/data/trytes");
const pearlDiver_1 = __webpack_require__(/*! ./pearlDiver/pearlDiver */ "./dist.es6/pearlDiver/pearlDiver.js");
/**
 * ProofOfWork implementation using WebGL.
 */
class ProofOfWorkWebGl extends proofOfWorkBase_1.ProofOfWorkBase {
    /**
     * Create a new instance of ProofOfWork.
     * @param webGLPlatform Provides platform specific functions, optional mostly used for testing.
     * @param timeService Service to get the time for attachments.
     */
    constructor(webGLPlatform, timeService) {
        super(timeService);
        if (objectHelper_1.ObjectHelper.isEmpty(webGLPlatform)) {
            this._webGLPlatform = {
                getWindow: () => window,
                getDocument: (window) => window.document,
                getCanvas: (document) => document.createElement("canvas"),
                getWebGL: (canvas) => {
                    const attr = { alpha: false, antialias: false };
                    const gl = canvas.getContext("webgl2", attr);
                    return gl;
                }
            };
        }
        else {
            this._webGLPlatform = webGLPlatform;
        }
    }
    /**
     * Allow the proof of work to perform any initialization.
     * Will throw an exception if the implementation is not supported.
     * @returns Promise.
     */
    initialize() {
        const _super = Object.create(null, {
            initialize: { get: () => super.initialize }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield _super.initialize.call(this);
            return new Promise((resolve, reject) => {
                try {
                    pearlDiver_1.PearlDiver.initialize(this._webGLPlatform);
                    this._isInitialized = true;
                    resolve();
                }
                catch (err) {
                    reject(err);
                }
            });
        });
    }
    /**
     * Perform a proof of work on a single item.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */
    singlePow(trytes, minWeightMagnitude) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this._isInitialized) {
                throw new cryptoError_1.CryptoError("WebGL is not initialized, have you called initialize");
            }
            if (!objectHelper_1.ObjectHelper.isType(trytes, trytes_1.Trytes)) {
                throw new cryptoError_1.CryptoError("The trytes must be an object of type Trytes");
            }
            if (!numberHelper_1.NumberHelper.isInteger(minWeightMagnitude) || minWeightMagnitude <= 0) {
                throw new cryptoError_1.CryptoError("The minWeightMagnitude must be > 0");
            }
            const nonce = yield pearlDiver_1.PearlDiver.instance.searchWithTrytes(trytes, minWeightMagnitude);
            const trytesString = trytes.toString();
            const nonceString = nonce.toString();
            return trytes_1.Trytes.fromString(trytesString.substr(0, trytesString.length - nonceString.length).concat(nonceString));
        });
    }
}
exports.ProofOfWorkWebGl = ProofOfWorkWebGl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvb2ZPZldvcmtXZWJHbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9vZk9mV29ya1dlYkdsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNEVBQXlFO0FBQ3pFLDRFQUF5RTtBQUV6RSwwRUFBdUU7QUFDdkUsd0ZBQXFGO0FBQ3JGLDZEQUEwRDtBQUUxRCx3REFBcUQ7QUFHckQ7O0dBRUc7QUFDSCxNQUFhLGdCQUFpQixTQUFRLGlDQUFlO0lBT2pEOzs7O09BSUc7SUFDSCxZQUFZLGFBQThCLEVBQUUsV0FBMEI7UUFDbEUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRW5CLElBQUksMkJBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDckMsSUFBSSxDQUFDLGNBQWMsR0FBRztnQkFDbEIsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU07Z0JBQ3ZCLFdBQVcsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVE7Z0JBQ3hDLFNBQVMsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7Z0JBQ3pELFFBQVEsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFO29CQUNqQixNQUFNLElBQUksR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDO29CQUNoRCxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDN0MsT0FBaUMsRUFBRSxDQUFDO2dCQUN4QyxDQUFDO2FBQ0osQ0FBQztTQUNMO2FBQU07WUFDSCxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztTQUN2QztJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ1UsVUFBVTs7Ozs7WUFDbkIsTUFBTSxPQUFNLFVBQVUsV0FBRSxDQUFDO1lBQ3pCLE9BQU8sSUFBSSxPQUFPLENBQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBQ3pDLElBQUk7b0JBQ0EsdUJBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUMzQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztvQkFDM0IsT0FBTyxFQUFFLENBQUM7aUJBQ2I7Z0JBQUMsT0FBTyxHQUFHLEVBQUU7b0JBQ1YsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNmO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0tBQUE7SUFFRDs7Ozs7T0FLRztJQUNVLFNBQVMsQ0FBQyxNQUFjLEVBQUUsa0JBQTBCOztZQUM3RCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDdEIsTUFBTSxJQUFJLHlCQUFXLENBQUMsc0RBQXNELENBQUMsQ0FBQzthQUNqRjtZQUNELElBQUksQ0FBQywyQkFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsZUFBTSxDQUFDLEVBQUU7Z0JBQ3RDLE1BQU0sSUFBSSx5QkFBVyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7YUFDeEU7WUFDRCxJQUFJLENBQUMsMkJBQVksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsSUFBSSxrQkFBa0IsSUFBSSxDQUFDLEVBQUU7Z0JBQ3hFLE1BQU0sSUFBSSx5QkFBVyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7YUFDL0Q7WUFFRCxNQUFNLEtBQUssR0FBRyxNQUFNLHVCQUFVLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1lBRXJGLE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN2QyxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDckMsT0FBTyxlQUFNLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ25ILENBQUM7S0FBQTtDQUNKO0FBeEVELDRDQXdFQyJ9

/***/ }),

/***/ "./dist.es6/shaders/add.js":
/*!*********************************!*\
  !*** ./dist.es6/shaders/add.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Shaders add.
 */
exports.add = `
int sum (int a, int b) {
  int my_sum = a + b;
  return my_sum == 2 ? -1 : (my_sum == -2) ? 1 : my_sum;
}
int cons (int a, int b) {
  return (a == 1 && b == 1)? 1 : (a == -1 && b == -1) ? -1 : 0;
}
int any_t (int a, int b) {
  int my_any = a + b;
  return my_any == 0 ? 0 : (my_any > 0) ? 1 : -1;
}
ivec2 full_adder(int a, int b, int c) {
  int c_a, c_b, sum_ab, c_s;

  c_a    = cons(a,b);
  sum_ab = sum(a,b);
  c_b    = cons(sum_ab,c);
  c_s    = any_t(c_a, c_b);

  return ivec2(sum(sum_ab, c), c_s);
}
ivec2 get_sum_to_index(int from, int to, int number_to_add, int row) {
  int trit_to_add, trit_at_index, pow, carry, num_carry;
  ivec2 read_in, sum_out, out_trit;
  pow = 1;
  carry = 0;
  num_carry = 0;

  for(int i = from; i < to; i++) {
    //if(trit_to_add == 0 && sum_out.t == 0) continue;

    read_in = read_at ( ivec2 (i, row)).rg;

    trit_to_add = ((number_to_add / pow) % 3) + num_carry;
    num_carry = trit_to_add > 1 ? 1 : 0;
    trit_to_add = (trit_to_add == 2 ? -1 : (trit_to_add == 3 ? 0 : trit_to_add));

    sum_out = full_adder(
      (read_in.s == LOW_BITS ? 1 : read_in.t == LOW_BITS? -1 : 0),
      trit_to_add,
      carry
    );

    if(my_coord.x == i) break;
    carry = sum_out.t;
    pow *=3;
  }
  if(sum_out.s == 0) {
    return ivec2(HIGH_BITS);
  } else if (sum_out.s == 1) {
    return ivec2(LOW_BITS, HIGH_BITS);
  } else {
    return ivec2(HIGH_BITS, LOW_BITS);
  }
}
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NoYWRlcnMvYWRkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRztBQUNVLFFBQUEsR0FBRyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXdEbEIsQ0FBQyJ9

/***/ }),

/***/ "./dist.es6/shaders/checkCol.js":
/*!**************************************!*\
  !*** ./dist.es6/shaders/checkCol.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Shaders check_col.
 */
exports.checkCol = `
void main() {
  init();
  ivec4 my_vec = read();
  int i;
  if(my_coord.x == STATE_LENGTH && my_coord.y == 0) {
    my_vec.b = 0;
    if(my_vec.a == 0) {
      ivec4 read_vec;
      my_vec.b = -1;
      for(i = 1; i < int(size.y); i++) {
        read_vec = read_at( ivec2( STATE_LENGTH, i));
        if(read_vec.a != 0) {
          my_vec.a = read_vec.a;
          my_vec.b = i;
          break;
        }
      }
    }
  }
  commit(my_vec);
}
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tDb2wuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2hhZGVycy9jaGVja0NvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7QUFDVSxRQUFBLFFBQVEsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXNCdkIsQ0FBQyJ9

/***/ }),

/***/ "./dist.es6/shaders/checkDo.js":
/*!*************************************!*\
  !*** ./dist.es6/shaders/checkDo.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Shaders check_do.
 */
exports.checkDo = `
int check(int row, int min_weight_magnitude) {
  int nonce_probe, i;
  ivec2 r_texel;
  nonce_probe = HIGH_BITS;
  for(i = min_weight_magnitude; i-- > 0; ) {
    r_texel = read_at(ivec2(HASH_LENGTH - 1 - i, row)).ba;
    nonce_probe &= ~(r_texel.s ^ r_texel.t);
    if(nonce_probe == 0) break;
  }
  return nonce_probe;
}
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tEby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zaGFkZXJzL2NoZWNrRG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHO0FBQ1UsUUFBQSxPQUFPLEdBQUc7Ozs7Ozs7Ozs7OztDQVl0QixDQUFDIn0=

/***/ }),

/***/ "./dist.es6/shaders/checkK.js":
/*!************************************!*\
  !*** ./dist.es6/shaders/checkK.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Shaders check_k.
 */
exports.checkK = `
uniform int minWeightMagnitude;
void main() {
  init();
  ivec4 my_vec = read();
  if(my_coord.x == STATE_LENGTH) {
    my_vec.r = minWeightMagnitude;
    my_vec.a = check(my_coord.y, minWeightMagnitude);
  }
  commit(my_vec);
}
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tLLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NoYWRlcnMvY2hlY2tLLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRztBQUNVLFFBQUEsTUFBTSxHQUFHOzs7Ozs7Ozs7OztDQVdyQixDQUFDIn0=

/***/ }),

/***/ "./dist.es6/shaders/finalize.js":
/*!**************************************!*\
  !*** ./dist.es6/shaders/finalize.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Shaders finalize.
 */
exports.finalize = `
void main() {
  init();
  ivec4 my_vec = read();
  if(my_coord.y == 0 && my_coord.x == STATE_LENGTH) {
    my_vec.g = check(my_vec.b, my_vec.r);
  }
  if(my_coord.y == 0 && my_coord.x < HASH_LENGTH) {
    ivec4 info_vec = read_at(ivec2(STATE_LENGTH, 0));
    int nonce_probe = info_vec.a;
    int row = info_vec.b;
    ivec4 hash_vec = read_at(ivec2(my_coord.x, row));
    my_vec.a = (hash_vec.r & nonce_probe) == 0? 1 : ((hash_vec.g & nonce_probe) == 0? -1 : 0);
  }
  commit(my_vec);
}
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluYWxpemUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2hhZGVycy9maW5hbGl6ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7QUFDVSxRQUFBLFFBQVEsR0FBRzs7Ozs7Ozs7Ozs7Ozs7OztDQWdCdkIsQ0FBQyJ9

/***/ }),

/***/ "./dist.es6/shaders/headers.js":
/*!*************************************!*\
  !*** ./dist.es6/shaders/headers.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Shaders add.
 */
exports.headers = `
#define HASH_LENGTH 243
#define NUMBER_OF_ROUNDS 81
#define INCREMENT_START HASH_LENGTH - 64
#define STATE_LENGTH 3 * HASH_LENGTH
#define HALF_LENGTH 364
#define HIGH_BITS 0xFFFFFFFF
#define LOW_BITS 0x00000000
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zaGFkZXJzL2hlYWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHO0FBQ1UsUUFBQSxPQUFPLEdBQUc7Ozs7Ozs7O0NBUXRCLENBQUMifQ==

/***/ }),

/***/ "./dist.es6/shaders/increment.js":
/*!***************************************!*\
  !*** ./dist.es6/shaders/increment.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Shaders increment.
 */
exports.increment = `
void main() {
  init();
  ivec4 my_vec = read();
  if(my_coord.x >= INCREMENT_START && my_coord.x < HASH_LENGTH ) {
    my_vec.rg = get_sum_to_index(INCREMENT_START, HASH_LENGTH, 1, my_coord.y);
  }
  if(my_coord.x == STATE_LENGTH ) {
    my_vec.rg = ivec2(0);
  }
  my_vec.ba = my_vec.rg;
  commit(my_vec);
}
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5jcmVtZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NoYWRlcnMvaW5jcmVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRztBQUNVLFFBQUEsU0FBUyxHQUFHOzs7Ozs7Ozs7Ozs7O0NBYXhCLENBQUMifQ==

/***/ }),

/***/ "./dist.es6/shaders/init.js":
/*!**********************************!*\
  !*** ./dist.es6/shaders/init.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Shaders init.
 */
exports.init = `
uniform int gr_offset;
ivec4 offset() {
  if(my_coord.x >= HASH_LENGTH / 3 && my_coord.x < HASH_LENGTH / 3 * 2 ) {
    ivec4 my_vec;
    my_vec.rg = get_sum_to_index(HASH_LENGTH / 3, HASH_LENGTH / 3 * 2, my_coord.y + gr_offset, 0);
    return my_vec;
  } else {
    return read_at(ivec2(my_coord.x,0));
  }
}
void main() {
  init();
  commit(offset());
}
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zaGFkZXJzL2luaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHO0FBQ1UsUUFBQSxJQUFJLEdBQUc7Ozs7Ozs7Ozs7Ozs7OztDQWVuQixDQUFDIn0=

/***/ }),

/***/ "./dist.es6/shaders/transform.js":
/*!***************************************!*\
  !*** ./dist.es6/shaders/transform.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Shaders transform.
 */
exports.transform = `
ivec2 twist() {
  int alpha, beta, gamma, delta;
  ivec4 v1, v2;
  int j = my_coord.x;

  v1 = read_at(ivec2(j == 0? 0:(((j - 1)%2)+1)*HALF_LENGTH - ((j-1)>>1), my_coord.y));
  v2 = read_at(ivec2(((j%2)+1)*HALF_LENGTH - ((j)>>1), my_coord.y));
  alpha = v1.b;
  beta = v1.a;
  gamma = v2.a;
  delta = (alpha | (~gamma)) & (v2.b ^ beta);//v2.b === state_low[t2]

  return ivec2(~delta, (alpha ^ gamma) | delta);
}
void main() {
  init();
  ivec4 my_vec = read();
  if(my_coord.x < STATE_LENGTH)
    my_vec.ba = twist();
  commit(my_vec);
}
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NoYWRlcnMvdHJhbnNmb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRztBQUNVLFFBQUEsU0FBUyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBc0J4QixDQUFDIn0=

/***/ }),

/***/ "./dist.es6/webGL/stdlib.js":
/*!**********************************!*\
  !*** ./dist.es6/webGL/stdlib.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Stdlib.
 */
exports.stdlib = `#version 300 es
precision highp float;
precision highp int;
precision highp isampler2D;
uniform isampler2D u_texture;
in vec2 pos;
out ivec4 color;
//out int isFinished;

vec2 size;
ivec2 my_coord;

void init(void) {
  //size = vec2(textureSize(u_texture, 0) - 1);
  size = vec2(textureSize(u_texture, 0));
  my_coord = ivec2(pos * size);
}

ivec4 read(void) {
  return texture(u_texture, pos);
}

ivec4 read_at(ivec2 coord) {
  return texelFetch(u_texture, coord, 0);
}

void commit(ivec4 val) {
  color = val;
}
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RkbGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3dlYkdML3N0ZGxpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7QUFDVSxRQUFBLE1BQU0sR0FDbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBNkJDLENBQUMifQ==

/***/ }),

/***/ "./dist.es6/webGL/vertexShaderCode.js":
/*!********************************************!*\
  !*** ./dist.es6/webGL/vertexShaderCode.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Vertex Shader code.
 */
exports.vertexShaderCode = `#version 300 es
layout(location = 0) in vec2 position;
layout(location = 1) in vec2 texture;
out vec2 pos;

void main(void) {
  pos = texture;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGV4U2hhZGVyQ29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy93ZWJHTC92ZXJ0ZXhTaGFkZXJDb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRztBQUNVLFFBQUEsZ0JBQWdCLEdBQzdCOzs7Ozs7OztFQVFFLENBQUMifQ==

/***/ }),

/***/ "./dist.es6/webGL/webGLHelper.js":
/*!***************************************!*\
  !*** ./dist.es6/webGL/webGLHelper.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "@iota-pico/core/dist/helpers/objectHelper");
const cryptoError_1 = __webpack_require__(/*! @iota-pico/crypto/dist/error/cryptoError */ "@iota-pico/crypto/dist/error/cryptoError");
/**
 * Helper functions for use with WebGL.
 */
class WebGLHelper {
    /**
     * Create a WebGL Context.
     * @param webGLPlatform The platform to create the context with.
     * @returns The context if successfuly or throws an error if it cannot be created.
     */
    static createContext(webGLPlatform) {
        const window = webGLPlatform.getWindow();
        if (!objectHelper_1.ObjectHelper.isEmpty(window) && typeof window !== "undefined") {
            const document = webGLPlatform.getDocument(window);
            if (!objectHelper_1.ObjectHelper.isEmpty(document)) {
                const canvas = webGLPlatform.getCanvas(document);
                if (!objectHelper_1.ObjectHelper.isEmpty(canvas)) {
                    const gl = webGLPlatform.getWebGL(canvas);
                    if (objectHelper_1.ObjectHelper.isEmpty(gl)) {
                        throw new cryptoError_1.CryptoError("Can not create a WebGL context on a <canvas> element.", { userAgent: window.navigator.userAgent });
                    }
                    return gl;
                }
                throw new cryptoError_1.CryptoError("The HTML5 <canvas> element is not available in your browser.", { userAgent: window.navigator.userAgent });
            }
            throw new cryptoError_1.CryptoError("window.document is not available, you must be running in an environment with WebGL.");
        }
        throw new cryptoError_1.CryptoError("window is not available, you must be running in an environment with WebGL.");
    }
    /**
     * Create a new WebGL buffer.
     * @param gl The WebGL rendering context.
     * @param data The data to add to the buffer.
     * @param arrayType The data type for the buffer.
     * @param target A GL Enum specifying the binding point (target).
     * @returns The WebGL buffer.
     */
    static createBuffer(gl, data, arrayType, target) {
        const buf = gl.createBuffer();
        gl.bindBuffer((target || gl.ARRAY_BUFFER), buf);
        gl.bufferData((target || gl.ARRAY_BUFFER), new (arrayType || Float32Array)(data), gl.STATIC_DRAW);
        return buf;
    }
    /**
     * Transfer data onto clamped texture and turn off any filtering
     * @param gl The WebGL rendering context.
     * @param pixelData The pixel data to create the view from.
     * @param dimensions The dimensions to create the texture.
     * @returns The texture.
     */
    static createTexture(gl, pixelData, dimensions) {
        const texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32I, dimensions.x, dimensions.y, 0, gl.RGBA_INTEGER, gl.INT, pixelData);
        gl.bindTexture(gl.TEXTURE_2D, null);
        return texture;
    }
    /**
     * Set the texure into the framebuffer.
     * @param gl The WebGL rendering context.
     * @param frameBuffer The frame buffer to set the text in to.
     * @param texture The texture to set in to the framebuffer.
     */
    static frameBufferSetTexture(gl, frameBuffer, texture) {
        gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
        // Test for mobile bug MDN->WebGL_best_practices, bullet 7
        const frameBufferStatus = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
        if (frameBufferStatus !== gl.FRAMEBUFFER_COMPLETE) {
            throw new cryptoError_1.CryptoError("Error attaching float texture to framebuffer. Your device is probably incompatible.");
        }
    }
}
exports.WebGLHelper = WebGLHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViR0xIZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvd2ViR0wvd2ViR0xIZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDRFQUF5RTtBQUN6RSwwRUFBdUU7QUFJdkU7O0dBRUc7QUFDSCxNQUFhLFdBQVc7SUFDcEI7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxhQUFhLENBQUMsYUFBNkI7UUFDckQsTUFBTSxNQUFNLEdBQUcsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRXpDLElBQUksQ0FBQywyQkFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7WUFDaEUsTUFBTSxRQUFRLEdBQUcsYUFBYSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUVuRCxJQUFJLENBQUMsMkJBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ2pDLE1BQU0sTUFBTSxHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBRWpELElBQUksQ0FBQywyQkFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDL0IsTUFBTSxFQUFFLEdBQUcsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFFMUMsSUFBSSwyQkFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRTt3QkFDMUIsTUFBTSxJQUFJLHlCQUFXLENBQUMsdURBQXVELEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO3FCQUM3SDtvQkFFRCxPQUFPLEVBQUUsQ0FBQztpQkFDYjtnQkFFRCxNQUFNLElBQUkseUJBQVcsQ0FBQyw4REFBOEQsRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7YUFDcEk7WUFDRCxN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

/***/ }),

/***/ "./dist.es6/webGL/webGLWorker.js":
/*!***************************************!*\
  !*** ./dist.es6/webGL/webGLWorker.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const cryptoError_1 = __webpack_require__(/*! @iota-pico/crypto/dist/error/cryptoError */ "@iota-pico/crypto/dist/error/cryptoError");
const stdlib_1 = __webpack_require__(/*! ./stdlib */ "./dist.es6/webGL/stdlib.js");
const vertexShaderCode_1 = __webpack_require__(/*! ./vertexShaderCode */ "./dist.es6/webGL/vertexShaderCode.js");
const webGLHelper_1 = __webpack_require__(/*! ./webGLHelper */ "./dist.es6/webGL/webGLHelper.js");
/**
 * WebGLWorker.
 */
class WebGLWorker {
    /**
     * Initialize the web GL Worker.
     * @param webGLPlatform The webGL platform.
     * @param stateLength The length of the state.
     * @param texelSize The texel size.
     */
    initialize(webGLPlatform, stateLength, texelSize) {
        this._context = webGLHelper_1.WebGLHelper.createContext(webGLPlatform);
        this._dimensions = { x: stateLength, y: 0 };
        const maxImageSize = Math.pow(this._context.MAX_TEXTURE_SIZE, 2) * 0.5;
        const imageSize = Math.floor(maxImageSize / this._dimensions.x / texelSize) * this._dimensions.x * texelSize;
        this._dimensions.y = imageSize / this._dimensions.x / texelSize;
        this._programs = new Map();
        this._ipt = {
            data: new Int32Array(imageSize),
            length: imageSize
        };
        // GPU texture buffer = from JS typed array
        this._buffers = {
            position: webGLHelper_1.WebGLHelper.createBuffer(this._context, [-1, -1, 1, -1, 1, 1, -1, 1]),
            texture: webGLHelper_1.WebGLHelper.createBuffer(this._context, [0, 0, 1, 0, 1, 1, 0, 1]),
            index: webGLHelper_1.WebGLHelper.createBuffer(this._context, [1, 2, 0, 3, 0, 2], Uint16Array, this._context.ELEMENT_ARRAY_BUFFER)
        };
        this._attrib = {
            position: 0,
            texture: 1
        };
        this._vertexArray = this._context.createVertexArray();
        this._context.bindVertexArray(this._vertexArray);
        this.bindBuffers();
        this._context.bindVertexArray(null);
        this.createVertexShader();
        this._frameBuffer = this._context.createFramebuffer();
        this._texture0 = webGLHelper_1.WebGLHelper.createTexture(this._context, this._ipt.data, this._dimensions);
        this._texture1 = webGLHelper_1.WebGLHelper.createTexture(this._context, new Int32Array(imageSize), this._dimensions);
    }
    /**
     * Get the dimensions from the worker.
     * @returns The dimensions.
     */
    getDimensions() {
        return this._dimensions;
    }
    /**
     * Get the IPT from the worker.
     * @returns The ipt.
     */
    getIpt() {
        return this._ipt;
    }
    /**
     * Add a program to the worker.
     * @param name The name of the program to add.
     * @param code The code for the program.
     * @param uniforms Additional uniform locations.
     */
    addProgram(name, code, ...uniforms) {
        const fragmentShader = this.createFragmentShader(code);
        const program = this._context.createProgram();
        this._context.attachShader(program, this._vertexShader);
        this._context.attachShader(program, fragmentShader);
        this._context.bindAttribLocation(program, this._attrib.position, "position");
        this._context.bindAttribLocation(program, this._attrib.texture, "texture");
        this._context.linkProgram(program);
        const uniformVars = new Map();
        for (const variable of uniforms) {
            uniformVars.set(variable, this._context.getUniformLocation(program, variable));
        }
        this._programs.set(name, { program, uniformVars });
    }
    /**
     * Run the program in the web worker.
     * @param name The name of the program to run.
     * @param count The number of times to run it.
     * @param uniforms Additional uniform locations to use.
     */
    runProgram(name, count, ...uniforms) {
        const info = this._programs.get(name);
        const program = info.program;
        if (!this._context.getProgramParameter(program, this._context.LINK_STATUS)) {
            throw new cryptoError_1.CryptoError("Failed to link GLSL program code");
        }
        const uniformVars = info.uniformVars;
        const uTexture = this._context.getUniformLocation(program, "u_texture");
        this._context.useProgram(program);
        let localCount = count;
        while (localCount-- > 0) {
            this._context.bindTexture(this._context.TEXTURE_2D, this._texture0);
            this._context.activeTexture(this._context.TEXTURE0);
            this._context.uniform1i(uTexture, 0);
            this._context.viewport(0, 0, this._dimensions.x, this._dimensions.y);
            webGLHelper_1.WebGLHelper.frameBufferSetTexture(this._context, this._frameBuffer, this._texture1);
            this._context.bindVertexArray(this._vertexArray);
            for (const uVars of uniforms) {
                this._context.uniform1i(uniformVars.get(uVars.name), uVars.value);
            }
            this._context.drawElements(this._context.TRIANGLES, 6, this._context.UNSIGNED_SHORT, 0);
            const tex0 = this._texture0;
            this._texture0 = this._texture1;
            this._texture1 = tex0;
        }
        this.finishRun();
    }
    /**
     * Read data from the worker.
     * @param x The x position to read from.
     * @param y The y position to read from.
     * @param n The width position to read from.
     * @param m The height position to read from.
     * @returns The data at the requested position.
     */
    readData(x, y, n, m) {
        this._context.bindFramebuffer(this._context.FRAMEBUFFER, this._frameBuffer);
        this._context.readPixels(x, y, n, m, this._context.RGBA_INTEGER, this._context.INT, this._ipt.data);
        this._context.bindFramebuffer(this._context.FRAMEBUFFER, null);
        return this._ipt.data.subarray(0, this._ipt.length);
    }
    /**
     * Write data to the worker.
     * @param data The data to write.
     */
    writeData(data) {
        this._context.bindTexture(this._context.TEXTURE_2D, this._texture0);
        this._context.texImage2D(this._context.TEXTURE_2D, 0, this._context.RGBA32I, this._dimensions.x, this._dimensions.y, 0, this._context.RGBA_INTEGER, this._context.INT, data);
        this._context.bindTexture(this._context.TEXTURE_2D, null);
    }
    /* @internal */
    bindBuffers() {
        this._context.bindBuffer(this._context.ARRAY_BUFFER, this._buffers.texture);
        this._context.enableVertexAttribArray(this._attrib.texture);
        this._context.vertexAttribPointer(this._attrib.texture, 2, this._context.FLOAT, false, 0, 0);
        this._context.bindBuffer(this._context.ARRAY_BUFFER, this._buffers.position);
        this._context.enableVertexAttribArray(this._attrib.position);
        this._context.vertexAttribPointer(this._attrib.position, 2, this._context.FLOAT, false, 0, 0);
        this._context.bindBuffer(this._context.ELEMENT_ARRAY_BUFFER, this._buffers.index);
    }
    /* @internal */
    createVertexShader() {
        this._vertexShader = this._context.createShader(this._context.VERTEX_SHADER);
        this._context.shaderSource(this._vertexShader, vertexShaderCode_1.vertexShaderCode);
        this._context.compileShader(this._vertexShader);
        // This should not fail.
        if (!this._context.getShaderParameter(this._vertexShader, this._context.COMPILE_STATUS)) {
            throw new cryptoError_1.CryptoError(`Could not build vertex shader.

--- CODE DUMP ---${vertexShaderCode_1.vertexShaderCode}

--- ERROR LOG ---
${this._context.getShaderInfoLog(this._vertexShader)}`);
        }
    }
    /* @internal */
    createFragmentShader(code) {
        const fragmentShader = this._context.createShader(this._context.FRAGMENT_SHADER);
        this._context.shaderSource(fragmentShader, stdlib_1.stdlib + code);
        this._context.compileShader(fragmentShader);
        // Use this output to debug the shader
        // Keep in mind that WebGL GLSL is **much** stricter than e.g. OpenGL GLSL
        if (!this._context.getShaderParameter(fragmentShader, this._context.COMPILE_STATUS)) {
            const codeLines = code.split("\n");
            let dbgMsg = "Could not build fragment shader.\n\n------------------ KERNEL CODE DUMP ------------------\n";
            for (let nl = 0; nl < codeLines.length; nl++) {
                dbgMsg += `${stdlib_1.stdlib.split("\n").length + nl}> ${codeLines[nl]}\n`;
            }
            dbgMsg += `\n--------------------- ERROR  LOG ---------------------\n${this._context.getShaderInfoLog(fragmentShader)}`;
            throw new cryptoError_1.CryptoError(dbgMsg);
        }
        return fragmentShader;
    }
    /* @internal */
    finishRun() {
        this._context.bindVertexArray(null);
        this._context.bindTexture(this._context.TEXTURE_2D, null);
        this._context.bindFramebuffer(this._context.FRAMEBUFFER, null);
    }
}
exports.WebGLWorker = WebGLWorker;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViR0xXb3JrZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvd2ViR0wvd2ViR0xXb3JrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBFQUF1RTtBQUV2RSxxQ0FBa0M7QUFDbEMseURBQXNEO0FBQ3RELCtDQUE0QztBQUk1Qzs7R0FFRztBQUNILE1BQWEsV0FBVztJQXdCcEI7Ozs7O09BS0c7SUFDSSxVQUFVLENBQUMsYUFBNkIsRUFBRSxXQUFtQixFQUFFLFNBQWlCO1FBQ25GLElBQUksQ0FBQyxRQUFRLEdBQUcseUJBQVcsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBRTVDLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDdkUsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDO1FBQzdHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUM7UUFFaEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUc7WUFDUixJQUFJLEVBQUUsSUFBSSxVQUFVLENBQUMsU0FBUyxDQUFDO1lBQy9CLE1BQU0sRUFBRSxTQUFTO1NBQ3BCLENBQUM7UUFFRiwyQ0FBMkM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRztZ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LENBQVMsRUFBRSxDQUFTO1FBQ3RELElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksU0FBUyxDQUFDLElBQXFCO1FBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdLLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFB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

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "@iota-pico/core/dist/helpers/numberHelper":
/*!************************************************************!*\
  !*** external "@iota-pico/core/dist/helpers/numberHelper" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_helpers_numberHelper__;

/***/ }),

/***/ "@iota-pico/core/dist/helpers/objectHelper":
/*!************************************************************!*\
  !*** external "@iota-pico/core/dist/helpers/objectHelper" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_helpers_objectHelper__;

/***/ }),

/***/ "@iota-pico/crypto/dist/error/cryptoError":
/*!***********************************************************!*\
  !*** external "@iota-pico/crypto/dist/error/cryptoError" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_crypto_dist_error_cryptoError__;

/***/ }),

/***/ "@iota-pico/crypto/dist/factories/spongeFactory":
/*!*****************************************************************!*\
  !*** external "@iota-pico/crypto/dist/factories/spongeFactory" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_crypto_dist_factories_spongeFactory__;

/***/ }),

/***/ "@iota-pico/crypto/dist/proofOfWork/proofOfWorkBase":
/*!*********************************************************************!*\
  !*** external "@iota-pico/crypto/dist/proofOfWork/proofOfWorkBase" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_crypto_dist_proofOfWork_proofOfWorkBase__;

/***/ }),

/***/ "@iota-pico/data/dist/data/trits":
/*!**************************************************!*\
  !*** external "@iota-pico/data/dist/data/trits" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_trits__;

/***/ }),

/***/ "@iota-pico/data/dist/data/trytes":
/*!***************************************************!*\
  !*** external "@iota-pico/data/dist/data/trytes" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_trytes__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvLi9kaXN0LmVzNi9pbmRleC5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsLy4vZGlzdC5lczYvcGVhcmxEaXZlci9wZWFybERpdmVyLmpzIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvLi9kaXN0LmVzNi9wZWFybERpdmVyL3BlYXJsRGl2ZXJTdGF0ZS5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsLy4vZGlzdC5lczYvcHJvb2ZPZldvcmtXZWJHbC5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsLy4vZGlzdC5lczYvc2hhZGVycy9hZGQuanMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dXZWJnbC8uL2Rpc3QuZXM2L3NoYWRlcnMvY2hlY2tDb2wuanMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dXZWJnbC8uL2Rpc3QuZXM2L3NoYWRlcnMvY2hlY2tEby5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsLy4vZGlzdC5lczYvc2hhZGVycy9jaGVja0suanMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dXZWJnbC8uL2Rpc3QuZXM2L3NoYWRlcnMvZmluYWxpemUuanMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dXZWJnbC8uL2Rpc3QuZXM2L3NoYWRlcnMvaGVhZGVycy5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsLy4vZGlzdC5lczYvc2hhZGVycy9pbmNyZW1lbnQuanMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dXZWJnbC8uL2Rpc3QuZXM2L3NoYWRlcnMvaW5pdC5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsLy4vZGlzdC5lczYvc2hhZGVycy90cmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dXZWJnbC8uL2Rpc3QuZXM2L3dlYkdML3N0ZGxpYi5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsLy4vZGlzdC5lczYvd2ViR0wvdmVydGV4U2hhZGVyQ29kZS5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsLy4vZGlzdC5lczYvd2ViR0wvd2ViR0xIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dXZWJnbC8uL2Rpc3QuZXM2L3dlYkdML3dlYkdMV29ya2VyLmpzIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvZXh0ZXJuYWwgXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvZXh0ZXJuYWwgXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvZXh0ZXJuYWwgXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L2Vycm9yL2NyeXB0b0Vycm9yXCIiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dXZWJnbC9leHRlcm5hbCBcIkBpb3RhLXBpY28vY3J5cHRvL2Rpc3QvZmFjdG9yaWVzL3Nwb25nZUZhY3RvcnlcIiIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsL2V4dGVybmFsIFwiQGlvdGEtcGljby9jcnlwdG8vZGlzdC9wcm9vZk9mV29yay9wcm9vZk9mV29ya0Jhc2VcIiIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsL2V4dGVybmFsIFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cml0c1wiIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvZXh0ZXJuYWwgXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyeXRlc1wiIl0sIm5h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O0FBQ3BELDRCQUE0Qix3QkFBd0I7QUFDcEQsMkJBQTJCLHlEQUF5RDtBQUNwRjs7QUFFTztBQUNQO0FBQ0EsaUJBQWlCLDRDQUE0QyxTQUFTLEVBQUUscURBQXFELGFBQWEsRUFBRTtBQUM1SSx5QkFBeUIsNkJBQTZCLG9CQUFvQixnREFBZ0QsZ0JBQWdCLEVBQUUsS0FBSztBQUNqSjs7QUFFTztBQUNQO0FBQ0E7QUFDQSwyR0FBMkcsc0ZBQXNGLGFBQWEsRUFBRTtBQUNoTixzQkFBc0IsOEJBQThCLGdEQUFnRCx1REFBdUQsRUFBRSxFQUFFLEdBQUc7QUFDbEssNENBQTRDLHNDQUFzQyxVQUFVLG9CQUFvQixFQUFFLEVBQUUsVUFBVTtBQUM5SDs7QUFFTztBQUNQLGdDQUFnQyx1Q0FBdUMsYUFBYSxFQUFFLEVBQUUsT0FBTyxrQkFBa0I7QUFDakg7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLDRDQUE0QztBQUM1Qzs7Ozs7Ozs7Ozs7O0FDekxBLHVGOzs7Ozs7Ozs7OztBQ0FBLHVGOzs7Ozs7Ozs7OztBQ0FBLHNGOzs7Ozs7Ozs7OztBQ0FBLDRGOzs7Ozs7Ozs7OztBQ0FBLGdHOzs7Ozs7Ozs7OztBQ0FBLDZFOzs7Ozs7Ozs7OztBQ0FBLDhFIiwiZmlsZSI6ImlvdGEtcGljby1wb3ctd2ViZ2wuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9jcnlwdG8vZGlzdC9lcnJvci9jcnlwdG9FcnJvclwiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vY3J5cHRvL2Rpc3QvZmFjdG9yaWVzL3Nwb25nZUZhY3RvcnlcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L3Byb29mT2ZXb3JrL3Byb29mT2ZXb3JrQmFzZVwiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJpdHNcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyeXRlc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkBpb3RhLXBpY28vcG93LXdlYmdsXCIsIFtcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIsIFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIiwgXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L2Vycm9yL2NyeXB0b0Vycm9yXCIsIFwiQGlvdGEtcGljby9jcnlwdG8vZGlzdC9mYWN0b3JpZXMvc3BvbmdlRmFjdG9yeVwiLCBcIkBpb3RhLXBpY28vY3J5cHRvL2Rpc3QvcHJvb2ZPZldvcmsvcHJvb2ZPZldvcmtCYXNlXCIsIFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cml0c1wiLCBcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJ5dGVzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBpb3RhLXBpY28vcG93LXdlYmdsXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vY3J5cHRvL2Rpc3QvZXJyb3IvY3J5cHRvRXJyb3JcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L2ZhY3Rvcmllcy9zcG9uZ2VGYWN0b3J5XCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9jcnlwdG8vZGlzdC9wcm9vZk9mV29yay9wcm9vZk9mV29ya0Jhc2VcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyaXRzXCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cnl0ZXNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIklvdGFQaWNvUG93V2ViZ2xcIl0gPSBmYWN0b3J5KHJvb3RbXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiXSwgcm9vdFtcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCJdLCByb290W1wiQGlvdGEtcGljby9jcnlwdG8vZGlzdC9lcnJvci9jcnlwdG9FcnJvclwiXSwgcm9vdFtcIkBpb3RhLXBpY28vY3J5cHRvL2Rpc3QvZmFjdG9yaWVzL3Nwb25nZUZhY3RvcnlcIl0sIHJvb3RbXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L3Byb29mT2ZXb3JrL3Byb29mT2ZXb3JrQmFzZVwiXSwgcm9vdFtcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJpdHNcIl0sIHJvb3RbXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyeXRlc1wiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NvcmVfZGlzdF9oZWxwZXJzX251bWJlckhlbHBlcl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fY29yZV9kaXN0X2hlbHBlcnNfb2JqZWN0SGVscGVyX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19jcnlwdG9fZGlzdF9lcnJvcl9jcnlwdG9FcnJvcl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fY3J5cHRvX2Rpc3RfZmFjdG9yaWVzX3Nwb25nZUZhY3RvcnlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NyeXB0b19kaXN0X3Byb29mT2ZXb3JrX3Byb29mT2ZXb3JrQmFzZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fZGF0YV9kaXN0X2RhdGFfdHJpdHNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2RhdGFfZGlzdF9kYXRhX3RyeXRlc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9kaXN0LmVzNi9pbmRleC5qc1wiKTtcbiIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcclxuLyoqXHJcbiAqIENvbWJpbmVkIGluZGV4IG9mIGFsbCB0aGUgbW9kdWxlcy5cclxuICovXHJcbnRzbGliXzEuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3Byb29mT2ZXb3JrV2ViR2xcIiksIGV4cG9ydHMpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZhVzVrWlhndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZCUVRzN1IwRkZSenRCUVVOSUxEWkVRVUZ0UXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IHNwb25nZUZhY3RvcnlfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L2ZhY3Rvcmllcy9zcG9uZ2VGYWN0b3J5XCIpO1xyXG5jb25zdCB0cml0c18xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJpdHNcIik7XHJcbmNvbnN0IGFkZF8xID0gcmVxdWlyZShcIi4uL3NoYWRlcnMvYWRkXCIpO1xyXG5jb25zdCBjaGVja0NvbF8xID0gcmVxdWlyZShcIi4uL3NoYWRlcnMvY2hlY2tDb2xcIik7XHJcbmNvbnN0IGNoZWNrRG9fMSA9IHJlcXVpcmUoXCIuLi9zaGFkZXJzL2NoZWNrRG9cIik7XHJcbmNvbnN0IGNoZWNrS18xID0gcmVxdWlyZShcIi4uL3NoYWRlcnMvY2hlY2tLXCIpO1xyXG5jb25zdCBmaW5hbGl6ZV8xID0gcmVxdWlyZShcIi4uL3NoYWRlcnMvZmluYWxpemVcIik7XHJcbmNvbnN0IGhlYWRlcnNfMSA9IHJlcXVpcmUoXCIuLi9zaGFkZXJzL2hlYWRlcnNcIik7XHJcbmNvbnN0IGluY3JlbWVudF8xID0gcmVxdWlyZShcIi4uL3NoYWRlcnMvaW5jcmVtZW50XCIpO1xyXG5jb25zdCBpbml0XzEgPSByZXF1aXJlKFwiLi4vc2hhZGVycy9pbml0XCIpO1xyXG5jb25zdCB0cmFuc2Zvcm1fMSA9IHJlcXVpcmUoXCIuLi9zaGFkZXJzL3RyYW5zZm9ybVwiKTtcclxuY29uc3Qgd2ViR0xXb3JrZXJfMSA9IHJlcXVpcmUoXCIuLi93ZWJHTC93ZWJHTFdvcmtlclwiKTtcclxuY29uc3QgcGVhcmxEaXZlclN0YXRlXzEgPSByZXF1aXJlKFwiLi9wZWFybERpdmVyU3RhdGVcIik7XHJcbi8qKlxyXG4gKiBQZWFybERpdmVyLlxyXG4gKiBDb252ZXJ0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vaW90YWxlZGdlci9jdXJsLmxpYi5qcy9ibG9iL21hc3Rlci9zcmMvcGVhcmxkaXZlci5qc1xyXG4gKi9cclxuY2xhc3MgUGVhcmxEaXZlciB7XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNvbnN0cnVjdG9yKHdlYkdMUGxhdGZvcm0pIHtcclxuICAgICAgICB0aGlzLl93ZWJHTFdvcmtlciA9IG5ldyB3ZWJHTFdvcmtlcl8xLldlYkdMV29ya2VyKCk7XHJcbiAgICAgICAgY29uc3QgY3VybCA9IHNwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkuY3JlYXRlKFwiY3VybFwiKTtcclxuICAgICAgICB0aGlzLl9oYXNoTGVuZ3RoID0gY3VybC5nZXRDb25zdGFudChcIkhBU0hfTEVOR1RIXCIpO1xyXG4gICAgICAgIHRoaXMuX3N0YXRlTGVuZ3RoID0gY3VybC5nZXRDb25zdGFudChcIlNUQVRFX0xFTkdUSFwiKTtcclxuICAgICAgICB0aGlzLl9udW1iZXJSb3VuZHMgPSBjdXJsLmdldENvbnN0YW50KFwiTlVNQkVSX09GX1JPVU5EU1wiKTtcclxuICAgICAgICB0aGlzLl90cmFuc2FjdGlvbkxlbmd0aCA9IHRoaXMuX2hhc2hMZW5ndGggKiAzMztcclxuICAgICAgICB0aGlzLl9ub25jZUxlbmd0aCA9IHRoaXMuX2hhc2hMZW5ndGggLyAzO1xyXG4gICAgICAgIHRoaXMuX25vbmNlU3RhcnQgPSB0aGlzLl9oYXNoTGVuZ3RoIC0gdGhpcy5fbm9uY2VMZW5ndGg7XHJcbiAgICAgICAgdGhpcy5fd2ViR0xXb3JrZXIuaW5pdGlhbGl6ZSh3ZWJHTFBsYXRmb3JtLCB0aGlzLl9zdGF0ZUxlbmd0aCArIDEsIFBlYXJsRGl2ZXIuVEVYRUxfU0laRSk7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudEJ1ZmZlciA9IHRoaXMuX3dlYkdMV29ya2VyLmdldElwdCgpLmRhdGE7XHJcbiAgICAgICAgdGhpcy5fd2ViR0xXb3JrZXIuYWRkUHJvZ3JhbShcImluaXRcIiwgaGVhZGVyc18xLmhlYWRlcnMgKyBhZGRfMS5hZGQgKyBpbml0XzEuaW5pdCwgXCJncl9vZmZzZXRcIik7XHJcbiAgICAgICAgdGhpcy5fd2ViR0xXb3JrZXIuYWRkUHJvZ3JhbShcImluY3JlbWVudFwiLCBoZWFkZXJzXzEuaGVhZGVycyArIGFkZF8xLmFkZCArIGluY3JlbWVudF8xLmluY3JlbWVudCk7XHJcbiAgICAgICAgdGhpcy5fd2ViR0xXb3JrZXIuYWRkUHJvZ3JhbShcInR3aXN0XCIsIGhlYWRlcnNfMS5oZWFkZXJzICsgdHJhbnNmb3JtXzEudHJhbnNmb3JtKTtcclxuICAgICAgICB0aGlzLl93ZWJHTFdvcmtlci5hZGRQcm9ncmFtKFwiY2hlY2tcIiwgaGVhZGVyc18xLmhlYWRlcnMgKyBjaGVja0RvXzEuY2hlY2tEbyArIGNoZWNrS18xLmNoZWNrSywgXCJtaW5XZWlnaHRNYWduaXR1ZGVcIik7XHJcbiAgICAgICAgdGhpcy5fd2ViR0xXb3JrZXIuYWRkUHJvZ3JhbShcImNvbF9jaGVja1wiLCBoZWFkZXJzXzEuaGVhZGVycyArIGNoZWNrQ29sXzEuY2hlY2tDb2wpO1xyXG4gICAgICAgIHRoaXMuX3dlYkdMV29ya2VyLmFkZFByb2dyYW0oXCJmaW5hbGl6ZVwiLCBoZWFkZXJzXzEuaGVhZGVycyArIGNoZWNrRG9fMS5jaGVja0RvICsgZmluYWxpemVfMS5maW5hbGl6ZSk7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBwZWFybERpdmVyU3RhdGVfMS5QZWFybERpdmVyU3RhdGUucmVhZHk7XHJcbiAgICAgICAgdGhpcy5fcXVldWUgPSBbXTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZSB0aGUgUGVhcmxEaXZlciBtYWluIGluc3RhbmNlLlxyXG4gICAgICogQHBhcmFtIHdlYkdMUGxhdGZvcm0gVGhlIHBsYXRmb3JtIHNvIGluaXRpYWxpemUgdGhlIHBlYXJsIGRpdmVyIHdpdGguXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpbml0aWFsaXplKHdlYkdMUGxhdGZvcm0pIHtcclxuICAgICAgICBpZiAoIVBlYXJsRGl2ZXIuaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgUGVhcmxEaXZlci5pbnN0YW5jZSA9IG5ldyBQZWFybERpdmVyKHdlYkdMUGxhdGZvcm0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ2xvc2Vkb3duIHRoZSBQZWFybERpdmVyIG1haW4gaW5zdGFuY2UuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjbG9zZWRvd24oKSB7XHJcbiAgICAgICAgaWYgKFBlYXJsRGl2ZXIuaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgUGVhcmxEaXZlci5pbnN0YW5jZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFBlcmZvcm0gYSBzZWFyY2ggdXNpbmcgdHJ5dGVzLlxyXG4gICAgICogQHBhcmFtIHRyeXRlcyBUaGUgdHJ5dGVzIHRvIHBlcmZvcm0gdGhlIHNlYXJjaCBvbi5cclxuICAgICAqIEBwYXJhbSBtaW5XZWlnaHRNYWduaXR1ZGUgVGhlIG1pbmltdW0gd2VpZ2h0IG1hZ25pdHVkZS5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2Ugd2hpY2ggcmVzb2x2ZXMgdG8gdGhlIHRyeXRlcyBmcm9tIHRoZSBzZWFyY2guXHJcbiAgICAgKi9cclxuICAgIHNlYXJjaFdpdGhUcnl0ZXModHJ5dGVzLCBtaW5XZWlnaHRNYWduaXR1ZGUpIHtcclxuICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlYXJjaFN0YXRlcyA9IHRoaXMucHJlcGFyZSh0cnl0ZXMpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2goc2VhcmNoU3RhdGVzLCBtaW5XZWlnaHRNYWduaXR1ZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBwcmVwYXJlKHRyYW5zYWN0aW9uVHJ5dGVzKSB7XHJcbiAgICAgICAgY29uc3QgY3VybCA9IHNwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkuY3JlYXRlKFwiY3VybFwiKTtcclxuICAgICAgICBjdXJsLmluaXRpYWxpemUoKTtcclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvblRyaXRzID0gdHJpdHNfMS5Ucml0cy5mcm9tVHJ5dGVzKHRyYW5zYWN0aW9uVHJ5dGVzKS50b0FycmF5KCk7XHJcbiAgICAgICAgY3VybC5hYnNvcmIodHJhbnNhY3Rpb25Ucml0cywgMCwgdGhpcy5fdHJhbnNhY3Rpb25MZW5ndGggLSB0aGlzLl9oYXNoTGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBjdXJsU3RhdGUgPSBjdXJsLmdldFN0YXRlKCk7XHJcbiAgICAgICAgdHJhbnNhY3Rpb25Ucml0c1xyXG4gICAgICAgICAgICAuc2xpY2UodGhpcy5fdHJhbnNhY3Rpb25MZW5ndGggLSB0aGlzLl9oYXNoTGVuZ3RoLCB0aGlzLl90cmFuc2FjdGlvbkxlbmd0aClcclxuICAgICAgICAgICAgLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjdXJsU3RhdGVbaW5kZXhdID0gdmFsdWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoVG9QYWlyKGN1cmxTdGF0ZSk7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHNlYXJjaChzdGF0ZXMsIG1pbldlaWdodCkge1xyXG4gICAgICAgIHJldHVybiB0c2xpYl8xLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgLy8gcHJvbWlzZSB3aWxsIGNvbXBsZXRlIHdoZW4gdGhlIHNlYXJjaCBoYXMgY29tcGxldGVkXHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcm9taXNlLW11c3QtY29tcGxldGVcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3F1ZXVlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlczogc3RhdGVzLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbldlaWdodE1hZ25pdHVkZTogbWluV2VpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiByZXNvbHZlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gcGVhcmxEaXZlclN0YXRlXzEuUGVhcmxEaXZlclN0YXRlLnJlYWR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hEb05leHQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHNlYXJjaFRvUGFpcihzdGF0ZSkge1xyXG4gICAgICAgIGNvbnN0IHN0YXRlcyA9IHtcclxuICAgICAgICAgICAgbG93OiBuZXcgSW50MzJBcnJheSh0aGlzLl9zdGF0ZUxlbmd0aCksXHJcbiAgICAgICAgICAgIGhpZ2g6IG5ldyBJbnQzMkFycmF5KHRoaXMuX3N0YXRlTGVuZ3RoKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc3RhdGUuZm9yRWFjaCgodHJpdCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgc3dpdGNoICh0cml0KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVzLmxvd1tpbmRleF0gPSBQZWFybERpdmVyLkhJR0hfQklUUztcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZXMuaGlnaFtpbmRleF0gPSBQZWFybERpdmVyLkhJR0hfQklUUztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZXMubG93W2luZGV4XSA9IFBlYXJsRGl2ZXIuTE9XX0JJVFM7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVzLmhpZ2hbaW5kZXhdID0gUGVhcmxEaXZlci5ISUdIX0JJVFM7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlcy5sb3dbaW5kZXhdID0gUGVhcmxEaXZlci5ISUdIX0JJVFM7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVzLmhpZ2hbaW5kZXhdID0gUGVhcmxEaXZlci5MT1dfQklUUztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoT2Zmc2V0KHN0YXRlcywgdGhpcy5fbm9uY2VTdGFydCk7XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlcztcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgc2VhcmNoT2Zmc2V0KHN0YXRlcywgb2Zmc2V0KSB7XHJcbiAgICAgICAgc3RhdGVzLmxvd1tvZmZzZXQgKyAwXSA9IFBlYXJsRGl2ZXIuTE9XXzA7XHJcbiAgICAgICAgc3RhdGVzLmxvd1tvZmZzZXQgKyAxXSA9IFBlYXJsRGl2ZXIuTE9XXzE7XHJcbiAgICAgICAgc3RhdGVzLmxvd1tvZmZzZXQgKyAyXSA9IFBlYXJsRGl2ZXIuTE9XXzI7XHJcbiAgICAgICAgc3RhdGVzLmxvd1tvZmZzZXQgKyAzXSA9IFBlYXJsRGl2ZXIuTE9XXzM7XHJcbiAgICAgICAgc3RhdGVzLmhpZ2hbb2Zmc2V0ICsgMF0gPSBQZWFybERpdmVyLkhJR0hfMDtcclxuICAgICAgICBzdGF0ZXMuaGlnaFtvZmZzZXQgKyAxXSA9IFBlYXJsRGl2ZXIuSElHSF8xO1xyXG4gICAgICAgIHN0YXRlcy5oaWdoW29mZnNldCArIDJdID0gUGVhcmxEaXZlci5ISUdIXzI7XHJcbiAgICAgICAgc3RhdGVzLmhpZ2hbb2Zmc2V0ICsgM10gPSBQZWFybERpdmVyLkhJR0hfMztcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgc2VhcmNoRG9OZXh0KCkge1xyXG4gICAgICAgIGNvbnN0IG5leHQgPSB0aGlzLl9xdWV1ZS5zaGlmdCgpO1xyXG4gICAgICAgIGlmIChvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eShuZXh0KSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IHBlYXJsRGl2ZXJTdGF0ZV8xLlBlYXJsRGl2ZXJTdGF0ZS5yZWFkeTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gcGVhcmxEaXZlclN0YXRlXzEuUGVhcmxEaXZlclN0YXRlLnNlYXJjaGluZztcclxuICAgICAgICAgICAgdGhpcy53ZWJHTEZpbmROb25jZShuZXh0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHdlYkdMRmluZE5vbmNlKHNlYXJjaE9iamVjdCkge1xyXG4gICAgICAgIHRoaXMud2ViR0xXcml0ZUJ1ZmZlcnMoc2VhcmNoT2JqZWN0LnN0YXRlcyk7XHJcbiAgICAgICAgdGhpcy5fd2ViR0xXb3JrZXIud3JpdGVEYXRhKHRoaXMuX2N1cnJlbnRCdWZmZXIpO1xyXG4gICAgICAgIHRoaXMuX3dlYkdMV29ya2VyLnJ1blByb2dyYW0oXCJpbml0XCIsIDEsIHsgbmFtZTogXCJncl9vZmZzZXRcIiwgdmFsdWU6IDAgfSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLndlYkdMU2VhcmNoKHNlYXJjaE9iamVjdCksIDEpO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICB3ZWJHTFdyaXRlQnVmZmVycyhzdGF0ZXMpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3N0YXRlTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudEJ1ZmZlcltpICogUGVhcmxEaXZlci5URVhFTF9TSVpFXSA9IHN0YXRlcy5sb3dbaV07XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRCdWZmZXJbaSAqIFBlYXJsRGl2ZXIuVEVYRUxfU0laRSArIDFdID0gc3RhdGVzLmhpZ2hbaV07XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRCdWZmZXJbaSAqIFBlYXJsRGl2ZXIuVEVYRUxfU0laRSArIDJdID0gc3RhdGVzLmxvd1tpXTtcclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudEJ1ZmZlcltpICogUGVhcmxEaXZlci5URVhFTF9TSVpFICsgM10gPSBzdGF0ZXMuaGlnaFtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHdlYkdMU2VhcmNoKHNlYXJjaE9iamVjdCkge1xyXG4gICAgICAgIHRoaXMuX3dlYkdMV29ya2VyLnJ1blByb2dyYW0oXCJpbmNyZW1lbnRcIiwgMSk7XHJcbiAgICAgICAgdGhpcy5fd2ViR0xXb3JrZXIucnVuUHJvZ3JhbShcInR3aXN0XCIsIHRoaXMuX251bWJlclJvdW5kcyk7XHJcbiAgICAgICAgdGhpcy5fd2ViR0xXb3JrZXIucnVuUHJvZ3JhbShcImNoZWNrXCIsIDEsIHsgbmFtZTogXCJtaW5XZWlnaHRNYWduaXR1ZGVcIiwgdmFsdWU6IHNlYXJjaE9iamVjdC5taW5XZWlnaHRNYWduaXR1ZGUgfSk7XHJcbiAgICAgICAgdGhpcy5fd2ViR0xXb3JrZXIucnVuUHJvZ3JhbShcImNvbF9jaGVja1wiLCAxKTtcclxuICAgICAgICBpZiAodGhpcy5fd2ViR0xXb3JrZXIucmVhZERhdGEodGhpcy5fc3RhdGVMZW5ndGgsIDAsIDEsIDEpWzJdID09PSAtMSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMud2ViR0xTZWFyY2goc2VhcmNoT2JqZWN0KSwgMTApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fd2ViR0xXb3JrZXIucnVuUHJvZ3JhbShcImZpbmFsaXplXCIsIDEpO1xyXG4gICAgICAgICAgICBjb25zdCBub25jZSA9IHRoaXMuX3dlYkdMV29ya2VyLnJlYWREYXRhKDAsIDAsIHRoaXMuX3dlYkdMV29ya2VyLmdldERpbWVuc2lvbnMoKS54LCAxKVxyXG4gICAgICAgICAgICAgICAgLnJlZHVjZSh0aGlzLnBhY2soNCksIFtdKVxyXG4gICAgICAgICAgICAgICAgLnNsaWNlKDAsIHRoaXMuX2hhc2hMZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAubWFwKHggPT4geFszXSk7XHJcbiAgICAgICAgICAgIHNlYXJjaE9iamVjdC5jYWxsYmFjayh0cml0c18xLlRyaXRzLmZyb21OdW1iZXJBcnJheShub25jZSkudG9Ucnl0ZXMoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoRG9OZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBwYWNrKGwpIHtcclxuICAgICAgICByZXR1cm4gKHIsIGN1cnJlbnRWYWx1ZSwgY3VycmVudEluZGV4KSA9PiAoY3VycmVudEluZGV4ICUgbCA9PT0gMCA/IHIucHVzaChbY3VycmVudFZhbHVlXSkgOiByW3IubGVuZ3RoIC0gMV0ucHVzaChjdXJyZW50VmFsdWUpKSAmJiByO1xyXG4gICAgfVxyXG59XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5QZWFybERpdmVyLlRFWEVMX1NJWkUgPSA0O1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuUGVhcmxEaXZlci5MT1dfQklUUyA9IDA7IC8vIDAwMDAwMDAwXHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5QZWFybERpdmVyLkhJR0hfQklUUyA9IC0xOyAvLyAweEZGRkZGRkZGLEZGRkZGRkZGLDQyOTQ5NjcyOTVcclxuLyogQGludGVybmFsICovXHJcblBlYXJsRGl2ZXIuTE9XXzAgPSAweERCNkRCNkRCOyAvLyA2REI2REI2RCxcclxuLyogQGludGVybmFsICovXHJcblBlYXJsRGl2ZXIuTE9XXzEgPSAweEYxRjhGQzdFOyAvLyAzRjFGOEZDNyxcclxuLyogQGludGVybmFsICovXHJcblBlYXJsRGl2ZXIuTE9XXzIgPSAweDdGRkZFMDBGOyAvLyBGRkZDMDFGRixcclxuLyogQGludGVybmFsICovXHJcblBlYXJsRGl2ZXIuTE9XXzMgPSAweEZGQzAwMDAwOyAvLyAwN0ZGRkZGRixcclxuLyogQGludGVybmFsICovXHJcblBlYXJsRGl2ZXIuSElHSF8wID0gMHhCNkRCNkRCNjsgLy8gREI2REI2REIsXHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5QZWFybERpdmVyLkhJR0hfMSA9IDB4OEZDN0UzRjE7IC8vIEY4RkM3RTNGLFxyXG4vKiBAaW50ZXJuYWwgKi9cclxuUGVhcmxEaXZlci5ISUdIXzIgPSAweEZGQzAxRkZGOyAvLyBGODAzRkZGRixcclxuLyogQGludGVybmFsICovXHJcblBlYXJsRGl2ZXIuSElHSF8zID0gMHgwMDNGRkZGRjsgLy9GRkZGRkZGRixcclxuZXhwb3J0cy5QZWFybERpdmVyID0gUGVhcmxEaXZlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0dWaGNteEVhWFpsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTl3WldGeWJFUnBkbVZ5TDNCbFlYSnNSR2wyWlhJdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZCUVN3MFJVRkJlVVU3UVVGRGVrVXNhMFpCUVN0Rk8wRkJReTlGTERKRVFVRjNSRHRCUVVkNFJDeDNRMEZCY1VNN1FVRkRja01zYTBSQlFTdERPMEZCUXk5RExHZEVRVUUyUXp0QlFVTTNReXc0UTBGQk1rTTdRVUZETTBNc2EwUkJRU3RETzBGQlF5OURMR2RFUVVFMlF6dEJRVU0zUXl4dlJFRkJhVVE3UVVGRGFrUXNNRU5CUVhWRE8wRkJRM1pETEc5RVFVRnBSRHRCUVVOcVJDeHpSRUZCYlVRN1FVRkhia1FzZFVSQlFXOUVPMEZCUTNCRU96czdSMEZIUnp0QlFVTklMRTFCUVdFc1ZVRkJWVHRKUVdkRWJrSXNaVUZCWlR0SlFVTm1MRmxCUVc5Q0xHRkJRVFpDTzFGQlF6ZERMRWxCUVVrc1EwRkJReXhaUVVGWkxFZEJRVWNzU1VGQlNTeDVRa0ZCVnl4RlFVRkZMRU5CUVVNN1VVRkRkRU1zVFVGQlRTeEpRVUZKTEVkQlFVY3NOa0pCUVdFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkRja1FzU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETzFGQlEyNUVMRWxCUVVrc1EwRkJReXhaUVVGWkxFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4alFVRmpMRU5CUVVNc1EwRkJRenRSUVVOeVJDeEpRVUZKTEVOQlFVTXNZVUZCWVN4SFFVRkhMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1EwRkJRenRSUVVNeFJDeEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRhRVFzU1VGQlNTeERRVUZETEZsQlFWa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU42UXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExFbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJRenRSUVVWNFJDeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRlZCUVZVc1EwRkJReXhoUVVGaExFVkJRVVVzU1VGQlNTeERRVUZETEZsQlFWa3NSMEZCUnl4RFFVRkRMRVZCUVVVc1ZVRkJWU3hEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETzFGQlF6RkdMRWxCUVVrc1EwRkJReXhqUVVGakxFZEJRVWNzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU03VVVGRGRFUXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhWUVVGVkxFTkJRVU1zVFVGQlRTeEZRVUZGTEdsQ1FVRlBMRWRCUVVjc1UwRkJSeXhIUVVGSExGZEJRVWtzUlVGQlJTeFhRVUZYTEVOQlFVTXNRMEZCUXp0UlFVTjRSU3hKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEZWQlFWVXNRMEZCUXl4WFFVRlhMRVZCUVVVc2FVSkJRVThzUjBGQlJ5eFRRVUZITEVkQlFVY3NjVUpCUVZNc1EwRkJReXhEUVVGRE8xRkJRM0pGTEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFOUJRVThzUlVGQlJTeHBRa0ZCVHl4SFFVRkhMSEZDUVVGVExFTkJRVU1zUTBGQlF6dFJRVU16UkN4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExGVkJRVlVzUTBGQlF5eFBRVUZQTEVWQlFVVXNhVUpCUVU4c1IwRkJSeXhwUWtGQlR5eEhRVUZITEdWQlFVMHNSVUZCUlN4dlFrRkJiMElzUTBGQlF5eERRVUZETzFGQlEzaEdMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zVlVGQlZTeERRVUZETEZkQlFWY3NSVUZCUlN4cFFrRkJUeXhIUVVGSExHMUNRVUZSTEVOQlFVTXNRMEZCUXp0UlFVTTVSQ3hKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEZWQlFWVXNRMEZCUXl4VlFVRlZMRVZCUVVVc2FVSkJRVThzUjBGQlJ5eHBRa0ZCVHl4SFFVRkhMRzFDUVVGUkxFTkJRVU1zUTBGQlF6dFJRVU4yUlN4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExHbERRVUZsTEVOQlFVTXNTMEZCU3l4RFFVRkRPMUZCUTNCRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NSVUZCUlN4RFFVRkRPMGxCUTNKQ0xFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEdGQlFUWkNPMUZCUTJ4RUxFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNVVUZCVVN4RlFVRkZPMWxCUTNSQ0xGVkJRVlVzUTBGQlF5eFJRVUZSTEVkQlFVY3NTVUZCU1N4VlFVRlZMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU03VTBGRGRrUTdTVUZEVEN4RFFVRkRPMGxCUlVRN08wOUJSVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNVMEZCVXp0UlFVTnVRaXhKUVVGSkxGVkJRVlVzUTBGQlF5eFJRVUZSTEVWQlFVVTdXVUZEY2tJc1ZVRkJWU3hEUVVGRExGRkJRVkVzUjBGQlJ5eFRRVUZUTEVOQlFVTTdVMEZEYmtNN1NVRkRUQ3hEUVVGRE8wbEJSVVE3T3pzN08wOUJTMGM3U1VGRFZTeG5Ra0ZCWjBJc1EwRkJReXhOUVVGakxFVkJRVVVzYTBKQlFUQkNPenRaUVVOd1JTeE5RVUZOTEZsQlFWa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFsQlF6RkRMRTlCUVU4c1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFpRVUZaTEVWQlFVVXNhMEpCUVd0Q0xFTkJRVU1zUTBGQlF6dFJRVU42UkN4RFFVRkRPMHRCUVVFN1NVRkZSQ3hsUVVGbE8wbEJRMUFzVDBGQlR5eERRVUZETEdsQ1FVRjVRanRSUVVOeVF5eE5RVUZOTEVsQlFVa3NSMEZCUnl3MlFrRkJZU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVOeVJDeEpRVUZKTEVOQlFVTXNWVUZCVlN4RlFVRkZMRU5CUVVNN1VVRkRiRUlzVFVGQlRTeG5Ra0ZCWjBJc1IwRkJSeXhoUVVGTExFTkJRVU1zVlVGQlZTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdVVUZEZGtVc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eG5Ra0ZCWjBJc1JVRkJSU3hEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEd0Q1FVRnJRaXhIUVVGSExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0UlFVTTNSU3hOUVVGTkxGTkJRVk1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1VVRkRiRU1zWjBKQlFXZENPMkZCUTFnc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eHJRa0ZCYTBJc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVsQlFVa3NRMEZCUXl4clFrRkJhMElzUTBGQlF6dGhRVU14UlN4UFFVRlBMRU5CUVVNc1EwRkJReXhMUVVGaExFVkJRVVVzUzBGQllTeEZRVUZGTEVWQlFVVTdXVUZEZEVNc1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXp0UlFVTTNRaXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5RTEU5QlFVOHNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF6dEpRVU40UXl4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVORUxFMUJRVTBzUTBGQlF5eE5RVUU0UWl4RlFVRkZMRk5CUVdsQ096dFpRVU5zUlN4elJFRkJjMFE3V1VGRGRFUXNhVVJCUVdsRU8xbEJRMnBFTEU5QlFVOHNTVUZCU1N4UFFVRlBMRU5CUVZNc1EwRkJReXhQUVVGUExFVkJRVVVzVFVGQlRTeEZRVUZGTEVWQlFVVTdaMEpCUXpORExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRPMjlDUVVOaUxFMUJRVTBzUlVGQlJTeE5RVUZOTzI5Q1FVTmtMR3RDUVVGclFpeEZRVUZGTEZOQlFWTTdiMEpCUXpkQ0xGRkJRVkVzUlVGQlJTeFBRVUZQTzJsQ1FVTndRaXhEUVVGRExFTkJRVU03WjBKQlEwZ3NTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hMUVVGTExHbERRVUZsTEVOQlFVTXNTMEZCU3l4RlFVRkZPMjlDUVVOMlF5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RlFVRkZMRU5CUVVNN2FVSkJRM1pDTzFsQlEwd3NRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRVQ3hEUVVGRE8wdEJRVUU3U1VGRlJDeGxRVUZsTzBsQlExQXNXVUZCV1N4RFFVRkRMRXRCUVdkQ08xRkJRMnBETEUxQlFVMHNUVUZCVFN4SFFVRkhPMWxCUTFnc1IwRkJSeXhGUVVGRkxFbEJRVWtzVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNN1dVRkRkRU1zU1VGQlNTeEZRVUZGTEVsQlFVa3NWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU03VTBGRE1VTXNRMEZCUXp0UlFVTkdMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eEpRVUZaTEVWQlFVVXNTMEZCWVN4RlFVRkZMRVZCUVVVN1dVRkRNVU1zVVVGQlVTeEpRVUZKTEVWQlFVVTdaMEpCUTFZc1MwRkJTeXhEUVVGRE8yOUNRVU5HTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzVlVGQlZTeERRVUZETEZOQlFWTXNRMEZCUXp0dlFrRkRla01zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhWUVVGVkxFTkJRVU1zVTBGQlV5eERRVUZETzI5Q1FVTXhReXhOUVVGTk8yZENRVU5XTEV0QlFVc3NRMEZCUXp0dlFrRkRSaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRlZCUVZVc1EwRkJReXhSUVVGUkxFTkJRVU03YjBKQlEzaERMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NWVUZCVlN4RFFVRkRMRk5CUVZNc1EwRkJRenR2UWtGRE1VTXNUVUZCVFR0blFrRkRWanR2UWtGRFNTeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExGVkJRVlVzUTBGQlF5eFRRVUZUTEVOQlFVTTdiMEpCUTNwRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1ZVRkJWU3hEUVVGRExGRkJRVkVzUTBGQlF6dGhRVU5vUkR0UlFVTk1MRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMGdzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzFGQlF6VkRMRTlCUVU4c1RVRkJUU3hEUVVGRE8wbEJRMnhDTEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTFBc1dVRkJXU3hEUVVGRExFMUJRVGhDTEVWQlFVVXNUVUZCWXp0UlFVTXZSQ3hOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhWUVVGVkxFTkJRVU1zUzBGQlN5eERRVUZETzFGQlF6RkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRlZCUVZVc1EwRkJReXhMUVVGTExFTkJRVU03VVVGRE1VTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NWVUZCVlN4RFFVRkRMRXRCUVVzc1EwRkJRenRSUVVNeFF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eFZRVUZWTEVOQlFVTXNTMEZCU3l4RFFVRkRPMUZCUXpGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTTdVVUZETlVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF6dFJRVU0xUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4VlFVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRE8xRkJRelZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEZWQlFWVXNRMEZCUXl4TlFVRk5MRU5CUVVNN1NVRkRhRVFzUTBGQlF6dEpRVVZFTEdWQlFXVTdTVUZEVUN4WlFVRlpPMUZCUTJoQ0xFMUJRVTBzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03VVVGRGFrTXNTVUZCU1N3eVFrRkJXU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTTFRaXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEdsRFFVRmxMRU5CUVVNc1MwRkJTeXhEUVVGRE8xTkJRM1pETzJGQlFVMDdXVUZEU0N4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExHbERRVUZsTEVOQlFVTXNVMEZCVXl4RFFVRkRPMWxCUTNoRExFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1UwRkROMEk3U1VGRFRDeERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMR05CUVdNc1EwRkJReXhaUVVGdlF6dFJRVU4yUkN4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNXVUZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJRelZETEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTXNRMEZCUXp0UlFVTnFSQ3hKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEZWQlFWVXNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzU1VGQlNTeEZRVUZGTEZkQlFWY3NSVUZCUlN4TFFVRkxMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU42UlN4VlFVRlZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4WlFVRlpMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU40UkN4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxHbENRVUZwUWl4RFFVRkRMRTFCUVRoQ08xRkJRM0JFTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xbEJRM2hETEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNc1EwRkJReXhIUVVGSExGVkJRVlVzUTBGQlF5eFZRVUZWTEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF5OUVMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zUTBGQlF5eEhRVUZITEZWQlFWVXNRMEZCUXl4VlFVRlZMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOd1JTeEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhWUVVGVkxFTkJRVU1zVlVGQlZTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYmtVc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eERRVUZETEVkQlFVY3NWVUZCVlN4RFFVRkRMRlZCUVZVc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRM1pGTzBsQlEwd3NRMEZCUXp0SlFVVkVMR1ZCUVdVN1NVRkRVQ3hYUVVGWExFTkJRVU1zV1VGQmIwTTdVVUZEY0VRc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eFZRVUZWTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRemRETEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFOUJRVThzUlVGQlJTeEpRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMRU5CUVVNN1VVRkRNVVFzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVsQlFVa3NSVUZCUlN4dlFrRkJiMElzUlVGQlJTeExRVUZMTEVWQlFVVXNXVUZCV1N4RFFVRkRMR3RDUVVGclFpeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTnFTQ3hKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEZWQlFWVXNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRk4wTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFVkJRVVU3V1VGRGJFVXNWVUZCVlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNXVUZCV1N4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03VTBGRGVFUTdZVUZCVFR0WlFVTklMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zVlVGQlZTeERRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNMVF5eE5RVUZOTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zWVVGQllTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRwUWtGRGFrWXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRPMmxDUVVONFFpeExRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU03YVVKQlF6RkNMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJSWEJDTEZsQlFWa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1lVRkJTeXhEUVVGRExHVkJRV1VzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJReTlFTEVsQlFVa3NRMEZCUXl4WlFVRlpMRVZCUVVVc1EwRkJRenRUUVVOMlFqdEpRVU5NTEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTFBc1NVRkJTU3hEUVVGRExFTkJRVk03VVVGRGJFSXNUMEZCVHl4RFFVRkRMRU5CUVdFc1JVRkJSU3haUVVGWkxFVkJRVVVzV1VGQldTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRmxCUVZrc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMGxCUTNSS0xFTkJRVU03TzBGQk0wNUVMR1ZCUVdVN1FVRkRVeXh4UWtGQlZTeEhRVUZYTEVOQlFVTXNRMEZCUXp0QlFVVXZReXhsUVVGbE8wRkJRMU1zYlVKQlFWRXNSMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJReXhYUVVGWE8wRkJRM3BFTEdWQlFXVTdRVUZEVXl4dlFrRkJVeXhIUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNhVU5CUVdsRE8wRkJRMnBHTEdWQlFXVTdRVUZEVXl4blFrRkJTeXhIUVVGWExGVkJRVlVzUTBGQlF5eERRVUZETEZsQlFWazdRVUZEYUVVc1pVRkJaVHRCUVVOVExHZENRVUZMTEVkQlFWY3NWVUZCVlN4RFFVRkRMRU5CUVVNc1dVRkJXVHRCUVVOb1JTeGxRVUZsTzBGQlExTXNaMEpCUVVzc1IwRkJWeXhWUVVGVkxFTkJRVU1zUTBGQlF5eFpRVUZaTzBGQlEyaEZMR1ZCUVdVN1FVRkRVeXhuUWtGQlN5eEhRVUZYTEZWQlFWVXNRMEZCUXl4RFFVRkRMRmxCUVZrN1FVRkRhRVVzWlVGQlpUdEJRVU5UTEdsQ1FVRk5MRWRCUVZjc1ZVRkJWU3hEUVVGRExFTkJRVU1zV1VGQldUdEJRVU5xUlN4bFFVRmxPMEZCUTFNc2FVSkJRVTBzUjBGQlZ5eFZRVUZWTEVOQlFVTXNRMEZCUXl4WlFVRlpPMEZCUTJwRkxHVkJRV1U3UVVGRFV5eHBRa0ZCVFN4SFFVRlhMRlZCUVZVc1EwRkJReXhEUVVGRExGbEJRVms3UVVGRGFrVXNaVUZCWlR0QlFVTlRMR2xDUVVGTkxFZEJRVmNzVlVGQlZTeERRVUZETEVOQlFVTXNWMEZCVnp0QlFYcENjRVVzWjBOQkswNURJbjA9IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogUGVhcmxEaXZlciBTdGF0ZS5cclxuICovXHJcbnZhciBQZWFybERpdmVyU3RhdGU7XHJcbihmdW5jdGlvbiAoUGVhcmxEaXZlclN0YXRlKSB7XHJcbiAgICBQZWFybERpdmVyU3RhdGVbUGVhcmxEaXZlclN0YXRlW1wicmVhZHlcIl0gPSAwXSA9IFwicmVhZHlcIjtcclxuICAgIFBlYXJsRGl2ZXJTdGF0ZVtQZWFybERpdmVyU3RhdGVbXCJzZWFyY2hpbmdcIl0gPSAxXSA9IFwic2VhcmNoaW5nXCI7XHJcbiAgICBQZWFybERpdmVyU3RhdGVbUGVhcmxEaXZlclN0YXRlW1wiaW50ZXJydXB0ZWRcIl0gPSAtMV0gPSBcImludGVycnVwdGVkXCI7XHJcbn0pKFBlYXJsRGl2ZXJTdGF0ZSA9IGV4cG9ydHMuUGVhcmxEaXZlclN0YXRlIHx8IChleHBvcnRzLlBlYXJsRGl2ZXJTdGF0ZSA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNHVmhjbXhFYVhabGNsTjBZWFJsTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMM0JsWVhKc1JHbDJaWEl2Y0dWaGNteEVhWFpsY2xOMFlYUmxMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdSMEZGUnp0QlFVTklMRWxCUVZrc1pVRkpXRHRCUVVwRUxGZEJRVmtzWlVGQlpUdEpRVU4yUWl4MVJFRkJVeXhEUVVGQk8wbEJRMVFzSzBSQlFXRXNRMEZCUVR0SlFVTmlMRzlGUVVGblFpeERRVUZCTzBGQlEzQkNMRU5CUVVNc1JVRktWeXhsUVVGbExFZEJRV1lzZFVKQlFXVXNTMEZCWml4MVFrRkJaU3hSUVVreFFpSjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgY3J5cHRvRXJyb3JfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L2Vycm9yL2NyeXB0b0Vycm9yXCIpO1xyXG5jb25zdCBwcm9vZk9mV29ya0Jhc2VfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L3Byb29mT2ZXb3JrL3Byb29mT2ZXb3JrQmFzZVwiKTtcclxuY29uc3QgdHJ5dGVzXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cnl0ZXNcIik7XHJcbmNvbnN0IHBlYXJsRGl2ZXJfMSA9IHJlcXVpcmUoXCIuL3BlYXJsRGl2ZXIvcGVhcmxEaXZlclwiKTtcclxuLyoqXHJcbiAqIFByb29mT2ZXb3JrIGltcGxlbWVudGF0aW9uIHVzaW5nIFdlYkdMLlxyXG4gKi9cclxuY2xhc3MgUHJvb2ZPZldvcmtXZWJHbCBleHRlbmRzIHByb29mT2ZXb3JrQmFzZV8xLlByb29mT2ZXb3JrQmFzZSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBQcm9vZk9mV29yay5cclxuICAgICAqIEBwYXJhbSB3ZWJHTFBsYXRmb3JtIFByb3ZpZGVzIHBsYXRmb3JtIHNwZWNpZmljIGZ1bmN0aW9ucywgb3B0aW9uYWwgbW9zdGx5IHVzZWQgZm9yIHRlc3RpbmcuXHJcbiAgICAgKiBAcGFyYW0gdGltZVNlcnZpY2UgU2VydmljZSB0byBnZXQgdGhlIHRpbWUgZm9yIGF0dGFjaG1lbnRzLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcih3ZWJHTFBsYXRmb3JtLCB0aW1lU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKHRpbWVTZXJ2aWNlKTtcclxuICAgICAgICBpZiAob2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzRW1wdHkod2ViR0xQbGF0Zm9ybSkpIHtcclxuICAgICAgICAgICAgdGhpcy5fd2ViR0xQbGF0Zm9ybSA9IHtcclxuICAgICAgICAgICAgICAgIGdldFdpbmRvdzogKCkgPT4gd2luZG93LFxyXG4gICAgICAgICAgICAgICAgZ2V0RG9jdW1lbnQ6ICh3aW5kb3cpID0+IHdpbmRvdy5kb2N1bWVudCxcclxuICAgICAgICAgICAgICAgIGdldENhbnZhczogKGRvY3VtZW50KSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLFxyXG4gICAgICAgICAgICAgICAgZ2V0V2ViR0w6IChjYW52YXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyID0geyBhbHBoYTogZmFsc2UsIGFudGlhbGlhczogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ2wyXCIsIGF0dHIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3dlYkdMUGxhdGZvcm0gPSB3ZWJHTFBsYXRmb3JtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWxsb3cgdGhlIHByb29mIG9mIHdvcmsgdG8gcGVyZm9ybSBhbnkgaW5pdGlhbGl6YXRpb24uXHJcbiAgICAgKiBXaWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiB0aGUgaW1wbGVtZW50YXRpb24gaXMgbm90IHN1cHBvcnRlZC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2UuXHJcbiAgICAgKi9cclxuICAgIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgY29uc3QgX3N1cGVyID0gT2JqZWN0LmNyZWF0ZShudWxsLCB7XHJcbiAgICAgICAgICAgIGluaXRpYWxpemU6IHsgZ2V0OiAoKSA9PiBzdXBlci5pbml0aWFsaXplIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIHlpZWxkIF9zdXBlci5pbml0aWFsaXplLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBlYXJsRGl2ZXJfMS5QZWFybERpdmVyLmluaXRpYWxpemUodGhpcy5fd2ViR0xQbGF0Zm9ybSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNJbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUGVyZm9ybSBhIHByb29mIG9mIHdvcmsgb24gYSBzaW5nbGUgaXRlbS5cclxuICAgICAqIEBwYXJhbSB0cnl0ZXMgVGhlIHRyeXRlcyB0byBwZXJmb3JtIHRoZSBwb3cgb24uXHJcbiAgICAgKiBAcGFyYW0gbWluV2VpZ2h0TWFnbml0dWRlIFRoZSBtaW5pbXVtIHdlaWdodCBtYWduaXR1ZGUuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgdHJ5dGVzIHByb2R1Y2VkIGJ5IHRoZSBwcm9vZiBvZiB3b3JrLlxyXG4gICAgICovXHJcbiAgICBzaW5nbGVQb3codHJ5dGVzLCBtaW5XZWlnaHRNYWduaXR1ZGUpIHtcclxuICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5faXNJbml0aWFsaXplZCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJXZWJHTCBpcyBub3QgaW5pdGlhbGl6ZWQsIGhhdmUgeW91IGNhbGxlZCBpbml0aWFsaXplXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0cnl0ZXMsIHRyeXRlc18xLlRyeXRlcykpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIHRyeXRlcyBtdXN0IGJlIGFuIG9iamVjdCBvZiB0eXBlIFRyeXRlc1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobWluV2VpZ2h0TWFnbml0dWRlKSB8fCBtaW5XZWlnaHRNYWduaXR1ZGUgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgbWluV2VpZ2h0TWFnbml0dWRlIG11c3QgYmUgPiAwXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG5vbmNlID0geWllbGQgcGVhcmxEaXZlcl8xLlBlYXJsRGl2ZXIuaW5zdGFuY2Uuc2VhcmNoV2l0aFRyeXRlcyh0cnl0ZXMsIG1pbldlaWdodE1hZ25pdHVkZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyeXRlc1N0cmluZyA9IHRyeXRlcy50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBjb25zdCBub25jZVN0cmluZyA9IG5vbmNlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyh0cnl0ZXNTdHJpbmcuc3Vic3RyKDAsIHRyeXRlc1N0cmluZy5sZW5ndGggLSBub25jZVN0cmluZy5sZW5ndGgpLmNvbmNhdChub25jZVN0cmluZykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUHJvb2ZPZldvcmtXZWJHbCA9IFByb29mT2ZXb3JrV2ViR2w7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISnZiMlpQWmxkdmNtdFhaV0pIYkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOeVl5OXdjbTl2Wms5bVYyOXlhMWRsWWtkc0xuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFc05FVkJRWGxGTzBGQlEzcEZMRFJGUVVGNVJUdEJRVVY2UlN3d1JVRkJkVVU3UVVGRGRrVXNkMFpCUVhGR08wRkJRM0pHTERaRVFVRXdSRHRCUVVVeFJDeDNSRUZCY1VRN1FVRkhja1E3TzBkQlJVYzdRVUZEU0N4TlFVRmhMR2RDUVVGcFFpeFRRVUZSTEdsRFFVRmxPMGxCVDJwRU96czdPMDlCU1VjN1NVRkRTQ3haUVVGWkxHRkJRVGhDTEVWQlFVVXNWMEZCTUVJN1VVRkRiRVVzUzBGQlN5eERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMUZCUlc1Q0xFbEJRVWtzTWtKQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1lVRkJZU3hEUVVGRExFVkJRVVU3V1VGRGNrTXNTVUZCU1N4RFFVRkRMR05CUVdNc1IwRkJSenRuUWtGRGJFSXNVMEZCVXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFMUJRVTA3WjBKQlEzWkNMRmRCUVZjc1JVRkJSU3hEUVVGRExFMUJRVTBzUlVGQlJTeEZRVUZGTEVOQlFVTXNUVUZCVFN4RFFVRkRMRkZCUVZFN1owSkJRM2hETEZOQlFWTXNSVUZCUlN4RFFVRkRMRkZCUVZFc1JVRkJSU3hGUVVGRkxFTkJRVU1zVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4UlFVRlJMRU5CUVVNN1owSkJRM3BFTEZGQlFWRXNSVUZCUlN4RFFVRkRMRTFCUVUwc1JVRkJSU3hGUVVGRk8yOUNRVU5xUWl4TlFVRk5MRWxCUVVrc1IwRkJSeXhGUVVGRkxFdEJRVXNzUlVGQlJTeExRVUZMTEVWQlFVVXNVMEZCVXl4RlFVRkZMRXRCUVVzc1JVRkJSU3hEUVVGRE8yOUNRVU5vUkN4TlFVRk5MRVZCUVVVc1IwRkJSeXhOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEZGQlFWRXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenR2UWtGRE4wTXNUMEZCYVVNc1JVRkJSU3hEUVVGRE8yZENRVU40UXl4RFFVRkRPMkZCUTBvc1EwRkJRenRUUVVOTU8yRkJRVTA3V1VGRFNDeEpRVUZKTEVOQlFVTXNZMEZCWXl4SFFVRkhMR0ZCUVdFc1EwRkJRenRUUVVOMlF6dEpRVU5NTEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlExVXNWVUZCVlRzN096czdXVUZEYmtJc1RVRkJUU3hQUVVGTkxGVkJRVlVzVjBGQlJTeERRVUZETzFsQlEzcENMRTlCUVU4c1NVRkJTU3hQUVVGUExFTkJRVThzUTBGQlF5eFBRVUZQTEVWQlFVVXNUVUZCVFN4RlFVRkZMRVZCUVVVN1owSkJRM3BETEVsQlFVazdiMEpCUTBFc2RVSkJRVlVzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhEUVVGRE8yOUNRVU16UXl4SlFVRkpMRU5CUVVNc1kwRkJZeXhIUVVGSExFbEJRVWtzUTBGQlF6dHZRa0ZETTBJc1QwRkJUeXhGUVVGRkxFTkJRVU03YVVKQlEySTdaMEpCUVVNc1QwRkJUeXhIUVVGSExFVkJRVVU3YjBKQlExWXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8ybENRVU5tTzFsQlEwd3NRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRVQ3hEUVVGRE8wdEJRVUU3U1VGRlJEczdPenM3VDBGTFJ6dEpRVU5WTEZOQlFWTXNRMEZCUXl4TlFVRmpMRVZCUVVVc2EwSkJRVEJDT3p0WlFVTTNSQ3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEdOQlFXTXNSVUZCUlR0blFrRkRkRUlzVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2MwUkJRWE5FTEVOQlFVTXNRMEZCUXp0aFFVTnFSanRaUVVORUxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFVkJRVVVzWlVGQlRTeERRVUZETEVWQlFVVTdaMEpCUTNSRExFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMRFpEUVVFMlF5eERRVUZETEVOQlFVTTdZVUZEZUVVN1dVRkRSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNTVUZCU1N4clFrRkJhMElzU1VGQlNTeERRVUZETEVWQlFVVTdaMEpCUTNoRkxFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMRzlEUVVGdlF5eERRVUZETEVOQlFVTTdZVUZETDBRN1dVRkZSQ3hOUVVGTkxFdEJRVXNzUjBGQlJ5eE5RVUZOTEhWQ1FVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRTFCUVUwc1JVRkJSU3hyUWtGQmEwSXNRMEZCUXl4RFFVRkRPMWxCUlhKR0xFMUJRVTBzV1VGQldTeEhRVUZITEUxQlFVMHNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRaUVVOMlF5eE5RVUZOTEZkQlFWY3NSMEZCUnl4TFFVRkxMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03V1VGRGNrTXNUMEZCVHl4bFFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExGbEJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMRmxCUVZrc1EwRkJReXhOUVVGTkxFZEJRVWNzVjBGQlZ5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyNUlMRU5CUVVNN1MwRkJRVHREUVVOS08wRkJlRVZFTERSRFFYZEZReUo5IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogU2hhZGVycyBhZGQuXHJcbiAqL1xyXG5leHBvcnRzLmFkZCA9IGBcbmludCBzdW0gKGludCBhLCBpbnQgYikge1xuICBpbnQgbXlfc3VtID0gYSArIGI7XG4gIHJldHVybiBteV9zdW0gPT0gMiA/IC0xIDogKG15X3N1bSA9PSAtMikgPyAxIDogbXlfc3VtO1xufVxuaW50IGNvbnMgKGludCBhLCBpbnQgYikge1xuICByZXR1cm4gKGEgPT0gMSAmJiBiID09IDEpPyAxIDogKGEgPT0gLTEgJiYgYiA9PSAtMSkgPyAtMSA6IDA7XG59XG5pbnQgYW55X3QgKGludCBhLCBpbnQgYikge1xuICBpbnQgbXlfYW55ID0gYSArIGI7XG4gIHJldHVybiBteV9hbnkgPT0gMCA/IDAgOiAobXlfYW55ID4gMCkgPyAxIDogLTE7XG59XG5pdmVjMiBmdWxsX2FkZGVyKGludCBhLCBpbnQgYiwgaW50IGMpIHtcbiAgaW50IGNfYSwgY19iLCBzdW1fYWIsIGNfcztcblxuICBjX2EgICAgPSBjb25zKGEsYik7XG4gIHN1bV9hYiA9IHN1bShhLGIpO1xuICBjX2IgICAgPSBjb25zKHN1bV9hYixjKTtcbiAgY19zICAgID0gYW55X3QoY19hLCBjX2IpO1xuXG4gIHJldHVybiBpdmVjMihzdW0oc3VtX2FiLCBjKSwgY19zKTtcbn1cbml2ZWMyIGdldF9zdW1fdG9faW5kZXgoaW50IGZyb20sIGludCB0bywgaW50IG51bWJlcl90b19hZGQsIGludCByb3cpIHtcbiAgaW50IHRyaXRfdG9fYWRkLCB0cml0X2F0X2luZGV4LCBwb3csIGNhcnJ5LCBudW1fY2Fycnk7XG4gIGl2ZWMyIHJlYWRfaW4sIHN1bV9vdXQsIG91dF90cml0O1xuICBwb3cgPSAxO1xuICBjYXJyeSA9IDA7XG4gIG51bV9jYXJyeSA9IDA7XG5cbiAgZm9yKGludCBpID0gZnJvbTsgaSA8IHRvOyBpKyspIHtcbiAgICAvL2lmKHRyaXRfdG9fYWRkID09IDAgJiYgc3VtX291dC50ID09IDApIGNvbnRpbnVlO1xuXG4gICAgcmVhZF9pbiA9IHJlYWRfYXQgKCBpdmVjMiAoaSwgcm93KSkucmc7XG5cbiAgICB0cml0X3RvX2FkZCA9ICgobnVtYmVyX3RvX2FkZCAvIHBvdykgJSAzKSArIG51bV9jYXJyeTtcbiAgICBudW1fY2FycnkgPSB0cml0X3RvX2FkZCA+IDEgPyAxIDogMDtcbiAgICB0cml0X3RvX2FkZCA9ICh0cml0X3RvX2FkZCA9PSAyID8gLTEgOiAodHJpdF90b19hZGQgPT0gMyA/IDAgOiB0cml0X3RvX2FkZCkpO1xuXG4gICAgc3VtX291dCA9IGZ1bGxfYWRkZXIoXG4gICAgICAocmVhZF9pbi5zID09IExPV19CSVRTID8gMSA6IHJlYWRfaW4udCA9PSBMT1dfQklUUz8gLTEgOiAwKSxcbiAgICAgIHRyaXRfdG9fYWRkLFxuICAgICAgY2FycnlcbiAgICApO1xuXG4gICAgaWYobXlfY29vcmQueCA9PSBpKSBicmVhaztcbiAgICBjYXJyeSA9IHN1bV9vdXQudDtcbiAgICBwb3cgKj0zO1xuICB9XG4gIGlmKHN1bV9vdXQucyA9PSAwKSB7XG4gICAgcmV0dXJuIGl2ZWMyKEhJR0hfQklUUyk7XG4gIH0gZWxzZSBpZiAoc3VtX291dC5zID09IDEpIHtcbiAgICByZXR1cm4gaXZlYzIoTE9XX0JJVFMsIEhJR0hfQklUUyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGl2ZWMyKEhJR0hfQklUUywgTE9XX0JJVFMpO1xuICB9XG59XG5gO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZV1JrTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMM05vWVdSbGNuTXZZV1JrTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHM3UjBGRlJ6dEJRVU5WTEZGQlFVRXNSMEZCUnl4SFFVRkhPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenREUVhkRWJFSXNRMEZCUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIFNoYWRlcnMgY2hlY2tfY29sLlxyXG4gKi9cclxuZXhwb3J0cy5jaGVja0NvbCA9IGBcbnZvaWQgbWFpbigpIHtcbiAgaW5pdCgpO1xuICBpdmVjNCBteV92ZWMgPSByZWFkKCk7XG4gIGludCBpO1xuICBpZihteV9jb29yZC54ID09IFNUQVRFX0xFTkdUSCAmJiBteV9jb29yZC55ID09IDApIHtcbiAgICBteV92ZWMuYiA9IDA7XG4gICAgaWYobXlfdmVjLmEgPT0gMCkge1xuICAgICAgaXZlYzQgcmVhZF92ZWM7XG4gICAgICBteV92ZWMuYiA9IC0xO1xuICAgICAgZm9yKGkgPSAxOyBpIDwgaW50KHNpemUueSk7IGkrKykge1xuICAgICAgICByZWFkX3ZlYyA9IHJlYWRfYXQoIGl2ZWMyKCBTVEFURV9MRU5HVEgsIGkpKTtcbiAgICAgICAgaWYocmVhZF92ZWMuYSAhPSAwKSB7XG4gICAgICAgICAgbXlfdmVjLmEgPSByZWFkX3ZlYy5hO1xuICAgICAgICAgIG15X3ZlYy5iID0gaTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb21taXQobXlfdmVjKTtcbn1cbmA7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkyaGxZMnREYjJ3dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12YzJoaFpHVnljeTlqYUdWamEwTnZiQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRTdPMGRCUlVjN1FVRkRWU3hSUVVGQkxGRkJRVkVzUjBGQlJ6czdPenM3T3pzN096czdPenM3T3pzN096czdPenREUVhOQ2RrSXNRMEZCUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIFNoYWRlcnMgY2hlY2tfZG8uXHJcbiAqL1xyXG5leHBvcnRzLmNoZWNrRG8gPSBgXG5pbnQgY2hlY2soaW50IHJvdywgaW50IG1pbl93ZWlnaHRfbWFnbml0dWRlKSB7XG4gIGludCBub25jZV9wcm9iZSwgaTtcbiAgaXZlYzIgcl90ZXhlbDtcbiAgbm9uY2VfcHJvYmUgPSBISUdIX0JJVFM7XG4gIGZvcihpID0gbWluX3dlaWdodF9tYWduaXR1ZGU7IGktLSA+IDA7ICkge1xuICAgIHJfdGV4ZWwgPSByZWFkX2F0KGl2ZWMyKEhBU0hfTEVOR1RIIC0gMSAtIGksIHJvdykpLmJhO1xuICAgIG5vbmNlX3Byb2JlICY9IH4ocl90ZXhlbC5zIF4gcl90ZXhlbC50KTtcbiAgICBpZihub25jZV9wcm9iZSA9PSAwKSBicmVhaztcbiAgfVxuICByZXR1cm4gbm9uY2VfcHJvYmU7XG59XG5gO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMmhsWTJ0RWJ5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5emFHRmtaWEp6TDJOb1pXTnJSRzh1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJPenRIUVVWSE8wRkJRMVVzVVVGQlFTeFBRVUZQTEVkQlFVYzdPenM3T3pzN096czdPenREUVZsMFFpeERRVUZESW4wPSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIFNoYWRlcnMgY2hlY2tfay5cclxuICovXHJcbmV4cG9ydHMuY2hlY2tLID0gYFxudW5pZm9ybSBpbnQgbWluV2VpZ2h0TWFnbml0dWRlO1xudm9pZCBtYWluKCkge1xuICBpbml0KCk7XG4gIGl2ZWM0IG15X3ZlYyA9IHJlYWQoKTtcbiAgaWYobXlfY29vcmQueCA9PSBTVEFURV9MRU5HVEgpIHtcbiAgICBteV92ZWMuciA9IG1pbldlaWdodE1hZ25pdHVkZTtcbiAgICBteV92ZWMuYSA9IGNoZWNrKG15X2Nvb3JkLnksIG1pbldlaWdodE1hZ25pdHVkZSk7XG4gIH1cbiAgY29tbWl0KG15X3ZlYyk7XG59XG5gO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMmhsWTJ0TExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDNOb1lXUmxjbk12WTJobFkydExMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdSMEZGUnp0QlFVTlZMRkZCUVVFc1RVRkJUU3hIUVVGSE96czdPenM3T3pzN096dERRVmR5UWl4RFFVRkRJbjA9IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogU2hhZGVycyBmaW5hbGl6ZS5cclxuICovXHJcbmV4cG9ydHMuZmluYWxpemUgPSBgXG52b2lkIG1haW4oKSB7XG4gIGluaXQoKTtcbiAgaXZlYzQgbXlfdmVjID0gcmVhZCgpO1xuICBpZihteV9jb29yZC55ID09IDAgJiYgbXlfY29vcmQueCA9PSBTVEFURV9MRU5HVEgpIHtcbiAgICBteV92ZWMuZyA9IGNoZWNrKG15X3ZlYy5iLCBteV92ZWMucik7XG4gIH1cbiAgaWYobXlfY29vcmQueSA9PSAwICYmIG15X2Nvb3JkLnggPCBIQVNIX0xFTkdUSCkge1xuICAgIGl2ZWM0IGluZm9fdmVjID0gcmVhZF9hdChpdmVjMihTVEFURV9MRU5HVEgsIDApKTtcbiAgICBpbnQgbm9uY2VfcHJvYmUgPSBpbmZvX3ZlYy5hO1xuICAgIGludCByb3cgPSBpbmZvX3ZlYy5iO1xuICAgIGl2ZWM0IGhhc2hfdmVjID0gcmVhZF9hdChpdmVjMihteV9jb29yZC54LCByb3cpKTtcbiAgICBteV92ZWMuYSA9IChoYXNoX3ZlYy5yICYgbm9uY2VfcHJvYmUpID09IDA/IDEgOiAoKGhhc2hfdmVjLmcgJiBub25jZV9wcm9iZSkgPT0gMD8gLTEgOiAwKTtcbiAgfVxuICBjb21taXQobXlfdmVjKTtcbn1cbmA7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVptbHVZV3hwZW1VdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12YzJoaFpHVnljeTltYVc1aGJHbDZaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRTdPMGRCUlVjN1FVRkRWU3hSUVVGQkxGRkJRVkVzUjBGQlJ6czdPenM3T3pzN096czdPenM3T3p0RFFXZENka0lzUTBGQlF5SjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBTaGFkZXJzIGFkZC5cclxuICovXHJcbmV4cG9ydHMuaGVhZGVycyA9IGBcbiNkZWZpbmUgSEFTSF9MRU5HVEggMjQzXG4jZGVmaW5lIE5VTUJFUl9PRl9ST1VORFMgODFcbiNkZWZpbmUgSU5DUkVNRU5UX1NUQVJUIEhBU0hfTEVOR1RIIC0gNjRcbiNkZWZpbmUgU1RBVEVfTEVOR1RIIDMgKiBIQVNIX0xFTkdUSFxuI2RlZmluZSBIQUxGX0xFTkdUSCAzNjRcbiNkZWZpbmUgSElHSF9CSVRTIDB4RkZGRkZGRkZcbiNkZWZpbmUgTE9XX0JJVFMgMHgwMDAwMDAwMFxuYDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYUdWaFpHVnljeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXphR0ZrWlhKekwyaGxZV1JsY25NdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCT3p0SFFVVkhPMEZCUTFVc1VVRkJRU3hQUVVGUExFZEJRVWM3T3pzN096czdPME5CVVhSQ0xFTkJRVU1pZlE9PSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIFNoYWRlcnMgaW5jcmVtZW50LlxyXG4gKi9cclxuZXhwb3J0cy5pbmNyZW1lbnQgPSBgXG52b2lkIG1haW4oKSB7XG4gIGluaXQoKTtcbiAgaXZlYzQgbXlfdmVjID0gcmVhZCgpO1xuICBpZihteV9jb29yZC54ID49IElOQ1JFTUVOVF9TVEFSVCAmJiBteV9jb29yZC54IDwgSEFTSF9MRU5HVEggKSB7XG4gICAgbXlfdmVjLnJnID0gZ2V0X3N1bV90b19pbmRleChJTkNSRU1FTlRfU1RBUlQsIEhBU0hfTEVOR1RILCAxLCBteV9jb29yZC55KTtcbiAgfVxuICBpZihteV9jb29yZC54ID09IFNUQVRFX0xFTkdUSCApIHtcbiAgICBteV92ZWMucmcgPSBpdmVjMigwKTtcbiAgfVxuICBteV92ZWMuYmEgPSBteV92ZWMucmc7XG4gIGNvbW1pdChteV92ZWMpO1xufVxuYDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1amNtVnRaVzUwTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMM05vWVdSbGNuTXZhVzVqY21WdFpXNTBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdSMEZGUnp0QlFVTlZMRkZCUVVFc1UwRkJVeXhIUVVGSE96czdPenM3T3pzN096czdPME5CWVhoQ0xFTkJRVU1pZlE9PSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIFNoYWRlcnMgaW5pdC5cclxuICovXHJcbmV4cG9ydHMuaW5pdCA9IGBcbnVuaWZvcm0gaW50IGdyX29mZnNldDtcbml2ZWM0IG9mZnNldCgpIHtcbiAgaWYobXlfY29vcmQueCA+PSBIQVNIX0xFTkdUSCAvIDMgJiYgbXlfY29vcmQueCA8IEhBU0hfTEVOR1RIIC8gMyAqIDIgKSB7XG4gICAgaXZlYzQgbXlfdmVjO1xuICAgIG15X3ZlYy5yZyA9IGdldF9zdW1fdG9faW5kZXgoSEFTSF9MRU5HVEggLyAzLCBIQVNIX0xFTkdUSCAvIDMgKiAyLCBteV9jb29yZC55ICsgZ3Jfb2Zmc2V0LCAwKTtcbiAgICByZXR1cm4gbXlfdmVjO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiByZWFkX2F0KGl2ZWMyKG15X2Nvb3JkLngsMCkpO1xuICB9XG59XG52b2lkIG1haW4oKSB7XG4gIGluaXQoKTtcbiAgY29tbWl0KG9mZnNldCgpKTtcbn1cbmA7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNXBkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXphR0ZrWlhKekwybHVhWFF1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJPenRIUVVWSE8wRkJRMVVzVVVGQlFTeEpRVUZKTEVkQlFVYzdPenM3T3pzN096czdPenM3T3p0RFFXVnVRaXhEUVVGREluMD0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBTaGFkZXJzIHRyYW5zZm9ybS5cclxuICovXHJcbmV4cG9ydHMudHJhbnNmb3JtID0gYFxuaXZlYzIgdHdpc3QoKSB7XG4gIGludCBhbHBoYSwgYmV0YSwgZ2FtbWEsIGRlbHRhO1xuICBpdmVjNCB2MSwgdjI7XG4gIGludCBqID0gbXlfY29vcmQueDtcblxuICB2MSA9IHJlYWRfYXQoaXZlYzIoaiA9PSAwPyAwOigoKGogLSAxKSUyKSsxKSpIQUxGX0xFTkdUSCAtICgoai0xKT4+MSksIG15X2Nvb3JkLnkpKTtcbiAgdjIgPSByZWFkX2F0KGl2ZWMyKCgoaiUyKSsxKSpIQUxGX0xFTkdUSCAtICgoaik+PjEpLCBteV9jb29yZC55KSk7XG4gIGFscGhhID0gdjEuYjtcbiAgYmV0YSA9IHYxLmE7XG4gIGdhbW1hID0gdjIuYTtcbiAgZGVsdGEgPSAoYWxwaGEgfCAofmdhbW1hKSkgJiAodjIuYiBeIGJldGEpOy8vdjIuYiA9PT0gc3RhdGVfbG93W3QyXVxuXG4gIHJldHVybiBpdmVjMih+ZGVsdGEsIChhbHBoYSBeIGdhbW1hKSB8IGRlbHRhKTtcbn1cbnZvaWQgbWFpbigpIHtcbiAgaW5pdCgpO1xuICBpdmVjNCBteV92ZWMgPSByZWFkKCk7XG4gIGlmKG15X2Nvb3JkLnggPCBTVEFURV9MRU5HVEgpXG4gICAgbXlfdmVjLmJhID0gdHdpc3QoKTtcbiAgY29tbWl0KG15X3ZlYyk7XG59XG5gO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkSEpoYm5ObWIzSnRMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwzTm9ZV1JsY25NdmRISmhibk5tYjNKdExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN1IwRkZSenRCUVVOVkxGRkJRVUVzVTBGQlV5eEhRVUZIT3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wTkJjMEo0UWl4RFFVRkRJbjA9IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogU3RkbGliLlxyXG4gKi9cclxuZXhwb3J0cy5zdGRsaWIgPSBgI3ZlcnNpb24gMzAwIGVzXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XG5wcmVjaXNpb24gaGlnaHAgaW50O1xucHJlY2lzaW9uIGhpZ2hwIGlzYW1wbGVyMkQ7XG51bmlmb3JtIGlzYW1wbGVyMkQgdV90ZXh0dXJlO1xuaW4gdmVjMiBwb3M7XG5vdXQgaXZlYzQgY29sb3I7XG4vL291dCBpbnQgaXNGaW5pc2hlZDtcblxudmVjMiBzaXplO1xuaXZlYzIgbXlfY29vcmQ7XG5cbnZvaWQgaW5pdCh2b2lkKSB7XG4gIC8vc2l6ZSA9IHZlYzIodGV4dHVyZVNpemUodV90ZXh0dXJlLCAwKSAtIDEpO1xuICBzaXplID0gdmVjMih0ZXh0dXJlU2l6ZSh1X3RleHR1cmUsIDApKTtcbiAgbXlfY29vcmQgPSBpdmVjMihwb3MgKiBzaXplKTtcbn1cblxuaXZlYzQgcmVhZCh2b2lkKSB7XG4gIHJldHVybiB0ZXh0dXJlKHVfdGV4dHVyZSwgcG9zKTtcbn1cblxuaXZlYzQgcmVhZF9hdChpdmVjMiBjb29yZCkge1xuICByZXR1cm4gdGV4ZWxGZXRjaCh1X3RleHR1cmUsIGNvb3JkLCAwKTtcbn1cblxudm9pZCBjb21taXQoaXZlYzQgdmFsKSB7XG4gIGNvbG9yID0gdmFsO1xufVxuYDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYzNSa2JHbGlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwzZGxZa2RNTDNOMFpHeHBZaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRTdPMGRCUlVjN1FVRkRWU3hSUVVGQkxFMUJRVTBzUjBGRGJrSTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPME5CTmtKRExFTkJRVU1pZlE9PSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIFZlcnRleCBTaGFkZXIgY29kZS5cclxuICovXHJcbmV4cG9ydHMudmVydGV4U2hhZGVyQ29kZSA9IGAjdmVyc2lvbiAzMDAgZXNcbmxheW91dChsb2NhdGlvbiA9IDApIGluIHZlYzIgcG9zaXRpb247XG5sYXlvdXQobG9jYXRpb24gPSAxKSBpbiB2ZWMyIHRleHR1cmU7XG5vdXQgdmVjMiBwb3M7XG5cbnZvaWQgbWFpbih2b2lkKSB7XG4gIHBvcyA9IHRleHR1cmU7XG4gIGdsX1Bvc2l0aW9uID0gdmVjNChwb3NpdGlvbi54eSwgMC4wLCAxLjApO1xufWA7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRtVnlkR1Y0VTJoaFpHVnlRMjlrWlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTkzWldKSFRDOTJaWEowWlhoVGFHRmtaWEpEYjJSbExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN1IwRkZSenRCUVVOVkxGRkJRVUVzWjBKQlFXZENMRWRCUXpkQ096czdPenM3T3p0RlFWRkZMRU5CUVVNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBjcnlwdG9FcnJvcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY3J5cHRvL2Rpc3QvZXJyb3IvY3J5cHRvRXJyb3JcIik7XHJcbi8qKlxyXG4gKiBIZWxwZXIgZnVuY3Rpb25zIGZvciB1c2Ugd2l0aCBXZWJHTC5cclxuICovXHJcbmNsYXNzIFdlYkdMSGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgV2ViR0wgQ29udGV4dC5cclxuICAgICAqIEBwYXJhbSB3ZWJHTFBsYXRmb3JtIFRoZSBwbGF0Zm9ybSB0byBjcmVhdGUgdGhlIGNvbnRleHQgd2l0aC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBjb250ZXh0IGlmIHN1Y2Nlc3NmdWx5IG9yIHRocm93cyBhbiBlcnJvciBpZiBpdCBjYW5ub3QgYmUgY3JlYXRlZC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUNvbnRleHQod2ViR0xQbGF0Zm9ybSkge1xyXG4gICAgICAgIGNvbnN0IHdpbmRvdyA9IHdlYkdMUGxhdGZvcm0uZ2V0V2luZG93KCk7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eSh3aW5kb3cpICYmIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgZG9jdW1lbnQgPSB3ZWJHTFBsYXRmb3JtLmdldERvY3VtZW50KHdpbmRvdyk7XHJcbiAgICAgICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzRW1wdHkoZG9jdW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYW52YXMgPSB3ZWJHTFBsYXRmb3JtLmdldENhbnZhcyhkb2N1bWVudCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KGNhbnZhcykpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBnbCA9IHdlYkdMUGxhdGZvcm0uZ2V0V2ViR0woY2FudmFzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzRW1wdHkoZ2wpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiQ2FuIG5vdCBjcmVhdGUgYSBXZWJHTCBjb250ZXh0IG9uIGEgPGNhbnZhcz4gZWxlbWVudC5cIiwgeyB1c2VyQWdlbnQ6IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2w7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBIVE1MNSA8Y2FudmFzPiBlbGVtZW50IGlzIG5vdCBhdmFpbGFibGUgaW4geW91ciBicm93c2VyLlwiLCB7IHVzZXJBZ2VudDogd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJ3aW5kb3cuZG9jdW1lbnQgaXMgbm90IGF2YWlsYWJsZSwgeW91IG11c3QgYmUgcnVubmluZyBpbiBhbiBlbnZpcm9ubWVudCB3aXRoIFdlYkdMLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJ3aW5kb3cgaXMgbm90IGF2YWlsYWJsZSwgeW91IG11c3QgYmUgcnVubmluZyBpbiBhbiBlbnZpcm9ubWVudCB3aXRoIFdlYkdMLlwiKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IFdlYkdMIGJ1ZmZlci5cclxuICAgICAqIEBwYXJhbSBnbCBUaGUgV2ViR0wgcmVuZGVyaW5nIGNvbnRleHQuXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSB0byBhZGQgdG8gdGhlIGJ1ZmZlci5cclxuICAgICAqIEBwYXJhbSBhcnJheVR5cGUgVGhlIGRhdGEgdHlwZSBmb3IgdGhlIGJ1ZmZlci5cclxuICAgICAqIEBwYXJhbSB0YXJnZXQgQSBHTCBFbnVtIHNwZWNpZnlpbmcgdGhlIGJpbmRpbmcgcG9pbnQgKHRhcmdldCkuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgV2ViR0wgYnVmZmVyLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlQnVmZmVyKGdsLCBkYXRhLCBhcnJheVR5cGUsIHRhcmdldCkge1xyXG4gICAgICAgIGNvbnN0IGJ1ZiA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoKHRhcmdldCB8fCBnbC5BUlJBWV9CVUZGRVIpLCBidWYpO1xyXG4gICAgICAgIGdsLmJ1ZmZlckRhdGEoKHRhcmdldCB8fCBnbC5BUlJBWV9CVUZGRVIpLCBuZXcgKGFycmF5VHlwZSB8fCBGbG9hdDMyQXJyYXkpKGRhdGEpLCBnbC5TVEFUSUNfRFJBVyk7XHJcbiAgICAgICAgcmV0dXJuIGJ1ZjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVHJhbnNmZXIgZGF0YSBvbnRvIGNsYW1wZWQgdGV4dHVyZSBhbmQgdHVybiBvZmYgYW55IGZpbHRlcmluZ1xyXG4gICAgICogQHBhcmFtIGdsIFRoZSBXZWJHTCByZW5kZXJpbmcgY29udGV4dC5cclxuICAgICAqIEBwYXJhbSBwaXhlbERhdGEgVGhlIHBpeGVsIGRhdGEgdG8gY3JlYXRlIHRoZSB2aWV3IGZyb20uXHJcbiAgICAgKiBAcGFyYW0gZGltZW5zaW9ucyBUaGUgZGltZW5zaW9ucyB0byBjcmVhdGUgdGhlIHRleHR1cmUuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgdGV4dHVyZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZVRleHR1cmUoZ2wsIHBpeGVsRGF0YSwgZGltZW5zaW9ucykge1xyXG4gICAgICAgIGNvbnN0IHRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XHJcbiAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZSk7XHJcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XHJcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuQ0xBTVBfVE9fRURHRSk7XHJcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLk5FQVJFU1QpO1xyXG4gICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5ORUFSRVNUKTtcclxuICAgICAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGdsLlJHQkEzMkksIGRpbWVuc2lvbnMueCwgZGltZW5zaW9ucy55LCAwLCBnbC5SR0JBX0lOVEVHRVIsIGdsLklOVCwgcGl4ZWxEYXRhKTtcclxuICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBudWxsKTtcclxuICAgICAgICByZXR1cm4gdGV4dHVyZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHRoZSB0ZXh1cmUgaW50byB0aGUgZnJhbWVidWZmZXIuXHJcbiAgICAgKiBAcGFyYW0gZ2wgVGhlIFdlYkdMIHJlbmRlcmluZyBjb250ZXh0LlxyXG4gICAgICogQHBhcmFtIGZyYW1lQnVmZmVyIFRoZSBmcmFtZSBidWZmZXIgdG8gc2V0IHRoZSB0ZXh0IGluIHRvLlxyXG4gICAgICogQHBhcmFtIHRleHR1cmUgVGhlIHRleHR1cmUgdG8gc2V0IGluIHRvIHRoZSBmcmFtZWJ1ZmZlci5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyYW1lQnVmZmVyU2V0VGV4dHVyZShnbCwgZnJhbWVCdWZmZXIsIHRleHR1cmUpIHtcclxuICAgICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIGZyYW1lQnVmZmVyKTtcclxuICAgICAgICBnbC5mcmFtZWJ1ZmZlclRleHR1cmUyRChnbC5GUkFNRUJVRkZFUiwgZ2wuQ09MT1JfQVRUQUNITUVOVDAsIGdsLlRFWFRVUkVfMkQsIHRleHR1cmUsIDApO1xyXG4gICAgICAgIC8vIFRlc3QgZm9yIG1vYmlsZSBidWcgTUROLT5XZWJHTF9iZXN0X3ByYWN0aWNlcywgYnVsbGV0IDdcclxuICAgICAgICBjb25zdCBmcmFtZUJ1ZmZlclN0YXR1cyA9IGdsLmNoZWNrRnJhbWVidWZmZXJTdGF0dXMoZ2wuRlJBTUVCVUZGRVIpO1xyXG4gICAgICAgIGlmIChmcmFtZUJ1ZmZlclN0YXR1cyAhPT0gZ2wuRlJBTUVCVUZGRVJfQ09NUExFVEUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJFcnJvciBhdHRhY2hpbmcgZmxvYXQgdGV4dHVyZSB0byBmcmFtZWJ1ZmZlci4gWW91ciBkZXZpY2UgaXMgcHJvYmFibHkgaW5jb21wYXRpYmxlLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5XZWJHTEhlbHBlciA9IFdlYkdMSGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkMlZpUjB4SVpXeHdaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZkMlZpUjB3dmQyVmlSMHhJWld4d1pYSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQkxEUkZRVUY1UlR0QlFVTjZSU3d3UlVGQmRVVTdRVUZKZGtVN08wZEJSVWM3UVVGRFNDeE5RVUZoTEZkQlFWYzdTVUZEY0VJN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhoUVVGaExFTkJRVU1zWVVGQk5rSTdVVUZEY2tRc1RVRkJUU3hOUVVGTkxFZEJRVWNzWVVGQllTeERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRPMUZCUlhwRExFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeFBRVUZQTEUxQlFVMHNTMEZCU3l4WFFVRlhMRVZCUVVVN1dVRkRhRVVzVFVGQlRTeFJRVUZSTEVkQlFVY3NZVUZCWVN4RFFVRkRMRmRCUVZjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFpRVVZ1UkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVN1owSkJRMnBETEUxQlFVMHNUVUZCVFN4SFFVRkhMR0ZCUVdFc1EwRkJReXhUUVVGVExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdaMEpCUldwRUxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJUdHZRa0ZETDBJc1RVRkJUU3hGUVVGRkxFZEJRVWNzWVVGQllTeERRVUZETEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenR2UWtGRk1VTXNTVUZCU1N3eVFrRkJXU3hEUVVGRExFOUJRVThzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlR0M1FrRkRNVUlzVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2RVUkJRWFZFTEVWQlFVVXNSVUZCUlN4VFFVRlRMRVZCUVVVc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXl4RFFVRkRPM0ZDUVVNM1NEdHZRa0ZGUkN4UFFVRlBMRVZCUVVVc1EwRkJRenRwUWtGRFlqdG5Ra0ZGUkN4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5dzRSRUZCT0VRc1JVRkJSU3hGUVVGRkxGTkJRVk1zUlVGQlJTeE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRExFTkJRVU03WVVGRGNFazdXVUZEUkN4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eHhSa0ZCY1VZc1EwRkJReXhEUVVGRE8xTkJRMmhJTzFGQlEwUXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zTkVWQlFUUkZMRU5CUVVNc1EwRkJRenRKUVVONFJ5eERRVUZETzBsQlJVUTdPenM3T3pzN1QwRlBSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFpRVUZaTEVOQlFVTXNSVUZCTkVJc1JVRkJSU3hKUVVGcFFpeEZRVUZGTEZOQlFXVXNSVUZCUlN4TlFVRmxPMUZCUTNoSExFMUJRVTBzUjBGQlJ5eEhRVUZITEVWQlFVVXNRMEZCUXl4WlFVRlpMRVZCUVVVc1EwRkJRenRSUVVVNVFpeEZRVUZGTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1RVRkJUU3hKUVVGSkxFVkJRVVVzUTBGQlF5eFpRVUZaTEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOb1JDeEZRVUZGTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1RVRkJUU3hKUVVGSkxFVkJRVVVzUTBGQlF5eFpRVUZaTEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1UwRkJVeXhKUVVGSkxGbEJRVmtzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dFJRVVZzUnl4UFFVRlBMRWRCUVVjc1EwRkJRenRKUVVObUxFTkJRVU03U1VGRlJEczdPenM3TzA5QlRVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1lVRkJZU3hEUVVGRExFVkJRVFJDTEVWQlFVVXNVMEZCTUVJc1JVRkJSU3hWUVVGdlF6dFJRVU4wU0N4TlFVRk5MRTlCUVU4c1IwRkJSeXhGUVVGRkxFTkJRVU1zWVVGQllTeEZRVUZGTEVOQlFVTTdVVUZGYmtNc1JVRkJSU3hEUVVGRExGZEJRVmNzUTBGQlF5eEZRVUZGTEVOQlFVTXNWVUZCVlN4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8xRkJRM1pETEVWQlFVVXNRMEZCUXl4aFFVRmhMRU5CUVVNc1JVRkJSU3hEUVVGRExGVkJRVlVzUlVGQlJTeEZRVUZGTEVOQlFVTXNZMEZCWXl4RlFVRkZMRVZCUVVVc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF6dFJRVU55UlN4RlFVRkZMRU5CUVVNc1lVRkJZU3hEUVVGRExFVkJRVVVzUTBGQlF5eFZRVUZWTEVWQlFVVXNSVUZCUlN4RFFVRkRMR05CUVdNc1JVRkJSU3hGUVVGRkxFTkJRVU1zWVVGQllTeERRVUZETEVOQlFVTTdVVUZEY2tVc1JVRkJSU3hEUVVGRExHRkJRV0VzUTBGQlF5eEZRVUZGTEVOQlFVTXNWVUZCVlN4RlFVRkZMRVZCUVVVc1EwRkJReXhyUWtGQmEwSXNSVUZCUlN4RlFVRkZMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03VVVGRGJrVXNSVUZCUlN4RFFVRkRMR0ZCUVdFc1EwRkJReXhGUVVGRkxFTkJRVU1zVlVGQlZTeEZRVUZGTEVWQlFVVXNRMEZCUXl4clFrRkJhMElzUlVGQlJTeEZRVUZGTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRkRia1VzUlVGQlJTeERRVUZETEZWQlFWVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1ZVRkJWU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNUMEZCVHl4RlFVRkZMRlZCUVZVc1EwRkJReXhEUVVGRExFVkJRVVVzVlVGQlZTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExGbEJRVmtzUlVGQlJTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RlFVRkZMRk5CUVZNc1EwRkJReXhEUVVGRE8xRkJReTlITEVWQlFVVXNRMEZCUXl4WFFVRlhMRU5CUVVNc1JVRkJSU3hEUVVGRExGVkJRVlVzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVVndReXhQUVVGUExFOUJRVThzUTBGQlF6dEpRVU51UWl4RFFVRkRPMGxCUlVRN096czdPMDlCUzBjN1NVRkRTU3hOUVVGTkxFTkJRVU1zY1VKQlFYRkNMRU5CUVVNc1JVRkJORUlzUlVGQlJTeFhRVUUyUWl4RlFVRkZMRTlCUVhGQ08xRkJRMnhJTEVWQlFVVXNRMEZCUXl4bFFVRmxMRU5CUVVNc1JVRkJSU3hEUVVGRExGZEJRVmNzUlVGQlJTeFhRVUZYTEVOQlFVTXNRMEZCUXp0UlFVVm9SQ3hGUVVGRkxFTkJRVU1zYjBKQlFXOUNMRU5CUVVNc1JVRkJSU3hEUVVGRExGZEJRVmNzUlVGQlJTeEZRVUZGTEVOQlFVTXNhVUpCUVdsQ0xFVkJRVVVzUlVGQlJTeERRVUZETEZWQlFWVXNSVUZCUlN4UFFVRlBMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRmVrWXNNRVJCUVRCRU8xRkJRekZFTEUxQlFVMHNhVUpCUVdsQ0xFZEJRVWNzUlVGQlJTeERRVUZETEhOQ1FVRnpRaXhEUVVGRExFVkJRVVVzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0UlFVVndSU3hKUVVGSkxHbENRVUZwUWl4TFFVRkxMRVZCUVVVc1EwRkJReXh2UWtGQmIwSXNSVUZCUlR0WlFVTXZReXhOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4eFJrRkJjVVlzUTBGQlF5eERRVUZETzFOQlEyaElPMGxCUTB3c1EwRkJRenREUVVOS08wRkJlRVpFTEd0RFFYZEdReUo5IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBjcnlwdG9FcnJvcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY3J5cHRvL2Rpc3QvZXJyb3IvY3J5cHRvRXJyb3JcIik7XHJcbmNvbnN0IHN0ZGxpYl8xID0gcmVxdWlyZShcIi4vc3RkbGliXCIpO1xyXG5jb25zdCB2ZXJ0ZXhTaGFkZXJDb2RlXzEgPSByZXF1aXJlKFwiLi92ZXJ0ZXhTaGFkZXJDb2RlXCIpO1xyXG5jb25zdCB3ZWJHTEhlbHBlcl8xID0gcmVxdWlyZShcIi4vd2ViR0xIZWxwZXJcIik7XHJcbi8qKlxyXG4gKiBXZWJHTFdvcmtlci5cclxuICovXHJcbmNsYXNzIFdlYkdMV29ya2VyIHtcclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZSB0aGUgd2ViIEdMIFdvcmtlci5cclxuICAgICAqIEBwYXJhbSB3ZWJHTFBsYXRmb3JtIFRoZSB3ZWJHTCBwbGF0Zm9ybS5cclxuICAgICAqIEBwYXJhbSBzdGF0ZUxlbmd0aCBUaGUgbGVuZ3RoIG9mIHRoZSBzdGF0ZS5cclxuICAgICAqIEBwYXJhbSB0ZXhlbFNpemUgVGhlIHRleGVsIHNpemUuXHJcbiAgICAgKi9cclxuICAgIGluaXRpYWxpemUod2ViR0xQbGF0Zm9ybSwgc3RhdGVMZW5ndGgsIHRleGVsU2l6ZSkge1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQgPSB3ZWJHTEhlbHBlcl8xLldlYkdMSGVscGVyLmNyZWF0ZUNvbnRleHQod2ViR0xQbGF0Zm9ybSk7XHJcbiAgICAgICAgdGhpcy5fZGltZW5zaW9ucyA9IHsgeDogc3RhdGVMZW5ndGgsIHk6IDAgfTtcclxuICAgICAgICBjb25zdCBtYXhJbWFnZVNpemUgPSBNYXRoLnBvdyh0aGlzLl9jb250ZXh0Lk1BWF9URVhUVVJFX1NJWkUsIDIpICogMC41O1xyXG4gICAgICAgIGNvbnN0IGltYWdlU2l6ZSA9IE1hdGguZmxvb3IobWF4SW1hZ2VTaXplIC8gdGhpcy5fZGltZW5zaW9ucy54IC8gdGV4ZWxTaXplKSAqIHRoaXMuX2RpbWVuc2lvbnMueCAqIHRleGVsU2l6ZTtcclxuICAgICAgICB0aGlzLl9kaW1lbnNpb25zLnkgPSBpbWFnZVNpemUgLyB0aGlzLl9kaW1lbnNpb25zLnggLyB0ZXhlbFNpemU7XHJcbiAgICAgICAgdGhpcy5fcHJvZ3JhbXMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5faXB0ID0ge1xyXG4gICAgICAgICAgICBkYXRhOiBuZXcgSW50MzJBcnJheShpbWFnZVNpemUpLFxyXG4gICAgICAgICAgICBsZW5ndGg6IGltYWdlU2l6ZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gR1BVIHRleHR1cmUgYnVmZmVyID0gZnJvbSBKUyB0eXBlZCBhcnJheVxyXG4gICAgICAgIHRoaXMuX2J1ZmZlcnMgPSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB3ZWJHTEhlbHBlcl8xLldlYkdMSGVscGVyLmNyZWF0ZUJ1ZmZlcih0aGlzLl9jb250ZXh0LCBbLTEsIC0xLCAxLCAtMSwgMSwgMSwgLTEsIDFdKSxcclxuICAgICAgICAgICAgdGV4dHVyZTogd2ViR0xIZWxwZXJfMS5XZWJHTEhlbHBlci5jcmVhdGVCdWZmZXIodGhpcy5fY29udGV4dCwgWzAsIDAsIDEsIDAsIDEsIDEsIDAsIDFdKSxcclxuICAgICAgICAgICAgaW5kZXg6IHdlYkdMSGVscGVyXzEuV2ViR0xIZWxwZXIuY3JlYXRlQnVmZmVyKHRoaXMuX2NvbnRleHQsIFsxLCAyLCAwLCAzLCAwLCAyXSwgVWludDE2QXJyYXksIHRoaXMuX2NvbnRleHQuRUxFTUVOVF9BUlJBWV9CVUZGRVIpXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9hdHRyaWIgPSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAwLFxyXG4gICAgICAgICAgICB0ZXh0dXJlOiAxXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl92ZXJ0ZXhBcnJheSA9IHRoaXMuX2NvbnRleHQuY3JlYXRlVmVydGV4QXJyYXkoKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LmJpbmRWZXJ0ZXhBcnJheSh0aGlzLl92ZXJ0ZXhBcnJheSk7XHJcbiAgICAgICAgdGhpcy5iaW5kQnVmZmVycygpO1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQuYmluZFZlcnRleEFycmF5KG51bGwpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlVmVydGV4U2hhZGVyKCk7XHJcbiAgICAgICAgdGhpcy5fZnJhbWVCdWZmZXIgPSB0aGlzLl9jb250ZXh0LmNyZWF0ZUZyYW1lYnVmZmVyKCk7XHJcbiAgICAgICAgdGhpcy5fdGV4dHVyZTAgPSB3ZWJHTEhlbHBlcl8xLldlYkdMSGVscGVyLmNyZWF0ZVRleHR1cmUodGhpcy5fY29udGV4dCwgdGhpcy5faXB0LmRhdGEsIHRoaXMuX2RpbWVuc2lvbnMpO1xyXG4gICAgICAgIHRoaXMuX3RleHR1cmUxID0gd2ViR0xIZWxwZXJfMS5XZWJHTEhlbHBlci5jcmVhdGVUZXh0dXJlKHRoaXMuX2NvbnRleHQsIG5ldyBJbnQzMkFycmF5KGltYWdlU2l6ZSksIHRoaXMuX2RpbWVuc2lvbnMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGRpbWVuc2lvbnMgZnJvbSB0aGUgd29ya2VyLlxyXG4gICAgICogQHJldHVybnMgVGhlIGRpbWVuc2lvbnMuXHJcbiAgICAgKi9cclxuICAgIGdldERpbWVuc2lvbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RpbWVuc2lvbnM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgSVBUIGZyb20gdGhlIHdvcmtlci5cclxuICAgICAqIEByZXR1cm5zIFRoZSBpcHQuXHJcbiAgICAgKi9cclxuICAgIGdldElwdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXB0O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgYSBwcm9ncmFtIHRvIHRoZSB3b3JrZXIuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgcHJvZ3JhbSB0byBhZGQuXHJcbiAgICAgKiBAcGFyYW0gY29kZSBUaGUgY29kZSBmb3IgdGhlIHByb2dyYW0uXHJcbiAgICAgKiBAcGFyYW0gdW5pZm9ybXMgQWRkaXRpb25hbCB1bmlmb3JtIGxvY2F0aW9ucy5cclxuICAgICAqL1xyXG4gICAgYWRkUHJvZ3JhbShuYW1lLCBjb2RlLCAuLi51bmlmb3Jtcykge1xyXG4gICAgICAgIGNvbnN0IGZyYWdtZW50U2hhZGVyID0gdGhpcy5jcmVhdGVGcmFnbWVudFNoYWRlcihjb2RlKTtcclxuICAgICAgICBjb25zdCBwcm9ncmFtID0gdGhpcy5fY29udGV4dC5jcmVhdGVQcm9ncmFtKCk7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgdGhpcy5fdmVydGV4U2hhZGVyKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmcmFnbWVudFNoYWRlcik7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5iaW5kQXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgdGhpcy5fYXR0cmliLnBvc2l0aW9uLCBcInBvc2l0aW9uXCIpO1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQuYmluZEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIHRoaXMuX2F0dHJpYi50ZXh0dXJlLCBcInRleHR1cmVcIik7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5saW5rUHJvZ3JhbShwcm9ncmFtKTtcclxuICAgICAgICBjb25zdCB1bmlmb3JtVmFycyA9IG5ldyBNYXAoKTtcclxuICAgICAgICBmb3IgKGNvbnN0IHZhcmlhYmxlIG9mIHVuaWZvcm1zKSB7XHJcbiAgICAgICAgICAgIHVuaWZvcm1WYXJzLnNldCh2YXJpYWJsZSwgdGhpcy5fY29udGV4dC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgdmFyaWFibGUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcHJvZ3JhbXMuc2V0KG5hbWUsIHsgcHJvZ3JhbSwgdW5pZm9ybVZhcnMgfSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJ1biB0aGUgcHJvZ3JhbSBpbiB0aGUgd2ViIHdvcmtlci5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBwcm9ncmFtIHRvIHJ1bi5cclxuICAgICAqIEBwYXJhbSBjb3VudCBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIHJ1biBpdC5cclxuICAgICAqIEBwYXJhbSB1bmlmb3JtcyBBZGRpdGlvbmFsIHVuaWZvcm0gbG9jYXRpb25zIHRvIHVzZS5cclxuICAgICAqL1xyXG4gICAgcnVuUHJvZ3JhbShuYW1lLCBjb3VudCwgLi4udW5pZm9ybXMpIHtcclxuICAgICAgICBjb25zdCBpbmZvID0gdGhpcy5fcHJvZ3JhbXMuZ2V0KG5hbWUpO1xyXG4gICAgICAgIGNvbnN0IHByb2dyYW0gPSBpbmZvLnByb2dyYW07XHJcbiAgICAgICAgaWYgKCF0aGlzLl9jb250ZXh0LmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgdGhpcy5fY29udGV4dC5MSU5LX1NUQVRVUykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJGYWlsZWQgdG8gbGluayBHTFNMIHByb2dyYW0gY29kZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdW5pZm9ybVZhcnMgPSBpbmZvLnVuaWZvcm1WYXJzO1xyXG4gICAgICAgIGNvbnN0IHVUZXh0dXJlID0gdGhpcy5fY29udGV4dC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgXCJ1X3RleHR1cmVcIik7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC51c2VQcm9ncmFtKHByb2dyYW0pO1xyXG4gICAgICAgIGxldCBsb2NhbENvdW50ID0gY291bnQ7XHJcbiAgICAgICAgd2hpbGUgKGxvY2FsQ291bnQtLSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fY29udGV4dC5iaW5kVGV4dHVyZSh0aGlzLl9jb250ZXh0LlRFWFRVUkVfMkQsIHRoaXMuX3RleHR1cmUwKTtcclxuICAgICAgICAgICAgdGhpcy5fY29udGV4dC5hY3RpdmVUZXh0dXJlKHRoaXMuX2NvbnRleHQuVEVYVFVSRTApO1xyXG4gICAgICAgICAgICB0aGlzLl9jb250ZXh0LnVuaWZvcm0xaSh1VGV4dHVyZSwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbnRleHQudmlld3BvcnQoMCwgMCwgdGhpcy5fZGltZW5zaW9ucy54LCB0aGlzLl9kaW1lbnNpb25zLnkpO1xyXG4gICAgICAgICAgICB3ZWJHTEhlbHBlcl8xLldlYkdMSGVscGVyLmZyYW1lQnVmZmVyU2V0VGV4dHVyZSh0aGlzLl9jb250ZXh0LCB0aGlzLl9mcmFtZUJ1ZmZlciwgdGhpcy5fdGV4dHVyZTEpO1xyXG4gICAgICAgICAgICB0aGlzLl9jb250ZXh0LmJpbmRWZXJ0ZXhBcnJheSh0aGlzLl92ZXJ0ZXhBcnJheSk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgdVZhcnMgb2YgdW5pZm9ybXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRleHQudW5pZm9ybTFpKHVuaWZvcm1WYXJzLmdldCh1VmFycy5uYW1lKSwgdVZhcnMudmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbnRleHQuZHJhd0VsZW1lbnRzKHRoaXMuX2NvbnRleHQuVFJJQU5HTEVTLCA2LCB0aGlzLl9jb250ZXh0LlVOU0lHTkVEX1NIT1JULCAwKTtcclxuICAgICAgICAgICAgY29uc3QgdGV4MCA9IHRoaXMuX3RleHR1cmUwO1xyXG4gICAgICAgICAgICB0aGlzLl90ZXh0dXJlMCA9IHRoaXMuX3RleHR1cmUxO1xyXG4gICAgICAgICAgICB0aGlzLl90ZXh0dXJlMSA9IHRleDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZmluaXNoUnVuKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJlYWQgZGF0YSBmcm9tIHRoZSB3b3JrZXIuXHJcbiAgICAgKiBAcGFyYW0geCBUaGUgeCBwb3NpdGlvbiB0byByZWFkIGZyb20uXHJcbiAgICAgKiBAcGFyYW0geSBUaGUgeSBwb3NpdGlvbiB0byByZWFkIGZyb20uXHJcbiAgICAgKiBAcGFyYW0gbiBUaGUgd2lkdGggcG9zaXRpb24gdG8gcmVhZCBmcm9tLlxyXG4gICAgICogQHBhcmFtIG0gVGhlIGhlaWdodCBwb3NpdGlvbiB0byByZWFkIGZyb20uXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZGF0YSBhdCB0aGUgcmVxdWVzdGVkIHBvc2l0aW9uLlxyXG4gICAgICovXHJcbiAgICByZWFkRGF0YSh4LCB5LCBuLCBtKSB7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5iaW5kRnJhbWVidWZmZXIodGhpcy5fY29udGV4dC5GUkFNRUJVRkZFUiwgdGhpcy5fZnJhbWVCdWZmZXIpO1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQucmVhZFBpeGVscyh4LCB5LCBuLCBtLCB0aGlzLl9jb250ZXh0LlJHQkFfSU5URUdFUiwgdGhpcy5fY29udGV4dC5JTlQsIHRoaXMuX2lwdC5kYXRhKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LmJpbmRGcmFtZWJ1ZmZlcih0aGlzLl9jb250ZXh0LkZSQU1FQlVGRkVSLCBudWxsKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXB0LmRhdGEuc3ViYXJyYXkoMCwgdGhpcy5faXB0Lmxlbmd0aCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFdyaXRlIGRhdGEgdG8gdGhlIHdvcmtlci5cclxuICAgICAqIEBwYXJhbSBkYXRhIFRoZSBkYXRhIHRvIHdyaXRlLlxyXG4gICAgICovXHJcbiAgICB3cml0ZURhdGEoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQuYmluZFRleHR1cmUodGhpcy5fY29udGV4dC5URVhUVVJFXzJELCB0aGlzLl90ZXh0dXJlMCk7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC50ZXhJbWFnZTJEKHRoaXMuX2NvbnRleHQuVEVYVFVSRV8yRCwgMCwgdGhpcy5fY29udGV4dC5SR0JBMzJJLCB0aGlzLl9kaW1lbnNpb25zLngsIHRoaXMuX2RpbWVuc2lvbnMueSwgMCwgdGhpcy5fY29udGV4dC5SR0JBX0lOVEVHRVIsIHRoaXMuX2NvbnRleHQuSU5ULCBkYXRhKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LmJpbmRUZXh0dXJlKHRoaXMuX2NvbnRleHQuVEVYVFVSRV8yRCwgbnVsbCk7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGJpbmRCdWZmZXJzKCkge1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQuYmluZEJ1ZmZlcih0aGlzLl9jb250ZXh0LkFSUkFZX0JVRkZFUiwgdGhpcy5fYnVmZmVycy50ZXh0dXJlKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMuX2F0dHJpYi50ZXh0dXJlKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5fYXR0cmliLnRleHR1cmUsIDIsIHRoaXMuX2NvbnRleHQuRkxPQVQsIGZhbHNlLCAwLCAwKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LmJpbmRCdWZmZXIodGhpcy5fY29udGV4dC5BUlJBWV9CVUZGRVIsIHRoaXMuX2J1ZmZlcnMucG9zaXRpb24pO1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy5fYXR0cmliLnBvc2l0aW9uKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5fYXR0cmliLnBvc2l0aW9uLCAyLCB0aGlzLl9jb250ZXh0LkZMT0FULCBmYWxzZSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5iaW5kQnVmZmVyKHRoaXMuX2NvbnRleHQuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIHRoaXMuX2J1ZmZlcnMuaW5kZXgpO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjcmVhdGVWZXJ0ZXhTaGFkZXIoKSB7XHJcbiAgICAgICAgdGhpcy5fdmVydGV4U2hhZGVyID0gdGhpcy5fY29udGV4dC5jcmVhdGVTaGFkZXIodGhpcy5fY29udGV4dC5WRVJURVhfU0hBREVSKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LnNoYWRlclNvdXJjZSh0aGlzLl92ZXJ0ZXhTaGFkZXIsIHZlcnRleFNoYWRlckNvZGVfMS52ZXJ0ZXhTaGFkZXJDb2RlKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LmNvbXBpbGVTaGFkZXIodGhpcy5fdmVydGV4U2hhZGVyKTtcclxuICAgICAgICAvLyBUaGlzIHNob3VsZCBub3QgZmFpbC5cclxuICAgICAgICBpZiAoIXRoaXMuX2NvbnRleHQuZ2V0U2hhZGVyUGFyYW1ldGVyKHRoaXMuX3ZlcnRleFNoYWRlciwgdGhpcy5fY29udGV4dC5DT01QSUxFX1NUQVRVUykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoYENvdWxkIG5vdCBidWlsZCB2ZXJ0ZXggc2hhZGVyLlxuXG4tLS0gQ09ERSBEVU1QIC0tLSR7dmVydGV4U2hhZGVyQ29kZV8xLnZlcnRleFNoYWRlckNvZGV9XG5cbi0tLSBFUlJPUiBMT0cgLS0tXG4ke3RoaXMuX2NvbnRleHQuZ2V0U2hhZGVySW5mb0xvZyh0aGlzLl92ZXJ0ZXhTaGFkZXIpfWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY3JlYXRlRnJhZ21lbnRTaGFkZXIoY29kZSkge1xyXG4gICAgICAgIGNvbnN0IGZyYWdtZW50U2hhZGVyID0gdGhpcy5fY29udGV4dC5jcmVhdGVTaGFkZXIodGhpcy5fY29udGV4dC5GUkFHTUVOVF9TSEFERVIpO1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQuc2hhZGVyU291cmNlKGZyYWdtZW50U2hhZGVyLCBzdGRsaWJfMS5zdGRsaWIgKyBjb2RlKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LmNvbXBpbGVTaGFkZXIoZnJhZ21lbnRTaGFkZXIpO1xyXG4gICAgICAgIC8vIFVzZSB0aGlzIG91dHB1dCB0byBkZWJ1ZyB0aGUgc2hhZGVyXHJcbiAgICAgICAgLy8gS2VlcCBpbiBtaW5kIHRoYXQgV2ViR0wgR0xTTCBpcyAqKm11Y2gqKiBzdHJpY3RlciB0aGFuIGUuZy4gT3BlbkdMIEdMU0xcclxuICAgICAgICBpZiAoIXRoaXMuX2NvbnRleHQuZ2V0U2hhZGVyUGFyYW1ldGVyKGZyYWdtZW50U2hhZGVyLCB0aGlzLl9jb250ZXh0LkNPTVBJTEVfU1RBVFVTKSkge1xyXG4gICAgICAgICAgICBjb25zdCBjb2RlTGluZXMgPSBjb2RlLnNwbGl0KFwiXFxuXCIpO1xyXG4gICAgICAgICAgICBsZXQgZGJnTXNnID0gXCJDb3VsZCBub3QgYnVpbGQgZnJhZ21lbnQgc2hhZGVyLlxcblxcbi0tLS0tLS0tLS0tLS0tLS0tLSBLRVJORUwgQ09ERSBEVU1QIC0tLS0tLS0tLS0tLS0tLS0tLVxcblwiO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBubCA9IDA7IG5sIDwgY29kZUxpbmVzLmxlbmd0aDsgbmwrKykge1xyXG4gICAgICAgICAgICAgICAgZGJnTXNnICs9IGAke3N0ZGxpYl8xLnN0ZGxpYi5zcGxpdChcIlxcblwiKS5sZW5ndGggKyBubH0+ICR7Y29kZUxpbmVzW25sXX1cXG5gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRiZ01zZyArPSBgXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEVSUk9SICBMT0cgLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuJHt0aGlzLl9jb250ZXh0LmdldFNoYWRlckluZm9Mb2coZnJhZ21lbnRTaGFkZXIpfWA7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGRiZ01zZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmcmFnbWVudFNoYWRlcjtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgZmluaXNoUnVuKCkge1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQuYmluZFZlcnRleEFycmF5KG51bGwpO1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQuYmluZFRleHR1cmUodGhpcy5fY29udGV4dC5URVhUVVJFXzJELCBudWxsKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LmJpbmRGcmFtZWJ1ZmZlcih0aGlzLl9jb250ZXh0LkZSQU1FQlVGRkVSLCBudWxsKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLldlYkdMV29ya2VyID0gV2ViR0xXb3JrZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWQyVmlSMHhYYjNKclpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmQyVmlSMHd2ZDJWaVIweFhiM0pyWlhJdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTERCRlFVRjFSVHRCUVVWMlJTeHhRMEZCYTBNN1FVRkRiRU1zZVVSQlFYTkVPMEZCUTNSRUxDdERRVUUwUXp0QlFVazFRenM3UjBGRlJ6dEJRVU5JTEUxQlFXRXNWMEZCVnp0SlFYZENjRUk3T3pzN08wOUJTMGM3U1VGRFNTeFZRVUZWTEVOQlFVTXNZVUZCTmtJc1JVRkJSU3hYUVVGdFFpeEZRVUZGTEZOQlFXbENPMUZCUTI1R0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NlVUpCUVZjc1EwRkJReXhoUVVGaExFTkJRVU1zWVVGQllTeERRVUZETEVOQlFVTTdVVUZEZWtRc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4WFFVRlhMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETzFGQlJUVkRMRTFCUVUwc1dVRkJXU3hIUVVGSExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhuUWtGQlowSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU03VVVGRGRrVXNUVUZCVFN4VFFVRlRMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFpRVUZaTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFZEJRVWNzVTBGQlV5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFZEJRVWNzVTBGQlV5eERRVUZETzFGQlF6ZEhMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF5eEhRVUZITEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU1zUjBGQlJ5eFRRVUZUTEVOQlFVTTdVVUZGYUVVc1NVRkJTU3hEUVVGRExGTkJRVk1zUjBGQlJ5eEpRVUZKTEVkQlFVY3NSVUZCUlN4RFFVRkRPMUZCUXpOQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVYzdXVUZEVWl4SlFVRkpMRVZCUVVVc1NVRkJTU3hWUVVGVkxFTkJRVU1zVTBGQlV5eERRVUZETzFsQlF5OUNMRTFCUVUwc1JVRkJSU3hUUVVGVE8xTkJRM0JDTEVOQlFVTTdVVUZGUml3eVEwRkJNa003VVVGRE0wTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSenRaUVVOYUxGRkJRVkVzUlVGQlJTeDVRa0ZCVnl4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRMMFVzVDBGQlR5eEZRVUZGTEhsQ1FVRlhMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETVVVc1MwRkJTeXhGUVVGRkxIbENRVUZYTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRmRCUVZjc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEc5Q1FVRnZRaXhEUVVGRE8xTkJRM1JJTEVOQlFVTTdVVUZGUml4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSE8xbEJRMWdzVVVGQlVTeEZRVUZGTEVOQlFVTTdXVUZEV0N4UFFVRlBMRVZCUVVVc1EwRkJRenRUUVVOaUxFTkJRVU03VVVGRlJpeEpRVUZKTEVOQlFVTXNXVUZCV1N4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zYVVKQlFXbENMRVZCUVVVc1EwRkJRenRSUVVOMFJDeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMR1ZCUVdVc1EwRkJReXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdVVUZEYWtRc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETzFGQlEyNUNMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zWlVGQlpTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTNCRExFbEJRVWtzUTBGQlF5eHJRa0ZCYTBJc1JVRkJSU3hEUVVGRE8xRkJRekZDTEVsQlFVa3NRMEZCUXl4WlFVRlpMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eHBRa0ZCYVVJc1JVRkJSU3hEUVVGRE8xRkJRM1JFTEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc2VVSkJRVmNzUTBGQlF5eGhRVUZoTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03VVVGRE5VWXNTVUZCU1N4RFFVRkRMRk5CUVZNc1IwRkJSeXg1UWtGQlZ5eERRVUZETEdGQlFXRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFbEJRVWtzVlVGQlZTeERRVUZETEZOQlFWTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dEpRVU16Unl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NZVUZCWVR0UlFVTm9RaXhQUVVGUExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTTdTVUZETlVJc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkpMRTFCUVUwN1VVRkRWQ3hQUVVGUExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTTdTVUZEY2tJc1EwRkJRenRKUVVWRU96czdPenRQUVV0SE8wbEJRMGtzVlVGQlZTeERRVUZETEVsQlFWa3NSVUZCUlN4SlFVRlpMRVZCUVVVc1IwRkJSeXhSUVVGclFqdFJRVU12UkN4TlFVRk5MR05CUVdNc1IwRkJSeXhKUVVGSkxFTkJRVU1zYjBKQlFXOUNMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRGRrUXNUVUZCVFN4UFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eGhRVUZoTEVWQlFVVXNRMEZCUXp0UlFVVTVReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZsQlFWa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETzFGQlEzaEVMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zV1VGQldTeERRVUZETEU5QlFVOHNSVUZCUlN4alFVRmpMRU5CUVVNc1EwRkJRenRSUVVOd1JDeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMR3RDUVVGclFpeERRVUZETEU5QlFVOHNSVUZCUlN4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUlVGQlJTeFZRVUZWTEVOQlFVTXNRMEZCUXp0UlFVTTNSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEd0Q1FVRnJRaXhEUVVGRExFOUJRVThzUlVGQlJTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1JVRkJSU3hUUVVGVExFTkJRVU1zUTBGQlF6dFJRVU16UlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVTnVReXhOUVVGTkxGZEJRVmNzUjBGQlJ5eEpRVUZKTEVkQlFVY3NSVUZCWjBNc1EwRkJRenRSUVVNMVJDeExRVUZMTEUxQlFVMHNVVUZCVVN4SlFVRkpMRkZCUVZFc1JVRkJSVHRaUVVNM1FpeFhRVUZYTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEd0Q1FVRnJRaXhEUVVGRExFOUJRVThzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUTJ4R08xRkJRMFFzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hGUVVGRkxFVkJRVVVzVDBGQlR5eEZRVUZGTEZkQlFWY3NSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkRka1FzUTBGQlF6dEpRVVZFT3pzN096dFBRVXRITzBsQlEwa3NWVUZCVlN4RFFVRkRMRWxCUVZrc1JVRkJSU3hMUVVGaExFVkJRVVVzUjBGQlJ5eFJRVUYxUXp0UlFVTnlSaXhOUVVGTkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU4wUXl4TlFVRk5MRTlCUVU4c1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETzFGQlJUZENMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEcxQ1FVRnRRaXhEUVVGRExFOUJRVThzUlVGQlJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhGUVVGRk8xbEJRM2hGTEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExHdERRVUZyUXl4RFFVRkRMRU5CUVVNN1UwRkROMFE3VVVGRlJDeE5RVUZOTEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRE8xRkJRM0pETEUxQlFVMHNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1QwRkJUeXhGUVVGRkxGZEJRVmNzUTBGQlF5eERRVUZETzFGQlEzaEZMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMUZCUld4RExFbEJRVWtzVlVGQlZTeEhRVUZITEV0QlFVc3NRMEZCUXp0UlFVTjJRaXhQUVVGUExGVkJRVlVzUlVGQlJTeEhRVUZITEVOQlFVTXNSVUZCUlR0WlFVTnlRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGVkJRVlVzUlVGQlJTeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1dVRkRjRVVzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0WlFVTndSQ3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZOQlFWTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRmNrTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM0pGTEhsQ1FVRlhMRU5CUVVNc2NVSkJRWEZDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hKUVVGSkxFTkJRVU1zV1VGQldTeEZRVUZGTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRenRaUVVOd1JpeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMR1ZCUVdVc1EwRkJReXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdXVUZEYWtRc1MwRkJTeXhOUVVGTkxFdEJRVXNzU1VGQlNTeFJRVUZSTEVWQlFVVTdaMEpCUXpGQ0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNVMEZCVXl4RFFVRkRMRmRCUVZjc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dGhRVU55UlR0WlFVTkVMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMR05CUVdNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVVY0Uml4TlFVRk5MRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETzFsQlF6VkNMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXp0WlFVTm9ReXhKUVVGSkxFTkJRVU1zVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXp0VFFVTjZRanRSUVVWRUxFbEJRVWtzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXp0SlFVTnlRaXhEUVVGRE8wbEJSVVE3T3pzN096czdUMEZQUnp0SlFVTkpMRkZCUVZFc1EwRkJReXhEUVVGVExFVkJRVVVzUTBGQlV5eEZRVUZGTEVOQlFWTXNSVUZCUlN4RFFVRlRPMUZCUTNSRUxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNaVUZCWlN4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenRSUVVNMVJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFpRVUZaTEVWQlFVVXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFVkJRVVVzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVOd1J5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMR1ZCUVdVc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZkQlFWY3NSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVNdlJDeFBRVUZQTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dEpRVU40UkN4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NVMEZCVXl4RFFVRkRMRWxCUVhGQ08xRkJRMnhETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RlFVRkZMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF6dFJRVU53UlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1JVRkJSU3hEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRVZCUVVVc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1dVRkJXU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRemRMTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8wbEJRemxFTEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTFBc1YwRkJWenRSUVVObUxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zV1VGQldTeEZRVUZGTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03VVVGRE5VVXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXgxUWtGQmRVSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzFGQlF6VkVMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zYlVKQlFXMUNMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eEZRVUZGTEV0QlFVc3NSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRE4wWXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4WlFVRlpMRVZCUVVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0UlFVTTNSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEhWQ1FVRjFRaXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1VVRkROMFFzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRVZCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTTVSaXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExHOUNRVUZ2UWl4RlFVRkZMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEZEVZc1EwRkJRenRKUVVWRUxHVkJRV1U3U1VGRFVDeHJRa0ZCYTBJN1VVRkRkRUlzU1VGQlNTeERRVUZETEdGQlFXRXNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGRE8xRkJRemRGTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eGhRVUZoTEVWQlFVVXNiVU5CUVdkQ0xFTkJRVU1zUTBGQlF6dFJRVU5xUlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eEpRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMRU5CUVVNN1VVRkZhRVFzZDBKQlFYZENPMUZCUTNoQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMR3RDUVVGclFpeERRVUZETEVsQlFVa3NRMEZCUXl4aFFVRmhMRVZCUVVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eGpRVUZqTEVOQlFVTXNSVUZCUlR0WlFVTnlSaXhOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZEYWtJN08yMUNRVVZITEcxRFFVRm5RanM3TzBWQlIycERMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eEZRVUZGTEVOQlEzcERMRU5CUVVNN1UwRkRURHRKUVVOTUxFTkJRVU03U1VGRlJDeGxRVUZsTzBsQlExQXNiMEpCUVc5Q0xFTkJRVU1zU1VGQldUdFJRVU55UXl4TlFVRk5MR05CUVdNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExHVkJRV1VzUTBGQlF5eERRVUZETzFGQlJXcEdMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zV1VGQldTeERRVUZETEdOQlFXTXNSVUZCUlN4bFFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRk1VUXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zWTBGQll5eERRVUZETEVOQlFVTTdVVUZGTlVNc2MwTkJRWE5ETzFGQlEzUkRMREJGUVVFd1JUdFJRVU14UlN4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhqUVVGakxFVkJRVVVzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4alFVRmpMRU5CUVVNc1JVRkJSVHRaUVVOcVJpeE5RVUZOTEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlEyNURMRWxCUVVrc1RVRkJUU3hIUVVGSExEaEdRVUU0Uml4RFFVRkRPMWxCUlRWSExFdEJRVXNzU1VGQlNTeEZRVUZGTEVkQlFVY3NRMEZCUXl4RlFVRkZMRVZCUVVVc1IwRkJSeXhUUVVGVExFTkJRVU1zVFVGQlRTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZPMmRDUVVNeFF5eE5RVUZOTEVsQlFVa3NSMEZCUnl4bFFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEUxQlFVMHNSMEZCUnl4RlFVRkZMRXRCUVVzc1UwRkJVeXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTTdZVUZEY2tVN1dVRkZSQ3hOUVVGTkxFbEJRVWtzTmtSQlFUWkVMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1kwRkJZeXhEUVVGRExFVkJRVVVzUTBGQlF6dFpRVVY0U0N4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0VFFVTnFRenRSUVVORUxFOUJRVThzWTBGQll5eERRVUZETzBsQlF6RkNMRU5CUVVNN1NVRkZSQ3hsUVVGbE8wbEJRMUFzVTBGQlV6dFJRVU5pTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1pVRkJaU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFGQlEzQkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzFGQlF6RkVMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zWlVGQlpTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1YwRkJWeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzBsQlEyNUZMRU5CUVVNN1EwRkRTanRCUVhSUFJDeHJRMEZ6VDBNaWZRPT0iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NvcmVfZGlzdF9oZWxwZXJzX251bWJlckhlbHBlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NvcmVfZGlzdF9oZWxwZXJzX29iamVjdEhlbHBlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NyeXB0b19kaXN0X2Vycm9yX2NyeXB0b0Vycm9yX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fY3J5cHRvX2Rpc3RfZmFjdG9yaWVzX3Nwb25nZUZhY3RvcnlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19jcnlwdG9fZGlzdF9wcm9vZk9mV29ya19wcm9vZk9mV29ya0Jhc2VfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19kYXRhX2Rpc3RfZGF0YV90cml0c19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2RhdGFfZGlzdF9kYXRhX3RyeXRlc19fOyJdLCJzb3VyY2VSb290IjoiIn0=