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
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Combined index of all the modules.
 */

__export(__webpack_require__(/*! ./proofOfWorkWebGl */ "./dist/proofOfWorkWebGl.js"));

/***/ }),

/***/ "./dist/pearlDiver/pearlDiver.js":
/*!***************************************!*\
  !*** ./dist/pearlDiver/pearlDiver.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.49/node_modules/@babel/runtime/regenerator/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "@iota-pico/core/dist/helpers/objectHelper");

var spongeFactory_1 = __webpack_require__(/*! @iota-pico/crypto/dist/factories/spongeFactory */ "@iota-pico/crypto/dist/factories/spongeFactory");

var trits_1 = __webpack_require__(/*! @iota-pico/data/dist/data/trits */ "@iota-pico/data/dist/data/trits");

var add_1 = __importDefault(__webpack_require__(/*! ../shaders/add */ "./dist/shaders/add.js"));

var checkCol_1 = __importDefault(__webpack_require__(/*! ../shaders/checkCol */ "./dist/shaders/checkCol.js"));

var checkDo_1 = __importDefault(__webpack_require__(/*! ../shaders/checkDo */ "./dist/shaders/checkDo.js"));

var checkK_1 = __importDefault(__webpack_require__(/*! ../shaders/checkK */ "./dist/shaders/checkK.js"));

var finalize_1 = __importDefault(__webpack_require__(/*! ../shaders/finalize */ "./dist/shaders/finalize.js"));

var headers_1 = __importDefault(__webpack_require__(/*! ../shaders/headers */ "./dist/shaders/headers.js"));

var increment_1 = __importDefault(__webpack_require__(/*! ../shaders/increment */ "./dist/shaders/increment.js"));

var init_1 = __importDefault(__webpack_require__(/*! ../shaders/init */ "./dist/shaders/init.js"));

var transform_1 = __importDefault(__webpack_require__(/*! ../shaders/transform */ "./dist/shaders/transform.js"));

var webGLWorker_1 = __webpack_require__(/*! ../webGL/webGLWorker */ "./dist/webGL/webGLWorker.js");

var pearlDiverState_1 = __webpack_require__(/*! ./pearlDiverState */ "./dist/pearlDiver/pearlDiverState.js");
/**
 * PearlDiver.
 * Converted from https://github.com/iotaledger/curl.lib.js/blob/master/src/pearldiver.js
 */


var PearlDiver =
/*#__PURE__*/
function () {
  /* @internal */
  function PearlDiver(webGLPlatform) {
    _classCallCheck(this, PearlDiver);

    this._webGLWorker = new webGLWorker_1.WebGLWorker();
    var curl = spongeFactory_1.SpongeFactory.instance().create("curl");
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


  _createClass(PearlDiver, [{
    key: "searchWithTrytes",

    /**
     * Perform a search using trytes.
     * @param trytes The trytes to perform the search on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns Promise which resolves to the trytes from the search.
     */
    value: function () {
      var _searchWithTrytes = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(trytes, minWeightMagnitude) {
        var searchStates;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                searchStates = this.prepare(trytes);
                return _context.abrupt("return", this.search(searchStates, minWeightMagnitude));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function searchWithTrytes(_x, _x2) {
        return _searchWithTrytes.apply(this, arguments);
      };
    }()
    /* @internal */

  }, {
    key: "prepare",
    value: function prepare(transactionTrytes) {
      var curl = spongeFactory_1.SpongeFactory.instance().create("curl");
      curl.initialize();
      var transactionTrits = trits_1.Trits.fromTrytes(transactionTrytes).toArray();
      curl.absorb(transactionTrits, 0, this._transactionLength - this._hashLength);
      var curlState = curl.getState();
      transactionTrits.slice(this._transactionLength - this._hashLength, this._transactionLength).forEach(function (value, index) {
        curlState[index] = value;
      });
      return this.searchToPair(curlState);
    }
    /* @internal */

  }, {
    key: "search",
    value: function () {
      var _search = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(states, minWeight) {
        var _this = this;

        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", new Promise(function (resolve, reject) {
                  _this._queue.push({
                    states: states,
                    minWeightMagnitude: minWeight,
                    callback: resolve
                  });

                  if (_this._state === pearlDiverState_1.PearlDiverState.ready) {
                    _this.searchDoNext();
                  }
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function search(_x3, _x4) {
        return _search.apply(this, arguments);
      };
    }()
    /* @internal */

  }, {
    key: "searchToPair",
    value: function searchToPair(state) {
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
    }
    /* @internal */

  }, {
    key: "searchOffset",
    value: function searchOffset(states, offset) {
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

  }, {
    key: "searchDoNext",
    value: function searchDoNext() {
      var next = this._queue.shift();

      if (objectHelper_1.ObjectHelper.isEmpty(next)) {
        this._state = pearlDiverState_1.PearlDiverState.ready;
      } else {
        this._state = pearlDiverState_1.PearlDiverState.searching;
        this.webGLFindNonce(next);
      }
    }
    /* @internal */

  }, {
    key: "webGLFindNonce",
    value: function webGLFindNonce(searchObject) {
      var _this2 = this;

      this.webGLWriteBuffers(searchObject.states);

      this._webGLWorker.writeData(this._currentBuffer);

      this._webGLWorker.runProgram("init", 1, {
        name: "gr_offset",
        value: 0
      });

      setTimeout(function () {
        return _this2.webGLSearch(searchObject);
      }, 1);
    }
    /* @internal */

  }, {
    key: "webGLWriteBuffers",
    value: function webGLWriteBuffers(states) {
      for (var i = 0; i < this._stateLength; i++) {
        this._currentBuffer[i * PearlDiver.TEXEL_SIZE] = states.low[i];
        this._currentBuffer[i * PearlDiver.TEXEL_SIZE + 1] = states.high[i];
        this._currentBuffer[i * PearlDiver.TEXEL_SIZE + 2] = states.low[i];
        this._currentBuffer[i * PearlDiver.TEXEL_SIZE + 3] = states.high[i];
      }
    }
    /* @internal */

  }, {
    key: "webGLSearch",
    value: function webGLSearch(searchObject) {
      var _this3 = this;

      this._webGLWorker.runProgram("increment", 1);

      this._webGLWorker.runProgram("twist", this._numberRounds);

      this._webGLWorker.runProgram("check", 1, {
        name: "minWeightMagnitude",
        value: searchObject.minWeightMagnitude
      });

      this._webGLWorker.runProgram("col_check", 1);

      if (this._webGLWorker.readData(this._stateLength, 0, 1, 1)[2] === -1) {
        setTimeout(function () {
          return _this3.webGLSearch(searchObject);
        }, 10);
      } else {
        this._webGLWorker.runProgram("finalize", 1);

        var nonce = this._webGLWorker.readData(0, 0, this._webGLWorker.getDimensions().x, 1).reduce(this.pack(4), []).slice(0, this._hashLength).map(function (x) {
          return x[3];
        });

        searchObject.callback(trits_1.Trits.fromNumberArray(nonce).toTrytes());
        this.searchDoNext();
      }
    }
    /* @internal */

  }, {
    key: "pack",
    value: function pack(l) {
      return function (r, currentValue, currentIndex) {
        return (currentIndex % l === 0 ? r.push([currentValue]) : r[r.length - 1].push(currentValue)) && r;
      };
    }
  }], [{
    key: "initialize",
    value: function initialize(webGLPlatform) {
      if (!PearlDiver.instance) {
        PearlDiver.instance = new PearlDiver(webGLPlatform);
      }
    }
    /**
     * Closedown the PearlDiver main instance.
     */

  }, {
    key: "closedown",
    value: function closedown() {
      if (PearlDiver.instance) {
        PearlDiver.instance = undefined;
      }
    }
  }]);

  return PearlDiver;
}();
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

/***/ }),

/***/ "./dist/pearlDiver/pearlDiverState.js":
/*!********************************************!*\
  !*** ./dist/pearlDiver/pearlDiverState.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * PearlDiver State.
 */

var PearlDiverState;

(function (PearlDiverState) {
  PearlDiverState[PearlDiverState["ready"] = 0] = "ready";
  PearlDiverState[PearlDiverState["searching"] = 1] = "searching";
  PearlDiverState[PearlDiverState["interrupted"] = -1] = "interrupted";
})(PearlDiverState = exports.PearlDiverState || (exports.PearlDiverState = {}));

/***/ }),

/***/ "./dist/proofOfWorkWebGl.js":
/*!**********************************!*\
  !*** ./dist/proofOfWorkWebGl.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.49/node_modules/@babel/runtime/regenerator/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "@iota-pico/core/dist/helpers/numberHelper");

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "@iota-pico/core/dist/helpers/objectHelper");

var cryptoError_1 = __webpack_require__(/*! @iota-pico/crypto/dist/error/cryptoError */ "@iota-pico/crypto/dist/error/cryptoError");

var proofOfWorkBase_1 = __webpack_require__(/*! @iota-pico/crypto/dist/proofOfWork/proofOfWorkBase */ "@iota-pico/crypto/dist/proofOfWork/proofOfWorkBase");

var trytes_1 = __webpack_require__(/*! @iota-pico/data/dist/data/trytes */ "@iota-pico/data/dist/data/trytes");

var pearlDiver_1 = __webpack_require__(/*! ./pearlDiver/pearlDiver */ "./dist/pearlDiver/pearlDiver.js");
/**
 * ProofOfWork implementation using WebGL.
 */


var ProofOfWorkWebGl =
/*#__PURE__*/
function (_proofOfWorkBase_1$Pr) {
  _inherits(ProofOfWorkWebGl, _proofOfWorkBase_1$Pr);

  /**
   * Create a new instance of ProofOfWork.
   * @param webGLPlatform Provides platform specific functions, optional mostly used for testing.
   * @param timeService Service to get the time for attachments.
   */
  function ProofOfWorkWebGl(webGLPlatform, timeService) {
    var _this;

    _classCallCheck(this, ProofOfWorkWebGl);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProofOfWorkWebGl).call(this, timeService));

    if (objectHelper_1.ObjectHelper.isEmpty(webGLPlatform)) {
      _this._webGLPlatform = {
        getWindow: function getWindow() {
          return window;
        },
        getDocument: function getDocument(window) {
          return window.document;
        },
        getCanvas: function getCanvas(document) {
          return document.createElement("canvas");
        },
        getWebGL: function getWebGL(canvas) {
          var attr = {
            alpha: false,
            antialias: false
          };
          var gl = canvas.getContext("webgl2", attr);
          return gl;
        }
      };
    } else {
      _this._webGLPlatform = webGLPlatform;
    }

    return _this;
  }
  /**
   * Allow the proof of work to perform any initialization.
   * Will throw an exception if the implementation is not supported.
   * @returns Promise.
   */


  _createClass(ProofOfWorkWebGl, [{
    key: "initialize",
    value: function () {
      var _initialize = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        var _this2 = this;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _get(_getPrototypeOf(ProofOfWorkWebGl.prototype), "initialize", this).call(this);

              case 2:
                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  try {
                    pearlDiver_1.PearlDiver.initialize(_this2._webGLPlatform);
                    _this2._isInitialized = true;
                    resolve();
                  } catch (err) {
                    reject(err);
                  }
                }));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function initialize() {
        return _initialize.apply(this, arguments);
      };
    }()
    /**
     * Perform a proof of work on a single item.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */

  }, {
    key: "singlePow",
    value: function () {
      var _singlePow = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(trytes, minWeightMagnitude) {
        var nonce, trytesString, nonceString;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (this._isInitialized) {
                  _context2.next = 2;
                  break;
                }

                throw new cryptoError_1.CryptoError("WebGL is not initialized, have you called initialize");

              case 2:
                if (objectHelper_1.ObjectHelper.isType(trytes, trytes_1.Trytes)) {
                  _context2.next = 4;
                  break;
                }

                throw new cryptoError_1.CryptoError("The trytes must be an object of type Trytes");

              case 4:
                if (!(!numberHelper_1.NumberHelper.isInteger(minWeightMagnitude) || minWeightMagnitude <= 0)) {
                  _context2.next = 6;
                  break;
                }

                throw new cryptoError_1.CryptoError("The minWeightMagnitude must be > 0");

              case 6:
                _context2.next = 8;
                return pearlDiver_1.PearlDiver.instance.searchWithTrytes(trytes, minWeightMagnitude);

              case 8:
                nonce = _context2.sent;
                trytesString = trytes.toString();
                nonceString = nonce.toString();
                return _context2.abrupt("return", trytes_1.Trytes.fromString(trytesString.substr(0, trytesString.length - nonceString.length).concat(nonceString)));

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function singlePow(_x, _x2) {
        return _singlePow.apply(this, arguments);
      };
    }()
  }]);

  return ProofOfWorkWebGl;
}(proofOfWorkBase_1.ProofOfWorkBase);

exports.ProofOfWorkWebGl = ProofOfWorkWebGl;

/***/ }),

/***/ "./dist/shaders/add.js":
/*!*****************************!*\
  !*** ./dist/shaders/add.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Shaders add.
 */

exports.default = "\nint sum (int a, int b) {\n  int my_sum = a + b;\n  return my_sum == 2 ? -1 : (my_sum == -2) ? 1 : my_sum;\n}\nint cons (int a, int b) {\n  return (a == 1 && b == 1)? 1 : (a == -1 && b == -1) ? -1 : 0;\n}\nint any_t (int a, int b) {\n  int my_any = a + b;\n  return my_any == 0 ? 0 : (my_any > 0) ? 1 : -1;\n}\nivec2 full_adder(int a, int b, int c) {\n  int c_a, c_b, sum_ab, c_s;\n\n  c_a    = cons(a,b);\n  sum_ab = sum(a,b);\n  c_b    = cons(sum_ab,c);\n  c_s    = any_t(c_a, c_b);\n\n  return ivec2(sum(sum_ab, c), c_s);\n}\nivec2 get_sum_to_index(int from, int to, int number_to_add, int row) {\n  int trit_to_add, trit_at_index, pow, carry, num_carry;\n  ivec2 read_in, sum_out, out_trit;\n  pow = 1;\n  carry = 0;\n  num_carry = 0;\n\n  for(int i = from; i < to; i++) {\n    //if(trit_to_add == 0 && sum_out.t == 0) continue;\n\n    read_in = read_at ( ivec2 (i, row)).rg;\n\n    trit_to_add = ((number_to_add / pow) % 3) + num_carry;\n    num_carry = trit_to_add > 1 ? 1 : 0;\n    trit_to_add = (trit_to_add == 2 ? -1 : (trit_to_add == 3 ? 0 : trit_to_add));\n\n    sum_out = full_adder(\n      (read_in.s == LOW_BITS ? 1 : read_in.t == LOW_BITS? -1 : 0),\n      trit_to_add,\n      carry\n    );\n\n    if(my_coord.x == i) break;\n    carry = sum_out.t;\n    pow *=3;\n  }\n  if(sum_out.s == 0) {\n    return ivec2(HIGH_BITS);\n  } else if (sum_out.s == 1) {\n    return ivec2(LOW_BITS, HIGH_BITS);\n  } else {\n    return ivec2(HIGH_BITS, LOW_BITS);\n  }\n}\n";

/***/ }),

/***/ "./dist/shaders/checkCol.js":
/*!**********************************!*\
  !*** ./dist/shaders/checkCol.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Shaders check_col.
 */

exports.default = "\nvoid main() {\n  init();\n  ivec4 my_vec = read();\n  int i;\n  if(my_coord.x == STATE_LENGTH && my_coord.y == 0) {\n    my_vec.b = 0;\n    if(my_vec.a == 0) {\n      ivec4 read_vec;\n      my_vec.b = -1;\n      for(i = 1; i < int(size.y); i++) {\n        read_vec = read_at( ivec2( STATE_LENGTH, i));\n        if(read_vec.a != 0) {\n          my_vec.a = read_vec.a;\n          my_vec.b = i;\n          break;\n        }\n      }\n    }\n  }\n  commit(my_vec);\n}\n";

/***/ }),

/***/ "./dist/shaders/checkDo.js":
/*!*********************************!*\
  !*** ./dist/shaders/checkDo.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Shaders check_do.
 */

exports.default = "\nint check(int row, int min_weight_magnitude) {\n  int nonce_probe, i;\n  ivec2 r_texel;\n  nonce_probe = HIGH_BITS;\n  for(i = min_weight_magnitude; i-- > 0; ) {\n    r_texel = read_at(ivec2(HASH_LENGTH - 1 - i, row)).ba;\n    nonce_probe &= ~(r_texel.s ^ r_texel.t);\n    if(nonce_probe == 0) break;\n  }\n  return nonce_probe;\n}\n";

/***/ }),

/***/ "./dist/shaders/checkK.js":
/*!********************************!*\
  !*** ./dist/shaders/checkK.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Shaders check_k.
 */

exports.default = "\nuniform int minWeightMagnitude;\nvoid main() {\n  init();\n  ivec4 my_vec = read();\n  if(my_coord.x == STATE_LENGTH) {\n    my_vec.r = minWeightMagnitude;\n    my_vec.a = check(my_coord.y, minWeightMagnitude);\n  }\n  commit(my_vec);\n}\n";

/***/ }),

/***/ "./dist/shaders/finalize.js":
/*!**********************************!*\
  !*** ./dist/shaders/finalize.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Shaders finalize.
 */

exports.default = "\nvoid main() {\n  init();\n  ivec4 my_vec = read();\n  if(my_coord.y == 0 && my_coord.x == STATE_LENGTH) {\n    my_vec.g = check(my_vec.b, my_vec.r);\n  }\n  if(my_coord.y == 0 && my_coord.x < HASH_LENGTH) {\n    ivec4 info_vec = read_at(ivec2(STATE_LENGTH, 0));\n    int nonce_probe = info_vec.a;\n    int row = info_vec.b;\n    ivec4 hash_vec = read_at(ivec2(my_coord.x, row));\n    my_vec.a = (hash_vec.r & nonce_probe) == 0? 1 : ((hash_vec.g & nonce_probe) == 0? -1 : 0);\n  }\n  commit(my_vec);\n}\n";

/***/ }),

/***/ "./dist/shaders/headers.js":
/*!*********************************!*\
  !*** ./dist/shaders/headers.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Shaders add.
 */

exports.default = "\n#define HASH_LENGTH 243\n#define NUMBER_OF_ROUNDS 81\n#define INCREMENT_START HASH_LENGTH - 64\n#define STATE_LENGTH 3 * HASH_LENGTH\n#define HALF_LENGTH 364\n#define HIGH_BITS 0xFFFFFFFF\n#define LOW_BITS 0x00000000\n";

/***/ }),

/***/ "./dist/shaders/increment.js":
/*!***********************************!*\
  !*** ./dist/shaders/increment.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Shaders increment.
 */

exports.default = "\nvoid main() {\n  init();\n  ivec4 my_vec = read();\n  if(my_coord.x >= INCREMENT_START && my_coord.x < HASH_LENGTH ) {\n    my_vec.rg = get_sum_to_index(INCREMENT_START, HASH_LENGTH, 1, my_coord.y);\n  }\n  if(my_coord.x == STATE_LENGTH ) {\n    my_vec.rg = ivec2(0);\n  }\n  my_vec.ba = my_vec.rg;\n  commit(my_vec);\n}\n";

/***/ }),

/***/ "./dist/shaders/init.js":
/*!******************************!*\
  !*** ./dist/shaders/init.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Shaders init.
 */

exports.default = "\nuniform int gr_offset;\nivec4 offset() {\n  if(my_coord.x >= HASH_LENGTH / 3 && my_coord.x < HASH_LENGTH / 3 * 2 ) {\n    ivec4 my_vec;\n    my_vec.rg = get_sum_to_index(HASH_LENGTH / 3, HASH_LENGTH / 3 * 2, my_coord.y + gr_offset, 0);\n    return my_vec;\n  } else {\n    return read_at(ivec2(my_coord.x,0));\n  }\n}\nvoid main() {\n  init();\n  commit(offset());\n}\n";

/***/ }),

/***/ "./dist/shaders/transform.js":
/*!***********************************!*\
  !*** ./dist/shaders/transform.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Shaders transform.
 */

exports.default = "\nivec2 twist() {\n  int alpha, beta, gamma, delta;\n  ivec4 v1, v2;\n  int j = my_coord.x;\n\n  v1 = read_at(ivec2(j == 0? 0:(((j - 1)%2)+1)*HALF_LENGTH - ((j-1)>>1), my_coord.y));\n  v2 = read_at(ivec2(((j%2)+1)*HALF_LENGTH - ((j)>>1), my_coord.y));\n  alpha = v1.b;\n  beta = v1.a;\n  gamma = v2.a;\n  delta = (alpha | (~gamma)) & (v2.b ^ beta);//v2.b === state_low[t2]\n\n  return ivec2(~delta, (alpha ^ gamma) | delta);\n}\nvoid main() {\n  init();\n  ivec4 my_vec = read();\n  if(my_coord.x < STATE_LENGTH)\n    my_vec.ba = twist();\n  commit(my_vec);\n}\n";

/***/ }),

/***/ "./dist/webGL/stdlib.js":
/*!******************************!*\
  !*** ./dist/webGL/stdlib.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Stdlib.
 */

exports.default = "#version 300 es\nprecision highp float;\nprecision highp int;\nprecision highp isampler2D;\nuniform isampler2D u_texture;\nin vec2 pos;\nout ivec4 color;\n//out int isFinished;\n\nvec2 size;\nivec2 my_coord;\n\nvoid init(void) {\n  //size = vec2(textureSize(u_texture, 0) - 1);\n  size = vec2(textureSize(u_texture, 0));\n  my_coord = ivec2(pos * size);\n}\n\nivec4 read(void) {\n  return texture(u_texture, pos);\n}\n\nivec4 read_at(ivec2 coord) {\n  return texelFetch(u_texture, coord, 0);\n}\n\nvoid commit(ivec4 val) {\n  color = val;\n}\n";

/***/ }),

/***/ "./dist/webGL/vertexShaderCode.js":
/*!****************************************!*\
  !*** ./dist/webGL/vertexShaderCode.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Vertex Shader code.
 */

exports.default = "#version 300 es\nlayout(location = 0) in vec2 position;\nlayout(location = 1) in vec2 texture;\nout vec2 pos;\n\nvoid main(void) {\n  pos = texture;\n  gl_Position = vec4(position.xy, 0.0, 1.0);\n}";

/***/ }),

/***/ "./dist/webGL/webGLHelper.js":
/*!***********************************!*\
  !*** ./dist/webGL/webGLHelper.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "@iota-pico/core/dist/helpers/objectHelper");

var cryptoError_1 = __webpack_require__(/*! @iota-pico/crypto/dist/error/cryptoError */ "@iota-pico/crypto/dist/error/cryptoError");
/**
 * Helper functions for use with WebGL.
 */


var WebGLHelper =
/*#__PURE__*/
function () {
  function WebGLHelper() {
    _classCallCheck(this, WebGLHelper);
  }

  _createClass(WebGLHelper, null, [{
    key: "createContext",

    /**
     * Create a WebGL Context.
     * @param webGLPlatform The platform to create the context with.
     * @returns The context if successfuly or throws an error if it cannot be created.
     */
    value: function createContext(webGLPlatform) {
      var window = webGLPlatform.getWindow();

      if (!objectHelper_1.ObjectHelper.isEmpty(window) && typeof window !== "undefined") {
        var document = webGLPlatform.getDocument(window);

        if (!objectHelper_1.ObjectHelper.isEmpty(document)) {
          var canvas = webGLPlatform.getCanvas(document);

          if (!objectHelper_1.ObjectHelper.isEmpty(canvas)) {
            var gl = webGLPlatform.getWebGL(canvas);

            if (objectHelper_1.ObjectHelper.isEmpty(gl)) {
              throw new cryptoError_1.CryptoError("Can not create a WebGL context on a <canvas> element.", {
                userAgent: window.navigator.userAgent
              });
            }

            return gl;
          } else {
            throw new cryptoError_1.CryptoError("The HTML5 <canvas> element is not available in your browser.", {
              userAgent: window.navigator.userAgent
            });
          }
        } else {
          throw new cryptoError_1.CryptoError("window.document is not available, you must be running in an environment with WebGL.");
        }
      } else {
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

  }, {
    key: "createBuffer",
    value: function createBuffer(gl, data, arrayType, target) {
      var buf = gl.createBuffer();
      gl.bindBuffer(target || gl.ARRAY_BUFFER, buf);
      gl.bufferData(target || gl.ARRAY_BUFFER, new (arrayType || Float32Array)(data), gl.STATIC_DRAW);
      return buf;
    }
    /**
     * Transfer data onto clamped texture and turn off any filtering
     * @param gl The WebGL rendering context.
     * @param pixelData The pixel data to create the view from.
     * @param dimensions The dimensions to create the texture.
     * @returns The texture.
     */

  }, {
    key: "createTexture",
    value: function createTexture(gl, pixelData, dimensions) {
      var texture = gl.createTexture();
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

  }, {
    key: "frameBufferSetTexture",
    value: function frameBufferSetTexture(gl, frameBuffer, texture) {
      gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0); // Test for mobile bug MDN->WebGL_best_practices, bullet 7

      var frameBufferStatus = gl.checkFramebufferStatus(gl.FRAMEBUFFER);

      if (frameBufferStatus !== gl.FRAMEBUFFER_COMPLETE) {
        throw new cryptoError_1.CryptoError("Error attaching float texture to framebuffer. Your device is probably incompatible.");
      }
    }
  }]);

  return WebGLHelper;
}();

exports.WebGLHelper = WebGLHelper;

/***/ }),

/***/ "./dist/webGL/webGLWorker.js":
/*!***********************************!*\
  !*** ./dist/webGL/webGLWorker.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cryptoError_1 = __webpack_require__(/*! @iota-pico/crypto/dist/error/cryptoError */ "@iota-pico/crypto/dist/error/cryptoError");

var stdlib_1 = __importDefault(__webpack_require__(/*! ./stdlib */ "./dist/webGL/stdlib.js"));

var vertexShaderCode_1 = __importDefault(__webpack_require__(/*! ./vertexShaderCode */ "./dist/webGL/vertexShaderCode.js"));

var webGLHelper_1 = __webpack_require__(/*! ./webGLHelper */ "./dist/webGL/webGLHelper.js");
/**
 * WebGLWorker.
 */


var WebGLWorker =
/*#__PURE__*/
function () {
  function WebGLWorker() {
    _classCallCheck(this, WebGLWorker);
  }

  _createClass(WebGLWorker, [{
    key: "initialize",

    /**
     * Initialize the web GL Worker.
     * @param webGLPlatform The webGL platform.
     * @param stateLength The length of the state.
     * @param texelSize The texel size.
     */
    value: function initialize(webGLPlatform, stateLength, texelSize) {
      this._context = webGLHelper_1.WebGLHelper.createContext(webGLPlatform);
      this._dimensions = {
        x: stateLength,
        y: 0
      };
      var maxImageSize = Math.pow(this._context.MAX_TEXTURE_SIZE, 2) * 0.5;
      var imageSize = Math.floor(maxImageSize / this._dimensions.x / texelSize) * this._dimensions.x * texelSize;
      this._dimensions.y = imageSize / this._dimensions.x / texelSize;
      this._programs = new Map();
      this._ipt = {
        data: new Int32Array(imageSize),
        length: imageSize
      }; // GPU texture buffer = from JS typed array

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

  }, {
    key: "getDimensions",
    value: function getDimensions() {
      return this._dimensions;
    }
    /**
     * Get the IPT from the worker.
     * @returns The ipt.
     */

  }, {
    key: "getIpt",
    value: function getIpt() {
      return this._ipt;
    }
    /**
     * Add a program to the worker.
     * @param name The name of the program to add.
     * @param code The code for the program.
     * @param uniforms Additional uniform locations.
     */

  }, {
    key: "addProgram",
    value: function addProgram(name, code) {
      var fragmentShader = this.createFragmentShader(code);

      var program = this._context.createProgram();

      this._context.attachShader(program, this._vertexShader);

      this._context.attachShader(program, fragmentShader);

      this._context.bindAttribLocation(program, this._attrib.position, "position");

      this._context.bindAttribLocation(program, this._attrib.texture, "texture");

      this._context.linkProgram(program);

      var uniformVars = new Map();

      for (var _len = arguments.length, uniforms = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        uniforms[_key - 2] = arguments[_key];
      }

      for (var _i = 0; _i < uniforms.length; _i++) {
        var variable = uniforms[_i];
        uniformVars.set(variable, this._context.getUniformLocation(program, variable));
      }

      this._programs.set(name, {
        program: program,
        uniformVars: uniformVars
      });
    }
    /**
     * Run the program in the web worker.
     * @param name The name of the program to run.
     * @param count The number of times to run it.
     * @param uniforms Additional uniform locations to use.
     */

  }, {
    key: "runProgram",
    value: function runProgram(name, count) {
      var info = this._programs.get(name);

      var program = info.program;

      if (!this._context.getProgramParameter(program, this._context.LINK_STATUS)) {
        throw new cryptoError_1.CryptoError("Failed to link GLSL program code");
      }

      var uniformVars = info.uniformVars;

      var uTexture = this._context.getUniformLocation(program, "u_texture");

      this._context.useProgram(program);

      var localCount = count;

      for (var _len2 = arguments.length, uniforms = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        uniforms[_key2 - 2] = arguments[_key2];
      }

      while (localCount-- > 0) {
        this._context.bindTexture(this._context.TEXTURE_2D, this._texture0);

        this._context.activeTexture(this._context.TEXTURE0);

        this._context.uniform1i(uTexture, 0);

        this._context.viewport(0, 0, this._dimensions.x, this._dimensions.y);

        webGLHelper_1.WebGLHelper.frameBufferSetTexture(this._context, this._frameBuffer, this._texture1);

        this._context.bindVertexArray(this._vertexArray);

        for (var _i2 = 0; _i2 < uniforms.length; _i2++) {
          var uVars = uniforms[_i2];

          this._context.uniform1i(uniformVars.get(uVars.name), uVars.value);
        }

        this._context.drawElements(this._context.TRIANGLES, 6, this._context.UNSIGNED_SHORT, 0);

        var tex0 = this._texture0;
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

  }, {
    key: "readData",
    value: function readData(x, y, n, m) {
      this._context.bindFramebuffer(this._context.FRAMEBUFFER, this._frameBuffer);

      this._context.readPixels(x, y, n, m, this._context.RGBA_INTEGER, this._context.INT, this._ipt.data);

      this._context.bindFramebuffer(this._context.FRAMEBUFFER, null);

      return this._ipt.data.subarray(0, this._ipt.length);
    }
    /**
     * Write data to the worker.
     * @param data The data to write.
     */

  }, {
    key: "writeData",
    value: function writeData(data) {
      this._context.bindTexture(this._context.TEXTURE_2D, this._texture0);

      this._context.texImage2D(this._context.TEXTURE_2D, 0, this._context.RGBA32I, this._dimensions.x, this._dimensions.y, 0, this._context.RGBA_INTEGER, this._context.INT, data);

      this._context.bindTexture(this._context.TEXTURE_2D, null);
    }
    /* @internal */

  }, {
    key: "bindBuffers",
    value: function bindBuffers() {
      this._context.bindBuffer(this._context.ARRAY_BUFFER, this._buffers.texture);

      this._context.enableVertexAttribArray(this._attrib.texture);

      this._context.vertexAttribPointer(this._attrib.texture, 2, this._context.FLOAT, false, 0, 0);

      this._context.bindBuffer(this._context.ARRAY_BUFFER, this._buffers.position);

      this._context.enableVertexAttribArray(this._attrib.position);

      this._context.vertexAttribPointer(this._attrib.position, 2, this._context.FLOAT, false, 0, 0);

      this._context.bindBuffer(this._context.ELEMENT_ARRAY_BUFFER, this._buffers.index);
    }
    /* @internal */

  }, {
    key: "createVertexShader",
    value: function createVertexShader() {
      this._vertexShader = this._context.createShader(this._context.VERTEX_SHADER);

      this._context.shaderSource(this._vertexShader, vertexShaderCode_1.default);

      this._context.compileShader(this._vertexShader); // This should not fail.


      if (!this._context.getShaderParameter(this._vertexShader, this._context.COMPILE_STATUS)) {
        throw new cryptoError_1.CryptoError("Could not build vertex shader.\n\n--- CODE DUMP ---".concat(vertexShaderCode_1.default, "\n\n--- ERROR LOG ---\n").concat(this._context.getShaderInfoLog(this._vertexShader)));
      }
    }
    /* @internal */

  }, {
    key: "createFragmentShader",
    value: function createFragmentShader(code) {
      var fragmentShader = this._context.createShader(this._context.FRAGMENT_SHADER);

      this._context.shaderSource(fragmentShader, stdlib_1.default + code);

      this._context.compileShader(fragmentShader); // Use this output to debug the shader
      // Keep in mind that WebGL GLSL is **much** stricter than e.g. OpenGL GLSL


      if (!this._context.getShaderParameter(fragmentShader, this._context.COMPILE_STATUS)) {
        var codeLines = code.split("\n");
        var dbgMsg = "Could not build fragment shader.\n\n------------------ KERNEL CODE DUMP ------------------\n";

        for (var nl = 0; nl < codeLines.length; nl++) {
          dbgMsg += "".concat(stdlib_1.default.split("\n").length + nl, "> ").concat(codeLines[nl], "\n");
        }

        dbgMsg += "\n--------------------- ERROR  LOG ---------------------\n".concat(this._context.getShaderInfoLog(fragmentShader));
        throw new cryptoError_1.CryptoError(dbgMsg);
      }

      return fragmentShader;
    }
    /* @internal */

  }, {
    key: "finishRun",
    value: function finishRun() {
      this._context.bindVertexArray(null);

      this._context.bindTexture(this._context.TEXTURE_2D, null);

      this._context.bindFramebuffer(this._context.FRAMEBUFFER, null);
    }
  }]);

  return WebGLWorker;
}();

exports.WebGLWorker = WebGLWorker;

/***/ }),

/***/ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.49/node_modules/@babel/runtime/regenerator/index.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.49/node_modules/@babel/runtime/regenerator/index.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvLi4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvLi4vLi4vc3JjL3BlYXJsRGl2ZXIvcGVhcmxEaXZlci50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsLy4uLy4uL3NyYy9wZWFybERpdmVyL3BlYXJsRGl2ZXJTdGF0ZS50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsLy4uL3NyYy9wcm9vZk9mV29ya1dlYkdsLnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvLi4vLi4vc3JjL3NoYWRlcnMvYWRkLnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvLi4vLi4vc3JjL3NoYWRlcnMvY2hlY2tDb2wudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dXZWJnbC8uLi8uLi9zcmMvc2hhZGVycy9jaGVja0RvLnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvLi4vLi4vc3JjL3NoYWRlcnMvY2hlY2tLLnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvLi4vLi4vc3JjL3NoYWRlcnMvZmluYWxpemUudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dXZWJnbC8uLi8uLi9zcmMvc2hhZGVycy9oZWFkZXJzLnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvLi4vLi4vc3JjL3NoYWRlcnMvaW5jcmVtZW50LnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvLi4vLi4vc3JjL3NoYWRlcnMvaW5pdC50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsLy4uLy4uL3NyYy9zaGFkZXJzL3RyYW5zZm9ybS50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsLy4uLy4uL3NyYy93ZWJHTC9zdGRsaWIudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dXZWJnbC8uLi8uLi9zcmMvd2ViR0wvdmVydGV4U2hhZGVyQ29kZS50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsLy4uLy4uL3NyYy93ZWJHTC93ZWJHTEhlbHBlci50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsLy4uLy4uL3NyYy93ZWJHTC93ZWJHTFdvcmtlci50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvQGJhYmVsL3J1bnRpbWUvNy4wLjAtYmV0YS40OS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dXZWJnbC8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvMC4xMS4xL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9yZWdlbmVyYXRvci1ydW50aW1lLzAuMTEuMS9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvZXh0ZXJuYWwgXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvZXh0ZXJuYWwgXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvZXh0ZXJuYWwgXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L2Vycm9yL2NyeXB0b0Vycm9yXCIiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dXZWJnbC9leHRlcm5hbCBcIkBpb3RhLXBpY28vY3J5cHRvL2Rpc3QvZmFjdG9yaWVzL3Nwb25nZUZhY3RvcnlcIiIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsL2V4dGVybmFsIFwiQGlvdGEtcGljby9jcnlwdG8vZGlzdC9wcm9vZk9mV29yay9wcm9vZk9mV29ya0Jhc2VcIiIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsL2V4dGVybmFsIFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cml0c1wiIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvZXh0ZXJuYWwgXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyeXRlc1wiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7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OztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCOzs7Ozs7Ozs7Ozs7QUN0dEJBLHVGOzs7Ozs7Ozs7OztBQ0FBLHVGOzs7Ozs7Ozs7OztBQ0FBLHNGOzs7Ozs7Ozs7OztBQ0FBLDRGOzs7Ozs7Ozs7OztBQ0FBLGdHOzs7Ozs7Ozs7OztBQ0FBLDZFOzs7Ozs7Ozs7OztBQ0FBLDhFIiwiZmlsZSI6ImlvdGEtcGljby1wb3ctd2ViZ2wuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9jcnlwdG8vZGlzdC9lcnJvci9jcnlwdG9FcnJvclwiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vY3J5cHRvL2Rpc3QvZmFjdG9yaWVzL3Nwb25nZUZhY3RvcnlcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L3Byb29mT2ZXb3JrL3Byb29mT2ZXb3JrQmFzZVwiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJpdHNcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyeXRlc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkBpb3RhLXBpY28vcG93LXdlYmdsXCIsIFtcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIsIFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIiwgXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L2Vycm9yL2NyeXB0b0Vycm9yXCIsIFwiQGlvdGEtcGljby9jcnlwdG8vZGlzdC9mYWN0b3JpZXMvc3BvbmdlRmFjdG9yeVwiLCBcIkBpb3RhLXBpY28vY3J5cHRvL2Rpc3QvcHJvb2ZPZldvcmsvcHJvb2ZPZldvcmtCYXNlXCIsIFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cml0c1wiLCBcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJ5dGVzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBpb3RhLXBpY28vcG93LXdlYmdsXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vY3J5cHRvL2Rpc3QvZXJyb3IvY3J5cHRvRXJyb3JcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L2ZhY3Rvcmllcy9zcG9uZ2VGYWN0b3J5XCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9jcnlwdG8vZGlzdC9wcm9vZk9mV29yay9wcm9vZk9mV29ya0Jhc2VcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyaXRzXCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cnl0ZXNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIklvdGFQaWNvUG93V2ViZ2xcIl0gPSBmYWN0b3J5KHJvb3RbXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiXSwgcm9vdFtcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCJdLCByb290W1wiQGlvdGEtcGljby9jcnlwdG8vZGlzdC9lcnJvci9jcnlwdG9FcnJvclwiXSwgcm9vdFtcIkBpb3RhLXBpY28vY3J5cHRvL2Rpc3QvZmFjdG9yaWVzL3Nwb25nZUZhY3RvcnlcIl0sIHJvb3RbXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L3Byb29mT2ZXb3JrL3Byb29mT2ZXb3JrQmFzZVwiXSwgcm9vdFtcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJpdHNcIl0sIHJvb3RbXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyeXRlc1wiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NvcmVfZGlzdF9oZWxwZXJzX251bWJlckhlbHBlcl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fY29yZV9kaXN0X2hlbHBlcnNfb2JqZWN0SGVscGVyX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19jcnlwdG9fZGlzdF9lcnJvcl9jcnlwdG9FcnJvcl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fY3J5cHRvX2Rpc3RfZmFjdG9yaWVzX3Nwb25nZUZhY3RvcnlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NyeXB0b19kaXN0X3Byb29mT2ZXb3JrX3Byb29mT2ZXb3JrQmFzZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fZGF0YV9kaXN0X2RhdGFfdHJpdHNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2RhdGFfZGlzdF9kYXRhX3RyeXRlc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9kaXN0L2luZGV4LmpzXCIpO1xuIiwiZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIENvbWJpbmVkIGluZGV4IG9mIGFsbCB0aGUgbW9kdWxlcy5cclxuICovXHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3Byb29mT2ZXb3JrV2ViR2xcIikpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZhVzVrWlhndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96dEhRVVZITzBGQlEwZ3NkME5CUVcxREluMD0iLCJ2YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBzcG9uZ2VGYWN0b3J5XzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jcnlwdG8vZGlzdC9mYWN0b3JpZXMvc3BvbmdlRmFjdG9yeVwiKTtcclxuY29uc3QgdHJpdHNfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyaXRzXCIpO1xyXG5jb25zdCBhZGRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhZGVycy9hZGRcIikpO1xyXG5jb25zdCBjaGVja0NvbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFkZXJzL2NoZWNrQ29sXCIpKTtcclxuY29uc3QgY2hlY2tEb18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFkZXJzL2NoZWNrRG9cIikpO1xyXG5jb25zdCBjaGVja0tfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhZGVycy9jaGVja0tcIikpO1xyXG5jb25zdCBmaW5hbGl6ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFkZXJzL2ZpbmFsaXplXCIpKTtcclxuY29uc3QgaGVhZGVyc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFkZXJzL2hlYWRlcnNcIikpO1xyXG5jb25zdCBpbmNyZW1lbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhZGVycy9pbmNyZW1lbnRcIikpO1xyXG5jb25zdCBpbml0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL3NoYWRlcnMvaW5pdFwiKSk7XHJcbmNvbnN0IHRyYW5zZm9ybV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFkZXJzL3RyYW5zZm9ybVwiKSk7XHJcbmNvbnN0IHdlYkdMV29ya2VyXzEgPSByZXF1aXJlKFwiLi4vd2ViR0wvd2ViR0xXb3JrZXJcIik7XHJcbmNvbnN0IHBlYXJsRGl2ZXJTdGF0ZV8xID0gcmVxdWlyZShcIi4vcGVhcmxEaXZlclN0YXRlXCIpO1xyXG4vKipcclxuICogUGVhcmxEaXZlci5cclxuICogQ29udmVydGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2lvdGFsZWRnZXIvY3VybC5saWIuanMvYmxvYi9tYXN0ZXIvc3JjL3BlYXJsZGl2ZXIuanNcclxuICovXHJcbmNsYXNzIFBlYXJsRGl2ZXIge1xyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjb25zdHJ1Y3Rvcih3ZWJHTFBsYXRmb3JtKSB7XHJcbiAgICAgICAgdGhpcy5fd2ViR0xXb3JrZXIgPSBuZXcgd2ViR0xXb3JrZXJfMS5XZWJHTFdvcmtlcigpO1xyXG4gICAgICAgIGNvbnN0IGN1cmwgPSBzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLmNyZWF0ZShcImN1cmxcIik7XHJcbiAgICAgICAgdGhpcy5faGFzaExlbmd0aCA9IGN1cmwuZ2V0Q29uc3RhbnQoXCJIQVNIX0xFTkdUSFwiKTtcclxuICAgICAgICB0aGlzLl9zdGF0ZUxlbmd0aCA9IGN1cmwuZ2V0Q29uc3RhbnQoXCJTVEFURV9MRU5HVEhcIik7XHJcbiAgICAgICAgdGhpcy5fbnVtYmVyUm91bmRzID0gY3VybC5nZXRDb25zdGFudChcIk5VTUJFUl9PRl9ST1VORFNcIik7XHJcbiAgICAgICAgdGhpcy5fdHJhbnNhY3Rpb25MZW5ndGggPSB0aGlzLl9oYXNoTGVuZ3RoICogMzM7XHJcbiAgICAgICAgdGhpcy5fbm9uY2VMZW5ndGggPSB0aGlzLl9oYXNoTGVuZ3RoIC8gMztcclxuICAgICAgICB0aGlzLl9ub25jZVN0YXJ0ID0gdGhpcy5faGFzaExlbmd0aCAtIHRoaXMuX25vbmNlTGVuZ3RoO1xyXG4gICAgICAgIHRoaXMuX3dlYkdMV29ya2VyLmluaXRpYWxpemUod2ViR0xQbGF0Zm9ybSwgdGhpcy5fc3RhdGVMZW5ndGggKyAxLCBQZWFybERpdmVyLlRFWEVMX1NJWkUpO1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRCdWZmZXIgPSB0aGlzLl93ZWJHTFdvcmtlci5nZXRJcHQoKS5kYXRhO1xyXG4gICAgICAgIHRoaXMuX3dlYkdMV29ya2VyLmFkZFByb2dyYW0oXCJpbml0XCIsIGhlYWRlcnNfMS5kZWZhdWx0ICsgYWRkXzEuZGVmYXVsdCArIGluaXRfMS5kZWZhdWx0LCBcImdyX29mZnNldFwiKTtcclxuICAgICAgICB0aGlzLl93ZWJHTFdvcmtlci5hZGRQcm9ncmFtKFwiaW5jcmVtZW50XCIsIGhlYWRlcnNfMS5kZWZhdWx0ICsgYWRkXzEuZGVmYXVsdCArIGluY3JlbWVudF8xLmRlZmF1bHQpO1xyXG4gICAgICAgIHRoaXMuX3dlYkdMV29ya2VyLmFkZFByb2dyYW0oXCJ0d2lzdFwiLCBoZWFkZXJzXzEuZGVmYXVsdCArIHRyYW5zZm9ybV8xLmRlZmF1bHQpO1xyXG4gICAgICAgIHRoaXMuX3dlYkdMV29ya2VyLmFkZFByb2dyYW0oXCJjaGVja1wiLCBoZWFkZXJzXzEuZGVmYXVsdCArIGNoZWNrRG9fMS5kZWZhdWx0ICsgY2hlY2tLXzEuZGVmYXVsdCwgXCJtaW5XZWlnaHRNYWduaXR1ZGVcIik7XHJcbiAgICAgICAgdGhpcy5fd2ViR0xXb3JrZXIuYWRkUHJvZ3JhbShcImNvbF9jaGVja1wiLCBoZWFkZXJzXzEuZGVmYXVsdCArIGNoZWNrQ29sXzEuZGVmYXVsdCk7XHJcbiAgICAgICAgdGhpcy5fd2ViR0xXb3JrZXIuYWRkUHJvZ3JhbShcImZpbmFsaXplXCIsIGhlYWRlcnNfMS5kZWZhdWx0ICsgY2hlY2tEb18xLmRlZmF1bHQgKyBmaW5hbGl6ZV8xLmRlZmF1bHQpO1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gcGVhcmxEaXZlclN0YXRlXzEuUGVhcmxEaXZlclN0YXRlLnJlYWR5O1xyXG4gICAgICAgIHRoaXMuX3F1ZXVlID0gW107XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemUgdGhlIFBlYXJsRGl2ZXIgbWFpbiBpbnN0YW5jZS5cclxuICAgICAqIEBwYXJhbSB3ZWJHTFBsYXRmb3JtIFRoZSBwbGF0Zm9ybSBzbyBpbml0aWFsaXplIHRoZSBwZWFybCBkaXZlciB3aXRoLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaW5pdGlhbGl6ZSh3ZWJHTFBsYXRmb3JtKSB7XHJcbiAgICAgICAgaWYgKCFQZWFybERpdmVyLmluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIFBlYXJsRGl2ZXIuaW5zdGFuY2UgPSBuZXcgUGVhcmxEaXZlcih3ZWJHTFBsYXRmb3JtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENsb3NlZG93biB0aGUgUGVhcmxEaXZlciBtYWluIGluc3RhbmNlLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY2xvc2Vkb3duKCkge1xyXG4gICAgICAgIGlmIChQZWFybERpdmVyLmluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIFBlYXJsRGl2ZXIuaW5zdGFuY2UgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBQZXJmb3JtIGEgc2VhcmNoIHVzaW5nIHRyeXRlcy5cclxuICAgICAqIEBwYXJhbSB0cnl0ZXMgVGhlIHRyeXRlcyB0byBwZXJmb3JtIHRoZSBzZWFyY2ggb24uXHJcbiAgICAgKiBAcGFyYW0gbWluV2VpZ2h0TWFnbml0dWRlIFRoZSBtaW5pbXVtIHdlaWdodCBtYWduaXR1ZGUuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHdoaWNoIHJlc29sdmVzIHRvIHRoZSB0cnl0ZXMgZnJvbSB0aGUgc2VhcmNoLlxyXG4gICAgICovXHJcbiAgICBhc3luYyBzZWFyY2hXaXRoVHJ5dGVzKHRyeXRlcywgbWluV2VpZ2h0TWFnbml0dWRlKSB7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoU3RhdGVzID0gdGhpcy5wcmVwYXJlKHRyeXRlcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoKHNlYXJjaFN0YXRlcywgbWluV2VpZ2h0TWFnbml0dWRlKTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgcHJlcGFyZSh0cmFuc2FjdGlvblRyeXRlcykge1xyXG4gICAgICAgIGNvbnN0IGN1cmwgPSBzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLmNyZWF0ZShcImN1cmxcIik7XHJcbiAgICAgICAgY3VybC5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25Ucml0cyA9IHRyaXRzXzEuVHJpdHMuZnJvbVRyeXRlcyh0cmFuc2FjdGlvblRyeXRlcykudG9BcnJheSgpO1xyXG4gICAgICAgIGN1cmwuYWJzb3JiKHRyYW5zYWN0aW9uVHJpdHMsIDAsIHRoaXMuX3RyYW5zYWN0aW9uTGVuZ3RoIC0gdGhpcy5faGFzaExlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgY3VybFN0YXRlID0gY3VybC5nZXRTdGF0ZSgpO1xyXG4gICAgICAgIHRyYW5zYWN0aW9uVHJpdHNcclxuICAgICAgICAgICAgLnNsaWNlKHRoaXMuX3RyYW5zYWN0aW9uTGVuZ3RoIC0gdGhpcy5faGFzaExlbmd0aCwgdGhpcy5fdHJhbnNhY3Rpb25MZW5ndGgpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY3VybFN0YXRlW2luZGV4XSA9IHZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlYXJjaFRvUGFpcihjdXJsU3RhdGUpO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBhc3luYyBzZWFyY2goc3RhdGVzLCBtaW5XZWlnaHQpIHtcclxuICAgICAgICAvLyBwcm9taXNlIHdpbGwgY29tcGxldGUgd2hlbiB0aGUgc2VhcmNoIGhhcyBjb21wbGV0ZWRcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJvbWlzZS1tdXN0LWNvbXBsZXRlXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fcXVldWUucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZXM6IHN0YXRlcyxcclxuICAgICAgICAgICAgICAgIG1pbldlaWdodE1hZ25pdHVkZTogbWluV2VpZ2h0LFxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IHJlc29sdmVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gcGVhcmxEaXZlclN0YXRlXzEuUGVhcmxEaXZlclN0YXRlLnJlYWR5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaERvTmV4dCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHNlYXJjaFRvUGFpcihzdGF0ZSkge1xyXG4gICAgICAgIGNvbnN0IHN0YXRlcyA9IHtcclxuICAgICAgICAgICAgbG93OiBuZXcgSW50MzJBcnJheSh0aGlzLl9zdGF0ZUxlbmd0aCksXHJcbiAgICAgICAgICAgIGhpZ2g6IG5ldyBJbnQzMkFycmF5KHRoaXMuX3N0YXRlTGVuZ3RoKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc3RhdGUuZm9yRWFjaCgodHJpdCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgc3dpdGNoICh0cml0KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVzLmxvd1tpbmRleF0gPSBQZWFybERpdmVyLkhJR0hfQklUUztcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZXMuaGlnaFtpbmRleF0gPSBQZWFybERpdmVyLkhJR0hfQklUUztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZXMubG93W2luZGV4XSA9IFBlYXJsRGl2ZXIuTE9XX0JJVFM7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVzLmhpZ2hbaW5kZXhdID0gUGVhcmxEaXZlci5ISUdIX0JJVFM7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlcy5sb3dbaW5kZXhdID0gUGVhcmxEaXZlci5ISUdIX0JJVFM7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVzLmhpZ2hbaW5kZXhdID0gUGVhcmxEaXZlci5MT1dfQklUUztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoT2Zmc2V0KHN0YXRlcywgdGhpcy5fbm9uY2VTdGFydCk7XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlcztcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgc2VhcmNoT2Zmc2V0KHN0YXRlcywgb2Zmc2V0KSB7XHJcbiAgICAgICAgc3RhdGVzLmxvd1tvZmZzZXQgKyAwXSA9IFBlYXJsRGl2ZXIuTE9XXzA7XHJcbiAgICAgICAgc3RhdGVzLmxvd1tvZmZzZXQgKyAxXSA9IFBlYXJsRGl2ZXIuTE9XXzE7XHJcbiAgICAgICAgc3RhdGVzLmxvd1tvZmZzZXQgKyAyXSA9IFBlYXJsRGl2ZXIuTE9XXzI7XHJcbiAgICAgICAgc3RhdGVzLmxvd1tvZmZzZXQgKyAzXSA9IFBlYXJsRGl2ZXIuTE9XXzM7XHJcbiAgICAgICAgc3RhdGVzLmhpZ2hbb2Zmc2V0ICsgMF0gPSBQZWFybERpdmVyLkhJR0hfMDtcclxuICAgICAgICBzdGF0ZXMuaGlnaFtvZmZzZXQgKyAxXSA9IFBlYXJsRGl2ZXIuSElHSF8xO1xyXG4gICAgICAgIHN0YXRlcy5oaWdoW29mZnNldCArIDJdID0gUGVhcmxEaXZlci5ISUdIXzI7XHJcbiAgICAgICAgc3RhdGVzLmhpZ2hbb2Zmc2V0ICsgM10gPSBQZWFybERpdmVyLkhJR0hfMztcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgc2VhcmNoRG9OZXh0KCkge1xyXG4gICAgICAgIGNvbnN0IG5leHQgPSB0aGlzLl9xdWV1ZS5zaGlmdCgpO1xyXG4gICAgICAgIGlmIChvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eShuZXh0KSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IHBlYXJsRGl2ZXJTdGF0ZV8xLlBlYXJsRGl2ZXJTdGF0ZS5yZWFkeTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gcGVhcmxEaXZlclN0YXRlXzEuUGVhcmxEaXZlclN0YXRlLnNlYXJjaGluZztcclxuICAgICAgICAgICAgdGhpcy53ZWJHTEZpbmROb25jZShuZXh0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHdlYkdMRmluZE5vbmNlKHNlYXJjaE9iamVjdCkge1xyXG4gICAgICAgIHRoaXMud2ViR0xXcml0ZUJ1ZmZlcnMoc2VhcmNoT2JqZWN0LnN0YXRlcyk7XHJcbiAgICAgICAgdGhpcy5fd2ViR0xXb3JrZXIud3JpdGVEYXRhKHRoaXMuX2N1cnJlbnRCdWZmZXIpO1xyXG4gICAgICAgIHRoaXMuX3dlYkdMV29ya2VyLnJ1blByb2dyYW0oXCJpbml0XCIsIDEsIHsgbmFtZTogXCJncl9vZmZzZXRcIiwgdmFsdWU6IDAgfSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLndlYkdMU2VhcmNoKHNlYXJjaE9iamVjdCksIDEpO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICB3ZWJHTFdyaXRlQnVmZmVycyhzdGF0ZXMpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3N0YXRlTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudEJ1ZmZlcltpICogUGVhcmxEaXZlci5URVhFTF9TSVpFXSA9IHN0YXRlcy5sb3dbaV07XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRCdWZmZXJbaSAqIFBlYXJsRGl2ZXIuVEVYRUxfU0laRSArIDFdID0gc3RhdGVzLmhpZ2hbaV07XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRCdWZmZXJbaSAqIFBlYXJsRGl2ZXIuVEVYRUxfU0laRSArIDJdID0gc3RhdGVzLmxvd1tpXTtcclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudEJ1ZmZlcltpICogUGVhcmxEaXZlci5URVhFTF9TSVpFICsgM10gPSBzdGF0ZXMuaGlnaFtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHdlYkdMU2VhcmNoKHNlYXJjaE9iamVjdCkge1xyXG4gICAgICAgIHRoaXMuX3dlYkdMV29ya2VyLnJ1blByb2dyYW0oXCJpbmNyZW1lbnRcIiwgMSk7XHJcbiAgICAgICAgdGhpcy5fd2ViR0xXb3JrZXIucnVuUHJvZ3JhbShcInR3aXN0XCIsIHRoaXMuX251bWJlclJvdW5kcyk7XHJcbiAgICAgICAgdGhpcy5fd2ViR0xXb3JrZXIucnVuUHJvZ3JhbShcImNoZWNrXCIsIDEsIHsgbmFtZTogXCJtaW5XZWlnaHRNYWduaXR1ZGVcIiwgdmFsdWU6IHNlYXJjaE9iamVjdC5taW5XZWlnaHRNYWduaXR1ZGUgfSk7XHJcbiAgICAgICAgdGhpcy5fd2ViR0xXb3JrZXIucnVuUHJvZ3JhbShcImNvbF9jaGVja1wiLCAxKTtcclxuICAgICAgICBpZiAodGhpcy5fd2ViR0xXb3JrZXIucmVhZERhdGEodGhpcy5fc3RhdGVMZW5ndGgsIDAsIDEsIDEpWzJdID09PSAtMSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMud2ViR0xTZWFyY2goc2VhcmNoT2JqZWN0KSwgMTApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fd2ViR0xXb3JrZXIucnVuUHJvZ3JhbShcImZpbmFsaXplXCIsIDEpO1xyXG4gICAgICAgICAgICBjb25zdCBub25jZSA9IHRoaXMuX3dlYkdMV29ya2VyLnJlYWREYXRhKDAsIDAsIHRoaXMuX3dlYkdMV29ya2VyLmdldERpbWVuc2lvbnMoKS54LCAxKVxyXG4gICAgICAgICAgICAgICAgLnJlZHVjZSh0aGlzLnBhY2soNCksIFtdKVxyXG4gICAgICAgICAgICAgICAgLnNsaWNlKDAsIHRoaXMuX2hhc2hMZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAubWFwKHggPT4geFszXSk7XHJcbiAgICAgICAgICAgIHNlYXJjaE9iamVjdC5jYWxsYmFjayh0cml0c18xLlRyaXRzLmZyb21OdW1iZXJBcnJheShub25jZSkudG9Ucnl0ZXMoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoRG9OZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBwYWNrKGwpIHtcclxuICAgICAgICByZXR1cm4gKHIsIGN1cnJlbnRWYWx1ZSwgY3VycmVudEluZGV4KSA9PiAoY3VycmVudEluZGV4ICUgbCA9PT0gMCA/IHIucHVzaChbY3VycmVudFZhbHVlXSkgOiByW3IubGVuZ3RoIC0gMV0ucHVzaChjdXJyZW50VmFsdWUpKSAmJiByO1xyXG4gICAgfVxyXG59XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5QZWFybERpdmVyLlRFWEVMX1NJWkUgPSA0O1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuUGVhcmxEaXZlci5MT1dfQklUUyA9IDA7IC8vIDAwMDAwMDAwXHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5QZWFybERpdmVyLkhJR0hfQklUUyA9IC0xOyAvLyAweEZGRkZGRkZGLEZGRkZGRkZGLDQyOTQ5NjcyOTVcclxuLyogQGludGVybmFsICovXHJcblBlYXJsRGl2ZXIuTE9XXzAgPSAweERCNkRCNkRCOyAvLyA2REI2REI2RCxcclxuLyogQGludGVybmFsICovXHJcblBlYXJsRGl2ZXIuTE9XXzEgPSAweEYxRjhGQzdFOyAvLyAzRjFGOEZDNyxcclxuLyogQGludGVybmFsICovXHJcblBlYXJsRGl2ZXIuTE9XXzIgPSAweDdGRkZFMDBGOyAvLyBGRkZDMDFGRixcclxuLyogQGludGVybmFsICovXHJcblBlYXJsRGl2ZXIuTE9XXzMgPSAweEZGQzAwMDAwOyAvLyAwN0ZGRkZGRixcclxuLyogQGludGVybmFsICovXHJcblBlYXJsRGl2ZXIuSElHSF8wID0gMHhCNkRCNkRCNjsgLy8gREI2REI2REIsXHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5QZWFybERpdmVyLkhJR0hfMSA9IDB4OEZDN0UzRjE7IC8vIEY4RkM3RTNGLFxyXG4vKiBAaW50ZXJuYWwgKi9cclxuUGVhcmxEaXZlci5ISUdIXzIgPSAweEZGQzAxRkZGOyAvLyBGODAzRkZGRixcclxuLyogQGludGVybmFsICovXHJcblBlYXJsRGl2ZXIuSElHSF8zID0gMHgwMDNGRkZGRjsgLy9GRkZGRkZGRixcclxuZXhwb3J0cy5QZWFybERpdmVyID0gUGVhcmxEaXZlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0dWaGNteEVhWFpsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTl3WldGeWJFUnBkbVZ5TDNCbFlYSnNSR2wyWlhJdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQkxEUkZRVUY1UlR0QlFVTjZSU3hyUmtGQkswVTdRVUZETDBVc01rUkJRWGRFTzBGQlIzaEVMSGxFUVVGcFF6dEJRVU5xUXl4dFJVRkJNa003UVVGRE0wTXNhVVZCUVhsRE8wRkJRM3BETEN0RVFVRjFRenRCUVVOMlF5eHRSVUZCTWtNN1FVRkRNME1zYVVWQlFYbERPMEZCUTNwRExIRkZRVUUyUXp0QlFVTTNReXd5UkVGQmJVTTdRVUZEYmtNc2NVVkJRVFpETzBGQlF6ZERMSE5FUVVGdFJEdEJRVWR1UkN4MVJFRkJiMFE3UVVGRGNFUTdPenRIUVVkSE8wRkJRMGc3U1VGblJFa3NaVUZCWlR0SlFVTm1MRmxCUVc5Q0xHRkJRVFpDTzFGQlF6ZERMRWxCUVVrc1EwRkJReXhaUVVGWkxFZEJRVWNzU1VGQlNTeDVRa0ZCVnl4RlFVRkZMRU5CUVVNN1VVRkRkRU1zVFVGQlRTeEpRVUZKTEVkQlFVY3NOa0pCUVdFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkRja1FzU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETzFGQlEyNUVMRWxCUVVrc1EwRkJReXhaUVVGWkxFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4alFVRmpMRU5CUVVNc1EwRkJRenRSUVVOeVJDeEpRVUZKTEVOQlFVTXNZVUZCWVN4SFFVRkhMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1EwRkJRenRSUVVNeFJDeEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRhRVFzU1VGQlNTeERRVUZETEZsQlFWa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU42UXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExFbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJRenRSUVVWNFJDeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRlZCUVZVc1EwRkJReXhoUVVGaExFVkJRVVVzU1VGQlNTeERRVUZETEZsQlFWa3NSMEZCUnl4RFFVRkRMRVZCUVVVc1ZVRkJWU3hEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETzFGQlF6RkdMRWxCUVVrc1EwRkJReXhqUVVGakxFZEJRVWNzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU03VVVGRGRFUXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhWUVVGVkxFTkJRVU1zVFVGQlRTeEZRVUZGTEdsQ1FVRlBMRWRCUVVjc1lVRkJSeXhIUVVGSExHTkJRVWtzUlVGQlJTeFhRVUZYTEVOQlFVTXNRMEZCUXp0UlFVTjRSU3hKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEZWQlFWVXNRMEZCUXl4WFFVRlhMRVZCUVVVc2FVSkJRVThzUjBGQlJ5eGhRVUZITEVkQlFVY3NiVUpCUVZNc1EwRkJReXhEUVVGRE8xRkJRM0pGTEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFOUJRVThzUlVGQlJTeHBRa0ZCVHl4SFFVRkhMRzFDUVVGVExFTkJRVU1zUTBGQlF6dFJRVU16UkN4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExGVkJRVlVzUTBGQlF5eFBRVUZQTEVWQlFVVXNhVUpCUVU4c1IwRkJSeXhwUWtGQlR5eEhRVUZITEdkQ1FVRk5MRVZCUVVVc2IwSkJRVzlDTEVOQlFVTXNRMEZCUXp0UlFVTjRSaXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEZWQlFWVXNRMEZCUXl4WFFVRlhMRVZCUVVVc2FVSkJRVThzUjBGQlJ5eHJRa0ZCVVN4RFFVRkRMRU5CUVVNN1VVRkRPVVFzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1ZVRkJWU3hGUVVGRkxHbENRVUZQTEVkQlFVY3NhVUpCUVU4c1IwRkJSeXhyUWtGQlVTeERRVUZETEVOQlFVTTdVVUZEZGtVc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eHBRMEZCWlN4RFFVRkRMRXRCUVVzc1EwRkJRenRSUVVOd1F5eEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRVZCUVVVc1EwRkJRenRKUVVOeVFpeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4aFFVRTJRanRSUVVOc1JDeEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRkZCUVZFc1JVRkJSVHRaUVVOMFFpeFZRVUZWTEVOQlFVTXNVVUZCVVN4SFFVRkhMRWxCUVVrc1ZVRkJWU3hEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETzFOQlEzWkVPMGxCUTB3c1EwRkJRenRKUVVWRU96dFBRVVZITzBsQlEwa3NUVUZCVFN4RFFVRkRMRk5CUVZNN1VVRkRia0lzU1VGQlNTeFZRVUZWTEVOQlFVTXNVVUZCVVN4RlFVRkZPMWxCUTNKQ0xGVkJRVlVzUTBGQlF5eFJRVUZSTEVkQlFVY3NVMEZCVXl4RFFVRkRPMU5CUTI1RE8wbEJRMHdzUTBGQlF6dEpRVVZFT3pzN096dFBRVXRITzBsQlEwa3NTMEZCU3l4RFFVRkRMR2RDUVVGblFpeERRVUZETEUxQlFXTXNSVUZCUlN4clFrRkJNRUk3VVVGRGNFVXNUVUZCVFN4WlFVRlpMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTXhReXhQUVVGUExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNXVUZCV1N4RlFVRkZMR3RDUVVGclFpeERRVUZETEVOQlFVTTdTVUZEZWtRc1EwRkJRenRKUVVWRUxHVkJRV1U3U1VGRFVDeFBRVUZQTEVOQlFVTXNhVUpCUVhsQ08xRkJRM0pETEUxQlFVMHNTVUZCU1N4SFFVRkhMRFpDUVVGaExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJRM0pFTEVsQlFVa3NRMEZCUXl4VlFVRlZMRVZCUVVVc1EwRkJRenRSUVVOc1FpeE5RVUZOTEdkQ1FVRm5RaXhIUVVGSExHRkJRVXNzUTBGQlF5eFZRVUZWTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0UlFVTjJSU3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEdkQ1FVRm5RaXhGUVVGRkxFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMUZCUXpkRkxFMUJRVTBzVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRSUVVOc1F5eG5Ra0ZCWjBJN1lVRkRXQ3hMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEd0Q1FVRnJRaXhIUVVGSExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNTVUZCU1N4RFFVRkRMR3RDUVVGclFpeERRVUZETzJGQlF6RkZMRTlCUVU4c1EwRkJReXhEUVVGRExFdEJRV0VzUlVGQlJTeExRVUZoTEVWQlFVVXNSVUZCUlR0WlFVTjBReXhUUVVGVExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRPMUZCUXpkQ0xFTkJRVU1zUTBGQlF5eERRVUZETzFGQlExQXNUMEZCVHl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETzBsQlEzaERMRU5CUVVNN1NVRkZSQ3hsUVVGbE8wbEJRMUFzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRTRRaXhGUVVGRkxGTkJRV2xDTzFGQlEyeEZMSE5FUVVGelJEdFJRVU4wUkN4cFJFRkJhVVE3VVVGRGFrUXNUMEZCVHl4SlFVRkpMRTlCUVU4c1EwRkJVeXhEUVVGRExFOUJRVThzUlVGQlJTeE5RVUZOTEVWQlFVVXNSVUZCUlR0WlFVTXpReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXp0blFrRkRZaXhOUVVGTkxFVkJRVVVzVFVGQlRUdG5Ra0ZEWkN4clFrRkJhMElzUlVGQlJTeFRRVUZUTzJkQ1FVTTNRaXhSUVVGUkxFVkJRVVVzVDBGQlR6dGhRVU53UWl4RFFVRkRMRU5CUVVNN1dVRkRTQ3hKUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEV0QlFVc3NhVU5CUVdVc1EwRkJReXhMUVVGTExFVkJRVVU3WjBKQlEzWkRMRWxCUVVrc1EwRkJReXhaUVVGWkxFVkJRVVVzUTBGQlF6dGhRVU4yUWp0UlFVTk1MRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMUFzUTBGQlF6dEpRVVZFTEdWQlFXVTdTVUZEVUN4WlFVRlpMRU5CUVVNc1MwRkJaMEk3VVVGRGFrTXNUVUZCVFN4TlFVRk5MRWRCUVVjN1dVRkRXQ3hIUVVGSExFVkJRVVVzU1VGQlNTeFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJRenRaUVVOMFF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF6dFRRVU14UXl4RFFVRkRPMUZCUTBZc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVsQlFWa3NSVUZCUlN4TFFVRmhMRVZCUVVVc1JVRkJSVHRaUVVNeFF5eFJRVUZSTEVsQlFVa3NSVUZCUlR0blFrRkRWaXhMUVVGTExFTkJRVU03YjBKQlEwWXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eFZRVUZWTEVOQlFVTXNVMEZCVXl4RFFVRkRPMjlDUVVONlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExGVkJRVlVzUTBGQlF5eFRRVUZUTEVOQlFVTTdiMEpCUXpGRExFMUJRVTA3WjBKQlExWXNTMEZCU3l4RFFVRkRPMjlDUVVOR0xFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1ZVRkJWU3hEUVVGRExGRkJRVkVzUTBGQlF6dHZRa0ZEZUVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4VlFVRlZMRU5CUVVNc1UwRkJVeXhEUVVGRE8yOUNRVU14UXl4TlFVRk5PMmRDUVVOV08yOUNRVU5KTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzVlVGQlZTeERRVUZETEZOQlFWTXNRMEZCUXp0dlFrRkRla01zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhWUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETzJGQlEyaEVPMUZCUTB3c1EwRkJReXhEUVVGRExFTkJRVU03VVVGRFNDeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdVVUZETlVNc1QwRkJUeXhOUVVGTkxFTkJRVU03U1VGRGJFSXNRMEZCUXp0SlFVVkVMR1ZCUVdVN1NVRkRVQ3haUVVGWkxFTkJRVU1zVFVGQk9FSXNSVUZCUlN4TlFVRmpPMUZCUXk5RUxFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExGVkJRVlVzUTBGQlF5eExRVUZMTEVOQlFVTTdVVUZETVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1ZVRkJWU3hEUVVGRExFdEJRVXNzUTBGQlF6dFJRVU14UXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4VlFVRlZMRU5CUVVNc1MwRkJTeXhEUVVGRE8xRkJRekZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEZWQlFWVXNRMEZCUXl4TFFVRkxMRU5CUVVNN1VVRkRNVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzVlVGQlZTeERRVUZETEUxQlFVMHNRMEZCUXp0UlFVTTFReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhWUVVGVkxFTkJRVU1zVFVGQlRTeERRVUZETzFGQlF6VkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRlZCUVZVc1EwRkJReXhOUVVGTkxFTkJRVU03VVVGRE5VTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJRenRKUVVOb1JDeERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMRmxCUVZrN1VVRkRhRUlzVFVGQlRTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6dFJRVU5xUXl4SlFVRkpMREpDUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZPMWxCUXpWQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NhVU5CUVdVc1EwRkJReXhMUVVGTExFTkJRVU03VTBGRGRrTTdZVUZCVFR0WlFVTklMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzYVVOQlFXVXNRMEZCUXl4VFFVRlRMRU5CUVVNN1dVRkRlRU1zU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRUUVVNM1FqdEpRVU5NTEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTFBc1kwRkJZeXhEUVVGRExGbEJRVzlETzFGQlEzWkVMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4WlFVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRE5VTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRPMUZCUTJwRUxFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeEpRVUZKTEVWQlFVVXNWMEZCVnl4RlFVRkZMRXRCUVVzc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzFGQlEzcEZMRlZCUVZVc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRmxCUVZrc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzaEVMRU5CUVVNN1NVRkZSQ3hsUVVGbE8wbEJRMUFzYVVKQlFXbENMRU5CUVVNc1RVRkJPRUk3VVVGRGNFUXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4WlFVRlpMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRGVFTXNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhEUVVGRExFZEJRVWNzVlVGQlZTeERRVUZETEZWQlFWVXNRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETDBRc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eERRVUZETEVkQlFVY3NWVUZCVlN4RFFVRkRMRlZCUVZVc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM0JGTEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNc1EwRkJReXhIUVVGSExGVkJRVlVzUTBGQlF5eFZRVUZWTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnVSU3hKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEVOQlFVTXNSMEZCUnl4VlFVRlZMRU5CUVVNc1ZVRkJWU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRGRrVTdTVUZEVEN4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxGZEJRVmNzUTBGQlF5eFpRVUZ2UXp0UlFVTndSQ3hKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEZWQlFWVXNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRE4wTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhWUVVGVkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1EwRkJRenRSUVVNeFJDeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRlZCUVZVc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNTVUZCU1N4RlFVRkZMRzlDUVVGdlFpeEZRVUZGTEV0QlFVc3NSVUZCUlN4WlFVRlpMRU5CUVVNc2EwSkJRV3RDTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUTJwSUxFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNWVUZCVlN4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVVUzUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4WlFVRlpMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJUdFpRVU5zUlN4VlFVRlZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4WlFVRlpMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVU40UkR0aFFVRk5PMWxCUTBnc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eFZRVUZWTEVOQlFVTXNWVUZCVlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRelZETEUxQlFVMHNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eGhRVUZoTEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8ybENRVU5xUml4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNN2FVSkJRM2hDTEV0QlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF6dHBRa0ZETVVJc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRmNFSXNXVUZCV1N4RFFVRkRMRkZCUVZFc1EwRkJReXhoUVVGTExFTkJRVU1zWlVGQlpTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGREwwUXNTVUZCU1N4RFFVRkRMRmxCUVZrc1JVRkJSU3hEUVVGRE8xTkJRM1pDTzBsQlEwd3NRMEZCUXp0SlFVVkVMR1ZCUVdVN1NVRkRVQ3hKUVVGSkxFTkJRVU1zUTBGQlV6dFJRVU5zUWl4UFFVRlBMRU5CUVVNc1EwRkJZU3hGUVVGRkxGbEJRVmtzUlVGQlJTeFpRVUZaTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1dVRkJXU3hIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkRkRW9zUTBGQlF6czdRVUV6VGtRc1pVRkJaVHRCUVVOVExIRkNRVUZWTEVkQlFWY3NRMEZCUXl4RFFVRkRPMEZCUlM5RExHVkJRV1U3UVVGRFV5eHRRa0ZCVVN4SFFVRlhMRU5CUVVNc1EwRkJReXhEUVVGRExGZEJRVmM3UVVGRGVrUXNaVUZCWlR0QlFVTlRMRzlDUVVGVExFZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4cFEwRkJhVU03UVVGRGFrWXNaVUZCWlR0QlFVTlRMR2RDUVVGTExFZEJRVmNzVlVGQlZTeERRVUZETEVOQlFVTXNXVUZCV1R0QlFVTm9SU3hsUVVGbE8wRkJRMU1zWjBKQlFVc3NSMEZCVnl4VlFVRlZMRU5CUVVNc1EwRkJReXhaUVVGWk8wRkJRMmhGTEdWQlFXVTdRVUZEVXl4blFrRkJTeXhIUVVGWExGVkJRVlVzUTBGQlF5eERRVUZETEZsQlFWazdRVUZEYUVVc1pVRkJaVHRCUVVOVExHZENRVUZMTEVkQlFWY3NWVUZCVlN4RFFVRkRMRU5CUVVNc1dVRkJXVHRCUVVOb1JTeGxRVUZsTzBGQlExTXNhVUpCUVUwc1IwRkJWeXhWUVVGVkxFTkJRVU1zUTBGQlF5eFpRVUZaTzBGQlEycEZMR1ZCUVdVN1FVRkRVeXhwUWtGQlRTeEhRVUZYTEZWQlFWVXNRMEZCUXl4RFFVRkRMRmxCUVZrN1FVRkRha1VzWlVGQlpUdEJRVU5UTEdsQ1FVRk5MRWRCUVZjc1ZVRkJWU3hEUVVGRExFTkJRVU1zV1VGQldUdEJRVU5xUlN4bFFVRmxPMEZCUTFNc2FVSkJRVTBzUjBGQlZ5eFZRVUZWTEVOQlFVTXNRMEZCUXl4WFFVRlhPMEZCZWtKd1JTeG5RMEVyVGtNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBQZWFybERpdmVyIFN0YXRlLlxyXG4gKi9cclxudmFyIFBlYXJsRGl2ZXJTdGF0ZTtcclxuKGZ1bmN0aW9uIChQZWFybERpdmVyU3RhdGUpIHtcclxuICAgIFBlYXJsRGl2ZXJTdGF0ZVtQZWFybERpdmVyU3RhdGVbXCJyZWFkeVwiXSA9IDBdID0gXCJyZWFkeVwiO1xyXG4gICAgUGVhcmxEaXZlclN0YXRlW1BlYXJsRGl2ZXJTdGF0ZVtcInNlYXJjaGluZ1wiXSA9IDFdID0gXCJzZWFyY2hpbmdcIjtcclxuICAgIFBlYXJsRGl2ZXJTdGF0ZVtQZWFybERpdmVyU3RhdGVbXCJpbnRlcnJ1cHRlZFwiXSA9IC0xXSA9IFwiaW50ZXJydXB0ZWRcIjtcclxufSkoUGVhcmxEaXZlclN0YXRlID0gZXhwb3J0cy5QZWFybERpdmVyU3RhdGUgfHwgKGV4cG9ydHMuUGVhcmxEaXZlclN0YXRlID0ge30pKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0dWaGNteEVhWFpsY2xOMFlYUmxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwzQmxZWEpzUkdsMlpYSXZjR1ZoY214RWFYWmxjbE4wWVhSbExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN1IwRkZSenRCUVVOSUxFbEJRVmtzWlVGSldEdEJRVXBFTEZkQlFWa3NaVUZCWlR0SlFVTjJRaXgxUkVGQlV5eERRVUZCTzBsQlExUXNLMFJCUVdFc1EwRkJRVHRKUVVOaUxHOUZRVUZuUWl4RFFVRkJPMEZCUTNCQ0xFTkJRVU1zUlVGS1Z5eGxRVUZsTEVkQlFXWXNkVUpCUVdVc1MwRkJaaXgxUWtGQlpTeFJRVWt4UWlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgbnVtYmVySGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBjcnlwdG9FcnJvcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY3J5cHRvL2Rpc3QvZXJyb3IvY3J5cHRvRXJyb3JcIik7XHJcbmNvbnN0IHByb29mT2ZXb3JrQmFzZV8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY3J5cHRvL2Rpc3QvcHJvb2ZPZldvcmsvcHJvb2ZPZldvcmtCYXNlXCIpO1xyXG5jb25zdCB0cnl0ZXNfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyeXRlc1wiKTtcclxuY29uc3QgcGVhcmxEaXZlcl8xID0gcmVxdWlyZShcIi4vcGVhcmxEaXZlci9wZWFybERpdmVyXCIpO1xyXG4vKipcclxuICogUHJvb2ZPZldvcmsgaW1wbGVtZW50YXRpb24gdXNpbmcgV2ViR0wuXHJcbiAqL1xyXG5jbGFzcyBQcm9vZk9mV29ya1dlYkdsIGV4dGVuZHMgcHJvb2ZPZldvcmtCYXNlXzEuUHJvb2ZPZldvcmtCYXNlIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIFByb29mT2ZXb3JrLlxyXG4gICAgICogQHBhcmFtIHdlYkdMUGxhdGZvcm0gUHJvdmlkZXMgcGxhdGZvcm0gc3BlY2lmaWMgZnVuY3Rpb25zLCBvcHRpb25hbCBtb3N0bHkgdXNlZCBmb3IgdGVzdGluZy5cclxuICAgICAqIEBwYXJhbSB0aW1lU2VydmljZSBTZXJ2aWNlIHRvIGdldCB0aGUgdGltZSBmb3IgYXR0YWNobWVudHMuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHdlYkdMUGxhdGZvcm0sIHRpbWVTZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIodGltZVNlcnZpY2UpO1xyXG4gICAgICAgIGlmIChvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eSh3ZWJHTFBsYXRmb3JtKSkge1xyXG4gICAgICAgICAgICB0aGlzLl93ZWJHTFBsYXRmb3JtID0ge1xyXG4gICAgICAgICAgICAgICAgZ2V0V2luZG93OiAoKSA9PiB3aW5kb3csXHJcbiAgICAgICAgICAgICAgICBnZXREb2N1bWVudDogKHdpbmRvdykgPT4gd2luZG93LmRvY3VtZW50LFxyXG4gICAgICAgICAgICAgICAgZ2V0Q2FudmFzOiAoZG9jdW1lbnQpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIiksXHJcbiAgICAgICAgICAgICAgICBnZXRXZWJHTDogKGNhbnZhcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHIgPSB7IGFscGhhOiBmYWxzZSwgYW50aWFsaWFzOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdsID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJnbDJcIiwgYXR0cik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fd2ViR0xQbGF0Zm9ybSA9IHdlYkdMUGxhdGZvcm07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBbGxvdyB0aGUgcHJvb2Ygb2Ygd29yayB0byBwZXJmb3JtIGFueSBpbml0aWFsaXphdGlvbi5cclxuICAgICAqIFdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIHRoZSBpbXBsZW1lbnRhdGlvbiBpcyBub3Qgc3VwcG9ydGVkLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZS5cclxuICAgICAqL1xyXG4gICAgYXN5bmMgaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgICBhd2FpdCBzdXBlci5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHBlYXJsRGl2ZXJfMS5QZWFybERpdmVyLmluaXRpYWxpemUodGhpcy5fd2ViR0xQbGF0Zm9ybSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc0luaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBQZXJmb3JtIGEgcHJvb2Ygb2Ygd29yayBvbiBhIHNpbmdsZSBpdGVtLlxyXG4gICAgICogQHBhcmFtIHRyeXRlcyBUaGUgdHJ5dGVzIHRvIHBlcmZvcm0gdGhlIHBvdyBvbi5cclxuICAgICAqIEBwYXJhbSBtaW5XZWlnaHRNYWduaXR1ZGUgVGhlIG1pbmltdW0gd2VpZ2h0IG1hZ25pdHVkZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSB0cnl0ZXMgcHJvZHVjZWQgYnkgdGhlIHByb29mIG9mIHdvcmsuXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHNpbmdsZVBvdyh0cnl0ZXMsIG1pbldlaWdodE1hZ25pdHVkZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNJbml0aWFsaXplZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIldlYkdMIGlzIG5vdCBpbml0aWFsaXplZCwgaGF2ZSB5b3UgY2FsbGVkIGluaXRpYWxpemVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0cnl0ZXMsIHRyeXRlc18xLlRyeXRlcykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgdHJ5dGVzIG11c3QgYmUgYW4gb2JqZWN0IG9mIHR5cGUgVHJ5dGVzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobWluV2VpZ2h0TWFnbml0dWRlKSB8fCBtaW5XZWlnaHRNYWduaXR1ZGUgPD0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBtaW5XZWlnaHRNYWduaXR1ZGUgbXVzdCBiZSA+IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG5vbmNlID0gYXdhaXQgcGVhcmxEaXZlcl8xLlBlYXJsRGl2ZXIuaW5zdGFuY2Uuc2VhcmNoV2l0aFRyeXRlcyh0cnl0ZXMsIG1pbldlaWdodE1hZ25pdHVkZSk7XHJcbiAgICAgICAgY29uc3QgdHJ5dGVzU3RyaW5nID0gdHJ5dGVzLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgY29uc3Qgbm9uY2VTdHJpbmcgPSBub25jZS50b1N0cmluZygpO1xyXG4gICAgICAgIHJldHVybiB0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyh0cnl0ZXNTdHJpbmcuc3Vic3RyKDAsIHRyeXRlc1N0cmluZy5sZW5ndGggLSBub25jZVN0cmluZy5sZW5ndGgpLmNvbmNhdChub25jZVN0cmluZykpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUHJvb2ZPZldvcmtXZWJHbCA9IFByb29mT2ZXb3JrV2ViR2w7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISnZiMlpQWmxkdmNtdFhaV0pIYkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOeVl5OXdjbTl2Wms5bVYyOXlhMWRsWWtkc0xuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVN3MFJVRkJlVVU3UVVGRGVrVXNORVZCUVhsRk8wRkJSWHBGTERCRlFVRjFSVHRCUVVOMlJTeDNSa0ZCY1VZN1FVRkRja1lzTmtSQlFUQkVPMEZCUlRGRUxIZEVRVUZ4UkR0QlFVZHlSRHM3UjBGRlJ6dEJRVU5JTEhOQ1FVRTRRaXhUUVVGUkxHbERRVUZsTzBsQlQycEVPenM3TzA5QlNVYzdTVUZEU0N4WlFVRlpMR0ZCUVRoQ0xFVkJRVVVzVjBGQk1FSTdVVUZEYkVVc1MwRkJTeXhEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzFGQlJXNUNMRWxCUVVrc01rSkJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNZVUZCWVN4RFFVRkRMRVZCUVVVN1dVRkRja01zU1VGQlNTeERRVUZETEdOQlFXTXNSMEZCUnp0blFrRkRiRUlzVTBGQlV5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRTFCUVUwN1owSkJRM1pDTEZkQlFWY3NSVUZCUlN4RFFVRkRMRTFCUVUwc1JVRkJSU3hGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRTdaMEpCUTNoRExGTkJRVk1zUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlN4RlFVRkZMRU5CUVVNc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eFJRVUZSTEVOQlFVTTdaMEpCUTNwRUxGRkJRVkVzUlVGQlJTeERRVUZETEUxQlFVMHNSVUZCUlN4RlFVRkZPMjlDUVVOcVFpeE5RVUZOTEVsQlFVa3NSMEZCUnl4RlFVRkZMRXRCUVVzc1JVRkJSU3hMUVVGTExFVkJRVVVzVTBGQlV5eEZRVUZGTEV0QlFVc3NSVUZCUlN4RFFVRkRPMjlDUVVOb1JDeE5RVUZOTEVWQlFVVXNSMEZCUnl4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExGRkJRVkVzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0dlFrRkROME1zVDBGQmFVTXNSVUZCUlN4RFFVRkRPMmRDUVVONFF5eERRVUZETzJGQlEwb3NRMEZCUXp0VFFVTk1PMkZCUVUwN1dVRkRTQ3hKUVVGSkxFTkJRVU1zWTBGQll5eEhRVUZITEdGQlFXRXNRMEZCUXp0VFFVTjJRenRKUVVOTUxFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzUzBGQlN5eERRVUZETEZWQlFWVTdVVUZEYmtJc1RVRkJUU3hMUVVGTExFTkJRVU1zVlVGQlZTeEZRVUZGTEVOQlFVTTdVVUZEZWtJc1QwRkJUeXhKUVVGSkxFOUJRVThzUTBGQlR5eERRVUZETEU5QlFVOHNSVUZCUlN4TlFVRk5MRVZCUVVVc1JVRkJSVHRaUVVONlF5eEpRVUZKTzJkQ1FVTkJMSFZDUVVGVkxFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNc1EwRkJRenRuUWtGRE0wTXNTVUZCU1N4RFFVRkRMR05CUVdNc1IwRkJSeXhKUVVGSkxFTkJRVU03WjBKQlF6TkNMRTlCUVU4c1JVRkJSU3hEUVVGRE8yRkJRMkk3V1VGQlF5eFBRVUZQTEVkQlFVY3NSVUZCUlR0blFrRkRWaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdZVUZEWmp0UlFVTk1MRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMUFzUTBGQlF6dEpRVVZFT3pzN096dFBRVXRITzBsQlEwa3NTMEZCU3l4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGakxFVkJRVVVzYTBKQlFUQkNPMUZCUXpkRUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNZMEZCWXl4RlFVRkZPMWxCUTNSQ0xFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMSE5FUVVGelJDeERRVUZETEVOQlFVTTdVMEZEYWtZN1VVRkRSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hGUVVGRkxHVkJRVTBzUTBGQlF5eEZRVUZGTzFsQlEzUkRMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETERaRFFVRTJReXhEUVVGRExFTkJRVU03VTBGRGVFVTdVVUZEUkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zU1VGQlNTeHJRa0ZCYTBJc1NVRkJTU3hEUVVGRExFVkJRVVU3V1VGRGVFVXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zYjBOQlFXOURMRU5CUVVNc1EwRkJRenRUUVVNdlJEdFJRVVZFTEUxQlFVMHNTMEZCU3l4SFFVRkhMRTFCUVUwc2RVSkJRVlVzUTBGQlF5eFJRVUZSTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zVFVGQlRTeEZRVUZGTEd0Q1FVRnJRaXhEUVVGRExFTkJRVU03VVVGRmNrWXNUVUZCVFN4WlFVRlpMRWRCUVVjc1RVRkJUU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFGQlEzWkRMRTFCUVUwc1YwRkJWeXhIUVVGSExFdEJRVXNzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0UlFVTnlReXhQUVVGUExHVkJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNXVUZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFVkJRVVVzV1VGQldTeERRVUZETEUxQlFVMHNSMEZCUnl4WFFVRlhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRia2dzUTBGQlF6dERRVU5LTzBGQmVFVkVMRFJEUVhkRlF5SjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBTaGFkZXJzIGFkZC5cclxuICovXHJcbmV4cG9ydHMuZGVmYXVsdCA9IGBcbmludCBzdW0gKGludCBhLCBpbnQgYikge1xuICBpbnQgbXlfc3VtID0gYSArIGI7XG4gIHJldHVybiBteV9zdW0gPT0gMiA/IC0xIDogKG15X3N1bSA9PSAtMikgPyAxIDogbXlfc3VtO1xufVxuaW50IGNvbnMgKGludCBhLCBpbnQgYikge1xuICByZXR1cm4gKGEgPT0gMSAmJiBiID09IDEpPyAxIDogKGEgPT0gLTEgJiYgYiA9PSAtMSkgPyAtMSA6IDA7XG59XG5pbnQgYW55X3QgKGludCBhLCBpbnQgYikge1xuICBpbnQgbXlfYW55ID0gYSArIGI7XG4gIHJldHVybiBteV9hbnkgPT0gMCA/IDAgOiAobXlfYW55ID4gMCkgPyAxIDogLTE7XG59XG5pdmVjMiBmdWxsX2FkZGVyKGludCBhLCBpbnQgYiwgaW50IGMpIHtcbiAgaW50IGNfYSwgY19iLCBzdW1fYWIsIGNfcztcblxuICBjX2EgICAgPSBjb25zKGEsYik7XG4gIHN1bV9hYiA9IHN1bShhLGIpO1xuICBjX2IgICAgPSBjb25zKHN1bV9hYixjKTtcbiAgY19zICAgID0gYW55X3QoY19hLCBjX2IpO1xuXG4gIHJldHVybiBpdmVjMihzdW0oc3VtX2FiLCBjKSwgY19zKTtcbn1cbml2ZWMyIGdldF9zdW1fdG9faW5kZXgoaW50IGZyb20sIGludCB0bywgaW50IG51bWJlcl90b19hZGQsIGludCByb3cpIHtcbiAgaW50IHRyaXRfdG9fYWRkLCB0cml0X2F0X2luZGV4LCBwb3csIGNhcnJ5LCBudW1fY2Fycnk7XG4gIGl2ZWMyIHJlYWRfaW4sIHN1bV9vdXQsIG91dF90cml0O1xuICBwb3cgPSAxO1xuICBjYXJyeSA9IDA7XG4gIG51bV9jYXJyeSA9IDA7XG5cbiAgZm9yKGludCBpID0gZnJvbTsgaSA8IHRvOyBpKyspIHtcbiAgICAvL2lmKHRyaXRfdG9fYWRkID09IDAgJiYgc3VtX291dC50ID09IDApIGNvbnRpbnVlO1xuXG4gICAgcmVhZF9pbiA9IHJlYWRfYXQgKCBpdmVjMiAoaSwgcm93KSkucmc7XG5cbiAgICB0cml0X3RvX2FkZCA9ICgobnVtYmVyX3RvX2FkZCAvIHBvdykgJSAzKSArIG51bV9jYXJyeTtcbiAgICBudW1fY2FycnkgPSB0cml0X3RvX2FkZCA+IDEgPyAxIDogMDtcbiAgICB0cml0X3RvX2FkZCA9ICh0cml0X3RvX2FkZCA9PSAyID8gLTEgOiAodHJpdF90b19hZGQgPT0gMyA/IDAgOiB0cml0X3RvX2FkZCkpO1xuXG4gICAgc3VtX291dCA9IGZ1bGxfYWRkZXIoXG4gICAgICAocmVhZF9pbi5zID09IExPV19CSVRTID8gMSA6IHJlYWRfaW4udCA9PSBMT1dfQklUUz8gLTEgOiAwKSxcbiAgICAgIHRyaXRfdG9fYWRkLFxuICAgICAgY2FycnlcbiAgICApO1xuXG4gICAgaWYobXlfY29vcmQueCA9PSBpKSBicmVhaztcbiAgICBjYXJyeSA9IHN1bV9vdXQudDtcbiAgICBwb3cgKj0zO1xuICB9XG4gIGlmKHN1bV9vdXQucyA9PSAwKSB7XG4gICAgcmV0dXJuIGl2ZWMyKEhJR0hfQklUUyk7XG4gIH0gZWxzZSBpZiAoc3VtX291dC5zID09IDEpIHtcbiAgICByZXR1cm4gaXZlYzIoTE9XX0JJVFMsIEhJR0hfQklUUyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGl2ZWMyKEhJR0hfQklUUywgTE9XX0JJVFMpO1xuICB9XG59XG5gO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZV1JrTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMM05vWVdSbGNuTXZZV1JrTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHM3UjBGRlJ6dEJRVU5JTEd0Q1FVRmxPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenREUVhkRVpDeERRVUZESW4wPSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIFNoYWRlcnMgY2hlY2tfY29sLlxyXG4gKi9cclxuZXhwb3J0cy5kZWZhdWx0ID0gYFxudm9pZCBtYWluKCkge1xuICBpbml0KCk7XG4gIGl2ZWM0IG15X3ZlYyA9IHJlYWQoKTtcbiAgaW50IGk7XG4gIGlmKG15X2Nvb3JkLnggPT0gU1RBVEVfTEVOR1RIICYmIG15X2Nvb3JkLnkgPT0gMCkge1xuICAgIG15X3ZlYy5iID0gMDtcbiAgICBpZihteV92ZWMuYSA9PSAwKSB7XG4gICAgICBpdmVjNCByZWFkX3ZlYztcbiAgICAgIG15X3ZlYy5iID0gLTE7XG4gICAgICBmb3IoaSA9IDE7IGkgPCBpbnQoc2l6ZS55KTsgaSsrKSB7XG4gICAgICAgIHJlYWRfdmVjID0gcmVhZF9hdCggaXZlYzIoIFNUQVRFX0xFTkdUSCwgaSkpO1xuICAgICAgICBpZihyZWFkX3ZlYy5hICE9IDApIHtcbiAgICAgICAgICBteV92ZWMuYSA9IHJlYWRfdmVjLmE7XG4gICAgICAgICAgbXlfdmVjLmIgPSBpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNvbW1pdChteV92ZWMpO1xufVxuYDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTJobFkydERiMnd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZjMmhoWkdWeWN5OWphR1ZqYTBOdmJDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFN08wZEJSVWM3UVVGRFNDeHJRa0ZCWlRzN096czdPenM3T3pzN096czdPenM3T3pzN096dERRWE5DWkN4RFFVRkRJbjA9IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogU2hhZGVycyBjaGVja19kby5cclxuICovXHJcbmV4cG9ydHMuZGVmYXVsdCA9IGBcbmludCBjaGVjayhpbnQgcm93LCBpbnQgbWluX3dlaWdodF9tYWduaXR1ZGUpIHtcbiAgaW50IG5vbmNlX3Byb2JlLCBpO1xuICBpdmVjMiByX3RleGVsO1xuICBub25jZV9wcm9iZSA9IEhJR0hfQklUUztcbiAgZm9yKGkgPSBtaW5fd2VpZ2h0X21hZ25pdHVkZTsgaS0tID4gMDsgKSB7XG4gICAgcl90ZXhlbCA9IHJlYWRfYXQoaXZlYzIoSEFTSF9MRU5HVEggLSAxIC0gaSwgcm93KSkuYmE7XG4gICAgbm9uY2VfcHJvYmUgJj0gfihyX3RleGVsLnMgXiByX3RleGVsLnQpO1xuICAgIGlmKG5vbmNlX3Byb2JlID09IDApIGJyZWFrO1xuICB9XG4gIHJldHVybiBub25jZV9wcm9iZTtcbn1cbmA7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkyaGxZMnRFYnk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTl6YUdGa1pYSnpMMk5vWldOclJHOHVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQk96dEhRVVZITzBGQlEwZ3NhMEpCUVdVN096czdPenM3T3pzN096dERRVmxrTEVOQlFVTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogU2hhZGVycyBjaGVja19rLlxyXG4gKi9cclxuZXhwb3J0cy5kZWZhdWx0ID0gYFxudW5pZm9ybSBpbnQgbWluV2VpZ2h0TWFnbml0dWRlO1xudm9pZCBtYWluKCkge1xuICBpbml0KCk7XG4gIGl2ZWM0IG15X3ZlYyA9IHJlYWQoKTtcbiAgaWYobXlfY29vcmQueCA9PSBTVEFURV9MRU5HVEgpIHtcbiAgICBteV92ZWMuciA9IG1pbldlaWdodE1hZ25pdHVkZTtcbiAgICBteV92ZWMuYSA9IGNoZWNrKG15X2Nvb3JkLnksIG1pbldlaWdodE1hZ25pdHVkZSk7XG4gIH1cbiAgY29tbWl0KG15X3ZlYyk7XG59XG5gO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMmhsWTJ0TExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDNOb1lXUmxjbk12WTJobFkydExMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdSMEZGUnp0QlFVTklMR3RDUVVGbE96czdPenM3T3pzN096dERRVmRrTEVOQlFVTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogU2hhZGVycyBmaW5hbGl6ZS5cclxuICovXHJcbmV4cG9ydHMuZGVmYXVsdCA9IGBcbnZvaWQgbWFpbigpIHtcbiAgaW5pdCgpO1xuICBpdmVjNCBteV92ZWMgPSByZWFkKCk7XG4gIGlmKG15X2Nvb3JkLnkgPT0gMCAmJiBteV9jb29yZC54ID09IFNUQVRFX0xFTkdUSCkge1xuICAgIG15X3ZlYy5nID0gY2hlY2sobXlfdmVjLmIsIG15X3ZlYy5yKTtcbiAgfVxuICBpZihteV9jb29yZC55ID09IDAgJiYgbXlfY29vcmQueCA8IEhBU0hfTEVOR1RIKSB7XG4gICAgaXZlYzQgaW5mb192ZWMgPSByZWFkX2F0KGl2ZWMyKFNUQVRFX0xFTkdUSCwgMCkpO1xuICAgIGludCBub25jZV9wcm9iZSA9IGluZm9fdmVjLmE7XG4gICAgaW50IHJvdyA9IGluZm9fdmVjLmI7XG4gICAgaXZlYzQgaGFzaF92ZWMgPSByZWFkX2F0KGl2ZWMyKG15X2Nvb3JkLngsIHJvdykpO1xuICAgIG15X3ZlYy5hID0gKGhhc2hfdmVjLnIgJiBub25jZV9wcm9iZSkgPT0gMD8gMSA6ICgoaGFzaF92ZWMuZyAmIG5vbmNlX3Byb2JlKSA9PSAwPyAtMSA6IDApO1xuICB9XG4gIGNvbW1pdChteV92ZWMpO1xufVxuYDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWm1sdVlXeHBlbVV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZjMmhoWkdWeWN5OW1hVzVoYkdsNlpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFN08wZEJSVWM3UVVGRFNDeHJRa0ZCWlRzN096czdPenM3T3pzN096czdPenREUVdkQ1pDeERRVUZESW4wPSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIFNoYWRlcnMgYWRkLlxyXG4gKi9cclxuZXhwb3J0cy5kZWZhdWx0ID0gYFxuI2RlZmluZSBIQVNIX0xFTkdUSCAyNDNcbiNkZWZpbmUgTlVNQkVSX09GX1JPVU5EUyA4MVxuI2RlZmluZSBJTkNSRU1FTlRfU1RBUlQgSEFTSF9MRU5HVEggLSA2NFxuI2RlZmluZSBTVEFURV9MRU5HVEggMyAqIEhBU0hfTEVOR1RIXG4jZGVmaW5lIEhBTEZfTEVOR1RIIDM2NFxuI2RlZmluZSBISUdIX0JJVFMgMHhGRkZGRkZGRlxuI2RlZmluZSBMT1dfQklUUyAweDAwMDAwMDAwXG5gO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhR1ZoWkdWeWN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5emFHRmtaWEp6TDJobFlXUmxjbk11ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJPenRIUVVWSE8wRkJRMGdzYTBKQlFXVTdPenM3T3pzN08wTkJVV1FzUTBGQlF5SjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBTaGFkZXJzIGluY3JlbWVudC5cclxuICovXHJcbmV4cG9ydHMuZGVmYXVsdCA9IGBcbnZvaWQgbWFpbigpIHtcbiAgaW5pdCgpO1xuICBpdmVjNCBteV92ZWMgPSByZWFkKCk7XG4gIGlmKG15X2Nvb3JkLnggPj0gSU5DUkVNRU5UX1NUQVJUICYmIG15X2Nvb3JkLnggPCBIQVNIX0xFTkdUSCApIHtcbiAgICBteV92ZWMucmcgPSBnZXRfc3VtX3RvX2luZGV4KElOQ1JFTUVOVF9TVEFSVCwgSEFTSF9MRU5HVEgsIDEsIG15X2Nvb3JkLnkpO1xuICB9XG4gIGlmKG15X2Nvb3JkLnggPT0gU1RBVEVfTEVOR1RIICkge1xuICAgIG15X3ZlYy5yZyA9IGl2ZWMyKDApO1xuICB9XG4gIG15X3ZlYy5iYSA9IG15X3ZlYy5yZztcbiAgY29tbWl0KG15X3ZlYyk7XG59XG5gO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVqY21WdFpXNTBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwzTm9ZV1JsY25NdmFXNWpjbVZ0Wlc1MExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN1IwRkZSenRCUVVOSUxHdENRVUZsT3pzN096czdPenM3T3pzN08wTkJZV1FzUTBGQlF5SjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBTaGFkZXJzIGluaXQuXHJcbiAqL1xyXG5leHBvcnRzLmRlZmF1bHQgPSBgXG51bmlmb3JtIGludCBncl9vZmZzZXQ7XG5pdmVjNCBvZmZzZXQoKSB7XG4gIGlmKG15X2Nvb3JkLnggPj0gSEFTSF9MRU5HVEggLyAzICYmIG15X2Nvb3JkLnggPCBIQVNIX0xFTkdUSCAvIDMgKiAyICkge1xuICAgIGl2ZWM0IG15X3ZlYztcbiAgICBteV92ZWMucmcgPSBnZXRfc3VtX3RvX2luZGV4KEhBU0hfTEVOR1RIIC8gMywgSEFTSF9MRU5HVEggLyAzICogMiwgbXlfY29vcmQueSArIGdyX29mZnNldCwgMCk7XG4gICAgcmV0dXJuIG15X3ZlYztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVhZF9hdChpdmVjMihteV9jb29yZC54LDApKTtcbiAgfVxufVxudm9pZCBtYWluKCkge1xuICBpbml0KCk7XG4gIGNvbW1pdChvZmZzZXQoKSk7XG59XG5gO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVwZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTl6YUdGa1pYSnpMMmx1YVhRdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCT3p0SFFVVkhPMEZCUTBnc2EwSkJRV1U3T3pzN096czdPenM3T3pzN096dERRV1ZrTEVOQlFVTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogU2hhZGVycyB0cmFuc2Zvcm0uXHJcbiAqL1xyXG5leHBvcnRzLmRlZmF1bHQgPSBgXG5pdmVjMiB0d2lzdCgpIHtcbiAgaW50IGFscGhhLCBiZXRhLCBnYW1tYSwgZGVsdGE7XG4gIGl2ZWM0IHYxLCB2MjtcbiAgaW50IGogPSBteV9jb29yZC54O1xuXG4gIHYxID0gcmVhZF9hdChpdmVjMihqID09IDA/IDA6KCgoaiAtIDEpJTIpKzEpKkhBTEZfTEVOR1RIIC0gKChqLTEpPj4xKSwgbXlfY29vcmQueSkpO1xuICB2MiA9IHJlYWRfYXQoaXZlYzIoKChqJTIpKzEpKkhBTEZfTEVOR1RIIC0gKChqKT4+MSksIG15X2Nvb3JkLnkpKTtcbiAgYWxwaGEgPSB2MS5iO1xuICBiZXRhID0gdjEuYTtcbiAgZ2FtbWEgPSB2Mi5hO1xuICBkZWx0YSA9IChhbHBoYSB8ICh+Z2FtbWEpKSAmICh2Mi5iIF4gYmV0YSk7Ly92Mi5iID09PSBzdGF0ZV9sb3dbdDJdXG5cbiAgcmV0dXJuIGl2ZWMyKH5kZWx0YSwgKGFscGhhIF4gZ2FtbWEpIHwgZGVsdGEpO1xufVxudm9pZCBtYWluKCkge1xuICBpbml0KCk7XG4gIGl2ZWM0IG15X3ZlYyA9IHJlYWQoKTtcbiAgaWYobXlfY29vcmQueCA8IFNUQVRFX0xFTkdUSClcbiAgICBteV92ZWMuYmEgPSB0d2lzdCgpO1xuICBjb21taXQobXlfdmVjKTtcbn1cbmA7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRISmhibk5tYjNKdExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDNOb1lXUmxjbk12ZEhKaGJuTm1iM0p0TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHM3UjBGRlJ6dEJRVU5JTEd0Q1FVRmxPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBOQmMwSmtMRU5CUVVNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBTdGRsaWIuXHJcbiAqL1xyXG5leHBvcnRzLmRlZmF1bHQgPSBgI3ZlcnNpb24gMzAwIGVzXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XG5wcmVjaXNpb24gaGlnaHAgaW50O1xucHJlY2lzaW9uIGhpZ2hwIGlzYW1wbGVyMkQ7XG51bmlmb3JtIGlzYW1wbGVyMkQgdV90ZXh0dXJlO1xuaW4gdmVjMiBwb3M7XG5vdXQgaXZlYzQgY29sb3I7XG4vL291dCBpbnQgaXNGaW5pc2hlZDtcblxudmVjMiBzaXplO1xuaXZlYzIgbXlfY29vcmQ7XG5cbnZvaWQgaW5pdCh2b2lkKSB7XG4gIC8vc2l6ZSA9IHZlYzIodGV4dHVyZVNpemUodV90ZXh0dXJlLCAwKSAtIDEpO1xuICBzaXplID0gdmVjMih0ZXh0dXJlU2l6ZSh1X3RleHR1cmUsIDApKTtcbiAgbXlfY29vcmQgPSBpdmVjMihwb3MgKiBzaXplKTtcbn1cblxuaXZlYzQgcmVhZCh2b2lkKSB7XG4gIHJldHVybiB0ZXh0dXJlKHVfdGV4dHVyZSwgcG9zKTtcbn1cblxuaXZlYzQgcmVhZF9hdChpdmVjMiBjb29yZCkge1xuICByZXR1cm4gdGV4ZWxGZXRjaCh1X3RleHR1cmUsIGNvb3JkLCAwKTtcbn1cblxudm9pZCBjb21taXQoaXZlYzQgdmFsKSB7XG4gIGNvbG9yID0gdmFsO1xufVxuYDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYzNSa2JHbGlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwzZGxZa2RNTDNOMFpHeHBZaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRTdPMGRCUlVjN1FVRkRTQ3hyUWtGRFFUczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdRMEUyUWtNc1EwRkJReUo5IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogVmVydGV4IFNoYWRlciBjb2RlLlxyXG4gKi9cclxuZXhwb3J0cy5kZWZhdWx0ID0gYCN2ZXJzaW9uIDMwMCBlc1xubGF5b3V0KGxvY2F0aW9uID0gMCkgaW4gdmVjMiBwb3NpdGlvbjtcbmxheW91dChsb2NhdGlvbiA9IDEpIGluIHZlYzIgdGV4dHVyZTtcbm91dCB2ZWMyIHBvcztcblxudm9pZCBtYWluKHZvaWQpIHtcbiAgcG9zID0gdGV4dHVyZTtcbiAgZ2xfUG9zaXRpb24gPSB2ZWM0KHBvc2l0aW9uLnh5LCAwLjAsIDEuMCk7XG59YDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZG1WeWRHVjRVMmhoWkdWeVEyOWtaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OTNaV0pIVEM5MlpYSjBaWGhUYUdGa1pYSkRiMlJsTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHM3UjBGRlJ6dEJRVU5JTEd0Q1FVTkJPenM3T3pzN096dEZRVkZGTEVOQlFVTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgY3J5cHRvRXJyb3JfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L2Vycm9yL2NyeXB0b0Vycm9yXCIpO1xyXG4vKipcclxuICogSGVscGVyIGZ1bmN0aW9ucyBmb3IgdXNlIHdpdGggV2ViR0wuXHJcbiAqL1xyXG5jbGFzcyBXZWJHTEhlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIFdlYkdMIENvbnRleHQuXHJcbiAgICAgKiBAcGFyYW0gd2ViR0xQbGF0Zm9ybSBUaGUgcGxhdGZvcm0gdG8gY3JlYXRlIHRoZSBjb250ZXh0IHdpdGguXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgY29udGV4dCBpZiBzdWNjZXNzZnVseSBvciB0aHJvd3MgYW4gZXJyb3IgaWYgaXQgY2Fubm90IGJlIGNyZWF0ZWQuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVDb250ZXh0KHdlYkdMUGxhdGZvcm0pIHtcclxuICAgICAgICBjb25zdCB3aW5kb3cgPSB3ZWJHTFBsYXRmb3JtLmdldFdpbmRvdygpO1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzRW1wdHkod2luZG93KSAmJiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRvY3VtZW50ID0gd2ViR0xQbGF0Zm9ybS5nZXREb2N1bWVudCh3aW5kb3cpO1xyXG4gICAgICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KGRvY3VtZW50KSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FudmFzID0gd2ViR0xQbGF0Zm9ybS5nZXRDYW52YXMoZG9jdW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eShjYW52YXMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2wgPSB3ZWJHTFBsYXRmb3JtLmdldFdlYkdMKGNhbnZhcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KGdsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIkNhbiBub3QgY3JlYXRlIGEgV2ViR0wgY29udGV4dCBvbiBhIDxjYW52YXM+IGVsZW1lbnQuXCIsIHsgdXNlckFnZW50OiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgSFRNTDUgPGNhbnZhcz4gZWxlbWVudCBpcyBub3QgYXZhaWxhYmxlIGluIHlvdXIgYnJvd3Nlci5cIiwgeyB1c2VyQWdlbnQ6IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50IH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJ3aW5kb3cuZG9jdW1lbnQgaXMgbm90IGF2YWlsYWJsZSwgeW91IG11c3QgYmUgcnVubmluZyBpbiBhbiBlbnZpcm9ubWVudCB3aXRoIFdlYkdMLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJ3aW5kb3cgaXMgbm90IGF2YWlsYWJsZSwgeW91IG11c3QgYmUgcnVubmluZyBpbiBhbiBlbnZpcm9ubWVudCB3aXRoIFdlYkdMLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBXZWJHTCBidWZmZXIuXHJcbiAgICAgKiBAcGFyYW0gZ2wgVGhlIFdlYkdMIHJlbmRlcmluZyBjb250ZXh0LlxyXG4gICAgICogQHBhcmFtIGRhdGEgVGhlIGRhdGEgdG8gYWRkIHRvIHRoZSBidWZmZXIuXHJcbiAgICAgKiBAcGFyYW0gYXJyYXlUeXBlIFRoZSBkYXRhIHR5cGUgZm9yIHRoZSBidWZmZXIuXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IEEgR0wgRW51bSBzcGVjaWZ5aW5nIHRoZSBiaW5kaW5nIHBvaW50ICh0YXJnZXQpLlxyXG4gICAgICogQHJldHVybnMgVGhlIFdlYkdMIGJ1ZmZlci5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUJ1ZmZlcihnbCwgZGF0YSwgYXJyYXlUeXBlLCB0YXJnZXQpIHtcclxuICAgICAgICBjb25zdCBidWYgPSBnbC5jcmVhdGVCdWZmZXIoKTtcclxuICAgICAgICBnbC5iaW5kQnVmZmVyKCh0YXJnZXQgfHwgZ2wuQVJSQVlfQlVGRkVSKSwgYnVmKTtcclxuICAgICAgICBnbC5idWZmZXJEYXRhKCh0YXJnZXQgfHwgZ2wuQVJSQVlfQlVGRkVSKSwgbmV3IChhcnJheVR5cGUgfHwgRmxvYXQzMkFycmF5KShkYXRhKSwgZ2wuU1RBVElDX0RSQVcpO1xyXG4gICAgICAgIHJldHVybiBidWY7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFRyYW5zZmVyIGRhdGEgb250byBjbGFtcGVkIHRleHR1cmUgYW5kIHR1cm4gb2ZmIGFueSBmaWx0ZXJpbmdcclxuICAgICAqIEBwYXJhbSBnbCBUaGUgV2ViR0wgcmVuZGVyaW5nIGNvbnRleHQuXHJcbiAgICAgKiBAcGFyYW0gcGl4ZWxEYXRhIFRoZSBwaXhlbCBkYXRhIHRvIGNyZWF0ZSB0aGUgdmlldyBmcm9tLlxyXG4gICAgICogQHBhcmFtIGRpbWVuc2lvbnMgVGhlIGRpbWVuc2lvbnMgdG8gY3JlYXRlIHRoZSB0ZXh0dXJlLlxyXG4gICAgICogQHJldHVybnMgVGhlIHRleHR1cmUuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVUZXh0dXJlKGdsLCBwaXhlbERhdGEsIGRpbWVuc2lvbnMpIHtcclxuICAgICAgICBjb25zdCB0ZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xyXG4gICAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRleHR1cmUpO1xyXG4gICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIGdsLkNMQU1QX1RPX0VER0UpO1xyXG4gICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIGdsLkNMQU1QX1RPX0VER0UpO1xyXG4gICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5ORUFSRVNUKTtcclxuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTkVBUkVTVCk7XHJcbiAgICAgICAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBnbC5SR0JBMzJJLCBkaW1lbnNpb25zLngsIGRpbWVuc2lvbnMueSwgMCwgZ2wuUkdCQV9JTlRFR0VSLCBnbC5JTlQsIHBpeGVsRGF0YSk7XHJcbiAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgbnVsbCk7XHJcbiAgICAgICAgcmV0dXJuIHRleHR1cmU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNldCB0aGUgdGV4dXJlIGludG8gdGhlIGZyYW1lYnVmZmVyLlxyXG4gICAgICogQHBhcmFtIGdsIFRoZSBXZWJHTCByZW5kZXJpbmcgY29udGV4dC5cclxuICAgICAqIEBwYXJhbSBmcmFtZUJ1ZmZlciBUaGUgZnJhbWUgYnVmZmVyIHRvIHNldCB0aGUgdGV4dCBpbiB0by5cclxuICAgICAqIEBwYXJhbSB0ZXh0dXJlIFRoZSB0ZXh0dXJlIHRvIHNldCBpbiB0byB0aGUgZnJhbWVidWZmZXIuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcmFtZUJ1ZmZlclNldFRleHR1cmUoZ2wsIGZyYW1lQnVmZmVyLCB0ZXh0dXJlKSB7XHJcbiAgICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBmcmFtZUJ1ZmZlcik7XHJcbiAgICAgICAgZ2wuZnJhbWVidWZmZXJUZXh0dXJlMkQoZ2wuRlJBTUVCVUZGRVIsIGdsLkNPTE9SX0FUVEFDSE1FTlQwLCBnbC5URVhUVVJFXzJELCB0ZXh0dXJlLCAwKTtcclxuICAgICAgICAvLyBUZXN0IGZvciBtb2JpbGUgYnVnIE1ETi0+V2ViR0xfYmVzdF9wcmFjdGljZXMsIGJ1bGxldCA3XHJcbiAgICAgICAgY29uc3QgZnJhbWVCdWZmZXJTdGF0dXMgPSBnbC5jaGVja0ZyYW1lYnVmZmVyU3RhdHVzKGdsLkZSQU1FQlVGRkVSKTtcclxuICAgICAgICBpZiAoZnJhbWVCdWZmZXJTdGF0dXMgIT09IGdsLkZSQU1FQlVGRkVSX0NPTVBMRVRFKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiRXJyb3IgYXR0YWNoaW5nIGZsb2F0IHRleHR1cmUgdG8gZnJhbWVidWZmZXIuIFlvdXIgZGV2aWNlIGlzIHByb2JhYmx5IGluY29tcGF0aWJsZS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuV2ViR0xIZWxwZXIgPSBXZWJHTEhlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZDJWaVIweElaV3h3WlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12ZDJWaVIwd3ZkMlZpUjB4SVpXeHdaWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJMRFJGUVVGNVJUdEJRVU42UlN3d1JVRkJkVVU3UVVGSmRrVTdPMGRCUlVjN1FVRkRTRHRKUVVOSk96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zWVVGQllTeERRVUZETEdGQlFUWkNPMUZCUTNKRUxFMUJRVTBzVFVGQlRTeEhRVUZITEdGQlFXRXNRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJRenRSUVVWNlF5eEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NUMEZCVHl4TlFVRk5MRXRCUVVzc1YwRkJWeXhGUVVGRk8xbEJRMmhGTEUxQlFVMHNVVUZCVVN4SFFVRkhMR0ZCUVdFc1EwRkJReXhYUVVGWExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdXVUZGYmtRc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRk8yZENRVU5xUXl4TlFVRk5MRTFCUVUwc1IwRkJSeXhoUVVGaExFTkJRVU1zVTBGQlV5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMmRDUVVWcVJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEVWQlFVVTdiMEpCUXk5Q0xFMUJRVTBzUlVGQlJTeEhRVUZITEdGQlFXRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03YjBKQlJURkRMRWxCUVVrc01rSkJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVN2QwSkJRekZDTEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExIVkVRVUYxUkN4RlFVRkZMRVZCUVVVc1UwRkJVeXhGUVVGRkxFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNc1EwRkJRenR4UWtGRE4wZzdiMEpCUlVRc1QwRkJUeXhGUVVGRkxFTkJRVU03YVVKQlEySTdjVUpCUVUwN2IwSkJRMGdzVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc09FUkJRVGhFTEVWQlFVVXNSVUZCUlN4VFFVRlRMRVZCUVVVc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXl4RFFVRkRPMmxDUVVOd1NUdGhRVU5LTzJsQ1FVRk5PMmRDUVVOSUxFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMSEZHUVVGeFJpeERRVUZETEVOQlFVTTdZVUZEYUVnN1UwRkRTanRoUVVGTk8xbEJRMGdzVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc05FVkJRVFJGTEVOQlFVTXNRMEZCUXp0VFFVTjJSenRKUVVOTUxFTkJRVU03U1VGRlJEczdPenM3T3p0UFFVOUhPMGxCUTBrc1RVRkJUU3hEUVVGRExGbEJRVmtzUTBGQlF5eEZRVUUwUWl4RlFVRkZMRWxCUVdsQ0xFVkJRVVVzVTBGQlpTeEZRVUZGTEUxQlFXVTdVVUZEZUVjc1RVRkJUU3hIUVVGSExFZEJRVWNzUlVGQlJTeERRVUZETEZsQlFWa3NSVUZCUlN4RFFVRkRPMUZCUlRsQ0xFVkJRVVVzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4TlFVRk5MRWxCUVVrc1JVRkJSU3hEUVVGRExGbEJRVmtzUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTJoRUxFVkJRVVVzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4TlFVRk5MRWxCUVVrc1JVRkJSU3hEUVVGRExGbEJRVmtzUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4VFFVRlRMRWxCUVVrc1dVRkJXU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8xRkJSV3hITEU5QlFVOHNSMEZCUnl4RFFVRkRPMGxCUTJZc1EwRkJRenRKUVVWRU96czdPenM3VDBGTlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4aFFVRmhMRU5CUVVNc1JVRkJORUlzUlVGQlJTeFRRVUV3UWl4RlFVRkZMRlZCUVc5RE8xRkJRM1JJTEUxQlFVMHNUMEZCVHl4SFFVRkhMRVZCUVVVc1EwRkJReXhoUVVGaExFVkJRVVVzUTBGQlF6dFJRVVZ1UXl4RlFVRkZMRU5CUVVNc1YwRkJWeXhEUVVGRExFVkJRVVVzUTBGQlF5eFZRVUZWTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRkRka01zUlVGQlJTeERRVUZETEdGQlFXRXNRMEZCUXl4RlFVRkZMRU5CUVVNc1ZVRkJWU3hGUVVGRkxFVkJRVVVzUTBGQlF5eGpRVUZqTEVWQlFVVXNSVUZCUlN4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGRE8xRkJRM0pGTEVWQlFVVXNRMEZCUXl4aFFVRmhMRU5CUVVNc1JVRkJSU3hEUVVGRExGVkJRVlVzUlVGQlJTeEZRVUZGTEVOQlFVTXNZMEZCWXl4RlFVRkZMRVZCUVVVc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF6dFJRVU55UlN4RlFVRkZMRU5CUVVNc1lVRkJZU3hEUVVGRExFVkJRVVVzUTBGQlF5eFZRVUZWTEVWQlFVVXNSVUZCUlN4RFFVRkRMR3RDUVVGclFpeEZRVUZGTEVWQlFVVXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRSUVVOdVJTeEZRVUZGTEVOQlFVTXNZVUZCWVN4RFFVRkRMRVZCUVVVc1EwRkJReXhWUVVGVkxFVkJRVVVzUlVGQlJTeERRVUZETEd0Q1FVRnJRaXhGUVVGRkxFVkJRVVVzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVTnVSU3hGUVVGRkxFTkJRVU1zVlVGQlZTeERRVUZETEVWQlFVVXNRMEZCUXl4VlFVRlZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eFBRVUZQTEVWQlFVVXNWVUZCVlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1dVRkJXU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEhRVUZITEVWQlFVVXNVMEZCVXl4RFFVRkRMRU5CUVVNN1VVRkRMMGNzUlVGQlJTeERRVUZETEZkQlFWY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1ZVRkJWU3hGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzFGQlJYQkRMRTlCUVU4c1QwRkJUeXhEUVVGRE8wbEJRMjVDTEVOQlFVTTdTVUZGUkRzN096czdUMEZMUnp0SlFVTkpMRTFCUVUwc1EwRkJReXh4UWtGQmNVSXNRMEZCUXl4RlFVRTBRaXhGUVVGRkxGZEJRVFpDTEVWQlFVVXNUMEZCY1VJN1VVRkRiRWdzUlVGQlJTeERRVUZETEdWQlFXVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1YwRkJWeXhGUVVGRkxGZEJRVmNzUTBGQlF5eERRVUZETzFGQlJXaEVMRVZCUVVVc1EwRkJReXh2UWtGQmIwSXNRMEZCUXl4RlFVRkZMRU5CUVVNc1YwRkJWeXhGUVVGRkxFVkJRVVVzUTBGQlF5eHBRa0ZCYVVJc1JVRkJSU3hGUVVGRkxFTkJRVU1zVlVGQlZTeEZRVUZGTEU5QlFVOHNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVWNlJpd3dSRUZCTUVRN1VVRkRNVVFzVFVGQlRTeHBRa0ZCYVVJc1IwRkJSeXhGUVVGRkxFTkJRVU1zYzBKQlFYTkNMRU5CUVVNc1JVRkJSU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzFGQlJYQkZMRWxCUVVrc2FVSkJRV2xDTEV0QlFVc3NSVUZCUlN4RFFVRkRMRzlDUVVGdlFpeEZRVUZGTzFsQlF5OURMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEhGR1FVRnhSaXhEUVVGRExFTkJRVU03VTBGRGFFZzdTVUZEVEN4RFFVRkRPME5CUTBvN1FVRXhSa1FzYTBOQk1FWkRJbjA9IiwidmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBjcnlwdG9FcnJvcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY3J5cHRvL2Rpc3QvZXJyb3IvY3J5cHRvRXJyb3JcIik7XHJcbmNvbnN0IHN0ZGxpYl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3N0ZGxpYlwiKSk7XHJcbmNvbnN0IHZlcnRleFNoYWRlckNvZGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi92ZXJ0ZXhTaGFkZXJDb2RlXCIpKTtcclxuY29uc3Qgd2ViR0xIZWxwZXJfMSA9IHJlcXVpcmUoXCIuL3dlYkdMSGVscGVyXCIpO1xyXG4vKipcclxuICogV2ViR0xXb3JrZXIuXHJcbiAqL1xyXG5jbGFzcyBXZWJHTFdvcmtlciB7XHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemUgdGhlIHdlYiBHTCBXb3JrZXIuXHJcbiAgICAgKiBAcGFyYW0gd2ViR0xQbGF0Zm9ybSBUaGUgd2ViR0wgcGxhdGZvcm0uXHJcbiAgICAgKiBAcGFyYW0gc3RhdGVMZW5ndGggVGhlIGxlbmd0aCBvZiB0aGUgc3RhdGUuXHJcbiAgICAgKiBAcGFyYW0gdGV4ZWxTaXplIFRoZSB0ZXhlbCBzaXplLlxyXG4gICAgICovXHJcbiAgICBpbml0aWFsaXplKHdlYkdMUGxhdGZvcm0sIHN0YXRlTGVuZ3RoLCB0ZXhlbFNpemUpIHtcclxuICAgICAgICB0aGlzLl9jb250ZXh0ID0gd2ViR0xIZWxwZXJfMS5XZWJHTEhlbHBlci5jcmVhdGVDb250ZXh0KHdlYkdMUGxhdGZvcm0pO1xyXG4gICAgICAgIHRoaXMuX2RpbWVuc2lvbnMgPSB7IHg6IHN0YXRlTGVuZ3RoLCB5OiAwIH07XHJcbiAgICAgICAgY29uc3QgbWF4SW1hZ2VTaXplID0gTWF0aC5wb3codGhpcy5fY29udGV4dC5NQVhfVEVYVFVSRV9TSVpFLCAyKSAqIDAuNTtcclxuICAgICAgICBjb25zdCBpbWFnZVNpemUgPSBNYXRoLmZsb29yKG1heEltYWdlU2l6ZSAvIHRoaXMuX2RpbWVuc2lvbnMueCAvIHRleGVsU2l6ZSkgKiB0aGlzLl9kaW1lbnNpb25zLnggKiB0ZXhlbFNpemU7XHJcbiAgICAgICAgdGhpcy5fZGltZW5zaW9ucy55ID0gaW1hZ2VTaXplIC8gdGhpcy5fZGltZW5zaW9ucy54IC8gdGV4ZWxTaXplO1xyXG4gICAgICAgIHRoaXMuX3Byb2dyYW1zID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMuX2lwdCA9IHtcclxuICAgICAgICAgICAgZGF0YTogbmV3IEludDMyQXJyYXkoaW1hZ2VTaXplKSxcclxuICAgICAgICAgICAgbGVuZ3RoOiBpbWFnZVNpemVcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIEdQVSB0ZXh0dXJlIGJ1ZmZlciA9IGZyb20gSlMgdHlwZWQgYXJyYXlcclxuICAgICAgICB0aGlzLl9idWZmZXJzID0ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogd2ViR0xIZWxwZXJfMS5XZWJHTEhlbHBlci5jcmVhdGVCdWZmZXIodGhpcy5fY29udGV4dCwgWy0xLCAtMSwgMSwgLTEsIDEsIDEsIC0xLCAxXSksXHJcbiAgICAgICAgICAgIHRleHR1cmU6IHdlYkdMSGVscGVyXzEuV2ViR0xIZWxwZXIuY3JlYXRlQnVmZmVyKHRoaXMuX2NvbnRleHQsIFswLCAwLCAxLCAwLCAxLCAxLCAwLCAxXSksXHJcbiAgICAgICAgICAgIGluZGV4OiB3ZWJHTEhlbHBlcl8xLldlYkdMSGVscGVyLmNyZWF0ZUJ1ZmZlcih0aGlzLl9jb250ZXh0LCBbMSwgMiwgMCwgMywgMCwgMl0sIFVpbnQxNkFycmF5LCB0aGlzLl9jb250ZXh0LkVMRU1FTlRfQVJSQVlfQlVGRkVSKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fYXR0cmliID0ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogMCxcclxuICAgICAgICAgICAgdGV4dHVyZTogMVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fdmVydGV4QXJyYXkgPSB0aGlzLl9jb250ZXh0LmNyZWF0ZVZlcnRleEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5iaW5kVmVydGV4QXJyYXkodGhpcy5fdmVydGV4QXJyYXkpO1xyXG4gICAgICAgIHRoaXMuYmluZEJ1ZmZlcnMoKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LmJpbmRWZXJ0ZXhBcnJheShudWxsKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVZlcnRleFNoYWRlcigpO1xyXG4gICAgICAgIHRoaXMuX2ZyYW1lQnVmZmVyID0gdGhpcy5fY29udGV4dC5jcmVhdGVGcmFtZWJ1ZmZlcigpO1xyXG4gICAgICAgIHRoaXMuX3RleHR1cmUwID0gd2ViR0xIZWxwZXJfMS5XZWJHTEhlbHBlci5jcmVhdGVUZXh0dXJlKHRoaXMuX2NvbnRleHQsIHRoaXMuX2lwdC5kYXRhLCB0aGlzLl9kaW1lbnNpb25zKTtcclxuICAgICAgICB0aGlzLl90ZXh0dXJlMSA9IHdlYkdMSGVscGVyXzEuV2ViR0xIZWxwZXIuY3JlYXRlVGV4dHVyZSh0aGlzLl9jb250ZXh0LCBuZXcgSW50MzJBcnJheShpbWFnZVNpemUpLCB0aGlzLl9kaW1lbnNpb25zKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBkaW1lbnNpb25zIGZyb20gdGhlIHdvcmtlci5cclxuICAgICAqIEByZXR1cm5zIFRoZSBkaW1lbnNpb25zLlxyXG4gICAgICovXHJcbiAgICBnZXREaW1lbnNpb25zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kaW1lbnNpb25zO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIElQVCBmcm9tIHRoZSB3b3JrZXIuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgaXB0LlxyXG4gICAgICovXHJcbiAgICBnZXRJcHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lwdDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGEgcHJvZ3JhbSB0byB0aGUgd29ya2VyLlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHByb2dyYW0gdG8gYWRkLlxyXG4gICAgICogQHBhcmFtIGNvZGUgVGhlIGNvZGUgZm9yIHRoZSBwcm9ncmFtLlxyXG4gICAgICogQHBhcmFtIHVuaWZvcm1zIEFkZGl0aW9uYWwgdW5pZm9ybSBsb2NhdGlvbnMuXHJcbiAgICAgKi9cclxuICAgIGFkZFByb2dyYW0obmFtZSwgY29kZSwgLi4udW5pZm9ybXMpIHtcclxuICAgICAgICBjb25zdCBmcmFnbWVudFNoYWRlciA9IHRoaXMuY3JlYXRlRnJhZ21lbnRTaGFkZXIoY29kZSk7XHJcbiAgICAgICAgY29uc3QgcHJvZ3JhbSA9IHRoaXMuX2NvbnRleHQuY3JlYXRlUHJvZ3JhbSgpO1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQuYXR0YWNoU2hhZGVyKHByb2dyYW0sIHRoaXMuX3ZlcnRleFNoYWRlcik7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgZnJhZ21lbnRTaGFkZXIpO1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQuYmluZEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIHRoaXMuX2F0dHJpYi5wb3NpdGlvbiwgXCJwb3NpdGlvblwiKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LmJpbmRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCB0aGlzLl9hdHRyaWIudGV4dHVyZSwgXCJ0ZXh0dXJlXCIpO1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQubGlua1Byb2dyYW0ocHJvZ3JhbSk7XHJcbiAgICAgICAgY29uc3QgdW5pZm9ybVZhcnMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgZm9yIChjb25zdCB2YXJpYWJsZSBvZiB1bmlmb3Jtcykge1xyXG4gICAgICAgICAgICB1bmlmb3JtVmFycy5zZXQodmFyaWFibGUsIHRoaXMuX2NvbnRleHQuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHZhcmlhYmxlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3Byb2dyYW1zLnNldChuYW1lLCB7IHByb2dyYW0sIHVuaWZvcm1WYXJzIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSdW4gdGhlIHByb2dyYW0gaW4gdGhlIHdlYiB3b3JrZXIuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgcHJvZ3JhbSB0byBydW4uXHJcbiAgICAgKiBAcGFyYW0gY291bnQgVGhlIG51bWJlciBvZiB0aW1lcyB0byBydW4gaXQuXHJcbiAgICAgKiBAcGFyYW0gdW5pZm9ybXMgQWRkaXRpb25hbCB1bmlmb3JtIGxvY2F0aW9ucyB0byB1c2UuXHJcbiAgICAgKi9cclxuICAgIHJ1blByb2dyYW0obmFtZSwgY291bnQsIC4uLnVuaWZvcm1zKSB7XHJcbiAgICAgICAgY29uc3QgaW5mbyA9IHRoaXMuX3Byb2dyYW1zLmdldChuYW1lKTtcclxuICAgICAgICBjb25zdCBwcm9ncmFtID0gaW5mby5wcm9ncmFtO1xyXG4gICAgICAgIGlmICghdGhpcy5fY29udGV4dC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIHRoaXMuX2NvbnRleHQuTElOS19TVEFUVVMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiRmFpbGVkIHRvIGxpbmsgR0xTTCBwcm9ncmFtIGNvZGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHVuaWZvcm1WYXJzID0gaW5mby51bmlmb3JtVmFycztcclxuICAgICAgICBjb25zdCB1VGV4dHVyZSA9IHRoaXMuX2NvbnRleHQuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIFwidV90ZXh0dXJlXCIpO1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQudXNlUHJvZ3JhbShwcm9ncmFtKTtcclxuICAgICAgICBsZXQgbG9jYWxDb3VudCA9IGNvdW50O1xyXG4gICAgICAgIHdoaWxlIChsb2NhbENvdW50LS0gPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbnRleHQuYmluZFRleHR1cmUodGhpcy5fY29udGV4dC5URVhUVVJFXzJELCB0aGlzLl90ZXh0dXJlMCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbnRleHQuYWN0aXZlVGV4dHVyZSh0aGlzLl9jb250ZXh0LlRFWFRVUkUwKTtcclxuICAgICAgICAgICAgdGhpcy5fY29udGV4dC51bmlmb3JtMWkodVRleHR1cmUsIDApO1xyXG4gICAgICAgICAgICB0aGlzLl9jb250ZXh0LnZpZXdwb3J0KDAsIDAsIHRoaXMuX2RpbWVuc2lvbnMueCwgdGhpcy5fZGltZW5zaW9ucy55KTtcclxuICAgICAgICAgICAgd2ViR0xIZWxwZXJfMS5XZWJHTEhlbHBlci5mcmFtZUJ1ZmZlclNldFRleHR1cmUodGhpcy5fY29udGV4dCwgdGhpcy5fZnJhbWVCdWZmZXIsIHRoaXMuX3RleHR1cmUxKTtcclxuICAgICAgICAgICAgdGhpcy5fY29udGV4dC5iaW5kVmVydGV4QXJyYXkodGhpcy5fdmVydGV4QXJyYXkpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVWYXJzIG9mIHVuaWZvcm1zKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb250ZXh0LnVuaWZvcm0xaSh1bmlmb3JtVmFycy5nZXQodVZhcnMubmFtZSksIHVWYXJzLnZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9jb250ZXh0LmRyYXdFbGVtZW50cyh0aGlzLl9jb250ZXh0LlRSSUFOR0xFUywgNiwgdGhpcy5fY29udGV4dC5VTlNJR05FRF9TSE9SVCwgMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleDAgPSB0aGlzLl90ZXh0dXJlMDtcclxuICAgICAgICAgICAgdGhpcy5fdGV4dHVyZTAgPSB0aGlzLl90ZXh0dXJlMTtcclxuICAgICAgICAgICAgdGhpcy5fdGV4dHVyZTEgPSB0ZXgwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZpbmlzaFJ1bigpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWFkIGRhdGEgZnJvbSB0aGUgd29ya2VyLlxyXG4gICAgICogQHBhcmFtIHggVGhlIHggcG9zaXRpb24gdG8gcmVhZCBmcm9tLlxyXG4gICAgICogQHBhcmFtIHkgVGhlIHkgcG9zaXRpb24gdG8gcmVhZCBmcm9tLlxyXG4gICAgICogQHBhcmFtIG4gVGhlIHdpZHRoIHBvc2l0aW9uIHRvIHJlYWQgZnJvbS5cclxuICAgICAqIEBwYXJhbSBtIFRoZSBoZWlnaHQgcG9zaXRpb24gdG8gcmVhZCBmcm9tLlxyXG4gICAgICogQHJldHVybnMgVGhlIGRhdGEgYXQgdGhlIHJlcXVlc3RlZCBwb3NpdGlvbi5cclxuICAgICAqL1xyXG4gICAgcmVhZERhdGEoeCwgeSwgbiwgbSkge1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQuYmluZEZyYW1lYnVmZmVyKHRoaXMuX2NvbnRleHQuRlJBTUVCVUZGRVIsIHRoaXMuX2ZyYW1lQnVmZmVyKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LnJlYWRQaXhlbHMoeCwgeSwgbiwgbSwgdGhpcy5fY29udGV4dC5SR0JBX0lOVEVHRVIsIHRoaXMuX2NvbnRleHQuSU5ULCB0aGlzLl9pcHQuZGF0YSk7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5iaW5kRnJhbWVidWZmZXIodGhpcy5fY29udGV4dC5GUkFNRUJVRkZFUiwgbnVsbCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lwdC5kYXRhLnN1YmFycmF5KDAsIHRoaXMuX2lwdC5sZW5ndGgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBXcml0ZSBkYXRhIHRvIHRoZSB3b3JrZXIuXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSB0byB3cml0ZS5cclxuICAgICAqL1xyXG4gICAgd3JpdGVEYXRhKGRhdGEpIHtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LmJpbmRUZXh0dXJlKHRoaXMuX2NvbnRleHQuVEVYVFVSRV8yRCwgdGhpcy5fdGV4dHVyZTApO1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQudGV4SW1hZ2UyRCh0aGlzLl9jb250ZXh0LlRFWFRVUkVfMkQsIDAsIHRoaXMuX2NvbnRleHQuUkdCQTMySSwgdGhpcy5fZGltZW5zaW9ucy54LCB0aGlzLl9kaW1lbnNpb25zLnksIDAsIHRoaXMuX2NvbnRleHQuUkdCQV9JTlRFR0VSLCB0aGlzLl9jb250ZXh0LklOVCwgZGF0YSk7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5iaW5kVGV4dHVyZSh0aGlzLl9jb250ZXh0LlRFWFRVUkVfMkQsIG51bGwpO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBiaW5kQnVmZmVycygpIHtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LmJpbmRCdWZmZXIodGhpcy5fY29udGV4dC5BUlJBWV9CVUZGRVIsIHRoaXMuX2J1ZmZlcnMudGV4dHVyZSk7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLl9hdHRyaWIudGV4dHVyZSk7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMuX2F0dHJpYi50ZXh0dXJlLCAyLCB0aGlzLl9jb250ZXh0LkZMT0FULCBmYWxzZSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5iaW5kQnVmZmVyKHRoaXMuX2NvbnRleHQuQVJSQVlfQlVGRkVSLCB0aGlzLl9idWZmZXJzLnBvc2l0aW9uKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMuX2F0dHJpYi5wb3NpdGlvbik7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMuX2F0dHJpYi5wb3NpdGlvbiwgMiwgdGhpcy5fY29udGV4dC5GTE9BVCwgZmFsc2UsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQuYmluZEJ1ZmZlcih0aGlzLl9jb250ZXh0LkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLl9idWZmZXJzLmluZGV4KTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY3JlYXRlVmVydGV4U2hhZGVyKCkge1xyXG4gICAgICAgIHRoaXMuX3ZlcnRleFNoYWRlciA9IHRoaXMuX2NvbnRleHQuY3JlYXRlU2hhZGVyKHRoaXMuX2NvbnRleHQuVkVSVEVYX1NIQURFUik7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5zaGFkZXJTb3VyY2UodGhpcy5fdmVydGV4U2hhZGVyLCB2ZXJ0ZXhTaGFkZXJDb2RlXzEuZGVmYXVsdCk7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5jb21waWxlU2hhZGVyKHRoaXMuX3ZlcnRleFNoYWRlcik7XHJcbiAgICAgICAgLy8gVGhpcyBzaG91bGQgbm90IGZhaWwuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9jb250ZXh0LmdldFNoYWRlclBhcmFtZXRlcih0aGlzLl92ZXJ0ZXhTaGFkZXIsIHRoaXMuX2NvbnRleHQuQ09NUElMRV9TVEFUVVMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBDb3VsZCBub3QgYnVpbGQgdmVydGV4IHNoYWRlci5cblxuLS0tIENPREUgRFVNUCAtLS0ke3ZlcnRleFNoYWRlckNvZGVfMS5kZWZhdWx0fVxuXG4tLS0gRVJST1IgTE9HIC0tLVxuJHt0aGlzLl9jb250ZXh0LmdldFNoYWRlckluZm9Mb2codGhpcy5fdmVydGV4U2hhZGVyKX1gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNyZWF0ZUZyYWdtZW50U2hhZGVyKGNvZGUpIHtcclxuICAgICAgICBjb25zdCBmcmFnbWVudFNoYWRlciA9IHRoaXMuX2NvbnRleHQuY3JlYXRlU2hhZGVyKHRoaXMuX2NvbnRleHQuRlJBR01FTlRfU0hBREVSKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LnNoYWRlclNvdXJjZShmcmFnbWVudFNoYWRlciwgc3RkbGliXzEuZGVmYXVsdCArIGNvZGUpO1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQuY29tcGlsZVNoYWRlcihmcmFnbWVudFNoYWRlcik7XHJcbiAgICAgICAgLy8gVXNlIHRoaXMgb3V0cHV0IHRvIGRlYnVnIHRoZSBzaGFkZXJcclxuICAgICAgICAvLyBLZWVwIGluIG1pbmQgdGhhdCBXZWJHTCBHTFNMIGlzICoqbXVjaCoqIHN0cmljdGVyIHRoYW4gZS5nLiBPcGVuR0wgR0xTTFxyXG4gICAgICAgIGlmICghdGhpcy5fY29udGV4dC5nZXRTaGFkZXJQYXJhbWV0ZXIoZnJhZ21lbnRTaGFkZXIsIHRoaXMuX2NvbnRleHQuQ09NUElMRV9TVEFUVVMpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvZGVMaW5lcyA9IGNvZGUuc3BsaXQoXCJcXG5cIik7XHJcbiAgICAgICAgICAgIGxldCBkYmdNc2cgPSBcIkNvdWxkIG5vdCBidWlsZCBmcmFnbWVudCBzaGFkZXIuXFxuXFxuLS0tLS0tLS0tLS0tLS0tLS0tIEtFUk5FTCBDT0RFIERVTVAgLS0tLS0tLS0tLS0tLS0tLS0tXFxuXCI7XHJcbiAgICAgICAgICAgIGZvciAobGV0IG5sID0gMDsgbmwgPCBjb2RlTGluZXMubGVuZ3RoOyBubCsrKSB7XHJcbiAgICAgICAgICAgICAgICBkYmdNc2cgKz0gYCR7c3RkbGliXzEuZGVmYXVsdC5zcGxpdChcIlxcblwiKS5sZW5ndGggKyBubH0+ICR7Y29kZUxpbmVzW25sXX1cXG5gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRiZ01zZyArPSBgXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEVSUk9SICBMT0cgLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuJHt0aGlzLl9jb250ZXh0LmdldFNoYWRlckluZm9Mb2coZnJhZ21lbnRTaGFkZXIpfWA7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGRiZ01zZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmcmFnbWVudFNoYWRlcjtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgZmluaXNoUnVuKCkge1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQuYmluZFZlcnRleEFycmF5KG51bGwpO1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQuYmluZFRleHR1cmUodGhpcy5fY29udGV4dC5URVhUVVJFXzJELCBudWxsKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LmJpbmRGcmFtZWJ1ZmZlcih0aGlzLl9jb250ZXh0LkZSQU1FQlVGRkVSLCBudWxsKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLldlYkdMV29ya2VyID0gV2ViR0xXb3JrZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWQyVmlSMHhYYjNKclpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmQyVmlSMHd2ZDJWaVIweFhiM0pyWlhJdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQkxEQkZRVUYxUlR0QlFVVjJSU3h6UkVGQk9FSTdRVUZET1VJc01FVkJRV3RFTzBGQlEyeEVMQ3REUVVFMFF6dEJRVWsxUXpzN1IwRkZSenRCUVVOSU8wbEJkMEpKT3pzN096dFBRVXRITzBsQlEwa3NWVUZCVlN4RFFVRkRMR0ZCUVRaQ0xFVkJRVVVzVjBGQmJVSXNSVUZCUlN4VFFVRnBRanRSUVVOdVJpeEpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMSGxDUVVGWExFTkJRVU1zWVVGQllTeERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkRPMUZCUTNwRUxFbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1YwRkJWeXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXp0UlFVVTFReXhOUVVGTkxGbEJRVmtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zWjBKQlFXZENMRVZCUVVVc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETzFGQlEzWkZMRTFCUVUwc1UwRkJVeXhIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNXVUZCV1N4SFFVRkhMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF5eEhRVUZITEZOQlFWTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF5eEhRVUZITEZOQlFWTXNRMEZCUXp0UlFVTTNSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNSMEZCUnl4VFFVRlRMRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETEVkQlFVY3NVMEZCVXl4RFFVRkRPMUZCUldoRkxFbEJRVWtzUTBGQlF5eFRRVUZUTEVkQlFVY3NTVUZCU1N4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVNelFpeEpRVUZKTEVOQlFVTXNTVUZCU1N4SFFVRkhPMWxCUTFJc1NVRkJTU3hGUVVGRkxFbEJRVWtzVlVGQlZTeERRVUZETEZOQlFWTXNRMEZCUXp0WlFVTXZRaXhOUVVGTkxFVkJRVVVzVTBGQlV6dFRRVU53UWl4RFFVRkRPMUZCUlVZc01rTkJRVEpETzFGQlF6TkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWM3V1VGRFdpeFJRVUZSTEVWQlFVVXNlVUpCUVZjc1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJReTlGTEU5QlFVOHNSVUZCUlN4NVFrRkJWeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpGRkxFdEJRVXNzUlVGQlJTeDVRa0ZCVnl4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hYUVVGWExFVkJRVVVzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4dlFrRkJiMElzUTBGQlF6dFRRVU4wU0N4RFFVRkRPMUZCUlVZc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ6dFpRVU5ZTEZGQlFWRXNSVUZCUlN4RFFVRkRPMWxCUTFnc1QwRkJUeXhGUVVGRkxFTkJRVU03VTBGRFlpeERRVUZETzFGQlJVWXNTVUZCU1N4RFFVRkRMRmxCUVZrc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEdsQ1FVRnBRaXhGUVVGRkxFTkJRVU03VVVGRGRFUXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhsUVVGbExFTkJRVU1zU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMUZCUTJwRUxFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0UlFVTnVRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEdWQlFXVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVOd1F5eEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xFVkJRVVVzUTBGQlF6dFJRVU14UWl4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNhVUpCUVdsQ0xFVkJRVVVzUTBGQlF6dFJRVU4wUkN4SlFVRkpMRU5CUVVNc1UwRkJVeXhIUVVGSExIbENRVUZYTEVOQlFVTXNZVUZCWVN4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzFGQlF6VkdMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzZVVKQlFWY3NRMEZCUXl4aFFVRmhMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeEpRVUZKTEZWQlFWVXNRMEZCUXl4VFFVRlRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdTVUZETTBjc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkpMR0ZCUVdFN1VVRkRhRUlzVDBGQlR5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRPMGxCUXpWQ0xFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hOUVVGTk8xRkJRMVFzVDBGQlR5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRPMGxCUTNKQ0xFTkJRVU03U1VGRlJEczdPenM3VDBGTFJ6dEpRVU5KTEZWQlFWVXNRMEZCUXl4SlFVRlpMRVZCUVVVc1NVRkJXU3hGUVVGRkxFZEJRVWNzVVVGQmEwSTdVVUZETDBRc1RVRkJUU3hqUVVGakxFZEJRVWNzU1VGQlNTeERRVUZETEc5Q1FVRnZRaXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFGQlEzWkVMRTFCUVUwc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RlFVRkZMRU5CUVVNN1VVRkZPVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNRMEZCUXp0UlFVTjRSQ3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZsQlFWa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1kwRkJZeXhEUVVGRExFTkJRVU03VVVGRGNFUXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4UFFVRlBMRVZCUVVVc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFJRVUZSTEVWQlFVVXNWVUZCVlN4RFFVRkRMRU5CUVVNN1VVRkROMFVzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4clFrRkJhMElzUTBGQlF5eFBRVUZQTEVWQlFVVXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGUExFVkJRVVVzVTBGQlV5eERRVUZETEVOQlFVTTdVVUZETTBVc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRkRia01zVFVGQlRTeFhRVUZYTEVkQlFVY3NTVUZCU1N4SFFVRkhMRVZCUVdkRExFTkJRVU03VVVGRE5VUXNTMEZCU3l4TlFVRk5MRkZCUVZFc1NVRkJTU3hSUVVGUkxFVkJRVVU3V1VGRE4wSXNWMEZCVnl4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFVkJRVVVzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4clFrRkJhMElzUTBGQlF5eFBRVUZQTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVOc1JqdFJRVU5FTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUlVGQlJTeEZRVUZGTEU5QlFVOHNSVUZCUlN4WFFVRlhMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRM1pFTEVOQlFVTTdTVUZGUkRzN096czdUMEZMUnp0SlFVTkpMRlZCUVZVc1EwRkJReXhKUVVGWkxFVkJRVVVzUzBGQllTeEZRVUZGTEVkQlFVY3NVVUZCZFVNN1VVRkRja1lzVFVGQlRTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVVUZEZEVNc1RVRkJUU3hQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXp0UlFVVTNRaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eFBRVUZQTEVWQlFVVXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zUlVGQlJUdFpRVU40UlN4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eHJRMEZCYTBNc1EwRkJReXhEUVVGRE8xTkJRemRFTzFGQlJVUXNUVUZCVFN4WFFVRlhMRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF6dFJRVU55UXl4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEd0Q1FVRnJRaXhEUVVGRExFOUJRVThzUlVGQlJTeFhRVUZYTEVOQlFVTXNRMEZCUXp0UlFVTjRSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRSUVVWc1F5eEpRVUZKTEZWQlFWVXNSMEZCUnl4TFFVRkxMRU5CUVVNN1VVRkRka0lzVDBGQlR5eFZRVUZWTEVWQlFVVXNSMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkRja0lzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVWQlFVVXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8xbEJRM0JGTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1dVRkRjRVFzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4VFFVRlRMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlJYSkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU55UlN4NVFrRkJWeXhEUVVGRExIRkNRVUZ4UWl4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzU1VGQlNTeERRVUZETEZsQlFWa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03V1VGRGNFWXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhsUVVGbExFTkJRVU1zU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMWxCUTJwRUxFdEJRVXNzVFVGQlRTeExRVUZMTEVsQlFVa3NVVUZCVVN4RlFVRkZPMmRDUVVNeFFpeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRk5CUVZNc1EwRkJReXhYUVVGWExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdZVUZEY2tVN1dVRkRSQ3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhqUVVGakxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZGZUVZc1RVRkJUU3hKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXp0WlFVTTFRaXhKUVVGSkxFTkJRVU1zVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNN1dVRkRhRU1zU1VGQlNTeERRVUZETEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNN1UwRkRla0k3VVVGRlJDeEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNN1NVRkRja0lzUTBGQlF6dEpRVVZFT3pzN096czdPMDlCVDBjN1NVRkRTU3hSUVVGUkxFTkJRVU1zUTBGQlV5eEZRVUZGTEVOQlFWTXNSVUZCUlN4RFFVRlRMRVZCUVVVc1EwRkJVenRSUVVOMFJDeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMR1ZCUVdVc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZkQlFWY3NSVUZCUlN4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03VVVGRE5VVXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNXVUZCV1N4RlFVRkZMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRGNFY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhsUVVGbExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4WFFVRlhMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGREwwUXNUMEZCVHl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdTVUZEZUVRc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkpMRk5CUVZNc1EwRkJReXhKUVVGeFFqdFJRVU5zUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1JVRkJSU3hKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdVVUZEY0VVc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhGUVVGRkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGbEJRVmtzUlVGQlJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU0zU3l4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dEpRVU01UkN4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxGZEJRVmM3VVVGRFppeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZsQlFWa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzFGQlF6VkZMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zZFVKQlFYVkNMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVTTFSQ3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEcxQ1FVRnRRaXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NSVUZCUlN4TFFVRkxMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6ZEdMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1dVRkJXU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1VVRkROMFVzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4MVFrRkJkVUlzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8xRkJRemRFTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhGUVVGRkxFdEJRVXNzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRPVVlzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eHZRa0ZCYjBJc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTNSR0xFTkJRVU03U1VGRlJDeGxRVUZsTzBsQlExQXNhMEpCUVd0Q08xRkJRM1JDTEVsQlFVa3NRMEZCUXl4aFFVRmhMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF6dFJRVU0zUlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNZVUZCWVN4RlFVRkZMREJDUVVGblFpeERRVUZETEVOQlFVTTdVVUZEYWtVc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGRE8xRkJSV2hFTEhkQ1FVRjNRanRSUVVONFFpeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1lVRkJZU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNZMEZCWXl4RFFVRkRMRVZCUVVVN1dVRkRja1lzVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUTJwQ096dHRRa0ZGUnl3d1FrRkJaMEk3T3p0RlFVZHFReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNSVUZCUlN4RFFVTjZReXhEUVVGRE8xTkJRMHc3U1VGRFRDeERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMRzlDUVVGdlFpeERRVUZETEVsQlFWazdVVUZEY2tNc1RVRkJUU3hqUVVGakxFZEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eGxRVUZsTEVOQlFVTXNRMEZCUXp0UlFVVnFSaXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZsQlFWa3NRMEZCUXl4alFVRmpMRVZCUVVVc1owSkJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVVXhSQ3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4alFVRmpMRU5CUVVNc1EwRkJRenRSUVVVMVF5eHpRMEZCYzBNN1VVRkRkRU1zTUVWQlFUQkZPMUZCUXpGRkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMR3RDUVVGclFpeERRVUZETEdOQlFXTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExHTkJRV01zUTBGQlF5eEZRVUZGTzFsQlEycEdMRTFCUVUwc1UwRkJVeXhIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRia01zU1VGQlNTeE5RVUZOTEVkQlFVY3NPRVpCUVRoR0xFTkJRVU03V1VGRk5VY3NTMEZCU3l4SlFVRkpMRVZCUVVVc1IwRkJSeXhEUVVGRExFVkJRVVVzUlVGQlJTeEhRVUZITEZOQlFWTXNRMEZCUXl4TlFVRk5MRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVU3WjBKQlF6RkRMRTFCUVUwc1NVRkJTU3hIUVVGSExHZENRVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFMUJRVTBzUjBGQlJ5eEZRVUZGTEV0QlFVc3NVMEZCVXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU03WVVGRGNrVTdXVUZGUkN4TlFVRk5MRWxCUVVrc05rUkJRVFpFTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNZMEZCWXl4RFFVRkRMRVZCUVVVc1EwRkJRenRaUVVWNFNDeE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFRRVU5xUXp0UlFVTkVMRTlCUVU4c1kwRkJZeXhEUVVGRE8wbEJRekZDTEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTFBc1UwRkJVenRSUVVOaUxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNaVUZCWlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRM0JETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRekZFTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1pVRkJaU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNWMEZCVnl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8wbEJRMjVGTEVOQlFVTTdRMEZEU2p0QlFYUlBSQ3hyUTBGelQwTWlmUT09IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLy8gVGhpcyBtZXRob2Qgb2Ygb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0IG5lZWRzIHRvIGJlXG4vLyBrZXB0IGlkZW50aWNhbCB0byB0aGUgd2F5IGl0IGlzIG9idGFpbmVkIGluIHJ1bnRpbWUuanNcbnZhciBnID0gKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcblxuLy8gVXNlIGBnZXRPd25Qcm9wZXJ0eU5hbWVzYCBiZWNhdXNlIG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCBjYWxsaW5nXG4vLyBgaGFzT3duUHJvcGVydHlgIG9uIHRoZSBnbG9iYWwgYHNlbGZgIG9iamVjdCBpbiBhIHdvcmtlci4gU2VlICMxODMuXG52YXIgaGFkUnVudGltZSA9IGcucmVnZW5lcmF0b3JSdW50aW1lICYmXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGcpLmluZGV4T2YoXCJyZWdlbmVyYXRvclJ1bnRpbWVcIikgPj0gMDtcblxuLy8gU2F2ZSB0aGUgb2xkIHJlZ2VuZXJhdG9yUnVudGltZSBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHJlc3RvcmVkIGxhdGVyLlxudmFyIG9sZFJ1bnRpbWUgPSBoYWRSdW50aW1lICYmIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuXG4vLyBGb3JjZSByZWV2YWx1dGF0aW9uIG9mIHJ1bnRpbWUuanMuXG5nLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xuXG5pZiAoaGFkUnVudGltZSkge1xuICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBydW50aW1lLlxuICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IG9sZFJ1bnRpbWU7XG59IGVsc2Uge1xuICAvLyBSZW1vdmUgdGhlIGdsb2JhbCBwcm9wZXJ0eSBhZGRlZCBieSBydW50aW1lLmpzLlxuICB0cnkge1xuICAgIGRlbGV0ZSBnLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgfSBjYXRjaChlKSB7XG4gICAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG4gICAgICAgICAgLy8gcmVzdWx0IGZvciB0aGlzIGl0ZXJhdGlvbiB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWVcbiAgICAgICAgICAvLyByZWFzb24uIE5vdGUgdGhhdCByZWplY3Rpb25zIG9mIHlpZWxkZWQgUHJvbWlzZXMgYXJlIG5vdFxuICAgICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2VcbiAgICAgICAgICAvLyB3aGVuIGFuIGF3YWl0ZWQgUHJvbWlzZSBpcyByZWplY3RlZC4gVGhpcyBkaWZmZXJlbmNlIGluXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYmV0d2VlbiB5aWVsZCBhbmQgYXdhaXQgaXMgaW1wb3J0YW50LCBiZWNhdXNlIGl0XG4gICAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIChzd2FsbG93IGl0IGFuZCBjb250aW51ZSwgbWFudWFsbHkgLnRocm93IGl0IGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBnZW5lcmF0b3IsIGFiYW5kb24gaXRlcmF0aW9uLCB3aGF0ZXZlcikuIFdpdGhcbiAgICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIHNvIHRoZVxuICAgICAgICAgIC8vIG9ubHkgb3B0aW9uIGlzIHRvIHRocm93IGl0IGZyb20gdGhlIGF3YWl0IGV4cHJlc3Npb24sIGFuZFxuICAgICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBJbiBzbG9wcHkgbW9kZSwgdW5ib3VuZCBgdGhpc2AgcmVmZXJzIHRvIHRoZSBnbG9iYWwgb2JqZWN0LCBmYWxsYmFjayB0b1xuICAvLyBGdW5jdGlvbiBjb25zdHJ1Y3RvciBpZiB3ZSdyZSBpbiBnbG9iYWwgc3RyaWN0IG1vZGUuIFRoYXQgaXMgc2FkbHkgYSBmb3JtXG4gIC8vIG9mIGluZGlyZWN0IGV2YWwgd2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kuXG4gIChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKClcbik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19jb3JlX2Rpc3RfaGVscGVyc19udW1iZXJIZWxwZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19jb3JlX2Rpc3RfaGVscGVyc19vYmplY3RIZWxwZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19jcnlwdG9fZGlzdF9lcnJvcl9jcnlwdG9FcnJvcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NyeXB0b19kaXN0X2ZhY3Rvcmllc19zcG9uZ2VGYWN0b3J5X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fY3J5cHRvX2Rpc3RfcHJvb2ZPZldvcmtfcHJvb2ZPZldvcmtCYXNlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fZGF0YV9kaXN0X2RhdGFfdHJpdHNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19kYXRhX2Rpc3RfZGF0YV90cnl0ZXNfXzsiXSwic291cmNlUm9vdCI6IiJ9