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
const add_1 = tslib_1.__importDefault(__webpack_require__(/*! ../shaders/add */ "./dist.es6/shaders/add.js"));
const checkCol_1 = tslib_1.__importDefault(__webpack_require__(/*! ../shaders/checkCol */ "./dist.es6/shaders/checkCol.js"));
const checkDo_1 = tslib_1.__importDefault(__webpack_require__(/*! ../shaders/checkDo */ "./dist.es6/shaders/checkDo.js"));
const checkK_1 = tslib_1.__importDefault(__webpack_require__(/*! ../shaders/checkK */ "./dist.es6/shaders/checkK.js"));
const finalize_1 = tslib_1.__importDefault(__webpack_require__(/*! ../shaders/finalize */ "./dist.es6/shaders/finalize.js"));
const headers_1 = tslib_1.__importDefault(__webpack_require__(/*! ../shaders/headers */ "./dist.es6/shaders/headers.js"));
const increment_1 = tslib_1.__importDefault(__webpack_require__(/*! ../shaders/increment */ "./dist.es6/shaders/increment.js"));
const init_1 = tslib_1.__importDefault(__webpack_require__(/*! ../shaders/init */ "./dist.es6/shaders/init.js"));
const transform_1 = tslib_1.__importDefault(__webpack_require__(/*! ../shaders/transform */ "./dist.es6/shaders/transform.js"));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVhcmxEaXZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wZWFybERpdmVyL3BlYXJsRGl2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0RUFBeUU7QUFDekUsa0ZBQStFO0FBQy9FLDJEQUF3RDtBQUd4RCxpRUFBaUM7QUFDakMsMkVBQTJDO0FBQzNDLHlFQUF5QztBQUN6Qyx1RUFBdUM7QUFDdkMsMkVBQTJDO0FBQzNDLHlFQUF5QztBQUN6Qyw2RUFBNkM7QUFDN0MsbUVBQW1DO0FBQ25DLDZFQUE2QztBQUM3QyxzREFBbUQ7QUFHbkQsdURBQW9EO0FBQ3BEOzs7R0FHRztBQUNILE1BQWEsVUFBVTtJQWdEbkIsZUFBZTtJQUNmLFlBQW9CLGFBQTZCO1FBQzdDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7UUFDdEMsTUFBTSxJQUFJLEdBQUcsNkJBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUV4RCxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxD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

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
        const _super = name => super[name];
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield _super("initialize").call(this);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvb2ZPZldvcmtXZWJHbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9vZk9mV29ya1dlYkdsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNEVBQXlFO0FBQ3pFLDRFQUF5RTtBQUV6RSwwRUFBdUU7QUFDdkUsd0ZBQXFGO0FBQ3JGLDZEQUEwRDtBQUUxRCx3REFBcUQ7QUFHckQ7O0dBRUc7QUFDSCxNQUFhLGdCQUFpQixTQUFRLGlDQUFlO0lBT2pEOzs7O09BSUc7SUFDSCxZQUFZLGFBQThCLEVBQUUsV0FBMEI7UUFDbEUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRW5CLElBQUksMkJBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDckMsSUFBSSxDQUFDLGNBQWMsR0FBRztnQkFDbEIsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU07Z0JBQ3ZCLFdBQVcsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVE7Z0JBQ3hDLFNBQVMsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7Z0JBQ3pELFFBQVEsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFO29CQUNqQixNQUFNLElBQUksR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDO29CQUNoRCxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDN0MsT0FBaUMsRUFBRSxDQUFDO2dCQUN4QyxDQUFDO2FBQ0osQ0FBQztTQUNMO2FBQU07WUFDSCxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztTQUN2QztJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ1UsVUFBVTs7O1lBQ25CLE1BQU0sb0JBQWdCLFdBQUUsQ0FBQztZQUN6QixPQUFPLElBQUksT0FBTyxDQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUN6QyxJQUFJO29CQUNBLHVCQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFDM0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7b0JBQzNCLE9BQU8sRUFBRSxDQUFDO2lCQUNiO2dCQUFDLE9BQU8sR0FBRyxFQUFFO29CQUNWLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDZjtZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztLQUFBO0lBRUQ7Ozs7O09BS0c7SUFDVSxTQUFTLENBQUMsTUFBYyxFQUFFLGtCQUEwQjs7WUFDN0QsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ3RCLE1BQU0sSUFBSSx5QkFBVyxDQUFDLHNEQUFzRCxDQUFDLENBQUM7YUFDakY7WUFDRCxJQUFJLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLGVBQU0sQ0FBQyxFQUFFO2dCQUN0QyxNQUFNLElBQUkseUJBQVcsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO2FBQ3hFO1lBQ0QsSUFBSSxDQUFDLDJCQUFZLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLElBQUksa0JBQWtCLElBQUksQ0FBQyxFQUFFO2dCQUN4RSxNQUFNLElBQUkseUJBQVcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO2FBQy9EO1lBRUQsTUFBTSxLQUFLLEdBQUcsTUFBTSx1QkFBVSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztZQUVyRixNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDdkMsTUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3JDLE9BQU8sZUFBTSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNuSCxDQUFDO0tBQUE7Q0FDSjtBQXhFRCw0Q0F3RUMifQ==

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
exports.default = `
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NoYWRlcnMvYWRkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRztBQUNILGtCQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXdEZCxDQUFDIn0=

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
exports.default = `
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tDb2wuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2hhZGVycy9jaGVja0NvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7QUFDSCxrQkFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXNCZCxDQUFDIn0=

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
exports.default = `
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tEby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zaGFkZXJzL2NoZWNrRG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHO0FBQ0gsa0JBQWU7Ozs7Ozs7Ozs7OztDQVlkLENBQUMifQ==

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
exports.default = `
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tLLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NoYWRlcnMvY2hlY2tLLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRztBQUNILGtCQUFlOzs7Ozs7Ozs7OztDQVdkLENBQUMifQ==

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
exports.default = `
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluYWxpemUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2hhZGVycy9maW5hbGl6ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7QUFDSCxrQkFBZTs7Ozs7Ozs7Ozs7Ozs7OztDQWdCZCxDQUFDIn0=

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
exports.default = `
#define HASH_LENGTH 243
#define NUMBER_OF_ROUNDS 81
#define INCREMENT_START HASH_LENGTH - 64
#define STATE_LENGTH 3 * HASH_LENGTH
#define HALF_LENGTH 364
#define HIGH_BITS 0xFFFFFFFF
#define LOW_BITS 0x00000000
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zaGFkZXJzL2hlYWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHO0FBQ0gsa0JBQWU7Ozs7Ozs7O0NBUWQsQ0FBQyJ9

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
exports.default = `
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5jcmVtZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NoYWRlcnMvaW5jcmVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRztBQUNILGtCQUFlOzs7Ozs7Ozs7Ozs7O0NBYWQsQ0FBQyJ9

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
exports.default = `
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zaGFkZXJzL2luaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHO0FBQ0gsa0JBQWU7Ozs7Ozs7Ozs7Ozs7OztDQWVkLENBQUMifQ==

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
exports.default = `
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NoYWRlcnMvdHJhbnNmb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRztBQUNILGtCQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBc0JkLENBQUMifQ==

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
exports.default = `#version 300 es
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RkbGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3dlYkdML3N0ZGxpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7QUFDSCxrQkFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0E2QkMsQ0FBQyJ9

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
exports.default = `#version 300 es
layout(location = 0) in vec2 position;
layout(location = 1) in vec2 texture;
out vec2 pos;

void main(void) {
  pos = texture;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGV4U2hhZGVyQ29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy93ZWJHTC92ZXJ0ZXhTaGFkZXJDb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRztBQUNILGtCQUNBOzs7Ozs7OztFQVFFLENBQUMifQ==

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
                else {
                    throw new cryptoError_1.CryptoError("The HTML5 <canvas> element is not available in your browser.", { userAgent: window.navigator.userAgent });
                }
            }
            else {
                throw new cryptoError_1.CryptoError("window.document is not available, you must be running in an environment with WebGL.");
            }
        }
        else {
            throw new cryptoError_1.CryptoError("window is not available, you must be running in an environment with WebGL.");
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViR0xIZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvd2ViR0wvd2ViR0xIZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDRFQUF5RTtBQUN6RSwwRUFBdUU7QUFJdkU7O0dBRUc7QUFDSCxNQUFhLFdBQVc7SUFDcEI7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxhQUFhLENBQUMsYUFBNkI7UUFDckQsTUFBTSxNQUFNLEdBQUcsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRXpDLElBQUksQ0FBQywyQkFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7WUFDaEUsTUFBTSxRQUFRLEdBQUcsYUFBYSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUVuRCxJQUFJLENBQUMsMkJBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ2pDLE1BQU0sTUFBTSxHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBRWpELElBQUksQ0FBQywyQkFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDL0IsTUFBTSxFQUFFLEdBQUcsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFFMUMsSUFBSSwyQkFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRTt3QkFDMUIsTUFBTSxJQUFJLHlCQUFXLENBQUMsdURBQXVELEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO3FCQUM3SDtvQkFFRCxPQUFPLEVBQUUsQ0FBQztpQkFDYjtxQkFBTTtvQkFDSCxNQUFNLElBQUkseUJBQVcsQ0FBQyw4REFBOEQsRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7aUJBQ3BJ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

/***/ }),

/***/ "./dist.es6/webGL/webGLWorker.js":
/*!***************************************!*\
  !*** ./dist.es6/webGL/webGLWorker.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const cryptoError_1 = __webpack_require__(/*! @iota-pico/crypto/dist/error/cryptoError */ "@iota-pico/crypto/dist/error/cryptoError");
const stdlib_1 = tslib_1.__importDefault(__webpack_require__(/*! ./stdlib */ "./dist.es6/webGL/stdlib.js"));
const vertexShaderCode_1 = tslib_1.__importDefault(__webpack_require__(/*! ./vertexShaderCode */ "./dist.es6/webGL/vertexShaderCode.js"));
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
        this._context.shaderSource(this._vertexShader, vertexShaderCode_1.default);
        this._context.compileShader(this._vertexShader);
        // This should not fail.
        if (!this._context.getShaderParameter(this._vertexShader, this._context.COMPILE_STATUS)) {
            throw new cryptoError_1.CryptoError(`Could not build vertex shader.

--- CODE DUMP ---${vertexShaderCode_1.default}

--- ERROR LOG ---
${this._context.getShaderInfoLog(this._vertexShader)}`);
        }
    }
    /* @internal */
    createFragmentShader(code) {
        const fragmentShader = this._context.createShader(this._context.FRAGMENT_SHADER);
        this._context.shaderSource(fragmentShader, stdlib_1.default + code);
        this._context.compileShader(fragmentShader);
        // Use this output to debug the shader
        // Keep in mind that WebGL GLSL is **much** stricter than e.g. OpenGL GLSL
        if (!this._context.getShaderParameter(fragmentShader, this._context.COMPILE_STATUS)) {
            const codeLines = code.split("\n");
            let dbgMsg = "Could not build fragment shader.\n\n------------------ KERNEL CODE DUMP ------------------\n";
            for (let nl = 0; nl < codeLines.length; nl++) {
                dbgMsg += `${stdlib_1.default.split("\n").length + nl}> ${codeLines[nl]}\n`;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViR0xXb3JrZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvd2ViR0wvd2ViR0xXb3JrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwRUFBdUU7QUFFdkUsOERBQThCO0FBQzlCLGtGQUFrRDtBQUNsRCwrQ0FBNEM7QUFJNUM7O0dBRUc7QUFDSCxNQUFhLFdBQVc7SUF3QnBCOzs7OztPQUtHO0lBQ0ksVUFBVSxDQUFDLGFBQTZCLEVBQUUsV0FBbUIsRUFBRSxTQUFpQjtRQUNuRixJQUFJLENBQUMsUUFBUSxHQUFHLHlCQUFXLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUU1QyxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3ZFLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQztRQUM3RyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDO1FBRWhFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHO1lBQ1IsSUFBSSxFQUFFLElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQztZQUMvQixNQUFNLEVBQUUsU0FBUztTQUNwQixDQUFDO1FBRUYsMkNBQTJDO1FBQzNDLElBQUksQ0FBQyxRQUFRLEdBQUc7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RSxDQUFTLEVBQUUsQ0FBUztRQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFNBQVMsQ0FBQyxJQUFxQjtRQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3SyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVB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

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvLi9kaXN0LmVzNi9pbmRleC5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsLy4vZGlzdC5lczYvcGVhcmxEaXZlci9wZWFybERpdmVyLmpzIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvLi9kaXN0LmVzNi9wZWFybERpdmVyL3BlYXJsRGl2ZXJTdGF0ZS5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsLy4vZGlzdC5lczYvcHJvb2ZPZldvcmtXZWJHbC5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsLy4vZGlzdC5lczYvc2hhZGVycy9hZGQuanMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dXZWJnbC8uL2Rpc3QuZXM2L3NoYWRlcnMvY2hlY2tDb2wuanMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dXZWJnbC8uL2Rpc3QuZXM2L3NoYWRlcnMvY2hlY2tEby5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsLy4vZGlzdC5lczYvc2hhZGVycy9jaGVja0suanMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dXZWJnbC8uL2Rpc3QuZXM2L3NoYWRlcnMvZmluYWxpemUuanMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dXZWJnbC8uL2Rpc3QuZXM2L3NoYWRlcnMvaGVhZGVycy5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsLy4vZGlzdC5lczYvc2hhZGVycy9pbmNyZW1lbnQuanMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dXZWJnbC8uL2Rpc3QuZXM2L3NoYWRlcnMvaW5pdC5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsLy4vZGlzdC5lczYvc2hhZGVycy90cmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dXZWJnbC8uL2Rpc3QuZXM2L3dlYkdML3N0ZGxpYi5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsLy4vZGlzdC5lczYvd2ViR0wvdmVydGV4U2hhZGVyQ29kZS5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsLy4vZGlzdC5lczYvd2ViR0wvd2ViR0xIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dXZWJnbC8uL2Rpc3QuZXM2L3dlYkdML3dlYkdMV29ya2VyLmpzIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvZXh0ZXJuYWwgXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvZXh0ZXJuYWwgXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvZXh0ZXJuYWwgXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L2Vycm9yL2NyeXB0b0Vycm9yXCIiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dXZWJnbC9leHRlcm5hbCBcIkBpb3RhLXBpY28vY3J5cHRvL2Rpc3QvZmFjdG9yaWVzL3Nwb25nZUZhY3RvcnlcIiIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsL2V4dGVybmFsIFwiQGlvdGEtcGljby9jcnlwdG8vZGlzdC9wcm9vZk9mV29yay9wcm9vZk9mV29ya0Jhc2VcIiIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsL2V4dGVybmFsIFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cml0c1wiIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvZXh0ZXJuYWwgXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyeXRlc1wiIl0sIm5h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RTtBQUNwRixzQkFBc0Isb0dBQW9HO0FBQzFILDZCQUE2Qix1QkFBdUI7QUFDcEQsNEJBQTRCLHdCQUF3QjtBQUNwRCwyQkFBMkIseURBQXlEO0FBQ3BGOztBQUVPO0FBQ1A7QUFDQSxpQkFBaUIsNENBQTRDLFNBQVMsRUFBRSxxREFBcUQsYUFBYSxFQUFFO0FBQzVJLHlCQUF5Qiw2QkFBNkIsb0JBQW9CLGdEQUFnRCxnQkFBZ0IsRUFBRSxLQUFLO0FBQ2pKOztBQUVPO0FBQ1A7QUFDQTtBQUNBLDJHQUEyRyxzRkFBc0YsYUFBYSxFQUFFO0FBQ2hOLHNCQUFzQiw4QkFBOEIsZ0RBQWdELHVEQUF1RCxFQUFFLEVBQUUsR0FBRztBQUNsSyw0Q0FBNEMsc0NBQXNDLFVBQVUsb0JBQW9CLEVBQUUsRUFBRSxVQUFVO0FBQzlIOztBQUVPO0FBQ1AsZ0NBQWdDLHVDQUF1QyxhQUFhLEVBQUUsRUFBRSxPQUFPLGtCQUFrQjtBQUNqSDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1AsNENBQTRDO0FBQzVDOzs7Ozs7Ozs7Ozs7QUN6TEEsdUY7Ozs7Ozs7Ozs7O0FDQUEsdUY7Ozs7Ozs7Ozs7O0FDQUEsc0Y7Ozs7Ozs7Ozs7O0FDQUEsNEY7Ozs7Ozs7Ozs7O0FDQUEsZ0c7Ozs7Ozs7Ozs7O0FDQUEsNkU7Ozs7Ozs7Ozs7O0FDQUEsOEUiLCJmaWxlIjoiaW90YS1waWNvLXBvdy13ZWJnbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L2Vycm9yL2NyeXB0b0Vycm9yXCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9jcnlwdG8vZGlzdC9mYWN0b3JpZXMvc3BvbmdlRmFjdG9yeVwiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vY3J5cHRvL2Rpc3QvcHJvb2ZPZldvcmsvcHJvb2ZPZldvcmtCYXNlXCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cml0c1wiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJ5dGVzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiQGlvdGEtcGljby9wb3ctd2ViZ2xcIiwgW1wiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIiwgXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiLCBcIkBpb3RhLXBpY28vY3J5cHRvL2Rpc3QvZXJyb3IvY3J5cHRvRXJyb3JcIiwgXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L2ZhY3Rvcmllcy9zcG9uZ2VGYWN0b3J5XCIsIFwiQGlvdGEtcGljby9jcnlwdG8vZGlzdC9wcm9vZk9mV29yay9wcm9vZk9mV29ya0Jhc2VcIiwgXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyaXRzXCIsIFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cnl0ZXNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGlvdGEtcGljby9wb3ctd2ViZ2xcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9jcnlwdG8vZGlzdC9lcnJvci9jcnlwdG9FcnJvclwiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vY3J5cHRvL2Rpc3QvZmFjdG9yaWVzL3Nwb25nZUZhY3RvcnlcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L3Byb29mT2ZXb3JrL3Byb29mT2ZXb3JrQmFzZVwiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJpdHNcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyeXRlc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiSW90YVBpY29Qb3dXZWJnbFwiXSA9IGZhY3Rvcnkocm9vdFtcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCJdLCByb290W1wiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIl0sIHJvb3RbXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L2Vycm9yL2NyeXB0b0Vycm9yXCJdLCByb290W1wiQGlvdGEtcGljby9jcnlwdG8vZGlzdC9mYWN0b3JpZXMvc3BvbmdlRmFjdG9yeVwiXSwgcm9vdFtcIkBpb3RhLXBpY28vY3J5cHRvL2Rpc3QvcHJvb2ZPZldvcmsvcHJvb2ZPZldvcmtCYXNlXCJdLCByb290W1wiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cml0c1wiXSwgcm9vdFtcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJ5dGVzXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fY29yZV9kaXN0X2hlbHBlcnNfbnVtYmVySGVscGVyX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19jb3JlX2Rpc3RfaGVscGVyc19vYmplY3RIZWxwZXJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NyeXB0b19kaXN0X2Vycm9yX2NyeXB0b0Vycm9yX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19jcnlwdG9fZGlzdF9mYWN0b3JpZXNfc3BvbmdlRmFjdG9yeV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fY3J5cHRvX2Rpc3RfcHJvb2ZPZldvcmtfcHJvb2ZPZldvcmtCYXNlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19kYXRhX2Rpc3RfZGF0YV90cml0c19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fZGF0YV9kaXN0X2RhdGFfdHJ5dGVzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Rpc3QuZXM2L2luZGV4LmpzXCIpO1xuIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xyXG4vKipcclxuICogQ29tYmluZWQgaW5kZXggb2YgYWxsIHRoZSBtb2R1bGVzLlxyXG4gKi9cclxudHNsaWJfMS5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vcHJvb2ZPZldvcmtXZWJHbFwiKSwgZXhwb3J0cyk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdmFXNWtaWGd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRVHM3UjBGRlJ6dEJRVU5JTERaRVFVRnRReUo5IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3Qgc3BvbmdlRmFjdG9yeV8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY3J5cHRvL2Rpc3QvZmFjdG9yaWVzL3Nwb25nZUZhY3RvcnlcIik7XHJcbmNvbnN0IHRyaXRzXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cml0c1wiKTtcclxuY29uc3QgYWRkXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhZGVycy9hZGRcIikpO1xyXG5jb25zdCBjaGVja0NvbF8xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL3NoYWRlcnMvY2hlY2tDb2xcIikpO1xyXG5jb25zdCBjaGVja0RvXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhZGVycy9jaGVja0RvXCIpKTtcclxuY29uc3QgY2hlY2tLXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhZGVycy9jaGVja0tcIikpO1xyXG5jb25zdCBmaW5hbGl6ZV8xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL3NoYWRlcnMvZmluYWxpemVcIikpO1xyXG5jb25zdCBoZWFkZXJzXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhZGVycy9oZWFkZXJzXCIpKTtcclxuY29uc3QgaW5jcmVtZW50XzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhZGVycy9pbmNyZW1lbnRcIikpO1xyXG5jb25zdCBpbml0XzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhZGVycy9pbml0XCIpKTtcclxuY29uc3QgdHJhbnNmb3JtXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhZGVycy90cmFuc2Zvcm1cIikpO1xyXG5jb25zdCB3ZWJHTFdvcmtlcl8xID0gcmVxdWlyZShcIi4uL3dlYkdML3dlYkdMV29ya2VyXCIpO1xyXG5jb25zdCBwZWFybERpdmVyU3RhdGVfMSA9IHJlcXVpcmUoXCIuL3BlYXJsRGl2ZXJTdGF0ZVwiKTtcclxuLyoqXHJcbiAqIFBlYXJsRGl2ZXIuXHJcbiAqIENvbnZlcnRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9pb3RhbGVkZ2VyL2N1cmwubGliLmpzL2Jsb2IvbWFzdGVyL3NyYy9wZWFybGRpdmVyLmpzXHJcbiAqL1xyXG5jbGFzcyBQZWFybERpdmVyIHtcclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY29uc3RydWN0b3Iod2ViR0xQbGF0Zm9ybSkge1xyXG4gICAgICAgIHRoaXMuX3dlYkdMV29ya2VyID0gbmV3IHdlYkdMV29ya2VyXzEuV2ViR0xXb3JrZXIoKTtcclxuICAgICAgICBjb25zdCBjdXJsID0gc3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS5jcmVhdGUoXCJjdXJsXCIpO1xyXG4gICAgICAgIHRoaXMuX2hhc2hMZW5ndGggPSBjdXJsLmdldENvbnN0YW50KFwiSEFTSF9MRU5HVEhcIik7XHJcbiAgICAgICAgdGhpcy5fc3RhdGVMZW5ndGggPSBjdXJsLmdldENvbnN0YW50KFwiU1RBVEVfTEVOR1RIXCIpO1xyXG4gICAgICAgIHRoaXMuX251bWJlclJvdW5kcyA9IGN1cmwuZ2V0Q29uc3RhbnQoXCJOVU1CRVJfT0ZfUk9VTkRTXCIpO1xyXG4gICAgICAgIHRoaXMuX3RyYW5zYWN0aW9uTGVuZ3RoID0gdGhpcy5faGFzaExlbmd0aCAqIDMzO1xyXG4gICAgICAgIHRoaXMuX25vbmNlTGVuZ3RoID0gdGhpcy5faGFzaExlbmd0aCAvIDM7XHJcbiAgICAgICAgdGhpcy5fbm9uY2VTdGFydCA9IHRoaXMuX2hhc2hMZW5ndGggLSB0aGlzLl9ub25jZUxlbmd0aDtcclxuICAgICAgICB0aGlzLl93ZWJHTFdvcmtlci5pbml0aWFsaXplKHdlYkdMUGxhdGZvcm0sIHRoaXMuX3N0YXRlTGVuZ3RoICsgMSwgUGVhcmxEaXZlci5URVhFTF9TSVpFKTtcclxuICAgICAgICB0aGlzLl9jdXJyZW50QnVmZmVyID0gdGhpcy5fd2ViR0xXb3JrZXIuZ2V0SXB0KCkuZGF0YTtcclxuICAgICAgICB0aGlzLl93ZWJHTFdvcmtlci5hZGRQcm9ncmFtKFwiaW5pdFwiLCBoZWFkZXJzXzEuZGVmYXVsdCArIGFkZF8xLmRlZmF1bHQgKyBpbml0XzEuZGVmYXVsdCwgXCJncl9vZmZzZXRcIik7XHJcbiAgICAgICAgdGhpcy5fd2ViR0xXb3JrZXIuYWRkUHJvZ3JhbShcImluY3JlbWVudFwiLCBoZWFkZXJzXzEuZGVmYXVsdCArIGFkZF8xLmRlZmF1bHQgKyBpbmNyZW1lbnRfMS5kZWZhdWx0KTtcclxuICAgICAgICB0aGlzLl93ZWJHTFdvcmtlci5hZGRQcm9ncmFtKFwidHdpc3RcIiwgaGVhZGVyc18xLmRlZmF1bHQgKyB0cmFuc2Zvcm1fMS5kZWZhdWx0KTtcclxuICAgICAgICB0aGlzLl93ZWJHTFdvcmtlci5hZGRQcm9ncmFtKFwiY2hlY2tcIiwgaGVhZGVyc18xLmRlZmF1bHQgKyBjaGVja0RvXzEuZGVmYXVsdCArIGNoZWNrS18xLmRlZmF1bHQsIFwibWluV2VpZ2h0TWFnbml0dWRlXCIpO1xyXG4gICAgICAgIHRoaXMuX3dlYkdMV29ya2VyLmFkZFByb2dyYW0oXCJjb2xfY2hlY2tcIiwgaGVhZGVyc18xLmRlZmF1bHQgKyBjaGVja0NvbF8xLmRlZmF1bHQpO1xyXG4gICAgICAgIHRoaXMuX3dlYkdMV29ya2VyLmFkZFByb2dyYW0oXCJmaW5hbGl6ZVwiLCBoZWFkZXJzXzEuZGVmYXVsdCArIGNoZWNrRG9fMS5kZWZhdWx0ICsgZmluYWxpemVfMS5kZWZhdWx0KTtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHBlYXJsRGl2ZXJTdGF0ZV8xLlBlYXJsRGl2ZXJTdGF0ZS5yZWFkeTtcclxuICAgICAgICB0aGlzLl9xdWV1ZSA9IFtdO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplIHRoZSBQZWFybERpdmVyIG1haW4gaW5zdGFuY2UuXHJcbiAgICAgKiBAcGFyYW0gd2ViR0xQbGF0Zm9ybSBUaGUgcGxhdGZvcm0gc28gaW5pdGlhbGl6ZSB0aGUgcGVhcmwgZGl2ZXIgd2l0aC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGluaXRpYWxpemUod2ViR0xQbGF0Zm9ybSkge1xyXG4gICAgICAgIGlmICghUGVhcmxEaXZlci5pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICBQZWFybERpdmVyLmluc3RhbmNlID0gbmV3IFBlYXJsRGl2ZXIod2ViR0xQbGF0Zm9ybSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDbG9zZWRvd24gdGhlIFBlYXJsRGl2ZXIgbWFpbiBpbnN0YW5jZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNsb3NlZG93bigpIHtcclxuICAgICAgICBpZiAoUGVhcmxEaXZlci5pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICBQZWFybERpdmVyLmluc3RhbmNlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUGVyZm9ybSBhIHNlYXJjaCB1c2luZyB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gdHJ5dGVzIFRoZSB0cnl0ZXMgdG8gcGVyZm9ybSB0aGUgc2VhcmNoIG9uLlxyXG4gICAgICogQHBhcmFtIG1pbldlaWdodE1hZ25pdHVkZSBUaGUgbWluaW11bSB3ZWlnaHQgbWFnbml0dWRlLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB3aGljaCByZXNvbHZlcyB0byB0aGUgdHJ5dGVzIGZyb20gdGhlIHNlYXJjaC5cclxuICAgICAqL1xyXG4gICAgc2VhcmNoV2l0aFRyeXRlcyh0cnl0ZXMsIG1pbldlaWdodE1hZ25pdHVkZSkge1xyXG4gICAgICAgIHJldHVybiB0c2xpYl8xLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VhcmNoU3RhdGVzID0gdGhpcy5wcmVwYXJlKHRyeXRlcyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlYXJjaChzZWFyY2hTdGF0ZXMsIG1pbldlaWdodE1hZ25pdHVkZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHByZXBhcmUodHJhbnNhY3Rpb25Ucnl0ZXMpIHtcclxuICAgICAgICBjb25zdCBjdXJsID0gc3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS5jcmVhdGUoXCJjdXJsXCIpO1xyXG4gICAgICAgIGN1cmwuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uVHJpdHMgPSB0cml0c18xLlRyaXRzLmZyb21Ucnl0ZXModHJhbnNhY3Rpb25Ucnl0ZXMpLnRvQXJyYXkoKTtcclxuICAgICAgICBjdXJsLmFic29yYih0cmFuc2FjdGlvblRyaXRzLCAwLCB0aGlzLl90cmFuc2FjdGlvbkxlbmd0aCAtIHRoaXMuX2hhc2hMZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IGN1cmxTdGF0ZSA9IGN1cmwuZ2V0U3RhdGUoKTtcclxuICAgICAgICB0cmFuc2FjdGlvblRyaXRzXHJcbiAgICAgICAgICAgIC5zbGljZSh0aGlzLl90cmFuc2FjdGlvbkxlbmd0aCAtIHRoaXMuX2hhc2hMZW5ndGgsIHRoaXMuX3RyYW5zYWN0aW9uTGVuZ3RoKVxyXG4gICAgICAgICAgICAuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGN1cmxTdGF0ZVtpbmRleF0gPSB2YWx1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hUb1BhaXIoY3VybFN0YXRlKTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgc2VhcmNoKHN0YXRlcywgbWluV2VpZ2h0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICAvLyBwcm9taXNlIHdpbGwgY29tcGxldGUgd2hlbiB0aGUgc2VhcmNoIGhhcyBjb21wbGV0ZWRcclxuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByb21pc2UtbXVzdC1jb21wbGV0ZVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcXVldWUucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVzOiBzdGF0ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluV2VpZ2h0TWFnbml0dWRlOiBtaW5XZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IHJlc29sdmVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSBwZWFybERpdmVyU3RhdGVfMS5QZWFybERpdmVyU3RhdGUucmVhZHkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaERvTmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgc2VhcmNoVG9QYWlyKHN0YXRlKSB7XHJcbiAgICAgICAgY29uc3Qgc3RhdGVzID0ge1xyXG4gICAgICAgICAgICBsb3c6IG5ldyBJbnQzMkFycmF5KHRoaXMuX3N0YXRlTGVuZ3RoKSxcclxuICAgICAgICAgICAgaGlnaDogbmV3IEludDMyQXJyYXkodGhpcy5fc3RhdGVMZW5ndGgpXHJcbiAgICAgICAgfTtcclxuICAgICAgICBzdGF0ZS5mb3JFYWNoKCh0cml0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRyaXQpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZXMubG93W2luZGV4XSA9IFBlYXJsRGl2ZXIuSElHSF9CSVRTO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlcy5oaWdoW2luZGV4XSA9IFBlYXJsRGl2ZXIuSElHSF9CSVRTO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlcy5sb3dbaW5kZXhdID0gUGVhcmxEaXZlci5MT1dfQklUUztcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZXMuaGlnaFtpbmRleF0gPSBQZWFybERpdmVyLkhJR0hfQklUUztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVzLmxvd1tpbmRleF0gPSBQZWFybERpdmVyLkhJR0hfQklUUztcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZXMuaGlnaFtpbmRleF0gPSBQZWFybERpdmVyLkxPV19CSVRTO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hPZmZzZXQoc3RhdGVzLCB0aGlzLl9ub25jZVN0YXJ0KTtcclxuICAgICAgICByZXR1cm4gc3RhdGVzO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBzZWFyY2hPZmZzZXQoc3RhdGVzLCBvZmZzZXQpIHtcclxuICAgICAgICBzdGF0ZXMubG93W29mZnNldCArIDBdID0gUGVhcmxEaXZlci5MT1dfMDtcclxuICAgICAgICBzdGF0ZXMubG93W29mZnNldCArIDFdID0gUGVhcmxEaXZlci5MT1dfMTtcclxuICAgICAgICBzdGF0ZXMubG93W29mZnNldCArIDJdID0gUGVhcmxEaXZlci5MT1dfMjtcclxuICAgICAgICBzdGF0ZXMubG93W29mZnNldCArIDNdID0gUGVhcmxEaXZlci5MT1dfMztcclxuICAgICAgICBzdGF0ZXMuaGlnaFtvZmZzZXQgKyAwXSA9IFBlYXJsRGl2ZXIuSElHSF8wO1xyXG4gICAgICAgIHN0YXRlcy5oaWdoW29mZnNldCArIDFdID0gUGVhcmxEaXZlci5ISUdIXzE7XHJcbiAgICAgICAgc3RhdGVzLmhpZ2hbb2Zmc2V0ICsgMl0gPSBQZWFybERpdmVyLkhJR0hfMjtcclxuICAgICAgICBzdGF0ZXMuaGlnaFtvZmZzZXQgKyAzXSA9IFBlYXJsRGl2ZXIuSElHSF8zO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBzZWFyY2hEb05leHQoKSB7XHJcbiAgICAgICAgY29uc3QgbmV4dCA9IHRoaXMuX3F1ZXVlLnNoaWZ0KCk7XHJcbiAgICAgICAgaWYgKG9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KG5leHQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gcGVhcmxEaXZlclN0YXRlXzEuUGVhcmxEaXZlclN0YXRlLnJlYWR5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBwZWFybERpdmVyU3RhdGVfMS5QZWFybERpdmVyU3RhdGUuc2VhcmNoaW5nO1xyXG4gICAgICAgICAgICB0aGlzLndlYkdMRmluZE5vbmNlKG5leHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgd2ViR0xGaW5kTm9uY2Uoc2VhcmNoT2JqZWN0KSB7XHJcbiAgICAgICAgdGhpcy53ZWJHTFdyaXRlQnVmZmVycyhzZWFyY2hPYmplY3Quc3RhdGVzKTtcclxuICAgICAgICB0aGlzLl93ZWJHTFdvcmtlci53cml0ZURhdGEodGhpcy5fY3VycmVudEJ1ZmZlcik7XHJcbiAgICAgICAgdGhpcy5fd2ViR0xXb3JrZXIucnVuUHJvZ3JhbShcImluaXRcIiwgMSwgeyBuYW1lOiBcImdyX29mZnNldFwiLCB2YWx1ZTogMCB9KTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMud2ViR0xTZWFyY2goc2VhcmNoT2JqZWN0KSwgMSk7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHdlYkdMV3JpdGVCdWZmZXJzKHN0YXRlcykge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fc3RhdGVMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50QnVmZmVyW2kgKiBQZWFybERpdmVyLlRFWEVMX1NJWkVdID0gc3RhdGVzLmxvd1tpXTtcclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudEJ1ZmZlcltpICogUGVhcmxEaXZlci5URVhFTF9TSVpFICsgMV0gPSBzdGF0ZXMuaGlnaFtpXTtcclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudEJ1ZmZlcltpICogUGVhcmxEaXZlci5URVhFTF9TSVpFICsgMl0gPSBzdGF0ZXMubG93W2ldO1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50QnVmZmVyW2kgKiBQZWFybERpdmVyLlRFWEVMX1NJWkUgKyAzXSA9IHN0YXRlcy5oaWdoW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgd2ViR0xTZWFyY2goc2VhcmNoT2JqZWN0KSB7XHJcbiAgICAgICAgdGhpcy5fd2ViR0xXb3JrZXIucnVuUHJvZ3JhbShcImluY3JlbWVudFwiLCAxKTtcclxuICAgICAgICB0aGlzLl93ZWJHTFdvcmtlci5ydW5Qcm9ncmFtKFwidHdpc3RcIiwgdGhpcy5fbnVtYmVyUm91bmRzKTtcclxuICAgICAgICB0aGlzLl93ZWJHTFdvcmtlci5ydW5Qcm9ncmFtKFwiY2hlY2tcIiwgMSwgeyBuYW1lOiBcIm1pbldlaWdodE1hZ25pdHVkZVwiLCB2YWx1ZTogc2VhcmNoT2JqZWN0Lm1pbldlaWdodE1hZ25pdHVkZSB9KTtcclxuICAgICAgICB0aGlzLl93ZWJHTFdvcmtlci5ydW5Qcm9ncmFtKFwiY29sX2NoZWNrXCIsIDEpO1xyXG4gICAgICAgIGlmICh0aGlzLl93ZWJHTFdvcmtlci5yZWFkRGF0YSh0aGlzLl9zdGF0ZUxlbmd0aCwgMCwgMSwgMSlbMl0gPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy53ZWJHTFNlYXJjaChzZWFyY2hPYmplY3QpLCAxMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl93ZWJHTFdvcmtlci5ydW5Qcm9ncmFtKFwiZmluYWxpemVcIiwgMSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vbmNlID0gdGhpcy5fd2ViR0xXb3JrZXIucmVhZERhdGEoMCwgMCwgdGhpcy5fd2ViR0xXb3JrZXIuZ2V0RGltZW5zaW9ucygpLngsIDEpXHJcbiAgICAgICAgICAgICAgICAucmVkdWNlKHRoaXMucGFjayg0KSwgW10pXHJcbiAgICAgICAgICAgICAgICAuc2xpY2UoMCwgdGhpcy5faGFzaExlbmd0aClcclxuICAgICAgICAgICAgICAgIC5tYXAoeCA9PiB4WzNdKTtcclxuICAgICAgICAgICAgc2VhcmNoT2JqZWN0LmNhbGxiYWNrKHRyaXRzXzEuVHJpdHMuZnJvbU51bWJlckFycmF5KG5vbmNlKS50b1RyeXRlcygpKTtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hEb05leHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHBhY2sobCkge1xyXG4gICAgICAgIHJldHVybiAociwgY3VycmVudFZhbHVlLCBjdXJyZW50SW5kZXgpID0+IChjdXJyZW50SW5kZXggJSBsID09PSAwID8gci5wdXNoKFtjdXJyZW50VmFsdWVdKSA6IHJbci5sZW5ndGggLSAxXS5wdXNoKGN1cnJlbnRWYWx1ZSkpICYmIHI7XHJcbiAgICB9XHJcbn1cclxuLyogQGludGVybmFsICovXHJcblBlYXJsRGl2ZXIuVEVYRUxfU0laRSA9IDQ7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5QZWFybERpdmVyLkxPV19CSVRTID0gMDsgLy8gMDAwMDAwMDBcclxuLyogQGludGVybmFsICovXHJcblBlYXJsRGl2ZXIuSElHSF9CSVRTID0gLTE7IC8vIDB4RkZGRkZGRkYsRkZGRkZGRkYsNDI5NDk2NzI5NVxyXG4vKiBAaW50ZXJuYWwgKi9cclxuUGVhcmxEaXZlci5MT1dfMCA9IDB4REI2REI2REI7IC8vIDZEQjZEQjZELFxyXG4vKiBAaW50ZXJuYWwgKi9cclxuUGVhcmxEaXZlci5MT1dfMSA9IDB4RjFGOEZDN0U7IC8vIDNGMUY4RkM3LFxyXG4vKiBAaW50ZXJuYWwgKi9cclxuUGVhcmxEaXZlci5MT1dfMiA9IDB4N0ZGRkUwMEY7IC8vIEZGRkMwMUZGLFxyXG4vKiBAaW50ZXJuYWwgKi9cclxuUGVhcmxEaXZlci5MT1dfMyA9IDB4RkZDMDAwMDA7IC8vIDA3RkZGRkZGLFxyXG4vKiBAaW50ZXJuYWwgKi9cclxuUGVhcmxEaXZlci5ISUdIXzAgPSAweEI2REI2REI2OyAvLyBEQjZEQjZEQixcclxuLyogQGludGVybmFsICovXHJcblBlYXJsRGl2ZXIuSElHSF8xID0gMHg4RkM3RTNGMTsgLy8gRjhGQzdFM0YsXHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5QZWFybERpdmVyLkhJR0hfMiA9IDB4RkZDMDFGRkY7IC8vIEY4MDNGRkZGLFxyXG4vKiBAaW50ZXJuYWwgKi9cclxuUGVhcmxEaXZlci5ISUdIXzMgPSAweDAwM0ZGRkZGOyAvL0ZGRkZGRkZGLFxyXG5leHBvcnRzLlBlYXJsRGl2ZXIgPSBQZWFybERpdmVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljR1ZoY214RWFYWmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXdaV0Z5YkVScGRtVnlMM0JsWVhKc1JHbDJaWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRU3cwUlVGQmVVVTdRVUZEZWtVc2EwWkJRU3RGTzBGQlF5OUZMREpFUVVGM1JEdEJRVWQ0UkN4cFJVRkJhVU03UVVGRGFrTXNNa1ZCUVRKRE8wRkJRek5ETEhsRlFVRjVRenRCUVVONlF5eDFSVUZCZFVNN1FVRkRka01zTWtWQlFUSkRPMEZCUXpORExIbEZRVUY1UXp0QlFVTjZReXcyUlVGQk5rTTdRVUZETjBNc2JVVkJRVzFETzBGQlEyNURMRFpGUVVFMlF6dEJRVU0zUXl4elJFRkJiVVE3UVVGSGJrUXNkVVJCUVc5RU8wRkJRM0JFT3pzN1IwRkhSenRCUVVOSUxFMUJRV0VzVlVGQlZUdEpRV2RFYmtJc1pVRkJaVHRKUVVObUxGbEJRVzlDTEdGQlFUWkNPMUZCUXpkRExFbEJRVWtzUTBGQlF5eFpRVUZaTEVkQlFVY3NTVUZCU1N4NVFrRkJWeXhGUVVGRkxFTkJRVU03VVVGRGRFTXNUVUZCVFN4SlFVRkpMRWRCUVVjc05rSkJRV0VzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRGNrUXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkRPMUZCUTI1RUxFbEJRVWtzUTBGQlF5eFpRVUZaTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhqUVVGakxFTkJRVU1zUTBGQlF6dFJRVU55UkN4SlFVRkpMRU5CUVVNc1lVRkJZU3hIUVVGSExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zUTBGQlF6dFJRVU14UkN4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhGUVVGRkxFTkJRVU03VVVGRGFFUXNTVUZCU1N4RFFVRkRMRmxCUVZrc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTjZReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEVsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF6dFJRVVY0UkN4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExGVkJRVlVzUTBGQlF5eGhRVUZoTEVWQlFVVXNTVUZCU1N4RFFVRkRMRmxCUVZrc1IwRkJSeXhEUVVGRExFVkJRVVVzVlVGQlZTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMUZCUXpGR0xFbEJRVWtzUTBGQlF5eGpRVUZqTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTTdVVUZEZEVRc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RlFVRkZMR2xDUVVGUExFZEJRVWNzWVVGQlJ5eEhRVUZITEdOQlFVa3NSVUZCUlN4WFFVRlhMRU5CUVVNc1EwRkJRenRSUVVONFJTeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRlZCUVZVc1EwRkJReXhYUVVGWExFVkJRVVVzYVVKQlFVOHNSMEZCUnl4aFFVRkhMRWRCUVVjc2JVSkJRVk1zUTBGQlF5eERRVUZETzFGQlEzSkZMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zVlVGQlZTeERRVUZETEU5QlFVOHNSVUZCUlN4cFFrRkJUeXhIUVVGSExHMUNRVUZUTEVOQlFVTXNRMEZCUXp0UlFVTXpSQ3hKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEZWQlFWVXNRMEZCUXl4UFFVRlBMRVZCUVVVc2FVSkJRVThzUjBGQlJ5eHBRa0ZCVHl4SFFVRkhMR2RDUVVGTkxFVkJRVVVzYjBKQlFXOUNMRU5CUVVNc1EwRkJRenRSUVVONFJpeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRlZCUVZVc1EwRkJReXhYUVVGWExFVkJRVVVzYVVKQlFVOHNSMEZCUnl4clFrRkJVU3hEUVVGRExFTkJRVU03VVVGRE9VUXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhWUVVGVkxFTkJRVU1zVlVGQlZTeEZRVUZGTEdsQ1FVRlBMRWRCUVVjc2FVSkJRVThzUjBGQlJ5eHJRa0ZCVVN4RFFVRkRMRU5CUVVNN1VVRkRka1VzU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4cFEwRkJaU3hEUVVGRExFdEJRVXNzUTBGQlF6dFJRVU53UXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFVkJRVVVzUTBGQlF6dEpRVU55UWl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhoUVVFMlFqdFJRVU5zUkN4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExGRkJRVkVzUlVGQlJUdFpRVU4wUWl4VlFVRlZMRU5CUVVNc1VVRkJVU3hIUVVGSExFbEJRVWtzVlVGQlZTeERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkRPMU5CUTNaRU8wbEJRMHdzUTBGQlF6dEpRVVZFT3p0UFFVVkhPMGxCUTBrc1RVRkJUU3hEUVVGRExGTkJRVk03VVVGRGJrSXNTVUZCU1N4VlFVRlZMRU5CUVVNc1VVRkJVU3hGUVVGRk8xbEJRM0pDTEZWQlFWVXNRMEZCUXl4UlFVRlJMRWRCUVVjc1UwRkJVeXhEUVVGRE8xTkJRMjVETzBsQlEwd3NRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTFVc1owSkJRV2RDTEVOQlFVTXNUVUZCWXl4RlFVRkZMR3RDUVVFd1FqczdXVUZEY0VVc1RVRkJUU3haUVVGWkxFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRaUVVNeFF5eFBRVUZQTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1dVRkJXU3hGUVVGRkxHdENRVUZyUWl4RFFVRkRMRU5CUVVNN1VVRkRla1FzUTBGQlF6dExRVUZCTzBsQlJVUXNaVUZCWlR0SlFVTlFMRTlCUVU4c1EwRkJReXhwUWtGQmVVSTdVVUZEY2tNc1RVRkJUU3hKUVVGSkxFZEJRVWNzTmtKQlFXRXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdVVUZEY2tRc1NVRkJTU3hEUVVGRExGVkJRVlVzUlVGQlJTeERRVUZETzFGQlEyeENMRTFCUVUwc1owSkJRV2RDTEVkQlFVY3NZVUZCU3l4RFFVRkRMRlZCUVZVc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8xRkJRM1pGTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1owSkJRV2RDTEVWQlFVVXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhyUWtGQmEwSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03VVVGRE4wVXNUVUZCVFN4VFFVRlRMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFGQlEyeERMR2RDUVVGblFqdGhRVU5ZTEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hKUVVGSkxFTkJRVU1zYTBKQlFXdENMRU5CUVVNN1lVRkRNVVVzVDBGQlR5eERRVUZETEVOQlFVTXNTMEZCWVN4RlFVRkZMRXRCUVdFc1JVRkJSU3hGUVVGRk8xbEJRM1JETEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU03VVVGRE4wSXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRVQ3hQUVVGUExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1NVRkRlRU1zUTBGQlF6dEpRVVZFTEdWQlFXVTdTVUZEUkN4TlFVRk5MRU5CUVVNc1RVRkJPRUlzUlVGQlJTeFRRVUZwUWpzN1dVRkRiRVVzYzBSQlFYTkVPMWxCUTNSRUxHbEVRVUZwUkR0WlFVTnFSQ3hQUVVGUExFbEJRVWtzVDBGQlR5eERRVUZUTEVOQlFVTXNUMEZCVHl4RlFVRkZMRTFCUVUwc1JVRkJSU3hGUVVGRk8yZENRVU16UXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF6dHZRa0ZEWWl4TlFVRk5MRVZCUVVVc1RVRkJUVHR2UWtGRFpDeHJRa0ZCYTBJc1JVRkJSU3hUUVVGVE8yOUNRVU0zUWl4UlFVRlJMRVZCUVVVc1QwRkJUenRwUWtGRGNFSXNRMEZCUXl4RFFVRkRPMmRDUVVOSUxFbEJRVWtzU1VGQlNTeERRVUZETEUxQlFVMHNTMEZCU3l4cFEwRkJaU3hEUVVGRExFdEJRVXNzUlVGQlJUdHZRa0ZEZGtNc1NVRkJTU3hEUVVGRExGbEJRVmtzUlVGQlJTeERRVUZETzJsQ1FVTjJRanRaUVVOTUxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlExQXNRMEZCUXp0TFFVRkJPMGxCUlVRc1pVRkJaVHRKUVVOUUxGbEJRVmtzUTBGQlF5eExRVUZuUWp0UlFVTnFReXhOUVVGTkxFMUJRVTBzUjBGQlJ6dFpRVU5ZTEVkQlFVY3NSVUZCUlN4SlFVRkpMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETzFsQlEzUkRMRWxCUVVrc1JVRkJSU3hKUVVGSkxGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRPMU5CUXpGRExFTkJRVU03VVVGRFJpeExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1NVRkJXU3hGUVVGRkxFdEJRV0VzUlVGQlJTeEZRVUZGTzFsQlF6RkRMRkZCUVZFc1NVRkJTU3hGUVVGRk8yZENRVU5XTEV0QlFVc3NRMEZCUXp0dlFrRkRSaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRlZCUVZVc1EwRkJReXhUUVVGVExFTkJRVU03YjBKQlEzcERMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NWVUZCVlN4RFFVRkRMRk5CUVZNc1EwRkJRenR2UWtGRE1VTXNUVUZCVFR0blFrRkRWaXhMUVVGTExFTkJRVU03YjBKQlEwWXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRPMjlDUVVONFF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExGVkJRVlVzUTBGQlF5eFRRVUZUTEVOQlFVTTdiMEpCUXpGRExFMUJRVTA3WjBKQlExWTdiMEpCUTBrc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4VlFVRlZMRU5CUVVNc1UwRkJVeXhEUVVGRE8yOUNRVU42UXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEZWQlFWVXNRMEZCUXl4UlFVRlJMRU5CUVVNN1lVRkRhRVE3VVVGRFRDeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTklMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJRenRSUVVNMVF5eFBRVUZQTEUxQlFVMHNRMEZCUXp0SlFVTnNRaXhEUVVGRE8wbEJSVVFzWlVGQlpUdEpRVU5RTEZsQlFWa3NRMEZCUXl4TlFVRTRRaXhGUVVGRkxFMUJRV003VVVGREwwUXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NWVUZCVlN4RFFVRkRMRXRCUVVzc1EwRkJRenRSUVVNeFF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eFZRVUZWTEVOQlFVTXNTMEZCU3l4RFFVRkRPMUZCUXpGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExGVkJRVlVzUTBGQlF5eExRVUZMTEVOQlFVTTdVVUZETVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1ZVRkJWU3hEUVVGRExFdEJRVXNzUTBGQlF6dFJRVU14UXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4VlFVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRE8xRkJRelZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEZWQlFWVXNRMEZCUXl4TlFVRk5MRU5CUVVNN1VVRkROVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzVlVGQlZTeERRVUZETEUxQlFVMHNRMEZCUXp0UlFVTTFReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhWUVVGVkxFTkJRVU1zVFVGQlRTeERRVUZETzBsQlEyaEVMRU5CUVVNN1NVRkZSQ3hsUVVGbE8wbEJRMUFzV1VGQldUdFJRVU5vUWl4TlFVRk5MRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRPMUZCUTJwRExFbEJRVWtzTWtKQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVU3V1VGRE5VSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhwUTBGQlpTeERRVUZETEV0QlFVc3NRMEZCUXp0VFFVTjJRenRoUVVGTk8xbEJRMGdzU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4cFEwRkJaU3hEUVVGRExGTkJRVk1zUTBGQlF6dFpRVU40UXl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFOQlF6ZENPMGxCUTB3c1EwRkJRenRKUVVWRUxHVkJRV1U3U1VGRFVDeGpRVUZqTEVOQlFVTXNXVUZCYjBNN1VVRkRka1FzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExGbEJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTTFReXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFTkJRVU03VVVGRGFrUXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhWUVVGVkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRWxCUVVrc1JVRkJSU3hYUVVGWExFVkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRla1VzVlVGQlZTeERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zV1VGQldTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRlRVFzUTBGQlF6dEpRVVZFTEdWQlFXVTdTVUZEVUN4cFFrRkJhVUlzUTBGQlF5eE5RVUU0UWp0UlFVTndSQ3hMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExGbEJRVmtzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTjRReXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEVOQlFVTXNSMEZCUnl4VlFVRlZMRU5CUVVNc1ZVRkJWU3hEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNdlJDeEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhWUVVGVkxFTkJRVU1zVlVGQlZTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY0VVc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eERRVUZETEVkQlFVY3NWVUZCVlN4RFFVRkRMRlZCUVZVc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMjVGTEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNc1EwRkJReXhIUVVGSExGVkJRVlVzUTBGQlF5eFZRVUZWTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTjJSVHRKUVVOTUxFTkJRVU03U1VGRlJDeGxRVUZsTzBsQlExQXNWMEZCVnl4RFFVRkRMRmxCUVc5RE8xRkJRM0JFTEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1ZVRkJWU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTTNReXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEZWQlFWVXNRMEZCUXl4UFFVRlBMRVZCUVVVc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETzFGQlF6RkVMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zVlVGQlZTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hKUVVGSkxFVkJRVVVzYjBKQlFXOUNMRVZCUVVVc1MwRkJTeXhGUVVGRkxGbEJRVmtzUTBGQlF5eHJRa0ZCYTBJc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRGFrZ3NTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhWUVVGVkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUlRkRExFbEJRVWtzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExGbEJRVmtzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZPMWxCUTJ4RkxGVkJRVlVzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExGbEJRVmtzUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUTNoRU8yRkJRVTA3V1VGRFNDeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRlZCUVZVc1EwRkJReXhWUVVGVkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETlVNc1RVRkJUU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMR0ZCUVdFc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdhVUpCUTJwR0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF6dHBRa0ZEZUVJc1MwRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRPMmxDUVVNeFFpeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVVndRaXhaUVVGWkxFTkJRVU1zVVVGQlVTeERRVUZETEdGQlFVc3NRMEZCUXl4bFFVRmxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTXZSQ3hKUVVGSkxFTkJRVU1zV1VGQldTeEZRVUZGTEVOQlFVTTdVMEZEZGtJN1NVRkRUQ3hEUVVGRE8wbEJSVVFzWlVGQlpUdEpRVU5RTEVsQlFVa3NRMEZCUXl4RFFVRlRPMUZCUTJ4Q0xFOUJRVThzUTBGQlF5eERRVUZoTEVWQlFVVXNXVUZCV1N4RlFVRkZMRmxCUVZrc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eFpRVUZaTEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dEpRVU4wU2l4RFFVRkRPenRCUVROT1JDeGxRVUZsTzBGQlExTXNjVUpCUVZVc1IwRkJWeXhEUVVGRExFTkJRVU03UVVGRkwwTXNaVUZCWlR0QlFVTlRMRzFDUVVGUkxFZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTXNWMEZCVnp0QlFVTjZSQ3hsUVVGbE8wRkJRMU1zYjBKQlFWTXNSMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExHbERRVUZwUXp0QlFVTnFSaXhsUVVGbE8wRkJRMU1zWjBKQlFVc3NSMEZCVnl4VlFVRlZMRU5CUVVNc1EwRkJReXhaUVVGWk8wRkJRMmhGTEdWQlFXVTdRVUZEVXl4blFrRkJTeXhIUVVGWExGVkJRVlVzUTBGQlF5eERRVUZETEZsQlFWazdRVUZEYUVVc1pVRkJaVHRCUVVOVExHZENRVUZMTEVkQlFWY3NWVUZCVlN4RFFVRkRMRU5CUVVNc1dVRkJXVHRCUVVOb1JTeGxRVUZsTzBGQlExTXNaMEpCUVVzc1IwRkJWeXhWUVVGVkxFTkJRVU1zUTBGQlF5eFpRVUZaTzBGQlEyaEZMR1ZCUVdVN1FVRkRVeXhwUWtGQlRTeEhRVUZYTEZWQlFWVXNRMEZCUXl4RFFVRkRMRmxCUVZrN1FVRkRha1VzWlVGQlpUdEJRVU5UTEdsQ1FVRk5MRWRCUVZjc1ZVRkJWU3hEUVVGRExFTkJRVU1zV1VGQldUdEJRVU5xUlN4bFFVRmxPMEZCUTFNc2FVSkJRVTBzUjBGQlZ5eFZRVUZWTEVOQlFVTXNRMEZCUXl4WlFVRlpPMEZCUTJwRkxHVkJRV1U3UVVGRFV5eHBRa0ZCVFN4SFFVRlhMRlZCUVZVc1EwRkJReXhEUVVGRExGZEJRVmM3UVVGNlFuQkZMR2REUVN0T1F5SjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBQZWFybERpdmVyIFN0YXRlLlxyXG4gKi9cclxudmFyIFBlYXJsRGl2ZXJTdGF0ZTtcclxuKGZ1bmN0aW9uIChQZWFybERpdmVyU3RhdGUpIHtcclxuICAgIFBlYXJsRGl2ZXJTdGF0ZVtQZWFybERpdmVyU3RhdGVbXCJyZWFkeVwiXSA9IDBdID0gXCJyZWFkeVwiO1xyXG4gICAgUGVhcmxEaXZlclN0YXRlW1BlYXJsRGl2ZXJTdGF0ZVtcInNlYXJjaGluZ1wiXSA9IDFdID0gXCJzZWFyY2hpbmdcIjtcclxuICAgIFBlYXJsRGl2ZXJTdGF0ZVtQZWFybERpdmVyU3RhdGVbXCJpbnRlcnJ1cHRlZFwiXSA9IC0xXSA9IFwiaW50ZXJydXB0ZWRcIjtcclxufSkoUGVhcmxEaXZlclN0YXRlID0gZXhwb3J0cy5QZWFybERpdmVyU3RhdGUgfHwgKGV4cG9ydHMuUGVhcmxEaXZlclN0YXRlID0ge30pKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0dWaGNteEVhWFpsY2xOMFlYUmxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwzQmxZWEpzUkdsMlpYSXZjR1ZoY214RWFYWmxjbE4wWVhSbExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN1IwRkZSenRCUVVOSUxFbEJRVmtzWlVGSldEdEJRVXBFTEZkQlFWa3NaVUZCWlR0SlFVTjJRaXgxUkVGQlV5eERRVUZCTzBsQlExUXNLMFJCUVdFc1EwRkJRVHRKUVVOaUxHOUZRVUZuUWl4RFFVRkJPMEZCUTNCQ0xFTkJRVU1zUlVGS1Z5eGxRVUZsTEVkQlFXWXNkVUpCUVdVc1MwRkJaaXgxUWtGQlpTeFJRVWt4UWlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcclxuY29uc3QgbnVtYmVySGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBjcnlwdG9FcnJvcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY3J5cHRvL2Rpc3QvZXJyb3IvY3J5cHRvRXJyb3JcIik7XHJcbmNvbnN0IHByb29mT2ZXb3JrQmFzZV8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY3J5cHRvL2Rpc3QvcHJvb2ZPZldvcmsvcHJvb2ZPZldvcmtCYXNlXCIpO1xyXG5jb25zdCB0cnl0ZXNfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyeXRlc1wiKTtcclxuY29uc3QgcGVhcmxEaXZlcl8xID0gcmVxdWlyZShcIi4vcGVhcmxEaXZlci9wZWFybERpdmVyXCIpO1xyXG4vKipcclxuICogUHJvb2ZPZldvcmsgaW1wbGVtZW50YXRpb24gdXNpbmcgV2ViR0wuXHJcbiAqL1xyXG5jbGFzcyBQcm9vZk9mV29ya1dlYkdsIGV4dGVuZHMgcHJvb2ZPZldvcmtCYXNlXzEuUHJvb2ZPZldvcmtCYXNlIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIFByb29mT2ZXb3JrLlxyXG4gICAgICogQHBhcmFtIHdlYkdMUGxhdGZvcm0gUHJvdmlkZXMgcGxhdGZvcm0gc3BlY2lmaWMgZnVuY3Rpb25zLCBvcHRpb25hbCBtb3N0bHkgdXNlZCBmb3IgdGVzdGluZy5cclxuICAgICAqIEBwYXJhbSB0aW1lU2VydmljZSBTZXJ2aWNlIHRvIGdldCB0aGUgdGltZSBmb3IgYXR0YWNobWVudHMuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHdlYkdMUGxhdGZvcm0sIHRpbWVTZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIodGltZVNlcnZpY2UpO1xyXG4gICAgICAgIGlmIChvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eSh3ZWJHTFBsYXRmb3JtKSkge1xyXG4gICAgICAgICAgICB0aGlzLl93ZWJHTFBsYXRmb3JtID0ge1xyXG4gICAgICAgICAgICAgICAgZ2V0V2luZG93OiAoKSA9PiB3aW5kb3csXHJcbiAgICAgICAgICAgICAgICBnZXREb2N1bWVudDogKHdpbmRvdykgPT4gd2luZG93LmRvY3VtZW50LFxyXG4gICAgICAgICAgICAgICAgZ2V0Q2FudmFzOiAoZG9jdW1lbnQpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIiksXHJcbiAgICAgICAgICAgICAgICBnZXRXZWJHTDogKGNhbnZhcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHIgPSB7IGFscGhhOiBmYWxzZSwgYW50aWFsaWFzOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdsID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJnbDJcIiwgYXR0cik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fd2ViR0xQbGF0Zm9ybSA9IHdlYkdMUGxhdGZvcm07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBbGxvdyB0aGUgcHJvb2Ygb2Ygd29yayB0byBwZXJmb3JtIGFueSBpbml0aWFsaXphdGlvbi5cclxuICAgICAqIFdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIHRoZSBpbXBsZW1lbnRhdGlvbiBpcyBub3Qgc3VwcG9ydGVkLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZS5cclxuICAgICAqL1xyXG4gICAgaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgICBjb25zdCBfc3VwZXIgPSBuYW1lID0+IHN1cGVyW25hbWVdO1xyXG4gICAgICAgIHJldHVybiB0c2xpYl8xLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgeWllbGQgX3N1cGVyKFwiaW5pdGlhbGl6ZVwiKS5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBwZWFybERpdmVyXzEuUGVhcmxEaXZlci5pbml0aWFsaXplKHRoaXMuX3dlYkdMUGxhdGZvcm0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzSW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFBlcmZvcm0gYSBwcm9vZiBvZiB3b3JrIG9uIGEgc2luZ2xlIGl0ZW0uXHJcbiAgICAgKiBAcGFyYW0gdHJ5dGVzIFRoZSB0cnl0ZXMgdG8gcGVyZm9ybSB0aGUgcG93IG9uLlxyXG4gICAgICogQHBhcmFtIG1pbldlaWdodE1hZ25pdHVkZSBUaGUgbWluaW11bSB3ZWlnaHQgbWFnbml0dWRlLlxyXG4gICAgICogQHJldHVybnMgVGhlIHRyeXRlcyBwcm9kdWNlZCBieSB0aGUgcHJvb2Ygb2Ygd29yay5cclxuICAgICAqL1xyXG4gICAgc2luZ2xlUG93KHRyeXRlcywgbWluV2VpZ2h0TWFnbml0dWRlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2lzSW5pdGlhbGl6ZWQpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiV2ViR0wgaXMgbm90IGluaXRpYWxpemVkLCBoYXZlIHlvdSBjYWxsZWQgaW5pdGlhbGl6ZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodHJ5dGVzLCB0cnl0ZXNfMS5Ucnl0ZXMpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSB0cnl0ZXMgbXVzdCBiZSBhbiBvYmplY3Qgb2YgdHlwZSBUcnl0ZXNcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKG1pbldlaWdodE1hZ25pdHVkZSkgfHwgbWluV2VpZ2h0TWFnbml0dWRlIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIG1pbldlaWdodE1hZ25pdHVkZSBtdXN0IGJlID4gMFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBub25jZSA9IHlpZWxkIHBlYXJsRGl2ZXJfMS5QZWFybERpdmVyLmluc3RhbmNlLnNlYXJjaFdpdGhUcnl0ZXModHJ5dGVzLCBtaW5XZWlnaHRNYWduaXR1ZGUpO1xyXG4gICAgICAgICAgICBjb25zdCB0cnl0ZXNTdHJpbmcgPSB0cnl0ZXMudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgY29uc3Qgbm9uY2VTdHJpbmcgPSBub25jZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcodHJ5dGVzU3RyaW5nLnN1YnN0cigwLCB0cnl0ZXNTdHJpbmcubGVuZ3RoIC0gbm9uY2VTdHJpbmcubGVuZ3RoKS5jb25jYXQobm9uY2VTdHJpbmcpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlByb29mT2ZXb3JrV2ViR2wgPSBQcm9vZk9mV29ya1dlYkdsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEp2YjJaUFpsZHZjbXRYWldKSGJDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnlZeTl3Y205dlprOW1WMjl5YTFkbFlrZHNMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFVRXNORVZCUVhsRk8wRkJRM3BGTERSRlFVRjVSVHRCUVVWNlJTd3dSVUZCZFVVN1FVRkRka1VzZDBaQlFYRkdPMEZCUTNKR0xEWkVRVUV3UkR0QlFVVXhSQ3gzUkVGQmNVUTdRVUZIY2tRN08wZEJSVWM3UVVGRFNDeE5RVUZoTEdkQ1FVRnBRaXhUUVVGUkxHbERRVUZsTzBsQlQycEVPenM3TzA5QlNVYzdTVUZEU0N4WlFVRlpMR0ZCUVRoQ0xFVkJRVVVzVjBGQk1FSTdVVUZEYkVVc1MwRkJTeXhEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzFGQlJXNUNMRWxCUVVrc01rSkJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNZVUZCWVN4RFFVRkRMRVZCUVVVN1dVRkRja01zU1VGQlNTeERRVUZETEdOQlFXTXNSMEZCUnp0blFrRkRiRUlzVTBGQlV5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRTFCUVUwN1owSkJRM1pDTEZkQlFWY3NSVUZCUlN4RFFVRkRMRTFCUVUwc1JVRkJSU3hGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRTdaMEpCUTNoRExGTkJRVk1zUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlN4RlFVRkZMRU5CUVVNc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eFJRVUZSTEVOQlFVTTdaMEpCUTNwRUxGRkJRVkVzUlVGQlJTeERRVUZETEUxQlFVMHNSVUZCUlN4RlFVRkZPMjlDUVVOcVFpeE5RVUZOTEVsQlFVa3NSMEZCUnl4RlFVRkZMRXRCUVVzc1JVRkJSU3hMUVVGTExFVkJRVVVzVTBGQlV5eEZRVUZGTEV0QlFVc3NSVUZCUlN4RFFVRkRPMjlDUVVOb1JDeE5RVUZOTEVWQlFVVXNSMEZCUnl4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExGRkJRVkVzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0dlFrRkROME1zVDBGQmFVTXNSVUZCUlN4RFFVRkRPMmRDUVVONFF5eERRVUZETzJGQlEwb3NRMEZCUXp0VFFVTk1PMkZCUVUwN1dVRkRTQ3hKUVVGSkxFTkJRVU1zWTBGQll5eEhRVUZITEdGQlFXRXNRMEZCUXp0VFFVTjJRenRKUVVOTUxFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMVVzVlVGQlZUczdPMWxCUTI1Q0xFMUJRVTBzYjBKQlFXZENMRmRCUVVVc1EwRkJRenRaUVVONlFpeFBRVUZQTEVsQlFVa3NUMEZCVHl4RFFVRlBMRU5CUVVNc1QwRkJUeXhGUVVGRkxFMUJRVTBzUlVGQlJTeEZRVUZGTzJkQ1FVTjZReXhKUVVGSk8yOUNRVU5CTEhWQ1FVRlZMRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTXNRMEZCUXp0dlFrRkRNME1zU1VGQlNTeERRVUZETEdOQlFXTXNSMEZCUnl4SlFVRkpMRU5CUVVNN2IwSkJRek5DTEU5QlFVOHNSVUZCUlN4RFFVRkRPMmxDUVVOaU8yZENRVUZETEU5QlFVOHNSMEZCUnl4RlFVRkZPMjlDUVVOV0xFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0cFFrRkRaanRaUVVOTUxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlExQXNRMEZCUXp0TFFVRkJPMGxCUlVRN096czdPMDlCUzBjN1NVRkRWU3hUUVVGVExFTkJRVU1zVFVGQll5eEZRVUZGTEd0Q1FVRXdRanM3V1VGRE4wUXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhqUVVGakxFVkJRVVU3WjBKQlEzUkNMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEhORVFVRnpSQ3hEUVVGRExFTkJRVU03WVVGRGFrWTdXVUZEUkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RlFVRkZMR1ZCUVUwc1EwRkJReXhGUVVGRk8yZENRVU4wUXl4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5dzJRMEZCTmtNc1EwRkJReXhEUVVGRE8yRkJRM2hGTzFsQlEwUXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVTBGQlV5eERRVUZETEd0Q1FVRnJRaXhEUVVGRExFbEJRVWtzYTBKQlFXdENMRWxCUVVrc1EwRkJReXhGUVVGRk8yZENRVU40UlN4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eHZRMEZCYjBNc1EwRkJReXhEUVVGRE8yRkJReTlFTzFsQlJVUXNUVUZCVFN4TFFVRkxMRWRCUVVjc1RVRkJUU3gxUWtGQlZTeERRVUZETEZGQlFWRXNRMEZCUXl4blFrRkJaMElzUTBGQlF5eE5RVUZOTEVWQlFVVXNhMEpCUVd0Q0xFTkJRVU1zUTBGQlF6dFpRVVZ5Uml4TlFVRk5MRmxCUVZrc1IwRkJSeXhOUVVGTkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdXVUZEZGtNc1RVRkJUU3hYUVVGWExFZEJRVWNzUzBGQlN5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMWxCUTNKRExFOUJRVThzWlVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4WlFVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUlVGQlJTeFpRVUZaTEVOQlFVTXNUVUZCVFN4SFFVRkhMRmRCUVZjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOdVNDeERRVUZETzB0QlFVRTdRMEZEU2p0QlFYaEZSQ3cwUTBGM1JVTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogU2hhZGVycyBhZGQuXHJcbiAqL1xyXG5leHBvcnRzLmRlZmF1bHQgPSBgXG5pbnQgc3VtIChpbnQgYSwgaW50IGIpIHtcbiAgaW50IG15X3N1bSA9IGEgKyBiO1xuICByZXR1cm4gbXlfc3VtID09IDIgPyAtMSA6IChteV9zdW0gPT0gLTIpID8gMSA6IG15X3N1bTtcbn1cbmludCBjb25zIChpbnQgYSwgaW50IGIpIHtcbiAgcmV0dXJuIChhID09IDEgJiYgYiA9PSAxKT8gMSA6IChhID09IC0xICYmIGIgPT0gLTEpID8gLTEgOiAwO1xufVxuaW50IGFueV90IChpbnQgYSwgaW50IGIpIHtcbiAgaW50IG15X2FueSA9IGEgKyBiO1xuICByZXR1cm4gbXlfYW55ID09IDAgPyAwIDogKG15X2FueSA+IDApID8gMSA6IC0xO1xufVxuaXZlYzIgZnVsbF9hZGRlcihpbnQgYSwgaW50IGIsIGludCBjKSB7XG4gIGludCBjX2EsIGNfYiwgc3VtX2FiLCBjX3M7XG5cbiAgY19hICAgID0gY29ucyhhLGIpO1xuICBzdW1fYWIgPSBzdW0oYSxiKTtcbiAgY19iICAgID0gY29ucyhzdW1fYWIsYyk7XG4gIGNfcyAgICA9IGFueV90KGNfYSwgY19iKTtcblxuICByZXR1cm4gaXZlYzIoc3VtKHN1bV9hYiwgYyksIGNfcyk7XG59XG5pdmVjMiBnZXRfc3VtX3RvX2luZGV4KGludCBmcm9tLCBpbnQgdG8sIGludCBudW1iZXJfdG9fYWRkLCBpbnQgcm93KSB7XG4gIGludCB0cml0X3RvX2FkZCwgdHJpdF9hdF9pbmRleCwgcG93LCBjYXJyeSwgbnVtX2NhcnJ5O1xuICBpdmVjMiByZWFkX2luLCBzdW1fb3V0LCBvdXRfdHJpdDtcbiAgcG93ID0gMTtcbiAgY2FycnkgPSAwO1xuICBudW1fY2FycnkgPSAwO1xuXG4gIGZvcihpbnQgaSA9IGZyb207IGkgPCB0bzsgaSsrKSB7XG4gICAgLy9pZih0cml0X3RvX2FkZCA9PSAwICYmIHN1bV9vdXQudCA9PSAwKSBjb250aW51ZTtcblxuICAgIHJlYWRfaW4gPSByZWFkX2F0ICggaXZlYzIgKGksIHJvdykpLnJnO1xuXG4gICAgdHJpdF90b19hZGQgPSAoKG51bWJlcl90b19hZGQgLyBwb3cpICUgMykgKyBudW1fY2Fycnk7XG4gICAgbnVtX2NhcnJ5ID0gdHJpdF90b19hZGQgPiAxID8gMSA6IDA7XG4gICAgdHJpdF90b19hZGQgPSAodHJpdF90b19hZGQgPT0gMiA/IC0xIDogKHRyaXRfdG9fYWRkID09IDMgPyAwIDogdHJpdF90b19hZGQpKTtcblxuICAgIHN1bV9vdXQgPSBmdWxsX2FkZGVyKFxuICAgICAgKHJlYWRfaW4ucyA9PSBMT1dfQklUUyA/IDEgOiByZWFkX2luLnQgPT0gTE9XX0JJVFM/IC0xIDogMCksXG4gICAgICB0cml0X3RvX2FkZCxcbiAgICAgIGNhcnJ5XG4gICAgKTtcblxuICAgIGlmKG15X2Nvb3JkLnggPT0gaSkgYnJlYWs7XG4gICAgY2FycnkgPSBzdW1fb3V0LnQ7XG4gICAgcG93ICo9MztcbiAgfVxuICBpZihzdW1fb3V0LnMgPT0gMCkge1xuICAgIHJldHVybiBpdmVjMihISUdIX0JJVFMpO1xuICB9IGVsc2UgaWYgKHN1bV9vdXQucyA9PSAxKSB7XG4gICAgcmV0dXJuIGl2ZWMyKExPV19CSVRTLCBISUdIX0JJVFMpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBpdmVjMihISUdIX0JJVFMsIExPV19CSVRTKTtcbiAgfVxufVxuYDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWVdSa0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDNOb1lXUmxjbk12WVdSa0xuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN1IwRkZSenRCUVVOSUxHdENRVUZsT3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0RFFYZEVaQ3hEUVVGREluMD0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBTaGFkZXJzIGNoZWNrX2NvbC5cclxuICovXHJcbmV4cG9ydHMuZGVmYXVsdCA9IGBcbnZvaWQgbWFpbigpIHtcbiAgaW5pdCgpO1xuICBpdmVjNCBteV92ZWMgPSByZWFkKCk7XG4gIGludCBpO1xuICBpZihteV9jb29yZC54ID09IFNUQVRFX0xFTkdUSCAmJiBteV9jb29yZC55ID09IDApIHtcbiAgICBteV92ZWMuYiA9IDA7XG4gICAgaWYobXlfdmVjLmEgPT0gMCkge1xuICAgICAgaXZlYzQgcmVhZF92ZWM7XG4gICAgICBteV92ZWMuYiA9IC0xO1xuICAgICAgZm9yKGkgPSAxOyBpIDwgaW50KHNpemUueSk7IGkrKykge1xuICAgICAgICByZWFkX3ZlYyA9IHJlYWRfYXQoIGl2ZWMyKCBTVEFURV9MRU5HVEgsIGkpKTtcbiAgICAgICAgaWYocmVhZF92ZWMuYSAhPSAwKSB7XG4gICAgICAgICAgbXlfdmVjLmEgPSByZWFkX3ZlYy5hO1xuICAgICAgICAgIG15X3ZlYy5iID0gaTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb21taXQobXlfdmVjKTtcbn1cbmA7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkyaGxZMnREYjJ3dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12YzJoaFpHVnljeTlqYUdWamEwTnZiQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRTdPMGRCUlVjN1FVRkRTQ3hyUWtGQlpUczdPenM3T3pzN096czdPenM3T3pzN096czdPenREUVhOQ1pDeERRVUZESW4wPSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIFNoYWRlcnMgY2hlY2tfZG8uXHJcbiAqL1xyXG5leHBvcnRzLmRlZmF1bHQgPSBgXG5pbnQgY2hlY2soaW50IHJvdywgaW50IG1pbl93ZWlnaHRfbWFnbml0dWRlKSB7XG4gIGludCBub25jZV9wcm9iZSwgaTtcbiAgaXZlYzIgcl90ZXhlbDtcbiAgbm9uY2VfcHJvYmUgPSBISUdIX0JJVFM7XG4gIGZvcihpID0gbWluX3dlaWdodF9tYWduaXR1ZGU7IGktLSA+IDA7ICkge1xuICAgIHJfdGV4ZWwgPSByZWFkX2F0KGl2ZWMyKEhBU0hfTEVOR1RIIC0gMSAtIGksIHJvdykpLmJhO1xuICAgIG5vbmNlX3Byb2JlICY9IH4ocl90ZXhlbC5zIF4gcl90ZXhlbC50KTtcbiAgICBpZihub25jZV9wcm9iZSA9PSAwKSBicmVhaztcbiAgfVxuICByZXR1cm4gbm9uY2VfcHJvYmU7XG59XG5gO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMmhsWTJ0RWJ5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5emFHRmtaWEp6TDJOb1pXTnJSRzh1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJPenRIUVVWSE8wRkJRMGdzYTBKQlFXVTdPenM3T3pzN096czdPenREUVZsa0xFTkJRVU1pZlE9PSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIFNoYWRlcnMgY2hlY2tfay5cclxuICovXHJcbmV4cG9ydHMuZGVmYXVsdCA9IGBcbnVuaWZvcm0gaW50IG1pbldlaWdodE1hZ25pdHVkZTtcbnZvaWQgbWFpbigpIHtcbiAgaW5pdCgpO1xuICBpdmVjNCBteV92ZWMgPSByZWFkKCk7XG4gIGlmKG15X2Nvb3JkLnggPT0gU1RBVEVfTEVOR1RIKSB7XG4gICAgbXlfdmVjLnIgPSBtaW5XZWlnaHRNYWduaXR1ZGU7XG4gICAgbXlfdmVjLmEgPSBjaGVjayhteV9jb29yZC55LCBtaW5XZWlnaHRNYWduaXR1ZGUpO1xuICB9XG4gIGNvbW1pdChteV92ZWMpO1xufVxuYDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTJobFkydExMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwzTm9ZV1JsY25NdlkyaGxZMnRMTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHM3UjBGRlJ6dEJRVU5JTEd0Q1FVRmxPenM3T3pzN096czdPenREUVZka0xFTkJRVU1pZlE9PSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIFNoYWRlcnMgZmluYWxpemUuXHJcbiAqL1xyXG5leHBvcnRzLmRlZmF1bHQgPSBgXG52b2lkIG1haW4oKSB7XG4gIGluaXQoKTtcbiAgaXZlYzQgbXlfdmVjID0gcmVhZCgpO1xuICBpZihteV9jb29yZC55ID09IDAgJiYgbXlfY29vcmQueCA9PSBTVEFURV9MRU5HVEgpIHtcbiAgICBteV92ZWMuZyA9IGNoZWNrKG15X3ZlYy5iLCBteV92ZWMucik7XG4gIH1cbiAgaWYobXlfY29vcmQueSA9PSAwICYmIG15X2Nvb3JkLnggPCBIQVNIX0xFTkdUSCkge1xuICAgIGl2ZWM0IGluZm9fdmVjID0gcmVhZF9hdChpdmVjMihTVEFURV9MRU5HVEgsIDApKTtcbiAgICBpbnQgbm9uY2VfcHJvYmUgPSBpbmZvX3ZlYy5hO1xuICAgIGludCByb3cgPSBpbmZvX3ZlYy5iO1xuICAgIGl2ZWM0IGhhc2hfdmVjID0gcmVhZF9hdChpdmVjMihteV9jb29yZC54LCByb3cpKTtcbiAgICBteV92ZWMuYSA9IChoYXNoX3ZlYy5yICYgbm9uY2VfcHJvYmUpID09IDA/IDEgOiAoKGhhc2hfdmVjLmcgJiBub25jZV9wcm9iZSkgPT0gMD8gLTEgOiAwKTtcbiAgfVxuICBjb21taXQobXlfdmVjKTtcbn1cbmA7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVptbHVZV3hwZW1VdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12YzJoaFpHVnljeTltYVc1aGJHbDZaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRTdPMGRCUlVjN1FVRkRTQ3hyUWtGQlpUczdPenM3T3pzN096czdPenM3T3p0RFFXZENaQ3hEUVVGREluMD0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBTaGFkZXJzIGFkZC5cclxuICovXHJcbmV4cG9ydHMuZGVmYXVsdCA9IGBcbiNkZWZpbmUgSEFTSF9MRU5HVEggMjQzXG4jZGVmaW5lIE5VTUJFUl9PRl9ST1VORFMgODFcbiNkZWZpbmUgSU5DUkVNRU5UX1NUQVJUIEhBU0hfTEVOR1RIIC0gNjRcbiNkZWZpbmUgU1RBVEVfTEVOR1RIIDMgKiBIQVNIX0xFTkdUSFxuI2RlZmluZSBIQUxGX0xFTkdUSCAzNjRcbiNkZWZpbmUgSElHSF9CSVRTIDB4RkZGRkZGRkZcbiNkZWZpbmUgTE9XX0JJVFMgMHgwMDAwMDAwMFxuYDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYUdWaFpHVnljeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXphR0ZrWlhKekwyaGxZV1JsY25NdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCT3p0SFFVVkhPMEZCUTBnc2EwSkJRV1U3T3pzN096czdPME5CVVdRc1EwRkJReUo5IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogU2hhZGVycyBpbmNyZW1lbnQuXHJcbiAqL1xyXG5leHBvcnRzLmRlZmF1bHQgPSBgXG52b2lkIG1haW4oKSB7XG4gIGluaXQoKTtcbiAgaXZlYzQgbXlfdmVjID0gcmVhZCgpO1xuICBpZihteV9jb29yZC54ID49IElOQ1JFTUVOVF9TVEFSVCAmJiBteV9jb29yZC54IDwgSEFTSF9MRU5HVEggKSB7XG4gICAgbXlfdmVjLnJnID0gZ2V0X3N1bV90b19pbmRleChJTkNSRU1FTlRfU1RBUlQsIEhBU0hfTEVOR1RILCAxLCBteV9jb29yZC55KTtcbiAgfVxuICBpZihteV9jb29yZC54ID09IFNUQVRFX0xFTkdUSCApIHtcbiAgICBteV92ZWMucmcgPSBpdmVjMigwKTtcbiAgfVxuICBteV92ZWMuYmEgPSBteV92ZWMucmc7XG4gIGNvbW1pdChteV92ZWMpO1xufVxuYDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1amNtVnRaVzUwTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMM05vWVdSbGNuTXZhVzVqY21WdFpXNTBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdSMEZGUnp0QlFVTklMR3RDUVVGbE96czdPenM3T3pzN096czdPME5CWVdRc1EwRkJReUo5IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogU2hhZGVycyBpbml0LlxyXG4gKi9cclxuZXhwb3J0cy5kZWZhdWx0ID0gYFxudW5pZm9ybSBpbnQgZ3Jfb2Zmc2V0O1xuaXZlYzQgb2Zmc2V0KCkge1xuICBpZihteV9jb29yZC54ID49IEhBU0hfTEVOR1RIIC8gMyAmJiBteV9jb29yZC54IDwgSEFTSF9MRU5HVEggLyAzICogMiApIHtcbiAgICBpdmVjNCBteV92ZWM7XG4gICAgbXlfdmVjLnJnID0gZ2V0X3N1bV90b19pbmRleChIQVNIX0xFTkdUSCAvIDMsIEhBU0hfTEVOR1RIIC8gMyAqIDIsIG15X2Nvb3JkLnkgKyBncl9vZmZzZXQsIDApO1xuICAgIHJldHVybiBteV92ZWM7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlYWRfYXQoaXZlYzIobXlfY29vcmQueCwwKSk7XG4gIH1cbn1cbnZvaWQgbWFpbigpIHtcbiAgaW5pdCgpO1xuICBjb21taXQob2Zmc2V0KCkpO1xufVxuYDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1cGRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5emFHRmtaWEp6TDJsdWFYUXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQk96dEhRVVZITzBGQlEwZ3NhMEpCUVdVN096czdPenM3T3pzN096czdPenREUVdWa0xFTkJRVU1pZlE9PSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIFNoYWRlcnMgdHJhbnNmb3JtLlxyXG4gKi9cclxuZXhwb3J0cy5kZWZhdWx0ID0gYFxuaXZlYzIgdHdpc3QoKSB7XG4gIGludCBhbHBoYSwgYmV0YSwgZ2FtbWEsIGRlbHRhO1xuICBpdmVjNCB2MSwgdjI7XG4gIGludCBqID0gbXlfY29vcmQueDtcblxuICB2MSA9IHJlYWRfYXQoaXZlYzIoaiA9PSAwPyAwOigoKGogLSAxKSUyKSsxKSpIQUxGX0xFTkdUSCAtICgoai0xKT4+MSksIG15X2Nvb3JkLnkpKTtcbiAgdjIgPSByZWFkX2F0KGl2ZWMyKCgoaiUyKSsxKSpIQUxGX0xFTkdUSCAtICgoaik+PjEpLCBteV9jb29yZC55KSk7XG4gIGFscGhhID0gdjEuYjtcbiAgYmV0YSA9IHYxLmE7XG4gIGdhbW1hID0gdjIuYTtcbiAgZGVsdGEgPSAoYWxwaGEgfCAofmdhbW1hKSkgJiAodjIuYiBeIGJldGEpOy8vdjIuYiA9PT0gc3RhdGVfbG93W3QyXVxuXG4gIHJldHVybiBpdmVjMih+ZGVsdGEsIChhbHBoYSBeIGdhbW1hKSB8IGRlbHRhKTtcbn1cbnZvaWQgbWFpbigpIHtcbiAgaW5pdCgpO1xuICBpdmVjNCBteV92ZWMgPSByZWFkKCk7XG4gIGlmKG15X2Nvb3JkLnggPCBTVEFURV9MRU5HVEgpXG4gICAgbXlfdmVjLmJhID0gdHdpc3QoKTtcbiAgY29tbWl0KG15X3ZlYyk7XG59XG5gO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkSEpoYm5ObWIzSnRMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwzTm9ZV1JsY25NdmRISmhibk5tYjNKdExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN1IwRkZSenRCUVVOSUxHdENRVUZsT3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wTkJjMEprTEVOQlFVTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogU3RkbGliLlxyXG4gKi9cclxuZXhwb3J0cy5kZWZhdWx0ID0gYCN2ZXJzaW9uIDMwMCBlc1xucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xucHJlY2lzaW9uIGhpZ2hwIGludDtcbnByZWNpc2lvbiBoaWdocCBpc2FtcGxlcjJEO1xudW5pZm9ybSBpc2FtcGxlcjJEIHVfdGV4dHVyZTtcbmluIHZlYzIgcG9zO1xub3V0IGl2ZWM0IGNvbG9yO1xuLy9vdXQgaW50IGlzRmluaXNoZWQ7XG5cbnZlYzIgc2l6ZTtcbml2ZWMyIG15X2Nvb3JkO1xuXG52b2lkIGluaXQodm9pZCkge1xuICAvL3NpemUgPSB2ZWMyKHRleHR1cmVTaXplKHVfdGV4dHVyZSwgMCkgLSAxKTtcbiAgc2l6ZSA9IHZlYzIodGV4dHVyZVNpemUodV90ZXh0dXJlLCAwKSk7XG4gIG15X2Nvb3JkID0gaXZlYzIocG9zICogc2l6ZSk7XG59XG5cbml2ZWM0IHJlYWQodm9pZCkge1xuICByZXR1cm4gdGV4dHVyZSh1X3RleHR1cmUsIHBvcyk7XG59XG5cbml2ZWM0IHJlYWRfYXQoaXZlYzIgY29vcmQpIHtcbiAgcmV0dXJuIHRleGVsRmV0Y2godV90ZXh0dXJlLCBjb29yZCwgMCk7XG59XG5cbnZvaWQgY29tbWl0KGl2ZWM0IHZhbCkge1xuICBjb2xvciA9IHZhbDtcbn1cbmA7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWMzUmtiR2xpTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMM2RsWWtkTUwzTjBaR3hwWWk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUU3TzBkQlJVYzdRVUZEU0N4clFrRkRRVHM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3UTBFMlFrTXNRMEZCUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIFZlcnRleCBTaGFkZXIgY29kZS5cclxuICovXHJcbmV4cG9ydHMuZGVmYXVsdCA9IGAjdmVyc2lvbiAzMDAgZXNcbmxheW91dChsb2NhdGlvbiA9IDApIGluIHZlYzIgcG9zaXRpb247XG5sYXlvdXQobG9jYXRpb24gPSAxKSBpbiB2ZWMyIHRleHR1cmU7XG5vdXQgdmVjMiBwb3M7XG5cbnZvaWQgbWFpbih2b2lkKSB7XG4gIHBvcyA9IHRleHR1cmU7XG4gIGdsX1Bvc2l0aW9uID0gdmVjNChwb3NpdGlvbi54eSwgMC4wLCAxLjApO1xufWA7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRtVnlkR1Y0VTJoaFpHVnlRMjlrWlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTkzWldKSFRDOTJaWEowWlhoVGFHRmtaWEpEYjJSbExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN1IwRkZSenRCUVVOSUxHdENRVU5CT3pzN096czdPenRGUVZGRkxFTkJRVU1pZlE9PSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGNyeXB0b0Vycm9yXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jcnlwdG8vZGlzdC9lcnJvci9jcnlwdG9FcnJvclwiKTtcclxuLyoqXHJcbiAqIEhlbHBlciBmdW5jdGlvbnMgZm9yIHVzZSB3aXRoIFdlYkdMLlxyXG4gKi9cclxuY2xhc3MgV2ViR0xIZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBXZWJHTCBDb250ZXh0LlxyXG4gICAgICogQHBhcmFtIHdlYkdMUGxhdGZvcm0gVGhlIHBsYXRmb3JtIHRvIGNyZWF0ZSB0aGUgY29udGV4dCB3aXRoLlxyXG4gICAgICogQHJldHVybnMgVGhlIGNvbnRleHQgaWYgc3VjY2Vzc2Z1bHkgb3IgdGhyb3dzIGFuIGVycm9yIGlmIGl0IGNhbm5vdCBiZSBjcmVhdGVkLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlQ29udGV4dCh3ZWJHTFBsYXRmb3JtKSB7XHJcbiAgICAgICAgY29uc3Qgd2luZG93ID0gd2ViR0xQbGF0Zm9ybS5nZXRXaW5kb3coKTtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KHdpbmRvdykgJiYgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBjb25zdCBkb2N1bWVudCA9IHdlYkdMUGxhdGZvcm0uZ2V0RG9jdW1lbnQod2luZG93KTtcclxuICAgICAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eShkb2N1bWVudCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IHdlYkdMUGxhdGZvcm0uZ2V0Q2FudmFzKGRvY3VtZW50KTtcclxuICAgICAgICAgICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzRW1wdHkoY2FudmFzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdsID0gd2ViR0xQbGF0Zm9ybS5nZXRXZWJHTChjYW52YXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eShnbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJDYW4gbm90IGNyZWF0ZSBhIFdlYkdMIGNvbnRleHQgb24gYSA8Y2FudmFzPiBlbGVtZW50LlwiLCB7IHVzZXJBZ2VudDogd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIEhUTUw1IDxjYW52YXM+IGVsZW1lbnQgaXMgbm90IGF2YWlsYWJsZSBpbiB5b3VyIGJyb3dzZXIuXCIsIHsgdXNlckFnZW50OiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwid2luZG93LmRvY3VtZW50IGlzIG5vdCBhdmFpbGFibGUsIHlvdSBtdXN0IGJlIHJ1bm5pbmcgaW4gYW4gZW52aXJvbm1lbnQgd2l0aCBXZWJHTC5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwid2luZG93IGlzIG5vdCBhdmFpbGFibGUsIHlvdSBtdXN0IGJlIHJ1bm5pbmcgaW4gYW4gZW52aXJvbm1lbnQgd2l0aCBXZWJHTC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgV2ViR0wgYnVmZmVyLlxyXG4gICAgICogQHBhcmFtIGdsIFRoZSBXZWJHTCByZW5kZXJpbmcgY29udGV4dC5cclxuICAgICAqIEBwYXJhbSBkYXRhIFRoZSBkYXRhIHRvIGFkZCB0byB0aGUgYnVmZmVyLlxyXG4gICAgICogQHBhcmFtIGFycmF5VHlwZSBUaGUgZGF0YSB0eXBlIGZvciB0aGUgYnVmZmVyLlxyXG4gICAgICogQHBhcmFtIHRhcmdldCBBIEdMIEVudW0gc3BlY2lmeWluZyB0aGUgYmluZGluZyBwb2ludCAodGFyZ2V0KS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBXZWJHTCBidWZmZXIuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVCdWZmZXIoZ2wsIGRhdGEsIGFycmF5VHlwZSwgdGFyZ2V0KSB7XHJcbiAgICAgICAgY29uc3QgYnVmID0gZ2wuY3JlYXRlQnVmZmVyKCk7XHJcbiAgICAgICAgZ2wuYmluZEJ1ZmZlcigodGFyZ2V0IHx8IGdsLkFSUkFZX0JVRkZFUiksIGJ1Zik7XHJcbiAgICAgICAgZ2wuYnVmZmVyRGF0YSgodGFyZ2V0IHx8IGdsLkFSUkFZX0JVRkZFUiksIG5ldyAoYXJyYXlUeXBlIHx8IEZsb2F0MzJBcnJheSkoZGF0YSksIGdsLlNUQVRJQ19EUkFXKTtcclxuICAgICAgICByZXR1cm4gYnVmO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBUcmFuc2ZlciBkYXRhIG9udG8gY2xhbXBlZCB0ZXh0dXJlIGFuZCB0dXJuIG9mZiBhbnkgZmlsdGVyaW5nXHJcbiAgICAgKiBAcGFyYW0gZ2wgVGhlIFdlYkdMIHJlbmRlcmluZyBjb250ZXh0LlxyXG4gICAgICogQHBhcmFtIHBpeGVsRGF0YSBUaGUgcGl4ZWwgZGF0YSB0byBjcmVhdGUgdGhlIHZpZXcgZnJvbS5cclxuICAgICAqIEBwYXJhbSBkaW1lbnNpb25zIFRoZSBkaW1lbnNpb25zIHRvIGNyZWF0ZSB0aGUgdGV4dHVyZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSB0ZXh0dXJlLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlVGV4dHVyZShnbCwgcGl4ZWxEYXRhLCBkaW1lbnNpb25zKSB7XHJcbiAgICAgICAgY29uc3QgdGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcclxuICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXh0dXJlKTtcclxuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCBnbC5DTEFNUF9UT19FREdFKTtcclxuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5DTEFNUF9UT19FREdFKTtcclxuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTkVBUkVTVCk7XHJcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLk5FQVJFU1QpO1xyXG4gICAgICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZ2wuUkdCQTMySSwgZGltZW5zaW9ucy54LCBkaW1lbnNpb25zLnksIDAsIGdsLlJHQkFfSU5URUdFUiwgZ2wuSU5ULCBwaXhlbERhdGEpO1xyXG4gICAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG51bGwpO1xyXG4gICAgICAgIHJldHVybiB0ZXh0dXJlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIHRleHVyZSBpbnRvIHRoZSBmcmFtZWJ1ZmZlci5cclxuICAgICAqIEBwYXJhbSBnbCBUaGUgV2ViR0wgcmVuZGVyaW5nIGNvbnRleHQuXHJcbiAgICAgKiBAcGFyYW0gZnJhbWVCdWZmZXIgVGhlIGZyYW1lIGJ1ZmZlciB0byBzZXQgdGhlIHRleHQgaW4gdG8uXHJcbiAgICAgKiBAcGFyYW0gdGV4dHVyZSBUaGUgdGV4dHVyZSB0byBzZXQgaW4gdG8gdGhlIGZyYW1lYnVmZmVyLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJhbWVCdWZmZXJTZXRUZXh0dXJlKGdsLCBmcmFtZUJ1ZmZlciwgdGV4dHVyZSkge1xyXG4gICAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgZnJhbWVCdWZmZXIpO1xyXG4gICAgICAgIGdsLmZyYW1lYnVmZmVyVGV4dHVyZTJEKGdsLkZSQU1FQlVGRkVSLCBnbC5DT0xPUl9BVFRBQ0hNRU5UMCwgZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZSwgMCk7XHJcbiAgICAgICAgLy8gVGVzdCBmb3IgbW9iaWxlIGJ1ZyBNRE4tPldlYkdMX2Jlc3RfcHJhY3RpY2VzLCBidWxsZXQgN1xyXG4gICAgICAgIGNvbnN0IGZyYW1lQnVmZmVyU3RhdHVzID0gZ2wuY2hlY2tGcmFtZWJ1ZmZlclN0YXR1cyhnbC5GUkFNRUJVRkZFUik7XHJcbiAgICAgICAgaWYgKGZyYW1lQnVmZmVyU3RhdHVzICE9PSBnbC5GUkFNRUJVRkZFUl9DT01QTEVURSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIkVycm9yIGF0dGFjaGluZyBmbG9hdCB0ZXh0dXJlIHRvIGZyYW1lYnVmZmVyLiBZb3VyIGRldmljZSBpcyBwcm9iYWJseSBpbmNvbXBhdGlibGUuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLldlYkdMSGVscGVyID0gV2ViR0xIZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWQyVmlSMHhJWld4d1pYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmQyVmlSMHd2ZDJWaVIweElaV3h3WlhJdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTERSRlFVRjVSVHRCUVVONlJTd3dSVUZCZFVVN1FVRkpka1U3TzBkQlJVYzdRVUZEU0N4TlFVRmhMRmRCUVZjN1NVRkRjRUk3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eGhRVUZoTEVOQlFVTXNZVUZCTmtJN1VVRkRja1FzVFVGQlRTeE5RVUZOTEVkQlFVY3NZVUZCWVN4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRE8xRkJSWHBETEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4UFFVRlBMRTFCUVUwc1MwRkJTeXhYUVVGWExFVkJRVVU3V1VGRGFFVXNUVUZCVFN4UlFVRlJMRWRCUVVjc1lVRkJZU3hEUVVGRExGZEJRVmNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0WlFVVnVSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hEUVVGRExFVkJRVVU3WjBKQlEycERMRTFCUVUwc1RVRkJUU3hIUVVGSExHRkJRV0VzUTBGQlF5eFRRVUZUTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1owSkJSV3BFTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlR0dlFrRkRMMElzVFVGQlRTeEZRVUZGTEVkQlFVY3NZVUZCWVN4RFFVRkRMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dHZRa0ZGTVVNc1NVRkJTU3d5UWtGQldTeERRVUZETEU5QlFVOHNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSVHQzUWtGRE1VSXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zZFVSQlFYVkVMRVZCUVVVc1JVRkJSU3hUUVVGVExFVkJRVVVzVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJReXhEUVVGRE8zRkNRVU0zU0R0dlFrRkZSQ3hQUVVGUExFVkJRVVVzUTBGQlF6dHBRa0ZEWWp0eFFrRkJUVHR2UWtGRFNDeE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXc0UkVGQk9FUXNSVUZCUlN4RlFVRkZMRk5CUVZNc1JVRkJSU3hOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRMRU5CUVVNN2FVSkJRM0JKTzJGQlEwbzdhVUpCUVUwN1owSkJRMGdzVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2NVWkJRWEZHTEVOQlFVTXNRMEZCUXp0aFFVTm9TRHRUUVVOS08yRkJRVTA3V1VGRFNDeE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXcwUlVGQk5FVXNRMEZCUXl4RFFVRkRPMU5CUTNaSE8wbEJRMHdzUTBGQlF6dEpRVVZFT3pzN096czdPMDlCVDBjN1NVRkRTU3hOUVVGTkxFTkJRVU1zV1VGQldTeERRVUZETEVWQlFUUkNMRVZCUVVVc1NVRkJhVUlzUlVGQlJTeFRRVUZsTEVWQlFVVXNUVUZCWlR0UlFVTjRSeXhOUVVGTkxFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTXNXVUZCV1N4RlFVRkZMRU5CUVVNN1VVRkZPVUlzUlVGQlJTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRTFCUVUwc1NVRkJTU3hGUVVGRkxFTkJRVU1zV1VGQldTeERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRhRVFzUlVGQlJTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRTFCUVUwc1NVRkJTU3hGUVVGRkxFTkJRVU1zV1VGQldTeERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRk5CUVZNc1NVRkJTU3haUVVGWkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03VVVGRmJFY3NUMEZCVHl4SFFVRkhMRU5CUVVNN1NVRkRaaXhEUVVGRE8wbEJSVVE3T3pzN096dFBRVTFITzBsQlEwa3NUVUZCVFN4RFFVRkRMR0ZCUVdFc1EwRkJReXhGUVVFMFFpeEZRVUZGTEZOQlFUQkNMRVZCUVVVc1ZVRkJiME03VVVGRGRFZ3NUVUZCVFN4UFFVRlBMRWRCUVVjc1JVRkJSU3hEUVVGRExHRkJRV0VzUlVGQlJTeERRVUZETzFGQlJXNURMRVZCUVVVc1EwRkJReXhYUVVGWExFTkJRVU1zUlVGQlJTeERRVUZETEZWQlFWVXNSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJRenRSUVVOMlF5eEZRVUZGTEVOQlFVTXNZVUZCWVN4RFFVRkRMRVZCUVVVc1EwRkJReXhWUVVGVkxFVkJRVVVzUlVGQlJTeERRVUZETEdOQlFXTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU03VVVGRGNrVXNSVUZCUlN4RFFVRkRMR0ZCUVdFc1EwRkJReXhGUVVGRkxFTkJRVU1zVlVGQlZTeEZRVUZGTEVWQlFVVXNRMEZCUXl4alFVRmpMRVZCUVVVc1JVRkJSU3hEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETzFGQlEzSkZMRVZCUVVVc1EwRkJReXhoUVVGaExFTkJRVU1zUlVGQlJTeERRVUZETEZWQlFWVXNSVUZCUlN4RlFVRkZMRU5CUVVNc2EwSkJRV3RDTEVWQlFVVXNSVUZCUlN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE8xRkJRMjVGTEVWQlFVVXNRMEZCUXl4aFFVRmhMRU5CUVVNc1JVRkJSU3hEUVVGRExGVkJRVlVzUlVGQlJTeEZRVUZGTEVOQlFVTXNhMEpCUVd0Q0xFVkJRVVVzUlVGQlJTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMUZCUTI1RkxFVkJRVVVzUTBGQlF5eFZRVUZWTEVOQlFVTXNSVUZCUlN4RFFVRkRMRlZCUVZVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETEU5QlFVOHNSVUZCUlN4VlFVRlZMRU5CUVVNc1EwRkJReXhGUVVGRkxGVkJRVlVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhaUVVGWkxFVkJRVVVzUlVGQlJTeERRVUZETEVkQlFVY3NSVUZCUlN4VFFVRlRMRU5CUVVNc1EwRkJRenRSUVVNdlJ5eEZRVUZGTEVOQlFVTXNWMEZCVnl4RFFVRkRMRVZCUVVVc1EwRkJReXhWUVVGVkxFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdVVUZGY0VNc1QwRkJUeXhQUVVGUExFTkJRVU03U1VGRGJrSXNRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1RVRkJUU3hEUVVGRExIRkNRVUZ4UWl4RFFVRkRMRVZCUVRSQ0xFVkJRVVVzVjBGQk5rSXNSVUZCUlN4UFFVRnhRanRSUVVOc1NDeEZRVUZGTEVOQlFVTXNaVUZCWlN4RFFVRkRMRVZCUVVVc1EwRkJReXhYUVVGWExFVkJRVVVzVjBGQlZ5eERRVUZETEVOQlFVTTdVVUZGYUVRc1JVRkJSU3hEUVVGRExHOUNRVUZ2UWl4RFFVRkRMRVZCUVVVc1EwRkJReXhYUVVGWExFVkJRVVVzUlVGQlJTeERRVUZETEdsQ1FVRnBRaXhGUVVGRkxFVkJRVVVzUTBGQlF5eFZRVUZWTEVWQlFVVXNUMEZCVHl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJSWHBHTERCRVFVRXdSRHRSUVVNeFJDeE5RVUZOTEdsQ1FVRnBRaXhIUVVGSExFVkJRVVVzUTBGQlF5eHpRa0ZCYzBJc1EwRkJReXhGUVVGRkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdVVUZGY0VVc1NVRkJTU3hwUWtGQmFVSXNTMEZCU3l4RlFVRkZMRU5CUVVNc2IwSkJRVzlDTEVWQlFVVTdXVUZETDBNc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNjVVpCUVhGR0xFTkJRVU1zUTBGQlF6dFRRVU5vU0R0SlFVTk1MRU5CUVVNN1EwRkRTanRCUVRGR1JDeHJRMEV3UmtNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XHJcbmNvbnN0IGNyeXB0b0Vycm9yXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jcnlwdG8vZGlzdC9lcnJvci9jcnlwdG9FcnJvclwiKTtcclxuY29uc3Qgc3RkbGliXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9zdGRsaWJcIikpO1xyXG5jb25zdCB2ZXJ0ZXhTaGFkZXJDb2RlXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi92ZXJ0ZXhTaGFkZXJDb2RlXCIpKTtcclxuY29uc3Qgd2ViR0xIZWxwZXJfMSA9IHJlcXVpcmUoXCIuL3dlYkdMSGVscGVyXCIpO1xyXG4vKipcclxuICogV2ViR0xXb3JrZXIuXHJcbiAqL1xyXG5jbGFzcyBXZWJHTFdvcmtlciB7XHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemUgdGhlIHdlYiBHTCBXb3JrZXIuXHJcbiAgICAgKiBAcGFyYW0gd2ViR0xQbGF0Zm9ybSBUaGUgd2ViR0wgcGxhdGZvcm0uXHJcbiAgICAgKiBAcGFyYW0gc3RhdGVMZW5ndGggVGhlIGxlbmd0aCBvZiB0aGUgc3RhdGUuXHJcbiAgICAgKiBAcGFyYW0gdGV4ZWxTaXplIFRoZSB0ZXhlbCBzaXplLlxyXG4gICAgICovXHJcbiAgICBpbml0aWFsaXplKHdlYkdMUGxhdGZvcm0sIHN0YXRlTGVuZ3RoLCB0ZXhlbFNpemUpIHtcclxuICAgICAgICB0aGlzLl9jb250ZXh0ID0gd2ViR0xIZWxwZXJfMS5XZWJHTEhlbHBlci5jcmVhdGVDb250ZXh0KHdlYkdMUGxhdGZvcm0pO1xyXG4gICAgICAgIHRoaXMuX2RpbWVuc2lvbnMgPSB7IHg6IHN0YXRlTGVuZ3RoLCB5OiAwIH07XHJcbiAgICAgICAgY29uc3QgbWF4SW1hZ2VTaXplID0gTWF0aC5wb3codGhpcy5fY29udGV4dC5NQVhfVEVYVFVSRV9TSVpFLCAyKSAqIDAuNTtcclxuICAgICAgICBjb25zdCBpbWFnZVNpemUgPSBNYXRoLmZsb29yKG1heEltYWdlU2l6ZSAvIHRoaXMuX2RpbWVuc2lvbnMueCAvIHRleGVsU2l6ZSkgKiB0aGlzLl9kaW1lbnNpb25zLnggKiB0ZXhlbFNpemU7XHJcbiAgICAgICAgdGhpcy5fZGltZW5zaW9ucy55ID0gaW1hZ2VTaXplIC8gdGhpcy5fZGltZW5zaW9ucy54IC8gdGV4ZWxTaXplO1xyXG4gICAgICAgIHRoaXMuX3Byb2dyYW1zID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMuX2lwdCA9IHtcclxuICAgICAgICAgICAgZGF0YTogbmV3IEludDMyQXJyYXkoaW1hZ2VTaXplKSxcclxuICAgICAgICAgICAgbGVuZ3RoOiBpbWFnZVNpemVcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIEdQVSB0ZXh0dXJlIGJ1ZmZlciA9IGZyb20gSlMgdHlwZWQgYXJyYXlcclxuICAgICAgICB0aGlzLl9idWZmZXJzID0ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogd2ViR0xIZWxwZXJfMS5XZWJHTEhlbHBlci5jcmVhdGVCdWZmZXIodGhpcy5fY29udGV4dCwgWy0xLCAtMSwgMSwgLTEsIDEsIDEsIC0xLCAxXSksXHJcbiAgICAgICAgICAgIHRleHR1cmU6IHdlYkdMSGVscGVyXzEuV2ViR0xIZWxwZXIuY3JlYXRlQnVmZmVyKHRoaXMuX2NvbnRleHQsIFswLCAwLCAxLCAwLCAxLCAxLCAwLCAxXSksXHJcbiAgICAgICAgICAgIGluZGV4OiB3ZWJHTEhlbHBlcl8xLldlYkdMSGVscGVyLmNyZWF0ZUJ1ZmZlcih0aGlzLl9jb250ZXh0LCBbMSwgMiwgMCwgMywgMCwgMl0sIFVpbnQxNkFycmF5LCB0aGlzLl9jb250ZXh0LkVMRU1FTlRfQVJSQVlfQlVGRkVSKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fYXR0cmliID0ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogMCxcclxuICAgICAgICAgICAgdGV4dHVyZTogMVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fdmVydGV4QXJyYXkgPSB0aGlzLl9jb250ZXh0LmNyZWF0ZVZlcnRleEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5iaW5kVmVydGV4QXJyYXkodGhpcy5fdmVydGV4QXJyYXkpO1xyXG4gICAgICAgIHRoaXMuYmluZEJ1ZmZlcnMoKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LmJpbmRWZXJ0ZXhBcnJheShudWxsKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVZlcnRleFNoYWRlcigpO1xyXG4gICAgICAgIHRoaXMuX2ZyYW1lQnVmZmVyID0gdGhpcy5fY29udGV4dC5jcmVhdGVGcmFtZWJ1ZmZlcigpO1xyXG4gICAgICAgIHRoaXMuX3RleHR1cmUwID0gd2ViR0xIZWxwZXJfMS5XZWJHTEhlbHBlci5jcmVhdGVUZXh0dXJlKHRoaXMuX2NvbnRleHQsIHRoaXMuX2lwdC5kYXRhLCB0aGlzLl9kaW1lbnNpb25zKTtcclxuICAgICAgICB0aGlzLl90ZXh0dXJlMSA9IHdlYkdMSGVscGVyXzEuV2ViR0xIZWxwZXIuY3JlYXRlVGV4dHVyZSh0aGlzLl9jb250ZXh0LCBuZXcgSW50MzJBcnJheShpbWFnZVNpemUpLCB0aGlzLl9kaW1lbnNpb25zKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBkaW1lbnNpb25zIGZyb20gdGhlIHdvcmtlci5cclxuICAgICAqIEByZXR1cm5zIFRoZSBkaW1lbnNpb25zLlxyXG4gICAgICovXHJcbiAgICBnZXREaW1lbnNpb25zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kaW1lbnNpb25zO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIElQVCBmcm9tIHRoZSB3b3JrZXIuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgaXB0LlxyXG4gICAgICovXHJcbiAgICBnZXRJcHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lwdDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGEgcHJvZ3JhbSB0byB0aGUgd29ya2VyLlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHByb2dyYW0gdG8gYWRkLlxyXG4gICAgICogQHBhcmFtIGNvZGUgVGhlIGNvZGUgZm9yIHRoZSBwcm9ncmFtLlxyXG4gICAgICogQHBhcmFtIHVuaWZvcm1zIEFkZGl0aW9uYWwgdW5pZm9ybSBsb2NhdGlvbnMuXHJcbiAgICAgKi9cclxuICAgIGFkZFByb2dyYW0obmFtZSwgY29kZSwgLi4udW5pZm9ybXMpIHtcclxuICAgICAgICBjb25zdCBmcmFnbWVudFNoYWRlciA9IHRoaXMuY3JlYXRlRnJhZ21lbnRTaGFkZXIoY29kZSk7XHJcbiAgICAgICAgY29uc3QgcHJvZ3JhbSA9IHRoaXMuX2NvbnRleHQuY3JlYXRlUHJvZ3JhbSgpO1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQuYXR0YWNoU2hhZGVyKHByb2dyYW0sIHRoaXMuX3ZlcnRleFNoYWRlcik7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgZnJhZ21lbnRTaGFkZXIpO1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQuYmluZEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIHRoaXMuX2F0dHJpYi5wb3NpdGlvbiwgXCJwb3NpdGlvblwiKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LmJpbmRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCB0aGlzLl9hdHRyaWIudGV4dHVyZSwgXCJ0ZXh0dXJlXCIpO1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQubGlua1Byb2dyYW0ocHJvZ3JhbSk7XHJcbiAgICAgICAgY29uc3QgdW5pZm9ybVZhcnMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgZm9yIChjb25zdCB2YXJpYWJsZSBvZiB1bmlmb3Jtcykge1xyXG4gICAgICAgICAgICB1bmlmb3JtVmFycy5zZXQodmFyaWFibGUsIHRoaXMuX2NvbnRleHQuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHZhcmlhYmxlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3Byb2dyYW1zLnNldChuYW1lLCB7IHByb2dyYW0sIHVuaWZvcm1WYXJzIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSdW4gdGhlIHByb2dyYW0gaW4gdGhlIHdlYiB3b3JrZXIuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgcHJvZ3JhbSB0byBydW4uXHJcbiAgICAgKiBAcGFyYW0gY291bnQgVGhlIG51bWJlciBvZiB0aW1lcyB0byBydW4gaXQuXHJcbiAgICAgKiBAcGFyYW0gdW5pZm9ybXMgQWRkaXRpb25hbCB1bmlmb3JtIGxvY2F0aW9ucyB0byB1c2UuXHJcbiAgICAgKi9cclxuICAgIHJ1blByb2dyYW0obmFtZSwgY291bnQsIC4uLnVuaWZvcm1zKSB7XHJcbiAgICAgICAgY29uc3QgaW5mbyA9IHRoaXMuX3Byb2dyYW1zLmdldChuYW1lKTtcclxuICAgICAgICBjb25zdCBwcm9ncmFtID0gaW5mby5wcm9ncmFtO1xyXG4gICAgICAgIGlmICghdGhpcy5fY29udGV4dC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIHRoaXMuX2NvbnRleHQuTElOS19TVEFUVVMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiRmFpbGVkIHRvIGxpbmsgR0xTTCBwcm9ncmFtIGNvZGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHVuaWZvcm1WYXJzID0gaW5mby51bmlmb3JtVmFycztcclxuICAgICAgICBjb25zdCB1VGV4dHVyZSA9IHRoaXMuX2NvbnRleHQuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIFwidV90ZXh0dXJlXCIpO1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQudXNlUHJvZ3JhbShwcm9ncmFtKTtcclxuICAgICAgICBsZXQgbG9jYWxDb3VudCA9IGNvdW50O1xyXG4gICAgICAgIHdoaWxlIChsb2NhbENvdW50LS0gPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbnRleHQuYmluZFRleHR1cmUodGhpcy5fY29udGV4dC5URVhUVVJFXzJELCB0aGlzLl90ZXh0dXJlMCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbnRleHQuYWN0aXZlVGV4dHVyZSh0aGlzLl9jb250ZXh0LlRFWFRVUkUwKTtcclxuICAgICAgICAgICAgdGhpcy5fY29udGV4dC51bmlmb3JtMWkodVRleHR1cmUsIDApO1xyXG4gICAgICAgICAgICB0aGlzLl9jb250ZXh0LnZpZXdwb3J0KDAsIDAsIHRoaXMuX2RpbWVuc2lvbnMueCwgdGhpcy5fZGltZW5zaW9ucy55KTtcclxuICAgICAgICAgICAgd2ViR0xIZWxwZXJfMS5XZWJHTEhlbHBlci5mcmFtZUJ1ZmZlclNldFRleHR1cmUodGhpcy5fY29udGV4dCwgdGhpcy5fZnJhbWVCdWZmZXIsIHRoaXMuX3RleHR1cmUxKTtcclxuICAgICAgICAgICAgdGhpcy5fY29udGV4dC5iaW5kVmVydGV4QXJyYXkodGhpcy5fdmVydGV4QXJyYXkpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVWYXJzIG9mIHVuaWZvcm1zKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb250ZXh0LnVuaWZvcm0xaSh1bmlmb3JtVmFycy5nZXQodVZhcnMubmFtZSksIHVWYXJzLnZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9jb250ZXh0LmRyYXdFbGVtZW50cyh0aGlzLl9jb250ZXh0LlRSSUFOR0xFUywgNiwgdGhpcy5fY29udGV4dC5VTlNJR05FRF9TSE9SVCwgMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleDAgPSB0aGlzLl90ZXh0dXJlMDtcclxuICAgICAgICAgICAgdGhpcy5fdGV4dHVyZTAgPSB0aGlzLl90ZXh0dXJlMTtcclxuICAgICAgICAgICAgdGhpcy5fdGV4dHVyZTEgPSB0ZXgwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZpbmlzaFJ1bigpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWFkIGRhdGEgZnJvbSB0aGUgd29ya2VyLlxyXG4gICAgICogQHBhcmFtIHggVGhlIHggcG9zaXRpb24gdG8gcmVhZCBmcm9tLlxyXG4gICAgICogQHBhcmFtIHkgVGhlIHkgcG9zaXRpb24gdG8gcmVhZCBmcm9tLlxyXG4gICAgICogQHBhcmFtIG4gVGhlIHdpZHRoIHBvc2l0aW9uIHRvIHJlYWQgZnJvbS5cclxuICAgICAqIEBwYXJhbSBtIFRoZSBoZWlnaHQgcG9zaXRpb24gdG8gcmVhZCBmcm9tLlxyXG4gICAgICogQHJldHVybnMgVGhlIGRhdGEgYXQgdGhlIHJlcXVlc3RlZCBwb3NpdGlvbi5cclxuICAgICAqL1xyXG4gICAgcmVhZERhdGEoeCwgeSwgbiwgbSkge1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQuYmluZEZyYW1lYnVmZmVyKHRoaXMuX2NvbnRleHQuRlJBTUVCVUZGRVIsIHRoaXMuX2ZyYW1lQnVmZmVyKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LnJlYWRQaXhlbHMoeCwgeSwgbiwgbSwgdGhpcy5fY29udGV4dC5SR0JBX0lOVEVHRVIsIHRoaXMuX2NvbnRleHQuSU5ULCB0aGlzLl9pcHQuZGF0YSk7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5iaW5kRnJhbWVidWZmZXIodGhpcy5fY29udGV4dC5GUkFNRUJVRkZFUiwgbnVsbCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lwdC5kYXRhLnN1YmFycmF5KDAsIHRoaXMuX2lwdC5sZW5ndGgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBXcml0ZSBkYXRhIHRvIHRoZSB3b3JrZXIuXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSB0byB3cml0ZS5cclxuICAgICAqL1xyXG4gICAgd3JpdGVEYXRhKGRhdGEpIHtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LmJpbmRUZXh0dXJlKHRoaXMuX2NvbnRleHQuVEVYVFVSRV8yRCwgdGhpcy5fdGV4dHVyZTApO1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQudGV4SW1hZ2UyRCh0aGlzLl9jb250ZXh0LlRFWFRVUkVfMkQsIDAsIHRoaXMuX2NvbnRleHQuUkdCQTMySSwgdGhpcy5fZGltZW5zaW9ucy54LCB0aGlzLl9kaW1lbnNpb25zLnksIDAsIHRoaXMuX2NvbnRleHQuUkdCQV9JTlRFR0VSLCB0aGlzLl9jb250ZXh0LklOVCwgZGF0YSk7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5iaW5kVGV4dHVyZSh0aGlzLl9jb250ZXh0LlRFWFRVUkVfMkQsIG51bGwpO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBiaW5kQnVmZmVycygpIHtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LmJpbmRCdWZmZXIodGhpcy5fY29udGV4dC5BUlJBWV9CVUZGRVIsIHRoaXMuX2J1ZmZlcnMudGV4dHVyZSk7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLl9hdHRyaWIudGV4dHVyZSk7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMuX2F0dHJpYi50ZXh0dXJlLCAyLCB0aGlzLl9jb250ZXh0LkZMT0FULCBmYWxzZSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5iaW5kQnVmZmVyKHRoaXMuX2NvbnRleHQuQVJSQVlfQlVGRkVSLCB0aGlzLl9idWZmZXJzLnBvc2l0aW9uKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMuX2F0dHJpYi5wb3NpdGlvbik7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMuX2F0dHJpYi5wb3NpdGlvbiwgMiwgdGhpcy5fY29udGV4dC5GTE9BVCwgZmFsc2UsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQuYmluZEJ1ZmZlcih0aGlzLl9jb250ZXh0LkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLl9idWZmZXJzLmluZGV4KTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY3JlYXRlVmVydGV4U2hhZGVyKCkge1xyXG4gICAgICAgIHRoaXMuX3ZlcnRleFNoYWRlciA9IHRoaXMuX2NvbnRleHQuY3JlYXRlU2hhZGVyKHRoaXMuX2NvbnRleHQuVkVSVEVYX1NIQURFUik7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5zaGFkZXJTb3VyY2UodGhpcy5fdmVydGV4U2hhZGVyLCB2ZXJ0ZXhTaGFkZXJDb2RlXzEuZGVmYXVsdCk7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5jb21waWxlU2hhZGVyKHRoaXMuX3ZlcnRleFNoYWRlcik7XHJcbiAgICAgICAgLy8gVGhpcyBzaG91bGQgbm90IGZhaWwuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9jb250ZXh0LmdldFNoYWRlclBhcmFtZXRlcih0aGlzLl92ZXJ0ZXhTaGFkZXIsIHRoaXMuX2NvbnRleHQuQ09NUElMRV9TVEFUVVMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBDb3VsZCBub3QgYnVpbGQgdmVydGV4IHNoYWRlci5cblxuLS0tIENPREUgRFVNUCAtLS0ke3ZlcnRleFNoYWRlckNvZGVfMS5kZWZhdWx0fVxuXG4tLS0gRVJST1IgTE9HIC0tLVxuJHt0aGlzLl9jb250ZXh0LmdldFNoYWRlckluZm9Mb2codGhpcy5fdmVydGV4U2hhZGVyKX1gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNyZWF0ZUZyYWdtZW50U2hhZGVyKGNvZGUpIHtcclxuICAgICAgICBjb25zdCBmcmFnbWVudFNoYWRlciA9IHRoaXMuX2NvbnRleHQuY3JlYXRlU2hhZGVyKHRoaXMuX2NvbnRleHQuRlJBR01FTlRfU0hBREVSKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LnNoYWRlclNvdXJjZShmcmFnbWVudFNoYWRlciwgc3RkbGliXzEuZGVmYXVsdCArIGNvZGUpO1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQuY29tcGlsZVNoYWRlcihmcmFnbWVudFNoYWRlcik7XHJcbiAgICAgICAgLy8gVXNlIHRoaXMgb3V0cHV0IHRvIGRlYnVnIHRoZSBzaGFkZXJcclxuICAgICAgICAvLyBLZWVwIGluIG1pbmQgdGhhdCBXZWJHTCBHTFNMIGlzICoqbXVjaCoqIHN0cmljdGVyIHRoYW4gZS5nLiBPcGVuR0wgR0xTTFxyXG4gICAgICAgIGlmICghdGhpcy5fY29udGV4dC5nZXRTaGFkZXJQYXJhbWV0ZXIoZnJhZ21lbnRTaGFkZXIsIHRoaXMuX2NvbnRleHQuQ09NUElMRV9TVEFUVVMpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvZGVMaW5lcyA9IGNvZGUuc3BsaXQoXCJcXG5cIik7XHJcbiAgICAgICAgICAgIGxldCBkYmdNc2cgPSBcIkNvdWxkIG5vdCBidWlsZCBmcmFnbWVudCBzaGFkZXIuXFxuXFxuLS0tLS0tLS0tLS0tLS0tLS0tIEtFUk5FTCBDT0RFIERVTVAgLS0tLS0tLS0tLS0tLS0tLS0tXFxuXCI7XHJcbiAgICAgICAgICAgIGZvciAobGV0IG5sID0gMDsgbmwgPCBjb2RlTGluZXMubGVuZ3RoOyBubCsrKSB7XHJcbiAgICAgICAgICAgICAgICBkYmdNc2cgKz0gYCR7c3RkbGliXzEuZGVmYXVsdC5zcGxpdChcIlxcblwiKS5sZW5ndGggKyBubH0+ICR7Y29kZUxpbmVzW25sXX1cXG5gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRiZ01zZyArPSBgXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEVSUk9SICBMT0cgLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuJHt0aGlzLl9jb250ZXh0LmdldFNoYWRlckluZm9Mb2coZnJhZ21lbnRTaGFkZXIpfWA7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGRiZ01zZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmcmFnbWVudFNoYWRlcjtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgZmluaXNoUnVuKCkge1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQuYmluZFZlcnRleEFycmF5KG51bGwpO1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQuYmluZFRleHR1cmUodGhpcy5fY29udGV4dC5URVhUVVJFXzJELCBudWxsKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LmJpbmRGcmFtZWJ1ZmZlcih0aGlzLl9jb250ZXh0LkZSQU1FQlVGRkVSLCBudWxsKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLldlYkdMV29ya2VyID0gV2ViR0xXb3JrZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWQyVmlSMHhYYjNKclpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmQyVmlSMHd2ZDJWaVIweFhiM0pyWlhJdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZCUVN3d1JVRkJkVVU3UVVGRmRrVXNPRVJCUVRoQ08wRkJRemxDTEd0R1FVRnJSRHRCUVVOc1JDd3JRMEZCTkVNN1FVRkpOVU03TzBkQlJVYzdRVUZEU0N4TlFVRmhMRmRCUVZjN1NVRjNRbkJDT3pzN096dFBRVXRITzBsQlEwa3NWVUZCVlN4RFFVRkRMR0ZCUVRaQ0xFVkJRVVVzVjBGQmJVSXNSVUZCUlN4VFFVRnBRanRSUVVOdVJpeEpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMSGxDUVVGWExFTkJRVU1zWVVGQllTeERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkRPMUZCUTNwRUxFbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1YwRkJWeXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXp0UlFVVTFReXhOUVVGTkxGbEJRVmtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zWjBKQlFXZENMRVZCUVVVc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETzFGQlEzWkZMRTFCUVUwc1UwRkJVeXhIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNXVUZCV1N4SFFVRkhMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF5eEhRVUZITEZOQlFWTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF5eEhRVUZITEZOQlFWTXNRMEZCUXp0UlFVTTNSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNSMEZCUnl4VFFVRlRMRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETEVkQlFVY3NVMEZCVXl4RFFVRkRPMUZCUldoRkxFbEJRVWtzUTBGQlF5eFRRVUZUTEVkQlFVY3NTVUZCU1N4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVNelFpeEpRVUZKTEVOQlFVTXNTVUZCU1N4SFFVRkhPMWxCUTFJc1NVRkJTU3hGUVVGRkxFbEJRVWtzVlVGQlZTeERRVUZETEZOQlFWTXNRMEZCUXp0WlFVTXZRaXhOUVVGTkxFVkJRVVVzVTBGQlV6dFRRVU53UWl4RFFVRkRPMUZCUlVZc01rTkJRVEpETzFGQlF6TkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWM3V1VGRFdpeFJRVUZSTEVWQlFVVXNlVUpCUVZjc1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJReTlGTEU5QlFVOHNSVUZCUlN4NVFrRkJWeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpGRkxFdEJRVXNzUlVGQlJTeDVRa0ZCVnl4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hYUVVGWExFVkJRVVVzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4dlFrRkJiMElzUTBGQlF6dFRRVU4wU0N4RFFVRkRPMUZCUlVZc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ6dFpRVU5ZTEZGQlFWRXNSVUZCUlN4RFFVRkRPMWxCUTFnc1QwRkJUeXhGUVVGRkxFTkJRVU03VTBGRFlpeERRVUZETzFGQlJVWXNTVUZCU1N4RFFVRkRMRmxCUVZrc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEdsQ1FVRnBRaXhGUVVGRkxFTkJRVU03VVVGRGRFUXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhsUVVGbExFTkJRVU1zU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMUZCUTJwRUxFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0UlFVTnVRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEdWQlFXVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVOd1F5eEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xFVkJRVVVzUTBGQlF6dFJRVU14UWl4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNhVUpCUVdsQ0xFVkJRVVVzUTBGQlF6dFJRVU4wUkN4SlFVRkpMRU5CUVVNc1UwRkJVeXhIUVVGSExIbENRVUZYTEVOQlFVTXNZVUZCWVN4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzFGQlF6VkdMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzZVVKQlFWY3NRMEZCUXl4aFFVRmhMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeEpRVUZKTEZWQlFWVXNRMEZCUXl4VFFVRlRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdTVUZETTBjc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkpMR0ZCUVdFN1VVRkRhRUlzVDBGQlR5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRPMGxCUXpWQ0xFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hOUVVGTk8xRkJRMVFzVDBGQlR5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRPMGxCUTNKQ0xFTkJRVU03U1VGRlJEczdPenM3VDBGTFJ6dEpRVU5KTEZWQlFWVXNRMEZCUXl4SlFVRlpMRVZCUVVVc1NVRkJXU3hGUVVGRkxFZEJRVWNzVVVGQmEwSTdVVUZETDBRc1RVRkJUU3hqUVVGakxFZEJRVWNzU1VGQlNTeERRVUZETEc5Q1FVRnZRaXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFGQlEzWkVMRTFCUVUwc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RlFVRkZMRU5CUVVNN1VVRkZPVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNRMEZCUXp0UlFVTjRSQ3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZsQlFWa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1kwRkJZeXhEUVVGRExFTkJRVU03VVVGRGNFUXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4UFFVRlBMRVZCUVVVc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFJRVUZSTEVWQlFVVXNWVUZCVlN4RFFVRkRMRU5CUVVNN1VVRkROMFVzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4clFrRkJhMElzUTBGQlF5eFBRVUZQTEVWQlFVVXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGUExFVkJRVVVzVTBGQlV5eERRVUZETEVOQlFVTTdVVUZETTBVc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRkRia01zVFVGQlRTeFhRVUZYTEVkQlFVY3NTVUZCU1N4SFFVRkhMRVZCUVdkRExFTkJRVU03VVVGRE5VUXNTMEZCU3l4TlFVRk5MRkZCUVZFc1NVRkJTU3hSUVVGUkxFVkJRVVU3V1VGRE4wSXNWMEZCVnl4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFVkJRVVVzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4clFrRkJhMElzUTBGQlF5eFBRVUZQTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVOc1JqdFJRVU5FTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUlVGQlJTeEZRVUZGTEU5QlFVOHNSVUZCUlN4WFFVRlhMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRM1pFTEVOQlFVTTdTVUZGUkRzN096czdUMEZMUnp0SlFVTkpMRlZCUVZVc1EwRkJReXhKUVVGWkxFVkJRVVVzUzBGQllTeEZRVUZGTEVkQlFVY3NVVUZCZFVNN1VVRkRja1lzVFVGQlRTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVVUZEZEVNc1RVRkJUU3hQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXp0UlFVVTNRaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eFBRVUZQTEVWQlFVVXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zUlVGQlJUdFpRVU40UlN4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eHJRMEZCYTBNc1EwRkJReXhEUVVGRE8xTkJRemRFTzFGQlJVUXNUVUZCVFN4WFFVRlhMRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF6dFJRVU55UXl4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEd0Q1FVRnJRaXhEUVVGRExFOUJRVThzUlVGQlJTeFhRVUZYTEVOQlFVTXNRMEZCUXp0UlFVTjRSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRSUVVWc1F5eEpRVUZKTEZWQlFWVXNSMEZCUnl4TFFVRkxMRU5CUVVNN1VVRkRka0lzVDBGQlR5eFZRVUZWTEVWQlFVVXNSMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkRja0lzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVWQlFVVXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8xbEJRM0JGTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1dVRkRjRVFzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4VFFVRlRMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlJYSkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU55UlN4NVFrRkJWeXhEUVVGRExIRkNRVUZ4UWl4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzU1VGQlNTeERRVUZETEZsQlFWa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03V1VGRGNFWXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhsUVVGbExFTkJRVU1zU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMWxCUTJwRUxFdEJRVXNzVFVGQlRTeExRVUZMTEVsQlFVa3NVVUZCVVN4RlFVRkZPMmRDUVVNeFFpeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRk5CUVZNc1EwRkJReXhYUVVGWExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdZVUZEY2tVN1dVRkRSQ3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhqUVVGakxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZGZUVZc1RVRkJUU3hKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXp0WlFVTTFRaXhKUVVGSkxFTkJRVU1zVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNN1dVRkRhRU1zU1VGQlNTeERRVUZETEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNN1UwRkRla0k3VVVGRlJDeEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNN1NVRkRja0lzUTBGQlF6dEpRVVZFT3pzN096czdPMDlCVDBjN1NVRkRTU3hSUVVGUkxFTkJRVU1zUTBGQlV5eEZRVUZGTEVOQlFWTXNSVUZCUlN4RFFVRlRMRVZCUVVVc1EwRkJVenRSUVVOMFJDeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMR1ZCUVdVc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZkQlFWY3NSVUZCUlN4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03VVVGRE5VVXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNXVUZCV1N4RlFVRkZMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRGNFY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhsUVVGbExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4WFFVRlhMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGREwwUXNUMEZCVHl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdTVUZEZUVRc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkpMRk5CUVZNc1EwRkJReXhKUVVGeFFqdFJRVU5zUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1JVRkJSU3hKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdVVUZEY0VVc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhGUVVGRkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGbEJRVmtzUlVGQlJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU0zU3l4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dEpRVU01UkN4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxGZEJRVmM3VVVGRFppeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZsQlFWa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzFGQlF6VkZMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zZFVKQlFYVkNMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVTTFSQ3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEcxQ1FVRnRRaXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NSVUZCUlN4TFFVRkxMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6ZEdMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1dVRkJXU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1VVRkROMFVzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4MVFrRkJkVUlzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8xRkJRemRFTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhGUVVGRkxFdEJRVXNzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRPVVlzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eHZRa0ZCYjBJc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTNSR0xFTkJRVU03U1VGRlJDeGxRVUZsTzBsQlExQXNhMEpCUVd0Q08xRkJRM1JDTEVsQlFVa3NRMEZCUXl4aFFVRmhMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF6dFJRVU0zUlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNZVUZCWVN4RlFVRkZMREJDUVVGblFpeERRVUZETEVOQlFVTTdVVUZEYWtVc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGRE8xRkJSV2hFTEhkQ1FVRjNRanRSUVVONFFpeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1lVRkJZU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNZMEZCWXl4RFFVRkRMRVZCUVVVN1dVRkRja1lzVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUTJwQ096dHRRa0ZGUnl3d1FrRkJaMEk3T3p0RlFVZHFReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNSVUZCUlN4RFFVTjZReXhEUVVGRE8xTkJRMHc3U1VGRFRDeERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMRzlDUVVGdlFpeERRVUZETEVsQlFWazdVVUZEY2tNc1RVRkJUU3hqUVVGakxFZEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eGxRVUZsTEVOQlFVTXNRMEZCUXp0UlFVVnFSaXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZsQlFWa3NRMEZCUXl4alFVRmpMRVZCUVVVc1owSkJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVVXhSQ3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4alFVRmpMRU5CUVVNc1EwRkJRenRSUVVVMVF5eHpRMEZCYzBNN1VVRkRkRU1zTUVWQlFUQkZPMUZCUXpGRkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMR3RDUVVGclFpeERRVUZETEdOQlFXTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExHTkJRV01zUTBGQlF5eEZRVUZGTzFsQlEycEdMRTFCUVUwc1UwRkJVeXhIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRia01zU1VGQlNTeE5RVUZOTEVkQlFVY3NPRVpCUVRoR0xFTkJRVU03V1VGRk5VY3NTMEZCU3l4SlFVRkpMRVZCUVVVc1IwRkJSeXhEUVVGRExFVkJRVVVzUlVGQlJTeEhRVUZITEZOQlFWTXNRMEZCUXl4TlFVRk5MRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVU3WjBKQlF6RkRMRTFCUVUwc1NVRkJTU3hIUVVGSExHZENRVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFMUJRVTBzUjBGQlJ5eEZRVUZGTEV0QlFVc3NVMEZCVXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU03WVVGRGNrVTdXVUZGUkN4TlFVRk5MRWxCUVVrc05rUkJRVFpFTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNZMEZCWXl4RFFVRkRMRVZCUVVVc1EwRkJRenRaUVVWNFNDeE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFRRVU5xUXp0UlFVTkVMRTlCUVU4c1kwRkJZeXhEUVVGRE8wbEJRekZDTEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTFBc1UwRkJVenRSUVVOaUxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNaVUZCWlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRM0JETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRekZFTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1pVRkJaU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNWMEZCVnl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8wbEJRMjVGTEVOQlFVTTdRMEZEU2p0QlFYUlBSQ3hyUTBGelQwTWlmUT09IiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19jb3JlX2Rpc3RfaGVscGVyc19udW1iZXJIZWxwZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19jb3JlX2Rpc3RfaGVscGVyc19vYmplY3RIZWxwZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19jcnlwdG9fZGlzdF9lcnJvcl9jcnlwdG9FcnJvcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NyeXB0b19kaXN0X2ZhY3Rvcmllc19zcG9uZ2VGYWN0b3J5X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fY3J5cHRvX2Rpc3RfcHJvb2ZPZldvcmtfcHJvb2ZPZldvcmtCYXNlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fZGF0YV9kaXN0X2RhdGFfdHJpdHNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19kYXRhX2Rpc3RfZGF0YV90cnl0ZXNfXzsiXSwic291cmNlUm9vdCI6IiJ9