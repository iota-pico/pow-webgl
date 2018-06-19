(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("@iota-pico/pow-webgl", [], factory);
	else if(typeof exports === 'object')
		exports["@iota-pico/pow-webgl"] = factory();
	else
		root["IotaPicoPowWebgl"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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

/***/ "../core/dist/error/coreError.js":
/*!***************************************!*\
  !*** ../core/dist/error/coreError.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _extendableBuiltin(cls) {
  function ExtendableBuiltin() {
    var instance = Reflect.construct(cls, Array.from(arguments));
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    return instance;
  }

  ExtendableBuiltin.prototype = Object.create(cls.prototype, {
    constructor: {
      value: cls,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ExtendableBuiltin, cls);
  } else {
    ExtendableBuiltin.__proto__ = cls;
  }

  return ExtendableBuiltin;
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

var jsonHelper_1 = __webpack_require__(/*! ../helpers/jsonHelper */ "../core/dist/helpers/jsonHelper.js");

var stringHelper_1 = __webpack_require__(/*! ../helpers/stringHelper */ "../core/dist/helpers/stringHelper.js");
/**
 * A core implementation of an error.
 */


var CoreError =
/*#__PURE__*/
function (_extendableBuiltin2) {
  _inherits(CoreError, _extendableBuiltin2);

  /**
   * Create an instance of CoreError.
   * @param message The message for the error.
   * @param additional Additional details about the error.
   * @param innerError Add information from inner error if there was one.
   */
  function CoreError(message, additional, innerError) {
    var _this;

    _classCallCheck(this, CoreError);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CoreError).call(this, message));
    _this.additional = additional ? additional : {};
    _this.innerError = innerError;
    _this.domain = "Core";
    return _this;
  }
  /**
   * Check if an object could be a CoreError.
   * @param obj The object to check if it is a CoreError.
   * @returns true If the tested object is a CoreError.
   */


  _createClass(CoreError, [{
    key: "format",

    /**
     * Format the error to a readable version.
     * @returns Formatted version of the error.
     */
    value: function format() {
      var _this2 = this;

      var out = "";

      if (!stringHelper_1.StringHelper.isEmpty(this.domain)) {
        out += "".concat(this.domain, ": ");
      }

      if (!stringHelper_1.StringHelper.isEmpty(this.message)) {
        out += "".concat(this.message);
      }

      var keys = Object.keys(this.additional);

      if (keys.length > 0) {
        if (out.length > 0) {
          out += "\n";
        }

        keys.forEach(function (key) {
          out += "\t".concat(key, ": ").concat(jsonHelper_1.JsonHelper.stringify(_this2.additional[key]), "\n");
        });
      }

      return out;
    }
  }], [{
    key: "isError",
    value: function isError(obj) {
      return obj !== undefined && obj !== null && _typeof(obj) === "object" && "message" in obj && "additional" in obj;
    }
  }]);

  return CoreError;
}(_extendableBuiltin(Error));

exports.CoreError = CoreError;

/***/ }),

/***/ "../core/dist/factories/factoryBase.js":
/*!*********************************************!*\
  !*** ../core/dist/factories/factoryBase.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Factory to generate types.
 * @typeparam T The generic type for the object types in the factory.
 */

var FactoryBase =
/*#__PURE__*/
function () {
  function FactoryBase() {
    _classCallCheck(this, FactoryBase);

    /* @internal */
    this._types = {};
  }
  /**
   * Register a new type with the factory.
   * @param name The name of the type to register.
   * @param typeConstructor The constructor for the type.
   */


  _createClass(FactoryBase, [{
    key: "register",
    value: function register(name, typeConstructor) {
      this.getInstance()._types[name] = typeConstructor;
    }
    /**
     * Unregister a type from the factory.
     * @param name The name of the type to unregister.
     */

  }, {
    key: "unregister",
    value: function unregister(name) {
      delete this.getInstance()._types[name];
    }
    /**
     * Does the factory contain a specific type.
     * @param name The name of the type to look for.
     * @returns True if the type exists.
     */

  }, {
    key: "exists",
    value: function exists(name) {
      return this.getInstance()._types[name] !== undefined;
    }
    /**
     * List the types in the factory.
     * @param name The name of the type to look for.
     * @returns True if the type exists.
     */

  }, {
    key: "types",
    value: function types() {
      return Object.keys(this.getInstance()._types);
    }
    /**
     * Create an instance of an object from the factory.
     * @param name The name of the type to create.
     * @param args Any parameters to pass to the constructor.
     * @returns A new instance of the type if it exists, or undefined if it does not.
     */

  }, {
    key: "create",
    value: function create(name) {
      var instance = this.getInstance();

      if (instance._types[name]) {
        var _instance$_types;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return (_instance$_types = instance._types)[name].apply(_instance$_types, args);
      } else {
        return undefined;
      }
    }
  }]);

  return FactoryBase;
}();

exports.FactoryBase = FactoryBase;

/***/ }),

/***/ "../core/dist/helpers/arrayHelper.js":
/*!*******************************************!*\
  !*** ../core/dist/helpers/arrayHelper.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(/*! ./objectHelper */ "../core/dist/helpers/objectHelper.js");
/**
 * Array helper methods.
 */


var ArrayHelper =
/*#__PURE__*/
function () {
  function ArrayHelper() {
    _classCallCheck(this, ArrayHelper);
  }

  _createClass(ArrayHelper, null, [{
    key: "isArray",

    /**
     * Is the value an array.
     * @param value Object to test.
     * @returns True if the value is an array.
     */
    value: function isArray(value) {
      return value === null || value === undefined ? false : Array.isArray(value);
    }
    /**
     * Is the value a empty array.
     * @param value Object to test.
     * @returns True if the value is a empty array.
     */

  }, {
    key: "isEmpty",
    value: function isEmpty(value) {
      return !ArrayHelper.isArray(value) || value.length === 0;
    }
    /**
     * Is the value a non empty array of specific type.
     * @param value Object to test.
     * @param type The type of the object
     * @returns True if the value is a non empty array of a specific type.
     */

  }, {
    key: "isTyped",
    value: function isTyped(value, type) {
      return !ArrayHelper.isEmpty(value) && !value.includes(undefined) && !value.includes(null) && value.every(function (a) {
        return objectHelper_1.ObjectHelper.isType(a, type);
      });
    }
  }]);

  return ArrayHelper;
}();

exports.ArrayHelper = ArrayHelper;

/***/ }),

/***/ "../core/dist/helpers/jsonHelper.js":
/*!******************************************!*\
  !*** ../core/dist/helpers/jsonHelper.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Json helper methods.
 */

var JsonHelper =
/*#__PURE__*/
function () {
  function JsonHelper() {
    _classCallCheck(this, JsonHelper);
  }

  _createClass(JsonHelper, null, [{
    key: "stringify",

    /**
     * Stringify an object with recursion breaking.
     * @param value A JavaScript value, usually an object or array, to be converted.
     * @param replacer A function that transforms the results.
     * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
     * @returns String version of the object.
     */
    value: function stringify(value, replacer, space) {
      // eliminates any recursion in the stringify
      var cache = [];

      var recusionReplacer = function recusionReplacer(key, replaceValue) {
        if (_typeof(replaceValue) === "object" && value !== null && replaceValue !== undefined) {
          if (cache.indexOf(replaceValue) !== -1) {
            // circular reference found, discard key
            return;
          } else {
            cache.push(replaceValue);
          }
        }

        return replacer ? replacer(key, replaceValue) : replaceValue;
      };

      return JSON.stringify(value, recusionReplacer, space);
    }
  }]);

  return JsonHelper;
}();

exports.JsonHelper = JsonHelper;

/***/ }),

/***/ "../core/dist/helpers/numberHelper.js":
/*!********************************************!*\
  !*** ../core/dist/helpers/numberHelper.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Number helper methods.
 */

var NumberHelper =
/*#__PURE__*/
function () {
  function NumberHelper() {
    _classCallCheck(this, NumberHelper);
  }

  _createClass(NumberHelper, null, [{
    key: "isInteger",

    /**
     * Is the value an integer.
     * @param value Object to test for its integerness.
     * @returns True if the object is a integer.
     */
    value: function isInteger(value) {
      return Number.isInteger(value) && !Number.isNaN(value) && Number.isFinite(value);
    }
    /**
     * Is the value a number.
     * @param value Object to test for its numberyness.
     * @returns True if the object is a number.
     */

  }, {
    key: "isNumber",
    value: function isNumber(value) {
      return value !== undefined && value !== null && typeof value === "number" && !Number.isNaN(value) && Number.isFinite(value);
    }
    /**
     * Is the value a float number formatted as a string, can be used for big numbers that would overflow parseFloat.
     * @param value The value to check
     * @returns True if the number is formatted correctly.
     */

  }, {
    key: "isFloatString",
    value: function isFloatString(value) {
      return /^-?\d*\.?\d+$/.test(value);
    }
    /**
     * Is the value a integer number formatted as a string, can be used for big numbers that would overflow parseInt.
     * @param value The value to check
     * @returns True if the number is formatted correctly.
     */

  }, {
    key: "isIntegerString",
    value: function isIntegerString(value) {
      return /^-?\d+$/.test(value);
    }
  }]);

  return NumberHelper;
}();

exports.NumberHelper = NumberHelper;

/***/ }),

/***/ "../core/dist/helpers/objectHelper.js":
/*!********************************************!*\
  !*** ../core/dist/helpers/objectHelper.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Object helper methods.
 */

var ObjectHelper =
/*#__PURE__*/
function () {
  function ObjectHelper() {
    _classCallCheck(this, ObjectHelper);
  }

  _createClass(ObjectHelper, null, [{
    key: "isEmpty",

    /**
     * Is the value empty.
     * @param value Object to test.
     * @returns True if the value is empty.
     */
    value: function isEmpty(value) {
      return value === null || value === undefined;
    }
    /**
     * Is the value an object.
     * @param value Object to test.
     * @returns True if the value is an object.
     */

  }, {
    key: "isObject",
    value: function isObject(value) {
      return value === null || value === undefined ? false : _typeof(value) === "object" && !Array.isArray(value);
    }
    /**
     * Is the value an object if given type.
     * @param value Object to test.
     * @param typeConstructor A callback method which returns an instance of the object.
     * @returns True if the value is an object of the specified type.
     */

  }, {
    key: "isType",
    value: function isType(value, typeConstructor) {
      var valueClassName = ObjectHelper.getClassName(value);
      return valueClassName !== undefined && valueClassName === ObjectHelper.getClassName(typeConstructor);
    }
    /**
     * Get the class name of an object if it has one.
     * @param object The object to get the class name for.
     * @returns The class name if it has one or undefined if not.
     */

  }, {
    key: "getClassName",
    value: function getClassName(object) {
      if (object === null || object === undefined) {
        return undefined;
      } else {
        var _constructor = typeof object === "function" ? object.toString() : object.constructor.toString();

        var results = _constructor.match(/\w+/g);

        return results && results.length > 1 ? results[1] : undefined;
      }
    }
  }]);

  return ObjectHelper;
}();

exports.ObjectHelper = ObjectHelper;

/***/ }),

/***/ "../core/dist/helpers/stringHelper.js":
/*!********************************************!*\
  !*** ../core/dist/helpers/stringHelper.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * String helper methods.
 */

var StringHelper =
/*#__PURE__*/
function () {
  function StringHelper() {
    _classCallCheck(this, StringHelper);
  }

  _createClass(StringHelper, null, [{
    key: "isString",

    /**
     * Is the value a string.
     * @param value Object to test for its stringyness.
     * @returns True if the object is a string.
     */
    value: function isString(value) {
      return value === null || value === undefined ? false : Object.prototype.toString.call(value) === "[object String]";
    }
    /**
     * Is the value a string that is empty.
     * @param value Object to test for its no emptyness.
     * @returns True if the object is an empty string.
     */

  }, {
    key: "isEmpty",
    value: function isEmpty(value) {
      return !StringHelper.isString(value) || value.length === 0;
    }
    /**
     * Is the string all ASCII characters.
     * @param value string to test if is is ASCII.
     * @returns True if the object is all ASCII.
     */

  }, {
    key: "isAscii",
    value: function isAscii(value) {
      return value === null || value === undefined ? false : /^[\x00-\xFF]*$/.test(value);
    }
    /**
     * Encode non ASCII characters with control characters.
     * @param value The string value to escape.
     * @returns The escaped version of the string.
     */

  }, {
    key: "encodeNonASCII",
    value: function encodeNonASCII(value) {
      return StringHelper.isString(value) ? value.replace(/[\u007F-\uFFFF]/g, function (chr) {
        return "\\u".concat("0000".concat(chr.charCodeAt(0).toString(16)).substr(-4));
      }) : undefined;
    }
    /**
     * Decode control characters to ASCII.
     * @param value The encoded string to convert back to ASCII.
     * @returns The decoded version of the string.
     */

  }, {
    key: "decodeNonASCII",
    value: function decodeNonASCII(value) {
      return StringHelper.isString(value) ? value.replace(/\\u([\d\w]{4})/gi, function (match, grp) {
        return String.fromCharCode(parseInt(grp, 16));
      }) : undefined;
    }
  }]);

  return StringHelper;
}();

exports.StringHelper = StringHelper;

/***/ }),

/***/ "../core/dist/services/timeService.js":
/*!********************************************!*\
  !*** ../core/dist/services/timeService.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Represents a class which can provide the time.
 */

var TimeService =
/*#__PURE__*/
function () {
  function TimeService() {
    _classCallCheck(this, TimeService);
  }

  _createClass(TimeService, [{
    key: "msSinceEpoch",

    /**
     * Returns the number of milliseconds since 1970/01/01.
     * @returns Number of milliseconds.
     */
    value: function msSinceEpoch() {
      return Date.now();
    }
  }]);

  return TimeService;
}();

exports.TimeService = TimeService;

/***/ }),

/***/ "../crypto/dist/digests/sha3.js":
/*!**************************************!*\
  !*** ../crypto/dist/digests/sha3.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var cryptoError_1 = __webpack_require__(/*! ../error/cryptoError */ "../crypto/dist/error/cryptoError.js");
/**
 * Sha3 implementation.
 */


var Sha3 =
/*#__PURE__*/
function () {
  /**
   * Create a new instance of SHA3.
   * @param bits The number of input bits.
   * @param padding The padding to use.
   * @param outputBits The number of output bits.
   */
  function Sha3(bits, padding, outputBits) {
    _classCallCheck(this, Sha3);

    this._padding = padding;
    this._outputBits = outputBits;
    this._blockCount = 1600 - (bits << 1) >> 5;
    this._byteCount = this._blockCount << 2;
    this._outputBlocks = outputBits >> 5;
    this._extraBytes = (outputBits & 31) >> 3;
    this.reset();
  }
  /**
   * Reset the digest.
   */


  _createClass(Sha3, [{
    key: "reset",
    value: function reset() {
      this._reset = true;
      this._block = 0;
      this._start = 0;
      this._blocks = new Uint32Array(this._blockCount + 1);
      this._state = new Uint32Array(50);
    }
    /**
     * Update the digest.
     * @param input Array of data to use in the update.
     */

  }, {
    key: "update",
    value: function update(input) {
      if (!objectHelper_1.ObjectHelper.isType(input, ArrayBuffer)) {
        throw new cryptoError_1.CryptoError("Input is not of type ArrayBuffer");
      }

      var message = new Uint8Array(input);
      var length = message.length;
      var index = 0;
      var i;

      while (index < length) {
        if (this._reset) {
          this._reset = false;
          this._blocks[0] = this._block;

          for (i = 1; i < this._blockCount + 1; ++i) {
            this._blocks[i] = 0;
          }
        }

        for (i = this._start; index < length && i < this._byteCount; ++index) {
          this._blocks[i >> 2] |= message[index] << Sha3.SHIFT[i++ & 3];
        }

        this._lastByteIndex = i;

        if (i >= this._byteCount) {
          this._start = i - this._byteCount;
          this._block = this._blocks[this._blockCount];

          for (i = 0; i < this._blockCount; ++i) {
            this._state[i] ^= this._blocks[i];
          }

          this.keccakPermutation(this._state);
          this._reset = true;
        } else {
          this._start = i;
        }
      }
    }
    /**
     * Finalize and return the hash for the digest, will also reset the state.
     * @returns Array buffer containing the digest.
     */

  }, {
    key: "digest",
    value: function digest() {
      this.finalize();
      var i = 0;
      var j = 0;
      var bytes = this._outputBits >> 3;
      var buffer;

      if (this._extraBytes) {
        buffer = new ArrayBuffer(this._outputBlocks + 1 << 2);
      } else {
        buffer = new ArrayBuffer(bytes);
      }

      var array = new Uint32Array(buffer);

      while (j < this._outputBlocks) {
        for (i = 0; i < this._blockCount && j < this._outputBlocks; ++i, ++j) {
          array[j] = this._state[i];
        }
      }

      if (this._extraBytes) {
        array[i] = this._state[i];
        buffer = buffer.slice(0, bytes);
      }

      this.reset();
      return buffer;
    }
    /* @internal */

  }, {
    key: "finalize",
    value: function finalize() {
      var i = this._lastByteIndex;
      this._blocks[i >> 2] |= this._padding[i & 3];

      if (this._lastByteIndex === this._byteCount) {
        this._blocks[0] = this._blocks[this._blockCount];

        for (i = 1; i < this._blockCount + 1; ++i) {
          this._blocks[i] = 0;
        }
      }

      this._blocks[this._blockCount - 1] |= 0x80000000;

      for (i = 0; i < this._blockCount; ++i) {
        this._state[i] ^= this._blocks[i];
      }

      this.keccakPermutation(this._state);
    }
    /* @internal */

  }, {
    key: "keccakPermutation",
    value: function keccakPermutation(s) {
      // tslint:disable-next-line:one-variable-per-declaration
      var h, l, n, c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30, b31, b32, b33, b34, b35, b36, b37, b38, b39, b40, b41, b42, b43, b44, b45, b46, b47, b48, b49;

      for (n = 0; n < 48; n += 2) {
        c0 = s[0] ^ s[10] ^ s[20] ^ s[30] ^ s[40];
        c1 = s[1] ^ s[11] ^ s[21] ^ s[31] ^ s[41];
        c2 = s[2] ^ s[12] ^ s[22] ^ s[32] ^ s[42];
        c3 = s[3] ^ s[13] ^ s[23] ^ s[33] ^ s[43];
        c4 = s[4] ^ s[14] ^ s[24] ^ s[34] ^ s[44];
        c5 = s[5] ^ s[15] ^ s[25] ^ s[35] ^ s[45];
        c6 = s[6] ^ s[16] ^ s[26] ^ s[36] ^ s[46];
        c7 = s[7] ^ s[17] ^ s[27] ^ s[37] ^ s[47];
        c8 = s[8] ^ s[18] ^ s[28] ^ s[38] ^ s[48];
        c9 = s[9] ^ s[19] ^ s[29] ^ s[39] ^ s[49];
        h = c8 ^ (c2 << 1 | c3 >>> 31);
        l = c9 ^ (c3 << 1 | c2 >>> 31);
        s[0] ^= h;
        s[1] ^= l;
        s[10] ^= h;
        s[11] ^= l;
        s[20] ^= h;
        s[21] ^= l;
        s[30] ^= h;
        s[31] ^= l;
        s[40] ^= h;
        s[41] ^= l;
        h = c0 ^ (c4 << 1 | c5 >>> 31);
        l = c1 ^ (c5 << 1 | c4 >>> 31);
        s[2] ^= h;
        s[3] ^= l;
        s[12] ^= h;
        s[13] ^= l;
        s[22] ^= h;
        s[23] ^= l;
        s[32] ^= h;
        s[33] ^= l;
        s[42] ^= h;
        s[43] ^= l;
        h = c2 ^ (c6 << 1 | c7 >>> 31);
        l = c3 ^ (c7 << 1 | c6 >>> 31);
        s[4] ^= h;
        s[5] ^= l;
        s[14] ^= h;
        s[15] ^= l;
        s[24] ^= h;
        s[25] ^= l;
        s[34] ^= h;
        s[35] ^= l;
        s[44] ^= h;
        s[45] ^= l;
        h = c4 ^ (c8 << 1 | c9 >>> 31);
        l = c5 ^ (c9 << 1 | c8 >>> 31);
        s[6] ^= h;
        s[7] ^= l;
        s[16] ^= h;
        s[17] ^= l;
        s[26] ^= h;
        s[27] ^= l;
        s[36] ^= h;
        s[37] ^= l;
        s[46] ^= h;
        s[47] ^= l;
        h = c6 ^ (c0 << 1 | c1 >>> 31);
        l = c7 ^ (c1 << 1 | c0 >>> 31);
        s[8] ^= h;
        s[9] ^= l;
        s[18] ^= h;
        s[19] ^= l;
        s[28] ^= h;
        s[29] ^= l;
        s[38] ^= h;
        s[39] ^= l;
        s[48] ^= h;
        s[49] ^= l;
        b0 = s[0];
        b1 = s[1];
        b32 = s[11] << 4 | s[10] >>> 28;
        b33 = s[10] << 4 | s[11] >>> 28;
        b14 = s[20] << 3 | s[21] >>> 29;
        b15 = s[21] << 3 | s[20] >>> 29;
        b46 = s[31] << 9 | s[30] >>> 23;
        b47 = s[30] << 9 | s[31] >>> 23;
        b28 = s[40] << 18 | s[41] >>> 14;
        b29 = s[41] << 18 | s[40] >>> 14;
        b20 = s[2] << 1 | s[3] >>> 31;
        b21 = s[3] << 1 | s[2] >>> 31;
        b2 = s[13] << 12 | s[12] >>> 20;
        b3 = s[12] << 12 | s[13] >>> 20;
        b34 = s[22] << 10 | s[23] >>> 22;
        b35 = s[23] << 10 | s[22] >>> 22;
        b16 = s[33] << 13 | s[32] >>> 19;
        b17 = s[32] << 13 | s[33] >>> 19;
        b48 = s[42] << 2 | s[43] >>> 30;
        b49 = s[43] << 2 | s[42] >>> 30;
        b40 = s[5] << 30 | s[4] >>> 2;
        b41 = s[4] << 30 | s[5] >>> 2;
        b22 = s[14] << 6 | s[15] >>> 26;
        b23 = s[15] << 6 | s[14] >>> 26;
        b4 = s[25] << 11 | s[24] >>> 21;
        b5 = s[24] << 11 | s[25] >>> 21;
        b36 = s[34] << 15 | s[35] >>> 17;
        b37 = s[35] << 15 | s[34] >>> 17;
        b18 = s[45] << 29 | s[44] >>> 3;
        b19 = s[44] << 29 | s[45] >>> 3;
        b10 = s[6] << 28 | s[7] >>> 4;
        b11 = s[7] << 28 | s[6] >>> 4;
        b42 = s[17] << 23 | s[16] >>> 9;
        b43 = s[16] << 23 | s[17] >>> 9;
        b24 = s[26] << 25 | s[27] >>> 7;
        b25 = s[27] << 25 | s[26] >>> 7;
        b6 = s[36] << 21 | s[37] >>> 11;
        b7 = s[37] << 21 | s[36] >>> 11;
        b38 = s[47] << 24 | s[46] >>> 8;
        b39 = s[46] << 24 | s[47] >>> 8;
        b30 = s[8] << 27 | s[9] >>> 5;
        b31 = s[9] << 27 | s[8] >>> 5;
        b12 = s[18] << 20 | s[19] >>> 12;
        b13 = s[19] << 20 | s[18] >>> 12;
        b44 = s[29] << 7 | s[28] >>> 25;
        b45 = s[28] << 7 | s[29] >>> 25;
        b26 = s[38] << 8 | s[39] >>> 24;
        b27 = s[39] << 8 | s[38] >>> 24;
        b8 = s[48] << 14 | s[49] >>> 18;
        b9 = s[49] << 14 | s[48] >>> 18;
        s[0] = b0 ^ ~b2 & b4;
        s[1] = b1 ^ ~b3 & b5;
        s[10] = b10 ^ ~b12 & b14;
        s[11] = b11 ^ ~b13 & b15;
        s[20] = b20 ^ ~b22 & b24;
        s[21] = b21 ^ ~b23 & b25;
        s[30] = b30 ^ ~b32 & b34;
        s[31] = b31 ^ ~b33 & b35;
        s[40] = b40 ^ ~b42 & b44;
        s[41] = b41 ^ ~b43 & b45;
        s[2] = b2 ^ ~b4 & b6;
        s[3] = b3 ^ ~b5 & b7;
        s[12] = b12 ^ ~b14 & b16;
        s[13] = b13 ^ ~b15 & b17;
        s[22] = b22 ^ ~b24 & b26;
        s[23] = b23 ^ ~b25 & b27;
        s[32] = b32 ^ ~b34 & b36;
        s[33] = b33 ^ ~b35 & b37;
        s[42] = b42 ^ ~b44 & b46;
        s[43] = b43 ^ ~b45 & b47;
        s[4] = b4 ^ ~b6 & b8;
        s[5] = b5 ^ ~b7 & b9;
        s[14] = b14 ^ ~b16 & b18;
        s[15] = b15 ^ ~b17 & b19;
        s[24] = b24 ^ ~b26 & b28;
        s[25] = b25 ^ ~b27 & b29;
        s[34] = b34 ^ ~b36 & b38;
        s[35] = b35 ^ ~b37 & b39;
        s[44] = b44 ^ ~b46 & b48;
        s[45] = b45 ^ ~b47 & b49;
        s[6] = b6 ^ ~b8 & b0;
        s[7] = b7 ^ ~b9 & b1;
        s[16] = b16 ^ ~b18 & b10;
        s[17] = b17 ^ ~b19 & b11;
        s[26] = b26 ^ ~b28 & b20;
        s[27] = b27 ^ ~b29 & b21;
        s[36] = b36 ^ ~b38 & b30;
        s[37] = b37 ^ ~b39 & b31;
        s[46] = b46 ^ ~b48 & b40;
        s[47] = b47 ^ ~b49 & b41;
        s[8] = b8 ^ ~b0 & b2;
        s[9] = b9 ^ ~b1 & b3;
        s[18] = b18 ^ ~b10 & b12;
        s[19] = b19 ^ ~b11 & b13;
        s[28] = b28 ^ ~b20 & b22;
        s[29] = b29 ^ ~b21 & b23;
        s[38] = b38 ^ ~b30 & b32;
        s[39] = b39 ^ ~b31 & b33;
        s[48] = b48 ^ ~b40 & b42;
        s[49] = b49 ^ ~b41 & b43;
        s[0] ^= Sha3.ROUND_CONSTANTS[n];
        s[1] ^= Sha3.ROUND_CONSTANTS[n + 1];
      }
    }
  }]);

  return Sha3;
}();
/* Padding to use for Keccak */


Sha3.KECCAK_PADDING = new Uint32Array([1, 256, 65536, 16777216]);
/* @internal */

Sha3.SHIFT = new Uint8Array([0, 8, 16, 24]);
/* @internal */

Sha3.ROUND_CONSTANTS = new Uint32Array([1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648]);
exports.Sha3 = Sha3;

/***/ }),

/***/ "../crypto/dist/error/cryptoError.js":
/*!*******************************************!*\
  !*** ../crypto/dist/error/cryptoError.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var coreError_1 = __webpack_require__(/*! @iota-pico/core/dist/error/coreError */ "../core/dist/error/coreError.js");
/**
 * A crypto implementation of an error.
 */


var CryptoError =
/*#__PURE__*/
function (_coreError_1$CoreErro) {
  _inherits(CryptoError, _coreError_1$CoreErro);

  /**
   * Create an instance of CryptoError.
   * @param message The message for the error.
   * @param additional Additional details about the error.
   * @param innerError Add information from inner error if there was one.
   */
  function CryptoError(message, additional, innerError) {
    var _this;

    _classCallCheck(this, CryptoError);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CryptoError).call(this, message, additional, innerError));
    _this.domain = "Crypto";
    return _this;
  }

  return CryptoError;
}(coreError_1.CoreError);

exports.CryptoError = CryptoError;

/***/ }),

/***/ "../crypto/dist/factories/spongeFactory.js":
/*!*************************************************!*\
  !*** ../crypto/dist/factories/spongeFactory.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var factoryBase_1 = __webpack_require__(/*! @iota-pico/core/dist/factories/factoryBase */ "../core/dist/factories/factoryBase.js");

var curl_1 = __webpack_require__(/*! ../sponges/curl */ "../crypto/dist/sponges/curl.js");

var kerl_1 = __webpack_require__(/*! ../sponges/kerl */ "../crypto/dist/sponges/kerl.js");
/**
 * Factory to generate sponges.
 */


var SpongeFactory =
/*#__PURE__*/
function (_factoryBase_1$Factor) {
  _inherits(SpongeFactory, _factoryBase_1$Factor);

  /**
   * Don't allow manual construction of the factory.
   * @internal
   */
  function SpongeFactory() {
    _classCallCheck(this, SpongeFactory);

    return _possibleConstructorReturn(this, _getPrototypeOf(SpongeFactory).call(this));
  }
  /**
   * Get the instance of the factory.
   * @returns The factory instance.
   */


  _createClass(SpongeFactory, [{
    key: "getInstance",

    /* @internal */
    value: function getInstance() {
      return SpongeFactory.instance();
    }
  }], [{
    key: "instance",
    value: function instance() {
      if (!SpongeFactory._instance) {
        SpongeFactory._instance = new SpongeFactory();

        SpongeFactory._instance.register("curl", function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return _construct(curl_1.Curl, args);
        });

        SpongeFactory._instance.register("curl81", function () {
          return new curl_1.Curl(81);
        });

        SpongeFactory._instance.register("curl27", function () {
          return new curl_1.Curl(27);
        });

        SpongeFactory._instance.register("kerl", function () {
          return new kerl_1.Kerl();
        });
      }

      return SpongeFactory._instance;
    }
  }]);

  return SpongeFactory;
}(factoryBase_1.FactoryBase);

exports.SpongeFactory = SpongeFactory;

/***/ }),

/***/ "../crypto/dist/helpers/bigIntegerHelper.js":
/*!**************************************************!*\
  !*** ../crypto/dist/helpers/bigIntegerHelper.js ***!
  \**************************************************/
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

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "../core/dist/helpers/numberHelper.js");

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var big_integer_1 = __importDefault(__webpack_require__(/*! big-integer */ "../crypto/node_modules/.registry.npmjs.org/big-integer/1.6.31/node_modules/big-integer/BigInteger.js"));

var cryptoError_1 = __webpack_require__(/*! ../error/cryptoError */ "../crypto/dist/error/cryptoError.js");
/**
 * Helper class to convert between BigInteger and other types.
 * Converted from https://github.com/iotaledger/iri/blob/dev/src/main/java/com/iota/iri/hash/Kerl.java
 */


var BigIntegerHelper =
/*#__PURE__*/
function () {
  function BigIntegerHelper() {
    _classCallCheck(this, BigIntegerHelper);
  }

  _createClass(BigIntegerHelper, null, [{
    key: "tritsToBigInteger",

    /**
     * Convert trits to a bigInteger.
     * @param trits The trits to convert.
     * @param offset Offset within the array to start.
     * @param length The length of the trits array to convert.
     * @returns Big integer version of trits.
     */
    value: function tritsToBigInteger(trits, offset, length) {
      if (!objectHelper_1.ObjectHelper.isType(trits, Int8Array) || trits.length === 0) {
        throw new cryptoError_1.CryptoError("The trits must be a non empty Int8Array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("The offset must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length <= 0) {
        throw new cryptoError_1.CryptoError("The length must be a number > 0");
      }

      if (offset + length > trits.length) {
        throw new cryptoError_1.CryptoError("The offset + length is beyond the length of the array");
      }

      var value = big_integer_1.default.zero;

      for (var i = length - 1; i >= 0; i--) {
        value = value.multiply(BigIntegerHelper.RADIX).add(big_integer_1.default(trits[offset + i]));
      }

      return value;
    }
    /**
     * Convert bigInteger to trits.
     * @param value The bigInteger to convert to trits.
     * @param trits The array to receive the trits.
     * @param offset The offset to place the trits in the array.
     * @param length The length of the array.
     */

  }, {
    key: "bigIntegerToTrits",
    value: function bigIntegerToTrits(value, trits, offset, length) {
      if (!objectHelper_1.ObjectHelper.isType(value, big_integer_1.default)) {
        throw new cryptoError_1.CryptoError("The value must be a bigInteger type");
      }

      if (!objectHelper_1.ObjectHelper.isType(trits, Int8Array)) {
        throw new cryptoError_1.CryptoError("The trits must be an Int8Array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("The offset must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length <= 0) {
        throw new cryptoError_1.CryptoError("The length must be a number > 0");
      }

      if (offset + length > trits.length) {
        throw new cryptoError_1.CryptoError("The offset + length is beyond the length of the array");
      }

      var absoluteValue = value.compareTo(big_integer_1.default.zero) < 0 ? value.negate() : value;

      for (var i = 0; i < length; i++) {
        var divRemainder = absoluteValue.divmod(BigIntegerHelper.RADIX);
        absoluteValue = divRemainder.quotient;
        var remainder = divRemainder.remainder;

        if (remainder > BigIntegerHelper.MAX_TRIT_VALUE) {
          remainder = BigIntegerHelper.MIN_TRIT_VALUE;
          absoluteValue = absoluteValue.add(big_integer_1.default["1"]);
        }

        trits[offset + i] = remainder.toJSNumber();
      }

      if (value.compareTo(big_integer_1.default.zero) < 0) {
        for (var _i = 0; _i < length; _i++) {
          // Avoid negative zero
          trits[offset + _i] = trits[offset + _i] === 0 ? 0 : -trits[offset + _i];
        }
      }
    }
    /**
     * Convert the bigInteger into bytes.
     * @param value The value to convert.
     * @param destination The destination array to store the bytes.
     * @param offset The offset within the array to store the bytes.
     */

  }, {
    key: "bigIntegerToBytes",
    value: function bigIntegerToBytes(value, destination, offset) {
      if (!objectHelper_1.ObjectHelper.isType(value, big_integer_1.default)) {
        throw new cryptoError_1.CryptoError("The value must be a bigInteger type");
      }

      if (!objectHelper_1.ObjectHelper.isType(destination, ArrayBuffer) || destination.byteLength === 0) {
        throw new cryptoError_1.CryptoError("The destination must be an array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("The offset must be a number >= 0");
      }

      if (destination.byteLength - offset < BigIntegerHelper.BYTE_HASH_LENGTH) {
        throw new cryptoError_1.CryptoError("Destination array has invalid size, it must be at least ".concat(BigIntegerHelper.BYTE_HASH_LENGTH));
      } // Remember if it is negative for later


      var isNeg = value.isNegative() ? -1 : 0;
      var hexString = value.toString(16);

      if (isNeg === -1) {
        // But remove it for now
        hexString = hexString.slice(1);
      } // Now make sure the hex string is an even length so the regex works


      if (hexString.length % 2 === 1) {
        hexString = "0".concat(hexString);
      }

      var matches = hexString.match(/[0-9a-f]{2}/g); // Convert the hex to numbers

      var signedBytes = new Int8Array(matches.map(function (hex) {
        return parseInt("0x".concat(hex), 16);
      }));

      if (isNeg === -1) {
        BigIntegerHelper.twosComplement(signedBytes);
      }

      var dataView = new DataView(destination); // Pad the start of the buffer with the neg value

      var i = offset;

      while (i + signedBytes.length < BigIntegerHelper.BYTE_HASH_LENGTH) {
        dataView.setInt8(i++, isNeg);
      } // And copy in the actual bytes


      for (var j = signedBytes.length; j-- > 0;) {
        dataView.setInt8(i++, signedBytes[signedBytes.length - 1 - j]);
      }
    }
    /**
     * Convert bytes to a bigInteger.
     * @param source The source bytes.
     * @param offset The offset within the bytes to start conversion.
     * @param length The length of the bytes to use for conversion.
     * @returns Big integer version of bytes.
     */

  }, {
    key: "bytesToBigInteger",
    value: function bytesToBigInteger(source, offset, length) {
      if (!objectHelper_1.ObjectHelper.isType(source, ArrayBuffer) || source.byteLength === 0) {
        throw new cryptoError_1.CryptoError("The source must be a non empty number array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("The offset must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length <= 0) {
        throw new cryptoError_1.CryptoError("The length must be a number > 0");
      }

      if (source.byteLength - offset < BigIntegerHelper.BYTE_HASH_LENGTH) {
        throw new cryptoError_1.CryptoError("Source array has invalid size, it must be at least ".concat(BigIntegerHelper.BYTE_HASH_LENGTH));
      }

      var dataView = new DataView(source);
      var signedBytes = new Int8Array(dataView.byteLength);

      for (var b = 0; b < dataView.byteLength; b++) {
        signedBytes[b] = dataView.getInt8(b + offset);
      } // Remove the initial padding leaving at least one byte


      var paddingOffset = 0;
      var firstByte = signedBytes[0];
      var isNeg = firstByte < 0; // If the first padding character is negative then reverse the 2s complement
      // but first strip of the leading padding

      if (firstByte === 0 || firstByte === -1) {
        while (signedBytes[paddingOffset] === firstByte && paddingOffset < signedBytes.length - 1) {
          paddingOffset++;
        } // Strip any padding


        signedBytes = signedBytes.slice(paddingOffset);
      }

      if (isNeg) {
        BigIntegerHelper.twosComplement(signedBytes);
      }

      var hexString = isNeg ? "-" : "";
      var dv = new DataView(signedBytes.buffer);

      for (var h = 0; h < dv.byteLength; h++) {
        hexString += "00".concat(dv.getUint8(h).toString(16)).slice(-2);
      }

      return big_integer_1.default(hexString, 16);
    }
    /* @internal */

  }, {
    key: "twosComplement",
    value: function twosComplement(signedBytes) {
      // if the whole number is negative then
      // change to 2's complements by noting all the numbers
      // and adding 1 to the last i.e. ~bignum+1
      for (var b = 0; b < signedBytes.length; b++) {
        signedBytes[b] = ~signedBytes[b];
      } // Add 1 to last number, if the number is 0xFF continue to carry


      var c = signedBytes.length - 1;

      do {
        signedBytes[c]++;
      } while (signedBytes[c--] === 0 && c > 0);
    }
  }]);

  return BigIntegerHelper;
}();
/* @internal */


BigIntegerHelper.RADIX = big_integer_1.default(3);
/* @internal */

BigIntegerHelper.MAX_TRIT_VALUE = BigIntegerHelper.RADIX.minus(1).divide(2);
/* @internal */

BigIntegerHelper.MIN_TRIT_VALUE = BigIntegerHelper.MAX_TRIT_VALUE.negate();
/* @internal */

BigIntegerHelper.BIT_HASH_LENGTH = 384;
/* @internal */

BigIntegerHelper.BYTE_HASH_LENGTH = BigIntegerHelper.BIT_HASH_LENGTH / 8;
exports.BigIntegerHelper = BigIntegerHelper;

/***/ }),

/***/ "../crypto/dist/helpers/transactionHelper.js":
/*!***************************************************!*\
  !*** ../crypto/dist/helpers/transactionHelper.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var hash_1 = __webpack_require__(/*! @iota-pico/data/dist/data/hash */ "../data/dist/data/hash.js");

var transaction_1 = __webpack_require__(/*! @iota-pico/data/dist/data/transaction */ "../data/dist/data/transaction.js");

var trits_1 = __webpack_require__(/*! @iota-pico/data/dist/data/trits */ "../data/dist/data/trits.js");

var cryptoError_1 = __webpack_require__(/*! ../error/cryptoError */ "../crypto/dist/error/cryptoError.js");

var spongeFactory_1 = __webpack_require__(/*! ../factories/spongeFactory */ "../crypto/dist/factories/spongeFactory.js");
/**
 * Helper class for transactions.
 * Converted https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/signing/signing.js
 */


var TransactionHelper =
/*#__PURE__*/
function () {
  function TransactionHelper() {
    _classCallCheck(this, TransactionHelper);
  }

  _createClass(TransactionHelper, null, [{
    key: "hash",

    /**
     * Create the hash for a transaction.
     * @param transaction The transaction to generate the hash.
     * @returns The hash of thr transaction.
     */
    value: function hash(transaction) {
      if (!objectHelper_1.ObjectHelper.isType(transaction, transaction_1.Transaction)) {
        throw new cryptoError_1.CryptoError("The transaction must be of type Transaction");
      }

      var curl = spongeFactory_1.SpongeFactory.instance().create("curl");
      var transactionTrits = trits_1.Trits.fromTrytes(transaction.toTrytes()).toArray();
      curl.initialize();
      curl.absorb(transactionTrits, 0, transactionTrits.length);
      var hashTrits = new Int8Array(curl.getConstant("HASH_LENGTH"));
      curl.squeeze(hashTrits, 0, hashTrits.length);
      return hash_1.Hash.fromTrytes(trits_1.Trits.fromArray(hashTrits).toTrytes());
    }
  }]);

  return TransactionHelper;
}();

exports.TransactionHelper = TransactionHelper;

/***/ }),

/***/ "../crypto/dist/proofOfWork/proofOfWorkBase.js":
/*!*****************************************************!*\
  !*** ../crypto/dist/proofOfWork/proofOfWorkBase.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "../crypto/node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.49/node_modules/@babel/runtime/regenerator/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var arrayHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/arrayHelper */ "../core/dist/helpers/arrayHelper.js");

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "../core/dist/helpers/numberHelper.js");

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var timeService_1 = __webpack_require__(/*! @iota-pico/core/dist/services/timeService */ "../core/dist/services/timeService.js");

var hash_1 = __webpack_require__(/*! @iota-pico/data/dist/data/hash */ "../data/dist/data/hash.js");

var tag_1 = __webpack_require__(/*! @iota-pico/data/dist/data/tag */ "../data/dist/data/tag.js");

var transaction_1 = __webpack_require__(/*! @iota-pico/data/dist/data/transaction */ "../data/dist/data/transaction.js");

var tryteNumber_1 = __webpack_require__(/*! @iota-pico/data/dist/data/tryteNumber */ "../data/dist/data/tryteNumber.js");

var trytes_1 = __webpack_require__(/*! @iota-pico/data/dist/data/trytes */ "../data/dist/data/trytes.js");

var cryptoError_1 = __webpack_require__(/*! ../error/cryptoError */ "../crypto/dist/error/cryptoError.js");

var transactionHelper_1 = __webpack_require__(/*! ../helpers/transactionHelper */ "../crypto/dist/helpers/transactionHelper.js");
/**
 * Base class for proof of work.
 */


var ProofOfWorkBase =
/*#__PURE__*/
function () {
  /**
   * Create an instance of ProofOfWork.
   * @param timeService Service to get the time for attachments.
   */
  function ProofOfWorkBase(timeService) {
    _classCallCheck(this, ProofOfWorkBase);

    this._timeService = timeService || new timeService_1.TimeService();
  }
  /**
   * Allow the proof of work to perform any initialization.
   * Will throw an exception if the implementation is not supported.
   * @returns Promise.
   */


  _createClass(ProofOfWorkBase, [{
    key: "initialize",
    value: function () {
      var _initialize = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", Promise.resolve());

              case 1:
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
     * Perform a proof of work on the data.
     * @param trunkTransaction The trunkTransaction to use for the pow.
     * @param branchTransaction The branchTransaction to use for the pow.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */

  }, {
    key: "pow",
    value: function () {
      var _pow = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(trunkTransaction, branchTransaction, trytes, minWeightMagnitude) {
        var finalTrytes, previousTransactionHash, i, transaction, newTrytes, singleTrytes, returnTransaction;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (objectHelper_1.ObjectHelper.isType(trunkTransaction, hash_1.Hash)) {
                  _context2.next = 2;
                  break;
                }

                throw new cryptoError_1.CryptoError("The trunkTransaction must be an object of type Hash");

              case 2:
                if (objectHelper_1.ObjectHelper.isType(branchTransaction, hash_1.Hash)) {
                  _context2.next = 4;
                  break;
                }

                throw new cryptoError_1.CryptoError("The branchTransaction must be an object of type Hash");

              case 4:
                if (arrayHelper_1.ArrayHelper.isTyped(trytes, trytes_1.Trytes)) {
                  _context2.next = 6;
                  break;
                }

                throw new cryptoError_1.CryptoError("The trytes must be an array of type Trytes");

              case 6:
                if (!(!numberHelper_1.NumberHelper.isInteger(minWeightMagnitude) || minWeightMagnitude <= 0)) {
                  _context2.next = 8;
                  break;
                }

                throw new cryptoError_1.CryptoError("The minWeightMagnitude must be > 0");

              case 8:
                finalTrytes = [];
                i = 0;

              case 10:
                if (!(i < trytes.length)) {
                  _context2.next = 35;
                  break;
                }

                transaction = transaction_1.Transaction.fromTrytes(trytes[i]); // Start with last index transaction
                // Assign it the trunk / branch which the user has supplied
                // If there is a bundle, chain the bundle transactions via
                // trunkTransaction together

                transaction.attachmentTimestamp = tryteNumber_1.TryteNumber.fromNumber(this._timeService.msSinceEpoch());
                transaction.attachmentTimestampLowerBound = tryteNumber_1.TryteNumber.fromNumber(0);
                transaction.attachmentTimestampUpperBound = tryteNumber_1.TryteNumber.fromNumber(ProofOfWorkBase.MAX_TIMESTAMP_VALUE); // If this is the first transaction, to be processed
                // Make sure that it's the last in the bundle and then
                // assign it the supplied trunk and branch transactions

                if (!objectHelper_1.ObjectHelper.isEmpty(previousTransactionHash)) {
                  _context2.next = 22;
                  break;
                }

                if (!(transaction.lastIndex.toNumber() !== transaction.currentIndex.toNumber())) {
                  _context2.next = 18;
                  break;
                }

                throw new cryptoError_1.CryptoError("Wrong bundle order. The bundle should be ordered in descending order from currentIndex");

              case 18:
                transaction.trunkTransaction = trunkTransaction;
                transaction.branchTransaction = branchTransaction;
                _context2.next = 24;
                break;

              case 22:
                transaction.trunkTransaction = previousTransactionHash;
                transaction.branchTransaction = trunkTransaction;

              case 24:
                newTrytes = transaction.toTrytes();
                _context2.next = 27;
                return this.singlePow(newTrytes, minWeightMagnitude);

              case 27:
                singleTrytes = _context2.sent;
                transaction.nonce = tag_1.Tag.fromTrytes(singleTrytes.sub(transaction_1.Transaction.LENGTH - tag_1.Tag.LENGTH, tag_1.Tag.LENGTH)); // Calculate the hash of the new transaction with nonce and use that as the previous hash for next entry

                returnTransaction = transaction_1.Transaction.fromTrytes(singleTrytes);
                previousTransactionHash = transactionHelper_1.TransactionHelper.hash(returnTransaction);
                finalTrytes.push(returnTransaction);

              case 32:
                i++;
                _context2.next = 10;
                break;

              case 35:
                return _context2.abrupt("return", finalTrytes.reverse().map(function (transaction) {
                  return transaction.toTrytes();
                }));

              case 36:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function pow(_x, _x2, _x3, _x4) {
        return _pow.apply(this, arguments);
      };
    }()
  }]);

  return ProofOfWorkBase;
}();
/**
 * The maximum timestamp value used in proof of work.
 */


ProofOfWorkBase.MAX_TIMESTAMP_VALUE = (Math.pow(3, 27) - 1) / 2;
exports.ProofOfWorkBase = ProofOfWorkBase;

/***/ }),

/***/ "../crypto/dist/sponges/curl.js":
/*!**************************************!*\
  !*** ../crypto/dist/sponges/curl.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "../core/dist/helpers/numberHelper.js");

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var cryptoError_1 = __webpack_require__(/*! ../error/cryptoError */ "../crypto/dist/error/cryptoError.js");
/**
 * Implementation of ISponge using Curl algorithm.
 * https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/curl/curl.js
 */


var Curl =
/*#__PURE__*/
function () {
  /**
   * Create a new instance of Curl.
   * @param rounds The number of rounds to use.
   */
  function Curl() {
    var rounds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Curl.NUMBER_OF_ROUNDS;

    _classCallCheck(this, Curl);

    this._numberOfRounds = rounds;
  }
  /**
   * Get the constant for the spone.
   * @param name The name of the constant to get.
   * @returns The constant.
   */


  _createClass(Curl, [{
    key: "getConstant",
    value: function getConstant(name) {
      switch (name) {
        case "NUMBER_OF_ROUNDS":
          {
            return this._numberOfRounds;
          }

        case "HASH_LENGTH":
        case "STATE_LENGTH":
          {
            return Curl[name];
          }

        default:
          throw new cryptoError_1.CryptoError("Unknown constant requested ".concat(name));
      }
    }
    /**
     * Get the state.
     * @returns The state.
     */

  }, {
    key: "getState",
    value: function getState() {
      return this._state;
    }
    /**
     * Initialise the hasher.
     * @param state The initial state for the hasher.
     */

  }, {
    key: "initialize",
    value: function initialize(state) {
      if (state) {
        this._state = state;
      } else {
        this._state = new Int8Array(Curl.STATE_LENGTH);
      }
    }
    /**
     * Reset the hasher.
     */

  }, {
    key: "reset",
    value: function reset() {
      this.initialize();
    }
    /**
     * Absorb trits into the hash.
     * @param trits The trits to absorb.
     * @param offset The offset into the trits to absorb from.
     * @param length The number of trits to absorb.
     */

  }, {
    key: "absorb",
    value: function absorb(trits, offset, length) {
      if (!objectHelper_1.ObjectHelper.isType(trits, Int8Array) || trits.length === 0) {
        throw new cryptoError_1.CryptoError("Trits must be a non empty Int8Array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("Offset must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length < 0) {
        throw new cryptoError_1.CryptoError("Length must be a number >= 0");
      }

      if (length + offset > trits.length) {
        throw new cryptoError_1.CryptoError("The offset + length is beyond the length of the trits");
      }

      var localOffset = offset;
      var localLength = length;

      do {
        var i = 0;
        var limit = localLength < Curl.HASH_LENGTH ? localLength : Curl.HASH_LENGTH;

        while (i < limit) {
          this._state[i++] = trits[localOffset++];
        }

        this.transform();
        localLength -= Curl.HASH_LENGTH;
      } while (localLength > 0);
    }
    /**
     * Squeeze trits into the hash.
     * @param trits The trits to squeeze.
     * @param offset The offset into the trits to squeeze from.
     * @param length The number of trits to squeeze.
     */

  }, {
    key: "squeeze",
    value: function squeeze(trits, offset, length) {
      if (!objectHelper_1.ObjectHelper.isType(trits, Int8Array) || trits.length === 0) {
        throw new cryptoError_1.CryptoError("Trits must be a non empty Int8Array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("Offset must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length < 0) {
        throw new cryptoError_1.CryptoError("Length must be a number >= 0");
      }

      if (length + offset > trits.length) {
        throw new cryptoError_1.CryptoError("The offset + length is beyond the length of the trits");
      }

      var localOffset = offset;
      var localLength = length;

      do {
        var i = 0;
        var limit = localLength < Curl.HASH_LENGTH ? length : Curl.HASH_LENGTH;

        while (i < limit) {
          trits[localOffset++] = this._state[i++];
        }

        this.transform();
        localLength -= Curl.HASH_LENGTH;
      } while (localLength > 0);
    }
    /**
     * Transform the hash.
     * @internal
     */

  }, {
    key: "transform",
    value: function transform() {
      var stateCopy;
      var index = 0;

      for (var round = 0; round < this._numberOfRounds; round++) {
        stateCopy = new Int8Array(this._state.slice());

        for (var i = 0; i < Curl.STATE_LENGTH; i++) {
          this._state[i] = Curl.TRUTH_TABLE[stateCopy[index] + (stateCopy[index += index < 365 ? 364 : -365] << 2) + 5];
        }
      }
    }
  }]);

  return Curl;
}();

Curl.HASH_LENGTH = 243;
Curl.NUMBER_OF_ROUNDS = 81;
Curl.STATE_LENGTH = Curl.HASH_LENGTH * 3;
/* @internal */

Curl.TRUTH_TABLE = new Int8Array([1, 0, -1, 2, 1, -1, 0, 2, -1, 1, 0]);
exports.Curl = Curl;

/***/ }),

/***/ "../crypto/dist/sponges/kerl.js":
/*!**************************************!*\
  !*** ../crypto/dist/sponges/kerl.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "../core/dist/helpers/numberHelper.js");

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var sha3_1 = __webpack_require__(/*! ../digests/sha3 */ "../crypto/dist/digests/sha3.js");

var cryptoError_1 = __webpack_require__(/*! ../error/cryptoError */ "../crypto/dist/error/cryptoError.js");

var bigIntegerHelper_1 = __webpack_require__(/*! ../helpers/bigIntegerHelper */ "../crypto/dist/helpers/bigIntegerHelper.js");
/**
 * Implementation of ISponge using Kerl algorithm.
 * https://github.com/iotaledger/iri/blob/dev/src/main/java/com/iota/iri/hash/Kerl.java
 */


var Kerl =
/*#__PURE__*/
function () {
  /**
   * Create a new instance of Kerl.
   */
  function Kerl() {
    _classCallCheck(this, Kerl);

    this._keccak = new sha3_1.Sha3(384, sha3_1.Sha3.KECCAK_PADDING, 384);
  }
  /**
   * Get the constant for the spone.
   * @param name The name of the constant to get.
   * @returns The constant.
   */


  _createClass(Kerl, [{
    key: "getConstant",
    value: function getConstant(name) {
      switch (name) {
        case "HASH_LENGTH":
        case "BIT_HASH_LENGTH":
        case "BYTE_HASH_LENGTH":
          {
            return Kerl[name];
          }

        default:
          throw new cryptoError_1.CryptoError("Unknown constant requested ".concat(name));
      }
    }
    /**
     * Get the state.
     * @returns The state.
     */

  }, {
    key: "getState",
    value: function getState() {
      return undefined;
    }
    /**
     * Initialise the hasher.
     * @param state The initial state for the hasher.
     */

  }, {
    key: "initialize",
    value: function initialize(state) {}
    /**
     * Reset the hasher.
     */

  }, {
    key: "reset",
    value: function reset() {
      this._keccak.reset();
    }
    /**
     * Absorb trits into the hash.
     * @param trits The trits to absorb.
     * @param offset The offset into the trits to absorb from.
     * @param length The number of trits to absorb.
     */

  }, {
    key: "absorb",
    value: function absorb(trits, offset, length) {
      if (!objectHelper_1.ObjectHelper.isType(trits, Int8Array) || trits.length === 0) {
        throw new cryptoError_1.CryptoError("Trits must be a non empty Int8Array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("Offset must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length < 0) {
        throw new cryptoError_1.CryptoError("Length must be a number >= 0");
      }

      if (length + offset > trits.length) {
        throw new cryptoError_1.CryptoError("The offset + length is beyond the length of the trits");
      }

      if (length % 243 !== 0) {
        throw new cryptoError_1.CryptoError("Length must be a multiple of ".concat(Kerl.HASH_LENGTH), {
          length: length
        });
      }

      var localOffset = offset;
      var localLength = length;

      do {
        var tritState = trits.slice(localOffset, localOffset + Kerl.HASH_LENGTH);
        tritState[Kerl.HASH_LENGTH - 1] = 0;
        var bigInt = bigIntegerHelper_1.BigIntegerHelper.tritsToBigInteger(tritState, 0, tritState.length);
        var byteState = new ArrayBuffer(Kerl.BYTE_HASH_LENGTH);
        bigIntegerHelper_1.BigIntegerHelper.bigIntegerToBytes(bigInt, byteState, 0);

        this._keccak.update(byteState);

        localOffset += Kerl.HASH_LENGTH;
        localLength -= Kerl.HASH_LENGTH;
      } while (localLength > 0);
    }
    /**
     * Squeeze trits into the hash.
     * @param trits The trits to squeeze.
     * @param offset The offset into the trits to squeeze from.
     * @param length The number of trits to squeeze.
     */

  }, {
    key: "squeeze",
    value: function squeeze(trits, offset, length) {
      if (!objectHelper_1.ObjectHelper.isType(trits, Int8Array) || trits.length === 0) {
        throw new cryptoError_1.CryptoError("Trits must be a non empty Int8Array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("Offset must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length < 0) {
        throw new cryptoError_1.CryptoError("Length must be a number >= 0");
      }

      if (length + offset > trits.length) {
        throw new cryptoError_1.CryptoError("The offset + length is beyond the length of the trits");
      }

      if (length % 243 !== 0) {
        throw new cryptoError_1.CryptoError("Length must be a multiple of ".concat(Kerl.HASH_LENGTH), {
          length: length
        });
      }

      var localOffset = offset;
      var localLength = length;

      do {
        var byteStateBuffer = this._keccak.digest();

        var bigInt = bigIntegerHelper_1.BigIntegerHelper.bytesToBigInteger(byteStateBuffer, 0, Kerl.BYTE_HASH_LENGTH);
        var tritState = new Int8Array(Kerl.HASH_LENGTH);
        bigIntegerHelper_1.BigIntegerHelper.bigIntegerToTrits(bigInt, tritState, 0, Kerl.HASH_LENGTH);
        tritState[Kerl.HASH_LENGTH - 1] = 0;
        var i = 0;

        while (i < Kerl.HASH_LENGTH) {
          trits[localOffset++] = tritState[i++];
        }

        var dv = new DataView(byteStateBuffer);

        for (i = 0; i < dv.byteLength; i++) {
          dv.setUint8(i, dv.getUint8(i) ^ 0xFF);
        }

        this._keccak.update(byteStateBuffer);

        localLength -= Kerl.HASH_LENGTH;
      } while (localLength > 0);
    }
  }]);

  return Kerl;
}();
/* @internal */


Kerl.HASH_LENGTH = 243;
/* @internal */

Kerl.BIT_HASH_LENGTH = 384;
/* @internal */

Kerl.BYTE_HASH_LENGTH = Kerl.BIT_HASH_LENGTH / 8;
exports.Kerl = Kerl;

/***/ }),

/***/ "../crypto/node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.49/node_modules/@babel/runtime/regenerator/index.js":
/*!********************************************************************************************************************************!*\
  !*** ../crypto/node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.49/node_modules/@babel/runtime/regenerator/index.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "../crypto/node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "../crypto/node_modules/.registry.npmjs.org/big-integer/1.6.31/node_modules/big-integer/BigInteger.js":
/*!************************************************************************************************************!*\
  !*** ../crypto/node_modules/.registry.npmjs.org/big-integer/1.6.31/node_modules/big-integer/BigInteger.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var bigInt = (function (undefined) {
    "use strict";

    var BASE = 1e7,
        LOG_BASE = 7,
        MAX_INT = 9007199254740992,
        MAX_INT_ARR = smallToArray(MAX_INT),
        LOG_MAX_INT = Math.log(MAX_INT);

    function Integer(v, radix) {
        if (typeof v === "undefined") return Integer[0];
        if (typeof radix !== "undefined") return +radix === 10 ? parseValue(v) : parseBase(v, radix);
        return parseValue(v);
    }

    function BigInteger(value, sign) {
        this.value = value;
        this.sign = sign;
        this.isSmall = false;
    }
    BigInteger.prototype = Object.create(Integer.prototype);

    function SmallInteger(value) {
        this.value = value;
        this.sign = value < 0;
        this.isSmall = true;
    }
    SmallInteger.prototype = Object.create(Integer.prototype);

    function isPrecise(n) {
        return -MAX_INT < n && n < MAX_INT;
    }

    function smallToArray(n) { // For performance reasons doesn't reference BASE, need to change this function if BASE changes
        if (n < 1e7)
            return [n];
        if (n < 1e14)
            return [n % 1e7, Math.floor(n / 1e7)];
        return [n % 1e7, Math.floor(n / 1e7) % 1e7, Math.floor(n / 1e14)];
    }

    function arrayToSmall(arr) { // If BASE changes this function may need to change
        trim(arr);
        var length = arr.length;
        if (length < 4 && compareAbs(arr, MAX_INT_ARR) < 0) {
            switch (length) {
                case 0: return 0;
                case 1: return arr[0];
                case 2: return arr[0] + arr[1] * BASE;
                default: return arr[0] + (arr[1] + arr[2] * BASE) * BASE;
            }
        }
        return arr;
    }

    function trim(v) {
        var i = v.length;
        while (v[--i] === 0);
        v.length = i + 1;
    }

    function createArray(length) { // function shamelessly stolen from Yaffle's library https://github.com/Yaffle/BigInteger
        var x = new Array(length);
        var i = -1;
        while (++i < length) {
            x[i] = 0;
        }
        return x;
    }

    function truncate(n) {
        if (n > 0) return Math.floor(n);
        return Math.ceil(n);
    }

    function add(a, b) { // assumes a and b are arrays with a.length >= b.length
        var l_a = a.length,
            l_b = b.length,
            r = new Array(l_a),
            carry = 0,
            base = BASE,
            sum, i;
        for (i = 0; i < l_b; i++) {
            sum = a[i] + b[i] + carry;
            carry = sum >= base ? 1 : 0;
            r[i] = sum - carry * base;
        }
        while (i < l_a) {
            sum = a[i] + carry;
            carry = sum === base ? 1 : 0;
            r[i++] = sum - carry * base;
        }
        if (carry > 0) r.push(carry);
        return r;
    }

    function addAny(a, b) {
        if (a.length >= b.length) return add(a, b);
        return add(b, a);
    }

    function addSmall(a, carry) { // assumes a is array, carry is number with 0 <= carry < MAX_INT
        var l = a.length,
            r = new Array(l),
            base = BASE,
            sum, i;
        for (i = 0; i < l; i++) {
            sum = a[i] - base + carry;
            carry = Math.floor(sum / base);
            r[i] = sum - carry * base;
            carry += 1;
        }
        while (carry > 0) {
            r[i++] = carry % base;
            carry = Math.floor(carry / base);
        }
        return r;
    }

    BigInteger.prototype.add = function (v) {
        var n = parseValue(v);
        if (this.sign !== n.sign) {
            return this.subtract(n.negate());
        }
        var a = this.value, b = n.value;
        if (n.isSmall) {
            return new BigInteger(addSmall(a, Math.abs(b)), this.sign);
        }
        return new BigInteger(addAny(a, b), this.sign);
    };
    BigInteger.prototype.plus = BigInteger.prototype.add;

    SmallInteger.prototype.add = function (v) {
        var n = parseValue(v);
        var a = this.value;
        if (a < 0 !== n.sign) {
            return this.subtract(n.negate());
        }
        var b = n.value;
        if (n.isSmall) {
            if (isPrecise(a + b)) return new SmallInteger(a + b);
            b = smallToArray(Math.abs(b));
        }
        return new BigInteger(addSmall(b, Math.abs(a)), a < 0);
    };
    SmallInteger.prototype.plus = SmallInteger.prototype.add;

    function subtract(a, b) { // assumes a and b are arrays with a >= b
        var a_l = a.length,
            b_l = b.length,
            r = new Array(a_l),
            borrow = 0,
            base = BASE,
            i, difference;
        for (i = 0; i < b_l; i++) {
            difference = a[i] - borrow - b[i];
            if (difference < 0) {
                difference += base;
                borrow = 1;
            } else borrow = 0;
            r[i] = difference;
        }
        for (i = b_l; i < a_l; i++) {
            difference = a[i] - borrow;
            if (difference < 0) difference += base;
            else {
                r[i++] = difference;
                break;
            }
            r[i] = difference;
        }
        for (; i < a_l; i++) {
            r[i] = a[i];
        }
        trim(r);
        return r;
    }

    function subtractAny(a, b, sign) {
        var value;
        if (compareAbs(a, b) >= 0) {
            value = subtract(a, b);
        } else {
            value = subtract(b, a);
            sign = !sign;
        }
        value = arrayToSmall(value);
        if (typeof value === "number") {
            if (sign) value = -value;
            return new SmallInteger(value);
        }
        return new BigInteger(value, sign);
    }

    function subtractSmall(a, b, sign) { // assumes a is array, b is number with 0 <= b < MAX_INT
        var l = a.length,
            r = new Array(l),
            carry = -b,
            base = BASE,
            i, difference;
        for (i = 0; i < l; i++) {
            difference = a[i] + carry;
            carry = Math.floor(difference / base);
            difference %= base;
            r[i] = difference < 0 ? difference + base : difference;
        }
        r = arrayToSmall(r);
        if (typeof r === "number") {
            if (sign) r = -r;
            return new SmallInteger(r);
        } return new BigInteger(r, sign);
    }

    BigInteger.prototype.subtract = function (v) {
        var n = parseValue(v);
        if (this.sign !== n.sign) {
            return this.add(n.negate());
        }
        var a = this.value, b = n.value;
        if (n.isSmall)
            return subtractSmall(a, Math.abs(b), this.sign);
        return subtractAny(a, b, this.sign);
    };
    BigInteger.prototype.minus = BigInteger.prototype.subtract;

    SmallInteger.prototype.subtract = function (v) {
        var n = parseValue(v);
        var a = this.value;
        if (a < 0 !== n.sign) {
            return this.add(n.negate());
        }
        var b = n.value;
        if (n.isSmall) {
            return new SmallInteger(a - b);
        }
        return subtractSmall(b, Math.abs(a), a >= 0);
    };
    SmallInteger.prototype.minus = SmallInteger.prototype.subtract;

    BigInteger.prototype.negate = function () {
        return new BigInteger(this.value, !this.sign);
    };
    SmallInteger.prototype.negate = function () {
        var sign = this.sign;
        var small = new SmallInteger(-this.value);
        small.sign = !sign;
        return small;
    };

    BigInteger.prototype.abs = function () {
        return new BigInteger(this.value, false);
    };
    SmallInteger.prototype.abs = function () {
        return new SmallInteger(Math.abs(this.value));
    };

    function multiplyLong(a, b) {
        var a_l = a.length,
            b_l = b.length,
            l = a_l + b_l,
            r = createArray(l),
            base = BASE,
            product, carry, i, a_i, b_j;
        for (i = 0; i < a_l; ++i) {
            a_i = a[i];
            for (var j = 0; j < b_l; ++j) {
                b_j = b[j];
                product = a_i * b_j + r[i + j];
                carry = Math.floor(product / base);
                r[i + j] = product - carry * base;
                r[i + j + 1] += carry;
            }
        }
        trim(r);
        return r;
    }

    function multiplySmall(a, b) { // assumes a is array, b is number with |b| < BASE
        var l = a.length,
            r = new Array(l),
            base = BASE,
            carry = 0,
            product, i;
        for (i = 0; i < l; i++) {
            product = a[i] * b + carry;
            carry = Math.floor(product / base);
            r[i] = product - carry * base;
        }
        while (carry > 0) {
            r[i++] = carry % base;
            carry = Math.floor(carry / base);
        }
        return r;
    }

    function shiftLeft(x, n) {
        var r = [];
        while (n-- > 0) r.push(0);
        return r.concat(x);
    }

    function multiplyKaratsuba(x, y) {
        var n = Math.max(x.length, y.length);

        if (n <= 30) return multiplyLong(x, y);
        n = Math.ceil(n / 2);

        var b = x.slice(n),
            a = x.slice(0, n),
            d = y.slice(n),
            c = y.slice(0, n);

        var ac = multiplyKaratsuba(a, c),
            bd = multiplyKaratsuba(b, d),
            abcd = multiplyKaratsuba(addAny(a, b), addAny(c, d));

        var product = addAny(addAny(ac, shiftLeft(subtract(subtract(abcd, ac), bd), n)), shiftLeft(bd, 2 * n));
        trim(product);
        return product;
    }

    // The following function is derived from a surface fit of a graph plotting the performance difference
    // between long multiplication and karatsuba multiplication versus the lengths of the two arrays.
    function useKaratsuba(l1, l2) {
        return -0.012 * l1 - 0.012 * l2 + 0.000015 * l1 * l2 > 0;
    }

    BigInteger.prototype.multiply = function (v) {
        var n = parseValue(v),
            a = this.value, b = n.value,
            sign = this.sign !== n.sign,
            abs;
        if (n.isSmall) {
            if (b === 0) return Integer[0];
            if (b === 1) return this;
            if (b === -1) return this.negate();
            abs = Math.abs(b);
            if (abs < BASE) {
                return new BigInteger(multiplySmall(a, abs), sign);
            }
            b = smallToArray(abs);
        }
        if (useKaratsuba(a.length, b.length)) // Karatsuba is only faster for certain array sizes
            return new BigInteger(multiplyKaratsuba(a, b), sign);
        return new BigInteger(multiplyLong(a, b), sign);
    };

    BigInteger.prototype.times = BigInteger.prototype.multiply;

    function multiplySmallAndArray(a, b, sign) { // a >= 0
        if (a < BASE) {
            return new BigInteger(multiplySmall(b, a), sign);
        }
        return new BigInteger(multiplyLong(b, smallToArray(a)), sign);
    }
    SmallInteger.prototype._multiplyBySmall = function (a) {
        if (isPrecise(a.value * this.value)) {
            return new SmallInteger(a.value * this.value);
        }
        return multiplySmallAndArray(Math.abs(a.value), smallToArray(Math.abs(this.value)), this.sign !== a.sign);
    };
    BigInteger.prototype._multiplyBySmall = function (a) {
        if (a.value === 0) return Integer[0];
        if (a.value === 1) return this;
        if (a.value === -1) return this.negate();
        return multiplySmallAndArray(Math.abs(a.value), this.value, this.sign !== a.sign);
    };
    SmallInteger.prototype.multiply = function (v) {
        return parseValue(v)._multiplyBySmall(this);
    };
    SmallInteger.prototype.times = SmallInteger.prototype.multiply;

    function square(a) {
        var l = a.length,
            r = createArray(l + l),
            base = BASE,
            product, carry, i, a_i, a_j;
        for (i = 0; i < l; i++) {
            a_i = a[i];
            for (var j = 0; j < l; j++) {
                a_j = a[j];
                product = a_i * a_j + r[i + j];
                carry = Math.floor(product / base);
                r[i + j] = product - carry * base;
                r[i + j + 1] += carry;
            }
        }
        trim(r);
        return r;
    }

    BigInteger.prototype.square = function () {
        return new BigInteger(square(this.value), false);
    };

    SmallInteger.prototype.square = function () {
        var value = this.value * this.value;
        if (isPrecise(value)) return new SmallInteger(value);
        return new BigInteger(square(smallToArray(Math.abs(this.value))), false);
    };

    function divMod1(a, b) { // Left over from previous version. Performs faster than divMod2 on smaller input sizes.
        var a_l = a.length,
            b_l = b.length,
            base = BASE,
            result = createArray(b.length),
            divisorMostSignificantDigit = b[b_l - 1],
            // normalization
            lambda = Math.ceil(base / (2 * divisorMostSignificantDigit)),
            remainder = multiplySmall(a, lambda),
            divisor = multiplySmall(b, lambda),
            quotientDigit, shift, carry, borrow, i, l, q;
        if (remainder.length <= a_l) remainder.push(0);
        divisor.push(0);
        divisorMostSignificantDigit = divisor[b_l - 1];
        for (shift = a_l - b_l; shift >= 0; shift--) {
            quotientDigit = base - 1;
            if (remainder[shift + b_l] !== divisorMostSignificantDigit) {
                quotientDigit = Math.floor((remainder[shift + b_l] * base + remainder[shift + b_l - 1]) / divisorMostSignificantDigit);
            }
            // quotientDigit <= base - 1
            carry = 0;
            borrow = 0;
            l = divisor.length;
            for (i = 0; i < l; i++) {
                carry += quotientDigit * divisor[i];
                q = Math.floor(carry / base);
                borrow += remainder[shift + i] - (carry - q * base);
                carry = q;
                if (borrow < 0) {
                    remainder[shift + i] = borrow + base;
                    borrow = -1;
                } else {
                    remainder[shift + i] = borrow;
                    borrow = 0;
                }
            }
            while (borrow !== 0) {
                quotientDigit -= 1;
                carry = 0;
                for (i = 0; i < l; i++) {
                    carry += remainder[shift + i] - base + divisor[i];
                    if (carry < 0) {
                        remainder[shift + i] = carry + base;
                        carry = 0;
                    } else {
                        remainder[shift + i] = carry;
                        carry = 1;
                    }
                }
                borrow += carry;
            }
            result[shift] = quotientDigit;
        }
        // denormalization
        remainder = divModSmall(remainder, lambda)[0];
        return [arrayToSmall(result), arrayToSmall(remainder)];
    }

    function divMod2(a, b) { // Implementation idea shamelessly stolen from Silent Matt's library http://silentmatt.com/biginteger/
        // Performs faster than divMod1 on larger input sizes.
        var a_l = a.length,
            b_l = b.length,
            result = [],
            part = [],
            base = BASE,
            guess, xlen, highx, highy, check;
        while (a_l) {
            part.unshift(a[--a_l]);
            trim(part);
            if (compareAbs(part, b) < 0) {
                result.push(0);
                continue;
            }
            xlen = part.length;
            highx = part[xlen - 1] * base + part[xlen - 2];
            highy = b[b_l - 1] * base + b[b_l - 2];
            if (xlen > b_l) {
                highx = (highx + 1) * base;
            }
            guess = Math.ceil(highx / highy);
            do {
                check = multiplySmall(b, guess);
                if (compareAbs(check, part) <= 0) break;
                guess--;
            } while (guess);
            result.push(guess);
            part = subtract(part, check);
        }
        result.reverse();
        return [arrayToSmall(result), arrayToSmall(part)];
    }

    function divModSmall(value, lambda) {
        var length = value.length,
            quotient = createArray(length),
            base = BASE,
            i, q, remainder, divisor;
        remainder = 0;
        for (i = length - 1; i >= 0; --i) {
            divisor = remainder * base + value[i];
            q = truncate(divisor / lambda);
            remainder = divisor - q * lambda;
            quotient[i] = q | 0;
        }
        return [quotient, remainder | 0];
    }

    function divModAny(self, v) {
        var value, n = parseValue(v);
        var a = self.value, b = n.value;
        var quotient;
        if (b === 0) throw new Error("Cannot divide by zero");
        if (self.isSmall) {
            if (n.isSmall) {
                return [new SmallInteger(truncate(a / b)), new SmallInteger(a % b)];
            }
            return [Integer[0], self];
        }
        if (n.isSmall) {
            if (b === 1) return [self, Integer[0]];
            if (b == -1) return [self.negate(), Integer[0]];
            var abs = Math.abs(b);
            if (abs < BASE) {
                value = divModSmall(a, abs);
                quotient = arrayToSmall(value[0]);
                var remainder = value[1];
                if (self.sign) remainder = -remainder;
                if (typeof quotient === "number") {
                    if (self.sign !== n.sign) quotient = -quotient;
                    return [new SmallInteger(quotient), new SmallInteger(remainder)];
                }
                return [new BigInteger(quotient, self.sign !== n.sign), new SmallInteger(remainder)];
            }
            b = smallToArray(abs);
        }
        var comparison = compareAbs(a, b);
        if (comparison === -1) return [Integer[0], self];
        if (comparison === 0) return [Integer[self.sign === n.sign ? 1 : -1], Integer[0]];

        // divMod1 is faster on smaller input sizes
        if (a.length + b.length <= 200)
            value = divMod1(a, b);
        else value = divMod2(a, b);

        quotient = value[0];
        var qSign = self.sign !== n.sign,
            mod = value[1],
            mSign = self.sign;
        if (typeof quotient === "number") {
            if (qSign) quotient = -quotient;
            quotient = new SmallInteger(quotient);
        } else quotient = new BigInteger(quotient, qSign);
        if (typeof mod === "number") {
            if (mSign) mod = -mod;
            mod = new SmallInteger(mod);
        } else mod = new BigInteger(mod, mSign);
        return [quotient, mod];
    }

    BigInteger.prototype.divmod = function (v) {
        var result = divModAny(this, v);
        return {
            quotient: result[0],
            remainder: result[1]
        };
    };
    SmallInteger.prototype.divmod = BigInteger.prototype.divmod;

    BigInteger.prototype.divide = function (v) {
        return divModAny(this, v)[0];
    };
    SmallInteger.prototype.over = SmallInteger.prototype.divide = BigInteger.prototype.over = BigInteger.prototype.divide;

    BigInteger.prototype.mod = function (v) {
        return divModAny(this, v)[1];
    };
    SmallInteger.prototype.remainder = SmallInteger.prototype.mod = BigInteger.prototype.remainder = BigInteger.prototype.mod;

    BigInteger.prototype.pow = function (v) {
        var n = parseValue(v),
            a = this.value,
            b = n.value,
            value, x, y;
        if (b === 0) return Integer[1];
        if (a === 0) return Integer[0];
        if (a === 1) return Integer[1];
        if (a === -1) return n.isEven() ? Integer[1] : Integer[-1];
        if (n.sign) {
            return Integer[0];
        }
        if (!n.isSmall) throw new Error("The exponent " + n.toString() + " is too large.");
        if (this.isSmall) {
            if (isPrecise(value = Math.pow(a, b)))
                return new SmallInteger(truncate(value));
        }
        x = this;
        y = Integer[1];
        while (true) {
            if (b & 1 === 1) {
                y = y.times(x);
                --b;
            }
            if (b === 0) break;
            b /= 2;
            x = x.square();
        }
        return y;
    };
    SmallInteger.prototype.pow = BigInteger.prototype.pow;

    BigInteger.prototype.modPow = function (exp, mod) {
        exp = parseValue(exp);
        mod = parseValue(mod);
        if (mod.isZero()) throw new Error("Cannot take modPow with modulus 0");
        var r = Integer[1],
            base = this.mod(mod);
        while (exp.isPositive()) {
            if (base.isZero()) return Integer[0];
            if (exp.isOdd()) r = r.multiply(base).mod(mod);
            exp = exp.divide(2);
            base = base.square().mod(mod);
        }
        return r;
    };
    SmallInteger.prototype.modPow = BigInteger.prototype.modPow;

    function compareAbs(a, b) {
        if (a.length !== b.length) {
            return a.length > b.length ? 1 : -1;
        }
        for (var i = a.length - 1; i >= 0; i--) {
            if (a[i] !== b[i]) return a[i] > b[i] ? 1 : -1;
        }
        return 0;
    }

    BigInteger.prototype.compareAbs = function (v) {
        var n = parseValue(v),
            a = this.value,
            b = n.value;
        if (n.isSmall) return 1;
        return compareAbs(a, b);
    };
    SmallInteger.prototype.compareAbs = function (v) {
        var n = parseValue(v),
            a = Math.abs(this.value),
            b = n.value;
        if (n.isSmall) {
            b = Math.abs(b);
            return a === b ? 0 : a > b ? 1 : -1;
        }
        return -1;
    };

    BigInteger.prototype.compare = function (v) {
        // See discussion about comparison with Infinity:
        // https://github.com/peterolson/BigInteger.js/issues/61
        if (v === Infinity) {
            return -1;
        }
        if (v === -Infinity) {
            return 1;
        }

        var n = parseValue(v),
            a = this.value,
            b = n.value;
        if (this.sign !== n.sign) {
            return n.sign ? 1 : -1;
        }
        if (n.isSmall) {
            return this.sign ? -1 : 1;
        }
        return compareAbs(a, b) * (this.sign ? -1 : 1);
    };
    BigInteger.prototype.compareTo = BigInteger.prototype.compare;

    SmallInteger.prototype.compare = function (v) {
        if (v === Infinity) {
            return -1;
        }
        if (v === -Infinity) {
            return 1;
        }

        var n = parseValue(v),
            a = this.value,
            b = n.value;
        if (n.isSmall) {
            return a == b ? 0 : a > b ? 1 : -1;
        }
        if (a < 0 !== n.sign) {
            return a < 0 ? -1 : 1;
        }
        return a < 0 ? 1 : -1;
    };
    SmallInteger.prototype.compareTo = SmallInteger.prototype.compare;

    BigInteger.prototype.equals = function (v) {
        return this.compare(v) === 0;
    };
    SmallInteger.prototype.eq = SmallInteger.prototype.equals = BigInteger.prototype.eq = BigInteger.prototype.equals;

    BigInteger.prototype.notEquals = function (v) {
        return this.compare(v) !== 0;
    };
    SmallInteger.prototype.neq = SmallInteger.prototype.notEquals = BigInteger.prototype.neq = BigInteger.prototype.notEquals;

    BigInteger.prototype.greater = function (v) {
        return this.compare(v) > 0;
    };
    SmallInteger.prototype.gt = SmallInteger.prototype.greater = BigInteger.prototype.gt = BigInteger.prototype.greater;

    BigInteger.prototype.lesser = function (v) {
        return this.compare(v) < 0;
    };
    SmallInteger.prototype.lt = SmallInteger.prototype.lesser = BigInteger.prototype.lt = BigInteger.prototype.lesser;

    BigInteger.prototype.greaterOrEquals = function (v) {
        return this.compare(v) >= 0;
    };
    SmallInteger.prototype.geq = SmallInteger.prototype.greaterOrEquals = BigInteger.prototype.geq = BigInteger.prototype.greaterOrEquals;

    BigInteger.prototype.lesserOrEquals = function (v) {
        return this.compare(v) <= 0;
    };
    SmallInteger.prototype.leq = SmallInteger.prototype.lesserOrEquals = BigInteger.prototype.leq = BigInteger.prototype.lesserOrEquals;

    BigInteger.prototype.isEven = function () {
        return (this.value[0] & 1) === 0;
    };
    SmallInteger.prototype.isEven = function () {
        return (this.value & 1) === 0;
    };

    BigInteger.prototype.isOdd = function () {
        return (this.value[0] & 1) === 1;
    };
    SmallInteger.prototype.isOdd = function () {
        return (this.value & 1) === 1;
    };

    BigInteger.prototype.isPositive = function () {
        return !this.sign;
    };
    SmallInteger.prototype.isPositive = function () {
        return this.value > 0;
    };

    BigInteger.prototype.isNegative = function () {
        return this.sign;
    };
    SmallInteger.prototype.isNegative = function () {
        return this.value < 0;
    };

    BigInteger.prototype.isUnit = function () {
        return false;
    };
    SmallInteger.prototype.isUnit = function () {
        return Math.abs(this.value) === 1;
    };

    BigInteger.prototype.isZero = function () {
        return false;
    };
    SmallInteger.prototype.isZero = function () {
        return this.value === 0;
    };
    BigInteger.prototype.isDivisibleBy = function (v) {
        var n = parseValue(v);
        var value = n.value;
        if (value === 0) return false;
        if (value === 1) return true;
        if (value === 2) return this.isEven();
        return this.mod(n).equals(Integer[0]);
    };
    SmallInteger.prototype.isDivisibleBy = BigInteger.prototype.isDivisibleBy;

    function isBasicPrime(v) {
        var n = v.abs();
        if (n.isUnit()) return false;
        if (n.equals(2) || n.equals(3) || n.equals(5)) return true;
        if (n.isEven() || n.isDivisibleBy(3) || n.isDivisibleBy(5)) return false;
        if (n.lesser(25)) return true;
        // we don't know if it's prime: let the other functions figure it out
    }

    BigInteger.prototype.isPrime = function () {
        var isPrime = isBasicPrime(this);
        if (isPrime !== undefined) return isPrime;
        var n = this.abs(),
            nPrev = n.prev();
        var a = [2, 3, 5, 7, 11, 13, 17, 19],
            b = nPrev,
            d, t, i, x;
        while (b.isEven()) b = b.divide(2);
        for (i = 0; i < a.length; i++) {
            x = bigInt(a[i]).modPow(b, n);
            if (x.equals(Integer[1]) || x.equals(nPrev)) continue;
            for (t = true, d = b; t && d.lesser(nPrev); d = d.multiply(2)) {
                x = x.square().mod(n);
                if (x.equals(nPrev)) t = false;
            }
            if (t) return false;
        }
        return true;
    };
    SmallInteger.prototype.isPrime = BigInteger.prototype.isPrime;

    BigInteger.prototype.isProbablePrime = function (iterations) {
        var isPrime = isBasicPrime(this);
        if (isPrime !== undefined) return isPrime;
        var n = this.abs();
        var t = iterations === undefined ? 5 : iterations;
        // use the Fermat primality test
        for (var i = 0; i < t; i++) {
            var a = bigInt.randBetween(2, n.minus(2));
            if (!a.modPow(n.prev(), n).isUnit()) return false; // definitely composite
        }
        return true; // large chance of being prime
    };
    SmallInteger.prototype.isProbablePrime = BigInteger.prototype.isProbablePrime;

    BigInteger.prototype.modInv = function (n) {
        var t = bigInt.zero, newT = bigInt.one, r = parseValue(n), newR = this.abs(), q, lastT, lastR;
        while (!newR.equals(bigInt.zero)) {
            q = r.divide(newR);
            lastT = t;
            lastR = r;
            t = newT;
            r = newR;
            newT = lastT.subtract(q.multiply(newT));
            newR = lastR.subtract(q.multiply(newR));
        }
        if (!r.equals(1)) throw new Error(this.toString() + " and " + n.toString() + " are not co-prime");
        if (t.compare(0) === -1) {
            t = t.add(n);
        }
        if (this.isNegative()) {
            return t.negate();
        }
        return t;
    };

    SmallInteger.prototype.modInv = BigInteger.prototype.modInv;

    BigInteger.prototype.next = function () {
        var value = this.value;
        if (this.sign) {
            return subtractSmall(value, 1, this.sign);
        }
        return new BigInteger(addSmall(value, 1), this.sign);
    };
    SmallInteger.prototype.next = function () {
        var value = this.value;
        if (value + 1 < MAX_INT) return new SmallInteger(value + 1);
        return new BigInteger(MAX_INT_ARR, false);
    };

    BigInteger.prototype.prev = function () {
        var value = this.value;
        if (this.sign) {
            return new BigInteger(addSmall(value, 1), true);
        }
        return subtractSmall(value, 1, this.sign);
    };
    SmallInteger.prototype.prev = function () {
        var value = this.value;
        if (value - 1 > -MAX_INT) return new SmallInteger(value - 1);
        return new BigInteger(MAX_INT_ARR, true);
    };

    var powersOfTwo = [1];
    while (2 * powersOfTwo[powersOfTwo.length - 1] <= BASE) powersOfTwo.push(2 * powersOfTwo[powersOfTwo.length - 1]);
    var powers2Length = powersOfTwo.length, highestPower2 = powersOfTwo[powers2Length - 1];

    function shift_isSmall(n) {
        return ((typeof n === "number" || typeof n === "string") && +Math.abs(n) <= BASE) ||
            (n instanceof BigInteger && n.value.length <= 1);
    }

    BigInteger.prototype.shiftLeft = function (n) {
        if (!shift_isSmall(n)) {
            throw new Error(String(n) + " is too large for shifting.");
        }
        n = +n;
        if (n < 0) return this.shiftRight(-n);
        var result = this;
        while (n >= powers2Length) {
            result = result.multiply(highestPower2);
            n -= powers2Length - 1;
        }
        return result.multiply(powersOfTwo[n]);
    };
    SmallInteger.prototype.shiftLeft = BigInteger.prototype.shiftLeft;

    BigInteger.prototype.shiftRight = function (n) {
        var remQuo;
        if (!shift_isSmall(n)) {
            throw new Error(String(n) + " is too large for shifting.");
        }
        n = +n;
        if (n < 0) return this.shiftLeft(-n);
        var result = this;
        while (n >= powers2Length) {
            if (result.isZero()) return result;
            remQuo = divModAny(result, highestPower2);
            result = remQuo[1].isNegative() ? remQuo[0].prev() : remQuo[0];
            n -= powers2Length - 1;
        }
        remQuo = divModAny(result, powersOfTwo[n]);
        return remQuo[1].isNegative() ? remQuo[0].prev() : remQuo[0];
    };
    SmallInteger.prototype.shiftRight = BigInteger.prototype.shiftRight;

    function bitwise(x, y, fn) {
        y = parseValue(y);
        var xSign = x.isNegative(), ySign = y.isNegative();
        var xRem = xSign ? x.not() : x,
            yRem = ySign ? y.not() : y;
        var xDigit = 0, yDigit = 0;
        var xDivMod = null, yDivMod = null;
        var result = [];
        while (!xRem.isZero() || !yRem.isZero()) {
            xDivMod = divModAny(xRem, highestPower2);
            xDigit = xDivMod[1].toJSNumber();
            if (xSign) {
                xDigit = highestPower2 - 1 - xDigit; // two's complement for negative numbers
            }

            yDivMod = divModAny(yRem, highestPower2);
            yDigit = yDivMod[1].toJSNumber();
            if (ySign) {
                yDigit = highestPower2 - 1 - yDigit; // two's complement for negative numbers
            }

            xRem = xDivMod[0];
            yRem = yDivMod[0];
            result.push(fn(xDigit, yDigit));
        }
        var sum = fn(xSign ? 1 : 0, ySign ? 1 : 0) !== 0 ? bigInt(-1) : bigInt(0);
        for (var i = result.length - 1; i >= 0; i -= 1) {
            sum = sum.multiply(highestPower2).add(bigInt(result[i]));
        }
        return sum;
    }

    BigInteger.prototype.not = function () {
        return this.negate().prev();
    };
    SmallInteger.prototype.not = BigInteger.prototype.not;

    BigInteger.prototype.and = function (n) {
        return bitwise(this, n, function (a, b) { return a & b; });
    };
    SmallInteger.prototype.and = BigInteger.prototype.and;

    BigInteger.prototype.or = function (n) {
        return bitwise(this, n, function (a, b) { return a | b; });
    };
    SmallInteger.prototype.or = BigInteger.prototype.or;

    BigInteger.prototype.xor = function (n) {
        return bitwise(this, n, function (a, b) { return a ^ b; });
    };
    SmallInteger.prototype.xor = BigInteger.prototype.xor;

    var LOBMASK_I = 1 << 30, LOBMASK_BI = (BASE & -BASE) * (BASE & -BASE) | LOBMASK_I;
    function roughLOB(n) { // get lowestOneBit (rough)
        // SmallInteger: return Min(lowestOneBit(n), 1 << 30)
        // BigInteger: return Min(lowestOneBit(n), 1 << 14) [BASE=1e7]
        var v = n.value, x = typeof v === "number" ? v | LOBMASK_I : v[0] + v[1] * BASE | LOBMASK_BI;
        return x & -x;
    }

    function integerLogarithm(value, base) {
        if (base.compareTo(value) <= 0) {
            var tmp = integerLogarithm(value, base.square(base));
            var p = tmp.p;
            var e = tmp.e;
            var t = p.multiply(base);
            return t.compareTo(value) <= 0 ? { p: t, e: e * 2 + 1 } : { p: p, e: e * 2 };
        }
        return { p: bigInt(1), e: 0 };
    }

    BigInteger.prototype.bitLength = function () {
        var n = this;
        if (n.compareTo(bigInt(0)) < 0) {
            n = n.negate().subtract(bigInt(1));
        }
        if (n.compareTo(bigInt(0)) === 0) {
            return bigInt(0);
        }
        return bigInt(integerLogarithm(n, bigInt(2)).e).add(bigInt(1));
    }
    SmallInteger.prototype.bitLength = BigInteger.prototype.bitLength;

    function max(a, b) {
        a = parseValue(a);
        b = parseValue(b);
        return a.greater(b) ? a : b;
    }
    function min(a, b) {
        a = parseValue(a);
        b = parseValue(b);
        return a.lesser(b) ? a : b;
    }
    function gcd(a, b) {
        a = parseValue(a).abs();
        b = parseValue(b).abs();
        if (a.equals(b)) return a;
        if (a.isZero()) return b;
        if (b.isZero()) return a;
        var c = Integer[1], d, t;
        while (a.isEven() && b.isEven()) {
            d = Math.min(roughLOB(a), roughLOB(b));
            a = a.divide(d);
            b = b.divide(d);
            c = c.multiply(d);
        }
        while (a.isEven()) {
            a = a.divide(roughLOB(a));
        }
        do {
            while (b.isEven()) {
                b = b.divide(roughLOB(b));
            }
            if (a.greater(b)) {
                t = b; b = a; a = t;
            }
            b = b.subtract(a);
        } while (!b.isZero());
        return c.isUnit() ? a : a.multiply(c);
    }
    function lcm(a, b) {
        a = parseValue(a).abs();
        b = parseValue(b).abs();
        return a.divide(gcd(a, b)).multiply(b);
    }
    function randBetween(a, b) {
        a = parseValue(a);
        b = parseValue(b);
        var low = min(a, b), high = max(a, b);
        var range = high.subtract(low).add(1);
        if (range.isSmall) return low.add(Math.floor(Math.random() * range));
        var length = range.value.length - 1;
        var result = [], restricted = true;
        for (var i = length; i >= 0; i--) {
            var top = restricted ? range.value[i] : BASE;
            var digit = truncate(Math.random() * top);
            result.unshift(digit);
            if (digit < top) restricted = false;
        }
        result = arrayToSmall(result);
        return low.add(typeof result === "number" ? new SmallInteger(result) : new BigInteger(result, false));
    }
    var parseBase = function (text, base) {
        var length = text.length;
        var i;
        var absBase = Math.abs(base);
        for (var i = 0; i < length; i++) {
            var c = text[i].toLowerCase();
            if (c === "-") continue;
            if (/[a-z0-9]/.test(c)) {
                if (/[0-9]/.test(c) && +c >= absBase) {
                    if (c === "1" && absBase === 1) continue;
                    throw new Error(c + " is not a valid digit in base " + base + ".");
                } else if (c.charCodeAt(0) - 87 >= absBase) {
                    throw new Error(c + " is not a valid digit in base " + base + ".");
                }
            }
        }
        if (2 <= base && base <= 36) {
            if (length <= LOG_MAX_INT / Math.log(base)) {
                var result = parseInt(text, base);
                if (isNaN(result)) {
                    throw new Error(c + " is not a valid digit in base " + base + ".");
                }
                return new SmallInteger(parseInt(text, base));
            }
        }
        base = parseValue(base);
        var digits = [];
        var isNegative = text[0] === "-";
        for (i = isNegative ? 1 : 0; i < text.length; i++) {
            var c = text[i].toLowerCase(),
                charCode = c.charCodeAt(0);
            if (48 <= charCode && charCode <= 57) digits.push(parseValue(c));
            else if (97 <= charCode && charCode <= 122) digits.push(parseValue(c.charCodeAt(0) - 87));
            else if (c === "<") {
                var start = i;
                do { i++; } while (text[i] !== ">");
                digits.push(parseValue(text.slice(start + 1, i)));
            }
            else throw new Error(c + " is not a valid character");
        }
        return parseBaseFromArray(digits, base, isNegative);
    };

    function parseBaseFromArray(digits, base, isNegative) {
        var val = Integer[0], pow = Integer[1], i;
        for (i = digits.length - 1; i >= 0; i--) {
            val = val.add(digits[i].times(pow));
            pow = pow.times(base);
        }
        return isNegative ? val.negate() : val;
    }

    function stringify(digit) {
        if (digit <= 35) {
            return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(digit);
        }
        return "<" + digit + ">";
    }

    function toBase(n, base) {
        base = bigInt(base);
        if (base.isZero()) {
            if (n.isZero()) return { value: [0], isNegative: false };
            throw new Error("Cannot convert nonzero numbers to base 0.");
        }
        if (base.equals(-1)) {
            if (n.isZero()) return { value: [0], isNegative: false };
            if (n.isNegative())
                return {
                    value: [].concat.apply([], Array.apply(null, Array(-n))
                        .map(Array.prototype.valueOf, [1, 0])
                    ),
                    isNegative: false
                };

            var arr = Array.apply(null, Array(+n - 1))
                .map(Array.prototype.valueOf, [0, 1]);
            arr.unshift([1]);
            return {
                value: [].concat.apply([], arr),
                isNegative: false
            };
        }

        var neg = false;
        if (n.isNegative() && base.isPositive()) {
            neg = true;
            n = n.abs();
        }
        if (base.equals(1)) {
            if (n.isZero()) return { value: [0], isNegative: false };

            return {
                value: Array.apply(null, Array(+n))
                    .map(Number.prototype.valueOf, 1),
                isNegative: neg
            };
        }
        var out = [];
        var left = n, divmod;
        while (left.isNegative() || left.compareAbs(base) >= 0) {
            divmod = left.divmod(base);
            left = divmod.quotient;
            var digit = divmod.remainder;
            if (digit.isNegative()) {
                digit = base.minus(digit).abs();
                left = left.next();
            }
            out.push(digit.toJSNumber());
        }
        out.push(left.toJSNumber());
        return { value: out.reverse(), isNegative: neg };
    }

    function toBaseString(n, base) {
        var arr = toBase(n, base);
        return (arr.isNegative ? "-" : "") + arr.value.map(stringify).join('');
    }

    BigInteger.prototype.toArray = function (radix) {
        return toBase(this, radix);
    };

    SmallInteger.prototype.toArray = function (radix) {
        return toBase(this, radix);
    };

    BigInteger.prototype.toString = function (radix) {
        if (radix === undefined) radix = 10;
        if (radix !== 10) return toBaseString(this, radix);
        var v = this.value, l = v.length, str = String(v[--l]), zeros = "0000000", digit;
        while (--l >= 0) {
            digit = String(v[l]);
            str += zeros.slice(digit.length) + digit;
        }
        var sign = this.sign ? "-" : "";
        return sign + str;
    };

    SmallInteger.prototype.toString = function (radix) {
        if (radix === undefined) radix = 10;
        if (radix != 10) return toBaseString(this, radix);
        return String(this.value);
    };
    BigInteger.prototype.toJSON = SmallInteger.prototype.toJSON = function () { return this.toString(); }

    BigInteger.prototype.valueOf = function () {
        return parseInt(this.toString(), 10);
    };
    BigInteger.prototype.toJSNumber = BigInteger.prototype.valueOf;

    SmallInteger.prototype.valueOf = function () {
        return this.value;
    };
    SmallInteger.prototype.toJSNumber = SmallInteger.prototype.valueOf;

    function parseStringValue(v) {
        if (isPrecise(+v)) {
            var x = +v;
            if (x === truncate(x))
                return new SmallInteger(x);
            throw new Error("Invalid integer: " + v);
        }
        var sign = v[0] === "-";
        if (sign) v = v.slice(1);
        var split = v.split(/e/i);
        if (split.length > 2) throw new Error("Invalid integer: " + split.join("e"));
        if (split.length === 2) {
            var exp = split[1];
            if (exp[0] === "+") exp = exp.slice(1);
            exp = +exp;
            if (exp !== truncate(exp) || !isPrecise(exp)) throw new Error("Invalid integer: " + exp + " is not a valid exponent.");
            var text = split[0];
            var decimalPlace = text.indexOf(".");
            if (decimalPlace >= 0) {
                exp -= text.length - decimalPlace - 1;
                text = text.slice(0, decimalPlace) + text.slice(decimalPlace + 1);
            }
            if (exp < 0) throw new Error("Cannot include negative exponent part for integers");
            text += (new Array(exp + 1)).join("0");
            v = text;
        }
        var isValid = /^([0-9][0-9]*)$/.test(v);
        if (!isValid) throw new Error("Invalid integer: " + v);
        var r = [], max = v.length, l = LOG_BASE, min = max - l;
        while (max > 0) {
            r.push(+v.slice(min, max));
            min -= l;
            if (min < 0) min = 0;
            max -= l;
        }
        trim(r);
        return new BigInteger(r, sign);
    }

    function parseNumberValue(v) {
        if (isPrecise(v)) {
            if (v !== truncate(v)) throw new Error(v + " is not an integer.");
            return new SmallInteger(v);
        }
        return parseStringValue(v.toString());
    }

    function parseValue(v) {
        if (typeof v === "number") {
            return parseNumberValue(v);
        }
        if (typeof v === "string") {
            return parseStringValue(v);
        }
        return v;
    }
    // Pre-define numbers in range [-999,999]
    for (var i = 0; i < 1000; i++) {
        Integer[i] = new SmallInteger(i);
        if (i > 0) Integer[-i] = new SmallInteger(-i);
    }
    // Backwards compatibility
    Integer.one = Integer[1];
    Integer.zero = Integer[0];
    Integer.minusOne = Integer[-1];
    Integer.max = max;
    Integer.min = min;
    Integer.gcd = gcd;
    Integer.lcm = lcm;
    Integer.isInstance = function (x) { return x instanceof BigInteger || x instanceof SmallInteger; };
    Integer.randBetween = randBetween;

    Integer.fromArray = function (digits, base, isNegative) {
        return parseBaseFromArray(digits.map(parseValue), parseValue(base || 10), isNegative);
    };

    return Integer;
})();

// Node.js check
if (typeof module !== "undefined" && module.hasOwnProperty("exports")) {
    module.exports = bigInt;
}

//amd check
if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
        return bigInt;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../pow-webgl/node_modules/.registry.npmjs.org/webpack/4.12.0/node_modules/webpack/buildin/module.js */ "./node_modules/.registry.npmjs.org/webpack/4.12.0/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../crypto/node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime-module.js":
/*!********************************************************************************************************************************!*\
  !*** ../crypto/node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime-module.js ***!
  \********************************************************************************************************************************/
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

module.exports = __webpack_require__(/*! ./runtime */ "../crypto/node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime.js");

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

/***/ "../crypto/node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime.js":
/*!*************************************************************************************************************************!*\
  !*** ../crypto/node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime.js ***!
  \*************************************************************************************************************************/
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

/***/ "../data/dist/data/address.js":
/*!************************************!*\
  !*** ../data/dist/data/address.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var dataError_1 = __webpack_require__(/*! ../error/dataError */ "../data/dist/error/dataError.js");

var trytes_1 = __webpack_require__(/*! ./trytes */ "../data/dist/data/trytes.js");
/**
 * A class for handling addresses.
 */


var Address =
/*#__PURE__*/
function () {
  /* @internal */
  function Address(addressTrytes, checksumTrytes) {
    _classCallCheck(this, Address);

    this._addressTrytes = addressTrytes;
    this._checksumTrytes = checksumTrytes;
  }
  /**
   * Create address from trytes.
   * @param address The trytes to create the address from.
   * @returns An instance of Address.
   */


  _createClass(Address, [{
    key: "toTrytes",

    /**
     * Convert the address to trytes with no checksum.
     * @returns Trytes version of the address with no checksum.
     */
    value: function toTrytes() {
      return trytes_1.Trytes.fromString(this._addressTrytes);
    }
    /**
     * Convert the address to trytes with a checksum, creating a blank one if needed.
     * @returns Trytes version of the address with checksu,.
     */

  }, {
    key: "toTrytesWithChecksum",
    value: function toTrytesWithChecksum() {
      if (!objectHelper_1.ObjectHelper.isEmpty(this._checksumTrytes)) {
        return trytes_1.Trytes.fromString(this._addressTrytes + this._checksumTrytes);
      } else {
        throw new dataError_1.DataError("This address has no checksum calculated for it");
      }
    }
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */

  }, {
    key: "toString",
    value: function toString() {
      if (!objectHelper_1.ObjectHelper.isEmpty(this._checksumTrytes)) {
        return this._addressTrytes + this._checksumTrytes;
      } else {
        return this._addressTrytes;
      }
    }
  }], [{
    key: "fromTrytes",
    value: function fromTrytes(address) {
      if (!objectHelper_1.ObjectHelper.isType(address, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The address should be a valid Trytes object");
      }

      var trytesString = address.toString();

      if (trytesString.length !== Address.LENGTH && trytesString.length !== Address.LENGTH_WITH_CHECKSUM) {
        throw new dataError_1.DataError("The address should either be ".concat(Address.LENGTH, " or ").concat(Address.LENGTH_WITH_CHECKSUM, " characters in length"), {
          length: trytesString.length
        });
      }

      var addressTrytes = trytesString.substr(0, Address.LENGTH);
      var checksumTrytes;

      if (trytesString.length === Address.LENGTH_WITH_CHECKSUM) {
        checksumTrytes = trytesString.substr(Address.LENGTH);
      }

      return new Address(addressTrytes, checksumTrytes);
    }
  }]);

  return Address;
}();
/**
 * The length for a valid address without checksum (81).
 */


Address.LENGTH = 81;
/**
 * The length for an address checksum (9).
 */

Address.LENGTH_CHECKSUM = 9;
/**
 * The length for valid address with checksum (90).
 */

Address.LENGTH_WITH_CHECKSUM = Address.LENGTH + Address.LENGTH_CHECKSUM;
/**
 * An empty hash all 9s.
 */

Address.EMPTY = Address.fromTrytes(trytes_1.Trytes.fromString("9".repeat(Address.LENGTH)));
exports.Address = Address;

/***/ }),

/***/ "../data/dist/data/hash.js":
/*!*********************************!*\
  !*** ../data/dist/data/hash.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var dataError_1 = __webpack_require__(/*! ../error/dataError */ "../data/dist/error/dataError.js");

var trytes_1 = __webpack_require__(/*! ./trytes */ "../data/dist/data/trytes.js");
/**
 * A class for handling hashes.
 */


var Hash =
/*#__PURE__*/
function () {
  /* @internal */
  function Hash(trytes) {
    _classCallCheck(this, Hash);

    this._trytes = trytes;
  }
  /**
   * Create hash from trytes.
   * @param hash The trytes to create the hash from.
   * @returns An instance of Hash.
   */


  _createClass(Hash, [{
    key: "toTrytes",

    /**
     * Convert the hash to trytes.
     * @returns Trytes version of the hash.
     */
    value: function toTrytes() {
      return this._trytes;
    }
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */

  }, {
    key: "toString",
    value: function toString() {
      return this._trytes.toString();
    }
  }], [{
    key: "fromTrytes",
    value: function fromTrytes(hash) {
      if (!objectHelper_1.ObjectHelper.isType(hash, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The hash should be a valid Trytes object");
      }

      var length = hash.length();

      if (length !== Hash.LENGTH) {
        throw new dataError_1.DataError("The hash should be ".concat(Hash.LENGTH, " characters in length"), {
          length: length
        });
      }

      return new Hash(hash);
    }
  }]);

  return Hash;
}();
/**
 * The length for a valid hash (81).
 */


Hash.LENGTH = 81;
/**
 * An empty hash all 9s.
 */

Hash.EMPTY = Hash.fromTrytes(trytes_1.Trytes.fromString("9".repeat(Hash.LENGTH)));
exports.Hash = Hash;

/***/ }),

/***/ "../data/dist/data/signatureMessageFragment.js":
/*!*****************************************************!*\
  !*** ../data/dist/data/signatureMessageFragment.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var dataError_1 = __webpack_require__(/*! ../error/dataError */ "../data/dist/error/dataError.js");

var trytes_1 = __webpack_require__(/*! ./trytes */ "../data/dist/data/trytes.js");
/**
 * A class for handling signature message fragments.
 */


var SignatureMessageFragment =
/*#__PURE__*/
function () {
  /* @internal */
  function SignatureMessageFragment(trytes) {
    _classCallCheck(this, SignatureMessageFragment);

    this._trytes = trytes;
  }
  /**
   * Create signature fragment from trytes.
   * @param signatureMessageFragment The trytes to create the signature fragment from.
   * @returns An instance of SignatureMessageFragment.
   */


  _createClass(SignatureMessageFragment, [{
    key: "toTrytes",

    /**
     * Convert the signature fragment to trytes.
     * @returns Trytes version of the signature fragment.
     */
    value: function toTrytes() {
      return this._trytes;
    }
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */

  }, {
    key: "toString",
    value: function toString() {
      return this._trytes.toString();
    }
  }], [{
    key: "fromTrytes",
    value: function fromTrytes(signatureMessageFragment) {
      if (!objectHelper_1.ObjectHelper.isType(signatureMessageFragment, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The signatureMessageFragment should be a valid Trytes object");
      }

      var length = signatureMessageFragment.length();

      if (length !== SignatureMessageFragment.LENGTH) {
        throw new dataError_1.DataError("The signatureMessageFragment should be ".concat(SignatureMessageFragment.LENGTH, " characters in length"), {
          length: length
        });
      }

      return new SignatureMessageFragment(signatureMessageFragment);
    }
  }]);

  return SignatureMessageFragment;
}();
/**
 * The length of a valid signature message fragment (2187)
 */


SignatureMessageFragment.LENGTH = 2187;
/**
 * An empty signature message fragment all 9s.
 */

SignatureMessageFragment.EMPTY = SignatureMessageFragment.fromTrytes(trytes_1.Trytes.fromString("9".repeat(SignatureMessageFragment.LENGTH)));
exports.SignatureMessageFragment = SignatureMessageFragment;

/***/ }),

/***/ "../data/dist/data/tag.js":
/*!********************************!*\
  !*** ../data/dist/data/tag.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var dataError_1 = __webpack_require__(/*! ../error/dataError */ "../data/dist/error/dataError.js");

var trytes_1 = __webpack_require__(/*! ./trytes */ "../data/dist/data/trytes.js");
/**
 * A class for handling tags.
 */


var Tag =
/*#__PURE__*/
function () {
  /* @internal */
  function Tag(trytes) {
    _classCallCheck(this, Tag);

    this._trytes = trytes;
  }
  /**
   * Create tag from trytes.
   * @param tag The trytes to create the tag from.
   * @returns An instance of Tag.
   */


  _createClass(Tag, [{
    key: "toTrytes",

    /**
     * Convert the tag to trytes.
     * @returns Trytes version of the tag.
     */
    value: function toTrytes() {
      return trytes_1.Trytes.fromString(this._trytes);
    }
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */

  }, {
    key: "toString",
    value: function toString() {
      return this._trytes;
    }
  }], [{
    key: "fromTrytes",
    value: function fromTrytes(tag) {
      if (!objectHelper_1.ObjectHelper.isType(tag, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The tag should be a valid Trytes object");
      }

      var trytesString = tag.toString();

      if (trytesString.length > Tag.LENGTH) {
        throw new dataError_1.DataError("The tag should be at most ".concat(Tag.LENGTH, " characters in length"), {
          length: trytesString.length
        });
      }

      while (trytesString.length < Tag.LENGTH) {
        trytesString += "9";
      }

      return new Tag(trytesString);
    }
  }]);

  return Tag;
}();
/**
 * The length of a valid tag (27).
 */


Tag.LENGTH = 27;
/**
 * An empty tag all 9s.
 */

Tag.EMPTY = Tag.fromTrytes(trytes_1.Trytes.fromString("9".repeat(Tag.LENGTH)));
exports.Tag = Tag;

/***/ }),

/***/ "../data/dist/data/transaction.js":
/*!****************************************!*\
  !*** ../data/dist/data/transaction.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var dataError_1 = __webpack_require__(/*! ../error/dataError */ "../data/dist/error/dataError.js");

var address_1 = __webpack_require__(/*! ./address */ "../data/dist/data/address.js");

var hash_1 = __webpack_require__(/*! ./hash */ "../data/dist/data/hash.js");

var signatureMessageFragment_1 = __webpack_require__(/*! ./signatureMessageFragment */ "../data/dist/data/signatureMessageFragment.js");

var tag_1 = __webpack_require__(/*! ./tag */ "../data/dist/data/tag.js");

var tryteNumber_1 = __webpack_require__(/*! ./tryteNumber */ "../data/dist/data/tryteNumber.js");

var trytes_1 = __webpack_require__(/*! ./trytes */ "../data/dist/data/trytes.js");
/**
 * A class for handling transactions.
 */


var Transaction =
/*#__PURE__*/
function () {
  /* @internal */
  function Transaction() {
    _classCallCheck(this, Transaction);
  }
  /**
   * Create instance of transaction from parameters.
   * @param signatureMessageFragment The signature message fragment.
   * @param address The address.
   * @param value The value.
   * @param obsoleteTag Obsolete transaction tag.
   * @param timestamp The timestamp.
   * @param currentIndex The current index.
   * @param lastIndex The last index.
   * @param bundle The bundle.
   * @param trunkTransaction The trunk transaction.
   * @param branchTransaction The branch transaction.
   * @param tag The tag.
   * @param attachmentTimestamp The attachment timestamp.
   * @param attachmentTimestampLowerBound The attachment timestamp lower bound.
   * @param attachmentTimestampUpperBound  The attachment timestamp upper bound.
   * @param nonce The nonce.
   * @returns New instance of transaction.
   */


  _createClass(Transaction, [{
    key: "toTrytes",

    /**
     * Convert the transaction to trytes.
     * @returns The transaction as trytes.
     */
    value: function toTrytes() {
      if (!objectHelper_1.ObjectHelper.isType(this.signatureMessageFragment, signatureMessageFragment_1.SignatureMessageFragment)) {
        throw new dataError_1.DataError("The signatureMessageFragment must be set to create transaction trytes", {
          signatureMessageFragment: this.signatureMessageFragment
        });
      }

      if (!objectHelper_1.ObjectHelper.isType(this.address, address_1.Address)) {
        throw new dataError_1.DataError("The address must be set to create transaction trytes", {
          address: this.address
        });
      }

      if (!objectHelper_1.ObjectHelper.isType(this.obsoleteTag, tag_1.Tag)) {
        throw new dataError_1.DataError("The obsoleteTag must be set to create transaction trytes", {
          obsoleteTag: this.obsoleteTag
        });
      }

      if (!objectHelper_1.ObjectHelper.isType(this.bundle, hash_1.Hash)) {
        throw new dataError_1.DataError("The bundle must be set to create transaction trytes", {
          bundle: this.bundle
        });
      }

      if (!objectHelper_1.ObjectHelper.isType(this.trunkTransaction, hash_1.Hash)) {
        throw new dataError_1.DataError("The trunkTransaction must be set to create transaction trytes", {
          trunkTransaction: this.trunkTransaction
        });
      }

      if (!objectHelper_1.ObjectHelper.isType(this.branchTransaction, hash_1.Hash)) {
        throw new dataError_1.DataError("The branchTransaction must be set to create transaction trytes", {
          branchTransaction: this.branchTransaction
        });
      }

      if (!objectHelper_1.ObjectHelper.isType(this.nonce, tag_1.Tag)) {
        throw new dataError_1.DataError("The nonce must be set to create transaction trytes", {
          nonce: this.nonce
        });
      }

      var trytes = this.signatureMessageFragment.toTrytes().toString() + this.address.toTrytes().toString() + (this.value || Transaction.EMPTY_11).toTrytes().toString() + Transaction.CHECK_VALUE + this.obsoleteTag.toTrytes().toString() + (this.timestamp || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString() + (this.currentIndex || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString() + (this.lastIndex || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString() + this.bundle.toTrytes().toString() + this.trunkTransaction.toTrytes().toString() + this.branchTransaction.toTrytes().toString() + (this.tag || this.obsoleteTag).toTrytes().toString() + (this.attachmentTimestamp || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString() + (this.attachmentTimestampLowerBound || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString() + (this.attachmentTimestampUpperBound || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString() + this.nonce.toTrytes().toString();
      var length = trytes.length;

      if (length !== Transaction.LENGTH) {
        throw new dataError_1.DataError("The trytes must be ".concat(Transaction.LENGTH, " in length ").concat(length), {
          length: length
        });
      }

      return trytes_1.Trytes.fromString(trytes);
    }
    /**
     * Get the string view of the object.
     * @returns string view of the object.
     */

  }, {
    key: "toString",
    value: function toString() {
      return "{\n\tsignatureMessageFragment: \"".concat((this.signatureMessageFragment || signatureMessageFragment_1.SignatureMessageFragment.EMPTY).toTrytes().toString(), "\"\n\taddress: \"").concat((this.address || address_1.Address.EMPTY).toTrytes().toString(), "\"\n\tvalue: ").concat((this.value || Transaction.EMPTY_11).toNumber(), "\n\tobsoleteTag: \"").concat((this.obsoleteTag || tag_1.Tag.EMPTY).toTrytes().toString(), "\"\n\ttimestamp: ").concat((this.timestamp || tryteNumber_1.TryteNumber.EMPTY_9).toNumber(), "\n\tcurrentIndex: ").concat((this.currentIndex || tryteNumber_1.TryteNumber.EMPTY_9).toNumber(), "\n\tlastIndex: ").concat((this.lastIndex || tryteNumber_1.TryteNumber.EMPTY_9).toNumber(), "\n\tbundle: \"").concat((this.bundle || hash_1.Hash.EMPTY).toTrytes().toString(), "\"\n\ttrunkTransaction: \"").concat((this.trunkTransaction || hash_1.Hash.EMPTY).toTrytes().toString(), "\"\n\tbranchTransaction: \"").concat((this.branchTransaction || hash_1.Hash.EMPTY).toTrytes().toString(), "\"\n\ttag: \"").concat((this.tag || this.obsoleteTag || tag_1.Tag.EMPTY).toTrytes().toString(), "\"\n\tattachmentTimestamp: ").concat((this.attachmentTimestamp || tryteNumber_1.TryteNumber.EMPTY_9).toNumber(), "\n\tattachmentTimestampLowerBound: ").concat((this.attachmentTimestampLowerBound || tryteNumber_1.TryteNumber.EMPTY_9).toNumber(), "\n\tattachmentTimestampUpperBound: ").concat((this.attachmentTimestampUpperBound || tryteNumber_1.TryteNumber.EMPTY_9).toNumber(), "\n\tnonce: \"").concat((this.nonce || tag_1.Tag.EMPTY).toTrytes().toString(), "\"\n}");
    }
  }], [{
    key: "fromParams",
    value: function fromParams(signatureMessageFragment, address, value, obsoleteTag, timestamp, currentIndex, lastIndex, bundle, trunkTransaction, branchTransaction, tag, attachmentTimestamp, attachmentTimestampLowerBound, attachmentTimestampUpperBound, nonce) {
      var tx = new Transaction();
      tx.signatureMessageFragment = signatureMessageFragment;
      tx.address = address;
      tx.value = tryteNumber_1.TryteNumber.fromNumber(value, 11);
      tx.obsoleteTag = obsoleteTag;
      tx.timestamp = tryteNumber_1.TryteNumber.fromNumber(timestamp);
      tx.currentIndex = tryteNumber_1.TryteNumber.fromNumber(currentIndex);
      tx.lastIndex = tryteNumber_1.TryteNumber.fromNumber(lastIndex);
      tx.bundle = bundle;
      tx.trunkTransaction = trunkTransaction;
      tx.branchTransaction = branchTransaction;
      tx.tag = tag;
      tx.attachmentTimestamp = tryteNumber_1.TryteNumber.fromNumber(attachmentTimestamp);
      tx.attachmentTimestampLowerBound = tryteNumber_1.TryteNumber.fromNumber(attachmentTimestampLowerBound);
      tx.attachmentTimestampUpperBound = tryteNumber_1.TryteNumber.fromNumber(attachmentTimestampUpperBound);
      tx.nonce = nonce;
      return tx;
    }
    /**
     * Create instance of transaction from trytes.
     * @param trytes The trytes for the this.
     * @returns An instance of this.
     */

  }, {
    key: "fromTrytes",
    value: function fromTrytes(trytes) {
      if (!objectHelper_1.ObjectHelper.isType(trytes, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The trytes should be a valid Trytes object");
      }

      var length = trytes.length();

      if (length !== Transaction.LENGTH) {
        throw new dataError_1.DataError("The trytes must be ".concat(Transaction.LENGTH, " in length"), {
          length: length
        });
      }

      var checkIndexStart = 2279;
      var checkIndexLength = 16;
      var check = trytes.sub(checkIndexStart, checkIndexLength).toString();

      if (check !== Transaction.CHECK_VALUE) {
        throw new dataError_1.DataError("The trytes between ".concat(checkIndexStart, " and ").concat(checkIndexStart + checkIndexLength, " should be all 9s"), {
          check: check
        });
      }

      var tx = new Transaction();
      var startPos = 0;
      tx.signatureMessageFragment = signatureMessageFragment_1.SignatureMessageFragment.fromTrytes(trytes.sub(startPos, signatureMessageFragment_1.SignatureMessageFragment.LENGTH));
      startPos += signatureMessageFragment_1.SignatureMessageFragment.LENGTH;
      tx.address = address_1.Address.fromTrytes(trytes.sub(startPos, address_1.Address.LENGTH));
      startPos += address_1.Address.LENGTH;
      tx.value = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, 11), 11);
      startPos += 11;
      startPos += Transaction.CHECK_VALUE_LENGTH;
      tx.obsoleteTag = tag_1.Tag.fromTrytes(trytes.sub(startPos, tag_1.Tag.LENGTH));
      startPos += tag_1.Tag.LENGTH;
      tx.timestamp = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
      startPos += tryteNumber_1.TryteNumber.LENGTH_9;
      tx.currentIndex = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
      startPos += tryteNumber_1.TryteNumber.LENGTH_9;
      tx.lastIndex = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
      startPos += tryteNumber_1.TryteNumber.LENGTH_9;
      tx.bundle = hash_1.Hash.fromTrytes(trytes.sub(startPos, hash_1.Hash.LENGTH));
      startPos += hash_1.Hash.LENGTH;
      tx.trunkTransaction = hash_1.Hash.fromTrytes(trytes.sub(startPos, hash_1.Hash.LENGTH));
      startPos += hash_1.Hash.LENGTH;
      tx.branchTransaction = hash_1.Hash.fromTrytes(trytes.sub(startPos, hash_1.Hash.LENGTH));
      startPos += hash_1.Hash.LENGTH;
      tx.tag = tag_1.Tag.fromTrytes(trytes.sub(startPos, tag_1.Tag.LENGTH));
      startPos += tag_1.Tag.LENGTH;
      tx.attachmentTimestamp = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
      startPos += tryteNumber_1.TryteNumber.LENGTH_9;
      tx.attachmentTimestampLowerBound = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
      startPos += tryteNumber_1.TryteNumber.LENGTH_9;
      tx.attachmentTimestampUpperBound = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
      startPos += tryteNumber_1.TryteNumber.LENGTH_9;
      tx.nonce = tag_1.Tag.fromTrytes(trytes.sub(startPos, tag_1.Tag.LENGTH));
      return tx;
    }
  }]);

  return Transaction;
}();
/**
 * The length of a valid transaction (2673).
 */


Transaction.LENGTH = 2673;
/**
 * The length of a valid check value (16).
 */

Transaction.CHECK_VALUE_LENGTH = 16;
/**
 * The check value for bundles all 9s.
 */

Transaction.CHECK_VALUE = "9".repeat(Transaction.CHECK_VALUE_LENGTH);
/* @internal */

Transaction.EMPTY_11 = tryteNumber_1.TryteNumber.fromNumber(0, 11);
exports.Transaction = Transaction;

/***/ }),

/***/ "../data/dist/data/trits.js":
/*!**********************************!*\
  !*** ../data/dist/data/trits.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var arrayHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/arrayHelper */ "../core/dist/helpers/arrayHelper.js");

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "../core/dist/helpers/numberHelper.js");

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var dataError_1 = __webpack_require__(/*! ../error/dataError */ "../data/dist/error/dataError.js");

var trytes_1 = __webpack_require__(/*! ./trytes */ "../data/dist/data/trytes.js");
/**
 * A class for handling trits.
 */


var Trits =
/*#__PURE__*/
function () {
  /* @internal */
  function Trits(trits) {
    _classCallCheck(this, Trits);

    this._trits = trits;
  }
  /**
   * Create instance of trits from Int8Array array.
   * @param value Trytes used to create trits.
   * @returns An instance of Trits.
   */


  _createClass(Trits, [{
    key: "toArray",

    /**
     * Get the value of the trits array.
     * @returns Array representation of the trits.
     */
    value: function toArray() {
      return this._trits;
    }
    /**
     * Get the value of the trits array as a number array.
     * @returns Array representation of the trits.
     */

  }, {
    key: "toNumberArray",
    value: function toNumberArray() {
      return Array.from(this._trits);
    }
    /**
     * Get the trits as trytes.
     * @returns Instance of Trytes.
     */

  }, {
    key: "toTrytes",
    value: function toTrytes() {
      var trytes = "";

      for (var i = 0; i < this._trits.length; i += 3) {
        // Iterate over all possible tryte values to find correct trit representation
        for (var j = 0; j < trytes_1.Trytes.ALPHABET.length; j++) {
          if (Trits.TRYTES_TRITS[j][0] === this._trits[i] && Trits.TRYTES_TRITS[j][1] === this._trits[i + 1] && Trits.TRYTES_TRITS[j][2] === this._trits[i + 2]) {
            trytes += trytes_1.Trytes.ALPHABET.charAt(j);
            break;
          }
        }
      }

      return trytes_1.Trytes.fromString(trytes);
    }
    /**
     * Get the trits as a number.
     * @returns The trits converted to a number.
     */

  }, {
    key: "toNumber",
    value: function toNumber() {
      var returnValue = 0;

      for (var i = this._trits.length - 1; i >= 0; i--) {
        returnValue = returnValue * 3 + this._trits[i];
      }

      return returnValue;
    }
    /**
     * What is the length of the trits.
     * @returns Length of the trits.
     */

  }, {
    key: "length",
    value: function length() {
      return this._trits.length;
    }
    /**
     * Get a sub of the trits.
     * @param start The start position to get the sub.
     * @param length The length of the sub.
     * @returns The trits sub.
     */

  }, {
    key: "sub",
    value: function sub(start, length) {
      if (!numberHelper_1.NumberHelper.isInteger(start) || start < 0) {
        throw new dataError_1.DataError("The start must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || start + length > this._trits.length) {
        throw new dataError_1.DataError("The start + length must <= ".concat(this._trits.length));
      }

      return Trits.fromArray(this._trits.slice(start, start + length));
    }
  }], [{
    key: "fromArray",
    value: function fromArray(value) {
      if (!objectHelper_1.ObjectHelper.isType(value, Int8Array)) {
        throw new dataError_1.DataError("The value does not contain valid trits");
      }

      return new Trits(value);
    }
    /**
     * Create instance of trits from number array.
     * @param value Trytes used to create trits.
     * @returns An instance of Trits.
     */

  }, {
    key: "fromNumberArray",
    value: function fromNumberArray(value) {
      if (!arrayHelper_1.ArrayHelper.isTyped(value, Number)) {
        throw new dataError_1.DataError("The value does not contain valid trits");
      }

      return new Trits(new Int8Array(value));
    }
    /**
     * Create instance of trits from trytes.
     * @param value Trytes used to create trits.
     * @returns An instance of Trits.
     */

  }, {
    key: "fromTrytes",
    value: function fromTrytes(value) {
      if (!objectHelper_1.ObjectHelper.isType(value, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The value should be a valid Trytes object");
      }

      var trytesString = value.toString();
      var trits = new Int8Array(trytesString.length * 3);

      for (var i = 0; i < trytesString.length; i++) {
        var idx = trytes_1.Trytes.ALPHABET.indexOf(trytesString.charAt(i));
        trits[i * 3] = Trits.TRYTES_TRITS[idx][0];
        trits[i * 3 + 1] = Trits.TRYTES_TRITS[idx][1];
        trits[i * 3 + 2] = Trits.TRYTES_TRITS[idx][2];
      }

      return new Trits(trits);
    }
    /**
     * Create instance of trits from number
     * @param value Number used to create trits.
     * @returns An instance of Trits.
     */

  }, {
    key: "fromNumber",
    value: function fromNumber(value) {
      if (!numberHelper_1.NumberHelper.isInteger(value)) {
        throw new dataError_1.DataError("The value is not an integer");
      }

      var trits = [];
      var absoluteValue = value < 0 ? -value : value;

      while (absoluteValue > 0) {
        var remainder = absoluteValue % 3;
        absoluteValue = Math.floor(absoluteValue / 3);

        if (remainder > 1) {
          remainder = -1;
          absoluteValue++;
        }

        trits[trits.length] = remainder;
      }

      if (value < 0) {
        for (var i = 0; i < trits.length; i++) {
          trits[i] = -trits[i];
        }
      }

      return new Trits(new Int8Array(trits));
    }
    /**
     * Add two trits together.
     * @param first The first trit.
     * @param second The second trit.
     * @returns New trit which is the addition of the a + b.
     */

  }, {
    key: "add",
    value: function add(first, second) {
      if (!objectHelper_1.ObjectHelper.isType(first, Trits)) {
        throw new dataError_1.DataError("The first should be a valid Trits object");
      }

      if (!objectHelper_1.ObjectHelper.isType(second, Trits)) {
        throw new dataError_1.DataError("The seconds should be a valid Trits object");
      }

      var out = new Int8Array(Math.max(first._trits.length, second._trits.length));
      var carry = 0;
      var iA;
      var iB;

      for (var i = 0; i < out.length; i++) {
        iA = i < first._trits.length ? first._trits[i] : 0;
        iB = i < second._trits.length ? second._trits[i] : 0;
        var fA = Trits.fullAdd(iA, iB, carry);
        out[i] = fA[0];
        carry = fA[1];
      }

      return Trits.fromArray(out);
    }
    /* @internal */

  }, {
    key: "fullAdd",
    value: function fullAdd(a, b, c) {
      var sA = Trits.sum(a, b);
      var cA = Trits.cons(a, b);
      var cB = Trits.cons(sA, c);
      var cOut = Trits.any(cA, cB);
      var sOUt = Trits.sum(sA, c);
      return new Int8Array([sOUt, cOut]);
    }
    /* @internal */

  }, {
    key: "sum",
    value: function sum(a, b) {
      var s = a + b;

      switch (s) {
        case 2:
          return -1;

        case -2:
          return 1;

        default:
          return s;
      }
    }
    /* @internal */

  }, {
    key: "cons",
    value: function cons(a, b) {
      if (a === b) {
        return a;
      }

      return 0;
    }
    /* @internal */

  }, {
    key: "any",
    value: function any(a, b) {
      var s = a + b;

      if (s > 0) {
        return 1;
      } else if (s < 0) {
        return -1;
      }

      return 0;
    }
  }]);

  return Trits;
}();
/* @internal */


Trits.TRYTES_TRITS = [new Int8Array([0, 0, 0]), new Int8Array([1, 0, 0]), new Int8Array([-1, 1, 0]), new Int8Array([0, 1, 0]), new Int8Array([1, 1, 0]), new Int8Array([-1, -1, 1]), new Int8Array([0, -1, 1]), new Int8Array([1, -1, 1]), new Int8Array([-1, 0, 1]), new Int8Array([0, 0, 1]), new Int8Array([1, 0, 1]), new Int8Array([-1, 1, 1]), new Int8Array([0, 1, 1]), new Int8Array([1, 1, 1]), new Int8Array([-1, -1, -1]), new Int8Array([0, -1, -1]), new Int8Array([1, -1, -1]), new Int8Array([-1, 0, -1]), new Int8Array([0, 0, -1]), new Int8Array([1, 0, -1]), new Int8Array([-1, 1, -1]), new Int8Array([0, 1, -1]), new Int8Array([1, 1, -1]), new Int8Array([-1, -1, 0]), new Int8Array([0, -1, 0]), new Int8Array([1, -1, 0]), new Int8Array([-1, 0, 0])];
exports.Trits = Trits;

/***/ }),

/***/ "../data/dist/data/tryteNumber.js":
/*!****************************************!*\
  !*** ../data/dist/data/tryteNumber.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "../core/dist/helpers/numberHelper.js");

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var dataError_1 = __webpack_require__(/*! ../error/dataError */ "../data/dist/error/dataError.js");

var trits_1 = __webpack_require__(/*! ./trits */ "../data/dist/data/trits.js");

var trytes_1 = __webpack_require__(/*! ./trytes */ "../data/dist/data/trytes.js");
/**
 * A class for handling tryte number.
 */


var TryteNumber =
/*#__PURE__*/
function () {
  /* @internal */
  function TryteNumber(trytes) {
    _classCallCheck(this, TryteNumber);

    this._trytes = trytes;
  }
  /**
   * Create tryte number from number.
   * @param value The number value to create the object from.
   * @param length The tryte length to pad the number with.
   * @returns An instance of TryteNumber.
   */


  _createClass(TryteNumber, [{
    key: "toTrytes",

    /**
     * Convert the tryte number to trytes.
     * @returns Trytes version of the tryte number.
     */
    value: function toTrytes() {
      return trytes_1.Trytes.fromString(this._trytes);
    }
    /**
     * Convert the tryte number to number.
     * @returns number value of the tryte number.
     */

  }, {
    key: "toNumber",
    value: function toNumber() {
      return trits_1.Trits.fromTrytes(trytes_1.Trytes.fromString(this._trytes)).toNumber();
    }
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */

  }, {
    key: "toString",
    value: function toString() {
      return this._trytes;
    }
    /**
     * Get the value of the object.
     * @returns string of the trytes.
     */

  }, {
    key: "valueOf",
    value: function valueOf() {
      return this.toNumber();
    }
  }], [{
    key: "fromNumber",
    value: function fromNumber(value) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TryteNumber.LENGTH_9;
      var trytes;

      if (!numberHelper_1.NumberHelper.isInteger(length) || length <= 0) {
        throw new dataError_1.DataError("The length should be a number > 0", {
          length: length
        });
      }

      if (objectHelper_1.ObjectHelper.isEmpty(value)) {
        trytes = "9".repeat(length);
      } else {
        if (!numberHelper_1.NumberHelper.isInteger(value)) {
          throw new dataError_1.DataError("The value is not an integer", {
            value: value
          });
        }

        var trits = trits_1.Trits.fromNumber(value).toNumberArray();

        while (trits.length < length * 3) {
          trits.push(0);
        }

        trytes = trits_1.Trits.fromNumberArray(trits).toTrytes().toString();
      }

      return new TryteNumber(trytes);
    }
    /**
     * Create tryte number from trytes.
     * @param value The number value to create the object from.
     * @param length The tryte length to pad the number with.
     * @returns An instance of TryteNumber.
     */

  }, {
    key: "fromTrytes",
    value: function fromTrytes(value) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TryteNumber.LENGTH_9;

      if (!objectHelper_1.ObjectHelper.isType(value, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The value should be a valid Trytes object");
      }

      var tryteString = value.toString();

      if (!numberHelper_1.NumberHelper.isInteger(length) || length <= 0) {
        throw new dataError_1.DataError("The length should be a number > 0", {
          length: length
        });
      }

      if (tryteString.length > length) {
        throw new dataError_1.DataError("The value contains too many characters", {
          length: tryteString.length
        });
      }

      while (tryteString.length < length) {
        tryteString += "9";
      }

      return new TryteNumber(tryteString);
    }
  }]);

  return TryteNumber;
}();
/**
 * Length of a number that uses 9 trytes.
 */


TryteNumber.LENGTH_9 = 9;
/**
 * An empty 9 length tryte number.
 */

TryteNumber.EMPTY_9 = TryteNumber.fromNumber(0, TryteNumber.LENGTH_9);
exports.TryteNumber = TryteNumber;

/***/ }),

/***/ "../data/dist/data/trytes.js":
/*!***********************************!*\
  !*** ../data/dist/data/trytes.js ***!
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

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "../core/dist/helpers/numberHelper.js");

var stringHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/stringHelper */ "../core/dist/helpers/stringHelper.js");

var dataError_1 = __webpack_require__(/*! ../error/dataError */ "../data/dist/error/dataError.js");
/**
 * A class for handling trytes.
 */


var Trytes =
/*#__PURE__*/
function () {
  /* @internal */
  function Trytes(trytes) {
    _classCallCheck(this, Trytes);

    this._trytes = trytes;
  }
  /**
   * Create trytes from a string.
   * @param value A string to create the trytes from.
   * @param length An optional validation length for the trytes, 0 means ignore length.
   * @returns An instance of Trytes.
   */


  _createClass(Trytes, [{
    key: "toString",

    /**
     * Convert the trytes to a string.
     * @returns String representation of the trytes.
     */
    value: function toString() {
      return this._trytes;
    }
    /**
     * Get the length of the trytes.
     * @returns The length of the trytes.
     */

  }, {
    key: "length",
    value: function length() {
      return this._trytes.length;
    }
    /**
     * Get a sub of the trytes.
     * @param start The start position to get the sub.
     * @param length The length of the sub.
     * @returns The trytes sub.
     */

  }, {
    key: "sub",
    value: function sub(start, length) {
      if (!numberHelper_1.NumberHelper.isInteger(start) || start < 0) {
        throw new dataError_1.DataError("The start must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || start + length > this._trytes.length) {
        throw new dataError_1.DataError("The start + length must <= ".concat(this._trytes.length));
      }

      return Trytes.fromString(this._trytes.substr(start, length));
    }
  }], [{
    key: "fromString",
    value: function fromString(value) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (!stringHelper_1.StringHelper.isString(value)) {
        throw new dataError_1.DataError("The value must be a non empty string");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length < 0) {
        throw new dataError_1.DataError("The length must be >= 0");
      }

      if (!Trytes.isValid(value, length)) {
        throw new dataError_1.DataError("The value and length do not contain valid trytes", {
          value: value,
          length: length
        });
      }

      return new Trytes(value);
    }
    /**
     * Does the value contain valid trytes.
     * @param value A string to validate as trytes.
     * @param length An optional validation length for the trytes, 0 means ignore length.
     * @returns True if the input was valid trytes.
     */

  }, {
    key: "isValid",
    value: function isValid(value) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (!stringHelper_1.StringHelper.isString(value)) {
        return false;
      } else {
        return new RegExp("^[9A-Z]{".concat(length ? length : "0,", "}$")).test(value);
      }
    }
  }]);

  return Trytes;
}();
/**
 * All the characters that can be used in trytes.
 */


Trytes.ALPHABET = "9ABCDEFGHIJKLMNOPQRSTUVWXYZ";
exports.Trytes = Trytes;

/***/ }),

/***/ "../data/dist/error/dataError.js":
/*!***************************************!*\
  !*** ../data/dist/error/dataError.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var coreError_1 = __webpack_require__(/*! @iota-pico/core/dist/error/coreError */ "../core/dist/error/coreError.js");
/**
 * A data implementation of an error.
 */


var DataError =
/*#__PURE__*/
function (_coreError_1$CoreErro) {
  _inherits(DataError, _coreError_1$CoreErro);

  /**
   * Create an instance of DataError.
   * @param message The message for the error.
   * @param additional Additional details about the error.
   * @param innerError Add information from inner error if there was one.
   */
  function DataError(message, additional, innerError) {
    var _this;

    _classCallCheck(this, DataError);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DataError).call(this, message, additional, innerError));
    _this.domain = "Data";
    return _this;
  }

  return DataError;
}(coreError_1.CoreError);

exports.DataError = DataError;

/***/ }),

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

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var spongeFactory_1 = __webpack_require__(/*! @iota-pico/crypto/dist/factories/spongeFactory */ "../crypto/dist/factories/spongeFactory.js");

var trits_1 = __webpack_require__(/*! @iota-pico/data/dist/data/trits */ "../data/dist/data/trits.js");

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

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "../core/dist/helpers/numberHelper.js");

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var cryptoError_1 = __webpack_require__(/*! @iota-pico/crypto/dist/error/cryptoError */ "../crypto/dist/error/cryptoError.js");

var proofOfWorkBase_1 = __webpack_require__(/*! @iota-pico/crypto/dist/proofOfWork/proofOfWorkBase */ "../crypto/dist/proofOfWork/proofOfWorkBase.js");

var trytes_1 = __webpack_require__(/*! @iota-pico/data/dist/data/trytes */ "../data/dist/data/trytes.js");

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

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var cryptoError_1 = __webpack_require__(/*! @iota-pico/crypto/dist/error/cryptoError */ "../crypto/dist/error/cryptoError.js");
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

var cryptoError_1 = __webpack_require__(/*! @iota-pico/crypto/dist/error/cryptoError */ "../crypto/dist/error/cryptoError.js");

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

/***/ "./node_modules/.registry.npmjs.org/webpack/4.12.0/node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvLi4vLi4vc3JjL2Vycm9yL2NvcmVFcnJvci50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsLy4uLy4uL3NyYy9mYWN0b3JpZXMvZmFjdG9yeUJhc2UudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dXZWJnbC8uLi8uLi9zcmMvaGVscGVycy9hcnJheUhlbHBlci50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsLy4uLy4uL3NyYy9oZWxwZXJzL2pzb25IZWxwZXIudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dXZWJnbC8uLi8uLi9zcmMvaGVscGVycy9udW1iZXJIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dXZWJnbC8uLi8uLi9zcmMvaGVscGVycy9vYmplY3RIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dXZWJnbC8uLi8uLi9zcmMvaGVscGVycy9zdHJpbmdIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dXZWJnbC8uLi8uLi9zcmMvc2VydmljZXMvdGltZVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dXZWJnbC8uLi8uLi9zcmMvZGlnZXN0cy9zaGEzLnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvLi4vLi4vc3JjL2Vycm9yL2NyeXB0b0Vycm9yLnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvLi4vLi4vc3JjL2ZhY3Rvcmllcy9zcG9uZ2VGYWN0b3J5LnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvLi4vLi4vc3JjL2hlbHBlcnMvYmlnSW50ZWdlckhlbHBlci50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsLy4uLy4uL3NyYy9oZWxwZXJzL3RyYW5zYWN0aW9uSGVscGVyLnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvLi4vLi4vc3JjL3Byb29mT2ZXb3JrL3Byb29mT2ZXb3JrQmFzZS50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsLy4uLy4uL3NyYy9zcG9uZ2VzL2N1cmwudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dXZWJnbC8uLi8uLi9zcmMvc3Bvbmdlcy9rZXJsLnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvLi4vY3J5cHRvL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL0BiYWJlbC9ydW50aW1lLzcuMC4wLWJldGEuNDkvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvLi4vY3J5cHRvL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2JpZy1pbnRlZ2VyLzEuNi4zMS9ub2RlX21vZHVsZXMvYmlnLWludGVnZXIvQmlnSW50ZWdlci5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsLy4uL2NyeXB0by9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9yZWdlbmVyYXRvci1ydW50aW1lLzAuMTEuMS9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsLy4uL2NyeXB0by9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9yZWdlbmVyYXRvci1ydW50aW1lLzAuMTEuMS9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvLi4vLi4vc3JjL2RhdGEvYWRkcmVzcy50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsLy4uLy4uL3NyYy9kYXRhL2hhc2gudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dXZWJnbC8uLi8uLi9zcmMvZGF0YS9zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dXZWJnbC8uLi8uLi9zcmMvZGF0YS90YWcudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dXZWJnbC8uLi8uLi9zcmMvZGF0YS90cmFuc2FjdGlvbi50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsLy4uLy4uL3NyYy9kYXRhL3RyaXRzLnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvLi4vLi4vc3JjL2RhdGEvdHJ5dGVOdW1iZXIudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dXZWJnbC8uLi8uLi9zcmMvZGF0YS90cnl0ZXMudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dXZWJnbC8uLi8uLi9zcmMvZXJyb3IvZGF0YUVycm9yLnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvLi4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvLi4vLi4vc3JjL3BlYXJsRGl2ZXIvcGVhcmxEaXZlci50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsLy4uLy4uL3NyYy9wZWFybERpdmVyL3BlYXJsRGl2ZXJTdGF0ZS50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsLy4uL3NyYy9wcm9vZk9mV29ya1dlYkdsLnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvLi4vLi4vc3JjL3NoYWRlcnMvYWRkLnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvLi4vLi4vc3JjL3NoYWRlcnMvY2hlY2tDb2wudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dXZWJnbC8uLi8uLi9zcmMvc2hhZGVycy9jaGVja0RvLnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvLi4vLi4vc3JjL3NoYWRlcnMvY2hlY2tLLnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvLi4vLi4vc3JjL3NoYWRlcnMvZmluYWxpemUudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dXZWJnbC8uLi8uLi9zcmMvc2hhZGVycy9oZWFkZXJzLnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvLi4vLi4vc3JjL3NoYWRlcnMvaW5jcmVtZW50LnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvLi4vLi4vc3JjL3NoYWRlcnMvaW5pdC50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsLy4uLy4uL3NyYy9zaGFkZXJzL3RyYW5zZm9ybS50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsLy4uLy4uL3NyYy93ZWJHTC9zdGRsaWIudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dXZWJnbC8uLi8uLi9zcmMvd2ViR0wvdmVydGV4U2hhZGVyQ29kZS50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsLy4uLy4uL3NyYy93ZWJHTC93ZWJHTEhlbHBlci50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsLy4uLy4uL3NyYy93ZWJHTC93ZWJHTFdvcmtlci50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd1dlYmdsLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvQGJhYmVsL3J1bnRpbWUvNy4wLjAtYmV0YS40OS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dXZWJnbC8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvMC4xMS4xL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9yZWdlbmVyYXRvci1ydW50aW1lLzAuMTEuMS9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL0lvdGFQaWNvUG93V2ViZ2wvKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7QUFDQTtBQUVBOzs7OztJQUdBLFM7Ozs7O0FBZ0JJOzs7Ozs7QUFNQSxxQkFBWSxPQUFaLEVBQTZCLFVBQTdCLEVBQWlFLFVBQWpFLEVBQW1GO0FBQUE7O0FBQUE7O0FBQy9FLG1GQUFNLE9BQU47QUFDQSxVQUFLLFVBQUwsR0FBa0IsYUFBYSxVQUFiLEdBQTBCLEVBQTVDO0FBQ0EsVUFBSyxVQUFMLEdBQWtCLFVBQWxCO0FBQ0Es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VDtBQUNBLFVBQUUsRUFBRixLQUFTLENBQVQ7QUFDQSxVQUFFLEVBQUYsS0FBUyxDQUFUO0FBQ0EsVUFBRSxFQUFGLEtBQVMsQ0FBVDtBQUNBLFlBQUksTUFBTyxNQUFNLENBQVAsR0FBYSxPQUFPLEVBQTFCLENBQUo7QUFDQSxZQUFJLE1BQU8sTUFBTSxDQUFQLEdBQWEsT0FBTyxFQUExQixDQUFKO0FBQ0EsVUFBRSxDQUFGLEtBQVEsQ0FBUjtBQUNBLFVBQUUsQ0FBRixLQUFRLENBQVI7QUFDQSxVQUFFLEVBQUYsS0FBUyxDQUFUO0FBQ0EsVUFBRSxFQUFGLEtBQVMsQ0FBVDtBQUNBLFVBQUUsRUFBRixLQUFTLENBQVQ7QUFDQSxVQUFFLEVBQUYsS0FBUyxDQUFUO0FBQ0EsVUFBRSxFQUFGLEtBQVMsQ0FBVDtBQUNBLFVBQUUsRUFBRixLQUFTLENBQVQ7QUFDQSxVQUFFLEVBQUYsS0FBUyxDQUFUO0FBQ0EsVUFBRSxFQUFGLEtBQVMsQ0FBVDtBQUNBLFlBQUksTUFBTyxNQUFNLENBQVAsR0FBYSxPQUFPLEVBQTFCLENBQUo7QUFDQSxZQUFJLE1BQU8sTUFBTSxDQUFQLEdBQWEsT0FBTyxFQUExQixDQUFKO0FBQ0EsVUFBRSxDQUFGLEtBQVEsQ0FBUjtBQUNBLFVBQUUsQ0FBRixLQUFRLENBQVI7QUFDQSxVQUFFLEVBQUYsS0FBUyxDQUFUO0FBQ0EsVUFBRSxFQUFGLEtBQVMsQ0FBVDtBQUNBLFVBQUUsRUFBRixLQUFTLENBQVQ7QUFDQSxVQUFFLEVBQUYsS0FBUyxDQUFUO0FBQ0EsVUFBRSxFQUFGLEtBQVMsQ0FBVDtBQUNBLFVBQUUsRUFBRixLQUFTLENBQVQ7QUFDQSxVQUFFLEVBQUYsS0FBUyxDQUFUO0FBQ0EsVUFBRSxFQUFGLEtBQVMsQ0FBVDtBQUNBLFlBQUksTUFBTyxNQUFNLENBQVAsR0FBYSxPQUFPLEVBQTFCLENBQUo7QUFDQSxZQUFJLE1BQU8sTUFBTSxDQUFQLEdBQWEsT0FBTyxFQUExQixDQUFKO0FBQ0EsVUFBRSxDQUFGLEtBQVEsQ0FBUjtBQUNBLFVBQUUsQ0FBRixLQUFRLENBQVI7QUFDQSxVQUFFLEVBQUYsS0FBUyxDQUFUO0FBQ0EsVUFBRSxFQUFGLEtBQVMsQ0FBVDtBQUNBLFVBQUUsRUFBRixLQUFTLENBQVQ7QUFDQSxVQUFFLEVBQUYsS0FBUyxDQUFUO0FBQ0EsVUFBRSxFQUFGLEtBQVMsQ0FBVDtBQUNBLFVBQUUsRUFBRixLQUFTLENBQVQ7QUFDQSxVQUFFLEVBQUYsS0FBUyxDQUFUO0FBQ0EsVUFBRSxFQUFGLEtBQVMsQ0FBVDtBQUVBLGFBQUssRUFBRSxDQUFGLENBQUw7QUFDQSxhQUFLLEVBQUUsQ0FBRixDQUFMO0FBQ0EsY0FBTyxFQUFFLEVBQUYsS0FBUyxDQUFWLEdBQWdCLEVBQUUsRUFBRixNQUFVLEVBQWhDO0FBQ0EsY0FBTyxFQUFFLEVBQUYsS0FBUyxDQUFWLEdBQWdCLEVBQUUsRUFBRixNQUFVLEVBQWhDO0FBQ0EsY0FBTyxFQUFFLEVBQUYsS0FBUyxDQUFWLEdBQWdCLEVBQUUsRUFBRixNQUFVLEVBQWhDO0FBQ0EsY0FBTyxFQUFFLEVBQUYsS0FBUyxDQUFWLEdBQWdCLEVBQUUsRUFBRixNQUFVLEVBQWhDO0FBQ0EsY0FBTyxFQUFFLEVBQUYsS0FBUyxDQUFWLEdBQWdCLEVBQUUsRUFBRixNQUFVLEVBQWhDO0FBQ0EsY0FBTyxFQUFFLEVBQUYsS0FBUyxDQUFWLEdBQWdCLEVBQUUsRUFBRixNQUFVLEVBQWhDO0FBQ0EsY0FBTyxFQUFFLEVBQUYsS0FBUyxFQUFWLEdBQWlCLEVBQUUsRUFBRixNQUFVLEVBQWpDO0FBQ0EsY0FBTyxFQUFFLEVBQUYsS0FBUyxFQUFWLEdBQWlCLEVBQUUsRUFBRixNQUFVLEVBQWpDO0FBQ0EsY0FBTyxFQUFFLENBQUYsS0FBUSxDQUFULEdBQWUsRUFBRSxDQUFGLE1BQVMsRUFBOUI7QUFDQSxjQUFPLEVBQUUsQ0FBRixLQUFRLENBQVQsR0FBZSxFQUFFLENBQUYsTUFBUyxFQUE5QjtBQUNBLGFBQU0sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxFQUFoQztBQUNBLGFBQU0sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxFQUFoQztBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxFQUFqQztBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxFQUFqQztBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxFQUFqQztBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxFQUFqQztBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsQ0FBVixHQUFnQixFQUFFLEVBQUYsTUFBVSxFQUFoQztBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsQ0FBVixHQUFnQixFQUFFLEVBQUYsTUFBVSxFQUFoQztBQUNBLGNBQU8sRUFBRSxDQUFGLEtBQVEsRUFBVCxHQUFnQixFQUFFLENBQUYsTUFBUyxDQUEvQjtBQUNBLGNBQU8sRUFBRSxDQUFGLEtBQVEsRUFBVCxHQUFnQixFQUFFLENBQUYsTUFBUyxDQUEvQjtBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsQ0FBVixHQUFnQixFQUFFLEVBQUYsTUFBVSxFQUFoQztBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsQ0FBVixHQUFnQixFQUFFLEVBQUYsTUFBVSxFQUFoQztBQUNBLGFBQU0sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxFQUFoQztBQUNBLGFBQU0sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxFQUFoQztBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxFQUFqQztBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxFQUFqQztBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxDQUFqQztBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxDQUFqQztBQUNBLGNBQU8sRUFBRSxDQUFGLEtBQVEsRUFBVCxHQUFnQixFQUFFLENBQUYsTUFBUyxDQUEvQjtBQUNBLGNBQU8sRUFBRSxDQUFGLEtBQVEsRUFBVCxHQUFnQixFQUFFLENBQUYsTUFBUyxDQUEvQjtBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxDQUFqQztBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxDQUFqQztBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxDQUFqQztBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxDQUFqQztBQUNBLGFBQU0sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxFQUFoQztBQUNBLGFBQU0sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxFQUFoQztBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxDQUFqQztBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxDQUFqQztBQUNBLGNBQU8sRUFBRSxDQUFGLEtBQVEsRUFBVCxHQUFnQixFQUFFLENBQUYsTUFBUyxDQUEvQjtBQUNBLGNBQU8sRUFBRSxDQUFGLEtBQVEsRUFBVCxHQUFnQixFQUFFLENBQUYsTUFBUyxDQUEvQjtBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxFQUFqQztBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxFQUFqQztBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsQ0FBVixHQUFnQixFQUFFLEVBQUYsTUFBVSxFQUFoQztBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsQ0FBVixHQUFnQixFQUFFLEVBQUYsTUFBVSxFQUFoQztBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsQ0FBVixHQUFnQixFQUFFLEVBQUYsTUFBVSxFQUFoQztBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsQ0FBVixHQUFnQixFQUFFLEVBQUYsTUFBVSxFQUFoQztBQUNBLGFBQU0sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxFQUFoQztBQUNBLGFBQU0sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxFQUFoQztBQUVBLFVBQUUsQ0FBRixJQUFPLEtBQU0sQ0FBQyxFQUFELEdBQU0sRUFBbkI7QUFDQSxVQUFFLENBQUYsSUFBTyxLQUFNLENBQUMsRUFBRCxHQUFNLEVBQW5CO0FBQ0EsVUFBRSxFQUFGLElBQVEsTUFBTyxDQUFDLEdBQUQsR0FBTyxHQUF0QjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBQ0EsVUFBRSxFQUFGLElBQVEsTUFBTyxDQUFDLEdBQUQsR0FBTyxHQUF0QjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBQ0EsVUFBRSxFQUFGLElBQVEsTUFBTyxDQUFDLEdBQUQsR0FBTyxHQUF0QjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLENBQUYsSUFBTyxLQUFNLENBQUMsRUFBRCxHQUFNLEVBQW5CO0FBQ0EsVUFBRSxDQUFGLElBQU8sS0FBTSxDQUFDLEVBQUQsR0FBTSxFQUFuQjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBQ0EsVUFBRSxFQUFGLElBQVEsTUFBTyxDQUFDLEdBQUQsR0FBTyxHQUF0QjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBQ0EsVUFBRSxFQUFGLElBQVEsTUFBTyxDQUFDLEdBQUQsR0FBTyxHQUF0QjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBQ0EsVUFBRSxDQUFGLElBQU8sS0FBTSxDQUFDLEVBQUQsR0FBTSxFQUFuQjtBQUNBLFVBQUUsQ0FBRixJQUFPLEtBQU0sQ0FBQyxFQUFELEdBQU0sRUFBbkI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBQ0EsVUFBRSxFQUFGLElBQVEsTUFBTyxDQUFDLEdBQUQsR0FBTyxHQUF0QjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBQ0EsVUFBRSxFQUFGLElBQVEsTUFBTyxDQUFDLEdBQUQsR0FBTyxHQUF0QjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBQ0EsVUFBRSxFQUFGLElBQVEsTUFBTyxDQUFDLEdBQUQsR0FBTyxHQUF0QjtBQUNBLFVBQUUsQ0FBRixJQUFPLEtBQU0sQ0FBQyxFQUFELEdBQU0sRUFBbkI7QUFDQSxVQUFFLENBQUYsSUFBTyxLQUFNLENBQUMsRUFBRCxHQUFNLEVBQW5CO0FBQ0EsVUFBRSxFQUFGLElBQVEsTUFBTyxDQUFDLEdBQUQsR0FBTyxH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QW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTO0FBQzVCO0FBQ0EsMkJBQTJCLFNBQVM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBLDJCQUEyQixPQUFPO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixZQUFZO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixPQUFPO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixRQUFRO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFFBQVE7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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QTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpb3RhLXBpY28tcG93LXdlYmdsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJAaW90YS1waWNvL3Bvdy13ZWJnbFwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAaW90YS1waWNvL3Bvdy13ZWJnbFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJJb3RhUGljb1Bvd1dlYmdsXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZGlzdC9pbmRleC5qc1wiKTtcbiIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QganNvbkhlbHBlcl8xID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvanNvbkhlbHBlclwiKTtcclxuY29uc3Qgc3RyaW5nSGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy9zdHJpbmdIZWxwZXJcIik7XHJcbi8qKlxyXG4gKiBBIGNvcmUgaW1wbGVtZW50YXRpb24gb2YgYW4gZXJyb3IuXHJcbiAqL1xyXG5jbGFzcyBDb3JlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBDb3JlRXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSBmb3IgdGhlIGVycm9yLlxyXG4gICAgICogQHBhcmFtIGFkZGl0aW9uYWwgQWRkaXRpb25hbCBkZXRhaWxzIGFib3V0IHRoZSBlcnJvci5cclxuICAgICAqIEBwYXJhbSBpbm5lckVycm9yIEFkZCBpbmZvcm1hdGlvbiBmcm9tIGlubmVyIGVycm9yIGlmIHRoZXJlIHdhcyBvbmUuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGFkZGl0aW9uYWwsIGlubmVyRXJyb3IpIHtcclxuICAgICAgICBzdXBlcihtZXNzYWdlKTtcclxuICAgICAgICB0aGlzLmFkZGl0aW9uYWwgPSBhZGRpdGlvbmFsID8gYWRkaXRpb25hbCA6IHt9O1xyXG4gICAgICAgIHRoaXMuaW5uZXJFcnJvciA9IGlubmVyRXJyb3I7XHJcbiAgICAgICAgdGhpcy5kb21haW4gPSBcIkNvcmVcIjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgYW4gb2JqZWN0IGNvdWxkIGJlIGEgQ29yZUVycm9yLlxyXG4gICAgICogQHBhcmFtIG9iaiBUaGUgb2JqZWN0IHRvIGNoZWNrIGlmIGl0IGlzIGEgQ29yZUVycm9yLlxyXG4gICAgICogQHJldHVybnMgdHJ1ZSBJZiB0aGUgdGVzdGVkIG9iamVjdCBpcyBhIENvcmVFcnJvci5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzRXJyb3Iob2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIG9iaiAhPT0gdW5kZWZpbmVkICYmIG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiICYmIFwibWVzc2FnZVwiIGluIG9iaiAmJiBcImFkZGl0aW9uYWxcIiBpbiBvYmo7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEZvcm1hdCB0aGUgZXJyb3IgdG8gYSByZWFkYWJsZSB2ZXJzaW9uLlxyXG4gICAgICogQHJldHVybnMgRm9ybWF0dGVkIHZlcnNpb24gb2YgdGhlIGVycm9yLlxyXG4gICAgICovXHJcbiAgICBmb3JtYXQoKSB7XHJcbiAgICAgICAgbGV0IG91dCA9IFwiXCI7XHJcbiAgICAgICAgaWYgKCFzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNFbXB0eSh0aGlzLmRvbWFpbikpIHtcclxuICAgICAgICAgICAgb3V0ICs9IGAke3RoaXMuZG9tYWlufTogYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNFbXB0eSh0aGlzLm1lc3NhZ2UpKSB7XHJcbiAgICAgICAgICAgIG91dCArPSBgJHt0aGlzLm1lc3NhZ2V9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuYWRkaXRpb25hbCk7XHJcbiAgICAgICAgaWYgKGtleXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBpZiAob3V0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIG91dCArPSBcIlxcblwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb3V0ICs9IGBcXHQke2tleX06ICR7anNvbkhlbHBlcl8xLkpzb25IZWxwZXIuc3RyaW5naWZ5KHRoaXMuYWRkaXRpb25hbFtrZXldKX1cXG5gO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkNvcmVFcnJvciA9IENvcmVFcnJvcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5eVpVVnljbTl5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMlZ5Y205eUwyTnZjbVZGY25KdmNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc2MwUkJRVzFFTzBGQlEyNUVMREJFUVVGMVJEdEJRVVYyUkRzN1IwRkZSenRCUVVOSUxHVkJRWFZDTEZOQlFWRXNTMEZCU3p0SlFXZENhRU03T3pzN08wOUJTMGM3U1VGRFNDeFpRVUZaTEU5QlFXVXNSVUZCUlN4VlFVRnJReXhGUVVGRkxGVkJRV3RDTzFGQlF5OUZMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFJRVU5tTEVsQlFVa3NRMEZCUXl4VlFVRlZMRWRCUVVjc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJRenRSUVVNdlF5eEpRVUZKTEVOQlFVTXNWVUZCVlN4SFFVRkhMRlZCUVZVc1EwRkJRenRSUVVNM1FpeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJRenRKUVVONlFpeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJVVHRSUVVNeFFpeFBRVUZQTEVkQlFVY3NTMEZCU3l4VFFVRlRMRWxCUVVrc1IwRkJSeXhMUVVGTExFbEJRVWtzU1VGQlNTeFBRVUZQTEVkQlFVY3NTMEZCU3l4UlFVRlJMRWxCUVVrc1UwRkJVeXhKUVVGSkxFZEJRVWNzU1VGQlNTeFpRVUZaTEVsQlFVa3NSMEZCUnl4RFFVRkRPMGxCUTI1SUxFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hOUVVGTk8xRkJRMVFzU1VGQlNTeEhRVUZITEVkQlFVY3NSVUZCUlN4RFFVRkRPMUZCUldJc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJUdFpRVU53UXl4SFFVRkhMRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeEpRVUZKTEVOQlFVTTdVMEZETjBJN1VVRkRSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEZRVUZGTzFsQlEzSkRMRWRCUVVjc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0VFFVTTFRanRSUVVWRUxFMUJRVTBzU1VGQlNTeEhRVUZITEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETzFGQlF6RkRMRWxCUVVrc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVWQlFVVTdXVUZEYWtJc1NVRkJTU3hIUVVGSExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNSVUZCUlR0blFrRkRhRUlzUjBGQlJ5eEpRVUZKTEVsQlFVa3NRMEZCUXp0aFFVTm1PMWxCUTBRc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0blFrRkRaaXhIUVVGSExFbEJRVWtzUzBGQlN5eEhRVUZITEV0QlFVc3NkVUpCUVZVc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU03V1VGRGRrVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkRUanRSUVVWRUxFOUJRVThzUjBGQlJ5eERRVUZETzBsQlEyWXNRMEZCUXp0RFFVTktPMEZCYUVWRUxEaENRV2RGUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIEZhY3RvcnkgdG8gZ2VuZXJhdGUgdHlwZXMuXHJcbiAqIEB0eXBlcGFyYW0gVCBUaGUgZ2VuZXJpYyB0eXBlIGZvciB0aGUgb2JqZWN0IHR5cGVzIGluIHRoZSBmYWN0b3J5LlxyXG4gKi9cclxuY2xhc3MgRmFjdG9yeUJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLyogQGludGVybmFsICovXHJcbiAgICAgICAgdGhpcy5fdHlwZXMgPSB7fTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgYSBuZXcgdHlwZSB3aXRoIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHR5cGUgdG8gcmVnaXN0ZXIuXHJcbiAgICAgKiBAcGFyYW0gdHlwZUNvbnN0cnVjdG9yIFRoZSBjb25zdHJ1Y3RvciBmb3IgdGhlIHR5cGUuXHJcbiAgICAgKi9cclxuICAgIHJlZ2lzdGVyKG5hbWUsIHR5cGVDb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgIHRoaXMuZ2V0SW5zdGFuY2UoKS5fdHlwZXNbbmFtZV0gPSB0eXBlQ29uc3RydWN0b3I7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFVucmVnaXN0ZXIgYSB0eXBlIGZyb20gdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdHlwZSB0byB1bnJlZ2lzdGVyLlxyXG4gICAgICovXHJcbiAgICB1bnJlZ2lzdGVyKG5hbWUpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5nZXRJbnN0YW5jZSgpLl90eXBlc1tuYW1lXTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRG9lcyB0aGUgZmFjdG9yeSBjb250YWluIGEgc3BlY2lmaWMgdHlwZS5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB0eXBlIHRvIGxvb2sgZm9yLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdHlwZSBleGlzdHMuXHJcbiAgICAgKi9cclxuICAgIGV4aXN0cyhuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW5zdGFuY2UoKS5fdHlwZXNbbmFtZV0gIT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogTGlzdCB0aGUgdHlwZXMgaW4gdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdHlwZSB0byBsb29rIGZvci5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHR5cGUgZXhpc3RzLlxyXG4gICAgICovXHJcbiAgICB0eXBlcygpIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5nZXRJbnN0YW5jZSgpLl90eXBlcyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBhbiBvYmplY3QgZnJvbSB0aGUgZmFjdG9yeS5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB0eXBlIHRvIGNyZWF0ZS5cclxuICAgICAqIEBwYXJhbSBhcmdzIEFueSBwYXJhbWV0ZXJzIHRvIHBhc3MgdG8gdGhlIGNvbnN0cnVjdG9yLlxyXG4gICAgICogQHJldHVybnMgQSBuZXcgaW5zdGFuY2Ugb2YgdGhlIHR5cGUgaWYgaXQgZXhpc3RzLCBvciB1bmRlZmluZWQgaWYgaXQgZG9lcyBub3QuXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZShuYW1lLCAuLi5hcmdzKSB7XHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgaWYgKGluc3RhbmNlLl90eXBlc1tuYW1lXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2UuX3R5cGVzW25hbWVdKC4uLmFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5GYWN0b3J5QmFzZSA9IEZhY3RvcnlCYXNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2labUZqZEc5eWVVSmhjMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZabUZqZEc5eWFXVnpMMlpoWTNSdmNubENZWE5sTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHM3TzBkQlIwYzdRVUZEU0R0SlFVRkJPMUZCUTBrc1pVRkJaVHRSUVVORkxGZEJRVTBzUjBGQk9FTXNSVUZCUlN4RFFVRkRPMGxCYzBRMVJTeERRVUZETzBsQmNFUkhPenM3TzA5QlNVYzdTVUZEU1N4UlFVRlJMRU5CUVVNc1NVRkJXU3hGUVVGRkxHVkJRWE5ETzFGQlEyaEZMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1pVRkJaU3hEUVVGRE8wbEJRM1JFTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFZRVUZWTEVOQlFVTXNTVUZCV1R0UlFVTXhRaXhQUVVGUExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRE0wTXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1NVRkJXVHRSUVVOMFFpeFBRVUZQTEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NVMEZCVXl4RFFVRkRPMGxCUTNwRUxFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzUzBGQlN6dFJRVU5TTEU5QlFVOHNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1NVRkRiRVFzUTBGQlF6dEpRVVZFT3pzN096dFBRVXRITzBsQlEwa3NUVUZCVFN4RFFVRkRMRWxCUVZrc1JVRkJSU3hIUVVGSExFbEJRVmM3VVVGRGRFTXNUVUZCVFN4UlFVRlJMRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETzFGQlEzQkRMRWxCUVVrc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTjJRaXhQUVVGUExGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF6dFRRVU42UXp0aFFVRk5PMWxCUTBnc1QwRkJUeXhUUVVGVExFTkJRVU03VTBGRGNFSTdTVUZEVEN4RFFVRkRPME5CU1VvN1FVRjRSRVFzYTBOQmQwUkRJbjA9IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCIuL29iamVjdEhlbHBlclwiKTtcclxuLyoqXHJcbiAqIEFycmF5IGhlbHBlciBtZXRob2RzLlxyXG4gKi9cclxuY2xhc3MgQXJyYXlIZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYW4gYXJyYXkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBhbiBhcnJheS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzQXJyYXkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IGZhbHNlIDogQXJyYXkuaXNBcnJheSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhIGVtcHR5IGFycmF5LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0LlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgYSBlbXB0eSBhcnJheS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzRW1wdHkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gIUFycmF5SGVscGVyLmlzQXJyYXkodmFsdWUpIHx8IHZhbHVlLmxlbmd0aCA9PT0gMDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgbm9uIGVtcHR5IGFycmF5IG9mIHNwZWNpZmljIHR5cGUuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QuXHJcbiAgICAgKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiB0aGUgb2JqZWN0XHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBhIG5vbiBlbXB0eSBhcnJheSBvZiBhIHNwZWNpZmljIHR5cGUuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc1R5cGVkKHZhbHVlLCB0eXBlKSB7XHJcbiAgICAgICAgcmV0dXJuICFBcnJheUhlbHBlci5pc0VtcHR5KHZhbHVlKSAmJlxyXG4gICAgICAgICAgICAhdmFsdWUuaW5jbHVkZXModW5kZWZpbmVkKSAmJlxyXG4gICAgICAgICAgICAhdmFsdWUuaW5jbHVkZXMobnVsbCkgJiZcclxuICAgICAgICAgICAgdmFsdWUuZXZlcnkoKGEpID0+IG9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoYSwgdHlwZSkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQXJyYXlIZWxwZXIgPSBBcnJheUhlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWVhKeVlYbElaV3h3WlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12YUdWc2NHVnljeTloY25KaGVVaGxiSEJsY2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzYVVSQlFUaERPMEZCUlRsRE96dEhRVVZITzBGQlEwZzdTVUZEU1RzN096dFBRVWxITzBsQlEwa3NUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGVk8xRkJRelZDTEU5QlFVOHNTMEZCU3l4TFFVRkxMRWxCUVVrc1NVRkJTU3hMUVVGTExFdEJRVXNzVTBGQlV6dFpRVU40UXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRM1pETEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGVk8xRkJRelZDTEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEV0QlFVc3NRMEZCUXl4TlFVRk5MRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRemRFTEVOQlFVTTdTVUZGUkRzN096czdUMEZMUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlZTeEZRVUZGTEVsQlFXTTdVVUZETlVNc1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRPMWxCUXpsQ0xFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4VFFVRlRMRU5CUVVNN1dVRkRNVUlzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJRenRaUVVOeVFpeExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJUU3hGUVVGRkxFVkJRVVVzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTTVSQ3hEUVVGRE8wTkJSVW83UVVGcVEwUXNhME5CYVVOREluMD0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBKc29uIGhlbHBlciBtZXRob2RzLlxyXG4gKi9cclxuY2xhc3MgSnNvbkhlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIFN0cmluZ2lmeSBhbiBvYmplY3Qgd2l0aCByZWN1cnNpb24gYnJlYWtpbmcuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgQSBKYXZhU2NyaXB0IHZhbHVlLCB1c3VhbGx5IGFuIG9iamVjdCBvciBhcnJheSwgdG8gYmUgY29udmVydGVkLlxyXG4gICAgICogQHBhcmFtIHJlcGxhY2VyIEEgZnVuY3Rpb24gdGhhdCB0cmFuc2Zvcm1zIHRoZSByZXN1bHRzLlxyXG4gICAgICogQHBhcmFtIHNwYWNlIEFkZHMgaW5kZW50YXRpb24sIHdoaXRlIHNwYWNlLCBhbmQgbGluZSBicmVhayBjaGFyYWN0ZXJzIHRvIHRoZSByZXR1cm4tdmFsdWUgSlNPTiB0ZXh0IHRvIG1ha2UgaXQgZWFzaWVyIHRvIHJlYWQuXHJcbiAgICAgKiBAcmV0dXJucyBTdHJpbmcgdmVyc2lvbiBvZiB0aGUgb2JqZWN0LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc3RyaW5naWZ5KHZhbHVlLCByZXBsYWNlciwgc3BhY2UpIHtcclxuICAgICAgICAvLyBlbGltaW5hdGVzIGFueSByZWN1cnNpb24gaW4gdGhlIHN0cmluZ2lmeVxyXG4gICAgICAgIGNvbnN0IGNhY2hlID0gW107XHJcbiAgICAgICAgY29uc3QgcmVjdXNpb25SZXBsYWNlciA9IChrZXksIHJlcGxhY2VWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlcGxhY2VWYWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCAmJiByZXBsYWNlVmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhY2hlLmluZGV4T2YocmVwbGFjZVZhbHVlKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjaXJjdWxhciByZWZlcmVuY2UgZm91bmQsIGRpc2NhcmQga2V5XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FjaGUucHVzaChyZXBsYWNlVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXBsYWNlciA/IHJlcGxhY2VyKGtleSwgcmVwbGFjZVZhbHVlKSA6IHJlcGxhY2VWYWx1ZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSwgcmVjdXNpb25SZXBsYWNlciwgc3BhY2UpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuSnNvbkhlbHBlciA9IEpzb25IZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFuTnZia2hsYkhCbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5b1pXeHdaWEp6TDJwemIyNUlaV3h3WlhJdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCT3p0SFFVVkhPMEZCUTBnN1NVRkRTVHM3T3pzN08wOUJUVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVZVc1JVRkJSU3hSUVVFeVF5eEZRVUZGTEV0QlFYVkNPMUZCUTNCSExEUkRRVUUwUXp0UlFVTTFReXhOUVVGTkxFdEJRVXNzUjBGQlZTeEZRVUZGTEVOQlFVTTdVVUZGZUVJc1RVRkJUU3huUWtGQlowSXNSMEZCUnl4RFFVRkRMRWRCUVZjc1JVRkJSU3haUVVGcFFpeEZRVUZGTEVWQlFVVTdXVUZEZUVRc1NVRkJTU3hQUVVGUExGbEJRVmtzUzBGQlN5eFJRVUZSTEVsQlFVa3NTMEZCU3l4TFFVRkxMRWxCUVVrc1NVRkJTU3haUVVGWkxFdEJRVXNzVTBGQlV5eEZRVUZGTzJkQ1FVTnNSaXhKUVVGSkxFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFVkJRVVU3YjBKQlEzQkRMSGREUVVGM1F6dHZRa0ZEZUVNc1QwRkJUenRwUWtGRFZqdHhRa0ZCVFR0dlFrRkRTQ3hMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMmxDUVVNMVFqdGhRVU5LTzFsQlJVUXNUMEZCVHl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eEhRVUZITEVWQlFVVXNXVUZCV1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGbEJRVmtzUTBGQlF6dFJRVU5xUlN4RFFVRkRMRU5CUVVNN1VVRkZSaXhQUVVGUExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCU3l4RlFVRkZMR2RDUVVGblFpeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU03UTBGRFNqdEJRVE5DUkN4blEwRXlRa01pZlE9PSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIE51bWJlciBoZWxwZXIgbWV0aG9kcy5cclxuICovXHJcbmNsYXNzIE51bWJlckhlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhbiBpbnRlZ2VyLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0IGZvciBpdHMgaW50ZWdlcm5lc3MuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYSBpbnRlZ2VyLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNJbnRlZ2VyKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIodmFsdWUpICYmICFOdW1iZXIuaXNOYU4odmFsdWUpICYmIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhIG51bWJlci5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdCBmb3IgaXRzIG51bWJlcnluZXNzLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGEgbnVtYmVyLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNOdW1iZXIodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIgJiYgIU51bWJlci5pc05hTih2YWx1ZSkgJiYgTnVtYmVyLmlzRmluaXRlKHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgZmxvYXQgbnVtYmVyIGZvcm1hdHRlZCBhcyBhIHN0cmluZywgY2FuIGJlIHVzZWQgZm9yIGJpZyBudW1iZXJzIHRoYXQgd291bGQgb3ZlcmZsb3cgcGFyc2VGbG9hdC5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2tcclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG51bWJlciBpcyBmb3JtYXR0ZWQgY29ycmVjdGx5LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNGbG9hdFN0cmluZyh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAvXi0/XFxkKlxcLj9cXGQrJC8udGVzdCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhIGludGVnZXIgbnVtYmVyIGZvcm1hdHRlZCBhcyBhIHN0cmluZywgY2FuIGJlIHVzZWQgZm9yIGJpZyBudW1iZXJzIHRoYXQgd291bGQgb3ZlcmZsb3cgcGFyc2VJbnQuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBudW1iZXIgaXMgZm9ybWF0dGVkIGNvcnJlY3RseS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzSW50ZWdlclN0cmluZyh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAvXi0/XFxkKyQvLnRlc3QodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTnVtYmVySGVscGVyID0gTnVtYmVySGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liblZ0WW1WeVNHVnNjR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMmhsYkhCbGNuTXZiblZ0WW1WeVNHVnNjR1Z5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHM3UjBGRlJ6dEJRVU5JTzBsQlEwazdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJWVHRSUVVNNVFpeFBRVUZQTEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRja1lzUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVZVN1VVRkROMElzVDBGQlR5eExRVUZMTEV0QlFVc3NVMEZCVXl4SlFVRkpMRXRCUVVzc1MwRkJTeXhKUVVGSkxFbEJRVWtzVDBGQlR5eExRVUZMTEV0QlFVc3NVVUZCVVN4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEyaEpMRU5CUVVNN1NVRkZSRHM3T3p0UFFVbEhPMGxCUTBrc1RVRkJUU3hEUVVGRExHRkJRV0VzUTBGQlF5eExRVUZoTzFGQlEzSkRMRTlCUVU4c1pVRkJaU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTjJReXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eGxRVUZsTEVOQlFVTXNTMEZCWVR0UlFVTjJReXhQUVVGUExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRha01zUTBGQlF6dERRVU5LTzBGQmNFTkVMRzlEUVc5RFF5SjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBPYmplY3QgaGVscGVyIG1ldGhvZHMuXHJcbiAqL1xyXG5jbGFzcyBPYmplY3RIZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgZW1wdHkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBlbXB0eS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzRW1wdHkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGFuIG9iamVjdC5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdC5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbHVlIGlzIGFuIG9iamVjdC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzT2JqZWN0KHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBmYWxzZSA6IHR5cGVvZiAodmFsdWUpID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGFuIG9iamVjdCBpZiBnaXZlbiB0eXBlLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0LlxyXG4gICAgICogQHBhcmFtIHR5cGVDb25zdHJ1Y3RvciBBIGNhbGxiYWNrIG1ldGhvZCB3aGljaCByZXR1cm5zIGFuIGluc3RhbmNlIG9mIHRoZSBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBhbiBvYmplY3Qgb2YgdGhlIHNwZWNpZmllZCB0eXBlLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNUeXBlKHZhbHVlLCB0eXBlQ29uc3RydWN0b3IpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZUNsYXNzTmFtZSA9IE9iamVjdEhlbHBlci5nZXRDbGFzc05hbWUodmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZUNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlQ2xhc3NOYW1lID09PSBPYmplY3RIZWxwZXIuZ2V0Q2xhc3NOYW1lKHR5cGVDb25zdHJ1Y3Rvcik7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgY2xhc3MgbmFtZSBvZiBhbiBvYmplY3QgaWYgaXQgaGFzIG9uZS5cclxuICAgICAqIEBwYXJhbSBvYmplY3QgVGhlIG9iamVjdCB0byBnZXQgdGhlIGNsYXNzIG5hbWUgZm9yLlxyXG4gICAgICogQHJldHVybnMgVGhlIGNsYXNzIG5hbWUgaWYgaXQgaGFzIG9uZSBvciB1bmRlZmluZWQgaWYgbm90LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0Q2xhc3NOYW1lKG9iamVjdCkge1xyXG4gICAgICAgIGlmIChvYmplY3QgPT09IG51bGwgfHwgb2JqZWN0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gdHlwZW9mIG9iamVjdCA9PT0gXCJmdW5jdGlvblwiID8gb2JqZWN0LnRvU3RyaW5nKCkgOiBvYmplY3QuY29uc3RydWN0b3IudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IGNvbnN0cnVjdG9yLm1hdGNoKC9cXHcrL2cpO1xyXG4gICAgICAgICAgICByZXR1cm4gKHJlc3VsdHMgJiYgcmVzdWx0cy5sZW5ndGggPiAxKSA/IHJlc3VsdHNbMV0gOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuT2JqZWN0SGVscGVyID0gT2JqZWN0SGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liMkpxWldOMFNHVnNjR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMmhsYkhCbGNuTXZiMkpxWldOMFNHVnNjR1Z5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHM3UjBGRlJ6dEJRVU5JTzBsQlEwazdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJWVHRSUVVNMVFpeFBRVUZQTEV0QlFVc3NTMEZCU3l4SlFVRkpMRWxCUVVrc1MwRkJTeXhMUVVGTExGTkJRVk1zUTBGQlF6dEpRVU5xUkN4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlZUdFJRVU0zUWl4UFFVRlBMRXRCUVVzc1MwRkJTeXhKUVVGSkxFbEJRVWtzUzBGQlN5eExRVUZMTEZOQlFWTTdXVUZEZUVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExGRkJRVkVzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGRFVXNRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZWTEVWQlFVVXNaVUZCZVVJN1VVRkRkRVFzVFVGQlRTeGpRVUZqTEVkQlFVY3NXVUZCV1N4RFFVRkRMRmxCUVZrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU40UkN4UFFVRlBMR05CUVdNc1MwRkJTeXhUUVVGVExFbEJRVWtzWTBGQll5eExRVUZMTEZsQlFWa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1pVRkJaU3hEUVVGRExFTkJRVU03U1VGRGVrY3NRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1dVRkJXU3hEUVVGRExFMUJRVmM3VVVGRGJFTXNTVUZCU1N4TlFVRk5MRXRCUVVzc1NVRkJTU3hKUVVGSkxFMUJRVTBzUzBGQlN5eFRRVUZUTEVWQlFVVTdXVUZEZWtNc1QwRkJUeXhUUVVGVExFTkJRVU03VTBGRGNFSTdZVUZCVFR0WlFVTklMRTFCUVUwc1YwRkJWeXhIUVVGSExFOUJRVThzVFVGQlRTeExRVUZMTEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1YwRkJWeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFsQlEzSkhMRTFCUVUwc1QwRkJUeXhIUVVGSExGZEJRVmNzUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1dVRkRNVU1zVDBGQlR5eERRVUZETEU5QlFVOHNTVUZCU1N4UFFVRlBMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTXNRMEZCUXp0VFFVTnVSVHRKUVVOTUxFTkJRVU03UTBGRFNqdEJRVGREUkN4dlEwRTJRME1pZlE9PSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIFN0cmluZyBoZWxwZXIgbWV0aG9kcy5cclxuICovXHJcbmNsYXNzIFN0cmluZ0hlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhIHN0cmluZy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdCBmb3IgaXRzIHN0cmluZ3luZXNzLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGEgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNTdHJpbmcodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IGZhbHNlIDogT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgc3RyaW5nIHRoYXQgaXMgZW1wdHkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QgZm9yIGl0cyBubyBlbXB0eW5lc3MuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYW4gZW1wdHkgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNFbXB0eSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAhU3RyaW5nSGVscGVyLmlzU3RyaW5nKHZhbHVlKSB8fCB2YWx1ZS5sZW5ndGggPT09IDA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSBzdHJpbmcgYWxsIEFTQ0lJIGNoYXJhY3RlcnMuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgc3RyaW5nIHRvIHRlc3QgaWYgaXMgaXMgQVNDSUkuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYWxsIEFTQ0lJLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNBc2NpaSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gZmFsc2UgOiAvXltcXHgwMC1cXHhGRl0qJC8udGVzdCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEVuY29kZSBub24gQVNDSUkgY2hhcmFjdGVycyB3aXRoIGNvbnRyb2wgY2hhcmFjdGVycy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgc3RyaW5nIHZhbHVlIHRvIGVzY2FwZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBlc2NhcGVkIHZlcnNpb24gb2YgdGhlIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGVuY29kZU5vbkFTQ0lJKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ0hlbHBlci5pc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5yZXBsYWNlKC9bXFx1MDA3Ri1cXHVGRkZGXS9nLCAoY2hyKSA9PiBgXFxcXHUkeyhgMDAwMCR7Y2hyLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpfWApLnN1YnN0cigtNCl9YCkgOiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIERlY29kZSBjb250cm9sIGNoYXJhY3RlcnMgdG8gQVNDSUkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIGVuY29kZWQgc3RyaW5nIHRvIGNvbnZlcnQgYmFjayB0byBBU0NJSS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBkZWNvZGVkIHZlcnNpb24gb2YgdGhlIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGRlY29kZU5vbkFTQ0lJKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ0hlbHBlci5pc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5yZXBsYWNlKC9cXFxcdShbXFxkXFx3XXs0fSkvZ2ksIChtYXRjaCwgZ3JwKSA9PiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KGdycCwgMTYpKSkgOiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5TdHJpbmdIZWxwZXIgPSBTdHJpbmdIZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWMzUnlhVzVuU0dWc2NHVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyaGxiSEJsY25NdmMzUnlhVzVuU0dWc2NHVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdSMEZGUnp0QlFVTklPMGxCUTBrN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlZUdFJRVU0zUWl4UFFVRlBMRXRCUVVzc1MwRkJTeXhKUVVGSkxFbEJRVWtzUzBGQlN5eExRVUZMTEZOQlFWTTdXVUZEZUVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMR2xDUVVGcFFpeERRVUZETzBsQlF6bEZMRU5CUVVNN1NVRkZSRHM3T3p0UFFVbEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZWTzFGQlF6VkNMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRXRCUVVzc1EwRkJReXhOUVVGTkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlF5OUVMRU5CUVVNN1NVRkZSRHM3T3p0UFFVbEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZoTzFGQlF5OUNMRTlCUVU4c1MwRkJTeXhMUVVGTExFbEJRVWtzU1VGQlNTeExRVUZMTEV0QlFVc3NVMEZCVXp0WlFVTjRReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4blFrRkJaMElzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRMME1zUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNZMEZCWXl4RFFVRkRMRXRCUVdFN1VVRkRkRU1zVDBGQlR5eFpRVUZaTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMR3RDUVVGclFpeEZRVUZGTEVOQlFVTXNSMEZCUnl4RlFVRkZMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zVDBGQlR5eEhRVUZITEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhUUVVGVExFTkJRVU03U1VGREwwb3NRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1kwRkJZeXhEUVVGRExFdEJRV0U3VVVGRGRFTXNUMEZCVHl4WlFVRlpMRU5CUVVNc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExHdENRVUZyUWl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNUVUZCVFN4RFFVRkRMRmxCUVZrc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVTBGQlV5eERRVUZETzBsQlEyaEtMRU5CUVVNN1EwRkRTanRCUVM5RFJDeHZRMEVyUTBNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgY2xhc3Mgd2hpY2ggY2FuIHByb3ZpZGUgdGhlIHRpbWUuXHJcbiAqL1xyXG5jbGFzcyBUaW1lU2VydmljZSB7XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgc2luY2UgMTk3MC8wMS8wMS5cclxuICAgICAqIEByZXR1cm5zIE51bWJlciBvZiBtaWxsaXNlY29uZHMuXHJcbiAgICAgKi9cclxuICAgIG1zU2luY2VFcG9jaCgpIHtcclxuICAgICAgICByZXR1cm4gRGF0ZS5ub3coKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlRpbWVTZXJ2aWNlID0gVGltZVNlcnZpY2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRHbHRaVk5sY25acFkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmMyVnlkbWxqWlhNdmRHbHRaVk5sY25acFkyVXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVWQk96dEhRVVZITzBGQlEwZzdTVUZEU1RzN08wOUJSMGM3U1VGRFNTeFpRVUZaTzFGQlEyWXNUMEZCVHl4SlFVRkpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03U1VGRGRFSXNRMEZCUXp0RFFVTktPMEZCVWtRc2EwTkJVVU1pZlE9PSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGNyeXB0b0Vycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvY3J5cHRvRXJyb3JcIik7XHJcbi8qKlxyXG4gKiBTaGEzIGltcGxlbWVudGF0aW9uLlxyXG4gKi9cclxuY2xhc3MgU2hhMyB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBTSEEzLlxyXG4gICAgICogQHBhcmFtIGJpdHMgVGhlIG51bWJlciBvZiBpbnB1dCBiaXRzLlxyXG4gICAgICogQHBhcmFtIHBhZGRpbmcgVGhlIHBhZGRpbmcgdG8gdXNlLlxyXG4gICAgICogQHBhcmFtIG91dHB1dEJpdHMgVGhlIG51bWJlciBvZiBvdXRwdXQgYml0cy5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoYml0cywgcGFkZGluZywgb3V0cHV0Qml0cykge1xyXG4gICAgICAgIHRoaXMuX3BhZGRpbmcgPSBwYWRkaW5nO1xyXG4gICAgICAgIHRoaXMuX291dHB1dEJpdHMgPSBvdXRwdXRCaXRzO1xyXG4gICAgICAgIHRoaXMuX2Jsb2NrQ291bnQgPSAoMTYwMCAtIChiaXRzIDw8IDEpKSA+PiA1O1xyXG4gICAgICAgIHRoaXMuX2J5dGVDb3VudCA9IHRoaXMuX2Jsb2NrQ291bnQgPDwgMjtcclxuICAgICAgICB0aGlzLl9vdXRwdXRCbG9ja3MgPSBvdXRwdXRCaXRzID4+IDU7XHJcbiAgICAgICAgdGhpcy5fZXh0cmFCeXRlcyA9IChvdXRwdXRCaXRzICYgMzEpID4+IDM7XHJcbiAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXNldCB0aGUgZGlnZXN0LlxyXG4gICAgICovXHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICB0aGlzLl9yZXNldCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fYmxvY2sgPSAwO1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0ID0gMDtcclxuICAgICAgICB0aGlzLl9ibG9ja3MgPSBuZXcgVWludDMyQXJyYXkodGhpcy5fYmxvY2tDb3VudCArIDEpO1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gbmV3IFVpbnQzMkFycmF5KDUwKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoZSBkaWdlc3QuXHJcbiAgICAgKiBAcGFyYW0gaW5wdXQgQXJyYXkgb2YgZGF0YSB0byB1c2UgaW4gdGhlIHVwZGF0ZS5cclxuICAgICAqL1xyXG4gICAgdXBkYXRlKGlucHV0KSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKGlucHV0LCBBcnJheUJ1ZmZlcikpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJJbnB1dCBpcyBub3Qgb2YgdHlwZSBBcnJheUJ1ZmZlclwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IG5ldyBVaW50OEFycmF5KGlucHV0KTtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSBtZXNzYWdlLmxlbmd0aDtcclxuICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgIGxldCBpO1xyXG4gICAgICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcmVzZXQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2V0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ibG9ja3NbMF0gPSB0aGlzLl9ibG9jaztcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDE7IGkgPCB0aGlzLl9ibG9ja0NvdW50ICsgMTsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tzW2ldID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGkgPSB0aGlzLl9zdGFydDsgaW5kZXggPCBsZW5ndGggJiYgaSA8IHRoaXMuX2J5dGVDb3VudDsgKytpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tzW2kgPj4gMl0gfD0gbWVzc2FnZVtpbmRleF0gPDwgU2hhMy5TSElGVFtpKysgJiAzXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9sYXN0Qnl0ZUluZGV4ID0gaTtcclxuICAgICAgICAgICAgaWYgKGkgPj0gdGhpcy5fYnl0ZUNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFydCA9IGkgLSB0aGlzLl9ieXRlQ291bnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ibG9jayA9IHRoaXMuX2Jsb2Nrc1t0aGlzLl9ibG9ja0NvdW50XTtcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLl9ibG9ja0NvdW50OyArK2kpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZVtpXSBePSB0aGlzLl9ibG9ja3NbaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtlY2Nha1Blcm11dGF0aW9uKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2V0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXJ0ID0gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRmluYWxpemUgYW5kIHJldHVybiB0aGUgaGFzaCBmb3IgdGhlIGRpZ2VzdCwgd2lsbCBhbHNvIHJlc2V0IHRoZSBzdGF0ZS5cclxuICAgICAqIEByZXR1cm5zIEFycmF5IGJ1ZmZlciBjb250YWluaW5nIHRoZSBkaWdlc3QuXHJcbiAgICAgKi9cclxuICAgIGRpZ2VzdCgpIHtcclxuICAgICAgICB0aGlzLmZpbmFsaXplKCk7XHJcbiAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgIGxldCBqID0gMDtcclxuICAgICAgICBjb25zdCBieXRlcyA9IHRoaXMuX291dHB1dEJpdHMgPj4gMztcclxuICAgICAgICBsZXQgYnVmZmVyO1xyXG4gICAgICAgIGlmICh0aGlzLl9leHRyYUJ5dGVzKSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcigodGhpcy5fb3V0cHV0QmxvY2tzICsgMSkgPDwgMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoYnl0ZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhcnJheSA9IG5ldyBVaW50MzJBcnJheShidWZmZXIpO1xyXG4gICAgICAgIHdoaWxlIChqIDwgdGhpcy5fb3V0cHV0QmxvY2tzKSB7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLl9ibG9ja0NvdW50ICYmIGogPCB0aGlzLl9vdXRwdXRCbG9ja3M7ICsraSwgKytqKSB7XHJcbiAgICAgICAgICAgICAgICBhcnJheVtqXSA9IHRoaXMuX3N0YXRlW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9leHRyYUJ5dGVzKSB7XHJcbiAgICAgICAgICAgIGFycmF5W2ldID0gdGhpcy5fc3RhdGVbaV07XHJcbiAgICAgICAgICAgIGJ1ZmZlciA9IGJ1ZmZlci5zbGljZSgwLCBieXRlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgICAgICByZXR1cm4gYnVmZmVyO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBmaW5hbGl6ZSgpIHtcclxuICAgICAgICBsZXQgaSA9IHRoaXMuX2xhc3RCeXRlSW5kZXg7XHJcbiAgICAgICAgdGhpcy5fYmxvY2tzW2kgPj4gMl0gfD0gdGhpcy5fcGFkZGluZ1tpICYgM107XHJcbiAgICAgICAgaWYgKHRoaXMuX2xhc3RCeXRlSW5kZXggPT09IHRoaXMuX2J5dGVDb3VudCkge1xyXG4gICAgICAgICAgICB0aGlzLl9ibG9ja3NbMF0gPSB0aGlzLl9ibG9ja3NbdGhpcy5fYmxvY2tDb3VudF07XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDE7IGkgPCB0aGlzLl9ibG9ja0NvdW50ICsgMTsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ibG9ja3NbaV0gPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2Jsb2Nrc1t0aGlzLl9ibG9ja0NvdW50IC0gMV0gfD0gMHg4MDAwMDAwMDtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5fYmxvY2tDb3VudDsgKytpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlW2ldIF49IHRoaXMuX2Jsb2Nrc1tpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5rZWNjYWtQZXJtdXRhdGlvbih0aGlzLl9zdGF0ZSk7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGtlY2Nha1Blcm11dGF0aW9uKHMpIHtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvblxyXG4gICAgICAgIGxldCBoLCBsLCBuLCBjMCwgYzEsIGMyLCBjMywgYzQsIGM1LCBjNiwgYzcsIGM4LCBjOSwgYjAsIGIxLCBiMiwgYjMsIGI0LCBiNSwgYjYsIGI3LCBiOCwgYjksIGIxMCwgYjExLCBiMTIsIGIxMywgYjE0LCBiMTUsIGIxNiwgYjE3LCBiMTgsIGIxOSwgYjIwLCBiMjEsIGIyMiwgYjIzLCBiMjQsIGIyNSwgYjI2LCBiMjcsIGIyOCwgYjI5LCBiMzAsIGIzMSwgYjMyLCBiMzMsIGIzNCwgYjM1LCBiMzYsIGIzNywgYjM4LCBiMzksIGI0MCwgYjQxLCBiNDIsIGI0MywgYjQ0LCBiNDUsIGI0NiwgYjQ3LCBiNDgsIGI0OTtcclxuICAgICAgICBmb3IgKG4gPSAwOyBuIDwgNDg7IG4gKz0gMikge1xyXG4gICAgICAgICAgICBjMCA9IHNbMF0gXiBzWzEwXSBeIHNbMjBdIF4gc1szMF0gXiBzWzQwXTtcclxuICAgICAgICAgICAgYzEgPSBzWzFdIF4gc1sxMV0gXiBzWzIxXSBeIHNbMzFdIF4gc1s0MV07XHJcbiAgICAgICAgICAgIGMyID0gc1syXSBeIHNbMTJdIF4gc1syMl0gXiBzWzMyXSBeIHNbNDJdO1xyXG4gICAgICAgICAgICBjMyA9IHNbM10gXiBzWzEzXSBeIHNbMjNdIF4gc1szM10gXiBzWzQzXTtcclxuICAgICAgICAgICAgYzQgPSBzWzRdIF4gc1sxNF0gXiBzWzI0XSBeIHNbMzRdIF4gc1s0NF07XHJcbiAgICAgICAgICAgIGM1ID0gc1s1XSBeIHNbMTVdIF4gc1syNV0gXiBzWzM1XSBeIHNbNDVdO1xyXG4gICAgICAgICAgICBjNiA9IHNbNl0gXiBzWzE2XSBeIHNbMjZdIF4gc1szNl0gXiBzWzQ2XTtcclxuICAgICAgICAgICAgYzcgPSBzWzddIF4gc1sxN10gXiBzWzI3XSBeIHNbMzddIF4gc1s0N107XHJcbiAgICAgICAgICAgIGM4ID0gc1s4XSBeIHNbMThdIF4gc1syOF0gXiBzWzM4XSBeIHNbNDhdO1xyXG4gICAgICAgICAgICBjOSA9IHNbOV0gXiBzWzE5XSBeIHNbMjldIF4gc1szOV0gXiBzWzQ5XTtcclxuICAgICAgICAgICAgaCA9IGM4IF4gKChjMiA8PCAxKSB8IChjMyA+Pj4gMzEpKTtcclxuICAgICAgICAgICAgbCA9IGM5IF4gKChjMyA8PCAxKSB8IChjMiA+Pj4gMzEpKTtcclxuICAgICAgICAgICAgc1swXSBePSBoO1xyXG4gICAgICAgICAgICBzWzFdIF49IGw7XHJcbiAgICAgICAgICAgIHNbMTBdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMTFdIF49IGw7XHJcbiAgICAgICAgICAgIHNbMjBdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMjFdIF49IGw7XHJcbiAgICAgICAgICAgIHNbMzBdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMzFdIF49IGw7XHJcbiAgICAgICAgICAgIHNbNDBdIF49IGg7XHJcbiAgICAgICAgICAgIHNbNDFdIF49IGw7XHJcbiAgICAgICAgICAgIGggPSBjMCBeICgoYzQgPDwgMSkgfCAoYzUgPj4+IDMxKSk7XHJcbiAgICAgICAgICAgIGwgPSBjMSBeICgoYzUgPDwgMSkgfCAoYzQgPj4+IDMxKSk7XHJcbiAgICAgICAgICAgIHNbMl0gXj0gaDtcclxuICAgICAgICAgICAgc1szXSBePSBsO1xyXG4gICAgICAgICAgICBzWzEyXSBePSBoO1xyXG4gICAgICAgICAgICBzWzEzXSBePSBsO1xyXG4gICAgICAgICAgICBzWzIyXSBePSBoO1xyXG4gICAgICAgICAgICBzWzIzXSBePSBsO1xyXG4gICAgICAgICAgICBzWzMyXSBePSBoO1xyXG4gICAgICAgICAgICBzWzMzXSBePSBsO1xyXG4gICAgICAgICAgICBzWzQyXSBePSBoO1xyXG4gICAgICAgICAgICBzWzQzXSBePSBsO1xyXG4gICAgICAgICAgICBoID0gYzIgXiAoKGM2IDw8IDEpIHwgKGM3ID4+PiAzMSkpO1xyXG4gICAgICAgICAgICBsID0gYzMgXiAoKGM3IDw8IDEpIHwgKGM2ID4+PiAzMSkpO1xyXG4gICAgICAgICAgICBzWzRdIF49IGg7XHJcbiAgICAgICAgICAgIHNbNV0gXj0gbDtcclxuICAgICAgICAgICAgc1sxNF0gXj0gaDtcclxuICAgICAgICAgICAgc1sxNV0gXj0gbDtcclxuICAgICAgICAgICAgc1syNF0gXj0gaDtcclxuICAgICAgICAgICAgc1syNV0gXj0gbDtcclxuICAgICAgICAgICAgc1szNF0gXj0gaDtcclxuICAgICAgICAgICAgc1szNV0gXj0gbDtcclxuICAgICAgICAgICAgc1s0NF0gXj0gaDtcclxuICAgICAgICAgICAgc1s0NV0gXj0gbDtcclxuICAgICAgICAgICAgaCA9IGM0IF4gKChjOCA8PCAxKSB8IChjOSA+Pj4gMzEpKTtcclxuICAgICAgICAgICAgbCA9IGM1IF4gKChjOSA8PCAxKSB8IChjOCA+Pj4gMzEpKTtcclxuICAgICAgICAgICAgc1s2XSBePSBoO1xyXG4gICAgICAgICAgICBzWzddIF49IGw7XHJcbiAgICAgICAgICAgIHNbMTZdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMTddIF49IGw7XHJcbiAgICAgICAgICAgIHNbMjZdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMjddIF49IGw7XHJcbiAgICAgICAgICAgIHNbMzZdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMzddIF49IGw7XHJcbiAgICAgICAgICAgIHNbNDZdIF49IGg7XHJcbiAgICAgICAgICAgIHNbNDddIF49IGw7XHJcbiAgICAgICAgICAgIGggPSBjNiBeICgoYzAgPDwgMSkgfCAoYzEgPj4+IDMxKSk7XHJcbiAgICAgICAgICAgIGwgPSBjNyBeICgoYzEgPDwgMSkgfCAoYzAgPj4+IDMxKSk7XHJcbiAgICAgICAgICAgIHNbOF0gXj0gaDtcclxuICAgICAgICAgICAgc1s5XSBePSBsO1xyXG4gICAgICAgICAgICBzWzE4XSBePSBoO1xyXG4gICAgICAgICAgICBzWzE5XSBePSBsO1xyXG4gICAgICAgICAgICBzWzI4XSBePSBoO1xyXG4gICAgICAgICAgICBzWzI5XSBePSBsO1xyXG4gICAgICAgICAgICBzWzM4XSBePSBoO1xyXG4gICAgICAgICAgICBzWzM5XSBePSBsO1xyXG4gICAgICAgICAgICBzWzQ4XSBePSBoO1xyXG4gICAgICAgICAgICBzWzQ5XSBePSBsO1xyXG4gICAgICAgICAgICBiMCA9IHNbMF07XHJcbiAgICAgICAgICAgIGIxID0gc1sxXTtcclxuICAgICAgICAgICAgYjMyID0gKHNbMTFdIDw8IDQpIHwgKHNbMTBdID4+PiAyOCk7XHJcbiAgICAgICAgICAgIGIzMyA9IChzWzEwXSA8PCA0KSB8IChzWzExXSA+Pj4gMjgpO1xyXG4gICAgICAgICAgICBiMTQgPSAoc1syMF0gPDwgMykgfCAoc1syMV0gPj4+IDI5KTtcclxuICAgICAgICAgICAgYjE1ID0gKHNbMjFdIDw8IDMpIHwgKHNbMjBdID4+PiAyOSk7XHJcbiAgICAgICAgICAgIGI0NiA9IChzWzMxXSA8PCA5KSB8IChzWzMwXSA+Pj4gMjMpO1xyXG4gICAgICAgICAgICBiNDcgPSAoc1szMF0gPDwgOSkgfCAoc1szMV0gPj4+IDIzKTtcclxuICAgICAgICAgICAgYjI4ID0gKHNbNDBdIDw8IDE4KSB8IChzWzQxXSA+Pj4gMTQpO1xyXG4gICAgICAgICAgICBiMjkgPSAoc1s0MV0gPDwgMTgpIHwgKHNbNDBdID4+PiAxNCk7XHJcbiAgICAgICAgICAgIGIyMCA9IChzWzJdIDw8IDEpIHwgKHNbM10gPj4+IDMxKTtcclxuICAgICAgICAgICAgYjIxID0gKHNbM10gPDwgMSkgfCAoc1syXSA+Pj4gMzEpO1xyXG4gICAgICAgICAgICBiMiA9IChzWzEzXSA8PCAxMikgfCAoc1sxMl0gPj4+IDIwKTtcclxuICAgICAgICAgICAgYjMgPSAoc1sxMl0gPDwgMTIpIHwgKHNbMTNdID4+PiAyMCk7XHJcbiAgICAgICAgICAgIGIzNCA9IChzWzIyXSA8PCAxMCkgfCAoc1syM10gPj4+IDIyKTtcclxuICAgICAgICAgICAgYjM1ID0gKHNbMjNdIDw8IDEwKSB8IChzWzIyXSA+Pj4gMjIpO1xyXG4gICAgICAgICAgICBiMTYgPSAoc1szM10gPDwgMTMpIHwgKHNbMzJdID4+PiAxOSk7XHJcbiAgICAgICAgICAgIGIxNyA9IChzWzMyXSA8PCAxMykgfCAoc1szM10gPj4+IDE5KTtcclxuICAgICAgICAgICAgYjQ4ID0gKHNbNDJdIDw8IDIpIHwgKHNbNDNdID4+PiAzMCk7XHJcbiAgICAgICAgICAgIGI0OSA9IChzWzQzXSA8PCAyKSB8IChzWzQyXSA+Pj4gMzApO1xyXG4gICAgICAgICAgICBiNDAgPSAoc1s1XSA8PCAzMCkgfCAoc1s0XSA+Pj4gMik7XHJcbiAgICAgICAgICAgIGI0MSA9IChzWzRdIDw8IDMwKSB8IChzWzVdID4+PiAyKTtcclxuICAgICAgICAgICAgYjIyID0gKHNbMTRdIDw8IDYpIHwgKHNbMTVdID4+PiAyNik7XHJcbiAgICAgICAgICAgIGIyMyA9IChzWzE1XSA8PCA2KSB8IChzWzE0XSA+Pj4gMjYpO1xyXG4gICAgICAgICAgICBiNCA9IChzWzI1XSA8PCAxMSkgfCAoc1syNF0gPj4+IDIxKTtcclxuICAgICAgICAgICAgYjUgPSAoc1syNF0gPDwgMTEpIHwgKHNbMjVdID4+PiAyMSk7XHJcbiAgICAgICAgICAgIGIzNiA9IChzWzM0XSA8PCAxNSkgfCAoc1szNV0gPj4+IDE3KTtcclxuICAgICAgICAgICAgYjM3ID0gKHNbMzVdIDw8IDE1KSB8IChzWzM0XSA+Pj4gMTcpO1xyXG4gICAgICAgICAgICBiMTggPSAoc1s0NV0gPDwgMjkpIHwgKHNbNDRdID4+PiAzKTtcclxuICAgICAgICAgICAgYjE5ID0gKHNbNDRdIDw8IDI5KSB8IChzWzQ1XSA+Pj4gMyk7XHJcbiAgICAgICAgICAgIGIxMCA9IChzWzZdIDw8IDI4KSB8IChzWzddID4+PiA0KTtcclxuICAgICAgICAgICAgYjExID0gKHNbN10gPDwgMjgpIHwgKHNbNl0gPj4+IDQpO1xyXG4gICAgICAgICAgICBiNDIgPSAoc1sxN10gPDwgMjMpIHwgKHNbMTZdID4+PiA5KTtcclxuICAgICAgICAgICAgYjQzID0gKHNbMTZdIDw8IDIzKSB8IChzWzE3XSA+Pj4gOSk7XHJcbiAgICAgICAgICAgIGIyNCA9IChzWzI2XSA8PCAyNSkgfCAoc1syN10gPj4+IDcpO1xyXG4gICAgICAgICAgICBiMjUgPSAoc1syN10gPDwgMjUpIHwgKHNbMjZdID4+PiA3KTtcclxuICAgICAgICAgICAgYjYgPSAoc1szNl0gPDwgMjEpIHwgKHNbMzddID4+PiAxMSk7XHJcbiAgICAgICAgICAgIGI3ID0gKHNbMzddIDw8IDIxKSB8IChzWzM2XSA+Pj4gMTEpO1xyXG4gICAgICAgICAgICBiMzggPSAoc1s0N10gPDwgMjQpIHwgKHNbNDZdID4+PiA4KTtcclxuICAgICAgICAgICAgYjM5ID0gKHNbNDZdIDw8IDI0KSB8IChzWzQ3XSA+Pj4gOCk7XHJcbiAgICAgICAgICAgIGIzMCA9IChzWzhdIDw8IDI3KSB8IChzWzldID4+PiA1KTtcclxuICAgICAgICAgICAgYjMxID0gKHNbOV0gPDwgMjcpIHwgKHNbOF0gPj4+IDUpO1xyXG4gICAgICAgICAgICBiMTIgPSAoc1sxOF0gPDwgMjApIHwgKHNbMTldID4+PiAxMik7XHJcbiAgICAgICAgICAgIGIxMyA9IChzWzE5XSA8PCAyMCkgfCAoc1sxOF0gPj4+IDEyKTtcclxuICAgICAgICAgICAgYjQ0ID0gKHNbMjldIDw8IDcpIHwgKHNbMjhdID4+PiAyNSk7XHJcbiAgICAgICAgICAgIGI0NSA9IChzWzI4XSA8PCA3KSB8IChzWzI5XSA+Pj4gMjUpO1xyXG4gICAgICAgICAgICBiMjYgPSAoc1szOF0gPDwgOCkgfCAoc1szOV0gPj4+IDI0KTtcclxuICAgICAgICAgICAgYjI3ID0gKHNbMzldIDw8IDgpIHwgKHNbMzhdID4+PiAyNCk7XHJcbiAgICAgICAgICAgIGI4ID0gKHNbNDhdIDw8IDE0KSB8IChzWzQ5XSA+Pj4gMTgpO1xyXG4gICAgICAgICAgICBiOSA9IChzWzQ5XSA8PCAxNCkgfCAoc1s0OF0gPj4+IDE4KTtcclxuICAgICAgICAgICAgc1swXSA9IGIwIF4gKH5iMiAmIGI0KTtcclxuICAgICAgICAgICAgc1sxXSA9IGIxIF4gKH5iMyAmIGI1KTtcclxuICAgICAgICAgICAgc1sxMF0gPSBiMTAgXiAofmIxMiAmIGIxNCk7XHJcbiAgICAgICAgICAgIHNbMTFdID0gYjExIF4gKH5iMTMgJiBiMTUpO1xyXG4gICAgICAgICAgICBzWzIwXSA9IGIyMCBeICh+YjIyICYgYjI0KTtcclxuICAgICAgICAgICAgc1syMV0gPSBiMjEgXiAofmIyMyAmIGIyNSk7XHJcbiAgICAgICAgICAgIHNbMzBdID0gYjMwIF4gKH5iMzIgJiBiMzQpO1xyXG4gICAgICAgICAgICBzWzMxXSA9IGIzMSBeICh+YjMzICYgYjM1KTtcclxuICAgICAgICAgICAgc1s0MF0gPSBiNDAgXiAofmI0MiAmIGI0NCk7XHJcbiAgICAgICAgICAgIHNbNDFdID0gYjQxIF4gKH5iNDMgJiBiNDUpO1xyXG4gICAgICAgICAgICBzWzJdID0gYjIgXiAofmI0ICYgYjYpO1xyXG4gICAgICAgICAgICBzWzNdID0gYjMgXiAofmI1ICYgYjcpO1xyXG4gICAgICAgICAgICBzWzEyXSA9IGIxMiBeICh+YjE0ICYgYjE2KTtcclxuICAgICAgICAgICAgc1sxM10gPSBiMTMgXiAofmIxNSAmIGIxNyk7XHJcbiAgICAgICAgICAgIHNbMjJdID0gYjIyIF4gKH5iMjQgJiBiMjYpO1xyXG4gICAgICAgICAgICBzWzIzXSA9IGIyMyBeICh+YjI1ICYgYjI3KTtcclxuICAgICAgICAgICAgc1szMl0gPSBiMzIgXiAofmIzNCAmIGIzNik7XHJcbiAgICAgICAgICAgIHNbMzNdID0gYjMzIF4gKH5iMzUgJiBiMzcpO1xyXG4gICAgICAgICAgICBzWzQyXSA9IGI0MiBeICh+YjQ0ICYgYjQ2KTtcclxuICAgICAgICAgICAgc1s0M10gPSBiNDMgXiAofmI0NSAmIGI0Nyk7XHJcbiAgICAgICAgICAgIHNbNF0gPSBiNCBeICh+YjYgJiBiOCk7XHJcbiAgICAgICAgICAgIHNbNV0gPSBiNSBeICh+YjcgJiBiOSk7XHJcbiAgICAgICAgICAgIHNbMTRdID0gYjE0IF4gKH5iMTYgJiBiMTgpO1xyXG4gICAgICAgICAgICBzWzE1XSA9IGIxNSBeICh+YjE3ICYgYjE5KTtcclxuICAgICAgICAgICAgc1syNF0gPSBiMjQgXiAofmIyNiAmIGIyOCk7XHJcbiAgICAgICAgICAgIHNbMjVdID0gYjI1IF4gKH5iMjcgJiBiMjkpO1xyXG4gICAgICAgICAgICBzWzM0XSA9IGIzNCBeICh+YjM2ICYgYjM4KTtcclxuICAgICAgICAgICAgc1szNV0gPSBiMzUgXiAofmIzNyAmIGIzOSk7XHJcbiAgICAgICAgICAgIHNbNDRdID0gYjQ0IF4gKH5iNDYgJiBiNDgpO1xyXG4gICAgICAgICAgICBzWzQ1XSA9IGI0NSBeICh+YjQ3ICYgYjQ5KTtcclxuICAgICAgICAgICAgc1s2XSA9IGI2IF4gKH5iOCAmIGIwKTtcclxuICAgICAgICAgICAgc1s3XSA9IGI3IF4gKH5iOSAmIGIxKTtcclxuICAgICAgICAgICAgc1sxNl0gPSBiMTYgXiAofmIxOCAmIGIxMCk7XHJcbiAgICAgICAgICAgIHNbMTddID0gYjE3IF4gKH5iMTkgJiBiMTEpO1xyXG4gICAgICAgICAgICBzWzI2XSA9IGIyNiBeICh+YjI4ICYgYjIwKTtcclxuICAgICAgICAgICAgc1syN10gPSBiMjcgXiAofmIyOSAmIGIyMSk7XHJcbiAgICAgICAgICAgIHNbMzZdID0gYjM2IF4gKH5iMzggJiBiMzApO1xyXG4gICAgICAgICAgICBzWzM3XSA9IGIzNyBeICh+YjM5ICYgYjMxKTtcclxuICAgICAgICAgICAgc1s0Nl0gPSBiNDYgXiAofmI0OCAmIGI0MCk7XHJcbiAgICAgICAgICAgIHNbNDddID0gYjQ3IF4gKH5iNDkgJiBiNDEpO1xyXG4gICAgICAgICAgICBzWzhdID0gYjggXiAofmIwICYgYjIpO1xyXG4gICAgICAgICAgICBzWzldID0gYjkgXiAofmIxICYgYjMpO1xyXG4gICAgICAgICAgICBzWzE4XSA9IGIxOCBeICh+YjEwICYgYjEyKTtcclxuICAgICAgICAgICAgc1sxOV0gPSBiMTkgXiAofmIxMSAmIGIxMyk7XHJcbiAgICAgICAgICAgIHNbMjhdID0gYjI4IF4gKH5iMjAgJiBiMjIpO1xyXG4gICAgICAgICAgICBzWzI5XSA9IGIyOSBeICh+YjIxICYgYjIzKTtcclxuICAgICAgICAgICAgc1szOF0gPSBiMzggXiAofmIzMCAmIGIzMik7XHJcbiAgICAgICAgICAgIHNbMzldID0gYjM5IF4gKH5iMzEgJiBiMzMpO1xyXG4gICAgICAgICAgICBzWzQ4XSA9IGI0OCBeICh+YjQwICYgYjQyKTtcclxuICAgICAgICAgICAgc1s0OV0gPSBiNDkgXiAofmI0MSAmIGI0Myk7XHJcbiAgICAgICAgICAgIHNbMF0gXj0gU2hhMy5ST1VORF9DT05TVEFOVFNbbl07XHJcbiAgICAgICAgICAgIHNbMV0gXj0gU2hhMy5ST1VORF9DT05TVEFOVFNbbiArIDFdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKiBQYWRkaW5nIHRvIHVzZSBmb3IgS2VjY2FrICovXHJcblNoYTMuS0VDQ0FLX1BBRERJTkcgPSBuZXcgVWludDMyQXJyYXkoWzEsIDI1NiwgNjU1MzYsIDE2Nzc3MjE2XSk7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5TaGEzLlNISUZUID0gbmV3IFVpbnQ4QXJyYXkoWzAsIDgsIDE2LCAyNF0pO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuU2hhMy5ST1VORF9DT05TVEFOVFMgPSBuZXcgVWludDMyQXJyYXkoWzEsIDAsIDMyODk4LCAwLCAzMjkwNiwgMjE0NzQ4MzY0OCwgMjE0NzUxNjQxNiwgMjE0NzQ4MzY0OCwgMzI5MDcsIDAsIDIxNDc0ODM2NDksXHJcbiAgICAwLCAyMTQ3NTE2NTQ1LCAyMTQ3NDgzNjQ4LCAzMjc3NywgMjE0NzQ4MzY0OCwgMTM4LCAwLCAxMzYsIDAsIDIxNDc1MTY0MjUsIDAsXHJcbiAgICAyMTQ3NDgzNjU4LCAwLCAyMTQ3NTE2NTU1LCAwLCAxMzksIDIxNDc0ODM2NDgsIDMyOTA1LCAyMTQ3NDgzNjQ4LCAzMjc3MSxcclxuICAgIDIxNDc0ODM2NDgsIDMyNzcwLCAyMTQ3NDgzNjQ4LCAxMjgsIDIxNDc0ODM2NDgsIDMyNzc4LCAwLCAyMTQ3NDgzNjU4LCAyMTQ3NDgzNjQ4LFxyXG4gICAgMjE0NzUxNjU0NSwgMjE0NzQ4MzY0OCwgMzI4OTYsIDIxNDc0ODM2NDgsIDIxNDc0ODM2NDksIDAsIDIxNDc1MTY0MjQsIDIxNDc0ODM2NDhdKTtcclxuZXhwb3J0cy5TaGEzID0gU2hhMztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYzJoaE15NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5a2FXZGxjM1J6TDNOb1lUTXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQkxEUkZRVUY1UlR0QlFVTjZSU3h6UkVGQmJVUTdRVUZGYmtRN08wZEJSVWM3UVVGRFNEdEpRWEZEU1RzN096czdUMEZMUnp0SlFVTklMRmxCUVZrc1NVRkJXU3hGUVVGRkxFOUJRVzlDTEVWQlFVVXNWVUZCYTBJN1VVRkRPVVFzU1VGQlNTeERRVUZETEZGQlFWRXNSMEZCUnl4UFFVRlBMRU5CUVVNN1VVRkRlRUlzU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4VlFVRlZMRU5CUVVNN1VVRkRPVUlzU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4RFFVRkRMRWxCUVVrc1IwRkJSeXhEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVNM1F5eEpRVUZKTEVOQlFVTXNWVUZCVlN4SFFVRkhMRWxCUVVrc1EwRkJReXhYUVVGWExFbEJRVWtzUTBGQlF5eERRVUZETzFGQlEzaERMRWxCUVVrc1EwRkJReXhoUVVGaExFZEJRVWNzVlVGQlZTeEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTnlReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEVOQlFVTXNWVUZCVlN4SFFVRkhMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVVV4UXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03U1VGRGFrSXNRMEZCUXp0SlFVVkVPenRQUVVWSE8wbEJRMGtzUzBGQlN6dFJRVU5TTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJRMjVDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMmhDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMmhDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1NVRkJTU3hYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOeVJDeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRWxCUVVrc1YwRkJWeXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzBsQlEzUkRMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1MwRkJhMEk3VVVGRE5VSXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NSVUZCUlN4WFFVRlhMRU5CUVVNc1JVRkJSVHRaUVVNeFF5eE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhyUTBGQmEwTXNRMEZCUXl4RFFVRkRPMU5CUXpkRU8xRkJRMFFzVFVGQlRTeFBRVUZQTEVkQlFXVXNTVUZCU1N4VlFVRlZMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRGJFUXNUVUZCVFN4TlFVRk5MRWRCUVVjc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF6dFJRVU01UWl4SlFVRkpMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRFpDeEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVVk9MRTlCUVU4c1MwRkJTeXhIUVVGSExFMUJRVTBzUlVGQlJUdFpRVU51UWl4SlFVRkpMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVU3WjBKQlEySXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhMUVVGTExFTkJRVU03WjBKQlEzQkNMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJRenRuUWtGRE9VSXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4SFFVRkhMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJUdHZRa0ZEZGtNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN2FVSkJRM1pDTzJGQlEwbzdXVUZEUkN4TFFVRkxMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEV0QlFVc3NSMEZCUnl4TlFVRk5MRWxCUVVrc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFZRVUZWTEVWQlFVVXNSVUZCUlN4TFFVRkxMRVZCUVVVN1owSkJRMnhGTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEpRVUZKTEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRMnBGTzFsQlEwUXNTVUZCU1N4RFFVRkRMR05CUVdNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRGVFSXNTVUZCU1N4RFFVRkRMRWxCUVVrc1NVRkJTU3hEUVVGRExGVkJRVlVzUlVGQlJUdG5Ra0ZEZEVJc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJRenRuUWtGRGJFTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJRenRuUWtGRE4wTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRk8yOUNRVU51UXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03YVVKQlEzSkRPMmRDUVVORUxFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdaMEpCUTNCRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRPMkZCUTNSQ08ybENRVUZOTzJkQ1FVTklMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETzJGQlEyNUNPMU5CUTBvN1NVRkRUQ3hEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1RVRkJUVHRSUVVOVUxFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0UlFVVm9RaXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEVml4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRFZpeE5RVUZOTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU53UXl4SlFVRkpMRTFCUVUwc1EwRkJRenRSUVVOWUxFbEJRVWtzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlR0WlFVTnNRaXhOUVVGTkxFZEJRVWNzU1VGQlNTeFhRVUZYTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1lVRkJZU3hIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUXpORU8yRkJRVTA3V1VGRFNDeE5RVUZOTEVkQlFVY3NTVUZCU1N4WFFVRlhMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VTBGRGJrTTdVVUZEUkN4TlFVRk5MRXRCUVVzc1IwRkJSeXhKUVVGSkxGZEJRVmNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTjBReXhQUVVGUExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNZVUZCWVN4RlFVRkZPMWxCUXpOQ0xFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzU1VGQlNTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMR0ZCUVdFc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlR0blFrRkRiRVVzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdZVUZETjBJN1UwRkRTanRSUVVORUxFbEJRVWtzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlR0WlFVTnNRaXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU14UWl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1UwRkRia003VVVGRFJDeEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1VVRkZZaXhQUVVGUExFMUJRVTBzUTBGQlF6dEpRVU5zUWl4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxGRkJRVkU3VVVGRFdpeEpRVUZKTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRE8xRkJRelZDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6ZERMRWxCUVVrc1NVRkJTU3hEUVVGRExHTkJRV01zUzBGQlN5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RlFVRkZPMWxCUTNwRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1dVRkRha1FzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSVHRuUWtGRGRrTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdZVUZEZGtJN1UwRkRTanRSUVVORUxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeFZRVUZWTEVOQlFVTTdVVUZEYWtRc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTzFsQlEyNURMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU55UXp0UlFVTkVMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03U1VGRGVFTXNRMEZCUXp0SlFVVkVMR1ZCUVdVN1NVRkRVQ3hwUWtGQmFVSXNRMEZCUXl4RFFVRmpPMUZCUTNCRExIZEVRVUYzUkR0UlFVTjRSQ3hKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkRMME1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRemxGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkRPVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRPMUZCUTI1R0xFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVTdXVUZEZUVJc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRNVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRE1VTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdXVUZETVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRNVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRE1VTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdXVUZETVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRNVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRE1VTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdXVUZETVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkZNVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGJrTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYmtNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTldMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEVml4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTllMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTI1RExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMjVETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFZpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMVlzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFdDeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU51UXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnVReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFZc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTldMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFnc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRia01zUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGJrTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5XTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFZpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyNURMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTI1RExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRWaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFZc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkZXQ3hGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTFZc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTldMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOd1F5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEY0VNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM0JETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTndReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGNFTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNCRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU55UXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRja01zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEyeERMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOc1F5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEY0VNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM0JETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTnlReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGNrTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNKRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU55UXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRjRU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzQkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOc1F5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYkVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM0JETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTndReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGNFTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNCRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU55UXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRja01zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzQkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOd1F5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYkVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnhETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTndReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGNFTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNCRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU53UXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRjRU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzQkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOd1F5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY0VNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnhETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnNReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGNrTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNKRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU53UXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRjRU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzQkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOd1F5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEY0VNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJSWEJETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOMlFpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRka0lzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETTBJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6TkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRek5DTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNelFpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRka0lzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNaQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETTBJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6TkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRek5DTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNelFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNMElzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNaQ0xFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTjJRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETTBJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6TkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRek5DTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNelFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNMElzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTjJRaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEZGtJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6TkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRek5DTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNelFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNMElzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEZGtJc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzWkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRek5DTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNelFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNMElzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZGTTBJc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4bFFVRmxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFFTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRM1pETzBsQlEwd3NRMEZCUXpzN1FVRm9Wa1FzSzBKQlFTdENPMEZCUTFJc2JVSkJRV01zUjBGQlowSXNTVUZCU1N4WFFVRlhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEV0QlFVc3NSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRMmhITEdWQlFXVTdRVUZEVXl4VlFVRkxMRWRCUVdVc1NVRkJTU3hWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBGQlF6TkZMR1ZCUVdVN1FVRkRVeXh2UWtGQlpTeEhRVUZuUWl4SlFVRkpMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZMRU5CUVVNc1JVRkJSU3hMUVVGTExFVkJRVVVzVlVGQlZTeEZRVUZGTEZWQlFWVXNSVUZCUlN4VlFVRlZMRVZCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU1zUlVGQlJTeFZRVUZWTzBsQlEyNUtMRU5CUVVNc1JVRkJSU3hWUVVGVkxFVkJRVVVzVlVGQlZTeEZRVUZGTEV0QlFVc3NSVUZCUlN4VlFVRlZMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkZMRlZCUVZVc1JVRkJSU3hEUVVGRE8wbEJRek5GTEZWQlFWVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNWVUZCVlN4RlFVRkZMRXRCUVVzc1JVRkJSU3hWUVVGVkxFVkJRVVVzUzBGQlN6dEpRVU4yUlN4VlFVRlZMRVZCUVVVc1MwRkJTeXhGUVVGRkxGVkJRVlVzUlVGQlJTeEhRVUZITEVWQlFVVXNWVUZCVlN4RlFVRkZMRXRCUVVzc1JVRkJSU3hEUVVGRExFVkJRVVVzVlVGQlZTeEZRVUZGTEZWQlFWVTdTVUZEYUVZc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUlVGQlJTeExRVUZMTEVWQlFVVXNWVUZCVlN4RlFVRkZMRlZCUVZVc1JVRkJSU3hEUVVGRExFVkJRVVVzVlVGQlZTeEZRVUZGTEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRldNMFlzYjBKQmExWkRJbjA9IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBjb3JlRXJyb3JfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9lcnJvci9jb3JlRXJyb3JcIik7XHJcbi8qKlxyXG4gKiBBIGNyeXB0byBpbXBsZW1lbnRhdGlvbiBvZiBhbiBlcnJvci5cclxuICovXHJcbmNsYXNzIENyeXB0b0Vycm9yIGV4dGVuZHMgY29yZUVycm9yXzEuQ29yZUVycm9yIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIENyeXB0b0Vycm9yLlxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIG1lc3NhZ2UgZm9yIHRoZSBlcnJvci5cclxuICAgICAqIEBwYXJhbSBhZGRpdGlvbmFsIEFkZGl0aW9uYWwgZGV0YWlscyBhYm91dCB0aGUgZXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gaW5uZXJFcnJvciBBZGQgaW5mb3JtYXRpb24gZnJvbSBpbm5lciBlcnJvciBpZiB0aGVyZSB3YXMgb25lLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBhZGRpdGlvbmFsLCBpbm5lckVycm9yKSB7XHJcbiAgICAgICAgc3VwZXIobWVzc2FnZSwgYWRkaXRpb25hbCwgaW5uZXJFcnJvcik7XHJcbiAgICAgICAgdGhpcy5kb21haW4gPSBcIkNyeXB0b1wiO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQ3J5cHRvRXJyb3IgPSBDcnlwdG9FcnJvcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTNKNWNIUnZSWEp5YjNJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12WlhKeWIzSXZZM0o1Y0hSdlJYSnliM0l1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJMRzlGUVVGcFJUdEJRVVZxUlRzN1IwRkZSenRCUVVOSUxHbENRVUY1UWl4VFFVRlJMSEZDUVVGVE8wbEJRM1JET3pzN096dFBRVXRITzBsQlEwZ3NXVUZCV1N4UFFVRmxMRVZCUVVVc1ZVRkJhME1zUlVGQlJTeFZRVUZyUWp0UlFVTXZSU3hMUVVGTExFTkJRVU1zVDBGQlR5eEZRVUZGTEZWQlFWVXNSVUZCUlN4VlFVRlZMRU5CUVVNc1EwRkJRenRSUVVOMlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRkZCUVZFc1EwRkJRenRKUVVNelFpeERRVUZETzBOQlEwbzdRVUZZUkN4clEwRlhReUo5IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBmYWN0b3J5QmFzZV8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2ZhY3Rvcmllcy9mYWN0b3J5QmFzZVwiKTtcclxuY29uc3QgY3VybF8xID0gcmVxdWlyZShcIi4uL3Nwb25nZXMvY3VybFwiKTtcclxuY29uc3Qga2VybF8xID0gcmVxdWlyZShcIi4uL3Nwb25nZXMva2VybFwiKTtcclxuLyoqXHJcbiAqIEZhY3RvcnkgdG8gZ2VuZXJhdGUgc3Bvbmdlcy5cclxuICovXHJcbmNsYXNzIFNwb25nZUZhY3RvcnkgZXh0ZW5kcyBmYWN0b3J5QmFzZV8xLkZhY3RvcnlCYXNlIHtcclxuICAgIC8qKlxyXG4gICAgICogRG9uJ3QgYWxsb3cgbWFudWFsIGNvbnN0cnVjdGlvbiBvZiB0aGUgZmFjdG9yeS5cclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGluc3RhbmNlIG9mIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQHJldHVybnMgVGhlIGZhY3RvcnkgaW5zdGFuY2UuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpbnN0YW5jZSgpIHtcclxuICAgICAgICBpZiAoIVNwb25nZUZhY3RvcnkuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIFNwb25nZUZhY3RvcnkuX2luc3RhbmNlID0gbmV3IFNwb25nZUZhY3RvcnkoKTtcclxuICAgICAgICAgICAgU3BvbmdlRmFjdG9yeS5faW5zdGFuY2UucmVnaXN0ZXIoXCJjdXJsXCIsICguLi5hcmdzKSA9PiBuZXcgY3VybF8xLkN1cmwoLi4uYXJncykpO1xyXG4gICAgICAgICAgICBTcG9uZ2VGYWN0b3J5Ll9pbnN0YW5jZS5yZWdpc3RlcihcImN1cmw4MVwiLCAoLi4uYXJncykgPT4gbmV3IGN1cmxfMS5DdXJsKDgxKSk7XHJcbiAgICAgICAgICAgIFNwb25nZUZhY3RvcnkuX2luc3RhbmNlLnJlZ2lzdGVyKFwiY3VybDI3XCIsICguLi5hcmdzKSA9PiBuZXcgY3VybF8xLkN1cmwoMjcpKTtcclxuICAgICAgICAgICAgU3BvbmdlRmFjdG9yeS5faW5zdGFuY2UucmVnaXN0ZXIoXCJrZXJsXCIsICguLi5hcmdzKSA9PiBuZXcga2VybF8xLktlcmwoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBTcG9uZ2VGYWN0b3J5Ll9pbnN0YW5jZTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgZ2V0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIFNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlNwb25nZUZhY3RvcnkgPSBTcG9uZ2VGYWN0b3J5O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljM0J2Ym1kbFJtRmpkRzl5ZVM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTltWVdOMGIzSnBaWE12YzNCdmJtZGxSbUZqZEc5eWVTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc05FVkJRWGxGTzBGQlJYcEZMREJEUVVGMVF6dEJRVU4yUXl3d1EwRkJkVU03UVVGRmRrTTdPMGRCUlVjN1FVRkRTQ3h0UWtGQk1rSXNVMEZCVVN4NVFrRkJiMEk3U1VGSmJrUTdPenRQUVVkSE8wbEJRMGc3VVVGRFNTeExRVUZMTEVWQlFVVXNRMEZCUXp0SlFVTmFMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1VVRkJVVHRSUVVOc1FpeEpRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMRk5CUVZNc1JVRkJSVHRaUVVNeFFpeGhRVUZoTEVOQlFVTXNVMEZCVXl4SFFVRkhMRWxCUVVrc1lVRkJZU3hGUVVGRkxFTkJRVU03V1VGRE9VTXNZVUZCWVN4RFFVRkRMRk5CUVZNc1EwRkJReXhSUVVGUkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRVZCUVVVc1JVRkJSU3hEUVVGRExFbEJRVWtzVjBGQlNTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVONlJTeGhRVUZoTEVOQlFVTXNVMEZCVXl4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NSVUZCUlN4RlFVRkZMRU5CUVVNc1NVRkJTU3hYUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjBSU3hoUVVGaExFTkJRVU1zVTBGQlV5eERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUlVGQlJTeEZRVUZGTEVOQlFVTXNTVUZCU1N4WFFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU4wUlN4aFFVRmhMRU5CUVVNc1UwRkJVeXhEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1JVRkJSU3hGUVVGRkxFTkJRVU1zU1VGQlNTeFhRVUZKTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUTNKRk8xRkJRMFFzVDBGQlR5eGhRVUZoTEVOQlFVTXNVMEZCVXl4RFFVRkRPMGxCUTI1RExFTkJRVU03U1VGRlJDeGxRVUZsTzBsQlEwd3NWMEZCVnp0UlFVTnFRaXhQUVVGUExHRkJRV0VzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0SlFVTndReXhEUVVGRE8wTkJRMG83UVVFdlFrUXNjME5CSzBKREluMD0iLCJ2YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgYmlnX2ludGVnZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiYmlnLWludGVnZXJcIikpO1xyXG5jb25zdCBjcnlwdG9FcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2NyeXB0b0Vycm9yXCIpO1xyXG4vKipcclxuICogSGVscGVyIGNsYXNzIHRvIGNvbnZlcnQgYmV0d2VlbiBCaWdJbnRlZ2VyIGFuZCBvdGhlciB0eXBlcy5cclxuICogQ29udmVydGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2lvdGFsZWRnZXIvaXJpL2Jsb2IvZGV2L3NyYy9tYWluL2phdmEvY29tL2lvdGEvaXJpL2hhc2gvS2VybC5qYXZhXHJcbiAqL1xyXG5jbGFzcyBCaWdJbnRlZ2VySGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCB0cml0cyB0byBhIGJpZ0ludGVnZXIuXHJcbiAgICAgKiBAcGFyYW0gdHJpdHMgVGhlIHRyaXRzIHRvIGNvbnZlcnQuXHJcbiAgICAgKiBAcGFyYW0gb2Zmc2V0IE9mZnNldCB3aXRoaW4gdGhlIGFycmF5IHRvIHN0YXJ0LlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBUaGUgbGVuZ3RoIG9mIHRoZSB0cml0cyBhcnJheSB0byBjb252ZXJ0LlxyXG4gICAgICogQHJldHVybnMgQmlnIGludGVnZXIgdmVyc2lvbiBvZiB0cml0cy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIHRyaXRzVG9CaWdJbnRlZ2VyKHRyaXRzLCBvZmZzZXQsIGxlbmd0aCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0cml0cywgSW50OEFycmF5KSB8fCB0cml0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgdHJpdHMgbXVzdCBiZSBhIG5vbiBlbXB0eSBJbnQ4QXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihvZmZzZXQpIHx8IG9mZnNldCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgb2Zmc2V0IG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGxlbmd0aCkgfHwgbGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgbGVuZ3RoIG11c3QgYmUgYSBudW1iZXIgPiAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob2Zmc2V0ICsgbGVuZ3RoID4gdHJpdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIG9mZnNldCArIGxlbmd0aCBpcyBiZXlvbmQgdGhlIGxlbmd0aCBvZiB0aGUgYXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB2YWx1ZSA9IGJpZ19pbnRlZ2VyXzEuZGVmYXVsdC56ZXJvO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBsZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLm11bHRpcGx5KEJpZ0ludGVnZXJIZWxwZXIuUkFESVgpLmFkZChiaWdfaW50ZWdlcl8xLmRlZmF1bHQodHJpdHNbb2Zmc2V0ICsgaV0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IGJpZ0ludGVnZXIgdG8gdHJpdHMuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIGJpZ0ludGVnZXIgdG8gY29udmVydCB0byB0cml0cy5cclxuICAgICAqIEBwYXJhbSB0cml0cyBUaGUgYXJyYXkgdG8gcmVjZWl2ZSB0aGUgdHJpdHMuXHJcbiAgICAgKiBAcGFyYW0gb2Zmc2V0IFRoZSBvZmZzZXQgdG8gcGxhY2UgdGhlIHRyaXRzIGluIHRoZSBhcnJheS5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggVGhlIGxlbmd0aCBvZiB0aGUgYXJyYXkuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBiaWdJbnRlZ2VyVG9Ucml0cyh2YWx1ZSwgdHJpdHMsIG9mZnNldCwgbGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHZhbHVlLCBiaWdfaW50ZWdlcl8xLmRlZmF1bHQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIHZhbHVlIG11c3QgYmUgYSBiaWdJbnRlZ2VyIHR5cGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0cml0cywgSW50OEFycmF5KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSB0cml0cyBtdXN0IGJlIGFuIEludDhBcnJheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKG9mZnNldCkgfHwgb2Zmc2V0IDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBvZmZzZXQgbXVzdCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobGVuZ3RoKSB8fCBsZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBsZW5ndGggbXVzdCBiZSBhIG51bWJlciA+IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvZmZzZXQgKyBsZW5ndGggPiB0cml0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgb2Zmc2V0ICsgbGVuZ3RoIGlzIGJleW9uZCB0aGUgbGVuZ3RoIG9mIHRoZSBhcnJheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGFic29sdXRlVmFsdWUgPSB2YWx1ZS5jb21wYXJlVG8oYmlnX2ludGVnZXJfMS5kZWZhdWx0Lnplcm8pIDwgMCA/IHZhbHVlLm5lZ2F0ZSgpIDogdmFsdWU7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBkaXZSZW1haW5kZXIgPSBhYnNvbHV0ZVZhbHVlLmRpdm1vZChCaWdJbnRlZ2VySGVscGVyLlJBRElYKTtcclxuICAgICAgICAgICAgYWJzb2x1dGVWYWx1ZSA9IGRpdlJlbWFpbmRlci5xdW90aWVudDtcclxuICAgICAgICAgICAgbGV0IHJlbWFpbmRlciA9IGRpdlJlbWFpbmRlci5yZW1haW5kZXI7XHJcbiAgICAgICAgICAgIGlmIChyZW1haW5kZXIgPiBCaWdJbnRlZ2VySGVscGVyLk1BWF9UUklUX1ZBTFVFKSB7XHJcbiAgICAgICAgICAgICAgICByZW1haW5kZXIgPSBCaWdJbnRlZ2VySGVscGVyLk1JTl9UUklUX1ZBTFVFO1xyXG4gICAgICAgICAgICAgICAgYWJzb2x1dGVWYWx1ZSA9IGFic29sdXRlVmFsdWUuYWRkKGJpZ19pbnRlZ2VyXzEuZGVmYXVsdFtcIjFcIl0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyaXRzW29mZnNldCArIGldID0gcmVtYWluZGVyLnRvSlNOdW1iZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZhbHVlLmNvbXBhcmVUbyhiaWdfaW50ZWdlcl8xLmRlZmF1bHQuemVybykgPCAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIC8vIEF2b2lkIG5lZ2F0aXZlIHplcm9cclxuICAgICAgICAgICAgICAgIHRyaXRzW29mZnNldCArIGldID0gdHJpdHNbb2Zmc2V0ICsgaV0gPT09IDAgPyAwIDogLXRyaXRzW29mZnNldCArIGldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRoZSBiaWdJbnRlZ2VyIGludG8gYnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXHJcbiAgICAgKiBAcGFyYW0gZGVzdGluYXRpb24gVGhlIGRlc3RpbmF0aW9uIGFycmF5IHRvIHN0b3JlIHRoZSBieXRlcy5cclxuICAgICAqIEBwYXJhbSBvZmZzZXQgVGhlIG9mZnNldCB3aXRoaW4gdGhlIGFycmF5IHRvIHN0b3JlIHRoZSBieXRlcy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGJpZ0ludGVnZXJUb0J5dGVzKHZhbHVlLCBkZXN0aW5hdGlvbiwgb2Zmc2V0KSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHZhbHVlLCBiaWdfaW50ZWdlcl8xLmRlZmF1bHQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIHZhbHVlIG11c3QgYmUgYSBiaWdJbnRlZ2VyIHR5cGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShkZXN0aW5hdGlvbiwgQXJyYXlCdWZmZXIpIHx8IGRlc3RpbmF0aW9uLmJ5dGVMZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgZGVzdGluYXRpb24gbXVzdCBiZSBhbiBhcnJheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKG9mZnNldCkgfHwgb2Zmc2V0IDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBvZmZzZXQgbXVzdCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGVzdGluYXRpb24uYnl0ZUxlbmd0aCAtIG9mZnNldCA8IEJpZ0ludGVnZXJIZWxwZXIuQllURV9IQVNIX0xFTkdUSCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihgRGVzdGluYXRpb24gYXJyYXkgaGFzIGludmFsaWQgc2l6ZSwgaXQgbXVzdCBiZSBhdCBsZWFzdCAke0JpZ0ludGVnZXJIZWxwZXIuQllURV9IQVNIX0xFTkdUSH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUmVtZW1iZXIgaWYgaXQgaXMgbmVnYXRpdmUgZm9yIGxhdGVyXHJcbiAgICAgICAgY29uc3QgaXNOZWcgPSB2YWx1ZS5pc05lZ2F0aXZlKCkgPyAtMSA6IDA7XHJcbiAgICAgICAgbGV0IGhleFN0cmluZyA9IHZhbHVlLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICBpZiAoaXNOZWcgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIC8vIEJ1dCByZW1vdmUgaXQgZm9yIG5vd1xyXG4gICAgICAgICAgICBoZXhTdHJpbmcgPSBoZXhTdHJpbmcuc2xpY2UoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIE5vdyBtYWtlIHN1cmUgdGhlIGhleCBzdHJpbmcgaXMgYW4gZXZlbiBsZW5ndGggc28gdGhlIHJlZ2V4IHdvcmtzXHJcbiAgICAgICAgaWYgKGhleFN0cmluZy5sZW5ndGggJSAyID09PSAxKSB7XHJcbiAgICAgICAgICAgIGhleFN0cmluZyA9IGAwJHtoZXhTdHJpbmd9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGhleFN0cmluZy5tYXRjaCgvWzAtOWEtZl17Mn0vZyk7XHJcbiAgICAgICAgLy8gQ29udmVydCB0aGUgaGV4IHRvIG51bWJlcnNcclxuICAgICAgICBjb25zdCBzaWduZWRCeXRlcyA9IG5ldyBJbnQ4QXJyYXkobWF0Y2hlc1xyXG4gICAgICAgICAgICAubWFwKGhleCA9PiBwYXJzZUludChgMHgke2hleH1gLCAxNikpKTtcclxuICAgICAgICBpZiAoaXNOZWcgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIEJpZ0ludGVnZXJIZWxwZXIudHdvc0NvbXBsZW1lbnQoc2lnbmVkQnl0ZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkYXRhVmlldyA9IG5ldyBEYXRhVmlldyhkZXN0aW5hdGlvbik7XHJcbiAgICAgICAgLy8gUGFkIHRoZSBzdGFydCBvZiB0aGUgYnVmZmVyIHdpdGggdGhlIG5lZyB2YWx1ZVxyXG4gICAgICAgIGxldCBpID0gb2Zmc2V0O1xyXG4gICAgICAgIHdoaWxlIChpICsgc2lnbmVkQnl0ZXMubGVuZ3RoIDwgQmlnSW50ZWdlckhlbHBlci5CWVRFX0hBU0hfTEVOR1RIKSB7XHJcbiAgICAgICAgICAgIGRhdGFWaWV3LnNldEludDgoaSsrLCBpc05lZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFuZCBjb3B5IGluIHRoZSBhY3R1YWwgYnl0ZXNcclxuICAgICAgICBmb3IgKGxldCBqID0gc2lnbmVkQnl0ZXMubGVuZ3RoOyBqLS0gPiAwOykge1xyXG4gICAgICAgICAgICBkYXRhVmlldy5zZXRJbnQ4KGkrKywgc2lnbmVkQnl0ZXNbc2lnbmVkQnl0ZXMubGVuZ3RoIC0gMSAtIGpdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgYnl0ZXMgdG8gYSBiaWdJbnRlZ2VyLlxyXG4gICAgICogQHBhcmFtIHNvdXJjZSBUaGUgc291cmNlIGJ5dGVzLlxyXG4gICAgICogQHBhcmFtIG9mZnNldCBUaGUgb2Zmc2V0IHdpdGhpbiB0aGUgYnl0ZXMgdG8gc3RhcnQgY29udmVyc2lvbi5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggVGhlIGxlbmd0aCBvZiB0aGUgYnl0ZXMgdG8gdXNlIGZvciBjb252ZXJzaW9uLlxyXG4gICAgICogQHJldHVybnMgQmlnIGludGVnZXIgdmVyc2lvbiBvZiBieXRlcy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGJ5dGVzVG9CaWdJbnRlZ2VyKHNvdXJjZSwgb2Zmc2V0LCBsZW5ndGgpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoc291cmNlLCBBcnJheUJ1ZmZlcikgfHwgc291cmNlLmJ5dGVMZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgc291cmNlIG11c3QgYmUgYSBub24gZW1wdHkgbnVtYmVyIGFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIob2Zmc2V0KSB8fCBvZmZzZXQgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIG9mZnNldCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihsZW5ndGgpIHx8IGxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIGxlbmd0aCBtdXN0IGJlIGEgbnVtYmVyID4gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNvdXJjZS5ieXRlTGVuZ3RoIC0gb2Zmc2V0IDwgQmlnSW50ZWdlckhlbHBlci5CWVRFX0hBU0hfTEVOR1RIKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBTb3VyY2UgYXJyYXkgaGFzIGludmFsaWQgc2l6ZSwgaXQgbXVzdCBiZSBhdCBsZWFzdCAke0JpZ0ludGVnZXJIZWxwZXIuQllURV9IQVNIX0xFTkdUSH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcoc291cmNlKTtcclxuICAgICAgICBsZXQgc2lnbmVkQnl0ZXMgPSBuZXcgSW50OEFycmF5KGRhdGFWaWV3LmJ5dGVMZW5ndGgpO1xyXG4gICAgICAgIGZvciAobGV0IGIgPSAwOyBiIDwgZGF0YVZpZXcuYnl0ZUxlbmd0aDsgYisrKSB7XHJcbiAgICAgICAgICAgIHNpZ25lZEJ5dGVzW2JdID0gZGF0YVZpZXcuZ2V0SW50OChiICsgb2Zmc2V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBpbml0aWFsIHBhZGRpbmcgbGVhdmluZyBhdCBsZWFzdCBvbmUgYnl0ZVxyXG4gICAgICAgIGxldCBwYWRkaW5nT2Zmc2V0ID0gMDtcclxuICAgICAgICBjb25zdCBmaXJzdEJ5dGUgPSBzaWduZWRCeXRlc1swXTtcclxuICAgICAgICBjb25zdCBpc05lZyA9IGZpcnN0Qnl0ZSA8IDA7XHJcbiAgICAgICAgLy8gSWYgdGhlIGZpcnN0IHBhZGRpbmcgY2hhcmFjdGVyIGlzIG5lZ2F0aXZlIHRoZW4gcmV2ZXJzZSB0aGUgMnMgY29tcGxlbWVudFxyXG4gICAgICAgIC8vIGJ1dCBmaXJzdCBzdHJpcCBvZiB0aGUgbGVhZGluZyBwYWRkaW5nXHJcbiAgICAgICAgaWYgKGZpcnN0Qnl0ZSA9PT0gMCB8fCBmaXJzdEJ5dGUgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHdoaWxlIChzaWduZWRCeXRlc1twYWRkaW5nT2Zmc2V0XSA9PT0gZmlyc3RCeXRlICYmIHBhZGRpbmdPZmZzZXQgPCBzaWduZWRCeXRlcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nT2Zmc2V0Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gU3RyaXAgYW55IHBhZGRpbmdcclxuICAgICAgICAgICAgc2lnbmVkQnl0ZXMgPSBzaWduZWRCeXRlcy5zbGljZShwYWRkaW5nT2Zmc2V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzTmVnKSB7XHJcbiAgICAgICAgICAgIEJpZ0ludGVnZXJIZWxwZXIudHdvc0NvbXBsZW1lbnQoc2lnbmVkQnl0ZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaGV4U3RyaW5nID0gaXNOZWcgPyBcIi1cIiA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgZHYgPSBuZXcgRGF0YVZpZXcoc2lnbmVkQnl0ZXMuYnVmZmVyKTtcclxuICAgICAgICBmb3IgKGxldCBoID0gMDsgaCA8IGR2LmJ5dGVMZW5ndGg7IGgrKykge1xyXG4gICAgICAgICAgICBoZXhTdHJpbmcgKz0gYDAwJHtkdi5nZXRVaW50OChoKS50b1N0cmluZygxNil9YC5zbGljZSgtMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBiaWdfaW50ZWdlcl8xLmRlZmF1bHQoaGV4U3RyaW5nLCAxNik7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHN0YXRpYyB0d29zQ29tcGxlbWVudChzaWduZWRCeXRlcykge1xyXG4gICAgICAgIC8vIGlmIHRoZSB3aG9sZSBudW1iZXIgaXMgbmVnYXRpdmUgdGhlblxyXG4gICAgICAgIC8vIGNoYW5nZSB0byAyJ3MgY29tcGxlbWVudHMgYnkgbm90aW5nIGFsbCB0aGUgbnVtYmVyc1xyXG4gICAgICAgIC8vIGFuZCBhZGRpbmcgMSB0byB0aGUgbGFzdCBpLmUuIH5iaWdudW0rMVxyXG4gICAgICAgIGZvciAobGV0IGIgPSAwOyBiIDwgc2lnbmVkQnl0ZXMubGVuZ3RoOyBiKyspIHtcclxuICAgICAgICAgICAgc2lnbmVkQnl0ZXNbYl0gPSB+c2lnbmVkQnl0ZXNbYl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFkZCAxIHRvIGxhc3QgbnVtYmVyLCBpZiB0aGUgbnVtYmVyIGlzIDB4RkYgY29udGludWUgdG8gY2FycnlcclxuICAgICAgICBsZXQgYyA9IHNpZ25lZEJ5dGVzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBzaWduZWRCeXRlc1tjXSsrO1xyXG4gICAgICAgIH0gd2hpbGUgKHNpZ25lZEJ5dGVzW2MtLV0gPT09IDAgJiYgYyA+IDApO1xyXG4gICAgfVxyXG59XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5CaWdJbnRlZ2VySGVscGVyLlJBRElYID0gYmlnX2ludGVnZXJfMS5kZWZhdWx0KDMpO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuQmlnSW50ZWdlckhlbHBlci5NQVhfVFJJVF9WQUxVRSA9IEJpZ0ludGVnZXJIZWxwZXIuUkFESVgubWludXMoMSkuZGl2aWRlKDIpO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuQmlnSW50ZWdlckhlbHBlci5NSU5fVFJJVF9WQUxVRSA9IEJpZ0ludGVnZXJIZWxwZXIuTUFYX1RSSVRfVkFMVUUubmVnYXRlKCk7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5CaWdJbnRlZ2VySGVscGVyLkJJVF9IQVNIX0xFTkdUSCA9IDM4NDtcclxuLyogQGludGVybmFsICovXHJcbkJpZ0ludGVnZXJIZWxwZXIuQllURV9IQVNIX0xFTkdUSCA9IEJpZ0ludGVnZXJIZWxwZXIuQklUX0hBU0hfTEVOR1RIIC8gODtcclxuZXhwb3J0cy5CaWdJbnRlZ2VySGVscGVyID0gQmlnSW50ZWdlckhlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWW1sblNXNTBaV2RsY2tobGJIQmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OW9aV3h3WlhKekwySnBaMGx1ZEdWblpYSklaV3h3WlhJdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQkxEUkZRVUY1UlR0QlFVTjZSU3cwUlVGQmVVVTdRVUZEZWtVc09FUkJRV2xETzBGQlEycERMSE5FUVVGdFJEdEJRVVZ1UkRzN08wZEJSMGM3UVVGRFNEdEpRV0ZKT3pzN096czdUMEZOUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4TFFVRm5RaXhGUVVGRkxFMUJRV01zUlVGQlJTeE5RVUZqTzFGQlF6VkZMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRVZCUVVVc1UwRkJVeXhEUVVGRExFbEJRVWtzUzBGQlN5eERRVUZETEUxQlFVMHNTMEZCU3l4RFFVRkRMRVZCUVVVN1dVRkRPVVFzVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2VVTkJRWGxETEVOQlFVTXNRMEZCUXp0VFFVTndSVHRSUVVWRUxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeE5RVUZOTEVkQlFVY3NRMEZCUXl4RlFVRkZPMWxCUXk5RExFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMR3REUVVGclF5eERRVUZETEVOQlFVTTdVMEZETjBRN1VVRkZSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzVFVGQlRTeEpRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTm9SQ3hOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4cFEwRkJhVU1zUTBGQlF5eERRVUZETzFOQlF6VkVPMUZCUlVRc1NVRkJTU3hOUVVGTkxFZEJRVWNzVFVGQlRTeEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVN1dVRkRhRU1zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2RVUkJRWFZFTEVOQlFVTXNRMEZCUXp0VFFVTnNSanRSUVVWRUxFbEJRVWtzUzBGQlN5eEhRVUZITEhGQ1FVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRE8xRkJSWGhDTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1RVRkJUU3hIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xbEJRMnhETEV0QlFVc3NSMEZCUnl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eHhRa0ZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUTJwR08xRkJSVVFzVDBGQlR5eExRVUZMTEVOQlFVTTdTVUZEYWtJc1EwRkJRenRKUVVWRU96czdPenM3VDBGTlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eExRVUYzUWl4RlFVRkZMRXRCUVdkQ0xFVkJRVVVzVFVGQll5eEZRVUZGTEUxQlFXTTdVVUZEZEVjc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1JVRkJSU3h4UWtGQlRTeERRVUZETEVWQlFVVTdXVUZEY2tNc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNjVU5CUVhGRExFTkJRVU1zUTBGQlF6dFRRVU5vUlR0UlFVVkVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRVZCUVVVc1UwRkJVeXhEUVVGRExFVkJRVVU3V1VGRGVFTXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zWjBOQlFXZERMRU5CUVVNc1EwRkJRenRUUVVNelJEdFJRVVZFTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4TlFVRk5MRWRCUVVjc1EwRkJReXhGUVVGRk8xbEJReTlETEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExHdERRVUZyUXl4RFFVRkRMRU5CUVVNN1UwRkROMFE3VVVGRlJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NUVUZCVFN4SlFVRkpMRU5CUVVNc1JVRkJSVHRaUVVOb1JDeE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhwUTBGQmFVTXNRMEZCUXl4RFFVRkRPMU5CUXpWRU8xRkJSVVFzU1VGQlNTeE5RVUZOTEVkQlFVY3NUVUZCVFN4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVU3V1VGRGFFTXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zZFVSQlFYVkVMRU5CUVVNc1EwRkJRenRUUVVOc1JqdFJRVVZFTEVsQlFVa3NZVUZCWVN4SFFVRkhMRXRCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zY1VKQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETzFGQlJUbEZMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRE4wSXNUVUZCVFN4WlFVRlpMRWRCUVVjc1lVRkJZU3hEUVVGRExFMUJRVTBzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFpRVU5zUlN4aFFVRmhMRWRCUVVjc1dVRkJXU3hEUVVGRExGRkJRVkVzUTBGQlF6dFpRVU4wUXl4SlFVRkpMRk5CUVZNc1IwRkJSeXhaUVVGWkxFTkJRVU1zVTBGQlV5eERRVUZETzFsQlJYWkRMRWxCUVVrc1UwRkJVeXhIUVVGSExHZENRVUZuUWl4RFFVRkRMR05CUVdNc1JVRkJSVHRuUWtGRE4wTXNVMEZCVXl4SFFVRkhMR2RDUVVGblFpeERRVUZETEdOQlFXTXNRMEZCUXp0blFrRkROVU1zWVVGQllTeEhRVUZITEdGQlFXRXNRMEZCUXl4SFFVRkhMRU5CUVVNc2NVSkJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUTJ4RU8xbEJRMFFzUzBGQlN5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhUUVVGVExFTkJRVU1zVlVGQlZTeEZRVUZGTEVOQlFVTTdVMEZET1VNN1VVRkZSQ3hKUVVGSkxFdEJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNjVUpCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVTdXVUZEYkVNc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdG5Ra0ZETjBJc2MwSkJRWE5DTzJkQ1FVTjBRaXhMUVVGTExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU40UlR0VFFVTktPMGxCUTB3c1EwRkJRenRKUVVWRU96czdPenRQUVV0SE8wbEJRMGtzVFVGQlRTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFdEJRWGRDTEVWQlFVVXNWMEZCZDBJc1JVRkJSU3hOUVVGak8xRkJRemxHTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVWQlFVVXNjVUpCUVUwc1EwRkJReXhGUVVGRk8xbEJRM0pETEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExIRkRRVUZ4UXl4RFFVRkRMRU5CUVVNN1UwRkRhRVU3VVVGRlJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEZkQlFWY3NRMEZCUXl4SlFVRkpMRmRCUVZjc1EwRkJReXhWUVVGVkxFdEJRVXNzUTBGQlF5eEZRVUZGTzFsQlEyaEdMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEd0RFFVRnJReXhEUVVGRExFTkJRVU03VTBGRE4wUTdVVUZGUkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1RVRkJUU3hIUVVGSExFTkJRVU1zUlVGQlJUdFpRVU12UXl4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eHJRMEZCYTBNc1EwRkJReXhEUVVGRE8xTkJRemRFTzFGQlJVUXNTVUZCU1N4WFFVRlhMRU5CUVVNc1ZVRkJWU3hIUVVGSExFMUJRVTBzUjBGQlJ5eG5Ra0ZCWjBJc1EwRkJReXhuUWtGQlowSXNSVUZCUlR0WlFVTnlSU3hOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl3eVJFRkJNa1FzWjBKQlFXZENMRU5CUVVNc1owSkJRV2RDTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUTNwSU8xRkJSVVFzZFVOQlFYVkRPMUZCUTNaRExFMUJRVTBzUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXl4VlFVRlZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVVeFF5eEpRVUZKTEZOQlFWTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzFGQlJXNURMRWxCUVVrc1MwRkJTeXhMUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTzFsQlEyUXNkMEpCUVhkQ08xbEJRM2hDTEZOQlFWTXNSMEZCUnl4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEyeERPMUZCUTBRc2IwVkJRVzlGTzFGQlEzQkZMRWxCUVVrc1UwRkJVeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZPMWxCUXpWQ0xGTkJRVk1zUjBGQlJ5eEpRVUZKTEZOQlFWTXNSVUZCUlN4RFFVRkRPMU5CUXk5Q08xRkJRMFFzVFVGQlRTeFBRVUZQTEVkQlFVY3NVMEZCVXl4RFFVRkRMRXRCUVVzc1EwRkJReXhqUVVGakxFTkJRVU1zUTBGQlF6dFJRVVZvUkN3MlFrRkJOa0k3VVVGRE4wSXNUVUZCVFN4WFFVRlhMRWRCUVVjc1NVRkJTU3hUUVVGVExFTkJRVU1zVDBGQlR6dGhRVU53UXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4SFFVRkhMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZGTTBNc1NVRkJTU3hMUVVGTExFdEJRVXNzUTBGQlF5eERRVUZETEVWQlFVVTdXVUZEWkN4blFrRkJaMElzUTBGQlF5eGpRVUZqTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1UwRkRhRVE3VVVGRlJDeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dFJRVVV6UXl4cFJFRkJhVVE3VVVGRGFrUXNTVUZCU1N4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRE8xRkJRMllzVDBGQlR5eERRVUZETEVkQlFVY3NWMEZCVnl4RFFVRkRMRTFCUVUwc1IwRkJSeXhuUWtGQlowSXNRMEZCUXl4blFrRkJaMElzUlVGQlJUdFpRVU12UkN4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMU5CUTJoRE8xRkJRMFFzSzBKQlFTdENPMUZCUXk5Q0xFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NWMEZCVnl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVkQlFVYzdXVUZEZGtNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4WFFVRlhMRU5CUVVNc1YwRkJWeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVOc1JUdEpRVU5NTEVOQlFVTTdTVUZGUkRzN096czdPMDlCVFVjN1NVRkRTU3hOUVVGTkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1RVRkJiVUlzUlVGQlJTeE5RVUZqTEVWQlFVVXNUVUZCWXp0UlFVTXZSU3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hGUVVGRkxGZEJRVmNzUTBGQlF5eEpRVUZKTEUxQlFVMHNRMEZCUXl4VlFVRlZMRXRCUVVzc1EwRkJReXhGUVVGRk8xbEJRM1JGTEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExEWkRRVUUyUXl4RFFVRkRMRU5CUVVNN1UwRkRlRVU3VVVGRlJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NUVUZCVFN4SFFVRkhMRU5CUVVNc1JVRkJSVHRaUVVNdlF5eE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhyUTBGQmEwTXNRMEZCUXl4RFFVRkRPMU5CUXpkRU8xRkJSVVFzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEUxQlFVMHNTVUZCU1N4RFFVRkRMRVZCUVVVN1dVRkRhRVFzVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2FVTkJRV2xETEVOQlFVTXNRMEZCUXp0VFFVTTFSRHRSUVVWRUxFbEJRVWtzVFVGQlRTeERRVUZETEZWQlFWVXNSMEZCUnl4TlFVRk5MRWRCUVVjc1owSkJRV2RDTEVOQlFVTXNaMEpCUVdkQ0xFVkJRVVU3V1VGRGFFVXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zYzBSQlFYTkVMR2RDUVVGblFpeERRVUZETEdkQ1FVRm5RaXhGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVU53U0R0UlFVVkVMRTFCUVUwc1VVRkJVU3hIUVVGSExFbEJRVWtzVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUlhSRExFbEJRVWtzVjBGQlZ5eEhRVUZITEVsQlFVa3NVMEZCVXl4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF6dFJRVU55UkN4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NVVUZCVVN4RFFVRkRMRlZCUVZVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU14UXl4WFFVRlhMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRExFTkJRVU03VTBGRGFrUTdVVUZGUkN4MVJFRkJkVVE3VVVGRGRrUXNTVUZCU1N4aFFVRmhMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRM1JDTEUxQlFVMHNVMEZCVXl4SFFVRkhMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5xUXl4TlFVRk5MRXRCUVVzc1IwRkJSeXhUUVVGVExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlJUVkNMRFJGUVVFMFJUdFJRVU0xUlN4NVEwRkJlVU03VVVGRGVrTXNTVUZCU1N4VFFVRlRMRXRCUVVzc1EwRkJReXhKUVVGSkxGTkJRVk1zUzBGQlN5eERRVUZETEVOQlFVTXNSVUZCUlR0WlFVTnlReXhQUVVGUExGZEJRVmNzUTBGQlF5eGhRVUZoTEVOQlFVTXNTMEZCU3l4VFFVRlRMRWxCUVVrc1lVRkJZU3hIUVVGSExGZEJRVmNzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RlFVRkZPMmRDUVVOMlJpeGhRVUZoTEVWQlFVVXNRMEZCUXp0aFFVTnVRanRaUVVORUxHOUNRVUZ2UWp0WlFVTndRaXhYUVVGWExFZEJRVWNzVjBGQlZ5eERRVUZETEV0QlFVc3NRMEZCUXl4aFFVRmhMRU5CUVVNc1EwRkJRenRUUVVOc1JEdFJRVVZFTEVsQlFVa3NTMEZCU3l4RlFVRkZPMWxCUTFBc1owSkJRV2RDTEVOQlFVTXNZMEZCWXl4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8xTkJRMmhFTzFGQlJVUXNTVUZCU1N4VFFVRlRMRWRCUVVjc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJRenRSUVVOcVF5eE5RVUZOTEVWQlFVVXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdVVUZETlVNc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhWUVVGVkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZEY0VNc1UwRkJVeXhKUVVGSkxFdEJRVXNzUlVGQlJTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU0zUkR0UlFVVkVMRTlCUVU4c2NVSkJRVTBzUTBGQlF5eFRRVUZUTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkRha01zUTBGQlF6dEpRVVZFTEdWQlFXVTdTVUZEVUN4TlFVRk5MRU5CUVVNc1kwRkJZeXhEUVVGRExGZEJRWE5DTzFGQlEyaEVMSFZEUVVGMVF6dFJRVU4yUXl4elJFRkJjMFE3VVVGRGRFUXNNRU5CUVRCRE8xRkJRekZETEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eFhRVUZYTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xbEJRM3BETEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTndRenRSUVVORUxHZEZRVUZuUlR0UlFVTm9SU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eFhRVUZYTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVNdlFpeEhRVUZITzFsQlEwTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU03VTBGRGNFSXNVVUZCVVN4WFFVRlhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRKUVVNNVF5eERRVUZET3p0QlFXeFBSQ3hsUVVGbE8wRkJRMU1zYzBKQlFVc3NSMEZCYzBJc2NVSkJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTTNSQ3hsUVVGbE8wRkJRMU1zSzBKQlFXTXNSMEZCYzBJc1owSkJRV2RDTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRkRWNzWlVGQlpUdEJRVU5UTEN0Q1FVRmpMRWRCUVhOQ0xHZENRVUZuUWl4RFFVRkRMR05CUVdNc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF6dEJRVVZ5Unl4bFFVRmxPMEZCUTFNc1owTkJRV1VzUjBGQlZ5eEhRVUZITEVOQlFVTTdRVUZEZEVRc1pVRkJaVHRCUVVOVExHbERRVUZuUWl4SFFVRlhMR2RDUVVGblFpeERRVUZETEdWQlFXVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRllOVVlzTkVOQmIwOURJbjA9IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgaGFzaF8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvaGFzaFwiKTtcclxuY29uc3QgdHJhbnNhY3Rpb25fMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyYW5zYWN0aW9uXCIpO1xyXG5jb25zdCB0cml0c18xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJpdHNcIik7XHJcbmNvbnN0IGNyeXB0b0Vycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvY3J5cHRvRXJyb3JcIik7XHJcbmNvbnN0IHNwb25nZUZhY3RvcnlfMSA9IHJlcXVpcmUoXCIuLi9mYWN0b3JpZXMvc3BvbmdlRmFjdG9yeVwiKTtcclxuLyoqXHJcbiAqIEhlbHBlciBjbGFzcyBmb3IgdHJhbnNhY3Rpb25zLlxyXG4gKiBDb252ZXJ0ZWQgaHR0cHM6Ly9naXRodWIuY29tL2lvdGFsZWRnZXIvaW90YS5saWIuanMvYmxvYi9tYXN0ZXIvbGliL2NyeXB0by9zaWduaW5nL3NpZ25pbmcuanNcclxuICovXHJcbmNsYXNzIFRyYW5zYWN0aW9uSGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIHRoZSBoYXNoIGZvciBhIHRyYW5zYWN0aW9uLlxyXG4gICAgICogQHBhcmFtIHRyYW5zYWN0aW9uIFRoZSB0cmFuc2FjdGlvbiB0byBnZW5lcmF0ZSB0aGUgaGFzaC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBoYXNoIG9mIHRociB0cmFuc2FjdGlvbi5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGhhc2godHJhbnNhY3Rpb24pIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodHJhbnNhY3Rpb24sIHRyYW5zYWN0aW9uXzEuVHJhbnNhY3Rpb24pKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIHRyYW5zYWN0aW9uIG11c3QgYmUgb2YgdHlwZSBUcmFuc2FjdGlvblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY3VybCA9IHNwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkuY3JlYXRlKFwiY3VybFwiKTtcclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvblRyaXRzID0gdHJpdHNfMS5Ucml0cy5mcm9tVHJ5dGVzKHRyYW5zYWN0aW9uLnRvVHJ5dGVzKCkpLnRvQXJyYXkoKTtcclxuICAgICAgICBjdXJsLmluaXRpYWxpemUoKTtcclxuICAgICAgICBjdXJsLmFic29yYih0cmFuc2FjdGlvblRyaXRzLCAwLCB0cmFuc2FjdGlvblRyaXRzLmxlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgaGFzaFRyaXRzID0gbmV3IEludDhBcnJheShjdXJsLmdldENvbnN0YW50KFwiSEFTSF9MRU5HVEhcIikpO1xyXG4gICAgICAgIGN1cmwuc3F1ZWV6ZShoYXNoVHJpdHMsIDAsIGhhc2hUcml0cy5sZW5ndGgpO1xyXG4gICAgICAgIHJldHVybiBoYXNoXzEuSGFzaC5mcm9tVHJ5dGVzKHRyaXRzXzEuVHJpdHMuZnJvbUFycmF5KGhhc2hUcml0cykudG9Ucnl0ZXMoKSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5UcmFuc2FjdGlvbkhlbHBlciA9IFRyYW5zYWN0aW9uSGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkSEpoYm5OaFkzUnBiMjVJWld4d1pYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmFHVnNjR1Z5Y3k5MGNtRnVjMkZqZEdsdmJraGxiSEJsY2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzTkVWQlFYbEZPMEZCUTNwRkxIbEVRVUZ6UkR0QlFVTjBSQ3gxUlVGQmIwVTdRVUZEY0VVc01rUkJRWGRFTzBGQlEzaEVMSE5FUVVGdFJEdEJRVU51UkN3NFJFRkJNa1E3UVVGRk0wUTdPenRIUVVkSE8wRkJRMGc3U1VGRFNUczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRjNRanRSUVVOMlF5eEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEhsQ1FVRlhMRU5CUVVNc1JVRkJSVHRaUVVOb1JDeE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXcyUTBGQk5rTXNRMEZCUXl4RFFVRkRPMU5CUTNoRk8xRkJSVVFzVFVGQlRTeEpRVUZKTEVkQlFVY3NOa0pCUVdFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkRja1FzVFVGQlRTeG5Ra0ZCWjBJc1IwRkJSeXhoUVVGTExFTkJRVU1zVlVGQlZTeERRVUZETEZkQlFWY3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzFGQlJUVkZMRWxCUVVrc1EwRkJReXhWUVVGVkxFVkJRVVVzUTBGQlF6dFJRVU5zUWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExHZENRVUZuUWl4RlFVRkZMRU5CUVVNc1JVRkJSU3huUWtGQlowSXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVVeFJDeE5RVUZOTEZOQlFWTXNSMEZCUnl4SlFVRkpMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRha1VzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJReXhGUVVGRkxGTkJRVk1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVVTNReXhQUVVGUExGZEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNZVUZCU3l4RFFVRkRMRk5CUVZNc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUTJ4RkxFTkJRVU03UTBGRFNqdEJRWFJDUkN3NFEwRnpRa01pZlE9PSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgYXJyYXlIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL2FycmF5SGVscGVyXCIpO1xyXG5jb25zdCBudW1iZXJIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IHRpbWVTZXJ2aWNlXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3Qvc2VydmljZXMvdGltZVNlcnZpY2VcIik7XHJcbmNvbnN0IGhhc2hfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL2hhc2hcIik7XHJcbmNvbnN0IHRhZ18xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdGFnXCIpO1xyXG5jb25zdCB0cmFuc2FjdGlvbl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJhbnNhY3Rpb25cIik7XHJcbmNvbnN0IHRyeXRlTnVtYmVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cnl0ZU51bWJlclwiKTtcclxuY29uc3QgdHJ5dGVzXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cnl0ZXNcIik7XHJcbmNvbnN0IGNyeXB0b0Vycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvY3J5cHRvRXJyb3JcIik7XHJcbmNvbnN0IHRyYW5zYWN0aW9uSGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy90cmFuc2FjdGlvbkhlbHBlclwiKTtcclxuLyoqXHJcbiAqIEJhc2UgY2xhc3MgZm9yIHByb29mIG9mIHdvcmsuXHJcbiAqL1xyXG5jbGFzcyBQcm9vZk9mV29ya0Jhc2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgUHJvb2ZPZldvcmsuXHJcbiAgICAgKiBAcGFyYW0gdGltZVNlcnZpY2UgU2VydmljZSB0byBnZXQgdGhlIHRpbWUgZm9yIGF0dGFjaG1lbnRzLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcih0aW1lU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuX3RpbWVTZXJ2aWNlID0gdGltZVNlcnZpY2UgfHwgbmV3IHRpbWVTZXJ2aWNlXzEuVGltZVNlcnZpY2UoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWxsb3cgdGhlIHByb29mIG9mIHdvcmsgdG8gcGVyZm9ybSBhbnkgaW5pdGlhbGl6YXRpb24uXHJcbiAgICAgKiBXaWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiB0aGUgaW1wbGVtZW50YXRpb24gaXMgbm90IHN1cHBvcnRlZC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2UuXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBQZXJmb3JtIGEgcHJvb2Ygb2Ygd29yayBvbiB0aGUgZGF0YS5cclxuICAgICAqIEBwYXJhbSB0cnVua1RyYW5zYWN0aW9uIFRoZSB0cnVua1RyYW5zYWN0aW9uIHRvIHVzZSBmb3IgdGhlIHBvdy5cclxuICAgICAqIEBwYXJhbSBicmFuY2hUcmFuc2FjdGlvbiBUaGUgYnJhbmNoVHJhbnNhY3Rpb24gdG8gdXNlIGZvciB0aGUgcG93LlxyXG4gICAgICogQHBhcmFtIHRyeXRlcyBUaGUgdHJ5dGVzIHRvIHBlcmZvcm0gdGhlIHBvdyBvbi5cclxuICAgICAqIEBwYXJhbSBtaW5XZWlnaHRNYWduaXR1ZGUgVGhlIG1pbmltdW0gd2VpZ2h0IG1hZ25pdHVkZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSB0cnl0ZXMgcHJvZHVjZWQgYnkgdGhlIHByb29mIG9mIHdvcmsuXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHBvdyh0cnVua1RyYW5zYWN0aW9uLCBicmFuY2hUcmFuc2FjdGlvbiwgdHJ5dGVzLCBtaW5XZWlnaHRNYWduaXR1ZGUpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodHJ1bmtUcmFuc2FjdGlvbiwgaGFzaF8xLkhhc2gpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIHRydW5rVHJhbnNhY3Rpb24gbXVzdCBiZSBhbiBvYmplY3Qgb2YgdHlwZSBIYXNoXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoYnJhbmNoVHJhbnNhY3Rpb24sIGhhc2hfMS5IYXNoKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBicmFuY2hUcmFuc2FjdGlvbiBtdXN0IGJlIGFuIG9iamVjdCBvZiB0eXBlIEhhc2hcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghYXJyYXlIZWxwZXJfMS5BcnJheUhlbHBlci5pc1R5cGVkKHRyeXRlcywgdHJ5dGVzXzEuVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSB0cnl0ZXMgbXVzdCBiZSBhbiBhcnJheSBvZiB0eXBlIFRyeXRlc1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKG1pbldlaWdodE1hZ25pdHVkZSkgfHwgbWluV2VpZ2h0TWFnbml0dWRlIDw9IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgbWluV2VpZ2h0TWFnbml0dWRlIG11c3QgYmUgPiAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBmaW5hbFRyeXRlcyA9IFtdO1xyXG4gICAgICAgIGxldCBwcmV2aW91c1RyYW5zYWN0aW9uSGFzaDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyeXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IHRyYW5zYWN0aW9uXzEuVHJhbnNhY3Rpb24uZnJvbVRyeXRlcyh0cnl0ZXNbaV0pO1xyXG4gICAgICAgICAgICAvLyBTdGFydCB3aXRoIGxhc3QgaW5kZXggdHJhbnNhY3Rpb25cclxuICAgICAgICAgICAgLy8gQXNzaWduIGl0IHRoZSB0cnVuayAvIGJyYW5jaCB3aGljaCB0aGUgdXNlciBoYXMgc3VwcGxpZWRcclxuICAgICAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSBidW5kbGUsIGNoYWluIHRoZSBidW5kbGUgdHJhbnNhY3Rpb25zIHZpYVxyXG4gICAgICAgICAgICAvLyB0cnVua1RyYW5zYWN0aW9uIHRvZ2V0aGVyXHJcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLmF0dGFjaG1lbnRUaW1lc3RhbXAgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIodGhpcy5fdGltZVNlcnZpY2UubXNTaW5jZUVwb2NoKCkpO1xyXG4gICAgICAgICAgICB0cmFuc2FjdGlvbi5hdHRhY2htZW50VGltZXN0YW1wTG93ZXJCb3VuZCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbU51bWJlcigwKTtcclxuICAgICAgICAgICAgdHJhbnNhY3Rpb24uYXR0YWNobWVudFRpbWVzdGFtcFVwcGVyQm91bmQgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIoUHJvb2ZPZldvcmtCYXNlLk1BWF9USU1FU1RBTVBfVkFMVUUpO1xyXG4gICAgICAgICAgICAvLyBJZiB0aGlzIGlzIHRoZSBmaXJzdCB0cmFuc2FjdGlvbiwgdG8gYmUgcHJvY2Vzc2VkXHJcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGF0IGl0J3MgdGhlIGxhc3QgaW4gdGhlIGJ1bmRsZSBhbmQgdGhlblxyXG4gICAgICAgICAgICAvLyBhc3NpZ24gaXQgdGhlIHN1cHBsaWVkIHRydW5rIGFuZCBicmFuY2ggdHJhbnNhY3Rpb25zXHJcbiAgICAgICAgICAgIGlmIChvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eShwcmV2aW91c1RyYW5zYWN0aW9uSGFzaCkpIHtcclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIGxhc3QgdHJhbnNhY3Rpb24gaW4gdGhlIGJ1bmRsZVxyXG4gICAgICAgICAgICAgICAgaWYgKHRyYW5zYWN0aW9uLmxhc3RJbmRleC50b051bWJlcigpICE9PSB0cmFuc2FjdGlvbi5jdXJyZW50SW5kZXgudG9OdW1iZXIoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiV3JvbmcgYnVuZGxlIG9yZGVyLiBUaGUgYnVuZGxlIHNob3VsZCBiZSBvcmRlcmVkIGluIGRlc2NlbmRpbmcgb3JkZXIgZnJvbSBjdXJyZW50SW5kZXhcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi50cnVua1RyYW5zYWN0aW9uID0gdHJ1bmtUcmFuc2FjdGlvbjtcclxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLmJyYW5jaFRyYW5zYWN0aW9uID0gYnJhbmNoVHJhbnNhY3Rpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi50cnVua1RyYW5zYWN0aW9uID0gcHJldmlvdXNUcmFuc2FjdGlvbkhhc2g7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5icmFuY2hUcmFuc2FjdGlvbiA9IHRydW5rVHJhbnNhY3Rpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbmV3VHJ5dGVzID0gdHJhbnNhY3Rpb24udG9Ucnl0ZXMoKTtcclxuICAgICAgICAgICAgY29uc3Qgc2luZ2xlVHJ5dGVzID0gYXdhaXQgdGhpcy5zaW5nbGVQb3cobmV3VHJ5dGVzLCBtaW5XZWlnaHRNYWduaXR1ZGUpO1xyXG4gICAgICAgICAgICB0cmFuc2FjdGlvbi5ub25jZSA9IHRhZ18xLlRhZy5mcm9tVHJ5dGVzKHNpbmdsZVRyeXRlcy5zdWIodHJhbnNhY3Rpb25fMS5UcmFuc2FjdGlvbi5MRU5HVEggLSB0YWdfMS5UYWcuTEVOR1RILCB0YWdfMS5UYWcuTEVOR1RIKSk7XHJcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgaGFzaCBvZiB0aGUgbmV3IHRyYW5zYWN0aW9uIHdpdGggbm9uY2UgYW5kIHVzZSB0aGF0IGFzIHRoZSBwcmV2aW91cyBoYXNoIGZvciBuZXh0IGVudHJ5XHJcbiAgICAgICAgICAgIGNvbnN0IHJldHVyblRyYW5zYWN0aW9uID0gdHJhbnNhY3Rpb25fMS5UcmFuc2FjdGlvbi5mcm9tVHJ5dGVzKHNpbmdsZVRyeXRlcyk7XHJcbiAgICAgICAgICAgIHByZXZpb3VzVHJhbnNhY3Rpb25IYXNoID0gdHJhbnNhY3Rpb25IZWxwZXJfMS5UcmFuc2FjdGlvbkhlbHBlci5oYXNoKHJldHVyblRyYW5zYWN0aW9uKTtcclxuICAgICAgICAgICAgZmluYWxUcnl0ZXMucHVzaChyZXR1cm5UcmFuc2FjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHJldmVyc2UgdGhlIG9yZGVyIHNvIHRoYXQgaXQncyBhc2NlbmRpbmcgZnJvbSBjdXJyZW50SW5kZXhcclxuICAgICAgICByZXR1cm4gZmluYWxUcnl0ZXMucmV2ZXJzZSgpLm1hcCh0cmFuc2FjdGlvbiA9PiB0cmFuc2FjdGlvbi50b1RyeXRlcygpKTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogVGhlIG1heGltdW0gdGltZXN0YW1wIHZhbHVlIHVzZWQgaW4gcHJvb2Ygb2Ygd29yay5cclxuICovXHJcblByb29mT2ZXb3JrQmFzZS5NQVhfVElNRVNUQU1QX1ZBTFVFID0gKE1hdGgucG93KDMsIDI3KSAtIDEpIC8gMjtcclxuZXhwb3J0cy5Qcm9vZk9mV29ya0Jhc2UgPSBQcm9vZk9mV29ya0Jhc2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISnZiMlpQWmxkdmNtdENZWE5sTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMM0J5YjI5bVQyWlhiM0pyTDNCeWIyOW1UMlpYYjNKclFtRnpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNNRVZCUVhWRk8wRkJRM1pGTERSRlFVRjVSVHRCUVVONlJTdzBSVUZCZVVVN1FVRkZla1VzTWtWQlFYZEZPMEZCUTNoRkxIbEVRVUZ6UkR0QlFVTjBSQ3gxUkVGQmIwUTdRVUZEY0VRc2RVVkJRVzlGTzBGQlEzQkZMSFZGUVVGdlJUdEJRVU53UlN3MlJFRkJNRVE3UVVGRE1VUXNjMFJCUVcxRU8wRkJRMjVFTEc5RlFVRnBSVHRCUVVkcVJUczdSMEZGUnp0QlFVTklPMGxCVTBrN096dFBRVWRITzBsQlEwZ3NXVUZCV1N4WFFVRXdRanRSUVVOc1F5eEpRVUZKTEVOQlFVTXNXVUZCV1N4SFFVRkhMRmRCUVZjc1NVRkJTU3hKUVVGSkxIbENRVUZYTEVWQlFVVXNRMEZCUXp0SlFVTjZSQ3hEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFdEJRVXNzUTBGQlF5eFZRVUZWTzFGQlEyNUNMRTlCUVU4c1QwRkJUeXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzBsQlF6ZENMRU5CUVVNN1NVRkZSRHM3T3pzN096dFBRVTlITzBsQlEwa3NTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhuUWtGQmMwSXNSVUZCUlN4cFFrRkJkVUlzUlVGQlJTeE5RVUZuUWl4RlFVRkZMR3RDUVVFd1FqdFJRVU14Unl4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNaMEpCUVdkQ0xFVkJRVVVzVjBGQlNTeERRVUZETEVWQlFVVTdXVUZET1VNc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNjVVJCUVhGRUxFTkJRVU1zUTBGQlF6dFRRVU5vUmp0UlFVTkVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4cFFrRkJhVUlzUlVGQlJTeFhRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTXZReXhOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4elJFRkJjMFFzUTBGQlF5eERRVUZETzFOQlEycEdPMUZCUTBRc1NVRkJTU3hEUVVGRExIbENRVUZYTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1JVRkJSU3hsUVVGTkxFTkJRVU1zUlVGQlJUdFpRVU4wUXl4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5dzBRMEZCTkVNc1EwRkJReXhEUVVGRE8xTkJRM1pGTzFGQlEwUXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVTBGQlV5eERRVUZETEd0Q1FVRnJRaXhEUVVGRExFbEJRVWtzYTBKQlFXdENMRWxCUVVrc1EwRkJReXhGUVVGRk8xbEJRM2hGTEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExHOURRVUZ2UXl4RFFVRkRMRU5CUVVNN1UwRkRMMFE3VVVGRlJDeE5RVUZOTEZkQlFWY3NSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkZka0lzU1VGQlNTeDFRa0ZCTmtJc1EwRkJRenRSUVVWc1F5eExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVOd1F5eE5RVUZOTEZkQlFWY3NSMEZCUnl4NVFrRkJWeXhEUVVGRExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVWMFJDeHZRMEZCYjBNN1dVRkRjRU1zTWtSQlFUSkVPMWxCUXpORUxEQkVRVUV3UkR0WlFVTXhSQ3cwUWtGQk5FSTdXVUZETlVJc1YwRkJWeXhEUVVGRExHMUNRVUZ0UWl4SFFVRkhMSGxDUVVGWExFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1dVRkJXU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU16Uml4WFFVRlhMRU5CUVVNc05rSkJRVFpDTEVkQlFVY3NlVUpCUVZjc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEZEVVc1YwRkJWeXhEUVVGRExEWkNRVUUyUWl4SFFVRkhMSGxDUVVGWExFTkJRVU1zVlVGQlZTeERRVUZETEdWQlFXVXNRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eERRVUZETzFsQlJYaEhMRzlFUVVGdlJEdFpRVU53UkN4elJFRkJjMFE3V1VGRGRFUXNkVVJCUVhWRU8xbEJSWFpFTEVsQlFVa3NNa0pCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zZFVKQlFYVkNMRU5CUVVNc1JVRkJSVHRuUWtGREwwTXNNRU5CUVRCRE8yZENRVU14UXl4SlFVRkpMRmRCUVZjc1EwRkJReXhUUVVGVExFTkJRVU1zVVVGQlVTeEZRVUZGTEV0QlFVc3NWMEZCVnl4RFFVRkRMRmxCUVZrc1EwRkJReXhSUVVGUkxFVkJRVVVzUlVGQlJUdHZRa0ZETVVVc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNkMFpCUVhkR0xFTkJRVU1zUTBGQlF6dHBRa0ZEYmtnN1owSkJRMFFzVjBGQlZ5eERRVUZETEdkQ1FVRm5RaXhIUVVGSExHZENRVUZuUWl4RFFVRkRPMmRDUVVOb1JDeFhRVUZYTEVOQlFVTXNhVUpCUVdsQ0xFZEJRVWNzYVVKQlFXbENMRU5CUVVNN1lVRkRja1E3YVVKQlFVMDdaMEpCUTBnc1YwRkJWeXhEUVVGRExHZENRVUZuUWl4SFFVRkhMSFZDUVVGMVFpeERRVUZETzJkQ1FVTjJSQ3hYUVVGWExFTkJRVU1zYVVKQlFXbENMRWRCUVVjc1owSkJRV2RDTEVOQlFVTTdZVUZEY0VRN1dVRkZSQ3hOUVVGTkxGTkJRVk1zUjBGQlJ5eFhRVUZYTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1dVRkZla01zVFVGQlRTeFpRVUZaTEVkQlFVY3NUVUZCVFN4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExGTkJRVk1zUlVGQlJTeHJRa0ZCYTBJc1EwRkJReXhEUVVGRE8xbEJSWHBGTEZkQlFWY3NRMEZCUXl4TFFVRkxMRWRCUVVjc1UwRkJSeXhEUVVGRExGVkJRVlVzUTBGQlF5eFpRVUZaTEVOQlFVTXNSMEZCUnl4RFFVRkRMSGxDUVVGWExFTkJRVU1zVFVGQlRTeEhRVUZITEZOQlFVY3NRMEZCUXl4TlFVRk5MRVZCUVVVc1UwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZGYkVjc2QwZEJRWGRITzFsQlEzaEhMRTFCUVUwc2FVSkJRV2xDTEVkQlFVY3NlVUpCUVZjc1EwRkJReXhWUVVGVkxFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdXVUZETDBRc2RVSkJRWFZDTEVkQlFVY3NjVU5CUVdsQ0xFTkJRVU1zU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFTkJRVU03V1VGRmNFVXNWMEZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4RFFVRkRPMU5CUTNaRE8xRkJRMFFzTmtSQlFUWkVPMUZCUXpkRUxFOUJRVThzVjBGQlZ5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhYUVVGWExFTkJRVU1zUlVGQlJTeERRVUZETEZkQlFWY3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRelZGTEVOQlFVTTdPMEZCTlVaRU96dEhRVVZITzBGQlEyOUNMRzFEUVVGdFFpeEhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJTbTVHTERCRFFYTkhReUo5IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBudW1iZXJIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGNyeXB0b0Vycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvY3J5cHRvRXJyb3JcIik7XHJcbi8qKlxyXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiBJU3BvbmdlIHVzaW5nIEN1cmwgYWxnb3JpdGhtLlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW90YWxlZGdlci9pb3RhLmxpYi5qcy9ibG9iL21hc3Rlci9saWIvY3J5cHRvL2N1cmwvY3VybC5qc1xyXG4gKi9cclxuY2xhc3MgQ3VybCB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBDdXJsLlxyXG4gICAgICogQHBhcmFtIHJvdW5kcyBUaGUgbnVtYmVyIG9mIHJvdW5kcyB0byB1c2UuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHJvdW5kcyA9IEN1cmwuTlVNQkVSX09GX1JPVU5EUykge1xyXG4gICAgICAgIHRoaXMuX251bWJlck9mUm91bmRzID0gcm91bmRzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGNvbnN0YW50IGZvciB0aGUgc3BvbmUuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgY29uc3RhbnQgdG8gZ2V0LlxyXG4gICAgICogQHJldHVybnMgVGhlIGNvbnN0YW50LlxyXG4gICAgICovXHJcbiAgICBnZXRDb25zdGFudChuYW1lKSB7XHJcbiAgICAgICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJOVU1CRVJfT0ZfUk9VTkRTXCI6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9udW1iZXJPZlJvdW5kcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwiSEFTSF9MRU5HVEhcIjpcclxuICAgICAgICAgICAgY2FzZSBcIlNUQVRFX0xFTkdUSFwiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBDdXJsW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OiB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihgVW5rbm93biBjb25zdGFudCByZXF1ZXN0ZWQgJHtuYW1lfWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBzdGF0ZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBzdGF0ZS5cclxuICAgICAqL1xyXG4gICAgZ2V0U3RhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXNlIHRoZSBoYXNoZXIuXHJcbiAgICAgKiBAcGFyYW0gc3RhdGUgVGhlIGluaXRpYWwgc3RhdGUgZm9yIHRoZSBoYXNoZXIuXHJcbiAgICAgKi9cclxuICAgIGluaXRpYWxpemUoc3RhdGUpIHtcclxuICAgICAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gbmV3IEludDhBcnJheShDdXJsLlNUQVRFX0xFTkdUSCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXNldCB0aGUgaGFzaGVyLlxyXG4gICAgICovXHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWJzb3JiIHRyaXRzIGludG8gdGhlIGhhc2guXHJcbiAgICAgKiBAcGFyYW0gdHJpdHMgVGhlIHRyaXRzIHRvIGFic29yYi5cclxuICAgICAqIEBwYXJhbSBvZmZzZXQgVGhlIG9mZnNldCBpbnRvIHRoZSB0cml0cyB0byBhYnNvcmIgZnJvbS5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggVGhlIG51bWJlciBvZiB0cml0cyB0byBhYnNvcmIuXHJcbiAgICAgKi9cclxuICAgIGFic29yYih0cml0cywgb2Zmc2V0LCBsZW5ndGgpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodHJpdHMsIEludDhBcnJheSkgfHwgdHJpdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVHJpdHMgbXVzdCBiZSBhIG5vbiBlbXB0eSBJbnQ4QXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihvZmZzZXQpIHx8IG9mZnNldCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJPZmZzZXQgbXVzdCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobGVuZ3RoKSB8fCBsZW5ndGggPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiTGVuZ3RoIG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxlbmd0aCArIG9mZnNldCA+IHRyaXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBvZmZzZXQgKyBsZW5ndGggaXMgYmV5b25kIHRoZSBsZW5ndGggb2YgdGhlIHRyaXRzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbG9jYWxPZmZzZXQgPSBvZmZzZXQ7XHJcbiAgICAgICAgbGV0IGxvY2FsTGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgICAgICBjb25zdCBsaW1pdCA9IGxvY2FsTGVuZ3RoIDwgQ3VybC5IQVNIX0xFTkdUSCA/IGxvY2FsTGVuZ3RoIDogQ3VybC5IQVNIX0xFTkdUSDtcclxuICAgICAgICAgICAgd2hpbGUgKGkgPCBsaW1pdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVbaSsrXSA9IHRyaXRzW2xvY2FsT2Zmc2V0KytdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtKCk7XHJcbiAgICAgICAgICAgIGxvY2FsTGVuZ3RoIC09IEN1cmwuSEFTSF9MRU5HVEg7XHJcbiAgICAgICAgfSB3aGlsZSAobG9jYWxMZW5ndGggPiAwKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU3F1ZWV6ZSB0cml0cyBpbnRvIHRoZSBoYXNoLlxyXG4gICAgICogQHBhcmFtIHRyaXRzIFRoZSB0cml0cyB0byBzcXVlZXplLlxyXG4gICAgICogQHBhcmFtIG9mZnNldCBUaGUgb2Zmc2V0IGludG8gdGhlIHRyaXRzIHRvIHNxdWVlemUgZnJvbS5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggVGhlIG51bWJlciBvZiB0cml0cyB0byBzcXVlZXplLlxyXG4gICAgICovXHJcbiAgICBzcXVlZXplKHRyaXRzLCBvZmZzZXQsIGxlbmd0aCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0cml0cywgSW50OEFycmF5KSB8fCB0cml0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUcml0cyBtdXN0IGJlIGEgbm9uIGVtcHR5IEludDhBcnJheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKG9mZnNldCkgfHwgb2Zmc2V0IDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIk9mZnNldCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihsZW5ndGgpIHx8IGxlbmd0aCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJMZW5ndGggbXVzdCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGVuZ3RoICsgb2Zmc2V0ID4gdHJpdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIG9mZnNldCArIGxlbmd0aCBpcyBiZXlvbmQgdGhlIGxlbmd0aCBvZiB0aGUgdHJpdHNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsb2NhbE9mZnNldCA9IG9mZnNldDtcclxuICAgICAgICBsZXQgbG9jYWxMZW5ndGggPSBsZW5ndGg7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbWl0ID0gbG9jYWxMZW5ndGggPCBDdXJsLkhBU0hfTEVOR1RIID8gbGVuZ3RoIDogQ3VybC5IQVNIX0xFTkdUSDtcclxuICAgICAgICAgICAgd2hpbGUgKGkgPCBsaW1pdCkge1xyXG4gICAgICAgICAgICAgICAgdHJpdHNbbG9jYWxPZmZzZXQrK10gPSB0aGlzLl9zdGF0ZVtpKytdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtKCk7XHJcbiAgICAgICAgICAgIGxvY2FsTGVuZ3RoIC09IEN1cmwuSEFTSF9MRU5HVEg7XHJcbiAgICAgICAgfSB3aGlsZSAobG9jYWxMZW5ndGggPiAwKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVHJhbnNmb3JtIHRoZSBoYXNoLlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHRyYW5zZm9ybSgpIHtcclxuICAgICAgICBsZXQgc3RhdGVDb3B5O1xyXG4gICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgcm91bmQgPSAwOyByb3VuZCA8IHRoaXMuX251bWJlck9mUm91bmRzOyByb3VuZCsrKSB7XHJcbiAgICAgICAgICAgIHN0YXRlQ29weSA9IG5ldyBJbnQ4QXJyYXkodGhpcy5fc3RhdGUuc2xpY2UoKSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ3VybC5TVEFURV9MRU5HVEg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVbaV0gPSBDdXJsLlRSVVRIX1RBQkxFW3N0YXRlQ29weVtpbmRleF0gKyAoc3RhdGVDb3B5W2luZGV4ICs9IChpbmRleCA8IDM2NSA/IDM2NCA6IC0zNjUpXSA8PCAyKSArIDVdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkN1cmwuSEFTSF9MRU5HVEggPSAyNDM7XHJcbkN1cmwuTlVNQkVSX09GX1JPVU5EUyA9IDgxO1xyXG5DdXJsLlNUQVRFX0xFTkdUSCA9IEN1cmwuSEFTSF9MRU5HVEggKiAzO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuQ3VybC5UUlVUSF9UQUJMRSA9IG5ldyBJbnQ4QXJyYXkoWzEsIDAsIC0xLCAyLCAxLCAtMSwgMCwgMiwgLTEsIDEsIDBdKTtcclxuZXhwb3J0cy5DdXJsID0gQ3VybDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTNWeWJDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5emNHOXVaMlZ6TDJOMWNtd3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQkxEUkZRVUY1UlR0QlFVTjZSU3cwUlVGQmVVVTdRVUZEZWtVc2MwUkJRVzFFTzBGQlIyNUVPenM3UjBGSFJ6dEJRVU5JTzBsQllVazdPenRQUVVkSE8wbEJRMGdzV1VGQldTeFRRVUZwUWl4SlFVRkpMRU5CUVVNc1owSkJRV2RDTzFGQlF6bERMRWxCUVVrc1EwRkJReXhsUVVGbExFZEJRVWNzVFVGQlRTeERRVUZETzBsQlEyeERMRU5CUVVNN1NVRkZSRHM3T3p0UFFVbEhPMGxCUTBrc1YwRkJWeXhEUVVGRExFbEJRVms3VVVGRE0wSXNVVUZCVVN4SlFVRkpMRVZCUVVVN1dVRkRWaXhMUVVGTExHdENRVUZyUWl4RFFVRkRMRU5CUVVNN1owSkJRM0pDTEU5QlFVOHNTVUZCU1N4RFFVRkRMR1ZCUVdVc1EwRkJRenRoUVVNdlFqdFpRVU5FTEV0QlFVc3NZVUZCWVN4RFFVRkRPMWxCUTI1Q0xFdEJRVXNzWTBGQll6dG5Ra0ZEYmtJN2IwSkJRMGtzVDBGQlR5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN2FVSkJRM0pDTzFsQlEwUXNUMEZCVHl4RFFVRkRMRU5CUVVNc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNPRUpCUVRoQ0xFbEJRVWtzUlVGQlJTeERRVUZETEVOQlFVTTdVMEZEZUVVN1NVRkRUQ3hEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1VVRkJVVHRSUVVOWUxFOUJRVThzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXp0SlFVTjJRaXhEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1ZVRkJWU3hEUVVGRExFdEJRV2xDTzFGQlF5OUNMRWxCUVVrc1MwRkJTeXhGUVVGRk8xbEJRMUFzU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4TFFVRkxMRU5CUVVNN1UwRkRka0k3WVVGQlRUdFpRVU5JTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1NVRkJTU3hUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMU5CUTJ4RU8wbEJRMHdzUTBGQlF6dEpRVVZFT3p0UFFVVkhPMGxCUTBrc1MwRkJTenRSUVVOU0xFbEJRVWtzUTBGQlF5eFZRVUZWTEVWQlFVVXNRMEZCUXp0SlFVTjBRaXhEUVVGRE8wbEJSVVE3T3pzN08wOUJTMGM3U1VGRFNTeE5RVUZOTEVOQlFVTXNTMEZCWjBJc1JVRkJSU3hOUVVGakxFVkJRVVVzVFVGQll6dFJRVU14UkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RlFVRkZMRk5CUVZNc1EwRkJReXhKUVVGSkxFdEJRVXNzUTBGQlF5eE5RVUZOTEV0QlFVc3NRMEZCUXl4RlFVRkZPMWxCUXpsRUxFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMSEZEUVVGeFF5eERRVUZETEVOQlFVTTdVMEZEYUVVN1VVRkRSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzVFVGQlRTeEhRVUZITEVOQlFVTXNSVUZCUlR0WlFVTXZReXhOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl3NFFrRkJPRUlzUTBGQlF5eERRVUZETzFOQlEzcEVPMUZCUTBRc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFMUJRVTBzUjBGQlJ5eERRVUZETEVWQlFVVTdXVUZETDBNc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNPRUpCUVRoQ0xFTkJRVU1zUTBGQlF6dFRRVU42UkR0UlFVTkVMRWxCUVVrc1RVRkJUU3hIUVVGSExFMUJRVTBzUjBGQlJ5eExRVUZMTEVOQlFVTXNUVUZCVFN4RlFVRkZPMWxCUTJoRExFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMSFZFUVVGMVJDeERRVUZETEVOQlFVTTdVMEZEYkVZN1VVRkZSQ3hKUVVGSkxGZEJRVmNzUjBGQlJ5eE5RVUZOTEVOQlFVTTdVVUZEZWtJc1NVRkJTU3hYUVVGWExFZEJRVWNzVFVGQlRTeERRVUZETzFGQlJYcENMRWRCUVVjN1dVRkRReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZEVml4TlFVRk5MRXRCUVVzc1IwRkJSeXhYUVVGWExFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRPMWxCUlRsRkxFOUJRVThzUTBGQlF5eEhRVUZITEV0QlFVc3NSVUZCUlR0blFrRkRaQ3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETEVOQlFVTTdZVUZETTBNN1dVRkZSQ3hKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTTdXVUZGYWtJc1YwRkJWeXhKUVVGSkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTTdVMEZEYmtNc1VVRkJVU3hYUVVGWExFZEJRVWNzUTBGQlF5eEZRVUZGTzBsQlF6bENMRU5CUVVNN1NVRkZSRHM3T3pzN1QwRkxSenRKUVVOSkxFOUJRVThzUTBGQlF5eExRVUZuUWl4RlFVRkZMRTFCUVdNc1JVRkJSU3hOUVVGak8xRkJRek5FTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVWQlFVVXNVMEZCVXl4RFFVRkRMRWxCUVVrc1MwRkJTeXhEUVVGRExFMUJRVTBzUzBGQlN5eERRVUZETEVWQlFVVTdXVUZET1VRc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNjVU5CUVhGRExFTkJRVU1zUTBGQlF6dFRRVU5vUlR0UlFVTkVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hOUVVGTkxFZEJRVWNzUTBGQlF5eEZRVUZGTzFsQlF5OURMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETERoQ1FVRTRRaXhEUVVGRExFTkJRVU03VTBGRGVrUTdVVUZEUkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1RVRkJUU3hIUVVGSExFTkJRVU1zUlVGQlJUdFpRVU12UXl4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5dzRRa0ZCT0VJc1EwRkJReXhEUVVGRE8xTkJRM3BFTzFGQlEwUXNTVUZCU1N4TlFVRk5MRWRCUVVjc1RVRkJUU3hIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVTdXVUZEYUVNc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNkVVJCUVhWRUxFTkJRVU1zUTBGQlF6dFRRVU5zUmp0UlFVVkVMRWxCUVVrc1YwRkJWeXhIUVVGSExFMUJRVTBzUTBGQlF6dFJRVU42UWl4SlFVRkpMRmRCUVZjc1IwRkJSeXhOUVVGTkxFTkJRVU03VVVGRmVrSXNSMEZCUnp0WlFVVkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU5XTEUxQlFVMHNTMEZCU3l4SFFVRkhMRmRCUVZjc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTTdXVUZGZWtVc1QwRkJUeXhEUVVGRExFZEJRVWNzUzBGQlN5eEZRVUZGTzJkQ1FVTmtMRXRCUVVzc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dGhRVU16UXp0WlFVVkVMRWxCUVVrc1EwRkJReXhUUVVGVExFVkJRVVVzUTBGQlF6dFpRVVZxUWl4WFFVRlhMRWxCUVVrc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF6dFRRVU51UXl4UlFVRlJMRmRCUVZjc1IwRkJSeXhEUVVGRExFVkJRVVU3U1VGRE9VSXNRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5MTEZOQlFWTTdVVUZEWWl4SlFVRkpMRk5CUVc5Q0xFTkJRVU03VVVGRGVrSXNTVUZCU1N4TFFVRkxMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJSV1FzUzBGQlN5eEpRVUZKTEV0QlFVc3NSMEZCUnl4RFFVRkRMRVZCUVVVc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eGxRVUZsTEVWQlFVVXNTMEZCU3l4RlFVRkZMRVZCUVVVN1dVRkRka1FzVTBGQlV5eEhRVUZITEVsQlFVa3NVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVVXZReXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExGbEJRVmtzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0blFrRkZlRU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVOdVNEdFRRVU5LTzBsQlEwd3NRMEZCUXpzN1FVRTNTbk5DTEdkQ1FVRlhMRWRCUVZjc1IwRkJSeXhEUVVGRE8wRkJRekZDTEhGQ1FVRm5RaXhIUVVGWExFVkJRVVVzUTBGQlF6dEJRVU01UWl4cFFrRkJXU3hIUVVGWExFbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NRMEZCUXl4RFFVRkRPMEZCUlc1RkxHVkJRV1U3UVVGRFV5eG5Ra0ZCVnl4SFFVRmpMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UVVGT2VrY3NiMEpCSzBwREluMD0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3Qgc2hhM18xID0gcmVxdWlyZShcIi4uL2RpZ2VzdHMvc2hhM1wiKTtcclxuY29uc3QgY3J5cHRvRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9jcnlwdG9FcnJvclwiKTtcclxuY29uc3QgYmlnSW50ZWdlckhlbHBlcl8xID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvYmlnSW50ZWdlckhlbHBlclwiKTtcclxuLyoqXHJcbiAqIEltcGxlbWVudGF0aW9uIG9mIElTcG9uZ2UgdXNpbmcgS2VybCBhbGdvcml0aG0uXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb3RhbGVkZ2VyL2lyaS9ibG9iL2Rldi9zcmMvbWFpbi9qYXZhL2NvbS9pb3RhL2lyaS9oYXNoL0tlcmwuamF2YVxyXG4gKi9cclxuY2xhc3MgS2VybCB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBLZXJsLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9rZWNjYWsgPSBuZXcgc2hhM18xLlNoYTMoMzg0LCBzaGEzXzEuU2hhMy5LRUNDQUtfUEFERElORywgMzg0KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBjb25zdGFudCBmb3IgdGhlIHNwb25lLlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIGNvbnN0YW50IHRvIGdldC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBjb25zdGFudC5cclxuICAgICAqL1xyXG4gICAgZ2V0Q29uc3RhbnQobmFtZSkge1xyXG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiSEFTSF9MRU5HVEhcIjpcclxuICAgICAgICAgICAgY2FzZSBcIkJJVF9IQVNIX0xFTkdUSFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiQllURV9IQVNIX0xFTkdUSFwiOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBLZXJsW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OiB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihgVW5rbm93biBjb25zdGFudCByZXF1ZXN0ZWQgJHtuYW1lfWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBzdGF0ZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBzdGF0ZS5cclxuICAgICAqL1xyXG4gICAgZ2V0U3RhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGlzZSB0aGUgaGFzaGVyLlxyXG4gICAgICogQHBhcmFtIHN0YXRlIFRoZSBpbml0aWFsIHN0YXRlIGZvciB0aGUgaGFzaGVyLlxyXG4gICAgICovXHJcbiAgICBpbml0aWFsaXplKHN0YXRlKSB7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJlc2V0IHRoZSBoYXNoZXIuXHJcbiAgICAgKi9cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuX2tlY2Nhay5yZXNldCgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBYnNvcmIgdHJpdHMgaW50byB0aGUgaGFzaC5cclxuICAgICAqIEBwYXJhbSB0cml0cyBUaGUgdHJpdHMgdG8gYWJzb3JiLlxyXG4gICAgICogQHBhcmFtIG9mZnNldCBUaGUgb2Zmc2V0IGludG8gdGhlIHRyaXRzIHRvIGFic29yYiBmcm9tLlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBUaGUgbnVtYmVyIG9mIHRyaXRzIHRvIGFic29yYi5cclxuICAgICAqL1xyXG4gICAgYWJzb3JiKHRyaXRzLCBvZmZzZXQsIGxlbmd0aCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0cml0cywgSW50OEFycmF5KSB8fCB0cml0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUcml0cyBtdXN0IGJlIGEgbm9uIGVtcHR5IEludDhBcnJheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKG9mZnNldCkgfHwgb2Zmc2V0IDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIk9mZnNldCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihsZW5ndGgpIHx8IGxlbmd0aCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJMZW5ndGggbXVzdCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGVuZ3RoICsgb2Zmc2V0ID4gdHJpdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIG9mZnNldCArIGxlbmd0aCBpcyBiZXlvbmQgdGhlIGxlbmd0aCBvZiB0aGUgdHJpdHNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZW5ndGggJSAyNDMgIT09IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoYExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgJHtLZXJsLkhBU0hfTEVOR1RIfWAsIHsgbGVuZ3RoIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbG9jYWxPZmZzZXQgPSBvZmZzZXQ7XHJcbiAgICAgICAgbGV0IGxvY2FsTGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgY29uc3QgdHJpdFN0YXRlID0gdHJpdHMuc2xpY2UobG9jYWxPZmZzZXQsIGxvY2FsT2Zmc2V0ICsgS2VybC5IQVNIX0xFTkdUSCk7XHJcbiAgICAgICAgICAgIHRyaXRTdGF0ZVtLZXJsLkhBU0hfTEVOR1RIIC0gMV0gPSAwO1xyXG4gICAgICAgICAgICBjb25zdCBiaWdJbnQgPSBiaWdJbnRlZ2VySGVscGVyXzEuQmlnSW50ZWdlckhlbHBlci50cml0c1RvQmlnSW50ZWdlcih0cml0U3RhdGUsIDAsIHRyaXRTdGF0ZS5sZW5ndGgpO1xyXG4gICAgICAgICAgICBjb25zdCBieXRlU3RhdGUgPSBuZXcgQXJyYXlCdWZmZXIoS2VybC5CWVRFX0hBU0hfTEVOR1RIKTtcclxuICAgICAgICAgICAgYmlnSW50ZWdlckhlbHBlcl8xLkJpZ0ludGVnZXJIZWxwZXIuYmlnSW50ZWdlclRvQnl0ZXMoYmlnSW50LCBieXRlU3RhdGUsIDApO1xyXG4gICAgICAgICAgICB0aGlzLl9rZWNjYWsudXBkYXRlKGJ5dGVTdGF0ZSk7XHJcbiAgICAgICAgICAgIGxvY2FsT2Zmc2V0ICs9IEtlcmwuSEFTSF9MRU5HVEg7XHJcbiAgICAgICAgICAgIGxvY2FsTGVuZ3RoIC09IEtlcmwuSEFTSF9MRU5HVEg7XHJcbiAgICAgICAgfSB3aGlsZSAobG9jYWxMZW5ndGggPiAwKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU3F1ZWV6ZSB0cml0cyBpbnRvIHRoZSBoYXNoLlxyXG4gICAgICogQHBhcmFtIHRyaXRzIFRoZSB0cml0cyB0byBzcXVlZXplLlxyXG4gICAgICogQHBhcmFtIG9mZnNldCBUaGUgb2Zmc2V0IGludG8gdGhlIHRyaXRzIHRvIHNxdWVlemUgZnJvbS5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggVGhlIG51bWJlciBvZiB0cml0cyB0byBzcXVlZXplLlxyXG4gICAgICovXHJcbiAgICBzcXVlZXplKHRyaXRzLCBvZmZzZXQsIGxlbmd0aCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0cml0cywgSW50OEFycmF5KSB8fCB0cml0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUcml0cyBtdXN0IGJlIGEgbm9uIGVtcHR5IEludDhBcnJheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKG9mZnNldCkgfHwgb2Zmc2V0IDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIk9mZnNldCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihsZW5ndGgpIHx8IGxlbmd0aCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJMZW5ndGggbXVzdCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGVuZ3RoICsgb2Zmc2V0ID4gdHJpdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIG9mZnNldCArIGxlbmd0aCBpcyBiZXlvbmQgdGhlIGxlbmd0aCBvZiB0aGUgdHJpdHNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZW5ndGggJSAyNDMgIT09IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoYExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgJHtLZXJsLkhBU0hfTEVOR1RIfWAsIHsgbGVuZ3RoIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbG9jYWxPZmZzZXQgPSBvZmZzZXQ7XHJcbiAgICAgICAgbGV0IGxvY2FsTGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgY29uc3QgYnl0ZVN0YXRlQnVmZmVyID0gdGhpcy5fa2VjY2FrLmRpZ2VzdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBiaWdJbnQgPSBiaWdJbnRlZ2VySGVscGVyXzEuQmlnSW50ZWdlckhlbHBlci5ieXRlc1RvQmlnSW50ZWdlcihieXRlU3RhdGVCdWZmZXIsIDAsIEtlcmwuQllURV9IQVNIX0xFTkdUSCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyaXRTdGF0ZSA9IG5ldyBJbnQ4QXJyYXkoS2VybC5IQVNIX0xFTkdUSCk7XHJcbiAgICAgICAgICAgIGJpZ0ludGVnZXJIZWxwZXJfMS5CaWdJbnRlZ2VySGVscGVyLmJpZ0ludGVnZXJUb1RyaXRzKGJpZ0ludCwgdHJpdFN0YXRlLCAwLCBLZXJsLkhBU0hfTEVOR1RIKTtcclxuICAgICAgICAgICAgdHJpdFN0YXRlW0tlcmwuSEFTSF9MRU5HVEggLSAxXSA9IDA7XHJcbiAgICAgICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICAgICAgd2hpbGUgKGkgPCBLZXJsLkhBU0hfTEVOR1RIKSB7XHJcbiAgICAgICAgICAgICAgICB0cml0c1tsb2NhbE9mZnNldCsrXSA9IHRyaXRTdGF0ZVtpKytdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGR2ID0gbmV3IERhdGFWaWV3KGJ5dGVTdGF0ZUJ1ZmZlcik7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBkdi5ieXRlTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGR2LnNldFVpbnQ4KGksIGR2LmdldFVpbnQ4KGkpIF4gMHhGRik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fa2VjY2FrLnVwZGF0ZShieXRlU3RhdGVCdWZmZXIpO1xyXG4gICAgICAgICAgICBsb2NhbExlbmd0aCAtPSBLZXJsLkhBU0hfTEVOR1RIO1xyXG4gICAgICAgIH0gd2hpbGUgKGxvY2FsTGVuZ3RoID4gMCk7XHJcbiAgICB9XHJcbn1cclxuLyogQGludGVybmFsICovXHJcbktlcmwuSEFTSF9MRU5HVEggPSAyNDM7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5LZXJsLkJJVF9IQVNIX0xFTkdUSCA9IDM4NDtcclxuLyogQGludGVybmFsICovXHJcbktlcmwuQllURV9IQVNIX0xFTkdUSCA9IEtlcmwuQklUX0hBU0hfTEVOR1RIIC8gODtcclxuZXhwb3J0cy5LZXJsID0gS2VybDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYTJWeWJDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5emNHOXVaMlZ6TDJ0bGNtd3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQkxEUkZRVUY1UlR0QlFVTjZSU3cwUlVGQmVVVTdRVUZEZWtVc01FTkJRWFZETzBGQlEzWkRMSE5FUVVGdFJEdEJRVU51UkN4clJVRkJLMFE3UVVGSEwwUTdPenRIUVVkSE8wRkJRMGc3U1VGWFNUczdUMEZGUnp0SlFVTklPMUZCUTBrc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eEpRVUZKTEZkQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1YwRkJTU3hEUVVGRExHTkJRV01zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0SlFVTXpSQ3hEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxGZEJRVmNzUTBGQlF5eEpRVUZaTzFGQlF6TkNMRkZCUVZFc1NVRkJTU3hGUVVGRk8xbEJRMVlzUzBGQlN5eGhRVUZoTEVOQlFVTTdXVUZEYmtJc1MwRkJTeXhwUWtGQmFVSXNRMEZCUXp0WlFVTjJRaXhMUVVGTExHdENRVUZyUWp0blFrRkRka0k3YjBKQlEwa3NUMEZCVHl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03YVVKQlEzSkNPMWxCUTBRc1QwRkJUeXhEUVVGRExFTkJRVU1zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc09FSkJRVGhDTEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkRlRVU3U1VGRFRDeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVVVGQlVUdFJRVU5ZTEU5QlFVOHNVMEZCVXl4RFFVRkRPMGxCUTNKQ0xFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hWUVVGVkxFTkJRVU1zUzBGQmFVSTdTVUZEYmtNc1EwRkJRenRKUVVWRU96dFBRVVZITzBsQlEwa3NTMEZCU3p0UlFVTlNMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdTVUZEZWtJc1EwRkJRenRKUVVWRU96czdPenRQUVV0SE8wbEJRMGtzVFVGQlRTeERRVUZETEV0QlFXZENMRVZCUVVVc1RVRkJZeXhGUVVGRkxFMUJRV003VVVGRE1VUXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NSVUZCUlN4VFFVRlRMRU5CUVVNc1NVRkJTU3hMUVVGTExFTkJRVU1zVFVGQlRTeExRVUZMTEVOQlFVTXNSVUZCUlR0WlFVTTVSQ3hOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4eFEwRkJjVU1zUTBGQlF5eERRVUZETzFOQlEyaEZPMUZCUTBRc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFMUJRVTBzUjBGQlJ5eERRVUZETEVWQlFVVTdXVUZETDBNc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNPRUpCUVRoQ0xFTkJRVU1zUTBGQlF6dFRRVU42UkR0UlFVTkVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hOUVVGTkxFZEJRVWNzUTBGQlF5eEZRVUZGTzFsQlF5OURMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETERoQ1FVRTRRaXhEUVVGRExFTkJRVU03VTBGRGVrUTdVVUZEUkN4SlFVRkpMRTFCUVUwc1IwRkJSeXhOUVVGTkxFZEJRVWNzUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlR0WlFVTm9ReXhOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4MVJFRkJkVVFzUTBGQlF5eERRVUZETzFOQlEyeEdPMUZCUTBRc1NVRkJTU3hOUVVGTkxFZEJRVWNzUjBGQlJ5eExRVUZMTEVOQlFVTXNSVUZCUlR0WlFVTndRaXhOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4blEwRkJaME1zU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RlFVRkZMRVZCUVVVc1RVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVU42Ump0UlFVVkVMRWxCUVVrc1YwRkJWeXhIUVVGSExFMUJRVTBzUTBGQlF6dFJRVU42UWl4SlFVRkpMRmRCUVZjc1IwRkJSeXhOUVVGTkxFTkJRVU03VVVGRmVrSXNSMEZCUnp0WlFVTkRMRTFCUVUwc1UwRkJVeXhIUVVGSExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNWMEZCVnl4RlFVRkZMRmRCUVZjc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdXVUZGTTBVc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRM0JETEUxQlFVMHNUVUZCVFN4SFFVRkhMRzFEUVVGblFpeERRVUZETEdsQ1FVRnBRaXhEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETEVWQlFVVXNVMEZCVXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xbEJRMnhHTEUxQlFVMHNVMEZCVXl4SFFVRkhMRWxCUVVrc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhEUVVGRE8xbEJRM3BFTEcxRFFVRm5RaXhEUVVGRExHbENRVUZwUWl4RFFVRkRMRTFCUVUwc1JVRkJSU3hUUVVGVExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZGZWtRc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1dVRkZMMElzVjBGQlZ5eEpRVUZKTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNN1dVRkRhRU1zVjBGQlZ5eEpRVUZKTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNN1UwRkRia01zVVVGQlVTeFhRVUZYTEVkQlFVY3NRMEZCUXl4RlFVRkZPMGxCUXpsQ0xFTkJRVU03U1VGRlJEczdPenM3VDBGTFJ6dEpRVU5KTEU5QlFVOHNRMEZCUXl4TFFVRm5RaXhGUVVGRkxFMUJRV01zUlVGQlJTeE5RVUZqTzFGQlF6TkVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRVZCUVVVc1UwRkJVeXhEUVVGRExFbEJRVWtzUzBGQlN5eERRVUZETEUxQlFVMHNTMEZCU3l4RFFVRkRMRVZCUVVVN1dVRkRPVVFzVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2NVTkJRWEZETEVOQlFVTXNRMEZCUXp0VFFVTm9SVHRSUVVORUxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeE5RVUZOTEVkQlFVY3NRMEZCUXl4RlFVRkZPMWxCUXk5RExFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMRGhDUVVFNFFpeERRVUZETEVOQlFVTTdVMEZEZWtRN1VVRkRSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzVFVGQlRTeEhRVUZITEVOQlFVTXNSVUZCUlR0WlFVTXZReXhOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl3NFFrRkJPRUlzUTBGQlF5eERRVUZETzFOQlEzcEVPMUZCUTBRc1NVRkJTU3hOUVVGTkxFZEJRVWNzVFVGQlRTeEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVN1dVRkRhRU1zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2RVUkJRWFZFTEVOQlFVTXNRMEZCUXp0VFFVTnNSanRSUVVORUxFbEJRVWtzVFVGQlRTeEhRVUZITEVkQlFVY3NTMEZCU3l4RFFVRkRMRVZCUVVVN1dVRkRjRUlzVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc1owTkJRV2RETEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1JVRkJSU3hGUVVGRkxFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTTdVMEZEZWtZN1VVRkZSQ3hKUVVGSkxGZEJRVmNzUjBGQlJ5eE5RVUZOTEVOQlFVTTdVVUZEZWtJc1NVRkJTU3hYUVVGWExFZEJRVWNzVFVGQlRTeERRVUZETzFGQlJYcENMRWRCUVVjN1dVRkRReXhOUVVGTkxHVkJRV1VzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRE8xbEJSVGxETEUxQlFVMHNUVUZCVFN4SFFVRkhMRzFEUVVGblFpeERRVUZETEdsQ1FVRnBRaXhEUVVGRExHVkJRV1VzUlVGQlJTeERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMR2RDUVVGblFpeERRVUZETEVOQlFVTTdXVUZGTjBZc1RVRkJUU3hUUVVGVExFZEJRV01zU1VGQlNTeFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8xbEJRemRFTEcxRFFVRm5RaXhEUVVGRExHbENRVUZwUWl4RFFVRkRMRTFCUVUwc1JVRkJSU3hUUVVGVExFVkJRVVVzUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJRenRaUVVVelJTeFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZGY0VNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlExWXNUMEZCVHl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJUdG5Ra0ZEZWtJc1MwRkJTeXhEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETEVkQlFVY3NVMEZCVXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03WVVGRGVrTTdXVUZGUkN4TlFVRk5MRVZCUVVVc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF5eGxRVUZsTEVOQlFVTXNRMEZCUXp0WlFVTjZReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhWUVVGVkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdaMEpCUTJoRExFVkJRVVVzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNN1lVRkRla003V1VGRlJDeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhsUVVGbExFTkJRVU1zUTBGQlF6dFpRVVZ5UXl4WFFVRlhMRWxCUVVrc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF6dFRRVU51UXl4UlFVRlJMRmRCUVZjc1IwRkJSeXhEUVVGRExFVkJRVVU3U1VGRE9VSXNRMEZCUXpzN1FVRnVTa1FzWlVGQlpUdEJRVU5UTEdkQ1FVRlhMRWRCUVZjc1IwRkJSeXhEUVVGRE8wRkJRMnhFTEdWQlFXVTdRVUZEVXl4dlFrRkJaU3hIUVVGWExFZEJRVWNzUTBGQlF6dEJRVU4wUkN4bFFVRmxPMEZCUTFNc2NVSkJRV2RDTEVkQlFWY3NTVUZCU1N4RFFVRkRMR1ZCUVdVc1IwRkJSeXhEUVVGRExFTkJRVU03UVVGT2FFWXNiMEpCY1VwREluMD0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwidmFyIGJpZ0ludCA9IChmdW5jdGlvbiAodW5kZWZpbmVkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICB2YXIgQkFTRSA9IDFlNyxcclxuICAgICAgICBMT0dfQkFTRSA9IDcsXHJcbiAgICAgICAgTUFYX0lOVCA9IDkwMDcxOTkyNTQ3NDA5OTIsXHJcbiAgICAgICAgTUFYX0lOVF9BUlIgPSBzbWFsbFRvQXJyYXkoTUFYX0lOVCksXHJcbiAgICAgICAgTE9HX01BWF9JTlQgPSBNYXRoLmxvZyhNQVhfSU5UKTtcclxuXHJcbiAgICBmdW5jdGlvbiBJbnRlZ2VyKHYsIHJhZGl4KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gSW50ZWdlclswXTtcclxuICAgICAgICBpZiAodHlwZW9mIHJhZGl4ICE9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gK3JhZGl4ID09PSAxMCA/IHBhcnNlVmFsdWUodikgOiBwYXJzZUJhc2UodiwgcmFkaXgpO1xyXG4gICAgICAgIHJldHVybiBwYXJzZVZhbHVlKHYpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEJpZ0ludGVnZXIodmFsdWUsIHNpZ24pIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5zaWduID0gc2lnbjtcclxuICAgICAgICB0aGlzLmlzU21hbGwgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJbnRlZ2VyLnByb3RvdHlwZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gU21hbGxJbnRlZ2VyKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2lnbiA9IHZhbHVlIDwgMDtcclxuICAgICAgICB0aGlzLmlzU21hbGwgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSW50ZWdlci5wcm90b3R5cGUpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGlzUHJlY2lzZShuKSB7XHJcbiAgICAgICAgcmV0dXJuIC1NQVhfSU5UIDwgbiAmJiBuIDwgTUFYX0lOVDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzbWFsbFRvQXJyYXkobikgeyAvLyBGb3IgcGVyZm9ybWFuY2UgcmVhc29ucyBkb2Vzbid0IHJlZmVyZW5jZSBCQVNFLCBuZWVkIHRvIGNoYW5nZSB0aGlzIGZ1bmN0aW9uIGlmIEJBU0UgY2hhbmdlc1xyXG4gICAgICAgIGlmIChuIDwgMWU3KVxyXG4gICAgICAgICAgICByZXR1cm4gW25dO1xyXG4gICAgICAgIGlmIChuIDwgMWUxNClcclxuICAgICAgICAgICAgcmV0dXJuIFtuICUgMWU3LCBNYXRoLmZsb29yKG4gLyAxZTcpXTtcclxuICAgICAgICByZXR1cm4gW24gJSAxZTcsIE1hdGguZmxvb3IobiAvIDFlNykgJSAxZTcsIE1hdGguZmxvb3IobiAvIDFlMTQpXTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhcnJheVRvU21hbGwoYXJyKSB7IC8vIElmIEJBU0UgY2hhbmdlcyB0aGlzIGZ1bmN0aW9uIG1heSBuZWVkIHRvIGNoYW5nZVxyXG4gICAgICAgIHRyaW0oYXJyKTtcclxuICAgICAgICB2YXIgbGVuZ3RoID0gYXJyLmxlbmd0aDtcclxuICAgICAgICBpZiAobGVuZ3RoIDwgNCAmJiBjb21wYXJlQWJzKGFyciwgTUFYX0lOVF9BUlIpIDwgMCkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gMDtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIGFyclswXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIGFyclswXSArIGFyclsxXSAqIEJBU0U7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gYXJyWzBdICsgKGFyclsxXSArIGFyclsyXSAqIEJBU0UpICogQkFTRTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJyO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRyaW0odikge1xyXG4gICAgICAgIHZhciBpID0gdi5sZW5ndGg7XHJcbiAgICAgICAgd2hpbGUgKHZbLS1pXSA9PT0gMCk7XHJcbiAgICAgICAgdi5sZW5ndGggPSBpICsgMTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVBcnJheShsZW5ndGgpIHsgLy8gZnVuY3Rpb24gc2hhbWVsZXNzbHkgc3RvbGVuIGZyb20gWWFmZmxlJ3MgbGlicmFyeSBodHRwczovL2dpdGh1Yi5jb20vWWFmZmxlL0JpZ0ludGVnZXJcclxuICAgICAgICB2YXIgeCA9IG5ldyBBcnJheShsZW5ndGgpO1xyXG4gICAgICAgIHZhciBpID0gLTE7XHJcbiAgICAgICAgd2hpbGUgKCsraSA8IGxlbmd0aCkge1xyXG4gICAgICAgICAgICB4W2ldID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHg7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdHJ1bmNhdGUobikge1xyXG4gICAgICAgIGlmIChuID4gMCkgcmV0dXJuIE1hdGguZmxvb3Iobik7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbChuKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGQoYSwgYikgeyAvLyBhc3N1bWVzIGEgYW5kIGIgYXJlIGFycmF5cyB3aXRoIGEubGVuZ3RoID49IGIubGVuZ3RoXHJcbiAgICAgICAgdmFyIGxfYSA9IGEubGVuZ3RoLFxyXG4gICAgICAgICAgICBsX2IgPSBiLmxlbmd0aCxcclxuICAgICAgICAgICAgciA9IG5ldyBBcnJheShsX2EpLFxyXG4gICAgICAgICAgICBjYXJyeSA9IDAsXHJcbiAgICAgICAgICAgIGJhc2UgPSBCQVNFLFxyXG4gICAgICAgICAgICBzdW0sIGk7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxfYjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHN1bSA9IGFbaV0gKyBiW2ldICsgY2Fycnk7XHJcbiAgICAgICAgICAgIGNhcnJ5ID0gc3VtID49IGJhc2UgPyAxIDogMDtcclxuICAgICAgICAgICAgcltpXSA9IHN1bSAtIGNhcnJ5ICogYmFzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKGkgPCBsX2EpIHtcclxuICAgICAgICAgICAgc3VtID0gYVtpXSArIGNhcnJ5O1xyXG4gICAgICAgICAgICBjYXJyeSA9IHN1bSA9PT0gYmFzZSA/IDEgOiAwO1xyXG4gICAgICAgICAgICByW2krK10gPSBzdW0gLSBjYXJyeSAqIGJhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjYXJyeSA+IDApIHIucHVzaChjYXJyeSk7XHJcbiAgICAgICAgcmV0dXJuIHI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkQW55KGEsIGIpIHtcclxuICAgICAgICBpZiAoYS5sZW5ndGggPj0gYi5sZW5ndGgpIHJldHVybiBhZGQoYSwgYik7XHJcbiAgICAgICAgcmV0dXJuIGFkZChiLCBhKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRTbWFsbChhLCBjYXJyeSkgeyAvLyBhc3N1bWVzIGEgaXMgYXJyYXksIGNhcnJ5IGlzIG51bWJlciB3aXRoIDAgPD0gY2FycnkgPCBNQVhfSU5UXHJcbiAgICAgICAgdmFyIGwgPSBhLmxlbmd0aCxcclxuICAgICAgICAgICAgciA9IG5ldyBBcnJheShsKSxcclxuICAgICAgICAgICAgYmFzZSA9IEJBU0UsXHJcbiAgICAgICAgICAgIHN1bSwgaTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHN1bSA9IGFbaV0gLSBiYXNlICsgY2Fycnk7XHJcbiAgICAgICAgICAgIGNhcnJ5ID0gTWF0aC5mbG9vcihzdW0gLyBiYXNlKTtcclxuICAgICAgICAgICAgcltpXSA9IHN1bSAtIGNhcnJ5ICogYmFzZTtcclxuICAgICAgICAgICAgY2FycnkgKz0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKGNhcnJ5ID4gMCkge1xyXG4gICAgICAgICAgICByW2krK10gPSBjYXJyeSAlIGJhc2U7XHJcbiAgICAgICAgICAgIGNhcnJ5ID0gTWF0aC5mbG9vcihjYXJyeSAvIGJhc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHZhciBuID0gcGFyc2VWYWx1ZSh2KTtcclxuICAgICAgICBpZiAodGhpcy5zaWduICE9PSBuLnNpZ24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3VidHJhY3Qobi5uZWdhdGUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhID0gdGhpcy52YWx1ZSwgYiA9IG4udmFsdWU7XHJcbiAgICAgICAgaWYgKG4uaXNTbWFsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIoYWRkU21hbGwoYSwgTWF0aC5hYnMoYikpLCB0aGlzLnNpZ24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIoYWRkQW55KGEsIGIpLCB0aGlzLnNpZ24pO1xyXG4gICAgfTtcclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnBsdXMgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hZGQ7XHJcblxyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHZhciBuID0gcGFyc2VWYWx1ZSh2KTtcclxuICAgICAgICB2YXIgYSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgaWYgKGEgPCAwICE9PSBuLnNpZ24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3VidHJhY3Qobi5uZWdhdGUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBiID0gbi52YWx1ZTtcclxuICAgICAgICBpZiAobi5pc1NtYWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChpc1ByZWNpc2UoYSArIGIpKSByZXR1cm4gbmV3IFNtYWxsSW50ZWdlcihhICsgYik7XHJcbiAgICAgICAgICAgIGIgPSBzbWFsbFRvQXJyYXkoTWF0aC5hYnMoYikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIoYWRkU21hbGwoYiwgTWF0aC5hYnMoYSkpLCBhIDwgMCk7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5wbHVzID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5hZGQ7XHJcblxyXG4gICAgZnVuY3Rpb24gc3VidHJhY3QoYSwgYikgeyAvLyBhc3N1bWVzIGEgYW5kIGIgYXJlIGFycmF5cyB3aXRoIGEgPj0gYlxyXG4gICAgICAgIHZhciBhX2wgPSBhLmxlbmd0aCxcclxuICAgICAgICAgICAgYl9sID0gYi5sZW5ndGgsXHJcbiAgICAgICAgICAgIHIgPSBuZXcgQXJyYXkoYV9sKSxcclxuICAgICAgICAgICAgYm9ycm93ID0gMCxcclxuICAgICAgICAgICAgYmFzZSA9IEJBU0UsXHJcbiAgICAgICAgICAgIGksIGRpZmZlcmVuY2U7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGJfbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGRpZmZlcmVuY2UgPSBhW2ldIC0gYm9ycm93IC0gYltpXTtcclxuICAgICAgICAgICAgaWYgKGRpZmZlcmVuY2UgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBkaWZmZXJlbmNlICs9IGJhc2U7XHJcbiAgICAgICAgICAgICAgICBib3Jyb3cgPSAxO1xyXG4gICAgICAgICAgICB9IGVsc2UgYm9ycm93ID0gMDtcclxuICAgICAgICAgICAgcltpXSA9IGRpZmZlcmVuY2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoaSA9IGJfbDsgaSA8IGFfbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGRpZmZlcmVuY2UgPSBhW2ldIC0gYm9ycm93O1xyXG4gICAgICAgICAgICBpZiAoZGlmZmVyZW5jZSA8IDApIGRpZmZlcmVuY2UgKz0gYmFzZTtcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByW2krK10gPSBkaWZmZXJlbmNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcltpXSA9IGRpZmZlcmVuY2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoOyBpIDwgYV9sOyBpKyspIHtcclxuICAgICAgICAgICAgcltpXSA9IGFbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyaW0ocik7XHJcbiAgICAgICAgcmV0dXJuIHI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3VidHJhY3RBbnkoYSwgYiwgc2lnbikge1xyXG4gICAgICAgIHZhciB2YWx1ZTtcclxuICAgICAgICBpZiAoY29tcGFyZUFicyhhLCBiKSA+PSAwKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gc3VidHJhY3QoYSwgYik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFsdWUgPSBzdWJ0cmFjdChiLCBhKTtcclxuICAgICAgICAgICAgc2lnbiA9ICFzaWduO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YWx1ZSA9IGFycmF5VG9TbWFsbCh2YWx1ZSk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICBpZiAoc2lnbikgdmFsdWUgPSAtdmFsdWU7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU21hbGxJbnRlZ2VyKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKHZhbHVlLCBzaWduKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdWJ0cmFjdFNtYWxsKGEsIGIsIHNpZ24pIHsgLy8gYXNzdW1lcyBhIGlzIGFycmF5LCBiIGlzIG51bWJlciB3aXRoIDAgPD0gYiA8IE1BWF9JTlRcclxuICAgICAgICB2YXIgbCA9IGEubGVuZ3RoLFxyXG4gICAgICAgICAgICByID0gbmV3IEFycmF5KGwpLFxyXG4gICAgICAgICAgICBjYXJyeSA9IC1iLFxyXG4gICAgICAgICAgICBiYXNlID0gQkFTRSxcclxuICAgICAgICAgICAgaSwgZGlmZmVyZW5jZTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGRpZmZlcmVuY2UgPSBhW2ldICsgY2Fycnk7XHJcbiAgICAgICAgICAgIGNhcnJ5ID0gTWF0aC5mbG9vcihkaWZmZXJlbmNlIC8gYmFzZSk7XHJcbiAgICAgICAgICAgIGRpZmZlcmVuY2UgJT0gYmFzZTtcclxuICAgICAgICAgICAgcltpXSA9IGRpZmZlcmVuY2UgPCAwID8gZGlmZmVyZW5jZSArIGJhc2UgOiBkaWZmZXJlbmNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByID0gYXJyYXlUb1NtYWxsKHIpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgciA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICBpZiAoc2lnbikgciA9IC1yO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNtYWxsSW50ZWdlcihyKTtcclxuICAgICAgICB9IHJldHVybiBuZXcgQmlnSW50ZWdlcihyLCBzaWduKTtcclxuICAgIH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zdWJ0cmFjdCA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdmFyIG4gPSBwYXJzZVZhbHVlKHYpO1xyXG4gICAgICAgIGlmICh0aGlzLnNpZ24gIT09IG4uc2lnbikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGQobi5uZWdhdGUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhID0gdGhpcy52YWx1ZSwgYiA9IG4udmFsdWU7XHJcbiAgICAgICAgaWYgKG4uaXNTbWFsbClcclxuICAgICAgICAgICAgcmV0dXJuIHN1YnRyYWN0U21hbGwoYSwgTWF0aC5hYnMoYiksIHRoaXMuc2lnbik7XHJcbiAgICAgICAgcmV0dXJuIHN1YnRyYWN0QW55KGEsIGIsIHRoaXMuc2lnbik7XHJcbiAgICB9O1xyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubWludXMgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zdWJ0cmFjdDtcclxuXHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLnN1YnRyYWN0ID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICB2YXIgbiA9IHBhcnNlVmFsdWUodik7XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIGlmIChhIDwgMCAhPT0gbi5zaWduKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZChuLm5lZ2F0ZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGIgPSBuLnZhbHVlO1xyXG4gICAgICAgIGlmIChuLmlzU21hbGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTbWFsbEludGVnZXIoYSAtIGIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3VidHJhY3RTbWFsbChiLCBNYXRoLmFicyhhKSwgYSA+PSAwKTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLm1pbnVzID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5zdWJ0cmFjdDtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5uZWdhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKHRoaXMudmFsdWUsICF0aGlzLnNpZ24pO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUubmVnYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzaWduID0gdGhpcy5zaWduO1xyXG4gICAgICAgIHZhciBzbWFsbCA9IG5ldyBTbWFsbEludGVnZXIoLXRoaXMudmFsdWUpO1xyXG4gICAgICAgIHNtYWxsLnNpZ24gPSAhc2lnbjtcclxuICAgICAgICByZXR1cm4gc21hbGw7XHJcbiAgICB9O1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFicyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIodGhpcy52YWx1ZSwgZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuYWJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgU21hbGxJbnRlZ2VyKE1hdGguYWJzKHRoaXMudmFsdWUpKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gbXVsdGlwbHlMb25nKGEsIGIpIHtcclxuICAgICAgICB2YXIgYV9sID0gYS5sZW5ndGgsXHJcbiAgICAgICAgICAgIGJfbCA9IGIubGVuZ3RoLFxyXG4gICAgICAgICAgICBsID0gYV9sICsgYl9sLFxyXG4gICAgICAgICAgICByID0gY3JlYXRlQXJyYXkobCksXHJcbiAgICAgICAgICAgIGJhc2UgPSBCQVNFLFxyXG4gICAgICAgICAgICBwcm9kdWN0LCBjYXJyeSwgaSwgYV9pLCBiX2o7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGFfbDsgKytpKSB7XHJcbiAgICAgICAgICAgIGFfaSA9IGFbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYl9sOyArK2opIHtcclxuICAgICAgICAgICAgICAgIGJfaiA9IGJbal07XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0ID0gYV9pICogYl9qICsgcltpICsgal07XHJcbiAgICAgICAgICAgICAgICBjYXJyeSA9IE1hdGguZmxvb3IocHJvZHVjdCAvIGJhc2UpO1xyXG4gICAgICAgICAgICAgICAgcltpICsgal0gPSBwcm9kdWN0IC0gY2FycnkgKiBiYXNlO1xyXG4gICAgICAgICAgICAgICAgcltpICsgaiArIDFdICs9IGNhcnJ5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyaW0ocik7XHJcbiAgICAgICAgcmV0dXJuIHI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbXVsdGlwbHlTbWFsbChhLCBiKSB7IC8vIGFzc3VtZXMgYSBpcyBhcnJheSwgYiBpcyBudW1iZXIgd2l0aCB8YnwgPCBCQVNFXHJcbiAgICAgICAgdmFyIGwgPSBhLmxlbmd0aCxcclxuICAgICAgICAgICAgciA9IG5ldyBBcnJheShsKSxcclxuICAgICAgICAgICAgYmFzZSA9IEJBU0UsXHJcbiAgICAgICAgICAgIGNhcnJ5ID0gMCxcclxuICAgICAgICAgICAgcHJvZHVjdCwgaTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3QgPSBhW2ldICogYiArIGNhcnJ5O1xyXG4gICAgICAgICAgICBjYXJyeSA9IE1hdGguZmxvb3IocHJvZHVjdCAvIGJhc2UpO1xyXG4gICAgICAgICAgICByW2ldID0gcHJvZHVjdCAtIGNhcnJ5ICogYmFzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKGNhcnJ5ID4gMCkge1xyXG4gICAgICAgICAgICByW2krK10gPSBjYXJyeSAlIGJhc2U7XHJcbiAgICAgICAgICAgIGNhcnJ5ID0gTWF0aC5mbG9vcihjYXJyeSAvIGJhc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzaGlmdExlZnQoeCwgbikge1xyXG4gICAgICAgIHZhciByID0gW107XHJcbiAgICAgICAgd2hpbGUgKG4tLSA+IDApIHIucHVzaCgwKTtcclxuICAgICAgICByZXR1cm4gci5jb25jYXQoeCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbXVsdGlwbHlLYXJhdHN1YmEoeCwgeSkge1xyXG4gICAgICAgIHZhciBuID0gTWF0aC5tYXgoeC5sZW5ndGgsIHkubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgaWYgKG4gPD0gMzApIHJldHVybiBtdWx0aXBseUxvbmcoeCwgeSk7XHJcbiAgICAgICAgbiA9IE1hdGguY2VpbChuIC8gMik7XHJcblxyXG4gICAgICAgIHZhciBiID0geC5zbGljZShuKSxcclxuICAgICAgICAgICAgYSA9IHguc2xpY2UoMCwgbiksXHJcbiAgICAgICAgICAgIGQgPSB5LnNsaWNlKG4pLFxyXG4gICAgICAgICAgICBjID0geS5zbGljZSgwLCBuKTtcclxuXHJcbiAgICAgICAgdmFyIGFjID0gbXVsdGlwbHlLYXJhdHN1YmEoYSwgYyksXHJcbiAgICAgICAgICAgIGJkID0gbXVsdGlwbHlLYXJhdHN1YmEoYiwgZCksXHJcbiAgICAgICAgICAgIGFiY2QgPSBtdWx0aXBseUthcmF0c3ViYShhZGRBbnkoYSwgYiksIGFkZEFueShjLCBkKSk7XHJcblxyXG4gICAgICAgIHZhciBwcm9kdWN0ID0gYWRkQW55KGFkZEFueShhYywgc2hpZnRMZWZ0KHN1YnRyYWN0KHN1YnRyYWN0KGFiY2QsIGFjKSwgYmQpLCBuKSksIHNoaWZ0TGVmdChiZCwgMiAqIG4pKTtcclxuICAgICAgICB0cmltKHByb2R1Y3QpO1xyXG4gICAgICAgIHJldHVybiBwcm9kdWN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoZSBmb2xsb3dpbmcgZnVuY3Rpb24gaXMgZGVyaXZlZCBmcm9tIGEgc3VyZmFjZSBmaXQgb2YgYSBncmFwaCBwbG90dGluZyB0aGUgcGVyZm9ybWFuY2UgZGlmZmVyZW5jZVxyXG4gICAgLy8gYmV0d2VlbiBsb25nIG11bHRpcGxpY2F0aW9uIGFuZCBrYXJhdHN1YmEgbXVsdGlwbGljYXRpb24gdmVyc3VzIHRoZSBsZW5ndGhzIG9mIHRoZSB0d28gYXJyYXlzLlxyXG4gICAgZnVuY3Rpb24gdXNlS2FyYXRzdWJhKGwxLCBsMikge1xyXG4gICAgICAgIHJldHVybiAtMC4wMTIgKiBsMSAtIDAuMDEyICogbDIgKyAwLjAwMDAxNSAqIGwxICogbDIgPiAwO1xyXG4gICAgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm11bHRpcGx5ID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICB2YXIgbiA9IHBhcnNlVmFsdWUodiksXHJcbiAgICAgICAgICAgIGEgPSB0aGlzLnZhbHVlLCBiID0gbi52YWx1ZSxcclxuICAgICAgICAgICAgc2lnbiA9IHRoaXMuc2lnbiAhPT0gbi5zaWduLFxyXG4gICAgICAgICAgICBhYnM7XHJcbiAgICAgICAgaWYgKG4uaXNTbWFsbCkge1xyXG4gICAgICAgICAgICBpZiAoYiA9PT0gMCkgcmV0dXJuIEludGVnZXJbMF07XHJcbiAgICAgICAgICAgIGlmIChiID09PSAxKSByZXR1cm4gdGhpcztcclxuICAgICAgICAgICAgaWYgKGIgPT09IC0xKSByZXR1cm4gdGhpcy5uZWdhdGUoKTtcclxuICAgICAgICAgICAgYWJzID0gTWF0aC5hYnMoYik7XHJcbiAgICAgICAgICAgIGlmIChhYnMgPCBCQVNFKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIobXVsdGlwbHlTbWFsbChhLCBhYnMpLCBzaWduKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBiID0gc21hbGxUb0FycmF5KGFicyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh1c2VLYXJhdHN1YmEoYS5sZW5ndGgsIGIubGVuZ3RoKSkgLy8gS2FyYXRzdWJhIGlzIG9ubHkgZmFzdGVyIGZvciBjZXJ0YWluIGFycmF5IHNpemVzXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcihtdWx0aXBseUthcmF0c3ViYShhLCBiKSwgc2lnbik7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKG11bHRpcGx5TG9uZyhhLCBiKSwgc2lnbik7XHJcbiAgICB9O1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnRpbWVzID0gQmlnSW50ZWdlci5wcm90b3R5cGUubXVsdGlwbHk7XHJcblxyXG4gICAgZnVuY3Rpb24gbXVsdGlwbHlTbWFsbEFuZEFycmF5KGEsIGIsIHNpZ24pIHsgLy8gYSA+PSAwXHJcbiAgICAgICAgaWYgKGEgPCBCQVNFKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcihtdWx0aXBseVNtYWxsKGIsIGEpLCBzaWduKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKG11bHRpcGx5TG9uZyhiLCBzbWFsbFRvQXJyYXkoYSkpLCBzaWduKTtcclxuICAgIH1cclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuX211bHRpcGx5QnlTbWFsbCA9IGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgaWYgKGlzUHJlY2lzZShhLnZhbHVlICogdGhpcy52YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTbWFsbEludGVnZXIoYS52YWx1ZSAqIHRoaXMudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbXVsdGlwbHlTbWFsbEFuZEFycmF5KE1hdGguYWJzKGEudmFsdWUpLCBzbWFsbFRvQXJyYXkoTWF0aC5hYnModGhpcy52YWx1ZSkpLCB0aGlzLnNpZ24gIT09IGEuc2lnbik7XHJcbiAgICB9O1xyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuX211bHRpcGx5QnlTbWFsbCA9IGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgaWYgKGEudmFsdWUgPT09IDApIHJldHVybiBJbnRlZ2VyWzBdO1xyXG4gICAgICAgIGlmIChhLnZhbHVlID09PSAxKSByZXR1cm4gdGhpcztcclxuICAgICAgICBpZiAoYS52YWx1ZSA9PT0gLTEpIHJldHVybiB0aGlzLm5lZ2F0ZSgpO1xyXG4gICAgICAgIHJldHVybiBtdWx0aXBseVNtYWxsQW5kQXJyYXkoTWF0aC5hYnMoYS52YWx1ZSksIHRoaXMudmFsdWUsIHRoaXMuc2lnbiAhPT0gYS5zaWduKTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLm11bHRpcGx5ID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VWYWx1ZSh2KS5fbXVsdGlwbHlCeVNtYWxsKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUudGltZXMgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLm11bHRpcGx5O1xyXG5cclxuICAgIGZ1bmN0aW9uIHNxdWFyZShhKSB7XHJcbiAgICAgICAgdmFyIGwgPSBhLmxlbmd0aCxcclxuICAgICAgICAgICAgciA9IGNyZWF0ZUFycmF5KGwgKyBsKSxcclxuICAgICAgICAgICAgYmFzZSA9IEJBU0UsXHJcbiAgICAgICAgICAgIHByb2R1Y3QsIGNhcnJ5LCBpLCBhX2ksIGFfajtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFfaSA9IGFbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgbDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBhX2ogPSBhW2pdO1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdCA9IGFfaSAqIGFfaiArIHJbaSArIGpdO1xyXG4gICAgICAgICAgICAgICAgY2FycnkgPSBNYXRoLmZsb29yKHByb2R1Y3QgLyBiYXNlKTtcclxuICAgICAgICAgICAgICAgIHJbaSArIGpdID0gcHJvZHVjdCAtIGNhcnJ5ICogYmFzZTtcclxuICAgICAgICAgICAgICAgIHJbaSArIGogKyAxXSArPSBjYXJyeTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0cmltKHIpO1xyXG4gICAgICAgIHJldHVybiByO1xyXG4gICAgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnNxdWFyZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIoc3F1YXJlKHRoaXMudmFsdWUpLCBmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuc3F1YXJlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWUgKiB0aGlzLnZhbHVlO1xyXG4gICAgICAgIGlmIChpc1ByZWNpc2UodmFsdWUpKSByZXR1cm4gbmV3IFNtYWxsSW50ZWdlcih2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKHNxdWFyZShzbWFsbFRvQXJyYXkoTWF0aC5hYnModGhpcy52YWx1ZSkpKSwgZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBkaXZNb2QxKGEsIGIpIHsgLy8gTGVmdCBvdmVyIGZyb20gcHJldmlvdXMgdmVyc2lvbi4gUGVyZm9ybXMgZmFzdGVyIHRoYW4gZGl2TW9kMiBvbiBzbWFsbGVyIGlucHV0IHNpemVzLlxyXG4gICAgICAgIHZhciBhX2wgPSBhLmxlbmd0aCxcclxuICAgICAgICAgICAgYl9sID0gYi5sZW5ndGgsXHJcbiAgICAgICAgICAgIGJhc2UgPSBCQVNFLFxyXG4gICAgICAgICAgICByZXN1bHQgPSBjcmVhdGVBcnJheShiLmxlbmd0aCksXHJcbiAgICAgICAgICAgIGRpdmlzb3JNb3N0U2lnbmlmaWNhbnREaWdpdCA9IGJbYl9sIC0gMV0sXHJcbiAgICAgICAgICAgIC8vIG5vcm1hbGl6YXRpb25cclxuICAgICAgICAgICAgbGFtYmRhID0gTWF0aC5jZWlsKGJhc2UgLyAoMiAqIGRpdmlzb3JNb3N0U2lnbmlmaWNhbnREaWdpdCkpLFxyXG4gICAgICAgICAgICByZW1haW5kZXIgPSBtdWx0aXBseVNtYWxsKGEsIGxhbWJkYSksXHJcbiAgICAgICAgICAgIGRpdmlzb3IgPSBtdWx0aXBseVNtYWxsKGIsIGxhbWJkYSksXHJcbiAgICAgICAgICAgIHF1b3RpZW50RGlnaXQsIHNoaWZ0LCBjYXJyeSwgYm9ycm93LCBpLCBsLCBxO1xyXG4gICAgICAgIGlmIChyZW1haW5kZXIubGVuZ3RoIDw9IGFfbCkgcmVtYWluZGVyLnB1c2goMCk7XHJcbiAgICAgICAgZGl2aXNvci5wdXNoKDApO1xyXG4gICAgICAgIGRpdmlzb3JNb3N0U2lnbmlmaWNhbnREaWdpdCA9IGRpdmlzb3JbYl9sIC0gMV07XHJcbiAgICAgICAgZm9yIChzaGlmdCA9IGFfbCAtIGJfbDsgc2hpZnQgPj0gMDsgc2hpZnQtLSkge1xyXG4gICAgICAgICAgICBxdW90aWVudERpZ2l0ID0gYmFzZSAtIDE7XHJcbiAgICAgICAgICAgIGlmIChyZW1haW5kZXJbc2hpZnQgKyBiX2xdICE9PSBkaXZpc29yTW9zdFNpZ25pZmljYW50RGlnaXQpIHtcclxuICAgICAgICAgICAgICAgIHF1b3RpZW50RGlnaXQgPSBNYXRoLmZsb29yKChyZW1haW5kZXJbc2hpZnQgKyBiX2xdICogYmFzZSArIHJlbWFpbmRlcltzaGlmdCArIGJfbCAtIDFdKSAvIGRpdmlzb3JNb3N0U2lnbmlmaWNhbnREaWdpdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gcXVvdGllbnREaWdpdCA8PSBiYXNlIC0gMVxyXG4gICAgICAgICAgICBjYXJyeSA9IDA7XHJcbiAgICAgICAgICAgIGJvcnJvdyA9IDA7XHJcbiAgICAgICAgICAgIGwgPSBkaXZpc29yLmxlbmd0aDtcclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY2FycnkgKz0gcXVvdGllbnREaWdpdCAqIGRpdmlzb3JbaV07XHJcbiAgICAgICAgICAgICAgICBxID0gTWF0aC5mbG9vcihjYXJyeSAvIGJhc2UpO1xyXG4gICAgICAgICAgICAgICAgYm9ycm93ICs9IHJlbWFpbmRlcltzaGlmdCArIGldIC0gKGNhcnJ5IC0gcSAqIGJhc2UpO1xyXG4gICAgICAgICAgICAgICAgY2FycnkgPSBxO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJvcnJvdyA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZW1haW5kZXJbc2hpZnQgKyBpXSA9IGJvcnJvdyArIGJhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9ycm93ID0gLTE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbWFpbmRlcltzaGlmdCArIGldID0gYm9ycm93O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcnJvdyA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2hpbGUgKGJvcnJvdyAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcXVvdGllbnREaWdpdCAtPSAxO1xyXG4gICAgICAgICAgICAgICAgY2FycnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcnJ5ICs9IHJlbWFpbmRlcltzaGlmdCArIGldIC0gYmFzZSArIGRpdmlzb3JbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcnJ5IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1haW5kZXJbc2hpZnQgKyBpXSA9IGNhcnJ5ICsgYmFzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FycnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbWFpbmRlcltzaGlmdCArIGldID0gY2Fycnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcnJ5ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBib3Jyb3cgKz0gY2Fycnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzdWx0W3NoaWZ0XSA9IHF1b3RpZW50RGlnaXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGRlbm9ybWFsaXphdGlvblxyXG4gICAgICAgIHJlbWFpbmRlciA9IGRpdk1vZFNtYWxsKHJlbWFpbmRlciwgbGFtYmRhKVswXTtcclxuICAgICAgICByZXR1cm4gW2FycmF5VG9TbWFsbChyZXN1bHQpLCBhcnJheVRvU21hbGwocmVtYWluZGVyKV07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGl2TW9kMihhLCBiKSB7IC8vIEltcGxlbWVudGF0aW9uIGlkZWEgc2hhbWVsZXNzbHkgc3RvbGVuIGZyb20gU2lsZW50IE1hdHQncyBsaWJyYXJ5IGh0dHA6Ly9zaWxlbnRtYXR0LmNvbS9iaWdpbnRlZ2VyL1xyXG4gICAgICAgIC8vIFBlcmZvcm1zIGZhc3RlciB0aGFuIGRpdk1vZDEgb24gbGFyZ2VyIGlucHV0IHNpemVzLlxyXG4gICAgICAgIHZhciBhX2wgPSBhLmxlbmd0aCxcclxuICAgICAgICAgICAgYl9sID0gYi5sZW5ndGgsXHJcbiAgICAgICAgICAgIHJlc3VsdCA9IFtdLFxyXG4gICAgICAgICAgICBwYXJ0ID0gW10sXHJcbiAgICAgICAgICAgIGJhc2UgPSBCQVNFLFxyXG4gICAgICAgICAgICBndWVzcywgeGxlbiwgaGlnaHgsIGhpZ2h5LCBjaGVjaztcclxuICAgICAgICB3aGlsZSAoYV9sKSB7XHJcbiAgICAgICAgICAgIHBhcnQudW5zaGlmdChhWy0tYV9sXSk7XHJcbiAgICAgICAgICAgIHRyaW0ocGFydCk7XHJcbiAgICAgICAgICAgIGlmIChjb21wYXJlQWJzKHBhcnQsIGIpIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB4bGVuID0gcGFydC5sZW5ndGg7XHJcbiAgICAgICAgICAgIGhpZ2h4ID0gcGFydFt4bGVuIC0gMV0gKiBiYXNlICsgcGFydFt4bGVuIC0gMl07XHJcbiAgICAgICAgICAgIGhpZ2h5ID0gYltiX2wgLSAxXSAqIGJhc2UgKyBiW2JfbCAtIDJdO1xyXG4gICAgICAgICAgICBpZiAoeGxlbiA+IGJfbCkge1xyXG4gICAgICAgICAgICAgICAgaGlnaHggPSAoaGlnaHggKyAxKSAqIGJhc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZ3Vlc3MgPSBNYXRoLmNlaWwoaGlnaHggLyBoaWdoeSk7XHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrID0gbXVsdGlwbHlTbWFsbChiLCBndWVzcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29tcGFyZUFicyhjaGVjaywgcGFydCkgPD0gMCkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBndWVzcy0tO1xyXG4gICAgICAgICAgICB9IHdoaWxlIChndWVzcyk7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGd1ZXNzKTtcclxuICAgICAgICAgICAgcGFydCA9IHN1YnRyYWN0KHBhcnQsIGNoZWNrKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzdWx0LnJldmVyc2UoKTtcclxuICAgICAgICByZXR1cm4gW2FycmF5VG9TbWFsbChyZXN1bHQpLCBhcnJheVRvU21hbGwocGFydCldO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpdk1vZFNtYWxsKHZhbHVlLCBsYW1iZGEpIHtcclxuICAgICAgICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoLFxyXG4gICAgICAgICAgICBxdW90aWVudCA9IGNyZWF0ZUFycmF5KGxlbmd0aCksXHJcbiAgICAgICAgICAgIGJhc2UgPSBCQVNFLFxyXG4gICAgICAgICAgICBpLCBxLCByZW1haW5kZXIsIGRpdmlzb3I7XHJcbiAgICAgICAgcmVtYWluZGVyID0gMDtcclxuICAgICAgICBmb3IgKGkgPSBsZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xyXG4gICAgICAgICAgICBkaXZpc29yID0gcmVtYWluZGVyICogYmFzZSArIHZhbHVlW2ldO1xyXG4gICAgICAgICAgICBxID0gdHJ1bmNhdGUoZGl2aXNvciAvIGxhbWJkYSk7XHJcbiAgICAgICAgICAgIHJlbWFpbmRlciA9IGRpdmlzb3IgLSBxICogbGFtYmRhO1xyXG4gICAgICAgICAgICBxdW90aWVudFtpXSA9IHEgfCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gW3F1b3RpZW50LCByZW1haW5kZXIgfCAwXTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXZNb2RBbnkoc2VsZiwgdikge1xyXG4gICAgICAgIHZhciB2YWx1ZSwgbiA9IHBhcnNlVmFsdWUodik7XHJcbiAgICAgICAgdmFyIGEgPSBzZWxmLnZhbHVlLCBiID0gbi52YWx1ZTtcclxuICAgICAgICB2YXIgcXVvdGllbnQ7XHJcbiAgICAgICAgaWYgKGIgPT09IDApIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBkaXZpZGUgYnkgemVyb1wiKTtcclxuICAgICAgICBpZiAoc2VsZi5pc1NtYWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChuLmlzU21hbGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbbmV3IFNtYWxsSW50ZWdlcih0cnVuY2F0ZShhIC8gYikpLCBuZXcgU21hbGxJbnRlZ2VyKGEgJSBiKV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFtJbnRlZ2VyWzBdLCBzZWxmXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG4uaXNTbWFsbCkge1xyXG4gICAgICAgICAgICBpZiAoYiA9PT0gMSkgcmV0dXJuIFtzZWxmLCBJbnRlZ2VyWzBdXTtcclxuICAgICAgICAgICAgaWYgKGIgPT0gLTEpIHJldHVybiBbc2VsZi5uZWdhdGUoKSwgSW50ZWdlclswXV07XHJcbiAgICAgICAgICAgIHZhciBhYnMgPSBNYXRoLmFicyhiKTtcclxuICAgICAgICAgICAgaWYgKGFicyA8IEJBU0UpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gZGl2TW9kU21hbGwoYSwgYWJzKTtcclxuICAgICAgICAgICAgICAgIHF1b3RpZW50ID0gYXJyYXlUb1NtYWxsKHZhbHVlWzBdKTtcclxuICAgICAgICAgICAgICAgIHZhciByZW1haW5kZXIgPSB2YWx1ZVsxXTtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxmLnNpZ24pIHJlbWFpbmRlciA9IC1yZW1haW5kZXI7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHF1b3RpZW50ID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuc2lnbiAhPT0gbi5zaWduKSBxdW90aWVudCA9IC1xdW90aWVudDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW25ldyBTbWFsbEludGVnZXIocXVvdGllbnQpLCBuZXcgU21hbGxJbnRlZ2VyKHJlbWFpbmRlcildO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtuZXcgQmlnSW50ZWdlcihxdW90aWVudCwgc2VsZi5zaWduICE9PSBuLnNpZ24pLCBuZXcgU21hbGxJbnRlZ2VyKHJlbWFpbmRlcildO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGIgPSBzbWFsbFRvQXJyYXkoYWJzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNvbXBhcmlzb24gPSBjb21wYXJlQWJzKGEsIGIpO1xyXG4gICAgICAgIGlmIChjb21wYXJpc29uID09PSAtMSkgcmV0dXJuIFtJbnRlZ2VyWzBdLCBzZWxmXTtcclxuICAgICAgICBpZiAoY29tcGFyaXNvbiA9PT0gMCkgcmV0dXJuIFtJbnRlZ2VyW3NlbGYuc2lnbiA9PT0gbi5zaWduID8gMSA6IC0xXSwgSW50ZWdlclswXV07XHJcblxyXG4gICAgICAgIC8vIGRpdk1vZDEgaXMgZmFzdGVyIG9uIHNtYWxsZXIgaW5wdXQgc2l6ZXNcclxuICAgICAgICBpZiAoYS5sZW5ndGggKyBiLmxlbmd0aCA8PSAyMDApXHJcbiAgICAgICAgICAgIHZhbHVlID0gZGl2TW9kMShhLCBiKTtcclxuICAgICAgICBlbHNlIHZhbHVlID0gZGl2TW9kMihhLCBiKTtcclxuXHJcbiAgICAgICAgcXVvdGllbnQgPSB2YWx1ZVswXTtcclxuICAgICAgICB2YXIgcVNpZ24gPSBzZWxmLnNpZ24gIT09IG4uc2lnbixcclxuICAgICAgICAgICAgbW9kID0gdmFsdWVbMV0sXHJcbiAgICAgICAgICAgIG1TaWduID0gc2VsZi5zaWduO1xyXG4gICAgICAgIGlmICh0eXBlb2YgcXVvdGllbnQgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgaWYgKHFTaWduKSBxdW90aWVudCA9IC1xdW90aWVudDtcclxuICAgICAgICAgICAgcXVvdGllbnQgPSBuZXcgU21hbGxJbnRlZ2VyKHF1b3RpZW50KTtcclxuICAgICAgICB9IGVsc2UgcXVvdGllbnQgPSBuZXcgQmlnSW50ZWdlcihxdW90aWVudCwgcVNpZ24pO1xyXG4gICAgICAgIGlmICh0eXBlb2YgbW9kID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIGlmIChtU2lnbikgbW9kID0gLW1vZDtcclxuICAgICAgICAgICAgbW9kID0gbmV3IFNtYWxsSW50ZWdlcihtb2QpO1xyXG4gICAgICAgIH0gZWxzZSBtb2QgPSBuZXcgQmlnSW50ZWdlcihtb2QsIG1TaWduKTtcclxuICAgICAgICByZXR1cm4gW3F1b3RpZW50LCBtb2RdO1xyXG4gICAgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmRpdm1vZCA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IGRpdk1vZEFueSh0aGlzLCB2KTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBxdW90aWVudDogcmVzdWx0WzBdLFxyXG4gICAgICAgICAgICByZW1haW5kZXI6IHJlc3VsdFsxXVxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5kaXZtb2QgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kaXZtb2Q7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZGl2aWRlID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICByZXR1cm4gZGl2TW9kQW55KHRoaXMsIHYpWzBdO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUub3ZlciA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUuZGl2aWRlID0gQmlnSW50ZWdlci5wcm90b3R5cGUub3ZlciA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmRpdmlkZTtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2QgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiBkaXZNb2RBbnkodGhpcywgdilbMV07XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5yZW1haW5kZXIgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLm1vZCA9IEJpZ0ludGVnZXIucHJvdG90eXBlLnJlbWFpbmRlciA9IEJpZ0ludGVnZXIucHJvdG90eXBlLm1vZDtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5wb3cgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHZhciBuID0gcGFyc2VWYWx1ZSh2KSxcclxuICAgICAgICAgICAgYSA9IHRoaXMudmFsdWUsXHJcbiAgICAgICAgICAgIGIgPSBuLnZhbHVlLFxyXG4gICAgICAgICAgICB2YWx1ZSwgeCwgeTtcclxuICAgICAgICBpZiAoYiA9PT0gMCkgcmV0dXJuIEludGVnZXJbMV07XHJcbiAgICAgICAgaWYgKGEgPT09IDApIHJldHVybiBJbnRlZ2VyWzBdO1xyXG4gICAgICAgIGlmIChhID09PSAxKSByZXR1cm4gSW50ZWdlclsxXTtcclxuICAgICAgICBpZiAoYSA9PT0gLTEpIHJldHVybiBuLmlzRXZlbigpID8gSW50ZWdlclsxXSA6IEludGVnZXJbLTFdO1xyXG4gICAgICAgIGlmIChuLnNpZ24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIEludGVnZXJbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbi5pc1NtYWxsKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgZXhwb25lbnQgXCIgKyBuLnRvU3RyaW5nKCkgKyBcIiBpcyB0b28gbGFyZ2UuXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzU21hbGwpIHtcclxuICAgICAgICAgICAgaWYgKGlzUHJlY2lzZSh2YWx1ZSA9IE1hdGgucG93KGEsIGIpKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU21hbGxJbnRlZ2VyKHRydW5jYXRlKHZhbHVlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHggPSB0aGlzO1xyXG4gICAgICAgIHkgPSBJbnRlZ2VyWzFdO1xyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmIChiICYgMSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgeSA9IHkudGltZXMoeCk7XHJcbiAgICAgICAgICAgICAgICAtLWI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGIgPT09IDApIGJyZWFrO1xyXG4gICAgICAgICAgICBiIC89IDI7XHJcbiAgICAgICAgICAgIHggPSB4LnNxdWFyZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLnBvdyA9IEJpZ0ludGVnZXIucHJvdG90eXBlLnBvdztcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2RQb3cgPSBmdW5jdGlvbiAoZXhwLCBtb2QpIHtcclxuICAgICAgICBleHAgPSBwYXJzZVZhbHVlKGV4cCk7XHJcbiAgICAgICAgbW9kID0gcGFyc2VWYWx1ZShtb2QpO1xyXG4gICAgICAgIGlmIChtb2QuaXNaZXJvKCkpIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCB0YWtlIG1vZFBvdyB3aXRoIG1vZHVsdXMgMFwiKTtcclxuICAgICAgICB2YXIgciA9IEludGVnZXJbMV0sXHJcbiAgICAgICAgICAgIGJhc2UgPSB0aGlzLm1vZChtb2QpO1xyXG4gICAgICAgIHdoaWxlIChleHAuaXNQb3NpdGl2ZSgpKSB7XHJcbiAgICAgICAgICAgIGlmIChiYXNlLmlzWmVybygpKSByZXR1cm4gSW50ZWdlclswXTtcclxuICAgICAgICAgICAgaWYgKGV4cC5pc09kZCgpKSByID0gci5tdWx0aXBseShiYXNlKS5tb2QobW9kKTtcclxuICAgICAgICAgICAgZXhwID0gZXhwLmRpdmlkZSgyKTtcclxuICAgICAgICAgICAgYmFzZSA9IGJhc2Uuc3F1YXJlKCkubW9kKG1vZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUubW9kUG93ID0gQmlnSW50ZWdlci5wcm90b3R5cGUubW9kUG93O1xyXG5cclxuICAgIGZ1bmN0aW9uIGNvbXBhcmVBYnMoYSwgYikge1xyXG4gICAgICAgIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGEubGVuZ3RoID4gYi5sZW5ndGggPyAxIDogLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGkgPSBhLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGlmIChhW2ldICE9PSBiW2ldKSByZXR1cm4gYVtpXSA+IGJbaV0gPyAxIDogLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmNvbXBhcmVBYnMgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHZhciBuID0gcGFyc2VWYWx1ZSh2KSxcclxuICAgICAgICAgICAgYSA9IHRoaXMudmFsdWUsXHJcbiAgICAgICAgICAgIGIgPSBuLnZhbHVlO1xyXG4gICAgICAgIGlmIChuLmlzU21hbGwpIHJldHVybiAxO1xyXG4gICAgICAgIHJldHVybiBjb21wYXJlQWJzKGEsIGIpO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuY29tcGFyZUFicyA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdmFyIG4gPSBwYXJzZVZhbHVlKHYpLFxyXG4gICAgICAgICAgICBhID0gTWF0aC5hYnModGhpcy52YWx1ZSksXHJcbiAgICAgICAgICAgIGIgPSBuLnZhbHVlO1xyXG4gICAgICAgIGlmIChuLmlzU21hbGwpIHtcclxuICAgICAgICAgICAgYiA9IE1hdGguYWJzKGIpO1xyXG4gICAgICAgICAgICByZXR1cm4gYSA9PT0gYiA/IDAgOiBhID4gYiA/IDEgOiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfTtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAvLyBTZWUgZGlzY3Vzc2lvbiBhYm91dCBjb21wYXJpc29uIHdpdGggSW5maW5pdHk6XHJcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BldGVyb2xzb24vQmlnSW50ZWdlci5qcy9pc3N1ZXMvNjFcclxuICAgICAgICBpZiAodiA9PT0gSW5maW5pdHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodiA9PT0gLUluZmluaXR5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG4gPSBwYXJzZVZhbHVlKHYpLFxyXG4gICAgICAgICAgICBhID0gdGhpcy52YWx1ZSxcclxuICAgICAgICAgICAgYiA9IG4udmFsdWU7XHJcbiAgICAgICAgaWYgKHRoaXMuc2lnbiAhPT0gbi5zaWduKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuLnNpZ24gPyAxIDogLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuLmlzU21hbGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2lnbiA/IC0xIDogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvbXBhcmVBYnMoYSwgYikgKiAodGhpcy5zaWduID8gLTEgOiAxKTtcclxuICAgIH07XHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jb21wYXJlVG8gPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jb21wYXJlO1xyXG5cclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgaWYgKHYgPT09IEluZmluaXR5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHYgPT09IC1JbmZpbml0eSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBuID0gcGFyc2VWYWx1ZSh2KSxcclxuICAgICAgICAgICAgYSA9IHRoaXMudmFsdWUsXHJcbiAgICAgICAgICAgIGIgPSBuLnZhbHVlO1xyXG4gICAgICAgIGlmIChuLmlzU21hbGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGEgPT0gYiA/IDAgOiBhID4gYiA/IDEgOiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGEgPCAwICE9PSBuLnNpZ24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGEgPCAwID8gLTEgOiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYSA8IDAgPyAxIDogLTE7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5jb21wYXJlVG8gPSBTbWFsbEludGVnZXIucHJvdG90eXBlLmNvbXBhcmU7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb21wYXJlKHYpID09PSAwO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuZXEgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLmVxdWFscyA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmVxID0gQmlnSW50ZWdlci5wcm90b3R5cGUuZXF1YWxzO1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm5vdEVxdWFscyA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZSh2KSAhPT0gMDtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLm5lcSA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUubm90RXF1YWxzID0gQmlnSW50ZWdlci5wcm90b3R5cGUubmVxID0gQmlnSW50ZWdlci5wcm90b3R5cGUubm90RXF1YWxzO1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmdyZWF0ZXIgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBhcmUodikgPiAwO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuZ3QgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLmdyZWF0ZXIgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5ndCA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmdyZWF0ZXI7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubGVzc2VyID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb21wYXJlKHYpIDwgMDtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLmx0ID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5sZXNzZXIgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5sdCA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmxlc3NlcjtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5ncmVhdGVyT3JFcXVhbHMgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBhcmUodikgPj0gMDtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLmdlcSA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUuZ3JlYXRlck9yRXF1YWxzID0gQmlnSW50ZWdlci5wcm90b3R5cGUuZ2VxID0gQmlnSW50ZWdlci5wcm90b3R5cGUuZ3JlYXRlck9yRXF1YWxzO1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmxlc3Nlck9yRXF1YWxzID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb21wYXJlKHYpIDw9IDA7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5sZXEgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLmxlc3Nlck9yRXF1YWxzID0gQmlnSW50ZWdlci5wcm90b3R5cGUubGVxID0gQmlnSW50ZWdlci5wcm90b3R5cGUubGVzc2VyT3JFcXVhbHM7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuaXNFdmVuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy52YWx1ZVswXSAmIDEpID09PSAwO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuaXNFdmVuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy52YWx1ZSAmIDEpID09PSAwO1xyXG4gICAgfTtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc09kZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMudmFsdWVbMF0gJiAxKSA9PT0gMTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLmlzT2RkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy52YWx1ZSAmIDEpID09PSAxO1xyXG4gICAgfTtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc1Bvc2l0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5zaWduO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuaXNQb3NpdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSA+IDA7XHJcbiAgICB9O1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmlzTmVnYXRpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2lnbjtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLmlzTmVnYXRpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgPCAwO1xyXG4gICAgfTtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc1VuaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuaXNVbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmFicyh0aGlzLnZhbHVlKSA9PT0gMTtcclxuICAgIH07XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuaXNaZXJvID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLmlzWmVybyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSA9PT0gMDtcclxuICAgIH07XHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc0RpdmlzaWJsZUJ5ID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICB2YXIgbiA9IHBhcnNlVmFsdWUodik7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gbi52YWx1ZTtcclxuICAgICAgICBpZiAodmFsdWUgPT09IDApIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAodmFsdWUgPT09IDEpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMikgcmV0dXJuIHRoaXMuaXNFdmVuKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kKG4pLmVxdWFscyhJbnRlZ2VyWzBdKTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLmlzRGl2aXNpYmxlQnkgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc0RpdmlzaWJsZUJ5O1xyXG5cclxuICAgIGZ1bmN0aW9uIGlzQmFzaWNQcmltZSh2KSB7XHJcbiAgICAgICAgdmFyIG4gPSB2LmFicygpO1xyXG4gICAgICAgIGlmIChuLmlzVW5pdCgpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKG4uZXF1YWxzKDIpIHx8IG4uZXF1YWxzKDMpIHx8IG4uZXF1YWxzKDUpKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBpZiAobi5pc0V2ZW4oKSB8fCBuLmlzRGl2aXNpYmxlQnkoMykgfHwgbi5pc0RpdmlzaWJsZUJ5KDUpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKG4ubGVzc2VyKDI1KSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgLy8gd2UgZG9uJ3Qga25vdyBpZiBpdCdzIHByaW1lOiBsZXQgdGhlIG90aGVyIGZ1bmN0aW9ucyBmaWd1cmUgaXQgb3V0XHJcbiAgICB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuaXNQcmltZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaXNQcmltZSA9IGlzQmFzaWNQcmltZSh0aGlzKTtcclxuICAgICAgICBpZiAoaXNQcmltZSAhPT0gdW5kZWZpbmVkKSByZXR1cm4gaXNQcmltZTtcclxuICAgICAgICB2YXIgbiA9IHRoaXMuYWJzKCksXHJcbiAgICAgICAgICAgIG5QcmV2ID0gbi5wcmV2KCk7XHJcbiAgICAgICAgdmFyIGEgPSBbMiwgMywgNSwgNywgMTEsIDEzLCAxNywgMTldLFxyXG4gICAgICAgICAgICBiID0gblByZXYsXHJcbiAgICAgICAgICAgIGQsIHQsIGksIHg7XHJcbiAgICAgICAgd2hpbGUgKGIuaXNFdmVuKCkpIGIgPSBiLmRpdmlkZSgyKTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB4ID0gYmlnSW50KGFbaV0pLm1vZFBvdyhiLCBuKTtcclxuICAgICAgICAgICAgaWYgKHguZXF1YWxzKEludGVnZXJbMV0pIHx8IHguZXF1YWxzKG5QcmV2KSkgY29udGludWU7XHJcbiAgICAgICAgICAgIGZvciAodCA9IHRydWUsIGQgPSBiOyB0ICYmIGQubGVzc2VyKG5QcmV2KTsgZCA9IGQubXVsdGlwbHkoMikpIHtcclxuICAgICAgICAgICAgICAgIHggPSB4LnNxdWFyZSgpLm1vZChuKTtcclxuICAgICAgICAgICAgICAgIGlmICh4LmVxdWFscyhuUHJldikpIHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLmlzUHJpbWUgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc1ByaW1lO1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmlzUHJvYmFibGVQcmltZSA9IGZ1bmN0aW9uIChpdGVyYXRpb25zKSB7XHJcbiAgICAgICAgdmFyIGlzUHJpbWUgPSBpc0Jhc2ljUHJpbWUodGhpcyk7XHJcbiAgICAgICAgaWYgKGlzUHJpbWUgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGlzUHJpbWU7XHJcbiAgICAgICAgdmFyIG4gPSB0aGlzLmFicygpO1xyXG4gICAgICAgIHZhciB0ID0gaXRlcmF0aW9ucyA9PT0gdW5kZWZpbmVkID8gNSA6IGl0ZXJhdGlvbnM7XHJcbiAgICAgICAgLy8gdXNlIHRoZSBGZXJtYXQgcHJpbWFsaXR5IHRlc3RcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHQ7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgYSA9IGJpZ0ludC5yYW5kQmV0d2VlbigyLCBuLm1pbnVzKDIpKTtcclxuICAgICAgICAgICAgaWYgKCFhLm1vZFBvdyhuLnByZXYoKSwgbikuaXNVbml0KCkpIHJldHVybiBmYWxzZTsgLy8gZGVmaW5pdGVseSBjb21wb3NpdGVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7IC8vIGxhcmdlIGNoYW5jZSBvZiBiZWluZyBwcmltZVxyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuaXNQcm9iYWJsZVByaW1lID0gQmlnSW50ZWdlci5wcm90b3R5cGUuaXNQcm9iYWJsZVByaW1lO1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm1vZEludiA9IGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgICAgdmFyIHQgPSBiaWdJbnQuemVybywgbmV3VCA9IGJpZ0ludC5vbmUsIHIgPSBwYXJzZVZhbHVlKG4pLCBuZXdSID0gdGhpcy5hYnMoKSwgcSwgbGFzdFQsIGxhc3RSO1xyXG4gICAgICAgIHdoaWxlICghbmV3Ui5lcXVhbHMoYmlnSW50Lnplcm8pKSB7XHJcbiAgICAgICAgICAgIHEgPSByLmRpdmlkZShuZXdSKTtcclxuICAgICAgICAgICAgbGFzdFQgPSB0O1xyXG4gICAgICAgICAgICBsYXN0UiA9IHI7XHJcbiAgICAgICAgICAgIHQgPSBuZXdUO1xyXG4gICAgICAgICAgICByID0gbmV3UjtcclxuICAgICAgICAgICAgbmV3VCA9IGxhc3RULnN1YnRyYWN0KHEubXVsdGlwbHkobmV3VCkpO1xyXG4gICAgICAgICAgICBuZXdSID0gbGFzdFIuc3VidHJhY3QocS5tdWx0aXBseShuZXdSKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghci5lcXVhbHMoMSkpIHRocm93IG5ldyBFcnJvcih0aGlzLnRvU3RyaW5nKCkgKyBcIiBhbmQgXCIgKyBuLnRvU3RyaW5nKCkgKyBcIiBhcmUgbm90IGNvLXByaW1lXCIpO1xyXG4gICAgICAgIGlmICh0LmNvbXBhcmUoMCkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHQgPSB0LmFkZChuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNOZWdhdGl2ZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0Lm5lZ2F0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcblxyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5tb2RJbnYgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2RJbnY7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIGlmICh0aGlzLnNpZ24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN1YnRyYWN0U21hbGwodmFsdWUsIDEsIHRoaXMuc2lnbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcihhZGRTbWFsbCh2YWx1ZSwgMSksIHRoaXMuc2lnbik7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgaWYgKHZhbHVlICsgMSA8IE1BWF9JTlQpIHJldHVybiBuZXcgU21hbGxJbnRlZ2VyKHZhbHVlICsgMSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKE1BWF9JTlRfQVJSLCBmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnByZXYgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZTtcclxuICAgICAgICBpZiAodGhpcy5zaWduKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcihhZGRTbWFsbCh2YWx1ZSwgMSksIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3VidHJhY3RTbWFsbCh2YWx1ZSwgMSwgdGhpcy5zaWduKTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLnByZXYgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZTtcclxuICAgICAgICBpZiAodmFsdWUgLSAxID4gLU1BWF9JTlQpIHJldHVybiBuZXcgU21hbGxJbnRlZ2VyKHZhbHVlIC0gMSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKE1BWF9JTlRfQVJSLCB0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHBvd2Vyc09mVHdvID0gWzFdO1xyXG4gICAgd2hpbGUgKDIgKiBwb3dlcnNPZlR3b1twb3dlcnNPZlR3by5sZW5ndGggLSAxXSA8PSBCQVNFKSBwb3dlcnNPZlR3by5wdXNoKDIgKiBwb3dlcnNPZlR3b1twb3dlcnNPZlR3by5sZW5ndGggLSAxXSk7XHJcbiAgICB2YXIgcG93ZXJzMkxlbmd0aCA9IHBvd2Vyc09mVHdvLmxlbmd0aCwgaGlnaGVzdFBvd2VyMiA9IHBvd2Vyc09mVHdvW3Bvd2VyczJMZW5ndGggLSAxXTtcclxuXHJcbiAgICBmdW5jdGlvbiBzaGlmdF9pc1NtYWxsKG4pIHtcclxuICAgICAgICByZXR1cm4gKCh0eXBlb2YgbiA9PT0gXCJudW1iZXJcIiB8fCB0eXBlb2YgbiA9PT0gXCJzdHJpbmdcIikgJiYgK01hdGguYWJzKG4pIDw9IEJBU0UpIHx8XHJcbiAgICAgICAgICAgIChuIGluc3RhbmNlb2YgQmlnSW50ZWdlciAmJiBuLnZhbHVlLmxlbmd0aCA8PSAxKTtcclxuICAgIH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zaGlmdExlZnQgPSBmdW5jdGlvbiAobikge1xyXG4gICAgICAgIGlmICghc2hpZnRfaXNTbWFsbChuKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoU3RyaW5nKG4pICsgXCIgaXMgdG9vIGxhcmdlIGZvciBzaGlmdGluZy5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG4gPSArbjtcclxuICAgICAgICBpZiAobiA8IDApIHJldHVybiB0aGlzLnNoaWZ0UmlnaHQoLW4pO1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzO1xyXG4gICAgICAgIHdoaWxlIChuID49IHBvd2VyczJMZW5ndGgpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0Lm11bHRpcGx5KGhpZ2hlc3RQb3dlcjIpO1xyXG4gICAgICAgICAgICBuIC09IHBvd2VyczJMZW5ndGggLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0Lm11bHRpcGx5KHBvd2Vyc09mVHdvW25dKTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLnNoaWZ0TGVmdCA9IEJpZ0ludGVnZXIucHJvdG90eXBlLnNoaWZ0TGVmdDtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zaGlmdFJpZ2h0ID0gZnVuY3Rpb24gKG4pIHtcclxuICAgICAgICB2YXIgcmVtUXVvO1xyXG4gICAgICAgIGlmICghc2hpZnRfaXNTbWFsbChuKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoU3RyaW5nKG4pICsgXCIgaXMgdG9vIGxhcmdlIGZvciBzaGlmdGluZy5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG4gPSArbjtcclxuICAgICAgICBpZiAobiA8IDApIHJldHVybiB0aGlzLnNoaWZ0TGVmdCgtbik7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXM7XHJcbiAgICAgICAgd2hpbGUgKG4gPj0gcG93ZXJzMkxlbmd0aCkge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmlzWmVybygpKSByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICByZW1RdW8gPSBkaXZNb2RBbnkocmVzdWx0LCBoaWdoZXN0UG93ZXIyKTtcclxuICAgICAgICAgICAgcmVzdWx0ID0gcmVtUXVvWzFdLmlzTmVnYXRpdmUoKSA/IHJlbVF1b1swXS5wcmV2KCkgOiByZW1RdW9bMF07XHJcbiAgICAgICAgICAgIG4gLT0gcG93ZXJzMkxlbmd0aCAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlbVF1byA9IGRpdk1vZEFueShyZXN1bHQsIHBvd2Vyc09mVHdvW25dKTtcclxuICAgICAgICByZXR1cm4gcmVtUXVvWzFdLmlzTmVnYXRpdmUoKSA/IHJlbVF1b1swXS5wcmV2KCkgOiByZW1RdW9bMF07XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5zaGlmdFJpZ2h0ID0gQmlnSW50ZWdlci5wcm90b3R5cGUuc2hpZnRSaWdodDtcclxuXHJcbiAgICBmdW5jdGlvbiBiaXR3aXNlKHgsIHksIGZuKSB7XHJcbiAgICAgICAgeSA9IHBhcnNlVmFsdWUoeSk7XHJcbiAgICAgICAgdmFyIHhTaWduID0geC5pc05lZ2F0aXZlKCksIHlTaWduID0geS5pc05lZ2F0aXZlKCk7XHJcbiAgICAgICAgdmFyIHhSZW0gPSB4U2lnbiA/IHgubm90KCkgOiB4LFxyXG4gICAgICAgICAgICB5UmVtID0geVNpZ24gPyB5Lm5vdCgpIDogeTtcclxuICAgICAgICB2YXIgeERpZ2l0ID0gMCwgeURpZ2l0ID0gMDtcclxuICAgICAgICB2YXIgeERpdk1vZCA9IG51bGwsIHlEaXZNb2QgPSBudWxsO1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcclxuICAgICAgICB3aGlsZSAoIXhSZW0uaXNaZXJvKCkgfHwgIXlSZW0uaXNaZXJvKCkpIHtcclxuICAgICAgICAgICAgeERpdk1vZCA9IGRpdk1vZEFueSh4UmVtLCBoaWdoZXN0UG93ZXIyKTtcclxuICAgICAgICAgICAgeERpZ2l0ID0geERpdk1vZFsxXS50b0pTTnVtYmVyKCk7XHJcbiAgICAgICAgICAgIGlmICh4U2lnbikge1xyXG4gICAgICAgICAgICAgICAgeERpZ2l0ID0gaGlnaGVzdFBvd2VyMiAtIDEgLSB4RGlnaXQ7IC8vIHR3bydzIGNvbXBsZW1lbnQgZm9yIG5lZ2F0aXZlIG51bWJlcnNcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgeURpdk1vZCA9IGRpdk1vZEFueSh5UmVtLCBoaWdoZXN0UG93ZXIyKTtcclxuICAgICAgICAgICAgeURpZ2l0ID0geURpdk1vZFsxXS50b0pTTnVtYmVyKCk7XHJcbiAgICAgICAgICAgIGlmICh5U2lnbikge1xyXG4gICAgICAgICAgICAgICAgeURpZ2l0ID0gaGlnaGVzdFBvd2VyMiAtIDEgLSB5RGlnaXQ7IC8vIHR3bydzIGNvbXBsZW1lbnQgZm9yIG5lZ2F0aXZlIG51bWJlcnNcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgeFJlbSA9IHhEaXZNb2RbMF07XHJcbiAgICAgICAgICAgIHlSZW0gPSB5RGl2TW9kWzBdO1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChmbih4RGlnaXQsIHlEaWdpdCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc3VtID0gZm4oeFNpZ24gPyAxIDogMCwgeVNpZ24gPyAxIDogMCkgIT09IDAgPyBiaWdJbnQoLTEpIDogYmlnSW50KDApO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSByZXN1bHQubGVuZ3RoIC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcclxuICAgICAgICAgICAgc3VtID0gc3VtLm11bHRpcGx5KGhpZ2hlc3RQb3dlcjIpLmFkZChiaWdJbnQocmVzdWx0W2ldKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdW07XHJcbiAgICB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubm90ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5lZ2F0ZSgpLnByZXYoKTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLm5vdCA9IEJpZ0ludGVnZXIucHJvdG90eXBlLm5vdDtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hbmQgPSBmdW5jdGlvbiAobikge1xyXG4gICAgICAgIHJldHVybiBiaXR3aXNlKHRoaXMsIG4sIGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhICYgYjsgfSk7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5hbmQgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hbmQ7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUub3IgPSBmdW5jdGlvbiAobikge1xyXG4gICAgICAgIHJldHVybiBiaXR3aXNlKHRoaXMsIG4sIGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhIHwgYjsgfSk7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5vciA9IEJpZ0ludGVnZXIucHJvdG90eXBlLm9yO1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnhvciA9IGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgICAgcmV0dXJuIGJpdHdpc2UodGhpcywgbiwgZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEgXiBiOyB9KTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLnhvciA9IEJpZ0ludGVnZXIucHJvdG90eXBlLnhvcjtcclxuXHJcbiAgICB2YXIgTE9CTUFTS19JID0gMSA8PCAzMCwgTE9CTUFTS19CSSA9IChCQVNFICYgLUJBU0UpICogKEJBU0UgJiAtQkFTRSkgfCBMT0JNQVNLX0k7XHJcbiAgICBmdW5jdGlvbiByb3VnaExPQihuKSB7IC8vIGdldCBsb3dlc3RPbmVCaXQgKHJvdWdoKVxyXG4gICAgICAgIC8vIFNtYWxsSW50ZWdlcjogcmV0dXJuIE1pbihsb3dlc3RPbmVCaXQobiksIDEgPDwgMzApXHJcbiAgICAgICAgLy8gQmlnSW50ZWdlcjogcmV0dXJuIE1pbihsb3dlc3RPbmVCaXQobiksIDEgPDwgMTQpIFtCQVNFPTFlN11cclxuICAgICAgICB2YXIgdiA9IG4udmFsdWUsIHggPSB0eXBlb2YgdiA9PT0gXCJudW1iZXJcIiA/IHYgfCBMT0JNQVNLX0kgOiB2WzBdICsgdlsxXSAqIEJBU0UgfCBMT0JNQVNLX0JJO1xyXG4gICAgICAgIHJldHVybiB4ICYgLXg7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW50ZWdlckxvZ2FyaXRobSh2YWx1ZSwgYmFzZSkge1xyXG4gICAgICAgIGlmIChiYXNlLmNvbXBhcmVUbyh2YWx1ZSkgPD0gMCkge1xyXG4gICAgICAgICAgICB2YXIgdG1wID0gaW50ZWdlckxvZ2FyaXRobSh2YWx1ZSwgYmFzZS5zcXVhcmUoYmFzZSkpO1xyXG4gICAgICAgICAgICB2YXIgcCA9IHRtcC5wO1xyXG4gICAgICAgICAgICB2YXIgZSA9IHRtcC5lO1xyXG4gICAgICAgICAgICB2YXIgdCA9IHAubXVsdGlwbHkoYmFzZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0LmNvbXBhcmVUbyh2YWx1ZSkgPD0gMCA/IHsgcDogdCwgZTogZSAqIDIgKyAxIH0gOiB7IHA6IHAsIGU6IGUgKiAyIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHA6IGJpZ0ludCgxKSwgZTogMCB9O1xyXG4gICAgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmJpdExlbmd0aCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbiA9IHRoaXM7XHJcbiAgICAgICAgaWYgKG4uY29tcGFyZVRvKGJpZ0ludCgwKSkgPCAwKSB7XHJcbiAgICAgICAgICAgIG4gPSBuLm5lZ2F0ZSgpLnN1YnRyYWN0KGJpZ0ludCgxKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuLmNvbXBhcmVUbyhiaWdJbnQoMCkpID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBiaWdJbnQoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBiaWdJbnQoaW50ZWdlckxvZ2FyaXRobShuLCBiaWdJbnQoMikpLmUpLmFkZChiaWdJbnQoMSkpO1xyXG4gICAgfVxyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5iaXRMZW5ndGggPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5iaXRMZW5ndGg7XHJcblxyXG4gICAgZnVuY3Rpb24gbWF4KGEsIGIpIHtcclxuICAgICAgICBhID0gcGFyc2VWYWx1ZShhKTtcclxuICAgICAgICBiID0gcGFyc2VWYWx1ZShiKTtcclxuICAgICAgICByZXR1cm4gYS5ncmVhdGVyKGIpID8gYSA6IGI7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBtaW4oYSwgYikge1xyXG4gICAgICAgIGEgPSBwYXJzZVZhbHVlKGEpO1xyXG4gICAgICAgIGIgPSBwYXJzZVZhbHVlKGIpO1xyXG4gICAgICAgIHJldHVybiBhLmxlc3NlcihiKSA/IGEgOiBiO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2NkKGEsIGIpIHtcclxuICAgICAgICBhID0gcGFyc2VWYWx1ZShhKS5hYnMoKTtcclxuICAgICAgICBiID0gcGFyc2VWYWx1ZShiKS5hYnMoKTtcclxuICAgICAgICBpZiAoYS5lcXVhbHMoYikpIHJldHVybiBhO1xyXG4gICAgICAgIGlmIChhLmlzWmVybygpKSByZXR1cm4gYjtcclxuICAgICAgICBpZiAoYi5pc1plcm8oKSkgcmV0dXJuIGE7XHJcbiAgICAgICAgdmFyIGMgPSBJbnRlZ2VyWzFdLCBkLCB0O1xyXG4gICAgICAgIHdoaWxlIChhLmlzRXZlbigpICYmIGIuaXNFdmVuKCkpIHtcclxuICAgICAgICAgICAgZCA9IE1hdGgubWluKHJvdWdoTE9CKGEpLCByb3VnaExPQihiKSk7XHJcbiAgICAgICAgICAgIGEgPSBhLmRpdmlkZShkKTtcclxuICAgICAgICAgICAgYiA9IGIuZGl2aWRlKGQpO1xyXG4gICAgICAgICAgICBjID0gYy5tdWx0aXBseShkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKGEuaXNFdmVuKCkpIHtcclxuICAgICAgICAgICAgYSA9IGEuZGl2aWRlKHJvdWdoTE9CKGEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICB3aGlsZSAoYi5pc0V2ZW4oKSkge1xyXG4gICAgICAgICAgICAgICAgYiA9IGIuZGl2aWRlKHJvdWdoTE9CKGIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYS5ncmVhdGVyKGIpKSB7XHJcbiAgICAgICAgICAgICAgICB0ID0gYjsgYiA9IGE7IGEgPSB0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGIgPSBiLnN1YnRyYWN0KGEpO1xyXG4gICAgICAgIH0gd2hpbGUgKCFiLmlzWmVybygpKTtcclxuICAgICAgICByZXR1cm4gYy5pc1VuaXQoKSA/IGEgOiBhLm11bHRpcGx5KGMpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbGNtKGEsIGIpIHtcclxuICAgICAgICBhID0gcGFyc2VWYWx1ZShhKS5hYnMoKTtcclxuICAgICAgICBiID0gcGFyc2VWYWx1ZShiKS5hYnMoKTtcclxuICAgICAgICByZXR1cm4gYS5kaXZpZGUoZ2NkKGEsIGIpKS5tdWx0aXBseShiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJhbmRCZXR3ZWVuKGEsIGIpIHtcclxuICAgICAgICBhID0gcGFyc2VWYWx1ZShhKTtcclxuICAgICAgICBiID0gcGFyc2VWYWx1ZShiKTtcclxuICAgICAgICB2YXIgbG93ID0gbWluKGEsIGIpLCBoaWdoID0gbWF4KGEsIGIpO1xyXG4gICAgICAgIHZhciByYW5nZSA9IGhpZ2guc3VidHJhY3QobG93KS5hZGQoMSk7XHJcbiAgICAgICAgaWYgKHJhbmdlLmlzU21hbGwpIHJldHVybiBsb3cuYWRkKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJhbmdlKSk7XHJcbiAgICAgICAgdmFyIGxlbmd0aCA9IHJhbmdlLnZhbHVlLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdLCByZXN0cmljdGVkID0gdHJ1ZTtcclxuICAgICAgICBmb3IgKHZhciBpID0gbGVuZ3RoOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICB2YXIgdG9wID0gcmVzdHJpY3RlZCA/IHJhbmdlLnZhbHVlW2ldIDogQkFTRTtcclxuICAgICAgICAgICAgdmFyIGRpZ2l0ID0gdHJ1bmNhdGUoTWF0aC5yYW5kb20oKSAqIHRvcCk7XHJcbiAgICAgICAgICAgIHJlc3VsdC51bnNoaWZ0KGRpZ2l0KTtcclxuICAgICAgICAgICAgaWYgKGRpZ2l0IDwgdG9wKSByZXN0cmljdGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc3VsdCA9IGFycmF5VG9TbWFsbChyZXN1bHQpO1xyXG4gICAgICAgIHJldHVybiBsb3cuYWRkKHR5cGVvZiByZXN1bHQgPT09IFwibnVtYmVyXCIgPyBuZXcgU21hbGxJbnRlZ2VyKHJlc3VsdCkgOiBuZXcgQmlnSW50ZWdlcihyZXN1bHQsIGZhbHNlKSk7XHJcbiAgICB9XHJcbiAgICB2YXIgcGFyc2VCYXNlID0gZnVuY3Rpb24gKHRleHQsIGJhc2UpIHtcclxuICAgICAgICB2YXIgbGVuZ3RoID0gdGV4dC5sZW5ndGg7XHJcbiAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgdmFyIGFic0Jhc2UgPSBNYXRoLmFicyhiYXNlKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBjID0gdGV4dFtpXS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBpZiAoYyA9PT0gXCItXCIpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAoL1thLXowLTldLy50ZXN0KGMpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoL1swLTldLy50ZXN0KGMpICYmICtjID49IGFic0Jhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYyA9PT0gXCIxXCIgJiYgYWJzQmFzZSA9PT0gMSkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGMgKyBcIiBpcyBub3QgYSB2YWxpZCBkaWdpdCBpbiBiYXNlIFwiICsgYmFzZSArIFwiLlwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYy5jaGFyQ29kZUF0KDApIC0gODcgPj0gYWJzQmFzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihjICsgXCIgaXMgbm90IGEgdmFsaWQgZGlnaXQgaW4gYmFzZSBcIiArIGJhc2UgKyBcIi5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKDIgPD0gYmFzZSAmJiBiYXNlIDw9IDM2KSB7XHJcbiAgICAgICAgICAgIGlmIChsZW5ndGggPD0gTE9HX01BWF9JTlQgLyBNYXRoLmxvZyhiYXNlKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHBhcnNlSW50KHRleHQsIGJhc2UpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzTmFOKHJlc3VsdCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYyArIFwiIGlzIG5vdCBhIHZhbGlkIGRpZ2l0IGluIGJhc2UgXCIgKyBiYXNlICsgXCIuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTbWFsbEludGVnZXIocGFyc2VJbnQodGV4dCwgYmFzZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJhc2UgPSBwYXJzZVZhbHVlKGJhc2UpO1xyXG4gICAgICAgIHZhciBkaWdpdHMgPSBbXTtcclxuICAgICAgICB2YXIgaXNOZWdhdGl2ZSA9IHRleHRbMF0gPT09IFwiLVwiO1xyXG4gICAgICAgIGZvciAoaSA9IGlzTmVnYXRpdmUgPyAxIDogMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGMgPSB0ZXh0W2ldLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICAgICAgICBjaGFyQ29kZSA9IGMuY2hhckNvZGVBdCgwKTtcclxuICAgICAgICAgICAgaWYgKDQ4IDw9IGNoYXJDb2RlICYmIGNoYXJDb2RlIDw9IDU3KSBkaWdpdHMucHVzaChwYXJzZVZhbHVlKGMpKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAoOTcgPD0gY2hhckNvZGUgJiYgY2hhckNvZGUgPD0gMTIyKSBkaWdpdHMucHVzaChwYXJzZVZhbHVlKGMuY2hhckNvZGVBdCgwKSAtIDg3KSk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGMgPT09IFwiPFwiKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnQgPSBpO1xyXG4gICAgICAgICAgICAgICAgZG8geyBpKys7IH0gd2hpbGUgKHRleHRbaV0gIT09IFwiPlwiKTtcclxuICAgICAgICAgICAgICAgIGRpZ2l0cy5wdXNoKHBhcnNlVmFsdWUodGV4dC5zbGljZShzdGFydCArIDEsIGkpKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB0aHJvdyBuZXcgRXJyb3IoYyArIFwiIGlzIG5vdCBhIHZhbGlkIGNoYXJhY3RlclwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlQmFzZUZyb21BcnJheShkaWdpdHMsIGJhc2UsIGlzTmVnYXRpdmUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBwYXJzZUJhc2VGcm9tQXJyYXkoZGlnaXRzLCBiYXNlLCBpc05lZ2F0aXZlKSB7XHJcbiAgICAgICAgdmFyIHZhbCA9IEludGVnZXJbMF0sIHBvdyA9IEludGVnZXJbMV0sIGk7XHJcbiAgICAgICAgZm9yIChpID0gZGlnaXRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIHZhbCA9IHZhbC5hZGQoZGlnaXRzW2ldLnRpbWVzKHBvdykpO1xyXG4gICAgICAgICAgICBwb3cgPSBwb3cudGltZXMoYmFzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpc05lZ2F0aXZlID8gdmFsLm5lZ2F0ZSgpIDogdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN0cmluZ2lmeShkaWdpdCkge1xyXG4gICAgICAgIGlmIChkaWdpdCA8PSAzNSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCIwMTIzNDU2Nzg5YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpcIi5jaGFyQXQoZGlnaXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCI8XCIgKyBkaWdpdCArIFwiPlwiO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvQmFzZShuLCBiYXNlKSB7XHJcbiAgICAgICAgYmFzZSA9IGJpZ0ludChiYXNlKTtcclxuICAgICAgICBpZiAoYmFzZS5pc1plcm8oKSkge1xyXG4gICAgICAgICAgICBpZiAobi5pc1plcm8oKSkgcmV0dXJuIHsgdmFsdWU6IFswXSwgaXNOZWdhdGl2ZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGNvbnZlcnQgbm9uemVybyBudW1iZXJzIHRvIGJhc2UgMC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChiYXNlLmVxdWFscygtMSkpIHtcclxuICAgICAgICAgICAgaWYgKG4uaXNaZXJvKCkpIHJldHVybiB7IHZhbHVlOiBbMF0sIGlzTmVnYXRpdmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgIGlmIChuLmlzTmVnYXRpdmUoKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFtdLmNvbmNhdC5hcHBseShbXSwgQXJyYXkuYXBwbHkobnVsbCwgQXJyYXkoLW4pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKEFycmF5LnByb3RvdHlwZS52YWx1ZU9mLCBbMSwgMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICBpc05lZ2F0aXZlOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHZhciBhcnIgPSBBcnJheS5hcHBseShudWxsLCBBcnJheSgrbiAtIDEpKVxyXG4gICAgICAgICAgICAgICAgLm1hcChBcnJheS5wcm90b3R5cGUudmFsdWVPZiwgWzAsIDFdKTtcclxuICAgICAgICAgICAgYXJyLnVuc2hpZnQoWzFdKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBbXS5jb25jYXQuYXBwbHkoW10sIGFyciksXHJcbiAgICAgICAgICAgICAgICBpc05lZ2F0aXZlOiBmYWxzZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG5lZyA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChuLmlzTmVnYXRpdmUoKSAmJiBiYXNlLmlzUG9zaXRpdmUoKSkge1xyXG4gICAgICAgICAgICBuZWcgPSB0cnVlO1xyXG4gICAgICAgICAgICBuID0gbi5hYnMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJhc2UuZXF1YWxzKDEpKSB7XHJcbiAgICAgICAgICAgIGlmIChuLmlzWmVybygpKSByZXR1cm4geyB2YWx1ZTogWzBdLCBpc05lZ2F0aXZlOiBmYWxzZSB9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBBcnJheS5hcHBseShudWxsLCBBcnJheSgrbikpXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcChOdW1iZXIucHJvdG90eXBlLnZhbHVlT2YsIDEpLFxyXG4gICAgICAgICAgICAgICAgaXNOZWdhdGl2ZTogbmVnXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBvdXQgPSBbXTtcclxuICAgICAgICB2YXIgbGVmdCA9IG4sIGRpdm1vZDtcclxuICAgICAgICB3aGlsZSAobGVmdC5pc05lZ2F0aXZlKCkgfHwgbGVmdC5jb21wYXJlQWJzKGJhc2UpID49IDApIHtcclxuICAgICAgICAgICAgZGl2bW9kID0gbGVmdC5kaXZtb2QoYmFzZSk7XHJcbiAgICAgICAgICAgIGxlZnQgPSBkaXZtb2QucXVvdGllbnQ7XHJcbiAgICAgICAgICAgIHZhciBkaWdpdCA9IGRpdm1vZC5yZW1haW5kZXI7XHJcbiAgICAgICAgICAgIGlmIChkaWdpdC5pc05lZ2F0aXZlKCkpIHtcclxuICAgICAgICAgICAgICAgIGRpZ2l0ID0gYmFzZS5taW51cyhkaWdpdCkuYWJzKCk7XHJcbiAgICAgICAgICAgICAgICBsZWZ0ID0gbGVmdC5uZXh0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3V0LnB1c2goZGlnaXQudG9KU051bWJlcigpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb3V0LnB1c2gobGVmdC50b0pTTnVtYmVyKCkpO1xyXG4gICAgICAgIHJldHVybiB7IHZhbHVlOiBvdXQucmV2ZXJzZSgpLCBpc05lZ2F0aXZlOiBuZWcgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0b0Jhc2VTdHJpbmcobiwgYmFzZSkge1xyXG4gICAgICAgIHZhciBhcnIgPSB0b0Jhc2UobiwgYmFzZSk7XHJcbiAgICAgICAgcmV0dXJuIChhcnIuaXNOZWdhdGl2ZSA/IFwiLVwiIDogXCJcIikgKyBhcnIudmFsdWUubWFwKHN0cmluZ2lmeSkuam9pbignJyk7XHJcbiAgICB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uIChyYWRpeCkge1xyXG4gICAgICAgIHJldHVybiB0b0Jhc2UodGhpcywgcmFkaXgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLnRvQXJyYXkgPSBmdW5jdGlvbiAocmFkaXgpIHtcclxuICAgICAgICByZXR1cm4gdG9CYXNlKHRoaXMsIHJhZGl4KTtcclxuICAgIH07XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAocmFkaXgpIHtcclxuICAgICAgICBpZiAocmFkaXggPT09IHVuZGVmaW5lZCkgcmFkaXggPSAxMDtcclxuICAgICAgICBpZiAocmFkaXggIT09IDEwKSByZXR1cm4gdG9CYXNlU3RyaW5nKHRoaXMsIHJhZGl4KTtcclxuICAgICAgICB2YXIgdiA9IHRoaXMudmFsdWUsIGwgPSB2Lmxlbmd0aCwgc3RyID0gU3RyaW5nKHZbLS1sXSksIHplcm9zID0gXCIwMDAwMDAwXCIsIGRpZ2l0O1xyXG4gICAgICAgIHdoaWxlICgtLWwgPj0gMCkge1xyXG4gICAgICAgICAgICBkaWdpdCA9IFN0cmluZyh2W2xdKTtcclxuICAgICAgICAgICAgc3RyICs9IHplcm9zLnNsaWNlKGRpZ2l0Lmxlbmd0aCkgKyBkaWdpdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNpZ24gPSB0aGlzLnNpZ24gPyBcIi1cIiA6IFwiXCI7XHJcbiAgICAgICAgcmV0dXJuIHNpZ24gKyBzdHI7XHJcbiAgICB9O1xyXG5cclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAocmFkaXgpIHtcclxuICAgICAgICBpZiAocmFkaXggPT09IHVuZGVmaW5lZCkgcmFkaXggPSAxMDtcclxuICAgICAgICBpZiAocmFkaXggIT0gMTApIHJldHVybiB0b0Jhc2VTdHJpbmcodGhpcywgcmFkaXgpO1xyXG4gICAgICAgIHJldHVybiBTdHJpbmcodGhpcy52YWx1ZSk7XHJcbiAgICB9O1xyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUudG9KU09OID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLnRvU3RyaW5nKCk7IH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS52YWx1ZU9mID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLnRvU3RyaW5nKCksIDEwKTtcclxuICAgIH07XHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS50b0pTTnVtYmVyID0gQmlnSW50ZWdlci5wcm90b3R5cGUudmFsdWVPZjtcclxuXHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLnZhbHVlT2YgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS50b0pTTnVtYmVyID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS52YWx1ZU9mO1xyXG5cclxuICAgIGZ1bmN0aW9uIHBhcnNlU3RyaW5nVmFsdWUodikge1xyXG4gICAgICAgIGlmIChpc1ByZWNpc2UoK3YpKSB7XHJcbiAgICAgICAgICAgIHZhciB4ID0gK3Y7XHJcbiAgICAgICAgICAgIGlmICh4ID09PSB0cnVuY2F0ZSh4KSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU21hbGxJbnRlZ2VyKHgpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGludGVnZXI6IFwiICsgdik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzaWduID0gdlswXSA9PT0gXCItXCI7XHJcbiAgICAgICAgaWYgKHNpZ24pIHYgPSB2LnNsaWNlKDEpO1xyXG4gICAgICAgIHZhciBzcGxpdCA9IHYuc3BsaXQoL2UvaSk7XHJcbiAgICAgICAgaWYgKHNwbGl0Lmxlbmd0aCA+IDIpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgaW50ZWdlcjogXCIgKyBzcGxpdC5qb2luKFwiZVwiKSk7XHJcbiAgICAgICAgaWYgKHNwbGl0Lmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICB2YXIgZXhwID0gc3BsaXRbMV07XHJcbiAgICAgICAgICAgIGlmIChleHBbMF0gPT09IFwiK1wiKSBleHAgPSBleHAuc2xpY2UoMSk7XHJcbiAgICAgICAgICAgIGV4cCA9ICtleHA7XHJcbiAgICAgICAgICAgIGlmIChleHAgIT09IHRydW5jYXRlKGV4cCkgfHwgIWlzUHJlY2lzZShleHApKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGludGVnZXI6IFwiICsgZXhwICsgXCIgaXMgbm90IGEgdmFsaWQgZXhwb25lbnQuXCIpO1xyXG4gICAgICAgICAgICB2YXIgdGV4dCA9IHNwbGl0WzBdO1xyXG4gICAgICAgICAgICB2YXIgZGVjaW1hbFBsYWNlID0gdGV4dC5pbmRleE9mKFwiLlwiKTtcclxuICAgICAgICAgICAgaWYgKGRlY2ltYWxQbGFjZSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBleHAgLT0gdGV4dC5sZW5ndGggLSBkZWNpbWFsUGxhY2UgLSAxO1xyXG4gICAgICAgICAgICAgICAgdGV4dCA9IHRleHQuc2xpY2UoMCwgZGVjaW1hbFBsYWNlKSArIHRleHQuc2xpY2UoZGVjaW1hbFBsYWNlICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGV4cCA8IDApIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBpbmNsdWRlIG5lZ2F0aXZlIGV4cG9uZW50IHBhcnQgZm9yIGludGVnZXJzXCIpO1xyXG4gICAgICAgICAgICB0ZXh0ICs9IChuZXcgQXJyYXkoZXhwICsgMSkpLmpvaW4oXCIwXCIpO1xyXG4gICAgICAgICAgICB2ID0gdGV4dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGlzVmFsaWQgPSAvXihbMC05XVswLTldKikkLy50ZXN0KHYpO1xyXG4gICAgICAgIGlmICghaXNWYWxpZCkgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBpbnRlZ2VyOiBcIiArIHYpO1xyXG4gICAgICAgIHZhciByID0gW10sIG1heCA9IHYubGVuZ3RoLCBsID0gTE9HX0JBU0UsIG1pbiA9IG1heCAtIGw7XHJcbiAgICAgICAgd2hpbGUgKG1heCA+IDApIHtcclxuICAgICAgICAgICAgci5wdXNoKCt2LnNsaWNlKG1pbiwgbWF4KSk7XHJcbiAgICAgICAgICAgIG1pbiAtPSBsO1xyXG4gICAgICAgICAgICBpZiAobWluIDwgMCkgbWluID0gMDtcclxuICAgICAgICAgICAgbWF4IC09IGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyaW0ocik7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKHIsIHNpZ24pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhcnNlTnVtYmVyVmFsdWUodikge1xyXG4gICAgICAgIGlmIChpc1ByZWNpc2UodikpIHtcclxuICAgICAgICAgICAgaWYgKHYgIT09IHRydW5jYXRlKHYpKSB0aHJvdyBuZXcgRXJyb3IodiArIFwiIGlzIG5vdCBhbiBpbnRlZ2VyLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTbWFsbEludGVnZXIodik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYXJzZVN0cmluZ1ZhbHVlKHYudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2ID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZU51bWJlclZhbHVlKHYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHYgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlU3RyaW5nVmFsdWUodik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2O1xyXG4gICAgfVxyXG4gICAgLy8gUHJlLWRlZmluZSBudW1iZXJzIGluIHJhbmdlIFstOTk5LDk5OV1cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTAwMDsgaSsrKSB7XHJcbiAgICAgICAgSW50ZWdlcltpXSA9IG5ldyBTbWFsbEludGVnZXIoaSk7XHJcbiAgICAgICAgaWYgKGkgPiAwKSBJbnRlZ2VyWy1pXSA9IG5ldyBTbWFsbEludGVnZXIoLWkpO1xyXG4gICAgfVxyXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdGliaWxpdHlcclxuICAgIEludGVnZXIub25lID0gSW50ZWdlclsxXTtcclxuICAgIEludGVnZXIuemVybyA9IEludGVnZXJbMF07XHJcbiAgICBJbnRlZ2VyLm1pbnVzT25lID0gSW50ZWdlclstMV07XHJcbiAgICBJbnRlZ2VyLm1heCA9IG1heDtcclxuICAgIEludGVnZXIubWluID0gbWluO1xyXG4gICAgSW50ZWdlci5nY2QgPSBnY2Q7XHJcbiAgICBJbnRlZ2VyLmxjbSA9IGxjbTtcclxuICAgIEludGVnZXIuaXNJbnN0YW5jZSA9IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4IGluc3RhbmNlb2YgQmlnSW50ZWdlciB8fCB4IGluc3RhbmNlb2YgU21hbGxJbnRlZ2VyOyB9O1xyXG4gICAgSW50ZWdlci5yYW5kQmV0d2VlbiA9IHJhbmRCZXR3ZWVuO1xyXG5cclxuICAgIEludGVnZXIuZnJvbUFycmF5ID0gZnVuY3Rpb24gKGRpZ2l0cywgYmFzZSwgaXNOZWdhdGl2ZSkge1xyXG4gICAgICAgIHJldHVybiBwYXJzZUJhc2VGcm9tQXJyYXkoZGlnaXRzLm1hcChwYXJzZVZhbHVlKSwgcGFyc2VWYWx1ZShiYXNlIHx8IDEwKSwgaXNOZWdhdGl2ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBJbnRlZ2VyO1xyXG59KSgpO1xyXG5cclxuLy8gTm9kZS5qcyBjaGVja1xyXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBtb2R1bGUuaGFzT3duUHJvcGVydHkoXCJleHBvcnRzXCIpKSB7XHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGJpZ0ludDtcclxufVxyXG5cclxuLy9hbWQgY2hlY2tcclxuaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XHJcbiAgICBkZWZpbmUoXCJiaWctaW50ZWdlclwiLCBbXSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBiaWdJbnQ7XHJcbiAgICB9KTtcclxufVxyXG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8vIFRoaXMgbWV0aG9kIG9mIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdCBuZWVkcyB0byBiZVxuLy8ga2VwdCBpZGVudGljYWwgdG8gdGhlIHdheSBpdCBpcyBvYnRhaW5lZCBpbiBydW50aW1lLmpzXG52YXIgZyA9IChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG5cbi8vIFVzZSBgZ2V0T3duUHJvcGVydHlOYW1lc2AgYmVjYXVzZSBub3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgY2FsbGluZ1xuLy8gYGhhc093blByb3BlcnR5YCBvbiB0aGUgZ2xvYmFsIGBzZWxmYCBvYmplY3QgaW4gYSB3b3JrZXIuIFNlZSAjMTgzLlxudmFyIGhhZFJ1bnRpbWUgPSBnLnJlZ2VuZXJhdG9yUnVudGltZSAmJlxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhnKS5pbmRleE9mKFwicmVnZW5lcmF0b3JSdW50aW1lXCIpID49IDA7XG5cbi8vIFNhdmUgdGhlIG9sZCByZWdlbmVyYXRvclJ1bnRpbWUgaW4gY2FzZSBpdCBuZWVkcyB0byBiZSByZXN0b3JlZCBsYXRlci5cbnZhciBvbGRSdW50aW1lID0gaGFkUnVudGltZSAmJiBnLnJlZ2VuZXJhdG9yUnVudGltZTtcblxuLy8gRm9yY2UgcmVldmFsdXRhdGlvbiBvZiBydW50aW1lLmpzLlxuZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vcnVudGltZVwiKTtcblxuaWYgKGhhZFJ1bnRpbWUpIHtcbiAgLy8gUmVzdG9yZSB0aGUgb3JpZ2luYWwgcnVudGltZS5cbiAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBvbGRSdW50aW1lO1xufSBlbHNlIHtcbiAgLy8gUmVtb3ZlIHRoZSBnbG9iYWwgcHJvcGVydHkgYWRkZWQgYnkgcnVudGltZS5qcy5cbiAgdHJ5IHtcbiAgICBkZWxldGUgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIH0gY2F0Y2goZSkge1xuICAgIGcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuICB9XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi4gSWYgdGhlIFByb21pc2UgaXMgcmVqZWN0ZWQsIGhvd2V2ZXIsIHRoZVxuICAgICAgICAgIC8vIHJlc3VsdCBmb3IgdGhpcyBpdGVyYXRpb24gd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoZSBzYW1lXG4gICAgICAgICAgLy8gcmVhc29uLiBOb3RlIHRoYXQgcmVqZWN0aW9ucyBvZiB5aWVsZGVkIFByb21pc2VzIGFyZSBub3RcbiAgICAgICAgICAvLyB0aHJvd24gYmFjayBpbnRvIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIGFzIGlzIHRoZSBjYXNlXG4gICAgICAgICAgLy8gd2hlbiBhbiBhd2FpdGVkIFByb21pc2UgaXMgcmVqZWN0ZWQuIFRoaXMgZGlmZmVyZW5jZSBpblxuICAgICAgICAgIC8vIGJlaGF2aW9yIGJldHdlZW4geWllbGQgYW5kIGF3YWl0IGlzIGltcG9ydGFudCwgYmVjYXVzZSBpdFxuICAgICAgICAgIC8vIGFsbG93cyB0aGUgY29uc3VtZXIgdG8gZGVjaWRlIHdoYXQgdG8gZG8gd2l0aCB0aGUgeWllbGRlZFxuICAgICAgICAgIC8vIHJlamVjdGlvbiAoc3dhbGxvdyBpdCBhbmQgY29udGludWUsIG1hbnVhbGx5IC50aHJvdyBpdCBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgZ2VuZXJhdG9yLCBhYmFuZG9uIGl0ZXJhdGlvbiwgd2hhdGV2ZXIpLiBXaXRoXG4gICAgICAgICAgLy8gYXdhaXQsIGJ5IGNvbnRyYXN0LCB0aGVyZSBpcyBubyBvcHBvcnR1bml0eSB0byBleGFtaW5lIHRoZVxuICAgICAgICAgIC8vIHJlamVjdGlvbiByZWFzb24gb3V0c2lkZSB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBzbyB0aGVcbiAgICAgICAgICAvLyBvbmx5IG9wdGlvbiBpcyB0byB0aHJvdyBpdCBmcm9tIHRoZSBhd2FpdCBleHByZXNzaW9uLCBhbmRcbiAgICAgICAgICAvLyBsZXQgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiBoYW5kbGUgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIHJ1bnRpbWUuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIHJ1bnRpbWUuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gSW4gc2xvcHB5IG1vZGUsIHVuYm91bmQgYHRoaXNgIHJlZmVycyB0byB0aGUgZ2xvYmFsIG9iamVjdCwgZmFsbGJhY2sgdG9cbiAgLy8gRnVuY3Rpb24gY29uc3RydWN0b3IgaWYgd2UncmUgaW4gZ2xvYmFsIHN0cmljdCBtb2RlLiBUaGF0IGlzIHNhZGx5IGEgZm9ybVxuICAvLyBvZiBpbmRpcmVjdCBldmFsIHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5LlxuICAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpXG4pO1xuIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgZGF0YUVycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvZGF0YUVycm9yXCIpO1xyXG5jb25zdCB0cnl0ZXNfMSA9IHJlcXVpcmUoXCIuL3RyeXRlc1wiKTtcclxuLyoqXHJcbiAqIEEgY2xhc3MgZm9yIGhhbmRsaW5nIGFkZHJlc3Nlcy5cclxuICovXHJcbmNsYXNzIEFkZHJlc3Mge1xyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjb25zdHJ1Y3RvcihhZGRyZXNzVHJ5dGVzLCBjaGVja3N1bVRyeXRlcykge1xyXG4gICAgICAgIHRoaXMuX2FkZHJlc3NUcnl0ZXMgPSBhZGRyZXNzVHJ5dGVzO1xyXG4gICAgICAgIHRoaXMuX2NoZWNrc3VtVHJ5dGVzID0gY2hlY2tzdW1Ucnl0ZXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhZGRyZXNzIGZyb20gdHJ5dGVzLlxyXG4gICAgICogQHBhcmFtIGFkZHJlc3MgVGhlIHRyeXRlcyB0byBjcmVhdGUgdGhlIGFkZHJlc3MgZnJvbS5cclxuICAgICAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIEFkZHJlc3MuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tVHJ5dGVzKGFkZHJlc3MpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoYWRkcmVzcywgdHJ5dGVzXzEuVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIGFkZHJlc3Mgc2hvdWxkIGJlIGEgdmFsaWQgVHJ5dGVzIG9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdHJ5dGVzU3RyaW5nID0gYWRkcmVzcy50b1N0cmluZygpO1xyXG4gICAgICAgIGlmICh0cnl0ZXNTdHJpbmcubGVuZ3RoICE9PSBBZGRyZXNzLkxFTkdUSCAmJiB0cnl0ZXNTdHJpbmcubGVuZ3RoICE9PSBBZGRyZXNzLkxFTkdUSF9XSVRIX0NIRUNLU1VNKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSBhZGRyZXNzIHNob3VsZCBlaXRoZXIgYmUgJHtBZGRyZXNzLkxFTkdUSH0gb3IgJHtBZGRyZXNzLkxFTkdUSF9XSVRIX0NIRUNLU1VNfSBjaGFyYWN0ZXJzIGluIGxlbmd0aGAsIHsgbGVuZ3RoOiB0cnl0ZXNTdHJpbmcubGVuZ3RoIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhZGRyZXNzVHJ5dGVzID0gdHJ5dGVzU3RyaW5nLnN1YnN0cigwLCBBZGRyZXNzLkxFTkdUSCk7XHJcbiAgICAgICAgbGV0IGNoZWNrc3VtVHJ5dGVzO1xyXG4gICAgICAgIGlmICh0cnl0ZXNTdHJpbmcubGVuZ3RoID09PSBBZGRyZXNzLkxFTkdUSF9XSVRIX0NIRUNLU1VNKSB7XHJcbiAgICAgICAgICAgIGNoZWNrc3VtVHJ5dGVzID0gdHJ5dGVzU3RyaW5nLnN1YnN0cihBZGRyZXNzLkxFTkdUSCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgQWRkcmVzcyhhZGRyZXNzVHJ5dGVzLCBjaGVja3N1bVRyeXRlcyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdGhlIGFkZHJlc3MgdG8gdHJ5dGVzIHdpdGggbm8gY2hlY2tzdW0uXHJcbiAgICAgKiBAcmV0dXJucyBUcnl0ZXMgdmVyc2lvbiBvZiB0aGUgYWRkcmVzcyB3aXRoIG5vIGNoZWNrc3VtLlxyXG4gICAgICovXHJcbiAgICB0b1RyeXRlcygpIHtcclxuICAgICAgICByZXR1cm4gdHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcodGhpcy5fYWRkcmVzc1RyeXRlcyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdGhlIGFkZHJlc3MgdG8gdHJ5dGVzIHdpdGggYSBjaGVja3N1bSwgY3JlYXRpbmcgYSBibGFuayBvbmUgaWYgbmVlZGVkLlxyXG4gICAgICogQHJldHVybnMgVHJ5dGVzIHZlcnNpb24gb2YgdGhlIGFkZHJlc3Mgd2l0aCBjaGVja3N1LC5cclxuICAgICAqL1xyXG4gICAgdG9Ucnl0ZXNXaXRoQ2hlY2tzdW0oKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eSh0aGlzLl9jaGVja3N1bVRyeXRlcykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKHRoaXMuX2FkZHJlc3NUcnl0ZXMgKyB0aGlzLl9jaGVja3N1bVRyeXRlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGlzIGFkZHJlc3MgaGFzIG5vIGNoZWNrc3VtIGNhbGN1bGF0ZWQgZm9yIGl0YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHN0cmluZyB2aWV3IG9mIHRoZSBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyBzdHJpbmcgb2YgdGhlIHRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eSh0aGlzLl9jaGVja3N1bVRyeXRlcykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FkZHJlc3NUcnl0ZXMgKyB0aGlzLl9jaGVja3N1bVRyeXRlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hZGRyZXNzVHJ5dGVzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKipcclxuICogVGhlIGxlbmd0aCBmb3IgYSB2YWxpZCBhZGRyZXNzIHdpdGhvdXQgY2hlY2tzdW0gKDgxKS5cclxuICovXHJcbkFkZHJlc3MuTEVOR1RIID0gODE7XHJcbi8qKlxyXG4gKiBUaGUgbGVuZ3RoIGZvciBhbiBhZGRyZXNzIGNoZWNrc3VtICg5KS5cclxuICovXHJcbkFkZHJlc3MuTEVOR1RIX0NIRUNLU1VNID0gOTtcclxuLyoqXHJcbiAqIFRoZSBsZW5ndGggZm9yIHZhbGlkIGFkZHJlc3Mgd2l0aCBjaGVja3N1bSAoOTApLlxyXG4gKi9cclxuQWRkcmVzcy5MRU5HVEhfV0lUSF9DSEVDS1NVTSA9IEFkZHJlc3MuTEVOR1RIICsgQWRkcmVzcy5MRU5HVEhfQ0hFQ0tTVU07XHJcbi8qKlxyXG4gKiBBbiBlbXB0eSBoYXNoIGFsbCA5cy5cclxuICovXHJcbkFkZHJlc3MuRU1QVFkgPSBBZGRyZXNzLmZyb21Ucnl0ZXModHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcoXCI5XCIucmVwZWF0KEFkZHJlc3MuTEVOR1RIKSkpO1xyXG5leHBvcnRzLkFkZHJlc3MgPSBBZGRyZXNzO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZV1JrY21WemN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5a1lYUmhMMkZrWkhKbGMzTXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQkxEUkZRVUY1UlR0QlFVTjZSU3hyUkVGQkswTTdRVUZETDBNc2NVTkJRV3RETzBGQlJXeERPenRIUVVWSE8wRkJRMGc3U1VGM1Fra3NaVUZCWlR0SlFVTm1MRmxCUVc5Q0xHRkJRWEZDTEVWQlFVVXNZMEZCYzBJN1VVRkROMFFzU1VGQlNTeERRVUZETEdOQlFXTXNSMEZCUnl4aFFVRmhMRU5CUVVNN1VVRkRjRU1zU1VGQlNTeERRVUZETEdWQlFXVXNSMEZCU1N4alFVRmpMRU5CUVVNN1NVRkRNME1zUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTlCUVdVN1VVRkRjRU1zU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUlVGQlJTeGxRVUZOTEVOQlFVTXNSVUZCUlR0WlFVTjJReXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl3MlEwRkJOa01zUTBGQlF5eERRVUZETzFOQlEzUkZPMUZCUlVRc1RVRkJUU3haUVVGWkxFZEJRVWNzVDBGQlR5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMUZCUlhoRExFbEJRVWtzV1VGQldTeERRVUZETEUxQlFVMHNTMEZCU3l4UFFVRlBMRU5CUVVNc1RVRkJUU3hKUVVGSkxGbEJRVmtzUTBGQlF5eE5RVUZOTEV0QlFVc3NUMEZCVHl4RFFVRkRMRzlDUVVGdlFpeEZRVUZGTzFsQlEyaEhMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETEdkRFFVRm5ReXhQUVVGUExFTkJRVU1zVFVGQlRTeFBRVUZQTEU5QlFVOHNRMEZCUXl4dlFrRkJiMElzZFVKQlFYVkNMRVZCUVVVc1JVRkJSU3hOUVVGTkxFVkJRVVVzV1VGQldTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkRiRXM3VVVGRlJDeE5RVUZOTEdGQlFXRXNSMEZCUnl4WlFVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUlVGQlJTeFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkROMFFzU1VGQlNTeGpRVUZqTEVOQlFVTTdVVUZEYmtJc1NVRkJTU3haUVVGWkxFTkJRVU1zVFVGQlRTeExRVUZMTEU5QlFVOHNRMEZCUXl4dlFrRkJiMElzUlVGQlJUdFpRVU4wUkN4alFVRmpMRWRCUVVjc1dVRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1UwRkRlRVE3VVVGRFJDeFBRVUZQTEVsQlFVa3NUMEZCVHl4RFFVRkRMR0ZCUVdFc1JVRkJSU3hqUVVGakxFTkJRVU1zUTBGQlF6dEpRVU4wUkN4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NVVUZCVVR0UlFVTllMRTlCUVU4c1pVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRU5CUVVNN1NVRkRiRVFzUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxHOUNRVUZ2UWp0UlFVTjJRaXhKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF5eEZRVUZGTzFsQlF6ZERMRTlCUVU4c1pVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNZMEZCWXl4SFFVRkhMRWxCUVVrc1EwRkJReXhsUVVGbExFTkJRVU1zUTBGQlF6dFRRVU40UlR0aFFVRk5PMWxCUTBnc1RVRkJUU3hKUVVGSkxIRkNRVUZUTEVOQlFVTXNaMFJCUVdkRUxFTkJRVU1zUTBGQlF6dFRRVU42UlR0SlFVTk1MRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4UlFVRlJPMUZCUTFnc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhsUVVGbExFTkJRVU1zUlVGQlJUdFpRVU0zUXl4UFFVRlBMRWxCUVVrc1EwRkJReXhqUVVGakxFZEJRVWNzU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXp0VFFVTnlSRHRoUVVGTk8xbEJRMGdzVDBGQlR5eEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRPMU5CUXpsQ08wbEJRMHdzUTBGQlF6czdRVUZ1UmtRN08wZEJSVWM3UVVGRGIwSXNZMEZCVFN4SFFVRlhMRVZCUVVVc1EwRkJRenRCUVVNelF6czdSMEZGUnp0QlFVTnZRaXgxUWtGQlpTeEhRVUZYTEVOQlFVTXNRMEZCUXp0QlFVTnVSRHM3UjBGRlJ6dEJRVU52UWl3MFFrRkJiMElzUjBGQlZ5eFBRVUZQTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTlCUVU4c1EwRkJReXhsUVVGbExFTkJRVU03UVVGRkwwWTdPMGRCUlVjN1FVRkRiMElzWVVGQlN5eEhRVUZaTEU5QlFVOHNRMEZCUXl4VlFVRlZMRU5CUVVNc1pVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdRVUZxUWpsSExEQkNRWEZHUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGRhdGFFcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2RhdGFFcnJvclwiKTtcclxuY29uc3QgdHJ5dGVzXzEgPSByZXF1aXJlKFwiLi90cnl0ZXNcIik7XHJcbi8qKlxyXG4gKiBBIGNsYXNzIGZvciBoYW5kbGluZyBoYXNoZXMuXHJcbiAqL1xyXG5jbGFzcyBIYXNoIHtcclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY29uc3RydWN0b3IodHJ5dGVzKSB7XHJcbiAgICAgICAgdGhpcy5fdHJ5dGVzID0gdHJ5dGVzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgaGFzaCBmcm9tIHRyeXRlcy5cclxuICAgICAqIEBwYXJhbSBoYXNoIFRoZSB0cnl0ZXMgdG8gY3JlYXRlIHRoZSBoYXNoIGZyb20uXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiBIYXNoLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbVRyeXRlcyhoYXNoKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKGhhc2gsIHRyeXRlc18xLlRyeXRlcykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBoYXNoIHNob3VsZCBiZSBhIHZhbGlkIFRyeXRlcyBvYmplY3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IGhhc2gubGVuZ3RoKCk7XHJcbiAgICAgICAgaWYgKGxlbmd0aCAhPT0gSGFzaC5MRU5HVEgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIGhhc2ggc2hvdWxkIGJlICR7SGFzaC5MRU5HVEh9IGNoYXJhY3RlcnMgaW4gbGVuZ3RoYCwgeyBsZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgSGFzaChoYXNoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCB0aGUgaGFzaCB0byB0cnl0ZXMuXHJcbiAgICAgKiBAcmV0dXJucyBUcnl0ZXMgdmVyc2lvbiBvZiB0aGUgaGFzaC5cclxuICAgICAqL1xyXG4gICAgdG9Ucnl0ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyeXRlcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBzdHJpbmcgdmlldyBvZiB0aGUgb2JqZWN0LlxyXG4gICAgICogQHJldHVybnMgc3RyaW5nIG9mIHRoZSB0cnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cnl0ZXMudG9TdHJpbmcoKTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogVGhlIGxlbmd0aCBmb3IgYSB2YWxpZCBoYXNoICg4MSkuXHJcbiAqL1xyXG5IYXNoLkxFTkdUSCA9IDgxO1xyXG4vKipcclxuICogQW4gZW1wdHkgaGFzaCBhbGwgOXMuXHJcbiAqL1xyXG5IYXNoLkVNUFRZID0gSGFzaC5mcm9tVHJ5dGVzKHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKFwiOVwiLnJlcGVhdChIYXNoLkxFTkdUSCkpKTtcclxuZXhwb3J0cy5IYXNoID0gSGFzaDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYUdGemFDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5a1lYUmhMMmhoYzJndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTERSRlFVRjVSVHRCUVVONlJTeHJSRUZCSzBNN1FVRkRMME1zY1VOQlFXdERPMEZCUld4RE96dEhRVVZITzBGQlEwZzdTVUZoU1N4bFFVRmxPMGxCUTJZc1dVRkJiMElzVFVGQll6dFJRVU01UWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFMUJRVTBzUTBGQlF6dEpRVU14UWl4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zU1VGQldUdFJRVU5xUXl4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RlFVRkZMR1ZCUVUwc1EwRkJReXhGUVVGRk8xbEJRM0JETEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExEQkRRVUV3UXl4RFFVRkRMRU5CUVVNN1UwRkRia1U3VVVGRlJDeE5RVUZOTEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU03VVVGRE4wSXNTVUZCU1N4TlFVRk5MRXRCUVVzc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJUdFpRVU40UWl4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5eHpRa0ZCYzBJc1NVRkJTU3hEUVVGRExFMUJRVTBzZFVKQlFYVkNMRVZCUVVVc1JVRkJSU3hOUVVGTkxFVkJRVVVzUTBGQlF5eERRVUZETzFOQlF6ZEdPMUZCUlVRc1QwRkJUeXhKUVVGSkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0SlFVTXhRaXhEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1VVRkJVVHRSUVVOWUxFOUJRVThzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXp0SlFVTjRRaXhEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1VVRkJVVHRSUVVOWUxFOUJRVThzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRKUVVOdVF5eERRVUZET3p0QlFXcEVSRHM3UjBGRlJ6dEJRVU52UWl4WFFVRk5MRWRCUVZjc1JVRkJSU3hEUVVGRE8wRkJRek5ET3p0SFFVVkhPMEZCUTI5Q0xGVkJRVXNzUjBGQlV5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMR1ZCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlVuSkhMRzlDUVcxRVF5SjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBkYXRhRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9kYXRhRXJyb3JcIik7XHJcbmNvbnN0IHRyeXRlc18xID0gcmVxdWlyZShcIi4vdHJ5dGVzXCIpO1xyXG4vKipcclxuICogQSBjbGFzcyBmb3IgaGFuZGxpbmcgc2lnbmF0dXJlIG1lc3NhZ2UgZnJhZ21lbnRzLlxyXG4gKi9cclxuY2xhc3MgU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50IHtcclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY29uc3RydWN0b3IodHJ5dGVzKSB7XHJcbiAgICAgICAgdGhpcy5fdHJ5dGVzID0gdHJ5dGVzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgc2lnbmF0dXJlIGZyYWdtZW50IGZyb20gdHJ5dGVzLlxyXG4gICAgICogQHBhcmFtIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCBUaGUgdHJ5dGVzIHRvIGNyZWF0ZSB0aGUgc2lnbmF0dXJlIGZyYWdtZW50IGZyb20uXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiBTaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tVHJ5dGVzKHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQsIHRyeXRlc18xLlRyeXRlcykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQgc2hvdWxkIGJlIGEgdmFsaWQgVHJ5dGVzIG9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50Lmxlbmd0aCgpO1xyXG4gICAgICAgIGlmIChsZW5ndGggIT09IFNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5MRU5HVEgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCBzaG91bGQgYmUgJHtTaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuTEVOR1RIfSBjaGFyYWN0ZXJzIGluIGxlbmd0aGAsIHsgbGVuZ3RoIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudChzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRoZSBzaWduYXR1cmUgZnJhZ21lbnQgdG8gdHJ5dGVzLlxyXG4gICAgICogQHJldHVybnMgVHJ5dGVzIHZlcnNpb24gb2YgdGhlIHNpZ25hdHVyZSBmcmFnbWVudC5cclxuICAgICAqL1xyXG4gICAgdG9Ucnl0ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyeXRlcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBzdHJpbmcgdmlldyBvZiB0aGUgb2JqZWN0LlxyXG4gICAgICogQHJldHVybnMgc3RyaW5nIG9mIHRoZSB0cnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cnl0ZXMudG9TdHJpbmcoKTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogVGhlIGxlbmd0aCBvZiBhIHZhbGlkIHNpZ25hdHVyZSBtZXNzYWdlIGZyYWdtZW50ICgyMTg3KVxyXG4gKi9cclxuU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LkxFTkdUSCA9IDIxODc7XHJcbi8qKlxyXG4gKiBBbiBlbXB0eSBzaWduYXR1cmUgbWVzc2FnZSBmcmFnbWVudCBhbGwgOXMuXHJcbiAqL1xyXG5TaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuRU1QVFkgPSBTaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuZnJvbVRyeXRlcyh0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyhcIjlcIi5yZXBlYXQoU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LkxFTkdUSCkpKTtcclxuZXhwb3J0cy5TaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQgPSBTaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWMybG5ibUYwZFhKbFRXVnpjMkZuWlVaeVlXZHRaVzUwTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMlJoZEdFdmMybG5ibUYwZFhKbFRXVnpjMkZuWlVaeVlXZHRaVzUwTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRU3cwUlVGQmVVVTdRVUZEZWtVc2EwUkJRU3RETzBGQlF5OURMSEZEUVVGclF6dEJRVVZzUXpzN1IwRkZSenRCUVVOSU8wbEJZVWtzWlVGQlpUdEpRVU5tTEZsQlFXOUNMRTFCUVdNN1VVRkRPVUlzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNN1NVRkRNVUlzUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMSGRDUVVGblF6dFJRVU55UkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNkMEpCUVhkQ0xFVkJRVVVzWlVGQlRTeERRVUZETEVWQlFVVTdXVUZEZUVRc1RVRkJUU3hKUVVGSkxIRkNRVUZUTEVOQlFVTXNPRVJCUVRoRUxFTkJRVU1zUTBGQlF6dFRRVU4yUmp0UlFVVkVMRTFCUVUwc1RVRkJUU3hIUVVGSExIZENRVUYzUWl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRE8xRkJRMnBFTEVsQlFVa3NUVUZCVFN4TFFVRkxMSGRDUVVGM1FpeERRVUZETEUxQlFVMHNSVUZCUlR0WlFVTTFReXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl3d1EwRkJNRU1zZDBKQlFYZENMRU5CUVVNc1RVRkJUU3gxUWtGQmRVSXNSVUZCUlN4RlFVRkZMRTFCUVUwc1JVRkJSU3hEUVVGRExFTkJRVU03VTBGRGNrazdVVUZEUkN4UFFVRlBMRWxCUVVrc2QwSkJRWGRDTEVOQlFVTXNkMEpCUVhkQ0xFTkJRVU1zUTBGQlF6dEpRVU5zUlN4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NVVUZCVVR0UlFVTllMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF6dEpRVU40UWl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NVVUZCVVR0UlFVTllMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0SlFVTnVReXhEUVVGRE96dEJRV2hFUkRzN1IwRkZSenRCUVVOdlFpd3JRa0ZCVFN4SFFVRlhMRWxCUVVrc1EwRkJRenRCUVVNM1F6czdSMEZGUnp0QlFVTnZRaXc0UWtGQlN5eEhRVUUyUWl4M1FrRkJkMElzUTBGQlF5eFZRVUZWTEVOQlFVTXNaVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEhkQ1FVRjNRaXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFWSnFTeXcwUkVGclJFTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgZGF0YUVycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvZGF0YUVycm9yXCIpO1xyXG5jb25zdCB0cnl0ZXNfMSA9IHJlcXVpcmUoXCIuL3RyeXRlc1wiKTtcclxuLyoqXHJcbiAqIEEgY2xhc3MgZm9yIGhhbmRsaW5nIHRhZ3MuXHJcbiAqL1xyXG5jbGFzcyBUYWcge1xyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjb25zdHJ1Y3Rvcih0cnl0ZXMpIHtcclxuICAgICAgICB0aGlzLl90cnl0ZXMgPSB0cnl0ZXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSB0YWcgZnJvbSB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gdGFnIFRoZSB0cnl0ZXMgdG8gY3JlYXRlIHRoZSB0YWcgZnJvbS5cclxuICAgICAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIFRhZy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21Ucnl0ZXModGFnKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRhZywgdHJ5dGVzXzEuVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHRhZyBzaG91bGQgYmUgYSB2YWxpZCBUcnl0ZXMgb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdHJ5dGVzU3RyaW5nID0gdGFnLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgaWYgKHRyeXRlc1N0cmluZy5sZW5ndGggPiBUYWcuTEVOR1RIKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSB0YWcgc2hvdWxkIGJlIGF0IG1vc3QgJHtUYWcuTEVOR1RIfSBjaGFyYWN0ZXJzIGluIGxlbmd0aGAsIHsgbGVuZ3RoOiB0cnl0ZXNTdHJpbmcubGVuZ3RoIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAodHJ5dGVzU3RyaW5nLmxlbmd0aCA8IFRhZy5MRU5HVEgpIHtcclxuICAgICAgICAgICAgdHJ5dGVzU3RyaW5nICs9IFwiOVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFRhZyh0cnl0ZXNTdHJpbmcpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRoZSB0YWcgdG8gdHJ5dGVzLlxyXG4gICAgICogQHJldHVybnMgVHJ5dGVzIHZlcnNpb24gb2YgdGhlIHRhZy5cclxuICAgICAqL1xyXG4gICAgdG9Ucnl0ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKHRoaXMuX3RyeXRlcyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgc3RyaW5nIHZpZXcgb2YgdGhlIG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIHN0cmluZyBvZiB0aGUgdHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJ5dGVzO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBUaGUgbGVuZ3RoIG9mIGEgdmFsaWQgdGFnICgyNykuXHJcbiAqL1xyXG5UYWcuTEVOR1RIID0gMjc7XHJcbi8qKlxyXG4gKiBBbiBlbXB0eSB0YWcgYWxsIDlzLlxyXG4gKi9cclxuVGFnLkVNUFRZID0gVGFnLmZyb21Ucnl0ZXModHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcoXCI5XCIucmVwZWF0KFRhZy5MRU5HVEgpKSk7XHJcbmV4cG9ydHMuVGFnID0gVGFnO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkR0ZuTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMlJoZEdFdmRHRm5MblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFTdzBSVUZCZVVVN1FVRkRla1VzYTBSQlFTdERPMEZCUXk5RExIRkRRVUZyUXp0QlFVVnNRenM3UjBGRlJ6dEJRVU5JTzBsQllVa3NaVUZCWlR0SlFVTm1MRmxCUVc5Q0xFMUJRV003VVVGRE9VSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxFTkJRVU03U1VGRE1VSXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFZEJRVmM3VVVGRGFFTXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NSVUZCUlN4bFFVRk5MRU5CUVVNc1JVRkJSVHRaUVVOdVF5eE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXg1UTBGQmVVTXNRMEZCUXl4RFFVRkRPMU5CUTJ4Rk8xRkJSVVFzU1VGQlNTeFpRVUZaTEVkQlFVY3NSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8xRkJSV3hETEVsQlFVa3NXVUZCV1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhIUVVGSExFTkJRVU1zVFVGQlRTeEZRVUZGTzFsQlEyeERMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETERaQ1FVRTJRaXhIUVVGSExFTkJRVU1zVFVGQlRTeDFRa0ZCZFVJc1JVRkJSU3hGUVVGRkxFMUJRVTBzUlVGQlJTeFpRVUZaTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1EwRkJRenRUUVVONFNEdFJRVVZFTEU5QlFVOHNXVUZCV1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhIUVVGSExFTkJRVU1zVFVGQlRTeEZRVUZGTzFsQlEzSkRMRmxCUVZrc1NVRkJTU3hIUVVGSExFTkJRVU03VTBGRGRrSTdVVUZGUkN4UFFVRlBMRWxCUVVrc1IwRkJSeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETzBsQlEycERMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4UlFVRlJPMUZCUTFnc1QwRkJUeXhsUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRKUVVNelF5eERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVVVGQlVUdFJRVU5ZTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJRenRKUVVONFFpeERRVUZET3p0QlFYUkVSRHM3UjBGRlJ6dEJRVU52UWl4VlFVRk5MRWRCUVZjc1JVRkJSU3hEUVVGRE8wRkJRek5ET3p0SFFVVkhPMEZCUTI5Q0xGTkJRVXNzUjBGQlVTeEhRVUZITEVOQlFVTXNWVUZCVlN4RFFVRkRMR1ZCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlVteEhMR3RDUVhkRVF5SjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBkYXRhRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9kYXRhRXJyb3JcIik7XHJcbmNvbnN0IGFkZHJlc3NfMSA9IHJlcXVpcmUoXCIuL2FkZHJlc3NcIik7XHJcbmNvbnN0IGhhc2hfMSA9IHJlcXVpcmUoXCIuL2hhc2hcIik7XHJcbmNvbnN0IHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudF8xID0gcmVxdWlyZShcIi4vc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XCIpO1xyXG5jb25zdCB0YWdfMSA9IHJlcXVpcmUoXCIuL3RhZ1wiKTtcclxuY29uc3QgdHJ5dGVOdW1iZXJfMSA9IHJlcXVpcmUoXCIuL3RyeXRlTnVtYmVyXCIpO1xyXG5jb25zdCB0cnl0ZXNfMSA9IHJlcXVpcmUoXCIuL3RyeXRlc1wiKTtcclxuLyoqXHJcbiAqIEEgY2xhc3MgZm9yIGhhbmRsaW5nIHRyYW5zYWN0aW9ucy5cclxuICovXHJcbmNsYXNzIFRyYW5zYWN0aW9uIHtcclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBpbnN0YW5jZSBvZiB0cmFuc2FjdGlvbiBmcm9tIHBhcmFtZXRlcnMuXHJcbiAgICAgKiBAcGFyYW0gc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50IFRoZSBzaWduYXR1cmUgbWVzc2FnZSBmcmFnbWVudC5cclxuICAgICAqIEBwYXJhbSBhZGRyZXNzIFRoZSBhZGRyZXNzLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZS5cclxuICAgICAqIEBwYXJhbSBvYnNvbGV0ZVRhZyBPYnNvbGV0ZSB0cmFuc2FjdGlvbiB0YWcuXHJcbiAgICAgKiBAcGFyYW0gdGltZXN0YW1wIFRoZSB0aW1lc3RhbXAuXHJcbiAgICAgKiBAcGFyYW0gY3VycmVudEluZGV4IFRoZSBjdXJyZW50IGluZGV4LlxyXG4gICAgICogQHBhcmFtIGxhc3RJbmRleCBUaGUgbGFzdCBpbmRleC5cclxuICAgICAqIEBwYXJhbSBidW5kbGUgVGhlIGJ1bmRsZS5cclxuICAgICAqIEBwYXJhbSB0cnVua1RyYW5zYWN0aW9uIFRoZSB0cnVuayB0cmFuc2FjdGlvbi5cclxuICAgICAqIEBwYXJhbSBicmFuY2hUcmFuc2FjdGlvbiBUaGUgYnJhbmNoIHRyYW5zYWN0aW9uLlxyXG4gICAgICogQHBhcmFtIHRhZyBUaGUgdGFnLlxyXG4gICAgICogQHBhcmFtIGF0dGFjaG1lbnRUaW1lc3RhbXAgVGhlIGF0dGFjaG1lbnQgdGltZXN0YW1wLlxyXG4gICAgICogQHBhcmFtIGF0dGFjaG1lbnRUaW1lc3RhbXBMb3dlckJvdW5kIFRoZSBhdHRhY2htZW50IHRpbWVzdGFtcCBsb3dlciBib3VuZC5cclxuICAgICAqIEBwYXJhbSBhdHRhY2htZW50VGltZXN0YW1wVXBwZXJCb3VuZCAgVGhlIGF0dGFjaG1lbnQgdGltZXN0YW1wIHVwcGVyIGJvdW5kLlxyXG4gICAgICogQHBhcmFtIG5vbmNlIFRoZSBub25jZS5cclxuICAgICAqIEByZXR1cm5zIE5ldyBpbnN0YW5jZSBvZiB0cmFuc2FjdGlvbi5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21QYXJhbXMoc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LCBhZGRyZXNzLCB2YWx1ZSwgb2Jzb2xldGVUYWcsIHRpbWVzdGFtcCwgY3VycmVudEluZGV4LCBsYXN0SW5kZXgsIGJ1bmRsZSwgdHJ1bmtUcmFuc2FjdGlvbiwgYnJhbmNoVHJhbnNhY3Rpb24sIHRhZywgYXR0YWNobWVudFRpbWVzdGFtcCwgYXR0YWNobWVudFRpbWVzdGFtcExvd2VyQm91bmQsIGF0dGFjaG1lbnRUaW1lc3RhbXBVcHBlckJvdW5kLCBub25jZSkge1xyXG4gICAgICAgIGNvbnN0IHR4ID0gbmV3IFRyYW5zYWN0aW9uKCk7XHJcbiAgICAgICAgdHguc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50ID0gc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50O1xyXG4gICAgICAgIHR4LmFkZHJlc3MgPSBhZGRyZXNzO1xyXG4gICAgICAgIHR4LnZhbHVlID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tTnVtYmVyKHZhbHVlLCAxMSk7XHJcbiAgICAgICAgdHgub2Jzb2xldGVUYWcgPSBvYnNvbGV0ZVRhZztcclxuICAgICAgICB0eC50aW1lc3RhbXAgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIodGltZXN0YW1wKTtcclxuICAgICAgICB0eC5jdXJyZW50SW5kZXggPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIoY3VycmVudEluZGV4KTtcclxuICAgICAgICB0eC5sYXN0SW5kZXggPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIobGFzdEluZGV4KTtcclxuICAgICAgICB0eC5idW5kbGUgPSBidW5kbGU7XHJcbiAgICAgICAgdHgudHJ1bmtUcmFuc2FjdGlvbiA9IHRydW5rVHJhbnNhY3Rpb247XHJcbiAgICAgICAgdHguYnJhbmNoVHJhbnNhY3Rpb24gPSBicmFuY2hUcmFuc2FjdGlvbjtcclxuICAgICAgICB0eC50YWcgPSB0YWc7XHJcbiAgICAgICAgdHguYXR0YWNobWVudFRpbWVzdGFtcCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbU51bWJlcihhdHRhY2htZW50VGltZXN0YW1wKTtcclxuICAgICAgICB0eC5hdHRhY2htZW50VGltZXN0YW1wTG93ZXJCb3VuZCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbU51bWJlcihhdHRhY2htZW50VGltZXN0YW1wTG93ZXJCb3VuZCk7XHJcbiAgICAgICAgdHguYXR0YWNobWVudFRpbWVzdGFtcFVwcGVyQm91bmQgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIoYXR0YWNobWVudFRpbWVzdGFtcFVwcGVyQm91bmQpO1xyXG4gICAgICAgIHR4Lm5vbmNlID0gbm9uY2U7XHJcbiAgICAgICAgcmV0dXJuIHR4O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgaW5zdGFuY2Ugb2YgdHJhbnNhY3Rpb24gZnJvbSB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gdHJ5dGVzIFRoZSB0cnl0ZXMgZm9yIHRoZSB0aGlzLlxyXG4gICAgICogQHJldHVybnMgQW4gaW5zdGFuY2Ugb2YgdGhpcy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21Ucnl0ZXModHJ5dGVzKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRyeXRlcywgdHJ5dGVzXzEuVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHRyeXRlcyBzaG91bGQgYmUgYSB2YWxpZCBUcnl0ZXMgb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsZW5ndGggPSB0cnl0ZXMubGVuZ3RoKCk7XHJcbiAgICAgICAgaWYgKGxlbmd0aCAhPT0gVHJhbnNhY3Rpb24uTEVOR1RIKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSB0cnl0ZXMgbXVzdCBiZSAke1RyYW5zYWN0aW9uLkxFTkdUSH0gaW4gbGVuZ3RoYCwgeyBsZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNoZWNrSW5kZXhTdGFydCA9IDIyNzk7XHJcbiAgICAgICAgY29uc3QgY2hlY2tJbmRleExlbmd0aCA9IDE2O1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gdHJ5dGVzLnN1YihjaGVja0luZGV4U3RhcnQsIGNoZWNrSW5kZXhMZW5ndGgpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgaWYgKGNoZWNrICE9PSBUcmFuc2FjdGlvbi5DSEVDS19WQUxVRSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgdHJ5dGVzIGJldHdlZW4gJHtjaGVja0luZGV4U3RhcnR9IGFuZCAke2NoZWNrSW5kZXhTdGFydCArIGNoZWNrSW5kZXhMZW5ndGh9IHNob3VsZCBiZSBhbGwgOXNgLCB7IGNoZWNrIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0eCA9IG5ldyBUcmFuc2FjdGlvbigpO1xyXG4gICAgICAgIGxldCBzdGFydFBvcyA9IDA7XHJcbiAgICAgICAgdHguc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50ID0gc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XzEuU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XzEuU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LkxFTkdUSCkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudF8xLlNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5MRU5HVEg7XHJcbiAgICAgICAgdHguYWRkcmVzcyA9IGFkZHJlc3NfMS5BZGRyZXNzLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgYWRkcmVzc18xLkFkZHJlc3MuTEVOR1RIKSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gYWRkcmVzc18xLkFkZHJlc3MuTEVOR1RIO1xyXG4gICAgICAgIHR4LnZhbHVlID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIDExKSwgMTEpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IDExO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IFRyYW5zYWN0aW9uLkNIRUNLX1ZBTFVFX0xFTkdUSDtcclxuICAgICAgICB0eC5vYnNvbGV0ZVRhZyA9IHRhZ18xLlRhZy5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIHRhZ18xLlRhZy5MRU5HVEgpKTtcclxuICAgICAgICBzdGFydFBvcyArPSB0YWdfMS5UYWcuTEVOR1RIO1xyXG4gICAgICAgIHR4LnRpbWVzdGFtcCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkxFTkdUSF85KSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOTtcclxuICAgICAgICB0eC5jdXJyZW50SW5kZXggPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOSkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzk7XHJcbiAgICAgICAgdHgubGFzdEluZGV4ID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzkpKTtcclxuICAgICAgICBzdGFydFBvcyArPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkxFTkdUSF85O1xyXG4gICAgICAgIHR4LmJ1bmRsZSA9IGhhc2hfMS5IYXNoLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgaGFzaF8xLkhhc2guTEVOR1RIKSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gaGFzaF8xLkhhc2guTEVOR1RIO1xyXG4gICAgICAgIHR4LnRydW5rVHJhbnNhY3Rpb24gPSBoYXNoXzEuSGFzaC5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIGhhc2hfMS5IYXNoLkxFTkdUSCkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IGhhc2hfMS5IYXNoLkxFTkdUSDtcclxuICAgICAgICB0eC5icmFuY2hUcmFuc2FjdGlvbiA9IGhhc2hfMS5IYXNoLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgaGFzaF8xLkhhc2guTEVOR1RIKSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gaGFzaF8xLkhhc2guTEVOR1RIO1xyXG4gICAgICAgIHR4LnRhZyA9IHRhZ18xLlRhZy5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIHRhZ18xLlRhZy5MRU5HVEgpKTtcclxuICAgICAgICBzdGFydFBvcyArPSB0YWdfMS5UYWcuTEVOR1RIO1xyXG4gICAgICAgIHR4LmF0dGFjaG1lbnRUaW1lc3RhbXAgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOSkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzk7XHJcbiAgICAgICAgdHguYXR0YWNobWVudFRpbWVzdGFtcExvd2VyQm91bmQgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOSkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzk7XHJcbiAgICAgICAgdHguYXR0YWNobWVudFRpbWVzdGFtcFVwcGVyQm91bmQgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOSkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzk7XHJcbiAgICAgICAgdHgubm9uY2UgPSB0YWdfMS5UYWcuZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCB0YWdfMS5UYWcuTEVOR1RIKSk7XHJcbiAgICAgICAgcmV0dXJuIHR4O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRoZSB0cmFuc2FjdGlvbiB0byB0cnl0ZXMuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgdHJhbnNhY3Rpb24gYXMgdHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICB0b1RyeXRlcygpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodGhpcy5zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQsIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudF8xLlNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCBtdXN0IGJlIHNldCB0byBjcmVhdGUgdHJhbnNhY3Rpb24gdHJ5dGVzYCwgeyBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQ6IHRoaXMuc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodGhpcy5hZGRyZXNzLCBhZGRyZXNzXzEuQWRkcmVzcykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIGFkZHJlc3MgbXVzdCBiZSBzZXQgdG8gY3JlYXRlIHRyYW5zYWN0aW9uIHRyeXRlc2AsIHsgYWRkcmVzczogdGhpcy5hZGRyZXNzIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodGhpcy5vYnNvbGV0ZVRhZywgdGFnXzEuVGFnKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgb2Jzb2xldGVUYWcgbXVzdCBiZSBzZXQgdG8gY3JlYXRlIHRyYW5zYWN0aW9uIHRyeXRlc2AsIHsgb2Jzb2xldGVUYWc6IHRoaXMub2Jzb2xldGVUYWcgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0aGlzLmJ1bmRsZSwgaGFzaF8xLkhhc2gpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSBidW5kbGUgbXVzdCBiZSBzZXQgdG8gY3JlYXRlIHRyYW5zYWN0aW9uIHRyeXRlc2AsIHsgYnVuZGxlOiB0aGlzLmJ1bmRsZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRoaXMudHJ1bmtUcmFuc2FjdGlvbiwgaGFzaF8xLkhhc2gpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSB0cnVua1RyYW5zYWN0aW9uIG11c3QgYmUgc2V0IHRvIGNyZWF0ZSB0cmFuc2FjdGlvbiB0cnl0ZXNgLCB7IHRydW5rVHJhbnNhY3Rpb246IHRoaXMudHJ1bmtUcmFuc2FjdGlvbiB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRoaXMuYnJhbmNoVHJhbnNhY3Rpb24sIGhhc2hfMS5IYXNoKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgYnJhbmNoVHJhbnNhY3Rpb24gbXVzdCBiZSBzZXQgdG8gY3JlYXRlIHRyYW5zYWN0aW9uIHRyeXRlc2AsIHsgYnJhbmNoVHJhbnNhY3Rpb246IHRoaXMuYnJhbmNoVHJhbnNhY3Rpb24gfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0aGlzLm5vbmNlLCB0YWdfMS5UYWcpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSBub25jZSBtdXN0IGJlIHNldCB0byBjcmVhdGUgdHJhbnNhY3Rpb24gdHJ5dGVzYCwgeyBub25jZTogdGhpcy5ub25jZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdHJ5dGVzID0gdGhpcy5zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgdGhpcy5hZGRyZXNzLnRvVHJ5dGVzKCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICArICh0aGlzLnZhbHVlIHx8IFRyYW5zYWN0aW9uLkVNUFRZXzExKS50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyBUcmFuc2FjdGlvbi5DSEVDS19WQUxVRVxyXG4gICAgICAgICAgICArIHRoaXMub2Jzb2xldGVUYWcudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgKHRoaXMudGltZXN0YW1wIHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgKHRoaXMuY3VycmVudEluZGV4IHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgKHRoaXMubGFzdEluZGV4IHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgdGhpcy5idW5kbGUudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgdGhpcy50cnVua1RyYW5zYWN0aW9uLnRvVHJ5dGVzKCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICArIHRoaXMuYnJhbmNoVHJhbnNhY3Rpb24udG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgKHRoaXMudGFnIHx8IHRoaXMub2Jzb2xldGVUYWcpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICArICh0aGlzLmF0dGFjaG1lbnRUaW1lc3RhbXAgfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyAodGhpcy5hdHRhY2htZW50VGltZXN0YW1wTG93ZXJCb3VuZCB8fCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkVNUFRZXzkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICArICh0aGlzLmF0dGFjaG1lbnRUaW1lc3RhbXBVcHBlckJvdW5kIHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgdGhpcy5ub25jZS50b1RyeXRlcygpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdHJ5dGVzLmxlbmd0aDtcclxuICAgICAgICBpZiAobGVuZ3RoICE9PSBUcmFuc2FjdGlvbi5MRU5HVEgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIHRyeXRlcyBtdXN0IGJlICR7VHJhbnNhY3Rpb24uTEVOR1RIfSBpbiBsZW5ndGggJHtsZW5ndGh9YCwgeyBsZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyh0cnl0ZXMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHN0cmluZyB2aWV3IG9mIHRoZSBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyBzdHJpbmcgdmlldyBvZiB0aGUgb2JqZWN0LlxyXG4gICAgICovXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gYHtcblxcdHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudDogXCIkeyh0aGlzLnNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCB8fCBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRfMS5TaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuRU1QVFkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKX1cIlxuXFx0YWRkcmVzczogXCIkeyh0aGlzLmFkZHJlc3MgfHwgYWRkcmVzc18xLkFkZHJlc3MuRU1QVFkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKX1cIlxuXFx0dmFsdWU6ICR7KHRoaXMudmFsdWUgfHwgVHJhbnNhY3Rpb24uRU1QVFlfMTEpLnRvTnVtYmVyKCl9XG5cXHRvYnNvbGV0ZVRhZzogXCIkeyh0aGlzLm9ic29sZXRlVGFnIHx8IHRhZ18xLlRhZy5FTVBUWSkudG9Ucnl0ZXMoKS50b1N0cmluZygpfVwiXG5cXHR0aW1lc3RhbXA6ICR7KHRoaXMudGltZXN0YW1wIHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9OdW1iZXIoKX1cblxcdGN1cnJlbnRJbmRleDogJHsodGhpcy5jdXJyZW50SW5kZXggfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b051bWJlcigpfVxuXFx0bGFzdEluZGV4OiAkeyh0aGlzLmxhc3RJbmRleCB8fCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkVNUFRZXzkpLnRvTnVtYmVyKCl9XG5cXHRidW5kbGU6IFwiJHsodGhpcy5idW5kbGUgfHwgaGFzaF8xLkhhc2guRU1QVFkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKX1cIlxuXFx0dHJ1bmtUcmFuc2FjdGlvbjogXCIkeyh0aGlzLnRydW5rVHJhbnNhY3Rpb24gfHwgaGFzaF8xLkhhc2guRU1QVFkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKX1cIlxuXFx0YnJhbmNoVHJhbnNhY3Rpb246IFwiJHsodGhpcy5icmFuY2hUcmFuc2FjdGlvbiB8fCBoYXNoXzEuSGFzaC5FTVBUWSkudG9Ucnl0ZXMoKS50b1N0cmluZygpfVwiXG5cXHR0YWc6IFwiJHsodGhpcy50YWcgfHwgdGhpcy5vYnNvbGV0ZVRhZyB8fCB0YWdfMS5UYWcuRU1QVFkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKX1cIlxuXFx0YXR0YWNobWVudFRpbWVzdGFtcDogJHsodGhpcy5hdHRhY2htZW50VGltZXN0YW1wIHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9OdW1iZXIoKX1cblxcdGF0dGFjaG1lbnRUaW1lc3RhbXBMb3dlckJvdW5kOiAkeyh0aGlzLmF0dGFjaG1lbnRUaW1lc3RhbXBMb3dlckJvdW5kIHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9OdW1iZXIoKX1cblxcdGF0dGFjaG1lbnRUaW1lc3RhbXBVcHBlckJvdW5kOiAkeyh0aGlzLmF0dGFjaG1lbnRUaW1lc3RhbXBVcHBlckJvdW5kIHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9OdW1iZXIoKX1cblxcdG5vbmNlOiBcIiR7KHRoaXMubm9uY2UgfHwgdGFnXzEuVGFnLkVNUFRZKS50b1RyeXRlcygpLnRvU3RyaW5nKCl9XCJcbn1gO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBUaGUgbGVuZ3RoIG9mIGEgdmFsaWQgdHJhbnNhY3Rpb24gKDI2NzMpLlxyXG4gKi9cclxuVHJhbnNhY3Rpb24uTEVOR1RIID0gMjY3MztcclxuLyoqXHJcbiAqIFRoZSBsZW5ndGggb2YgYSB2YWxpZCBjaGVjayB2YWx1ZSAoMTYpLlxyXG4gKi9cclxuVHJhbnNhY3Rpb24uQ0hFQ0tfVkFMVUVfTEVOR1RIID0gMTY7XHJcbi8qKlxyXG4gKiBUaGUgY2hlY2sgdmFsdWUgZm9yIGJ1bmRsZXMgYWxsIDlzLlxyXG4gKi9cclxuVHJhbnNhY3Rpb24uQ0hFQ0tfVkFMVUUgPSBcIjlcIi5yZXBlYXQoVHJhbnNhY3Rpb24uQ0hFQ0tfVkFMVUVfTEVOR1RIKTtcclxuLyogQGludGVybmFsICovXHJcblRyYW5zYWN0aW9uLkVNUFRZXzExID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tTnVtYmVyKDAsIDExKTtcclxuZXhwb3J0cy5UcmFuc2FjdGlvbiA9IFRyYW5zYWN0aW9uO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkSEpoYm5OaFkzUnBiMjR1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZaR0YwWVM5MGNtRnVjMkZqZEdsdmJpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc05FVkJRWGxGTzBGQlEzcEZMR3RFUVVFclF6dEJRVU12UXl4MVEwRkJiME03UVVGRGNFTXNhVU5CUVRoQ08wRkJRemxDTEhsRlFVRnpSVHRCUVVOMFJTd3JRa0ZCTkVJN1FVRkROVUlzSzBOQlFUUkRPMEZCUXpWRExIRkRRVUZyUXp0QlFVVnNRenM3UjBGRlJ6dEJRVU5JTzBsQlowWkpMR1ZCUVdVN1NVRkRaanRKUVVOQkxFTkJRVU03U1VGRlJEczdPenM3T3pzN096czdPenM3T3pzN08wOUJhMEpITzBsQlEwa3NUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXgzUWtGQmEwUXNSVUZEYkVRc1QwRkJaMElzUlVGRGFFSXNTMEZCWVN4RlFVTmlMRmRCUVdkQ0xFVkJRMmhDTEZOQlFXbENMRVZCUTJwQ0xGbEJRVzlDTEVWQlEzQkNMRk5CUVdsQ0xFVkJRMnBDTEUxQlFWa3NSVUZEV2l4blFrRkJjMElzUlVGRGRFSXNhVUpCUVhWQ0xFVkJRM1pDTEVkQlFWRXNSVUZEVWl4dFFrRkJNa0lzUlVGRE0wSXNOa0pCUVhGRExFVkJRM0pETERaQ1FVRnhReXhGUVVOeVF5eExRVUZWTzFGQlF5OUNMRTFCUVUwc1JVRkJSU3hIUVVGSExFbEJRVWtzVjBGQlZ5eEZRVUZGTEVOQlFVTTdVVUZETjBJc1JVRkJSU3hEUVVGRExIZENRVUYzUWl4SFFVRkhMSGRDUVVGM1FpeERRVUZETzFGQlEzWkVMRVZCUVVVc1EwRkJReXhQUVVGUExFZEJRVWNzVDBGQlR5eERRVUZETzFGQlEzSkNMRVZCUVVVc1EwRkJReXhMUVVGTExFZEJRVWNzZVVKQlFWY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlF6ZERMRVZCUVVVc1EwRkJReXhYUVVGWExFZEJRVWNzVjBGQlZ5eERRVUZETzFGQlF6ZENMRVZCUVVVc1EwRkJReXhUUVVGVExFZEJRVWNzZVVKQlFWY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03VVVGRGFrUXNSVUZCUlN4RFFVRkRMRmxCUVZrc1IwRkJSeXg1UWtGQlZ5eERRVUZETEZWQlFWVXNRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenRSUVVOMlJDeEZRVUZGTEVOQlFVTXNVMEZCVXl4SFFVRkhMSGxDUVVGWExFTkJRVU1zVlVGQlZTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRPMUZCUTJwRUxFVkJRVVVzUTBGQlF5eE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRPMUZCUTI1Q0xFVkJRVVVzUTBGQlF5eG5Ra0ZCWjBJc1IwRkJSeXhuUWtGQlowSXNRMEZCUXp0UlFVTjJReXhGUVVGRkxFTkJRVU1zYVVKQlFXbENMRWRCUVVjc2FVSkJRV2xDTEVOQlFVTTdVVUZEZWtNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTTdVVUZEWWl4RlFVRkZMRU5CUVVNc2JVSkJRVzFDTEVkQlFVY3NlVUpCUVZjc1EwRkJReXhWUVVGVkxFTkJRVU1zYlVKQlFXMUNMRU5CUVVNc1EwRkJRenRSUVVOeVJTeEZRVUZGTEVOQlFVTXNOa0pCUVRaQ0xFZEJRVWNzZVVKQlFWY3NRMEZCUXl4VlFVRlZMRU5CUVVNc05rSkJRVFpDTEVOQlFVTXNRMEZCUXp0UlFVTjZSaXhGUVVGRkxFTkJRVU1zTmtKQlFUWkNMRWRCUVVjc2VVSkJRVmNzUTBGQlF5eFZRVUZWTEVOQlFVTXNOa0pCUVRaQ0xFTkJRVU1zUTBGQlF6dFJRVU42Uml4RlFVRkZMRU5CUVVNc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU5xUWl4UFFVRlBMRVZCUVVVc1EwRkJRenRKUVVOa0xFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4TlFVRmpPMUZCUTI1RExFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFVkJRVVVzWlVGQlRTeERRVUZETEVWQlFVVTdXVUZEZEVNc1RVRkJUU3hKUVVGSkxIRkNRVUZUTEVOQlFVTXNORU5CUVRSRExFTkJRVU1zUTBGQlF6dFRRVU55UlR0UlFVVkVMRTFCUVUwc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXp0UlFVTXZRaXhKUVVGSkxFMUJRVTBzUzBGQlN5eFhRVUZYTEVOQlFVTXNUVUZCVFN4RlFVRkZPMWxCUXk5Q0xFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMSE5DUVVGelFpeFhRVUZYTEVOQlFVTXNUVUZCVFN4WlFVRlpMRVZCUVVVc1JVRkJSU3hOUVVGTkxFVkJRVVVzUTBGQlF5eERRVUZETzFOQlEzcEdPMUZCUlVRc1RVRkJUU3hsUVVGbExFZEJRVWNzU1VGQlNTeERRVUZETzFGQlF6ZENMRTFCUVUwc1owSkJRV2RDTEVkQlFVY3NSVUZCUlN4RFFVRkRPMUZCUXpWQ0xFMUJRVTBzUzBGQlN5eEhRVUZITEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1pVRkJaU3hGUVVGRkxHZENRVUZuUWl4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03VVVGRmRrVXNTVUZCU1N4TFFVRkxMRXRCUVVzc1YwRkJWeXhEUVVGRExGZEJRVmNzUlVGQlJUdFpRVU51UXl4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5eHpRa0ZCYzBJc1pVRkJaU3hSUVVGUkxHVkJRV1VzUjBGQlJ5eG5Ra0ZCWjBJc2JVSkJRVzFDTEVWQlFVVXNSVUZCUlN4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJRM1JKTzFGQlJVUXNUVUZCVFN4RlFVRkZMRWRCUVVjc1NVRkJTU3hYUVVGWExFVkJRVVVzUTBGQlF6dFJRVVUzUWl4SlFVRkpMRkZCUVZFc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRGFrSXNSVUZCUlN4RFFVRkRMSGRDUVVGM1FpeEhRVUZITEcxRVFVRjNRaXhEUVVGRExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3h0UkVGQmQwSXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM3BJTEZGQlFWRXNTVUZCU1N4dFJFRkJkMElzUTBGQlF5eE5RVUZOTEVOQlFVTTdVVUZETlVNc1JVRkJSU3hEUVVGRExFOUJRVThzUjBGQlJ5eHBRa0ZCVHl4RFFVRkRMRlZCUVZVc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEZGQlFWRXNSVUZCUlN4cFFrRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEZEVVc1VVRkJVU3hKUVVGSkxHbENRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRPMUZCUXpOQ0xFVkJRVVVzUTBGQlF5eExRVUZMTEVkQlFVY3NlVUpCUVZjc1EwRkJReXhWUVVGVkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4UlFVRlJMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZEYUVVc1VVRkJVU3hKUVVGSkxFVkJRVVVzUTBGQlF6dFJRVU5tTEZGQlFWRXNTVUZCU1N4WFFVRlhMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTTdVVUZETTBNc1JVRkJSU3hEUVVGRExGZEJRVmNzUjBGQlJ5eFRRVUZITEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEZOQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMnhGTEZGQlFWRXNTVUZCU1N4VFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRE8xRkJRM1pDTEVWQlFVVXNRMEZCUXl4VFFVRlRMRWRCUVVjc2VVSkJRVmNzUTBGQlF5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFVkJRVVVzZVVKQlFWY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMnhHTEZGQlFWRXNTVUZCU1N4NVFrRkJWeXhEUVVGRExGRkJRVkVzUTBGQlF6dFJRVU5xUXl4RlFVRkZMRU5CUVVNc1dVRkJXU3hIUVVGSExIbENRVUZYTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEhsQ1FVRlhMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU55Uml4UlFVRlJMRWxCUVVrc2VVSkJRVmNzUTBGQlF5eFJRVUZSTEVOQlFVTTdVVUZEYWtNc1JVRkJSU3hEUVVGRExGTkJRVk1zUjBGQlJ5eDVRa0ZCVnl4RFFVRkRMRlZCUVZVc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEZGQlFWRXNSVUZCUlN4NVFrRkJWeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYkVZc1VVRkJVU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNVVUZCVVN4RFFVRkRPMUZCUTJwRExFVkJRVVVzUTBGQlF5eE5RVUZOTEVkQlFVY3NWMEZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEZGQlFWRXNSVUZCUlN4WFFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU12UkN4UlFVRlJMRWxCUVVrc1YwRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF6dFJRVU40UWl4RlFVRkZMRU5CUVVNc1owSkJRV2RDTEVkQlFVY3NWMEZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEZGQlFWRXNSVUZCUlN4WFFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU42UlN4UlFVRlJMRWxCUVVrc1YwRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF6dFJRVU40UWl4RlFVRkZMRU5CUVVNc2FVSkJRV2xDTEVkQlFVY3NWMEZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEZGQlFWRXNSVUZCUlN4WFFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU14UlN4UlFVRlJMRWxCUVVrc1YwRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF6dFJRVU40UWl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExGTkJRVWNzUTBGQlF5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFVkJRVVVzVTBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRNVVFzVVVGQlVTeEpRVUZKTEZOQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNN1VVRkRka0lzUlVGQlJTeERRVUZETEcxQ1FVRnRRaXhIUVVGSExIbENRVUZYTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEhsQ1FVRlhMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU0xUml4UlFVRlJMRWxCUVVrc2VVSkJRVmNzUTBGQlF5eFJRVUZSTEVOQlFVTTdVVUZEYWtNc1JVRkJSU3hEUVVGRExEWkNRVUUyUWl4SFFVRkhMSGxDUVVGWExFTkJRVU1zVlVGQlZTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxIbENRVUZYTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOMFJ5eFJRVUZSTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU03VVVGRGFrTXNSVUZCUlN4RFFVRkRMRFpDUVVFMlFpeEhRVUZITEhsQ1FVRlhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMSGxDUVVGWExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTjBSeXhSUVVGUkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4UlFVRlJMRU5CUVVNN1VVRkRha01zUlVGQlJTeERRVUZETEV0QlFVc3NSMEZCUnl4VFFVRkhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMRk5CUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlJUVkVMRTlCUVU4c1JVRkJSU3hEUVVGRE8wbEJRMlFzUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxGRkJRVkU3VVVGRFdDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEhkQ1FVRjNRaXhGUVVGRkxHMUVRVUYzUWl4RFFVRkRMRVZCUVVVN1dVRkRMMFVzVFVGQlRTeEpRVUZKTEhGQ1FVRlRMRU5CUVVNc2RVVkJRWFZGTEVWQlFVVXNSVUZCUlN4M1FrRkJkMElzUlVGQlJTeEpRVUZKTEVOQlFVTXNkMEpCUVhkQ0xFVkJRVVVzUTBGQlF5eERRVUZETzFOQlF6ZEtPMUZCUlVRc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzYVVKQlFVOHNRMEZCUXl4RlFVRkZPMWxCUXpkRExFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMSE5FUVVGelJDeEZRVUZGTEVWQlFVVXNUMEZCVHl4RlFVRkZMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF5eERRVUZETzFOQlF6RkhPMUZCUlVRc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzVTBGQlJ5eERRVUZETEVWQlFVVTdXVUZETjBNc1RVRkJUU3hKUVVGSkxIRkNRVUZUTEVOQlFVTXNNRVJCUVRCRUxFVkJRVVVzUlVGQlJTeFhRVUZYTEVWQlFVVXNTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRExFTkJRVU03VTBGRGRFZzdVVUZGUkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hYUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU42UXl4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5eHhSRUZCY1VRc1JVRkJSU3hGUVVGRkxFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1EwRkJRenRUUVVOMlJ6dFJRVVZFTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFVkJRVVVzVjBGQlNTeERRVUZETEVWQlFVVTdXVUZEYmtRc1RVRkJUU3hKUVVGSkxIRkNRVUZUTEVOQlFVTXNLMFJCUVN0RUxFVkJRVVVzUlVGQlJTeG5Ra0ZCWjBJc1JVRkJSU3hKUVVGSkxFTkJRVU1zWjBKQlFXZENMRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJRM0pKTzFGQlJVUXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUlVGQlJTeFhRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTndSQ3hOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl4blJVRkJaMFVzUlVGQlJTeEZRVUZGTEdsQ1FVRnBRaXhGUVVGRkxFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1JVRkJSU3hEUVVGRExFTkJRVU03VTBGRGVFazdVVUZGUkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1JVRkJSU3hUUVVGSExFTkJRVU1zUlVGQlJUdFpRVU4yUXl4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5eHZSRUZCYjBRc1JVRkJSU3hGUVVGRkxFdEJRVXNzUlVGQlJTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRUUVVOd1J6dFJRVVZFTEUxQlFVMHNUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXgzUWtGQmQwSXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVU3WTBGRE5VUXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVTdZMEZEYkVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEpRVUZKTEZkQlFWY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVTdZMEZETVVRc1YwRkJWeXhEUVVGRExGZEJRVmM3WTBGRGRrSXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVTdZMEZEZEVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eEpRVUZKTEhsQ1FVRlhMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZPMk5CUXpkRUxFTkJRVU1zU1VGQlNTeERRVUZETEZsQlFWa3NTVUZCU1N4NVFrRkJWeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRkZCUVZFc1JVRkJSVHRqUVVOb1JTeERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRWxCUVVrc2VVSkJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVU3WTBGRE4wUXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVTdZMEZEYWtNc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJUdGpRVU16UXl4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1VVRkJVU3hGUVVGRk8yTkJRelZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1NVRkJTU3hKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1VVRkJVU3hGUVVGRk8yTkJRM0JFTEVOQlFVTXNTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZPMk5CUTNaRkxFTkJRVU1zU1VGQlNTeERRVUZETERaQ1FVRTJRaXhKUVVGSkxIbENRVUZYTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTzJOQlEycEdMRU5CUVVNc1NVRkJTU3hEUVVGRExEWkNRVUUyUWl4SlFVRkpMSGxDUVVGWExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1VVRkJVU3hGUVVGRk8yTkJRMnBHTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdVVUZGZGtNc1RVRkJUU3hOUVVGTkxFZEJRVWNzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXp0UlFVTTNRaXhKUVVGSkxFMUJRVTBzUzBGQlN5eFhRVUZYTEVOQlFVTXNUVUZCVFN4RlFVRkZPMWxCUXk5Q0xFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMSE5DUVVGelFpeFhRVUZYTEVOQlFVTXNUVUZCVFN4alFVRmpMRTFCUVUwc1JVRkJSU3hGUVVGRkxFVkJRVVVzVFVGQlRTeEZRVUZGTEVOQlFVTXNRMEZCUXp0VFFVTnVSenRSUVVWRUxFOUJRVThzWlVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRKUVVOeVF5eERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVVVGQlVUdFJRVU5ZTEU5QlFVODdLMEpCUTJkQ0xFTkJRVU1zU1VGQlNTeERRVUZETEhkQ1FVRjNRaXhKUVVGSkxHMUVRVUYzUWl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlR0alFVTjRSeXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVsQlFVa3NhVUpCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVN1YwRkRlRVFzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4SlFVRkpMRmRCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVTdhMEpCUTNoRExFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NTVUZCU1N4VFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZPMlZCUTNoRUxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNTVUZCU1N4NVFrRkJWeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlR0clFrRkRMME1zUTBGQlF5eEpRVUZKTEVOQlFVTXNXVUZCV1N4SlFVRkpMSGxDUVVGWExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZPMlZCUTNoRUxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNTVUZCU1N4NVFrRkJWeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlR0aFFVTndSQ3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVsQlFVa3NWMEZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlR0MVFrRkRka01zUTBGQlF5eEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFbEJRVWtzVjBGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJUdDNRa0ZETVVRc1EwRkJReXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRWxCUVVrc1YwRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRkZCUVZFc1JVRkJSVHRWUVVNeFJTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRWxCUVVrc1NVRkJTU3hEUVVGRExGZEJRVmNzU1VGQlNTeFRRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTzNsQ1FVTnNSQ3hEUVVGRExFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc1NVRkJTU3g1UWtGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSVHR0UTBGRGJFUXNRMEZCUXl4SlFVRkpMRU5CUVVNc05rSkJRVFpDTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVTdiVU5CUTNSRkxFTkJRVU1zU1VGQlNTeERRVUZETERaQ1FVRTJRaXhKUVVGSkxIbENRVUZYTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRk8xbEJRemRHTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1NVRkJTU3hUUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1VVRkJVU3hGUVVGRk8wVkJRM3BFTEVOQlFVTTdTVUZEUXl4RFFVRkRPenRCUVhCU1JEczdSMEZGUnp0QlFVTnZRaXhyUWtGQlRTeEhRVUZYTEVsQlFVa3NRMEZCUXp0QlFVVTNRenM3UjBGRlJ6dEJRVU52UWl3NFFrRkJhMElzUjBGQlZ5eEZRVUZGTEVOQlFVTTdRVUZGZGtRN08wZEJSVWM3UVVGRGIwSXNkVUpCUVZjc1IwRkJWeXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEZkQlFWY3NRMEZCUXl4clFrRkJhMElzUTBGQlF5eERRVUZETzBGQlJYaEdMR1ZCUVdVN1FVRkRVeXh2UWtGQlVTeEhRVUZuUWl4NVFrRkJWeXhEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1FVRnFRbXhHTEd0RFFYTlNReUo5IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBhcnJheUhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvYXJyYXlIZWxwZXJcIik7XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgZGF0YUVycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvZGF0YUVycm9yXCIpO1xyXG5jb25zdCB0cnl0ZXNfMSA9IHJlcXVpcmUoXCIuL3RyeXRlc1wiKTtcclxuLyoqXHJcbiAqIEEgY2xhc3MgZm9yIGhhbmRsaW5nIHRyaXRzLlxyXG4gKi9cclxuY2xhc3MgVHJpdHMge1xyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjb25zdHJ1Y3Rvcih0cml0cykge1xyXG4gICAgICAgIHRoaXMuX3RyaXRzID0gdHJpdHM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBpbnN0YW5jZSBvZiB0cml0cyBmcm9tIEludDhBcnJheSBhcnJheS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUcnl0ZXMgdXNlZCB0byBjcmVhdGUgdHJpdHMuXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiBUcml0cy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21BcnJheSh2YWx1ZSkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh2YWx1ZSwgSW50OEFycmF5KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHZhbHVlIGRvZXMgbm90IGNvbnRhaW4gdmFsaWQgdHJpdHNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgVHJpdHModmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgaW5zdGFuY2Ugb2YgdHJpdHMgZnJvbSBudW1iZXIgYXJyYXkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVHJ5dGVzIHVzZWQgdG8gY3JlYXRlIHRyaXRzLlxyXG4gICAgICogQHJldHVybnMgQW4gaW5zdGFuY2Ugb2YgVHJpdHMuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tTnVtYmVyQXJyYXkodmFsdWUpIHtcclxuICAgICAgICBpZiAoIWFycmF5SGVscGVyXzEuQXJyYXlIZWxwZXIuaXNUeXBlZCh2YWx1ZSwgTnVtYmVyKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHZhbHVlIGRvZXMgbm90IGNvbnRhaW4gdmFsaWQgdHJpdHNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgVHJpdHMobmV3IEludDhBcnJheSh2YWx1ZSkpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgaW5zdGFuY2Ugb2YgdHJpdHMgZnJvbSB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVHJ5dGVzIHVzZWQgdG8gY3JlYXRlIHRyaXRzLlxyXG4gICAgICogQHJldHVybnMgQW4gaW5zdGFuY2Ugb2YgVHJpdHMuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tVHJ5dGVzKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHZhbHVlLCB0cnl0ZXNfMS5Ucnl0ZXMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgc2hvdWxkIGJlIGEgdmFsaWQgVHJ5dGVzIG9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdHJ5dGVzU3RyaW5nID0gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICBjb25zdCB0cml0cyA9IG5ldyBJbnQ4QXJyYXkodHJ5dGVzU3RyaW5nLmxlbmd0aCAqIDMpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJ5dGVzU3RyaW5nLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkeCA9IHRyeXRlc18xLlRyeXRlcy5BTFBIQUJFVC5pbmRleE9mKHRyeXRlc1N0cmluZy5jaGFyQXQoaSkpO1xyXG4gICAgICAgICAgICB0cml0c1tpICogM10gPSBUcml0cy5UUllURVNfVFJJVFNbaWR4XVswXTtcclxuICAgICAgICAgICAgdHJpdHNbaSAqIDMgKyAxXSA9IFRyaXRzLlRSWVRFU19UUklUU1tpZHhdWzFdO1xyXG4gICAgICAgICAgICB0cml0c1tpICogMyArIDJdID0gVHJpdHMuVFJZVEVTX1RSSVRTW2lkeF1bMl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgVHJpdHModHJpdHMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgaW5zdGFuY2Ugb2YgdHJpdHMgZnJvbSBudW1iZXJcclxuICAgICAqIEBwYXJhbSB2YWx1ZSBOdW1iZXIgdXNlZCB0byBjcmVhdGUgdHJpdHMuXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiBUcml0cy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21OdW1iZXIodmFsdWUpIHtcclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgaXMgbm90IGFuIGludGVnZXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRyaXRzID0gW107XHJcbiAgICAgICAgbGV0IGFic29sdXRlVmFsdWUgPSB2YWx1ZSA8IDAgPyAtdmFsdWUgOiB2YWx1ZTtcclxuICAgICAgICB3aGlsZSAoYWJzb2x1dGVWYWx1ZSA+IDApIHtcclxuICAgICAgICAgICAgbGV0IHJlbWFpbmRlciA9IGFic29sdXRlVmFsdWUgJSAzO1xyXG4gICAgICAgICAgICBhYnNvbHV0ZVZhbHVlID0gTWF0aC5mbG9vcihhYnNvbHV0ZVZhbHVlIC8gMyk7XHJcbiAgICAgICAgICAgIGlmIChyZW1haW5kZXIgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICByZW1haW5kZXIgPSAtMTtcclxuICAgICAgICAgICAgICAgIGFic29sdXRlVmFsdWUrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cml0c1t0cml0cy5sZW5ndGhdID0gcmVtYWluZGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmFsdWUgPCAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJpdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRyaXRzW2ldID0gLXRyaXRzW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgVHJpdHMobmV3IEludDhBcnJheSh0cml0cykpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgdHdvIHRyaXRzIHRvZ2V0aGVyLlxyXG4gICAgICogQHBhcmFtIGZpcnN0IFRoZSBmaXJzdCB0cml0LlxyXG4gICAgICogQHBhcmFtIHNlY29uZCBUaGUgc2Vjb25kIHRyaXQuXHJcbiAgICAgKiBAcmV0dXJucyBOZXcgdHJpdCB3aGljaCBpcyB0aGUgYWRkaXRpb24gb2YgdGhlIGEgKyBiLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgYWRkKGZpcnN0LCBzZWNvbmQpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoZmlyc3QsIFRyaXRzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIGZpcnN0IHNob3VsZCBiZSBhIHZhbGlkIFRyaXRzIG9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHNlY29uZCwgVHJpdHMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgc2Vjb25kcyBzaG91bGQgYmUgYSB2YWxpZCBUcml0cyBvYmplY3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG91dCA9IG5ldyBJbnQ4QXJyYXkoTWF0aC5tYXgoZmlyc3QuX3RyaXRzLmxlbmd0aCwgc2Vjb25kLl90cml0cy5sZW5ndGgpKTtcclxuICAgICAgICBsZXQgY2FycnkgPSAwO1xyXG4gICAgICAgIGxldCBpQTtcclxuICAgICAgICBsZXQgaUI7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaUEgPSBpIDwgZmlyc3QuX3RyaXRzLmxlbmd0aCA/IGZpcnN0Ll90cml0c1tpXSA6IDA7XHJcbiAgICAgICAgICAgIGlCID0gaSA8IHNlY29uZC5fdHJpdHMubGVuZ3RoID8gc2Vjb25kLl90cml0c1tpXSA6IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IGZBID0gVHJpdHMuZnVsbEFkZChpQSwgaUIsIGNhcnJ5KTtcclxuICAgICAgICAgICAgb3V0W2ldID0gZkFbMF07XHJcbiAgICAgICAgICAgIGNhcnJ5ID0gZkFbMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBUcml0cy5mcm9tQXJyYXkob3V0KTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgc3RhdGljIGZ1bGxBZGQoYSwgYiwgYykge1xyXG4gICAgICAgIGNvbnN0IHNBID0gVHJpdHMuc3VtKGEsIGIpO1xyXG4gICAgICAgIGNvbnN0IGNBID0gVHJpdHMuY29ucyhhLCBiKTtcclxuICAgICAgICBjb25zdCBjQiA9IFRyaXRzLmNvbnMoc0EsIGMpO1xyXG4gICAgICAgIGNvbnN0IGNPdXQgPSBUcml0cy5hbnkoY0EsIGNCKTtcclxuICAgICAgICBjb25zdCBzT1V0ID0gVHJpdHMuc3VtKHNBLCBjKTtcclxuICAgICAgICByZXR1cm4gbmV3IEludDhBcnJheShbc09VdCwgY091dF0pO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBzdGF0aWMgc3VtKGEsIGIpIHtcclxuICAgICAgICBjb25zdCBzID0gYSArIGI7XHJcbiAgICAgICAgc3dpdGNoIChzKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICBjYXNlIC0yOiByZXR1cm4gMTtcclxuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIHM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBzdGF0aWMgY29ucyhhLCBiKSB7XHJcbiAgICAgICAgaWYgKGEgPT09IGIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBzdGF0aWMgYW55KGEsIGIpIHtcclxuICAgICAgICBjb25zdCBzID0gYSArIGI7XHJcbiAgICAgICAgaWYgKHMgPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzIDwgMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHZhbHVlIG9mIHRoZSB0cml0cyBhcnJheS5cclxuICAgICAqIEByZXR1cm5zIEFycmF5IHJlcHJlc2VudGF0aW9uIG9mIHRoZSB0cml0cy5cclxuICAgICAqL1xyXG4gICAgdG9BcnJheSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJpdHM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdmFsdWUgb2YgdGhlIHRyaXRzIGFycmF5IGFzIGEgbnVtYmVyIGFycmF5LlxyXG4gICAgICogQHJldHVybnMgQXJyYXkgcmVwcmVzZW50YXRpb24gb2YgdGhlIHRyaXRzLlxyXG4gICAgICovXHJcbiAgICB0b051bWJlckFycmF5KCkge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuX3RyaXRzKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSB0cml0cyBhcyB0cnl0ZXMuXHJcbiAgICAgKiBAcmV0dXJucyBJbnN0YW5jZSBvZiBUcnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHRvVHJ5dGVzKCkge1xyXG4gICAgICAgIGxldCB0cnl0ZXMgPSBcIlwiO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdHJpdHMubGVuZ3RoOyBpICs9IDMpIHtcclxuICAgICAgICAgICAgLy8gSXRlcmF0ZSBvdmVyIGFsbCBwb3NzaWJsZSB0cnl0ZSB2YWx1ZXMgdG8gZmluZCBjb3JyZWN0IHRyaXQgcmVwcmVzZW50YXRpb25cclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0cnl0ZXNfMS5Ucnl0ZXMuQUxQSEFCRVQubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChUcml0cy5UUllURVNfVFJJVFNbal1bMF0gPT09IHRoaXMuX3RyaXRzW2ldICYmXHJcbiAgICAgICAgICAgICAgICAgICAgVHJpdHMuVFJZVEVTX1RSSVRTW2pdWzFdID09PSB0aGlzLl90cml0c1tpICsgMV0gJiZcclxuICAgICAgICAgICAgICAgICAgICBUcml0cy5UUllURVNfVFJJVFNbal1bMl0gPT09IHRoaXMuX3RyaXRzW2kgKyAyXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeXRlcyArPSB0cnl0ZXNfMS5Ucnl0ZXMuQUxQSEFCRVQuY2hhckF0KGopO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyh0cnl0ZXMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHRyaXRzIGFzIGEgbnVtYmVyLlxyXG4gICAgICogQHJldHVybnMgVGhlIHRyaXRzIGNvbnZlcnRlZCB0byBhIG51bWJlci5cclxuICAgICAqL1xyXG4gICAgdG9OdW1iZXIoKSB7XHJcbiAgICAgICAgbGV0IHJldHVyblZhbHVlID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5fdHJpdHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSByZXR1cm5WYWx1ZSAqIDMgKyB0aGlzLl90cml0c1tpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGF0IGlzIHRoZSBsZW5ndGggb2YgdGhlIHRyaXRzLlxyXG4gICAgICogQHJldHVybnMgTGVuZ3RoIG9mIHRoZSB0cml0cy5cclxuICAgICAqL1xyXG4gICAgbGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cml0cy5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCBhIHN1YiBvZiB0aGUgdHJpdHMuXHJcbiAgICAgKiBAcGFyYW0gc3RhcnQgVGhlIHN0YXJ0IHBvc2l0aW9uIHRvIGdldCB0aGUgc3ViLlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBUaGUgbGVuZ3RoIG9mIHRoZSBzdWIuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgdHJpdHMgc3ViLlxyXG4gICAgICovXHJcbiAgICBzdWIoc3RhcnQsIGxlbmd0aCkge1xyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihzdGFydCkgfHwgc3RhcnQgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgc3RhcnQgbXVzdCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobGVuZ3RoKSB8fCAoc3RhcnQgKyBsZW5ndGgpID4gdGhpcy5fdHJpdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSBzdGFydCArIGxlbmd0aCBtdXN0IDw9ICR7dGhpcy5fdHJpdHMubGVuZ3RofWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gVHJpdHMuZnJvbUFycmF5KHRoaXMuX3RyaXRzLnNsaWNlKHN0YXJ0LCBzdGFydCArIGxlbmd0aCkpO1xyXG4gICAgfVxyXG59XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5Ucml0cy5UUllURVNfVFJJVFMgPSBbXHJcbiAgICBuZXcgSW50OEFycmF5KFswLCAwLCAwXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFsxLCAwLCAwXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFstMSwgMSwgMF0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMCwgMSwgMF0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMSwgMSwgMF0pLFxyXG4gICAgbmV3IEludDhBcnJheShbLTEsIC0xLCAxXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFswLCAtMSwgMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMSwgLTEsIDFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWy0xLCAwLCAxXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFswLCAwLCAxXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFsxLCAwLCAxXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFstMSwgMSwgMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMCwgMSwgMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMSwgMSwgMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbLTEsIC0xLCAtMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMCwgLTEsIC0xXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFsxLCAtMSwgLTFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWy0xLCAwLCAtMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMCwgMCwgLTFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzEsIDAsIC0xXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFstMSwgMSwgLTFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzAsIDEsIC0xXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFsxLCAxLCAtMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbLTEsIC0xLCAwXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFswLCAtMSwgMF0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMSwgLTEsIDBdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWy0xLCAwLCAwXSlcclxuXTtcclxuZXhwb3J0cy5Ucml0cyA9IFRyaXRzO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkSEpwZEhNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12WkdGMFlTOTBjbWwwY3k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzTUVWQlFYVkZPMEZCUTNaRkxEUkZRVUY1UlR0QlFVTjZSU3cwUlVGQmVVVTdRVUZEZWtVc2EwUkJRU3RETzBGQlF5OURMSEZEUVVGclF6dEJRVVZzUXpzN1IwRkZSenRCUVVOSU8wbEJiVU5KTEdWQlFXVTdTVUZEWml4WlFVRnZRaXhMUVVGblFqdFJRVU5vUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFdEJRVXNzUTBGQlF6dEpRVU40UWl4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlowSTdVVUZEY0VNc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1JVRkJSU3hUUVVGVExFTkJRVU1zUlVGQlJUdFpRVU40UXl4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5eDNRMEZCZDBNc1EwRkJReXhEUVVGRE8xTkJRMnBGTzFGQlEwUXNUMEZCVHl4SlFVRkpMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU0xUWl4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhsUVVGbExFTkJRVU1zUzBGQlpUdFJRVU42UXl4SlFVRkpMRU5CUVVNc2VVSkJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RlFVRkZMRTFCUVUwc1EwRkJReXhGUVVGRk8xbEJRM0pETEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExIZERRVUYzUXl4RFFVRkRMRU5CUVVNN1UwRkRha1U3VVVGRFJDeFBRVUZQTEVsQlFVa3NTMEZCU3l4RFFVRkRMRWxCUVVrc1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZETTBNc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEV0QlFXRTdVVUZEYkVNc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1JVRkJSU3hsUVVGTkxFTkJRVU1zUlVGQlJUdFpRVU55UXl4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5d3lRMEZCTWtNc1EwRkJReXhEUVVGRE8xTkJRM0JGTzFGQlEwUXNUVUZCVFN4WlFVRlpMRWRCUVVjc1MwRkJTeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFGQlEzUkRMRTFCUVUwc1MwRkJTeXhIUVVGakxFbEJRVWtzVTBGQlV5eERRVUZETEZsQlFWa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGFFVXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEZsQlFWa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRE1VTXNUVUZCVFN4SFFVRkhMRWRCUVVjc1pVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6VkVMRXRCUVVzc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRMRmxCUVZrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTXhReXhMUVVGTExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU1zV1VGQldTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRemxETEV0QlFVc3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4WlFVRlpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVMEZEYWtRN1VVRkRSQ3hQUVVGUExFbEJRVWtzUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUXpWQ0xFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4TFFVRmhPMUZCUTJ4RExFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlJUdFpRVU5vUXl4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5dzJRa0ZCTmtJc1EwRkJReXhEUVVGRE8xTkJRM1JFTzFGQlEwUXNUVUZCVFN4TFFVRkxMRWRCUVdFc1JVRkJSU3hEUVVGRE8xRkJRek5DTEVsQlFVa3NZVUZCWVN4SFFVRkhMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU03VVVGRkwwTXNUMEZCVHl4aFFVRmhMRWRCUVVjc1EwRkJReXhGUVVGRk8xbEJRM1JDTEVsQlFVa3NVMEZCVXl4SFFVRkhMR0ZCUVdFc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRGJFTXNZVUZCWVN4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zWVVGQllTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUlRsRExFbEJRVWtzVTBGQlV5eEhRVUZITEVOQlFVTXNSVUZCUlR0blFrRkRaaXhUUVVGVExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTJZc1lVRkJZU3hGUVVGRkxFTkJRVU03WVVGRGJrSTdXVUZGUkN4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEZOQlFWTXNRMEZCUXp0VFFVTnVRenRSUVVORUxFbEJRVWtzUzBGQlN5eEhRVUZITEVOQlFVTXNSVUZCUlR0WlFVTllMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzJkQ1FVTnVReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRGVFSTdVMEZEU2p0UlFVVkVMRTlCUVU4c1NVRkJTU3hMUVVGTExFTkJRVU1zU1VGQlNTeFRRVUZUTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVNelF5eERRVUZETzBsQlJVUTdPenM3TzA5QlMwYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVmtzUlVGQlJTeE5RVUZoTzFGQlEzcERMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRVZCUVVVc1MwRkJTeXhEUVVGRExFVkJRVVU3V1VGRGNFTXNUVUZCVFN4SlFVRkpMSEZDUVVGVExFTkJRVU1zTUVOQlFUQkRMRU5CUVVNc1EwRkJRenRUUVVOdVJUdFJRVU5FTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVWQlFVVXNTMEZCU3l4RFFVRkRMRVZCUVVVN1dVRkRja01zVFVGQlRTeEpRVUZKTEhGQ1FVRlRMRU5CUVVNc05FTkJRVFJETEVOQlFVTXNRMEZCUXp0VFFVTnlSVHRSUVVWRUxFMUJRVTBzUjBGQlJ5eEhRVUZITEVsQlFVa3NVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRVZCUVVVc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUXk5RkxFbEJRVWtzUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTmtMRWxCUVVrc1JVRkJSU3hEUVVGRE8xRkJRMUFzU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZGVUN4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVVZxUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGJrUXNSVUZCUlN4SFFVRkhMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM0pFTEUxQlFVMHNSVUZCUlN4SFFVRkhMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRaUVVONFF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyWXNTMEZCU3l4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU5xUWp0UlFVVkVMRTlCUVU4c1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0SlFVTm9ReXhEUVVGRE8wbEJSVVFzWlVGQlpUdEpRVU5RTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJVeXhGUVVGRkxFTkJRVk1zUlVGQlJTeERRVUZUTzFGQlEyeEVMRTFCUVUwc1JVRkJSU3hIUVVGSExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRek5DTEUxQlFVMHNSVUZCUlN4SFFVRkhMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUXpWQ0xFMUJRVTBzUlVGQlJTeEhRVUZITEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6ZENMRTFCUVUwc1NVRkJTU3hIUVVGSExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJReTlDTEUxQlFVMHNTVUZCU1N4SFFVRkhMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUlRsQ0xFOUJRVThzU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU4yUXl4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCVXl4RlFVRkZMRU5CUVZNN1VVRkRia01zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVWb1FpeFJRVUZSTEVOQlFVTXNSVUZCUlR0WlFVTlFMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnNRaXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1dVRkRiRUlzVDBGQlR5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1UwRkRja0k3U1VGRFRDeERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlV5eEZRVUZGTEVOQlFWTTdVVUZEY0VNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTzFsQlExUXNUMEZCVHl4RFFVRkRMRU5CUVVNN1UwRkRXanRSUVVORUxFOUJRVThzUTBGQlF5eERRVUZETzBsQlEySXNRMEZCUXp0SlFVVkVMR1ZCUVdVN1NVRkRVQ3hOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFWTXNSVUZCUlN4RFFVRlRPMUZCUTI1RExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkZhRUlzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPMWxCUTFBc1QwRkJUeXhEUVVGRExFTkJRVU03VTBGRFdqdGhRVUZOTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRaUVVOa0xFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTTdVMEZEWWp0UlFVVkVMRTlCUVU4c1EwRkJReXhEUVVGRE8wbEJRMklzUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxFOUJRVTg3VVVGRFZpeFBRVUZQTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNN1NVRkRka0lzUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxHRkJRV0U3VVVGRGFFSXNUMEZCVHl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0SlFVTnVReXhEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1VVRkJVVHRSUVVOWUxFbEJRVWtzVFVGQlRTeEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVVm9RaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSVHRaUVVNMVF5dzJSVUZCTmtVN1dVRkROMFVzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExHVkJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8yZENRVU0zUXl4SlFVRkpMRXRCUVVzc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUXpORExFdEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yOUNRVU12UXl4TFFVRkxMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZPMjlDUVVOcVJDeE5RVUZOTEVsQlFVa3NaVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUTNCRExFMUJRVTA3YVVKQlExUTdZVUZEU2p0VFFVTktPMUZCUlVRc1QwRkJUeXhsUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMGxCUTNKRExFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hSUVVGUk8xRkJRMWdzU1VGQlNTeFhRVUZYTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUlhCQ0xFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRE9VTXNWMEZCVnl4SFFVRkhMRmRCUVZjc1IwRkJSeXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVOc1JEdFJRVVZFTEU5QlFVOHNWMEZCVnl4RFFVRkRPMGxCUTNaQ0xFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hOUVVGTk8xRkJRMVFzVDBGQlR5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJRenRKUVVNNVFpeERRVUZETzBsQlJVUTdPenM3TzA5QlMwYzdTVUZEU1N4SFFVRkhMRU5CUVVNc1MwRkJZU3hGUVVGRkxFMUJRV003VVVGRGNFTXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRXRCUVVzc1IwRkJSeXhEUVVGRExFVkJRVVU3V1VGRE4wTXNUVUZCVFN4SlFVRkpMSEZDUVVGVExFTkJRVU1zYVVOQlFXbERMRU5CUVVNc1EwRkJRenRUUVVNeFJEdFJRVU5FTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1JVRkJSVHRaUVVNeFJTeE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXc0UWtGQk9FSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eERRVUZETzFOQlF6TkZPMUZCUTBRc1QwRkJUeXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUlVGQlJTeExRVUZMTEVkQlFVY3NUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOeVJTeERRVUZET3p0QlFYWlJSQ3hsUVVGbE8wRkJRMU1zYTBKQlFWa3NSMEZCWjBJN1NVRkRhRVFzU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzaENMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVONFFpeEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjZRaXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGVFSXNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNoQ0xFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZETVVJc1NVRkJTU3hUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGVrSXNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRla0lzU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEZWtJc1NVRkJTU3hUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM2hDTEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjRRaXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU42UWl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRlRUlzU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzaENMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU16UWl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRekZDTEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRNVUlzU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTXhRaXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU42UWl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVONlFpeEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUXpGQ0xFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzcENMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM3BDTEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRNVUlzU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEZWtJc1NVRkJTU3hUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGVrSXNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1EwRkROVUlzUTBGQlF6dEJRVGxDVGl4elFrRXdVVU1pZlE9PSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgbnVtYmVySGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBkYXRhRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9kYXRhRXJyb3JcIik7XHJcbmNvbnN0IHRyaXRzXzEgPSByZXF1aXJlKFwiLi90cml0c1wiKTtcclxuY29uc3QgdHJ5dGVzXzEgPSByZXF1aXJlKFwiLi90cnl0ZXNcIik7XHJcbi8qKlxyXG4gKiBBIGNsYXNzIGZvciBoYW5kbGluZyB0cnl0ZSBudW1iZXIuXHJcbiAqL1xyXG5jbGFzcyBUcnl0ZU51bWJlciB7XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNvbnN0cnVjdG9yKHRyeXRlcykge1xyXG4gICAgICAgIHRoaXMuX3RyeXRlcyA9IHRyeXRlcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIHRyeXRlIG51bWJlciBmcm9tIG51bWJlci5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgbnVtYmVyIHZhbHVlIHRvIGNyZWF0ZSB0aGUgb2JqZWN0IGZyb20uXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIFRoZSB0cnl0ZSBsZW5ndGggdG8gcGFkIHRoZSBudW1iZXIgd2l0aC5cclxuICAgICAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIFRyeXRlTnVtYmVyLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbU51bWJlcih2YWx1ZSwgbGVuZ3RoID0gVHJ5dGVOdW1iZXIuTEVOR1RIXzkpIHtcclxuICAgICAgICBsZXQgdHJ5dGVzO1xyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihsZW5ndGgpIHx8IGxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgbGVuZ3RoIHNob3VsZCBiZSBhIG51bWJlciA+IDBcIiwgeyBsZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgdHJ5dGVzID0gXCI5XCIucmVwZWF0KGxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHZhbHVlIGlzIG5vdCBhbiBpbnRlZ2VyXCIsIHsgdmFsdWUgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdHJpdHMgPSB0cml0c18xLlRyaXRzLmZyb21OdW1iZXIodmFsdWUpLnRvTnVtYmVyQXJyYXkoKTtcclxuICAgICAgICAgICAgd2hpbGUgKHRyaXRzLmxlbmd0aCA8IGxlbmd0aCAqIDMpIHtcclxuICAgICAgICAgICAgICAgIHRyaXRzLnB1c2goMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJ5dGVzID0gdHJpdHNfMS5Ucml0cy5mcm9tTnVtYmVyQXJyYXkodHJpdHMpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcnl0ZU51bWJlcih0cnl0ZXMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgdHJ5dGUgbnVtYmVyIGZyb20gdHJ5dGVzLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBudW1iZXIgdmFsdWUgdG8gY3JlYXRlIHRoZSBvYmplY3QgZnJvbS5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggVGhlIHRyeXRlIGxlbmd0aCB0byBwYWQgdGhlIG51bWJlciB3aXRoLlxyXG4gICAgICogQHJldHVybnMgQW4gaW5zdGFuY2Ugb2YgVHJ5dGVOdW1iZXIuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tVHJ5dGVzKHZhbHVlLCBsZW5ndGggPSBUcnl0ZU51bWJlci5MRU5HVEhfOSkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh2YWx1ZSwgdHJ5dGVzXzEuVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHZhbHVlIHNob3VsZCBiZSBhIHZhbGlkIFRyeXRlcyBvYmplY3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0cnl0ZVN0cmluZyA9IHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGxlbmd0aCkgfHwgbGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBsZW5ndGggc2hvdWxkIGJlIGEgbnVtYmVyID4gMFwiLCB7IGxlbmd0aCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRyeXRlU3RyaW5nLmxlbmd0aCA+IGxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHZhbHVlIGNvbnRhaW5zIHRvbyBtYW55IGNoYXJhY3RlcnNcIiwgeyBsZW5ndGg6IHRyeXRlU3RyaW5nLmxlbmd0aCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKHRyeXRlU3RyaW5nLmxlbmd0aCA8IGxlbmd0aCkge1xyXG4gICAgICAgICAgICB0cnl0ZVN0cmluZyArPSBcIjlcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcnl0ZU51bWJlcih0cnl0ZVN0cmluZyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdGhlIHRyeXRlIG51bWJlciB0byB0cnl0ZXMuXHJcbiAgICAgKiBAcmV0dXJucyBUcnl0ZXMgdmVyc2lvbiBvZiB0aGUgdHJ5dGUgbnVtYmVyLlxyXG4gICAgICovXHJcbiAgICB0b1RyeXRlcygpIHtcclxuICAgICAgICByZXR1cm4gdHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcodGhpcy5fdHJ5dGVzKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCB0aGUgdHJ5dGUgbnVtYmVyIHRvIG51bWJlci5cclxuICAgICAqIEByZXR1cm5zIG51bWJlciB2YWx1ZSBvZiB0aGUgdHJ5dGUgbnVtYmVyLlxyXG4gICAgICovXHJcbiAgICB0b051bWJlcigpIHtcclxuICAgICAgICByZXR1cm4gdHJpdHNfMS5Ucml0cy5mcm9tVHJ5dGVzKHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKHRoaXMuX3RyeXRlcykpLnRvTnVtYmVyKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgc3RyaW5nIHZpZXcgb2YgdGhlIG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIHN0cmluZyBvZiB0aGUgdHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJ5dGVzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHZhbHVlIG9mIHRoZSBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyBzdHJpbmcgb2YgdGhlIHRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgdmFsdWVPZigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b051bWJlcigpO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBMZW5ndGggb2YgYSBudW1iZXIgdGhhdCB1c2VzIDkgdHJ5dGVzLlxyXG4gKi9cclxuVHJ5dGVOdW1iZXIuTEVOR1RIXzkgPSA5O1xyXG4vKipcclxuICogQW4gZW1wdHkgOSBsZW5ndGggdHJ5dGUgbnVtYmVyLlxyXG4gKi9cclxuVHJ5dGVOdW1iZXIuRU1QVFlfOSA9IFRyeXRlTnVtYmVyLmZyb21OdW1iZXIoMCwgVHJ5dGVOdW1iZXIuTEVOR1RIXzkpO1xyXG5leHBvcnRzLlRyeXRlTnVtYmVyID0gVHJ5dGVOdW1iZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRISjVkR1ZPZFcxaVpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlpHRjBZUzkwY25sMFpVNTFiV0psY2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzTkVWQlFYbEZPMEZCUTNwRkxEUkZRVUY1UlR0QlFVTjZSU3hyUkVGQkswTTdRVUZETDBNc2JVTkJRV2RETzBGQlEyaERMSEZEUVVGclF6dEJRVVZzUXpzN1IwRkZSenRCUVVOSU8wbEJZVWtzWlVGQlpUdEpRVU5tTEZsQlFXOUNMRTFCUVdNN1VVRkRPVUlzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNN1NVRkRNVUlzUTBGQlF6dEpRVVZFT3pzN096dFBRVXRITzBsQlEwa3NUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhMUVVGaExFVkJRVVVzVTBGQmFVSXNWMEZCVnl4RFFVRkRMRkZCUVZFN1VVRkRla1VzU1VGQlNTeE5RVUZOTEVOQlFVTTdVVUZGV0N4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1RVRkJUU3hKUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU5vUkN4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5eHRRMEZCYlVNc1JVRkJSU3hGUVVGRkxFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTTdVMEZEZUVVN1VVRkZSQ3hKUVVGSkxESkNRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRk8xbEJRemRDTEUxQlFVMHNSMEZCUnl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFOQlF5OUNPMkZCUVUwN1dVRkRTQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVVU3WjBKQlEyaERMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETERaQ1FVRTJRaXhGUVVGRkxFVkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0aFFVTnFSVHRaUVVWRUxFMUJRVTBzUzBGQlN5eEhRVUZITEdGQlFVc3NRMEZCUXl4VlFVRlZMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zWVVGQllTeEZRVUZGTEVOQlFVTTdXVUZGZEVRc1QwRkJUeXhMUVVGTExFTkJRVU1zVFVGQlRTeEhRVUZITEUxQlFVMHNSMEZCUnl4RFFVRkRMRVZCUVVVN1owSkJRemxDTEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRGFrSTdXVUZGUkN4TlFVRk5MRWRCUVVjc1lVRkJTeXhEUVVGRExHVkJRV1VzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dFRRVU12UkR0UlFVVkVMRTlCUVU4c1NVRkJTU3hYUVVGWExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdTVUZEYmtNc1EwRkJRenRKUVVWRU96czdPenRQUVV0SE8wbEJRMGtzVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4TFFVRmhMRVZCUVVVc1UwRkJhVUlzVjBGQlZ5eERRVUZETEZGQlFWRTdVVUZEZWtVc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1JVRkJSU3hsUVVGTkxFTkJRVU1zUlVGQlJUdFpRVU55UXl4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5d3lRMEZCTWtNc1EwRkJReXhEUVVGRE8xTkJRM0JGTzFGQlEwUXNTVUZCU1N4WFFVRlhMRWRCUVVjc1MwRkJTeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFGQlJXNURMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hOUVVGTkxFbEJRVWtzUTBGQlF5eEZRVUZGTzFsQlEyaEVMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETEcxRFFVRnRReXhGUVVGRkxFVkJRVVVzVFVGQlRTeEZRVUZGTEVOQlFVTXNRMEZCUXp0VFFVTjRSVHRSUVVWRUxFbEJRVWtzVjBGQlZ5eERRVUZETEUxQlFVMHNSMEZCUnl4TlFVRk5MRVZCUVVVN1dVRkROMElzVFVGQlRTeEpRVUZKTEhGQ1FVRlRMRU5CUVVNc2QwTkJRWGRETEVWQlFVVXNSVUZCUlN4TlFVRk5MRVZCUVVVc1YwRkJWeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTTdVMEZEYWtjN1VVRkZSQ3hQUVVGUExGZEJRVmNzUTBGQlF5eE5RVUZOTEVkQlFVY3NUVUZCVFN4RlFVRkZPMWxCUTJoRExGZEJRVmNzU1VGQlNTeEhRVUZITEVOQlFVTTdVMEZEZEVJN1VVRkZSQ3hQUVVGUExFbEJRVWtzVjBGQlZ5eERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMGxCUTNoRExFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hSUVVGUk8xRkJRMWdzVDBGQlR5eGxRVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dEpRVU16UXl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NVVUZCVVR0UlFVTllMRTlCUVU4c1lVRkJTeXhEUVVGRExGVkJRVlVzUTBGQlF5eGxRVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMGxCUTNoRkxFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hSUVVGUk8xRkJRMWdzVDBGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRPMGxCUTNoQ0xFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hQUVVGUE8xRkJRMVlzVDBGQlR5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1NVRkRNMElzUTBGQlF6czdRVUV4UjBRN08wZEJSVWM3UVVGRGIwSXNiMEpCUVZFc1IwRkJWeXhEUVVGRExFTkJRVU03UVVGRE5VTTdPMGRCUlVjN1FVRkRiMElzYlVKQlFVOHNSMEZCWjBJc1YwRkJWeXhEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETEVWQlFVVXNWMEZCVnl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8wRkJVbXhITEd0RFFUUkhReUo5IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBudW1iZXJIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKTtcclxuY29uc3Qgc3RyaW5nSGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9zdHJpbmdIZWxwZXJcIik7XHJcbmNvbnN0IGRhdGFFcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2RhdGFFcnJvclwiKTtcclxuLyoqXHJcbiAqIEEgY2xhc3MgZm9yIGhhbmRsaW5nIHRyeXRlcy5cclxuICovXHJcbmNsYXNzIFRyeXRlcyB7XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNvbnN0cnVjdG9yKHRyeXRlcykge1xyXG4gICAgICAgIHRoaXMuX3RyeXRlcyA9IHRyeXRlcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIHRyeXRlcyBmcm9tIGEgc3RyaW5nLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIEEgc3RyaW5nIHRvIGNyZWF0ZSB0aGUgdHJ5dGVzIGZyb20uXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIEFuIG9wdGlvbmFsIHZhbGlkYXRpb24gbGVuZ3RoIGZvciB0aGUgdHJ5dGVzLCAwIG1lYW5zIGlnbm9yZSBsZW5ndGguXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiBUcnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tU3RyaW5nKHZhbHVlLCBsZW5ndGggPSAwKSB7XHJcbiAgICAgICAgaWYgKCFzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNTdHJpbmcodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgbXVzdCBiZSBhIG5vbiBlbXB0eSBzdHJpbmdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihsZW5ndGgpIHx8IGxlbmd0aCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBsZW5ndGggbXVzdCBiZSA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIVRyeXRlcy5pc1ZhbGlkKHZhbHVlLCBsZW5ndGgpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgYW5kIGxlbmd0aCBkbyBub3QgY29udGFpbiB2YWxpZCB0cnl0ZXNcIiwgeyB2YWx1ZSwgbGVuZ3RoIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFRyeXRlcyh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIERvZXMgdGhlIHZhbHVlIGNvbnRhaW4gdmFsaWQgdHJ5dGVzLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIEEgc3RyaW5nIHRvIHZhbGlkYXRlIGFzIHRyeXRlcy5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggQW4gb3B0aW9uYWwgdmFsaWRhdGlvbiBsZW5ndGggZm9yIHRoZSB0cnl0ZXMsIDAgbWVhbnMgaWdub3JlIGxlbmd0aC5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGlucHV0IHdhcyB2YWxpZCB0cnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc1ZhbGlkKHZhbHVlLCBsZW5ndGggPSAwKSB7XHJcbiAgICAgICAgaWYgKCFzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNTdHJpbmcodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKGBeWzlBLVpdeyR7bGVuZ3RoID8gbGVuZ3RoIDogXCIwLFwifX0kYCkudGVzdCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRoZSB0cnl0ZXMgdG8gYSBzdHJpbmcuXHJcbiAgICAgKiBAcmV0dXJucyBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyeXRlcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBsZW5ndGggb2YgdGhlIHRyeXRlcy5cclxuICAgICAqIEByZXR1cm5zIFRoZSBsZW5ndGggb2YgdGhlIHRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgbGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cnl0ZXMubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYSBzdWIgb2YgdGhlIHRyeXRlcy5cclxuICAgICAqIEBwYXJhbSBzdGFydCBUaGUgc3RhcnQgcG9zaXRpb24gdG8gZ2V0IHRoZSBzdWIuXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIFRoZSBsZW5ndGggb2YgdGhlIHN1Yi5cclxuICAgICAqIEByZXR1cm5zIFRoZSB0cnl0ZXMgc3ViLlxyXG4gICAgICovXHJcbiAgICBzdWIoc3RhcnQsIGxlbmd0aCkge1xyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihzdGFydCkgfHwgc3RhcnQgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgc3RhcnQgbXVzdCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobGVuZ3RoKSB8fCAoc3RhcnQgKyBsZW5ndGgpID4gdGhpcy5fdHJ5dGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgc3RhcnQgKyBsZW5ndGggbXVzdCA8PSAke3RoaXMuX3RyeXRlcy5sZW5ndGh9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBUcnl0ZXMuZnJvbVN0cmluZyh0aGlzLl90cnl0ZXMuc3Vic3RyKHN0YXJ0LCBsZW5ndGgpKTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogQWxsIHRoZSBjaGFyYWN0ZXJzIHRoYXQgY2FuIGJlIHVzZWQgaW4gdHJ5dGVzLlxyXG4gKi9cclxuVHJ5dGVzLkFMUEhBQkVUID0gXCI5QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpcIjtcclxuZXhwb3J0cy5Ucnl0ZXMgPSBUcnl0ZXM7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRISjVkR1Z6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMlJoZEdFdmRISjVkR1Z6TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRU3cwUlVGQmVVVTdRVUZEZWtVc05FVkJRWGxGTzBGQlEzcEZMR3RFUVVFclF6dEJRVVV2UXpzN1IwRkZSenRCUVVOSU8wbEJVMGtzWlVGQlpUdEpRVU5tTEZsQlFXOUNMRTFCUVdNN1VVRkRPVUlzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNN1NVRkRNVUlzUTBGQlF6dEpRVVZFT3pzN096dFBRVXRITzBsQlEwa3NUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhMUVVGaExFVkJRVVVzVTBGQmFVSXNRMEZCUXp0UlFVTjBSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVVU3V1VGREwwSXNUVUZCVFN4SlFVRkpMSEZDUVVGVExFTkJRVU1zYzBOQlFYTkRMRU5CUVVNc1EwRkJRenRUUVVNdlJEdFJRVU5FTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4TlFVRk5MRWRCUVVjc1EwRkJReXhGUVVGRk8xbEJReTlETEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExIbENRVUY1UWl4RFFVRkRMRU5CUVVNN1UwRkRiRVE3VVVGRFJDeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFVkJRVVVzVFVGQlRTeERRVUZETEVWQlFVVTdXVUZEYUVNc1RVRkJUU3hKUVVGSkxIRkNRVUZUTEVOQlFVTXNhMFJCUVd0RUxFVkJRVVVzUlVGQlJTeExRVUZMTEVWQlFVVXNUVUZCVFN4RlFVRkZMRU5CUVVNc1EwRkJRenRUUVVNNVJqdFJRVU5FTEU5QlFVOHNTVUZCU1N4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRE4wSXNRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZoTEVWQlFVVXNVMEZCYVVJc1EwRkJRenRSUVVOdVJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVTdXVUZETDBJc1QwRkJUeXhMUVVGTExFTkJRVU03VTBGRGFFSTdZVUZCVFR0WlFVTklMRTlCUVU4c1NVRkJTU3hOUVVGTkxFTkJRVU1zVjBGQlZ5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VTBGRGVFVTdTVUZEVEN4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NVVUZCVVR0UlFVTllMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF6dEpRVU40UWl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NUVUZCVFR0UlFVTlVMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTTdTVUZETDBJc1EwRkJRenRKUVVWRU96czdPenRQUVV0SE8wbEJRMGtzUjBGQlJ5eERRVUZETEV0QlFXRXNSVUZCUlN4TlFVRmpPMUZCUTNCRExFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeExRVUZMTEVkQlFVY3NRMEZCUXl4RlFVRkZPMWxCUXpkRExFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMR2xEUVVGcFF5eERRVUZETEVOQlFVTTdVMEZETVVRN1VVRkRSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NUVUZCVFN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVWQlFVVTdXVUZETTBVc1RVRkJUU3hKUVVGSkxIRkNRVUZUTEVOQlFVTXNPRUpCUVRoQ0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1EwRkJRenRUUVVNMVJUdFJRVU5FTEU5QlFVOHNUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5xUlN4RFFVRkRPenRCUVRWRlJEczdSMEZGUnp0QlFVTlhMR1ZCUVZFc1IwRkJWeXcyUWtGQk5rSXNRMEZCUXp0QlFVcHVSU3gzUWtFNFJVTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBjb3JlRXJyb3JfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9lcnJvci9jb3JlRXJyb3JcIik7XHJcbi8qKlxyXG4gKiBBIGRhdGEgaW1wbGVtZW50YXRpb24gb2YgYW4gZXJyb3IuXHJcbiAqL1xyXG5jbGFzcyBEYXRhRXJyb3IgZXh0ZW5kcyBjb3JlRXJyb3JfMS5Db3JlRXJyb3Ige1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgRGF0YUVycm9yLlxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIG1lc3NhZ2UgZm9yIHRoZSBlcnJvci5cclxuICAgICAqIEBwYXJhbSBhZGRpdGlvbmFsIEFkZGl0aW9uYWwgZGV0YWlscyBhYm91dCB0aGUgZXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gaW5uZXJFcnJvciBBZGQgaW5mb3JtYXRpb24gZnJvbSBpbm5lciBlcnJvciBpZiB0aGVyZSB3YXMgb25lLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBhZGRpdGlvbmFsLCBpbm5lckVycm9yKSB7XHJcbiAgICAgICAgc3VwZXIobWVzc2FnZSwgYWRkaXRpb25hbCwgaW5uZXJFcnJvcik7XHJcbiAgICAgICAgdGhpcy5kb21haW4gPSBcIkRhdGFcIjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkRhdGFFcnJvciA9IERhdGFFcnJvcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWkdGMFlVVnljbTl5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMlZ5Y205eUwyUmhkR0ZGY25KdmNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc2IwVkJRV2xGTzBGQlJXcEZPenRIUVVWSE8wRkJRMGdzWlVGQmRVSXNVMEZCVVN4eFFrRkJVenRKUVVOd1F6czdPenM3VDBGTFJ6dEpRVU5JTEZsQlFWa3NUMEZCWlN4RlFVRkZMRlZCUVd0RExFVkJRVVVzVlVGQmEwSTdVVUZETDBVc1MwRkJTeXhEUVVGRExFOUJRVThzUlVGQlJTeFZRVUZWTEVWQlFVVXNWVUZCVlN4RFFVRkRMRU5CUVVNN1VVRkRka01zU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNN1NVRkRla0lzUTBGQlF6dERRVU5LTzBGQldFUXNPRUpCVjBNaWZRPT0iLCJmdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogQ29tYmluZWQgaW5kZXggb2YgYWxsIHRoZSBtb2R1bGVzLlxyXG4gKi9cclxuX19leHBvcnQocmVxdWlyZShcIi4vcHJvb2ZPZldvcmtXZWJHbFwiKSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdmFXNWtaWGd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3p0SFFVVkhPMEZCUTBnc2QwTkJRVzFESW4wPSIsInZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IHNwb25nZUZhY3RvcnlfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L2ZhY3Rvcmllcy9zcG9uZ2VGYWN0b3J5XCIpO1xyXG5jb25zdCB0cml0c18xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJpdHNcIik7XHJcbmNvbnN0IGFkZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFkZXJzL2FkZFwiKSk7XHJcbmNvbnN0IGNoZWNrQ29sXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL3NoYWRlcnMvY2hlY2tDb2xcIikpO1xyXG5jb25zdCBjaGVja0RvXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL3NoYWRlcnMvY2hlY2tEb1wiKSk7XHJcbmNvbnN0IGNoZWNrS18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFkZXJzL2NoZWNrS1wiKSk7XHJcbmNvbnN0IGZpbmFsaXplXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL3NoYWRlcnMvZmluYWxpemVcIikpO1xyXG5jb25zdCBoZWFkZXJzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL3NoYWRlcnMvaGVhZGVyc1wiKSk7XHJcbmNvbnN0IGluY3JlbWVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFkZXJzL2luY3JlbWVudFwiKSk7XHJcbmNvbnN0IGluaXRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhZGVycy9pbml0XCIpKTtcclxuY29uc3QgdHJhbnNmb3JtXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL3NoYWRlcnMvdHJhbnNmb3JtXCIpKTtcclxuY29uc3Qgd2ViR0xXb3JrZXJfMSA9IHJlcXVpcmUoXCIuLi93ZWJHTC93ZWJHTFdvcmtlclwiKTtcclxuY29uc3QgcGVhcmxEaXZlclN0YXRlXzEgPSByZXF1aXJlKFwiLi9wZWFybERpdmVyU3RhdGVcIik7XHJcbi8qKlxyXG4gKiBQZWFybERpdmVyLlxyXG4gKiBDb252ZXJ0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vaW90YWxlZGdlci9jdXJsLmxpYi5qcy9ibG9iL21hc3Rlci9zcmMvcGVhcmxkaXZlci5qc1xyXG4gKi9cclxuY2xhc3MgUGVhcmxEaXZlciB7XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNvbnN0cnVjdG9yKHdlYkdMUGxhdGZvcm0pIHtcclxuICAgICAgICB0aGlzLl93ZWJHTFdvcmtlciA9IG5ldyB3ZWJHTFdvcmtlcl8xLldlYkdMV29ya2VyKCk7XHJcbiAgICAgICAgY29uc3QgY3VybCA9IHNwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkuY3JlYXRlKFwiY3VybFwiKTtcclxuICAgICAgICB0aGlzLl9oYXNoTGVuZ3RoID0gY3VybC5nZXRDb25zdGFudChcIkhBU0hfTEVOR1RIXCIpO1xyXG4gICAgICAgIHRoaXMuX3N0YXRlTGVuZ3RoID0gY3VybC5nZXRDb25zdGFudChcIlNUQVRFX0xFTkdUSFwiKTtcclxuICAgICAgICB0aGlzLl9udW1iZXJSb3VuZHMgPSBjdXJsLmdldENvbnN0YW50KFwiTlVNQkVSX09GX1JPVU5EU1wiKTtcclxuICAgICAgICB0aGlzLl90cmFuc2FjdGlvbkxlbmd0aCA9IHRoaXMuX2hhc2hMZW5ndGggKiAzMztcclxuICAgICAgICB0aGlzLl9ub25jZUxlbmd0aCA9IHRoaXMuX2hhc2hMZW5ndGggLyAzO1xyXG4gICAgICAgIHRoaXMuX25vbmNlU3RhcnQgPSB0aGlzLl9oYXNoTGVuZ3RoIC0gdGhpcy5fbm9uY2VMZW5ndGg7XHJcbiAgICAgICAgdGhpcy5fd2ViR0xXb3JrZXIuaW5pdGlhbGl6ZSh3ZWJHTFBsYXRmb3JtLCB0aGlzLl9zdGF0ZUxlbmd0aCArIDEsIFBlYXJsRGl2ZXIuVEVYRUxfU0laRSk7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudEJ1ZmZlciA9IHRoaXMuX3dlYkdMV29ya2VyLmdldElwdCgpLmRhdGE7XHJcbiAgICAgICAgdGhpcy5fd2ViR0xXb3JrZXIuYWRkUHJvZ3JhbShcImluaXRcIiwgaGVhZGVyc18xLmRlZmF1bHQgKyBhZGRfMS5kZWZhdWx0ICsgaW5pdF8xLmRlZmF1bHQsIFwiZ3Jfb2Zmc2V0XCIpO1xyXG4gICAgICAgIHRoaXMuX3dlYkdMV29ya2VyLmFkZFByb2dyYW0oXCJpbmNyZW1lbnRcIiwgaGVhZGVyc18xLmRlZmF1bHQgKyBhZGRfMS5kZWZhdWx0ICsgaW5jcmVtZW50XzEuZGVmYXVsdCk7XHJcbiAgICAgICAgdGhpcy5fd2ViR0xXb3JrZXIuYWRkUHJvZ3JhbShcInR3aXN0XCIsIGhlYWRlcnNfMS5kZWZhdWx0ICsgdHJhbnNmb3JtXzEuZGVmYXVsdCk7XHJcbiAgICAgICAgdGhpcy5fd2ViR0xXb3JrZXIuYWRkUHJvZ3JhbShcImNoZWNrXCIsIGhlYWRlcnNfMS5kZWZhdWx0ICsgY2hlY2tEb18xLmRlZmF1bHQgKyBjaGVja0tfMS5kZWZhdWx0LCBcIm1pbldlaWdodE1hZ25pdHVkZVwiKTtcclxuICAgICAgICB0aGlzLl93ZWJHTFdvcmtlci5hZGRQcm9ncmFtKFwiY29sX2NoZWNrXCIsIGhlYWRlcnNfMS5kZWZhdWx0ICsgY2hlY2tDb2xfMS5kZWZhdWx0KTtcclxuICAgICAgICB0aGlzLl93ZWJHTFdvcmtlci5hZGRQcm9ncmFtKFwiZmluYWxpemVcIiwgaGVhZGVyc18xLmRlZmF1bHQgKyBjaGVja0RvXzEuZGVmYXVsdCArIGZpbmFsaXplXzEuZGVmYXVsdCk7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBwZWFybERpdmVyU3RhdGVfMS5QZWFybERpdmVyU3RhdGUucmVhZHk7XHJcbiAgICAgICAgdGhpcy5fcXVldWUgPSBbXTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZSB0aGUgUGVhcmxEaXZlciBtYWluIGluc3RhbmNlLlxyXG4gICAgICogQHBhcmFtIHdlYkdMUGxhdGZvcm0gVGhlIHBsYXRmb3JtIHNvIGluaXRpYWxpemUgdGhlIHBlYXJsIGRpdmVyIHdpdGguXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpbml0aWFsaXplKHdlYkdMUGxhdGZvcm0pIHtcclxuICAgICAgICBpZiAoIVBlYXJsRGl2ZXIuaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgUGVhcmxEaXZlci5pbnN0YW5jZSA9IG5ldyBQZWFybERpdmVyKHdlYkdMUGxhdGZvcm0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ2xvc2Vkb3duIHRoZSBQZWFybERpdmVyIG1haW4gaW5zdGFuY2UuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjbG9zZWRvd24oKSB7XHJcbiAgICAgICAgaWYgKFBlYXJsRGl2ZXIuaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgUGVhcmxEaXZlci5pbnN0YW5jZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFBlcmZvcm0gYSBzZWFyY2ggdXNpbmcgdHJ5dGVzLlxyXG4gICAgICogQHBhcmFtIHRyeXRlcyBUaGUgdHJ5dGVzIHRvIHBlcmZvcm0gdGhlIHNlYXJjaCBvbi5cclxuICAgICAqIEBwYXJhbSBtaW5XZWlnaHRNYWduaXR1ZGUgVGhlIG1pbmltdW0gd2VpZ2h0IG1hZ25pdHVkZS5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2Ugd2hpY2ggcmVzb2x2ZXMgdG8gdGhlIHRyeXRlcyBmcm9tIHRoZSBzZWFyY2guXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHNlYXJjaFdpdGhUcnl0ZXModHJ5dGVzLCBtaW5XZWlnaHRNYWduaXR1ZGUpIHtcclxuICAgICAgICBjb25zdCBzZWFyY2hTdGF0ZXMgPSB0aGlzLnByZXBhcmUodHJ5dGVzKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2goc2VhcmNoU3RhdGVzLCBtaW5XZWlnaHRNYWduaXR1ZGUpO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBwcmVwYXJlKHRyYW5zYWN0aW9uVHJ5dGVzKSB7XHJcbiAgICAgICAgY29uc3QgY3VybCA9IHNwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkuY3JlYXRlKFwiY3VybFwiKTtcclxuICAgICAgICBjdXJsLmluaXRpYWxpemUoKTtcclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvblRyaXRzID0gdHJpdHNfMS5Ucml0cy5mcm9tVHJ5dGVzKHRyYW5zYWN0aW9uVHJ5dGVzKS50b0FycmF5KCk7XHJcbiAgICAgICAgY3VybC5hYnNvcmIodHJhbnNhY3Rpb25Ucml0cywgMCwgdGhpcy5fdHJhbnNhY3Rpb25MZW5ndGggLSB0aGlzLl9oYXNoTGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBjdXJsU3RhdGUgPSBjdXJsLmdldFN0YXRlKCk7XHJcbiAgICAgICAgdHJhbnNhY3Rpb25Ucml0c1xyXG4gICAgICAgICAgICAuc2xpY2UodGhpcy5fdHJhbnNhY3Rpb25MZW5ndGggLSB0aGlzLl9oYXNoTGVuZ3RoLCB0aGlzLl90cmFuc2FjdGlvbkxlbmd0aClcclxuICAgICAgICAgICAgLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjdXJsU3RhdGVbaW5kZXhdID0gdmFsdWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoVG9QYWlyKGN1cmxTdGF0ZSk7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGFzeW5jIHNlYXJjaChzdGF0ZXMsIG1pbldlaWdodCkge1xyXG4gICAgICAgIC8vIHByb21pc2Ugd2lsbCBjb21wbGV0ZSB3aGVuIHRoZSBzZWFyY2ggaGFzIGNvbXBsZXRlZFxyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcm9taXNlLW11c3QtY29tcGxldGVcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9xdWV1ZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHN0YXRlczogc3RhdGVzLFxyXG4gICAgICAgICAgICAgICAgbWluV2VpZ2h0TWFnbml0dWRlOiBtaW5XZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogcmVzb2x2ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSBwZWFybERpdmVyU3RhdGVfMS5QZWFybERpdmVyU3RhdGUucmVhZHkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRG9OZXh0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgc2VhcmNoVG9QYWlyKHN0YXRlKSB7XHJcbiAgICAgICAgY29uc3Qgc3RhdGVzID0ge1xyXG4gICAgICAgICAgICBsb3c6IG5ldyBJbnQzMkFycmF5KHRoaXMuX3N0YXRlTGVuZ3RoKSxcclxuICAgICAgICAgICAgaGlnaDogbmV3IEludDMyQXJyYXkodGhpcy5fc3RhdGVMZW5ndGgpXHJcbiAgICAgICAgfTtcclxuICAgICAgICBzdGF0ZS5mb3JFYWNoKCh0cml0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRyaXQpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZXMubG93W2luZGV4XSA9IFBlYXJsRGl2ZXIuSElHSF9CSVRTO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlcy5oaWdoW2luZGV4XSA9IFBlYXJsRGl2ZXIuSElHSF9CSVRTO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlcy5sb3dbaW5kZXhdID0gUGVhcmxEaXZlci5MT1dfQklUUztcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZXMuaGlnaFtpbmRleF0gPSBQZWFybERpdmVyLkhJR0hfQklUUztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVzLmxvd1tpbmRleF0gPSBQZWFybERpdmVyLkhJR0hfQklUUztcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZXMuaGlnaFtpbmRleF0gPSBQZWFybERpdmVyLkxPV19CSVRTO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hPZmZzZXQoc3RhdGVzLCB0aGlzLl9ub25jZVN0YXJ0KTtcclxuICAgICAgICByZXR1cm4gc3RhdGVzO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBzZWFyY2hPZmZzZXQoc3RhdGVzLCBvZmZzZXQpIHtcclxuICAgICAgICBzdGF0ZXMubG93W29mZnNldCArIDBdID0gUGVhcmxEaXZlci5MT1dfMDtcclxuICAgICAgICBzdGF0ZXMubG93W29mZnNldCArIDFdID0gUGVhcmxEaXZlci5MT1dfMTtcclxuICAgICAgICBzdGF0ZXMubG93W29mZnNldCArIDJdID0gUGVhcmxEaXZlci5MT1dfMjtcclxuICAgICAgICBzdGF0ZXMubG93W29mZnNldCArIDNdID0gUGVhcmxEaXZlci5MT1dfMztcclxuICAgICAgICBzdGF0ZXMuaGlnaFtvZmZzZXQgKyAwXSA9IFBlYXJsRGl2ZXIuSElHSF8wO1xyXG4gICAgICAgIHN0YXRlcy5oaWdoW29mZnNldCArIDFdID0gUGVhcmxEaXZlci5ISUdIXzE7XHJcbiAgICAgICAgc3RhdGVzLmhpZ2hbb2Zmc2V0ICsgMl0gPSBQZWFybERpdmVyLkhJR0hfMjtcclxuICAgICAgICBzdGF0ZXMuaGlnaFtvZmZzZXQgKyAzXSA9IFBlYXJsRGl2ZXIuSElHSF8zO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBzZWFyY2hEb05leHQoKSB7XHJcbiAgICAgICAgY29uc3QgbmV4dCA9IHRoaXMuX3F1ZXVlLnNoaWZ0KCk7XHJcbiAgICAgICAgaWYgKG9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KG5leHQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gcGVhcmxEaXZlclN0YXRlXzEuUGVhcmxEaXZlclN0YXRlLnJlYWR5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBwZWFybERpdmVyU3RhdGVfMS5QZWFybERpdmVyU3RhdGUuc2VhcmNoaW5nO1xyXG4gICAgICAgICAgICB0aGlzLndlYkdMRmluZE5vbmNlKG5leHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgd2ViR0xGaW5kTm9uY2Uoc2VhcmNoT2JqZWN0KSB7XHJcbiAgICAgICAgdGhpcy53ZWJHTFdyaXRlQnVmZmVycyhzZWFyY2hPYmplY3Quc3RhdGVzKTtcclxuICAgICAgICB0aGlzLl93ZWJHTFdvcmtlci53cml0ZURhdGEodGhpcy5fY3VycmVudEJ1ZmZlcik7XHJcbiAgICAgICAgdGhpcy5fd2ViR0xXb3JrZXIucnVuUHJvZ3JhbShcImluaXRcIiwgMSwgeyBuYW1lOiBcImdyX29mZnNldFwiLCB2YWx1ZTogMCB9KTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMud2ViR0xTZWFyY2goc2VhcmNoT2JqZWN0KSwgMSk7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHdlYkdMV3JpdGVCdWZmZXJzKHN0YXRlcykge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fc3RhdGVMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50QnVmZmVyW2kgKiBQZWFybERpdmVyLlRFWEVMX1NJWkVdID0gc3RhdGVzLmxvd1tpXTtcclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudEJ1ZmZlcltpICogUGVhcmxEaXZlci5URVhFTF9TSVpFICsgMV0gPSBzdGF0ZXMuaGlnaFtpXTtcclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudEJ1ZmZlcltpICogUGVhcmxEaXZlci5URVhFTF9TSVpFICsgMl0gPSBzdGF0ZXMubG93W2ldO1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50QnVmZmVyW2kgKiBQZWFybERpdmVyLlRFWEVMX1NJWkUgKyAzXSA9IHN0YXRlcy5oaWdoW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgd2ViR0xTZWFyY2goc2VhcmNoT2JqZWN0KSB7XHJcbiAgICAgICAgdGhpcy5fd2ViR0xXb3JrZXIucnVuUHJvZ3JhbShcImluY3JlbWVudFwiLCAxKTtcclxuICAgICAgICB0aGlzLl93ZWJHTFdvcmtlci5ydW5Qcm9ncmFtKFwidHdpc3RcIiwgdGhpcy5fbnVtYmVyUm91bmRzKTtcclxuICAgICAgICB0aGlzLl93ZWJHTFdvcmtlci5ydW5Qcm9ncmFtKFwiY2hlY2tcIiwgMSwgeyBuYW1lOiBcIm1pbldlaWdodE1hZ25pdHVkZVwiLCB2YWx1ZTogc2VhcmNoT2JqZWN0Lm1pbldlaWdodE1hZ25pdHVkZSB9KTtcclxuICAgICAgICB0aGlzLl93ZWJHTFdvcmtlci5ydW5Qcm9ncmFtKFwiY29sX2NoZWNrXCIsIDEpO1xyXG4gICAgICAgIGlmICh0aGlzLl93ZWJHTFdvcmtlci5yZWFkRGF0YSh0aGlzLl9zdGF0ZUxlbmd0aCwgMCwgMSwgMSlbMl0gPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy53ZWJHTFNlYXJjaChzZWFyY2hPYmplY3QpLCAxMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl93ZWJHTFdvcmtlci5ydW5Qcm9ncmFtKFwiZmluYWxpemVcIiwgMSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vbmNlID0gdGhpcy5fd2ViR0xXb3JrZXIucmVhZERhdGEoMCwgMCwgdGhpcy5fd2ViR0xXb3JrZXIuZ2V0RGltZW5zaW9ucygpLngsIDEpXHJcbiAgICAgICAgICAgICAgICAucmVkdWNlKHRoaXMucGFjayg0KSwgW10pXHJcbiAgICAgICAgICAgICAgICAuc2xpY2UoMCwgdGhpcy5faGFzaExlbmd0aClcclxuICAgICAgICAgICAgICAgIC5tYXAoeCA9PiB4WzNdKTtcclxuICAgICAgICAgICAgc2VhcmNoT2JqZWN0LmNhbGxiYWNrKHRyaXRzXzEuVHJpdHMuZnJvbU51bWJlckFycmF5KG5vbmNlKS50b1RyeXRlcygpKTtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hEb05leHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHBhY2sobCkge1xyXG4gICAgICAgIHJldHVybiAociwgY3VycmVudFZhbHVlLCBjdXJyZW50SW5kZXgpID0+IChjdXJyZW50SW5kZXggJSBsID09PSAwID8gci5wdXNoKFtjdXJyZW50VmFsdWVdKSA6IHJbci5sZW5ndGggLSAxXS5wdXNoKGN1cnJlbnRWYWx1ZSkpICYmIHI7XHJcbiAgICB9XHJcbn1cclxuLyogQGludGVybmFsICovXHJcblBlYXJsRGl2ZXIuVEVYRUxfU0laRSA9IDQ7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5QZWFybERpdmVyLkxPV19CSVRTID0gMDsgLy8gMDAwMDAwMDBcclxuLyogQGludGVybmFsICovXHJcblBlYXJsRGl2ZXIuSElHSF9CSVRTID0gLTE7IC8vIDB4RkZGRkZGRkYsRkZGRkZGRkYsNDI5NDk2NzI5NVxyXG4vKiBAaW50ZXJuYWwgKi9cclxuUGVhcmxEaXZlci5MT1dfMCA9IDB4REI2REI2REI7IC8vIDZEQjZEQjZELFxyXG4vKiBAaW50ZXJuYWwgKi9cclxuUGVhcmxEaXZlci5MT1dfMSA9IDB4RjFGOEZDN0U7IC8vIDNGMUY4RkM3LFxyXG4vKiBAaW50ZXJuYWwgKi9cclxuUGVhcmxEaXZlci5MT1dfMiA9IDB4N0ZGRkUwMEY7IC8vIEZGRkMwMUZGLFxyXG4vKiBAaW50ZXJuYWwgKi9cclxuUGVhcmxEaXZlci5MT1dfMyA9IDB4RkZDMDAwMDA7IC8vIDA3RkZGRkZGLFxyXG4vKiBAaW50ZXJuYWwgKi9cclxuUGVhcmxEaXZlci5ISUdIXzAgPSAweEI2REI2REI2OyAvLyBEQjZEQjZEQixcclxuLyogQGludGVybmFsICovXHJcblBlYXJsRGl2ZXIuSElHSF8xID0gMHg4RkM3RTNGMTsgLy8gRjhGQzdFM0YsXHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5QZWFybERpdmVyLkhJR0hfMiA9IDB4RkZDMDFGRkY7IC8vIEY4MDNGRkZGLFxyXG4vKiBAaW50ZXJuYWwgKi9cclxuUGVhcmxEaXZlci5ISUdIXzMgPSAweDAwM0ZGRkZGOyAvL0ZGRkZGRkZGLFxyXG5leHBvcnRzLlBlYXJsRGl2ZXIgPSBQZWFybERpdmVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljR1ZoY214RWFYWmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXdaV0Z5YkVScGRtVnlMM0JsWVhKc1JHbDJaWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCTERSRlFVRjVSVHRCUVVONlJTeHJSa0ZCSzBVN1FVRkRMMFVzTWtSQlFYZEVPMEZCUjNoRUxIbEVRVUZwUXp0QlFVTnFReXh0UlVGQk1rTTdRVUZETTBNc2FVVkJRWGxETzBGQlEzcERMQ3RFUVVGMVF6dEJRVU4yUXl4dFJVRkJNa003UVVGRE0wTXNhVVZCUVhsRE8wRkJRM3BETEhGRlFVRTJRenRCUVVNM1F5d3lSRUZCYlVNN1FVRkRia01zY1VWQlFUWkRPMEZCUXpkRExITkVRVUZ0UkR0QlFVZHVSQ3gxUkVGQmIwUTdRVUZEY0VRN096dEhRVWRITzBGQlEwZzdTVUZuUkVrc1pVRkJaVHRKUVVObUxGbEJRVzlDTEdGQlFUWkNPMUZCUXpkRExFbEJRVWtzUTBGQlF5eFpRVUZaTEVkQlFVY3NTVUZCU1N4NVFrRkJWeXhGUVVGRkxFTkJRVU03VVVGRGRFTXNUVUZCVFN4SlFVRkpMRWRCUVVjc05rSkJRV0VzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRGNrUXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkRPMUZCUTI1RUxFbEJRVWtzUTBGQlF5eFpRVUZaTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhqUVVGakxFTkJRVU1zUTBGQlF6dFJRVU55UkN4SlFVRkpMRU5CUVVNc1lVRkJZU3hIUVVGSExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zUTBGQlF6dFJRVU14UkN4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhGUVVGRkxFTkJRVU03VVVGRGFFUXNTVUZCU1N4RFFVRkRMRmxCUVZrc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTjZReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEVsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF6dFJRVVY0UkN4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExGVkJRVlVzUTBGQlF5eGhRVUZoTEVWQlFVVXNTVUZCU1N4RFFVRkRMRmxCUVZrc1IwRkJSeXhEUVVGRExFVkJRVVVzVlVGQlZTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMUZCUXpGR0xFbEJRVWtzUTBGQlF5eGpRVUZqTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTTdVVUZEZEVRc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RlFVRkZMR2xDUVVGUExFZEJRVWNzWVVGQlJ5eEhRVUZITEdOQlFVa3NSVUZCUlN4WFFVRlhMRU5CUVVNc1EwRkJRenRSUVVONFJTeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRlZCUVZVc1EwRkJReXhYUVVGWExFVkJRVVVzYVVKQlFVOHNSMEZCUnl4aFFVRkhMRWRCUVVjc2JVSkJRVk1zUTBGQlF5eERRVUZETzFGQlEzSkZMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zVlVGQlZTeERRVUZETEU5QlFVOHNSVUZCUlN4cFFrRkJUeXhIUVVGSExHMUNRVUZUTEVOQlFVTXNRMEZCUXp0UlFVTXpSQ3hKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEZWQlFWVXNRMEZCUXl4UFFVRlBMRVZCUVVVc2FVSkJRVThzUjBGQlJ5eHBRa0ZCVHl4SFFVRkhMR2RDUVVGTkxFVkJRVVVzYjBKQlFXOUNMRU5CUVVNc1EwRkJRenRSUVVONFJpeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRlZCUVZVc1EwRkJReXhYUVVGWExFVkJRVVVzYVVKQlFVOHNSMEZCUnl4clFrRkJVU3hEUVVGRExFTkJRVU03VVVGRE9VUXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhWUVVGVkxFTkJRVU1zVlVGQlZTeEZRVUZGTEdsQ1FVRlBMRWRCUVVjc2FVSkJRVThzUjBGQlJ5eHJRa0ZCVVN4RFFVRkRMRU5CUVVNN1VVRkRka1VzU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4cFEwRkJaU3hEUVVGRExFdEJRVXNzUTBGQlF6dFJRVU53UXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFVkJRVVVzUTBGQlF6dEpRVU55UWl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhoUVVFMlFqdFJRVU5zUkN4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExGRkJRVkVzUlVGQlJUdFpRVU4wUWl4VlFVRlZMRU5CUVVNc1VVRkJVU3hIUVVGSExFbEJRVWtzVlVGQlZTeERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkRPMU5CUTNaRU8wbEJRMHdzUTBGQlF6dEpRVVZFT3p0UFFVVkhPMGxCUTBrc1RVRkJUU3hEUVVGRExGTkJRVk03VVVGRGJrSXNTVUZCU1N4VlFVRlZMRU5CUVVNc1VVRkJVU3hGUVVGRk8xbEJRM0pDTEZWQlFWVXNRMEZCUXl4UlFVRlJMRWRCUVVjc1UwRkJVeXhEUVVGRE8xTkJRMjVETzBsQlEwd3NRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1MwRkJTeXhEUVVGRExHZENRVUZuUWl4RFFVRkRMRTFCUVdNc1JVRkJSU3hyUWtGQk1FSTdVVUZEY0VVc1RVRkJUU3haUVVGWkxFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVNeFF5eFBRVUZQTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1dVRkJXU3hGUVVGRkxHdENRVUZyUWl4RFFVRkRMRU5CUVVNN1NVRkRla1FzUTBGQlF6dEpRVVZFTEdWQlFXVTdTVUZEVUN4UFFVRlBMRU5CUVVNc2FVSkJRWGxDTzFGQlEzSkRMRTFCUVUwc1NVRkJTU3hIUVVGSExEWkNRVUZoTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFGQlEzSkVMRWxCUVVrc1EwRkJReXhWUVVGVkxFVkJRVVVzUTBGQlF6dFJRVU5zUWl4TlFVRk5MR2RDUVVGblFpeEhRVUZITEdGQlFVc3NRMEZCUXl4VlFVRlZMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRSUVVOMlJTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMR2RDUVVGblFpeEZRVUZGTEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8xRkJRemRGTEUxQlFVMHNVMEZCVXl4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dFJRVU5zUXl4blFrRkJaMEk3WVVGRFdDeExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMR3RDUVVGclFpeEhRVUZITEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1NVRkJTU3hEUVVGRExHdENRVUZyUWl4RFFVRkRPMkZCUXpGRkxFOUJRVThzUTBGQlF5eERRVUZETEV0QlFXRXNSVUZCUlN4TFFVRmhMRVZCUVVVc1JVRkJSVHRaUVVOMFF5eFRRVUZUTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRE8xRkJRemRDTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTFBc1QwRkJUeXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRPMGxCUTNoRExFTkJRVU03U1VGRlJDeGxRVUZsTzBsQlExQXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVFNFFpeEZRVUZGTEZOQlFXbENPMUZCUTJ4RkxITkVRVUZ6UkR0UlFVTjBSQ3hwUkVGQmFVUTdVVUZEYWtRc1QwRkJUeXhKUVVGSkxFOUJRVThzUTBGQlV5eERRVUZETEU5QlFVOHNSVUZCUlN4TlFVRk5MRVZCUVVVc1JVRkJSVHRaUVVNelF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJRenRuUWtGRFlpeE5RVUZOTEVWQlFVVXNUVUZCVFR0blFrRkRaQ3hyUWtGQmEwSXNSVUZCUlN4VFFVRlRPMmRDUVVNM1FpeFJRVUZSTEVWQlFVVXNUMEZCVHp0aFFVTndRaXhEUVVGRExFTkJRVU03V1VGRFNDeEpRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRXRCUVVzc2FVTkJRV1VzUTBGQlF5eExRVUZMTEVWQlFVVTdaMEpCUTNaRExFbEJRVWtzUTBGQlF5eFpRVUZaTEVWQlFVVXNRMEZCUXp0aFFVTjJRanRSUVVOTUxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlExQXNRMEZCUXp0SlFVVkVMR1ZCUVdVN1NVRkRVQ3haUVVGWkxFTkJRVU1zUzBGQlowSTdVVUZEYWtNc1RVRkJUU3hOUVVGTkxFZEJRVWM3V1VGRFdDeEhRVUZITEVWQlFVVXNTVUZCU1N4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF6dFpRVU4wUXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXp0VFFVTXhReXhEUVVGRE8xRkJRMFlzUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRWxCUVZrc1JVRkJSU3hMUVVGaExFVkJRVVVzUlVGQlJUdFpRVU14UXl4UlFVRlJMRWxCUVVrc1JVRkJSVHRuUWtGRFZpeExRVUZMTEVOQlFVTTdiMEpCUTBZc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4VlFVRlZMRU5CUVVNc1UwRkJVeXhEUVVGRE8yOUNRVU42UXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEZWQlFWVXNRMEZCUXl4VFFVRlRMRU5CUVVNN2IwSkJRekZETEUxQlFVMDdaMEpCUTFZc1MwRkJTeXhEUVVGRE8yOUNRVU5HTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzVlVGQlZTeERRVUZETEZGQlFWRXNRMEZCUXp0dlFrRkRlRU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhWUVVGVkxFTkJRVU1zVTBGQlV5eERRVUZETzI5Q1FVTXhReXhOUVVGTk8yZENRVU5XTzI5Q1FVTkpMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NWVUZCVlN4RFFVRkRMRk5CUVZNc1EwRkJRenR2UWtGRGVrTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRPMkZCUTJoRU8xRkJRMHdzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEU0N4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1VVRkROVU1zVDBGQlR5eE5RVUZOTEVOQlFVTTdTVUZEYkVJc1EwRkJRenRKUVVWRUxHVkJRV1U3U1VGRFVDeFpRVUZaTEVOQlFVTXNUVUZCT0VJc1JVRkJSU3hOUVVGak8xRkJReTlFTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEZWQlFWVXNRMEZCUXl4TFFVRkxMRU5CUVVNN1VVRkRNVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzVlVGQlZTeERRVUZETEV0QlFVc3NRMEZCUXp0UlFVTXhReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhWUVVGVkxFTkJRVU1zUzBGQlN5eERRVUZETzFGQlF6RkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRlZCUVZVc1EwRkJReXhMUVVGTExFTkJRVU03VVVGRE1VTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJRenRSUVVNMVF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RFFVRkRPMUZCUXpWRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTTdVVUZETlVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF6dEpRVU5vUkN4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxGbEJRVms3VVVGRGFFSXNUVUZCVFN4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0UlFVTnFReXhKUVVGSkxESkNRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRk8xbEJRelZDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc2FVTkJRV1VzUTBGQlF5eExRVUZMTEVOQlFVTTdVMEZEZGtNN1lVRkJUVHRaUVVOSUxFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NhVU5CUVdVc1EwRkJReXhUUVVGVExFTkJRVU03V1VGRGVFTXNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFRRVU0zUWp0SlFVTk1MRU5CUVVNN1NVRkZSQ3hsUVVGbE8wbEJRMUFzWTBGQll5eERRVUZETEZsQlFXOURPMUZCUTNaRUxFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhaUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdVVUZETlVNc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhEUVVGRE8xRkJRMnBFTEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4SlFVRkpMRVZCUVVVc1YwRkJWeXhGUVVGRkxFdEJRVXNzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUTNwRkxGVkJRVlVzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExGbEJRVmtzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNoRUxFTkJRVU03U1VGRlJDeGxRVUZsTzBsQlExQXNhVUpCUVdsQ0xFTkJRVU1zVFVGQk9FSTdVVUZEY0VRc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhaUVVGWkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZEZUVNc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eERRVUZETEVkQlFVY3NWVUZCVlN4RFFVRkRMRlZCUVZVc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRMMFFzU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1ZVRkJWU3hEUVVGRExGVkJRVlVzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzQkZMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zUTBGQlF5eEhRVUZITEZWQlFWVXNRMEZCUXl4VlFVRlZMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOdVJTeEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhWUVVGVkxFTkJRVU1zVlVGQlZTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVMEZEZGtVN1NVRkRUQ3hEUVVGRE8wbEJSVVFzWlVGQlpUdEpRVU5RTEZkQlFWY3NRMEZCUXl4WlFVRnZRenRSUVVOd1JDeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRlZCUVZVc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZETjBNc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eFZRVUZWTEVOQlFVTXNUMEZCVHl4RlFVRkZMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF6dFJRVU14UkN4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExGVkJRVlVzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1NVRkJTU3hGUVVGRkxHOUNRVUZ2UWl4RlFVRkZMRXRCUVVzc1JVRkJSU3haUVVGWkxFTkJRVU1zYTBKQlFXdENMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRMnBJTEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1ZVRkJWU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVVTNReXhKUVVGSkxFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhaUVVGWkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNSVUZCUlR0WlFVTnNSU3hWUVVGVkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhaUVVGWkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0VFFVTjRSRHRoUVVGTk8xbEJRMGdzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1ZVRkJWU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6VkRMRTFCUVUwc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4aFFVRmhMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzJsQ1FVTnFSaXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU03YVVKQlEzaENMRXRCUVVzc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXp0cFFrRkRNVUlzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZGY0VJc1dVRkJXU3hEUVVGRExGRkJRVkVzUTBGQlF5eGhRVUZMTEVOQlFVTXNaVUZCWlN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZETDBRc1NVRkJTU3hEUVVGRExGbEJRVmtzUlVGQlJTeERRVUZETzFOQlEzWkNPMGxCUTB3c1EwRkJRenRKUVVWRUxHVkJRV1U3U1VGRFVDeEpRVUZKTEVOQlFVTXNRMEZCVXp0UlFVTnNRaXhQUVVGUExFTkJRVU1zUTBGQllTeEZRVUZGTEZsQlFWa3NSVUZCUlN4WlFVRlpMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zV1VGQldTeEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRGRFb3NRMEZCUXpzN1FVRXpUa1FzWlVGQlpUdEJRVU5UTEhGQ1FVRlZMRWRCUVZjc1EwRkJReXhEUVVGRE8wRkJSUzlETEdWQlFXVTdRVUZEVXl4dFFrRkJVU3hIUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETEZkQlFWYzdRVUZEZWtRc1pVRkJaVHRCUVVOVExHOUNRVUZUTEVkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhwUTBGQmFVTTdRVUZEYWtZc1pVRkJaVHRCUVVOVExHZENRVUZMTEVkQlFWY3NWVUZCVlN4RFFVRkRMRU5CUVVNc1dVRkJXVHRCUVVOb1JTeGxRVUZsTzBGQlExTXNaMEpCUVVzc1IwRkJWeXhWUVVGVkxFTkJRVU1zUTBGQlF5eFpRVUZaTzBGQlEyaEZMR1ZCUVdVN1FVRkRVeXhuUWtGQlN5eEhRVUZYTEZWQlFWVXNRMEZCUXl4RFFVRkRMRmxCUVZrN1FVRkRhRVVzWlVGQlpUdEJRVU5UTEdkQ1FVRkxMRWRCUVZjc1ZVRkJWU3hEUVVGRExFTkJRVU1zV1VGQldUdEJRVU5vUlN4bFFVRmxPMEZCUTFNc2FVSkJRVTBzUjBGQlZ5eFZRVUZWTEVOQlFVTXNRMEZCUXl4WlFVRlpPMEZCUTJwRkxHVkJRV1U3UVVGRFV5eHBRa0ZCVFN4SFFVRlhMRlZCUVZVc1EwRkJReXhEUVVGRExGbEJRVms3UVVGRGFrVXNaVUZCWlR0QlFVTlRMR2xDUVVGTkxFZEJRVmNzVlVGQlZTeERRVUZETEVOQlFVTXNXVUZCV1R0QlFVTnFSU3hsUVVGbE8wRkJRMU1zYVVKQlFVMHNSMEZCVnl4VlFVRlZMRU5CUVVNc1EwRkJReXhYUVVGWE8wRkJla0p3UlN4blEwRXJUa01pZlE9PSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIFBlYXJsRGl2ZXIgU3RhdGUuXHJcbiAqL1xyXG52YXIgUGVhcmxEaXZlclN0YXRlO1xyXG4oZnVuY3Rpb24gKFBlYXJsRGl2ZXJTdGF0ZSkge1xyXG4gICAgUGVhcmxEaXZlclN0YXRlW1BlYXJsRGl2ZXJTdGF0ZVtcInJlYWR5XCJdID0gMF0gPSBcInJlYWR5XCI7XHJcbiAgICBQZWFybERpdmVyU3RhdGVbUGVhcmxEaXZlclN0YXRlW1wic2VhcmNoaW5nXCJdID0gMV0gPSBcInNlYXJjaGluZ1wiO1xyXG4gICAgUGVhcmxEaXZlclN0YXRlW1BlYXJsRGl2ZXJTdGF0ZVtcImludGVycnVwdGVkXCJdID0gLTFdID0gXCJpbnRlcnJ1cHRlZFwiO1xyXG59KShQZWFybERpdmVyU3RhdGUgPSBleHBvcnRzLlBlYXJsRGl2ZXJTdGF0ZSB8fCAoZXhwb3J0cy5QZWFybERpdmVyU3RhdGUgPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljR1ZoY214RWFYWmxjbE4wWVhSbExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDNCbFlYSnNSR2wyWlhJdmNHVmhjbXhFYVhabGNsTjBZWFJsTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHM3UjBGRlJ6dEJRVU5JTEVsQlFWa3NaVUZKV0R0QlFVcEVMRmRCUVZrc1pVRkJaVHRKUVVOMlFpeDFSRUZCVXl4RFFVRkJPMGxCUTFRc0swUkJRV0VzUTBGQlFUdEpRVU5pTEc5RlFVRm5RaXhEUVVGQk8wRkJRM0JDTEVOQlFVTXNSVUZLVnl4bFFVRmxMRWRCUVdZc2RVSkJRV1VzUzBGQlppeDFRa0ZCWlN4UlFVa3hRaUo5IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBudW1iZXJIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGNyeXB0b0Vycm9yXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jcnlwdG8vZGlzdC9lcnJvci9jcnlwdG9FcnJvclwiKTtcclxuY29uc3QgcHJvb2ZPZldvcmtCYXNlXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jcnlwdG8vZGlzdC9wcm9vZk9mV29yay9wcm9vZk9mV29ya0Jhc2VcIik7XHJcbmNvbnN0IHRyeXRlc18xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJ5dGVzXCIpO1xyXG5jb25zdCBwZWFybERpdmVyXzEgPSByZXF1aXJlKFwiLi9wZWFybERpdmVyL3BlYXJsRGl2ZXJcIik7XHJcbi8qKlxyXG4gKiBQcm9vZk9mV29yayBpbXBsZW1lbnRhdGlvbiB1c2luZyBXZWJHTC5cclxuICovXHJcbmNsYXNzIFByb29mT2ZXb3JrV2ViR2wgZXh0ZW5kcyBwcm9vZk9mV29ya0Jhc2VfMS5Qcm9vZk9mV29ya0Jhc2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgUHJvb2ZPZldvcmsuXHJcbiAgICAgKiBAcGFyYW0gd2ViR0xQbGF0Zm9ybSBQcm92aWRlcyBwbGF0Zm9ybSBzcGVjaWZpYyBmdW5jdGlvbnMsIG9wdGlvbmFsIG1vc3RseSB1c2VkIGZvciB0ZXN0aW5nLlxyXG4gICAgICogQHBhcmFtIHRpbWVTZXJ2aWNlIFNlcnZpY2UgdG8gZ2V0IHRoZSB0aW1lIGZvciBhdHRhY2htZW50cy5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Iod2ViR0xQbGF0Zm9ybSwgdGltZVNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcih0aW1lU2VydmljZSk7XHJcbiAgICAgICAgaWYgKG9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KHdlYkdMUGxhdGZvcm0pKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3dlYkdMUGxhdGZvcm0gPSB7XHJcbiAgICAgICAgICAgICAgICBnZXRXaW5kb3c6ICgpID0+IHdpbmRvdyxcclxuICAgICAgICAgICAgICAgIGdldERvY3VtZW50OiAod2luZG93KSA9PiB3aW5kb3cuZG9jdW1lbnQsXHJcbiAgICAgICAgICAgICAgICBnZXRDYW52YXM6IChkb2N1bWVudCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKSxcclxuICAgICAgICAgICAgICAgIGdldFdlYkdMOiAoY2FudmFzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0ciA9IHsgYWxwaGE6IGZhbHNlLCBhbnRpYWxpYXM6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdsMlwiLCBhdHRyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2w7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl93ZWJHTFBsYXRmb3JtID0gd2ViR0xQbGF0Zm9ybTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFsbG93IHRoZSBwcm9vZiBvZiB3b3JrIHRvIHBlcmZvcm0gYW55IGluaXRpYWxpemF0aW9uLlxyXG4gICAgICogV2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgdGhlIGltcGxlbWVudGF0aW9uIGlzIG5vdCBzdXBwb3J0ZWQuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlLlxyXG4gICAgICovXHJcbiAgICBhc3luYyBpbml0aWFsaXplKCkge1xyXG4gICAgICAgIGF3YWl0IHN1cGVyLmluaXRpYWxpemUoKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcGVhcmxEaXZlcl8xLlBlYXJsRGl2ZXIuaW5pdGlhbGl6ZSh0aGlzLl93ZWJHTFBsYXRmb3JtKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzSW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFBlcmZvcm0gYSBwcm9vZiBvZiB3b3JrIG9uIGEgc2luZ2xlIGl0ZW0uXHJcbiAgICAgKiBAcGFyYW0gdHJ5dGVzIFRoZSB0cnl0ZXMgdG8gcGVyZm9ybSB0aGUgcG93IG9uLlxyXG4gICAgICogQHBhcmFtIG1pbldlaWdodE1hZ25pdHVkZSBUaGUgbWluaW11bSB3ZWlnaHQgbWFnbml0dWRlLlxyXG4gICAgICogQHJldHVybnMgVGhlIHRyeXRlcyBwcm9kdWNlZCBieSB0aGUgcHJvb2Ygb2Ygd29yay5cclxuICAgICAqL1xyXG4gICAgYXN5bmMgc2luZ2xlUG93KHRyeXRlcywgbWluV2VpZ2h0TWFnbml0dWRlKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc0luaXRpYWxpemVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiV2ViR0wgaXMgbm90IGluaXRpYWxpemVkLCBoYXZlIHlvdSBjYWxsZWQgaW5pdGlhbGl6ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRyeXRlcywgdHJ5dGVzXzEuVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSB0cnl0ZXMgbXVzdCBiZSBhbiBvYmplY3Qgb2YgdHlwZSBUcnl0ZXNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihtaW5XZWlnaHRNYWduaXR1ZGUpIHx8IG1pbldlaWdodE1hZ25pdHVkZSA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIG1pbldlaWdodE1hZ25pdHVkZSBtdXN0IGJlID4gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgbm9uY2UgPSBhd2FpdCBwZWFybERpdmVyXzEuUGVhcmxEaXZlci5pbnN0YW5jZS5zZWFyY2hXaXRoVHJ5dGVzKHRyeXRlcywgbWluV2VpZ2h0TWFnbml0dWRlKTtcclxuICAgICAgICBjb25zdCB0cnl0ZXNTdHJpbmcgPSB0cnl0ZXMudG9TdHJpbmcoKTtcclxuICAgICAgICBjb25zdCBub25jZVN0cmluZyA9IG5vbmNlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgcmV0dXJuIHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKHRyeXRlc1N0cmluZy5zdWJzdHIoMCwgdHJ5dGVzU3RyaW5nLmxlbmd0aCAtIG5vbmNlU3RyaW5nLmxlbmd0aCkuY29uY2F0KG5vbmNlU3RyaW5nKSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Qcm9vZk9mV29ya1dlYkdsID0gUHJvb2ZPZldvcmtXZWJHbDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKdmIyWlBabGR2Y210WFpXSkhiQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM055WXk5d2NtOXZaazltVjI5eWExZGxZa2RzTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRU3cwUlVGQmVVVTdRVUZEZWtVc05FVkJRWGxGTzBGQlJYcEZMREJGUVVGMVJUdEJRVU4yUlN4M1JrRkJjVVk3UVVGRGNrWXNOa1JCUVRCRU8wRkJSVEZFTEhkRVFVRnhSRHRCUVVkeVJEczdSMEZGUnp0QlFVTklMSE5DUVVFNFFpeFRRVUZSTEdsRFFVRmxPMGxCVDJwRU96czdPMDlCU1VjN1NVRkRTQ3haUVVGWkxHRkJRVGhDTEVWQlFVVXNWMEZCTUVJN1VVRkRiRVVzUzBGQlN5eERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMUZCUlc1Q0xFbEJRVWtzTWtKQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1lVRkJZU3hEUVVGRExFVkJRVVU3V1VGRGNrTXNTVUZCU1N4RFFVRkRMR05CUVdNc1IwRkJSenRuUWtGRGJFSXNVMEZCVXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFMUJRVTA3WjBKQlEzWkNMRmRCUVZjc1JVRkJSU3hEUVVGRExFMUJRVTBzUlVGQlJTeEZRVUZGTEVOQlFVTXNUVUZCVFN4RFFVRkRMRkZCUVZFN1owSkJRM2hETEZOQlFWTXNSVUZCUlN4RFFVRkRMRkZCUVZFc1JVRkJSU3hGUVVGRkxFTkJRVU1zVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4UlFVRlJMRU5CUVVNN1owSkJRM3BFTEZGQlFWRXNSVUZCUlN4RFFVRkRMRTFCUVUwc1JVRkJSU3hGUVVGRk8yOUNRVU5xUWl4TlFVRk5MRWxCUVVrc1IwRkJSeXhGUVVGRkxFdEJRVXNzUlVGQlJTeExRVUZMTEVWQlFVVXNVMEZCVXl4RlFVRkZMRXRCUVVzc1JVRkJSU3hEUVVGRE8yOUNRVU5vUkN4TlFVRk5MRVZCUVVVc1IwRkJSeXhOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEZGQlFWRXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenR2UWtGRE4wTXNUMEZCYVVNc1JVRkJSU3hEUVVGRE8yZENRVU40UXl4RFFVRkRPMkZCUTBvc1EwRkJRenRUUVVOTU8yRkJRVTA3V1VGRFNDeEpRVUZKTEVOQlFVTXNZMEZCWXl4SFFVRkhMR0ZCUVdFc1EwRkJRenRUUVVOMlF6dEpRVU5NTEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NTMEZCU3l4RFFVRkRMRlZCUVZVN1VVRkRia0lzVFVGQlRTeExRVUZMTEVOQlFVTXNWVUZCVlN4RlFVRkZMRU5CUVVNN1VVRkRla0lzVDBGQlR5eEpRVUZKTEU5QlFVOHNRMEZCVHl4RFFVRkRMRTlCUVU4c1JVRkJSU3hOUVVGTkxFVkJRVVVzUlVGQlJUdFpRVU42UXl4SlFVRkpPMmRDUVVOQkxIVkNRVUZWTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zUTBGQlF6dG5Ra0ZETTBNc1NVRkJTU3hEUVVGRExHTkJRV01zUjBGQlJ5eEpRVUZKTEVOQlFVTTdaMEpCUXpOQ0xFOUJRVThzUlVGQlJTeERRVUZETzJGQlEySTdXVUZCUXl4UFFVRlBMRWRCUVVjc1JVRkJSVHRuUWtGRFZpeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1lVRkRaanRSUVVOTUxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlExQXNRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZqTEVWQlFVVXNhMEpCUVRCQ08xRkJRemRFTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1kwRkJZeXhGUVVGRk8xbEJRM1JDTEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExITkVRVUZ6UkN4RFFVRkRMRU5CUVVNN1UwRkRha1k3VVVGRFJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeEZRVUZGTEdWQlFVMHNRMEZCUXl4RlFVRkZPMWxCUTNSRExFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMRFpEUVVFMlF5eERRVUZETEVOQlFVTTdVMEZEZUVVN1VVRkRSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNTVUZCU1N4clFrRkJhMElzU1VGQlNTeERRVUZETEVWQlFVVTdXVUZEZUVVc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNiME5CUVc5RExFTkJRVU1zUTBGQlF6dFRRVU12UkR0UlFVVkVMRTFCUVUwc1MwRkJTeXhIUVVGSExFMUJRVTBzZFVKQlFWVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNUVUZCVFN4RlFVRkZMR3RDUVVGclFpeERRVUZETEVOQlFVTTdVVUZGY2tZc1RVRkJUU3haUVVGWkxFZEJRVWNzVFVGQlRTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMUZCUTNaRExFMUJRVTBzVjBGQlZ5eEhRVUZITEV0QlFVc3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRSUVVOeVF5eFBRVUZQTEdWQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1dVRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVWQlFVVXNXVUZCV1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhYUVVGWExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGJrZ3NRMEZCUXp0RFFVTktPMEZCZUVWRUxEUkRRWGRGUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIFNoYWRlcnMgYWRkLlxyXG4gKi9cclxuZXhwb3J0cy5kZWZhdWx0ID0gYFxuaW50IHN1bSAoaW50IGEsIGludCBiKSB7XG4gIGludCBteV9zdW0gPSBhICsgYjtcbiAgcmV0dXJuIG15X3N1bSA9PSAyID8gLTEgOiAobXlfc3VtID09IC0yKSA/IDEgOiBteV9zdW07XG59XG5pbnQgY29ucyAoaW50IGEsIGludCBiKSB7XG4gIHJldHVybiAoYSA9PSAxICYmIGIgPT0gMSk/IDEgOiAoYSA9PSAtMSAmJiBiID09IC0xKSA/IC0xIDogMDtcbn1cbmludCBhbnlfdCAoaW50IGEsIGludCBiKSB7XG4gIGludCBteV9hbnkgPSBhICsgYjtcbiAgcmV0dXJuIG15X2FueSA9PSAwID8gMCA6IChteV9hbnkgPiAwKSA/IDEgOiAtMTtcbn1cbml2ZWMyIGZ1bGxfYWRkZXIoaW50IGEsIGludCBiLCBpbnQgYykge1xuICBpbnQgY19hLCBjX2IsIHN1bV9hYiwgY19zO1xuXG4gIGNfYSAgICA9IGNvbnMoYSxiKTtcbiAgc3VtX2FiID0gc3VtKGEsYik7XG4gIGNfYiAgICA9IGNvbnMoc3VtX2FiLGMpO1xuICBjX3MgICAgPSBhbnlfdChjX2EsIGNfYik7XG5cbiAgcmV0dXJuIGl2ZWMyKHN1bShzdW1fYWIsIGMpLCBjX3MpO1xufVxuaXZlYzIgZ2V0X3N1bV90b19pbmRleChpbnQgZnJvbSwgaW50IHRvLCBpbnQgbnVtYmVyX3RvX2FkZCwgaW50IHJvdykge1xuICBpbnQgdHJpdF90b19hZGQsIHRyaXRfYXRfaW5kZXgsIHBvdywgY2FycnksIG51bV9jYXJyeTtcbiAgaXZlYzIgcmVhZF9pbiwgc3VtX291dCwgb3V0X3RyaXQ7XG4gIHBvdyA9IDE7XG4gIGNhcnJ5ID0gMDtcbiAgbnVtX2NhcnJ5ID0gMDtcblxuICBmb3IoaW50IGkgPSBmcm9tOyBpIDwgdG87IGkrKykge1xuICAgIC8vaWYodHJpdF90b19hZGQgPT0gMCAmJiBzdW1fb3V0LnQgPT0gMCkgY29udGludWU7XG5cbiAgICByZWFkX2luID0gcmVhZF9hdCAoIGl2ZWMyIChpLCByb3cpKS5yZztcblxuICAgIHRyaXRfdG9fYWRkID0gKChudW1iZXJfdG9fYWRkIC8gcG93KSAlIDMpICsgbnVtX2NhcnJ5O1xuICAgIG51bV9jYXJyeSA9IHRyaXRfdG9fYWRkID4gMSA/IDEgOiAwO1xuICAgIHRyaXRfdG9fYWRkID0gKHRyaXRfdG9fYWRkID09IDIgPyAtMSA6ICh0cml0X3RvX2FkZCA9PSAzID8gMCA6IHRyaXRfdG9fYWRkKSk7XG5cbiAgICBzdW1fb3V0ID0gZnVsbF9hZGRlcihcbiAgICAgIChyZWFkX2luLnMgPT0gTE9XX0JJVFMgPyAxIDogcmVhZF9pbi50ID09IExPV19CSVRTPyAtMSA6IDApLFxuICAgICAgdHJpdF90b19hZGQsXG4gICAgICBjYXJyeVxuICAgICk7XG5cbiAgICBpZihteV9jb29yZC54ID09IGkpIGJyZWFrO1xuICAgIGNhcnJ5ID0gc3VtX291dC50O1xuICAgIHBvdyAqPTM7XG4gIH1cbiAgaWYoc3VtX291dC5zID09IDApIHtcbiAgICByZXR1cm4gaXZlYzIoSElHSF9CSVRTKTtcbiAgfSBlbHNlIGlmIChzdW1fb3V0LnMgPT0gMSkge1xuICAgIHJldHVybiBpdmVjMihMT1dfQklUUywgSElHSF9CSVRTKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gaXZlYzIoSElHSF9CSVRTLCBMT1dfQklUUyk7XG4gIH1cbn1cbmA7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVlXUmtMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwzTm9ZV1JsY25NdllXUmtMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdSMEZGUnp0QlFVTklMR3RDUVVGbE96czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dERRWGRFWkN4RFFVRkRJbjA9IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogU2hhZGVycyBjaGVja19jb2wuXHJcbiAqL1xyXG5leHBvcnRzLmRlZmF1bHQgPSBgXG52b2lkIG1haW4oKSB7XG4gIGluaXQoKTtcbiAgaXZlYzQgbXlfdmVjID0gcmVhZCgpO1xuICBpbnQgaTtcbiAgaWYobXlfY29vcmQueCA9PSBTVEFURV9MRU5HVEggJiYgbXlfY29vcmQueSA9PSAwKSB7XG4gICAgbXlfdmVjLmIgPSAwO1xuICAgIGlmKG15X3ZlYy5hID09IDApIHtcbiAgICAgIGl2ZWM0IHJlYWRfdmVjO1xuICAgICAgbXlfdmVjLmIgPSAtMTtcbiAgICAgIGZvcihpID0gMTsgaSA8IGludChzaXplLnkpOyBpKyspIHtcbiAgICAgICAgcmVhZF92ZWMgPSByZWFkX2F0KCBpdmVjMiggU1RBVEVfTEVOR1RILCBpKSk7XG4gICAgICAgIGlmKHJlYWRfdmVjLmEgIT0gMCkge1xuICAgICAgICAgIG15X3ZlYy5hID0gcmVhZF92ZWMuYTtcbiAgICAgICAgICBteV92ZWMuYiA9IGk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29tbWl0KG15X3ZlYyk7XG59XG5gO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMmhsWTJ0RGIyd3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmMyaGhaR1Z5Y3k5amFHVmphME52YkM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUU3TzBkQlJVYzdRVUZEU0N4clFrRkJaVHM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0RFFYTkNaQ3hEUVVGREluMD0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBTaGFkZXJzIGNoZWNrX2RvLlxyXG4gKi9cclxuZXhwb3J0cy5kZWZhdWx0ID0gYFxuaW50IGNoZWNrKGludCByb3csIGludCBtaW5fd2VpZ2h0X21hZ25pdHVkZSkge1xuICBpbnQgbm9uY2VfcHJvYmUsIGk7XG4gIGl2ZWMyIHJfdGV4ZWw7XG4gIG5vbmNlX3Byb2JlID0gSElHSF9CSVRTO1xuICBmb3IoaSA9IG1pbl93ZWlnaHRfbWFnbml0dWRlOyBpLS0gPiAwOyApIHtcbiAgICByX3RleGVsID0gcmVhZF9hdChpdmVjMihIQVNIX0xFTkdUSCAtIDEgLSBpLCByb3cpKS5iYTtcbiAgICBub25jZV9wcm9iZSAmPSB+KHJfdGV4ZWwucyBeIHJfdGV4ZWwudCk7XG4gICAgaWYobm9uY2VfcHJvYmUgPT0gMCkgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIG5vbmNlX3Byb2JlO1xufVxuYDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTJobFkydEVieTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXphR0ZrWlhKekwyTm9aV05yUkc4dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCT3p0SFFVVkhPMEZCUTBnc2EwSkJRV1U3T3pzN096czdPenM3T3p0RFFWbGtMRU5CUVVNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBTaGFkZXJzIGNoZWNrX2suXHJcbiAqL1xyXG5leHBvcnRzLmRlZmF1bHQgPSBgXG51bmlmb3JtIGludCBtaW5XZWlnaHRNYWduaXR1ZGU7XG52b2lkIG1haW4oKSB7XG4gIGluaXQoKTtcbiAgaXZlYzQgbXlfdmVjID0gcmVhZCgpO1xuICBpZihteV9jb29yZC54ID09IFNUQVRFX0xFTkdUSCkge1xuICAgIG15X3ZlYy5yID0gbWluV2VpZ2h0TWFnbml0dWRlO1xuICAgIG15X3ZlYy5hID0gY2hlY2sobXlfY29vcmQueSwgbWluV2VpZ2h0TWFnbml0dWRlKTtcbiAgfVxuICBjb21taXQobXlfdmVjKTtcbn1cbmA7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkyaGxZMnRMTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMM05vWVdSbGNuTXZZMmhsWTJ0TExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN1IwRkZSenRCUVVOSUxHdENRVUZsT3pzN096czdPenM3T3p0RFFWZGtMRU5CUVVNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBTaGFkZXJzIGZpbmFsaXplLlxyXG4gKi9cclxuZXhwb3J0cy5kZWZhdWx0ID0gYFxudm9pZCBtYWluKCkge1xuICBpbml0KCk7XG4gIGl2ZWM0IG15X3ZlYyA9IHJlYWQoKTtcbiAgaWYobXlfY29vcmQueSA9PSAwICYmIG15X2Nvb3JkLnggPT0gU1RBVEVfTEVOR1RIKSB7XG4gICAgbXlfdmVjLmcgPSBjaGVjayhteV92ZWMuYiwgbXlfdmVjLnIpO1xuICB9XG4gIGlmKG15X2Nvb3JkLnkgPT0gMCAmJiBteV9jb29yZC54IDwgSEFTSF9MRU5HVEgpIHtcbiAgICBpdmVjNCBpbmZvX3ZlYyA9IHJlYWRfYXQoaXZlYzIoU1RBVEVfTEVOR1RILCAwKSk7XG4gICAgaW50IG5vbmNlX3Byb2JlID0gaW5mb192ZWMuYTtcbiAgICBpbnQgcm93ID0gaW5mb192ZWMuYjtcbiAgICBpdmVjNCBoYXNoX3ZlYyA9IHJlYWRfYXQoaXZlYzIobXlfY29vcmQueCwgcm93KSk7XG4gICAgbXlfdmVjLmEgPSAoaGFzaF92ZWMuciAmIG5vbmNlX3Byb2JlKSA9PSAwPyAxIDogKChoYXNoX3ZlYy5nICYgbm9uY2VfcHJvYmUpID09IDA/IC0xIDogMCk7XG4gIH1cbiAgY29tbWl0KG15X3ZlYyk7XG59XG5gO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2labWx1WVd4cGVtVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmMyaGhaR1Z5Y3k5bWFXNWhiR2w2WlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUU3TzBkQlJVYzdRVUZEU0N4clFrRkJaVHM3T3pzN096czdPenM3T3pzN096dERRV2RDWkN4RFFVRkRJbjA9IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogU2hhZGVycyBhZGQuXHJcbiAqL1xyXG5leHBvcnRzLmRlZmF1bHQgPSBgXG4jZGVmaW5lIEhBU0hfTEVOR1RIIDI0M1xuI2RlZmluZSBOVU1CRVJfT0ZfUk9VTkRTIDgxXG4jZGVmaW5lIElOQ1JFTUVOVF9TVEFSVCBIQVNIX0xFTkdUSCAtIDY0XG4jZGVmaW5lIFNUQVRFX0xFTkdUSCAzICogSEFTSF9MRU5HVEhcbiNkZWZpbmUgSEFMRl9MRU5HVEggMzY0XG4jZGVmaW5lIEhJR0hfQklUUyAweEZGRkZGRkZGXG4jZGVmaW5lIExPV19CSVRTIDB4MDAwMDAwMDBcbmA7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFHVmhaR1Z5Y3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTl6YUdGa1pYSnpMMmhsWVdSbGNuTXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQk96dEhRVVZITzBGQlEwZ3NhMEpCUVdVN096czdPenM3TzBOQlVXUXNRMEZCUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIFNoYWRlcnMgaW5jcmVtZW50LlxyXG4gKi9cclxuZXhwb3J0cy5kZWZhdWx0ID0gYFxudm9pZCBtYWluKCkge1xuICBpbml0KCk7XG4gIGl2ZWM0IG15X3ZlYyA9IHJlYWQoKTtcbiAgaWYobXlfY29vcmQueCA+PSBJTkNSRU1FTlRfU1RBUlQgJiYgbXlfY29vcmQueCA8IEhBU0hfTEVOR1RIICkge1xuICAgIG15X3ZlYy5yZyA9IGdldF9zdW1fdG9faW5kZXgoSU5DUkVNRU5UX1NUQVJULCBIQVNIX0xFTkdUSCwgMSwgbXlfY29vcmQueSk7XG4gIH1cbiAgaWYobXlfY29vcmQueCA9PSBTVEFURV9MRU5HVEggKSB7XG4gICAgbXlfdmVjLnJnID0gaXZlYzIoMCk7XG4gIH1cbiAgbXlfdmVjLmJhID0gbXlfdmVjLnJnO1xuICBjb21taXQobXlfdmVjKTtcbn1cbmA7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWpjbVZ0Wlc1MExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDNOb1lXUmxjbk12YVc1amNtVnRaVzUwTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHM3UjBGRlJ6dEJRVU5JTEd0Q1FVRmxPenM3T3pzN096czdPenM3TzBOQllXUXNRMEZCUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIFNoYWRlcnMgaW5pdC5cclxuICovXHJcbmV4cG9ydHMuZGVmYXVsdCA9IGBcbnVuaWZvcm0gaW50IGdyX29mZnNldDtcbml2ZWM0IG9mZnNldCgpIHtcbiAgaWYobXlfY29vcmQueCA+PSBIQVNIX0xFTkdUSCAvIDMgJiYgbXlfY29vcmQueCA8IEhBU0hfTEVOR1RIIC8gMyAqIDIgKSB7XG4gICAgaXZlYzQgbXlfdmVjO1xuICAgIG15X3ZlYy5yZyA9IGdldF9zdW1fdG9faW5kZXgoSEFTSF9MRU5HVEggLyAzLCBIQVNIX0xFTkdUSCAvIDMgKiAyLCBteV9jb29yZC55ICsgZ3Jfb2Zmc2V0LCAwKTtcbiAgICByZXR1cm4gbXlfdmVjO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiByZWFkX2F0KGl2ZWMyKG15X2Nvb3JkLngsMCkpO1xuICB9XG59XG52b2lkIG1haW4oKSB7XG4gIGluaXQoKTtcbiAgY29tbWl0KG9mZnNldCgpKTtcbn1cbmA7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNXBkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXphR0ZrWlhKekwybHVhWFF1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJPenRIUVVWSE8wRkJRMGdzYTBKQlFXVTdPenM3T3pzN096czdPenM3T3p0RFFXVmtMRU5CUVVNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBTaGFkZXJzIHRyYW5zZm9ybS5cclxuICovXHJcbmV4cG9ydHMuZGVmYXVsdCA9IGBcbml2ZWMyIHR3aXN0KCkge1xuICBpbnQgYWxwaGEsIGJldGEsIGdhbW1hLCBkZWx0YTtcbiAgaXZlYzQgdjEsIHYyO1xuICBpbnQgaiA9IG15X2Nvb3JkLng7XG5cbiAgdjEgPSByZWFkX2F0KGl2ZWMyKGogPT0gMD8gMDooKChqIC0gMSklMikrMSkqSEFMRl9MRU5HVEggLSAoKGotMSk+PjEpLCBteV9jb29yZC55KSk7XG4gIHYyID0gcmVhZF9hdChpdmVjMigoKGolMikrMSkqSEFMRl9MRU5HVEggLSAoKGopPj4xKSwgbXlfY29vcmQueSkpO1xuICBhbHBoYSA9IHYxLmI7XG4gIGJldGEgPSB2MS5hO1xuICBnYW1tYSA9IHYyLmE7XG4gIGRlbHRhID0gKGFscGhhIHwgKH5nYW1tYSkpICYgKHYyLmIgXiBiZXRhKTsvL3YyLmIgPT09IHN0YXRlX2xvd1t0Ml1cblxuICByZXR1cm4gaXZlYzIofmRlbHRhLCAoYWxwaGEgXiBnYW1tYSkgfCBkZWx0YSk7XG59XG52b2lkIG1haW4oKSB7XG4gIGluaXQoKTtcbiAgaXZlYzQgbXlfdmVjID0gcmVhZCgpO1xuICBpZihteV9jb29yZC54IDwgU1RBVEVfTEVOR1RIKVxuICAgIG15X3ZlYy5iYSA9IHR3aXN0KCk7XG4gIGNvbW1pdChteV92ZWMpO1xufVxuYDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEhKaGJuTm1iM0p0TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMM05vWVdSbGNuTXZkSEpoYm5ObWIzSnRMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdSMEZGUnp0QlFVTklMR3RDUVVGbE96czdPenM3T3pzN096czdPenM3T3pzN096czdPME5CYzBKa0xFTkJRVU1pZlE9PSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIFN0ZGxpYi5cclxuICovXHJcbmV4cG9ydHMuZGVmYXVsdCA9IGAjdmVyc2lvbiAzMDAgZXNcbnByZWNpc2lvbiBoaWdocCBmbG9hdDtcbnByZWNpc2lvbiBoaWdocCBpbnQ7XG5wcmVjaXNpb24gaGlnaHAgaXNhbXBsZXIyRDtcbnVuaWZvcm0gaXNhbXBsZXIyRCB1X3RleHR1cmU7XG5pbiB2ZWMyIHBvcztcbm91dCBpdmVjNCBjb2xvcjtcbi8vb3V0IGludCBpc0ZpbmlzaGVkO1xuXG52ZWMyIHNpemU7XG5pdmVjMiBteV9jb29yZDtcblxudm9pZCBpbml0KHZvaWQpIHtcbiAgLy9zaXplID0gdmVjMih0ZXh0dXJlU2l6ZSh1X3RleHR1cmUsIDApIC0gMSk7XG4gIHNpemUgPSB2ZWMyKHRleHR1cmVTaXplKHVfdGV4dHVyZSwgMCkpO1xuICBteV9jb29yZCA9IGl2ZWMyKHBvcyAqIHNpemUpO1xufVxuXG5pdmVjNCByZWFkKHZvaWQpIHtcbiAgcmV0dXJuIHRleHR1cmUodV90ZXh0dXJlLCBwb3MpO1xufVxuXG5pdmVjNCByZWFkX2F0KGl2ZWMyIGNvb3JkKSB7XG4gIHJldHVybiB0ZXhlbEZldGNoKHVfdGV4dHVyZSwgY29vcmQsIDApO1xufVxuXG52b2lkIGNvbW1pdChpdmVjNCB2YWwpIHtcbiAgY29sb3IgPSB2YWw7XG59XG5gO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljM1JrYkdsaUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDNkbFlrZE1MM04wWkd4cFlpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFN08wZEJSVWM3UVVGRFNDeHJRa0ZEUVRzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN1EwRTJRa01zUTBGQlF5SjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBWZXJ0ZXggU2hhZGVyIGNvZGUuXHJcbiAqL1xyXG5leHBvcnRzLmRlZmF1bHQgPSBgI3ZlcnNpb24gMzAwIGVzXG5sYXlvdXQobG9jYXRpb24gPSAwKSBpbiB2ZWMyIHBvc2l0aW9uO1xubGF5b3V0KGxvY2F0aW9uID0gMSkgaW4gdmVjMiB0ZXh0dXJlO1xub3V0IHZlYzIgcG9zO1xuXG52b2lkIG1haW4odm9pZCkge1xuICBwb3MgPSB0ZXh0dXJlO1xuICBnbF9Qb3NpdGlvbiA9IHZlYzQocG9zaXRpb24ueHksIDAuMCwgMS4wKTtcbn1gO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkbVZ5ZEdWNFUyaGhaR1Z5UTI5a1pTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5M1pXSkhUQzkyWlhKMFpYaFRhR0ZrWlhKRGIyUmxMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdSMEZGUnp0QlFVTklMR3RDUVVOQk96czdPenM3T3p0RlFWRkZMRU5CUVVNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBjcnlwdG9FcnJvcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY3J5cHRvL2Rpc3QvZXJyb3IvY3J5cHRvRXJyb3JcIik7XHJcbi8qKlxyXG4gKiBIZWxwZXIgZnVuY3Rpb25zIGZvciB1c2Ugd2l0aCBXZWJHTC5cclxuICovXHJcbmNsYXNzIFdlYkdMSGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgV2ViR0wgQ29udGV4dC5cclxuICAgICAqIEBwYXJhbSB3ZWJHTFBsYXRmb3JtIFRoZSBwbGF0Zm9ybSB0byBjcmVhdGUgdGhlIGNvbnRleHQgd2l0aC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBjb250ZXh0IGlmIHN1Y2Nlc3NmdWx5IG9yIHRocm93cyBhbiBlcnJvciBpZiBpdCBjYW5ub3QgYmUgY3JlYXRlZC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUNvbnRleHQod2ViR0xQbGF0Zm9ybSkge1xyXG4gICAgICAgIGNvbnN0IHdpbmRvdyA9IHdlYkdMUGxhdGZvcm0uZ2V0V2luZG93KCk7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eSh3aW5kb3cpICYmIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgZG9jdW1lbnQgPSB3ZWJHTFBsYXRmb3JtLmdldERvY3VtZW50KHdpbmRvdyk7XHJcbiAgICAgICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzRW1wdHkoZG9jdW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYW52YXMgPSB3ZWJHTFBsYXRmb3JtLmdldENhbnZhcyhkb2N1bWVudCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KGNhbnZhcykpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBnbCA9IHdlYkdMUGxhdGZvcm0uZ2V0V2ViR0woY2FudmFzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzRW1wdHkoZ2wpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiQ2FuIG5vdCBjcmVhdGUgYSBXZWJHTCBjb250ZXh0IG9uIGEgPGNhbnZhcz4gZWxlbWVudC5cIiwgeyB1c2VyQWdlbnQ6IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2w7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBIVE1MNSA8Y2FudmFzPiBlbGVtZW50IGlzIG5vdCBhdmFpbGFibGUgaW4geW91ciBicm93c2VyLlwiLCB7IHVzZXJBZ2VudDogd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIndpbmRvdy5kb2N1bWVudCBpcyBub3QgYXZhaWxhYmxlLCB5b3UgbXVzdCBiZSBydW5uaW5nIGluIGFuIGVudmlyb25tZW50IHdpdGggV2ViR0wuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIndpbmRvdyBpcyBub3QgYXZhaWxhYmxlLCB5b3UgbXVzdCBiZSBydW5uaW5nIGluIGFuIGVudmlyb25tZW50IHdpdGggV2ViR0wuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IFdlYkdMIGJ1ZmZlci5cclxuICAgICAqIEBwYXJhbSBnbCBUaGUgV2ViR0wgcmVuZGVyaW5nIGNvbnRleHQuXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSB0byBhZGQgdG8gdGhlIGJ1ZmZlci5cclxuICAgICAqIEBwYXJhbSBhcnJheVR5cGUgVGhlIGRhdGEgdHlwZSBmb3IgdGhlIGJ1ZmZlci5cclxuICAgICAqIEBwYXJhbSB0YXJnZXQgQSBHTCBFbnVtIHNwZWNpZnlpbmcgdGhlIGJpbmRpbmcgcG9pbnQgKHRhcmdldCkuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgV2ViR0wgYnVmZmVyLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlQnVmZmVyKGdsLCBkYXRhLCBhcnJheVR5cGUsIHRhcmdldCkge1xyXG4gICAgICAgIGNvbnN0IGJ1ZiA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoKHRhcmdldCB8fCBnbC5BUlJBWV9CVUZGRVIpLCBidWYpO1xyXG4gICAgICAgIGdsLmJ1ZmZlckRhdGEoKHRhcmdldCB8fCBnbC5BUlJBWV9CVUZGRVIpLCBuZXcgKGFycmF5VHlwZSB8fCBGbG9hdDMyQXJyYXkpKGRhdGEpLCBnbC5TVEFUSUNfRFJBVyk7XHJcbiAgICAgICAgcmV0dXJuIGJ1ZjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVHJhbnNmZXIgZGF0YSBvbnRvIGNsYW1wZWQgdGV4dHVyZSBhbmQgdHVybiBvZmYgYW55IGZpbHRlcmluZ1xyXG4gICAgICogQHBhcmFtIGdsIFRoZSBXZWJHTCByZW5kZXJpbmcgY29udGV4dC5cclxuICAgICAqIEBwYXJhbSBwaXhlbERhdGEgVGhlIHBpeGVsIGRhdGEgdG8gY3JlYXRlIHRoZSB2aWV3IGZyb20uXHJcbiAgICAgKiBAcGFyYW0gZGltZW5zaW9ucyBUaGUgZGltZW5zaW9ucyB0byBjcmVhdGUgdGhlIHRleHR1cmUuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgdGV4dHVyZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZVRleHR1cmUoZ2wsIHBpeGVsRGF0YSwgZGltZW5zaW9ucykge1xyXG4gICAgICAgIGNvbnN0IHRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XHJcbiAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZSk7XHJcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XHJcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuQ0xBTVBfVE9fRURHRSk7XHJcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLk5FQVJFU1QpO1xyXG4gICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5ORUFSRVNUKTtcclxuICAgICAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGdsLlJHQkEzMkksIGRpbWVuc2lvbnMueCwgZGltZW5zaW9ucy55LCAwLCBnbC5SR0JBX0lOVEVHRVIsIGdsLklOVCwgcGl4ZWxEYXRhKTtcclxuICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBudWxsKTtcclxuICAgICAgICByZXR1cm4gdGV4dHVyZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHRoZSB0ZXh1cmUgaW50byB0aGUgZnJhbWVidWZmZXIuXHJcbiAgICAgKiBAcGFyYW0gZ2wgVGhlIFdlYkdMIHJlbmRlcmluZyBjb250ZXh0LlxyXG4gICAgICogQHBhcmFtIGZyYW1lQnVmZmVyIFRoZSBmcmFtZSBidWZmZXIgdG8gc2V0IHRoZSB0ZXh0IGluIHRvLlxyXG4gICAgICogQHBhcmFtIHRleHR1cmUgVGhlIHRleHR1cmUgdG8gc2V0IGluIHRvIHRoZSBmcmFtZWJ1ZmZlci5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyYW1lQnVmZmVyU2V0VGV4dHVyZShnbCwgZnJhbWVCdWZmZXIsIHRleHR1cmUpIHtcclxuICAgICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIGZyYW1lQnVmZmVyKTtcclxuICAgICAgICBnbC5mcmFtZWJ1ZmZlclRleHR1cmUyRChnbC5GUkFNRUJVRkZFUiwgZ2wuQ09MT1JfQVRUQUNITUVOVDAsIGdsLlRFWFRVUkVfMkQsIHRleHR1cmUsIDApO1xyXG4gICAgICAgIC8vIFRlc3QgZm9yIG1vYmlsZSBidWcgTUROLT5XZWJHTF9iZXN0X3ByYWN0aWNlcywgYnVsbGV0IDdcclxuICAgICAgICBjb25zdCBmcmFtZUJ1ZmZlclN0YXR1cyA9IGdsLmNoZWNrRnJhbWVidWZmZXJTdGF0dXMoZ2wuRlJBTUVCVUZGRVIpO1xyXG4gICAgICAgIGlmIChmcmFtZUJ1ZmZlclN0YXR1cyAhPT0gZ2wuRlJBTUVCVUZGRVJfQ09NUExFVEUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJFcnJvciBhdHRhY2hpbmcgZmxvYXQgdGV4dHVyZSB0byBmcmFtZWJ1ZmZlci4gWW91ciBkZXZpY2UgaXMgcHJvYmFibHkgaW5jb21wYXRpYmxlLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5XZWJHTEhlbHBlciA9IFdlYkdMSGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkMlZpUjB4SVpXeHdaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZkMlZpUjB3dmQyVmlSMHhJWld4d1pYSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQkxEUkZRVUY1UlR0QlFVTjZSU3d3UlVGQmRVVTdRVUZKZGtVN08wZEJSVWM3UVVGRFNEdEpRVU5KT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNZVUZCWVN4RFFVRkRMR0ZCUVRaQ08xRkJRM0pFTEUxQlFVMHNUVUZCVFN4SFFVRkhMR0ZCUVdFc1EwRkJReXhUUVVGVExFVkJRVVVzUTBGQlF6dFJRVVY2UXl4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1QwRkJUeXhOUVVGTkxFdEJRVXNzVjBGQlZ5eEZRVUZGTzFsQlEyaEZMRTFCUVUwc1VVRkJVU3hIUVVGSExHRkJRV0VzUTBGQlF5eFhRVUZYTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1dVRkZia1FzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eEZRVUZGTzJkQ1FVTnFReXhOUVVGTkxFMUJRVTBzUjBGQlJ5eGhRVUZoTEVOQlFVTXNVMEZCVXl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8yZENRVVZxUkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRVZCUVVVN2IwSkJReTlDTEUxQlFVMHNSVUZCUlN4SFFVRkhMR0ZCUVdFc1EwRkJReXhSUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdiMEpCUlRGRExFbEJRVWtzTWtKQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVU3ZDBKQlF6RkNMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEhWRVFVRjFSQ3hGUVVGRkxFVkJRVVVzVTBGQlV5eEZRVUZGTEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU1zUTBGQlF6dHhRa0ZETjBnN2IwSkJSVVFzVDBGQlR5eEZRVUZGTEVOQlFVTTdhVUpCUTJJN2NVSkJRVTA3YjBKQlEwZ3NUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zT0VSQlFUaEVMRVZCUVVVc1JVRkJSU3hUUVVGVExFVkJRVVVzVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJReXhEUVVGRE8ybENRVU53U1R0aFFVTktPMmxDUVVGTk8yZENRVU5JTEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExIRkdRVUZ4Uml4RFFVRkRMRU5CUVVNN1lVRkRhRWc3VTBGRFNqdGhRVUZOTzFsQlEwZ3NUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zTkVWQlFUUkZMRU5CUVVNc1EwRkJRenRUUVVOMlJ6dEpRVU5NTEVOQlFVTTdTVUZGUkRzN096czdPenRQUVU5SE8wbEJRMGtzVFVGQlRTeERRVUZETEZsQlFWa3NRMEZCUXl4RlFVRTBRaXhGUVVGRkxFbEJRV2xDTEVWQlFVVXNVMEZCWlN4RlFVRkZMRTFCUVdVN1VVRkRlRWNzVFVGQlRTeEhRVUZITEVkQlFVY3NSVUZCUlN4RFFVRkRMRmxCUVZrc1JVRkJSU3hEUVVGRE8xRkJSVGxDTEVWQlFVVXNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhOUVVGTkxFbEJRVWtzUlVGQlJTeERRVUZETEZsQlFWa3NRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMmhFTEVWQlFVVXNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhOUVVGTkxFbEJRVWtzUlVGQlJTeERRVUZETEZsQlFWa3NRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhUUVVGVExFbEJRVWtzV1VGQldTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzFGQlJXeEhMRTlCUVU4c1IwRkJSeXhEUVVGRE8wbEJRMllzUTBGQlF6dEpRVVZFT3pzN096czdUMEZOUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhoUVVGaExFTkJRVU1zUlVGQk5FSXNSVUZCUlN4VFFVRXdRaXhGUVVGRkxGVkJRVzlETzFGQlEzUklMRTFCUVUwc1QwRkJUeXhIUVVGSExFVkJRVVVzUTBGQlF5eGhRVUZoTEVWQlFVVXNRMEZCUXp0UlFVVnVReXhGUVVGRkxFTkJRVU1zVjBGQlZ5eERRVUZETEVWQlFVVXNRMEZCUXl4VlFVRlZMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03VVVGRGRrTXNSVUZCUlN4RFFVRkRMR0ZCUVdFc1EwRkJReXhGUVVGRkxFTkJRVU1zVlVGQlZTeEZRVUZGTEVWQlFVVXNRMEZCUXl4alFVRmpMRVZCUVVVc1JVRkJSU3hEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETzFGQlEzSkZMRVZCUVVVc1EwRkJReXhoUVVGaExFTkJRVU1zUlVGQlJTeERRVUZETEZWQlFWVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1kwRkJZeXhGUVVGRkxFVkJRVVVzUTBGQlF5eGhRVUZoTEVOQlFVTXNRMEZCUXp0UlFVTnlSU3hGUVVGRkxFTkJRVU1zWVVGQllTeERRVUZETEVWQlFVVXNRMEZCUXl4VlFVRlZMRVZCUVVVc1JVRkJSU3hEUVVGRExHdENRVUZyUWl4RlFVRkZMRVZCUVVVc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFJRVU51UlN4RlFVRkZMRU5CUVVNc1lVRkJZU3hEUVVGRExFVkJRVVVzUTBGQlF5eFZRVUZWTEVWQlFVVXNSVUZCUlN4RFFVRkRMR3RDUVVGclFpeEZRVUZGTEVWQlFVVXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRSUVVOdVJTeEZRVUZGTEVOQlFVTXNWVUZCVlN4RFFVRkRMRVZCUVVVc1EwRkJReXhWUVVGVkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4UFFVRlBMRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU1zUlVGQlJTeFZRVUZWTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zV1VGQldTeEZRVUZGTEVWQlFVVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1UwRkJVeXhEUVVGRExFTkJRVU03VVVGREwwY3NSVUZCUlN4RFFVRkRMRmRCUVZjc1EwRkJReXhGUVVGRkxFTkJRVU1zVlVGQlZTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUlhCRExFOUJRVThzVDBGQlR5eERRVUZETzBsQlEyNUNMRU5CUVVNN1NVRkZSRHM3T3pzN1QwRkxSenRKUVVOSkxFMUJRVTBzUTBGQlF5eHhRa0ZCY1VJc1EwRkJReXhGUVVFMFFpeEZRVUZGTEZkQlFUWkNMRVZCUVVVc1QwRkJjVUk3VVVGRGJFZ3NSVUZCUlN4RFFVRkRMR1ZCUVdVc1EwRkJReXhGUVVGRkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEZkQlFWY3NRMEZCUXl4RFFVRkRPMUZCUldoRUxFVkJRVVVzUTBGQlF5eHZRa0ZCYjBJc1EwRkJReXhGUVVGRkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVWQlFVVXNRMEZCUXl4cFFrRkJhVUlzUlVGQlJTeEZRVUZGTEVOQlFVTXNWVUZCVlN4RlFVRkZMRTlCUVU4c1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVVY2Uml3d1JFRkJNRVE3VVVGRE1VUXNUVUZCVFN4cFFrRkJhVUlzUjBGQlJ5eEZRVUZGTEVOQlFVTXNjMEpCUVhOQ0xFTkJRVU1zUlVGQlJTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMUZCUlhCRkxFbEJRVWtzYVVKQlFXbENMRXRCUVVzc1JVRkJSU3hEUVVGRExHOUNRVUZ2UWl4RlFVRkZPMWxCUXk5RExFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMSEZHUVVGeFJpeERRVUZETEVOQlFVTTdVMEZEYUVnN1NVRkRUQ3hEUVVGRE8wTkJRMG83UVVFeFJrUXNhME5CTUVaREluMD0iLCJ2YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGNyeXB0b0Vycm9yXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jcnlwdG8vZGlzdC9lcnJvci9jcnlwdG9FcnJvclwiKTtcclxuY29uc3Qgc3RkbGliXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vc3RkbGliXCIpKTtcclxuY29uc3QgdmVydGV4U2hhZGVyQ29kZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3ZlcnRleFNoYWRlckNvZGVcIikpO1xyXG5jb25zdCB3ZWJHTEhlbHBlcl8xID0gcmVxdWlyZShcIi4vd2ViR0xIZWxwZXJcIik7XHJcbi8qKlxyXG4gKiBXZWJHTFdvcmtlci5cclxuICovXHJcbmNsYXNzIFdlYkdMV29ya2VyIHtcclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZSB0aGUgd2ViIEdMIFdvcmtlci5cclxuICAgICAqIEBwYXJhbSB3ZWJHTFBsYXRmb3JtIFRoZSB3ZWJHTCBwbGF0Zm9ybS5cclxuICAgICAqIEBwYXJhbSBzdGF0ZUxlbmd0aCBUaGUgbGVuZ3RoIG9mIHRoZSBzdGF0ZS5cclxuICAgICAqIEBwYXJhbSB0ZXhlbFNpemUgVGhlIHRleGVsIHNpemUuXHJcbiAgICAgKi9cclxuICAgIGluaXRpYWxpemUod2ViR0xQbGF0Zm9ybSwgc3RhdGVMZW5ndGgsIHRleGVsU2l6ZSkge1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQgPSB3ZWJHTEhlbHBlcl8xLldlYkdMSGVscGVyLmNyZWF0ZUNvbnRleHQod2ViR0xQbGF0Zm9ybSk7XHJcbiAgICAgICAgdGhpcy5fZGltZW5zaW9ucyA9IHsgeDogc3RhdGVMZW5ndGgsIHk6IDAgfTtcclxuICAgICAgICBjb25zdCBtYXhJbWFnZVNpemUgPSBNYXRoLnBvdyh0aGlzLl9jb250ZXh0Lk1BWF9URVhUVVJFX1NJWkUsIDIpICogMC41O1xyXG4gICAgICAgIGNvbnN0IGltYWdlU2l6ZSA9IE1hdGguZmxvb3IobWF4SW1hZ2VTaXplIC8gdGhpcy5fZGltZW5zaW9ucy54IC8gdGV4ZWxTaXplKSAqIHRoaXMuX2RpbWVuc2lvbnMueCAqIHRleGVsU2l6ZTtcclxuICAgICAgICB0aGlzLl9kaW1lbnNpb25zLnkgPSBpbWFnZVNpemUgLyB0aGlzLl9kaW1lbnNpb25zLnggLyB0ZXhlbFNpemU7XHJcbiAgICAgICAgdGhpcy5fcHJvZ3JhbXMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5faXB0ID0ge1xyXG4gICAgICAgICAgICBkYXRhOiBuZXcgSW50MzJBcnJheShpbWFnZVNpemUpLFxyXG4gICAgICAgICAgICBsZW5ndGg6IGltYWdlU2l6ZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gR1BVIHRleHR1cmUgYnVmZmVyID0gZnJvbSBKUyB0eXBlZCBhcnJheVxyXG4gICAgICAgIHRoaXMuX2J1ZmZlcnMgPSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB3ZWJHTEhlbHBlcl8xLldlYkdMSGVscGVyLmNyZWF0ZUJ1ZmZlcih0aGlzLl9jb250ZXh0LCBbLTEsIC0xLCAxLCAtMSwgMSwgMSwgLTEsIDFdKSxcclxuICAgICAgICAgICAgdGV4dHVyZTogd2ViR0xIZWxwZXJfMS5XZWJHTEhlbHBlci5jcmVhdGVCdWZmZXIodGhpcy5fY29udGV4dCwgWzAsIDAsIDEsIDAsIDEsIDEsIDAsIDFdKSxcclxuICAgICAgICAgICAgaW5kZXg6IHdlYkdMSGVscGVyXzEuV2ViR0xIZWxwZXIuY3JlYXRlQnVmZmVyKHRoaXMuX2NvbnRleHQsIFsxLCAyLCAwLCAzLCAwLCAyXSwgVWludDE2QXJyYXksIHRoaXMuX2NvbnRleHQuRUxFTUVOVF9BUlJBWV9CVUZGRVIpXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9hdHRyaWIgPSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAwLFxyXG4gICAgICAgICAgICB0ZXh0dXJlOiAxXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl92ZXJ0ZXhBcnJheSA9IHRoaXMuX2NvbnRleHQuY3JlYXRlVmVydGV4QXJyYXkoKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LmJpbmRWZXJ0ZXhBcnJheSh0aGlzLl92ZXJ0ZXhBcnJheSk7XHJcbiAgICAgICAgdGhpcy5iaW5kQnVmZmVycygpO1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQuYmluZFZlcnRleEFycmF5KG51bGwpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlVmVydGV4U2hhZGVyKCk7XHJcbiAgICAgICAgdGhpcy5fZnJhbWVCdWZmZXIgPSB0aGlzLl9jb250ZXh0LmNyZWF0ZUZyYW1lYnVmZmVyKCk7XHJcbiAgICAgICAgdGhpcy5fdGV4dHVyZTAgPSB3ZWJHTEhlbHBlcl8xLldlYkdMSGVscGVyLmNyZWF0ZVRleHR1cmUodGhpcy5fY29udGV4dCwgdGhpcy5faXB0LmRhdGEsIHRoaXMuX2RpbWVuc2lvbnMpO1xyXG4gICAgICAgIHRoaXMuX3RleHR1cmUxID0gd2ViR0xIZWxwZXJfMS5XZWJHTEhlbHBlci5jcmVhdGVUZXh0dXJlKHRoaXMuX2NvbnRleHQsIG5ldyBJbnQzMkFycmF5KGltYWdlU2l6ZSksIHRoaXMuX2RpbWVuc2lvbnMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGRpbWVuc2lvbnMgZnJvbSB0aGUgd29ya2VyLlxyXG4gICAgICogQHJldHVybnMgVGhlIGRpbWVuc2lvbnMuXHJcbiAgICAgKi9cclxuICAgIGdldERpbWVuc2lvbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RpbWVuc2lvbnM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgSVBUIGZyb20gdGhlIHdvcmtlci5cclxuICAgICAqIEByZXR1cm5zIFRoZSBpcHQuXHJcbiAgICAgKi9cclxuICAgIGdldElwdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXB0O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgYSBwcm9ncmFtIHRvIHRoZSB3b3JrZXIuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgcHJvZ3JhbSB0byBhZGQuXHJcbiAgICAgKiBAcGFyYW0gY29kZSBUaGUgY29kZSBmb3IgdGhlIHByb2dyYW0uXHJcbiAgICAgKiBAcGFyYW0gdW5pZm9ybXMgQWRkaXRpb25hbCB1bmlmb3JtIGxvY2F0aW9ucy5cclxuICAgICAqL1xyXG4gICAgYWRkUHJvZ3JhbShuYW1lLCBjb2RlLCAuLi51bmlmb3Jtcykge1xyXG4gICAgICAgIGNvbnN0IGZyYWdtZW50U2hhZGVyID0gdGhpcy5jcmVhdGVGcmFnbWVudFNoYWRlcihjb2RlKTtcclxuICAgICAgICBjb25zdCBwcm9ncmFtID0gdGhpcy5fY29udGV4dC5jcmVhdGVQcm9ncmFtKCk7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgdGhpcy5fdmVydGV4U2hhZGVyKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmcmFnbWVudFNoYWRlcik7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5iaW5kQXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgdGhpcy5fYXR0cmliLnBvc2l0aW9uLCBcInBvc2l0aW9uXCIpO1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQuYmluZEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIHRoaXMuX2F0dHJpYi50ZXh0dXJlLCBcInRleHR1cmVcIik7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5saW5rUHJvZ3JhbShwcm9ncmFtKTtcclxuICAgICAgICBjb25zdCB1bmlmb3JtVmFycyA9IG5ldyBNYXAoKTtcclxuICAgICAgICBmb3IgKGNvbnN0IHZhcmlhYmxlIG9mIHVuaWZvcm1zKSB7XHJcbiAgICAgICAgICAgIHVuaWZvcm1WYXJzLnNldCh2YXJpYWJsZSwgdGhpcy5fY29udGV4dC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgdmFyaWFibGUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcHJvZ3JhbXMuc2V0KG5hbWUsIHsgcHJvZ3JhbSwgdW5pZm9ybVZhcnMgfSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJ1biB0aGUgcHJvZ3JhbSBpbiB0aGUgd2ViIHdvcmtlci5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBwcm9ncmFtIHRvIHJ1bi5cclxuICAgICAqIEBwYXJhbSBjb3VudCBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIHJ1biBpdC5cclxuICAgICAqIEBwYXJhbSB1bmlmb3JtcyBBZGRpdGlvbmFsIHVuaWZvcm0gbG9jYXRpb25zIHRvIHVzZS5cclxuICAgICAqL1xyXG4gICAgcnVuUHJvZ3JhbShuYW1lLCBjb3VudCwgLi4udW5pZm9ybXMpIHtcclxuICAgICAgICBjb25zdCBpbmZvID0gdGhpcy5fcHJvZ3JhbXMuZ2V0KG5hbWUpO1xyXG4gICAgICAgIGNvbnN0IHByb2dyYW0gPSBpbmZvLnByb2dyYW07XHJcbiAgICAgICAgaWYgKCF0aGlzLl9jb250ZXh0LmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgdGhpcy5fY29udGV4dC5MSU5LX1NUQVRVUykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJGYWlsZWQgdG8gbGluayBHTFNMIHByb2dyYW0gY29kZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdW5pZm9ybVZhcnMgPSBpbmZvLnVuaWZvcm1WYXJzO1xyXG4gICAgICAgIGNvbnN0IHVUZXh0dXJlID0gdGhpcy5fY29udGV4dC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgXCJ1X3RleHR1cmVcIik7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC51c2VQcm9ncmFtKHByb2dyYW0pO1xyXG4gICAgICAgIGxldCBsb2NhbENvdW50ID0gY291bnQ7XHJcbiAgICAgICAgd2hpbGUgKGxvY2FsQ291bnQtLSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fY29udGV4dC5iaW5kVGV4dHVyZSh0aGlzLl9jb250ZXh0LlRFWFRVUkVfMkQsIHRoaXMuX3RleHR1cmUwKTtcclxuICAgICAgICAgICAgdGhpcy5fY29udGV4dC5hY3RpdmVUZXh0dXJlKHRoaXMuX2NvbnRleHQuVEVYVFVSRTApO1xyXG4gICAgICAgICAgICB0aGlzLl9jb250ZXh0LnVuaWZvcm0xaSh1VGV4dHVyZSwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbnRleHQudmlld3BvcnQoMCwgMCwgdGhpcy5fZGltZW5zaW9ucy54LCB0aGlzLl9kaW1lbnNpb25zLnkpO1xyXG4gICAgICAgICAgICB3ZWJHTEhlbHBlcl8xLldlYkdMSGVscGVyLmZyYW1lQnVmZmVyU2V0VGV4dHVyZSh0aGlzLl9jb250ZXh0LCB0aGlzLl9mcmFtZUJ1ZmZlciwgdGhpcy5fdGV4dHVyZTEpO1xyXG4gICAgICAgICAgICB0aGlzLl9jb250ZXh0LmJpbmRWZXJ0ZXhBcnJheSh0aGlzLl92ZXJ0ZXhBcnJheSk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgdVZhcnMgb2YgdW5pZm9ybXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRleHQudW5pZm9ybTFpKHVuaWZvcm1WYXJzLmdldCh1VmFycy5uYW1lKSwgdVZhcnMudmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbnRleHQuZHJhd0VsZW1lbnRzKHRoaXMuX2NvbnRleHQuVFJJQU5HTEVTLCA2LCB0aGlzLl9jb250ZXh0LlVOU0lHTkVEX1NIT1JULCAwKTtcclxuICAgICAgICAgICAgY29uc3QgdGV4MCA9IHRoaXMuX3RleHR1cmUwO1xyXG4gICAgICAgICAgICB0aGlzLl90ZXh0dXJlMCA9IHRoaXMuX3RleHR1cmUxO1xyXG4gICAgICAgICAgICB0aGlzLl90ZXh0dXJlMSA9IHRleDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZmluaXNoUnVuKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJlYWQgZGF0YSBmcm9tIHRoZSB3b3JrZXIuXHJcbiAgICAgKiBAcGFyYW0geCBUaGUgeCBwb3NpdGlvbiB0byByZWFkIGZyb20uXHJcbiAgICAgKiBAcGFyYW0geSBUaGUgeSBwb3NpdGlvbiB0byByZWFkIGZyb20uXHJcbiAgICAgKiBAcGFyYW0gbiBUaGUgd2lkdGggcG9zaXRpb24gdG8gcmVhZCBmcm9tLlxyXG4gICAgICogQHBhcmFtIG0gVGhlIGhlaWdodCBwb3NpdGlvbiB0byByZWFkIGZyb20uXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZGF0YSBhdCB0aGUgcmVxdWVzdGVkIHBvc2l0aW9uLlxyXG4gICAgICovXHJcbiAgICByZWFkRGF0YSh4LCB5LCBuLCBtKSB7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5iaW5kRnJhbWVidWZmZXIodGhpcy5fY29udGV4dC5GUkFNRUJVRkZFUiwgdGhpcy5fZnJhbWVCdWZmZXIpO1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQucmVhZFBpeGVscyh4LCB5LCBuLCBtLCB0aGlzLl9jb250ZXh0LlJHQkFfSU5URUdFUiwgdGhpcy5fY29udGV4dC5JTlQsIHRoaXMuX2lwdC5kYXRhKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LmJpbmRGcmFtZWJ1ZmZlcih0aGlzLl9jb250ZXh0LkZSQU1FQlVGRkVSLCBudWxsKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXB0LmRhdGEuc3ViYXJyYXkoMCwgdGhpcy5faXB0Lmxlbmd0aCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFdyaXRlIGRhdGEgdG8gdGhlIHdvcmtlci5cclxuICAgICAqIEBwYXJhbSBkYXRhIFRoZSBkYXRhIHRvIHdyaXRlLlxyXG4gICAgICovXHJcbiAgICB3cml0ZURhdGEoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQuYmluZFRleHR1cmUodGhpcy5fY29udGV4dC5URVhUVVJFXzJELCB0aGlzLl90ZXh0dXJlMCk7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC50ZXhJbWFnZTJEKHRoaXMuX2NvbnRleHQuVEVYVFVSRV8yRCwgMCwgdGhpcy5fY29udGV4dC5SR0JBMzJJLCB0aGlzLl9kaW1lbnNpb25zLngsIHRoaXMuX2RpbWVuc2lvbnMueSwgMCwgdGhpcy5fY29udGV4dC5SR0JBX0lOVEVHRVIsIHRoaXMuX2NvbnRleHQuSU5ULCBkYXRhKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LmJpbmRUZXh0dXJlKHRoaXMuX2NvbnRleHQuVEVYVFVSRV8yRCwgbnVsbCk7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGJpbmRCdWZmZXJzKCkge1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQuYmluZEJ1ZmZlcih0aGlzLl9jb250ZXh0LkFSUkFZX0JVRkZFUiwgdGhpcy5fYnVmZmVycy50ZXh0dXJlKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMuX2F0dHJpYi50ZXh0dXJlKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5fYXR0cmliLnRleHR1cmUsIDIsIHRoaXMuX2NvbnRleHQuRkxPQVQsIGZhbHNlLCAwLCAwKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LmJpbmRCdWZmZXIodGhpcy5fY29udGV4dC5BUlJBWV9CVUZGRVIsIHRoaXMuX2J1ZmZlcnMucG9zaXRpb24pO1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy5fYXR0cmliLnBvc2l0aW9uKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5fYXR0cmliLnBvc2l0aW9uLCAyLCB0aGlzLl9jb250ZXh0LkZMT0FULCBmYWxzZSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5iaW5kQnVmZmVyKHRoaXMuX2NvbnRleHQuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIHRoaXMuX2J1ZmZlcnMuaW5kZXgpO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjcmVhdGVWZXJ0ZXhTaGFkZXIoKSB7XHJcbiAgICAgICAgdGhpcy5fdmVydGV4U2hhZGVyID0gdGhpcy5fY29udGV4dC5jcmVhdGVTaGFkZXIodGhpcy5fY29udGV4dC5WRVJURVhfU0hBREVSKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LnNoYWRlclNvdXJjZSh0aGlzLl92ZXJ0ZXhTaGFkZXIsIHZlcnRleFNoYWRlckNvZGVfMS5kZWZhdWx0KTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LmNvbXBpbGVTaGFkZXIodGhpcy5fdmVydGV4U2hhZGVyKTtcclxuICAgICAgICAvLyBUaGlzIHNob3VsZCBub3QgZmFpbC5cclxuICAgICAgICBpZiAoIXRoaXMuX2NvbnRleHQuZ2V0U2hhZGVyUGFyYW1ldGVyKHRoaXMuX3ZlcnRleFNoYWRlciwgdGhpcy5fY29udGV4dC5DT01QSUxFX1NUQVRVUykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoYENvdWxkIG5vdCBidWlsZCB2ZXJ0ZXggc2hhZGVyLlxuXG4tLS0gQ09ERSBEVU1QIC0tLSR7dmVydGV4U2hhZGVyQ29kZV8xLmRlZmF1bHR9XG5cbi0tLSBFUlJPUiBMT0cgLS0tXG4ke3RoaXMuX2NvbnRleHQuZ2V0U2hhZGVySW5mb0xvZyh0aGlzLl92ZXJ0ZXhTaGFkZXIpfWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY3JlYXRlRnJhZ21lbnRTaGFkZXIoY29kZSkge1xyXG4gICAgICAgIGNvbnN0IGZyYWdtZW50U2hhZGVyID0gdGhpcy5fY29udGV4dC5jcmVhdGVTaGFkZXIodGhpcy5fY29udGV4dC5GUkFHTUVOVF9TSEFERVIpO1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQuc2hhZGVyU291cmNlKGZyYWdtZW50U2hhZGVyLCBzdGRsaWJfMS5kZWZhdWx0ICsgY29kZSk7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5jb21waWxlU2hhZGVyKGZyYWdtZW50U2hhZGVyKTtcclxuICAgICAgICAvLyBVc2UgdGhpcyBvdXRwdXQgdG8gZGVidWcgdGhlIHNoYWRlclxyXG4gICAgICAgIC8vIEtlZXAgaW4gbWluZCB0aGF0IFdlYkdMIEdMU0wgaXMgKiptdWNoKiogc3RyaWN0ZXIgdGhhbiBlLmcuIE9wZW5HTCBHTFNMXHJcbiAgICAgICAgaWYgKCF0aGlzLl9jb250ZXh0LmdldFNoYWRlclBhcmFtZXRlcihmcmFnbWVudFNoYWRlciwgdGhpcy5fY29udGV4dC5DT01QSUxFX1NUQVRVUykpIHtcclxuICAgICAgICAgICAgY29uc3QgY29kZUxpbmVzID0gY29kZS5zcGxpdChcIlxcblwiKTtcclxuICAgICAgICAgICAgbGV0IGRiZ01zZyA9IFwiQ291bGQgbm90IGJ1aWxkIGZyYWdtZW50IHNoYWRlci5cXG5cXG4tLS0tLS0tLS0tLS0tLS0tLS0gS0VSTkVMIENPREUgRFVNUCAtLS0tLS0tLS0tLS0tLS0tLS1cXG5cIjtcclxuICAgICAgICAgICAgZm9yIChsZXQgbmwgPSAwOyBubCA8IGNvZGVMaW5lcy5sZW5ndGg7IG5sKyspIHtcclxuICAgICAgICAgICAgICAgIGRiZ01zZyArPSBgJHtzdGRsaWJfMS5kZWZhdWx0LnNwbGl0KFwiXFxuXCIpLmxlbmd0aCArIG5sfT4gJHtjb2RlTGluZXNbbmxdfVxcbmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGJnTXNnICs9IGBcXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRVJST1IgIExPRyAtLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4ke3RoaXMuX2NvbnRleHQuZ2V0U2hhZGVySW5mb0xvZyhmcmFnbWVudFNoYWRlcil9YDtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoZGJnTXNnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZyYWdtZW50U2hhZGVyO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBmaW5pc2hSdW4oKSB7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5iaW5kVmVydGV4QXJyYXkobnVsbCk7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5iaW5kVGV4dHVyZSh0aGlzLl9jb250ZXh0LlRFWFRVUkVfMkQsIG51bGwpO1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQuYmluZEZyYW1lYnVmZmVyKHRoaXMuX2NvbnRleHQuRlJBTUVCVUZGRVIsIG51bGwpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuV2ViR0xXb3JrZXIgPSBXZWJHTFdvcmtlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZDJWaVIweFhiM0pyWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12ZDJWaVIwd3ZkMlZpUjB4WGIzSnJaWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCTERCRlFVRjFSVHRCUVVWMlJTeHpSRUZCT0VJN1FVRkRPVUlzTUVWQlFXdEVPMEZCUTJ4RUxDdERRVUUwUXp0QlFVazFRenM3UjBGRlJ6dEJRVU5JTzBsQmQwSkpPenM3T3p0UFFVdEhPMGxCUTBrc1ZVRkJWU3hEUVVGRExHRkJRVFpDTEVWQlFVVXNWMEZCYlVJc1JVRkJSU3hUUVVGcFFqdFJRVU51Uml4SlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExIbENRVUZYTEVOQlFVTXNZVUZCWVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGRE8xRkJRM3BFTEVsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzVjBGQlZ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJRenRSUVVVMVF5eE5RVUZOTEZsQlFWa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNaMEpCUVdkQ0xFVkJRVVVzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRPMUZCUTNaRkxFMUJRVTBzVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1dVRkJXU3hIUVVGSExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXl4SFFVRkhMRk5CUVZNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXl4SFFVRkhMRk5CUVZNc1EwRkJRenRSUVVNM1J5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhUUVVGVExFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1UwRkJVeXhEUVVGRE8xRkJSV2hGTEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1NVRkJTU3hIUVVGSExFVkJRVVVzUTBGQlF6dFJRVU16UWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hIUVVGSE8xbEJRMUlzU1VGQlNTeEZRVUZGTEVsQlFVa3NWVUZCVlN4RFFVRkRMRk5CUVZNc1EwRkJRenRaUVVNdlFpeE5RVUZOTEVWQlFVVXNVMEZCVXp0VFFVTndRaXhEUVVGRE8xRkJSVVlzTWtOQlFUSkRPMUZCUXpORExFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVYzdXVUZEV2l4UlFVRlJMRVZCUVVVc2VVSkJRVmNzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF5OUZMRTlCUVU4c1JVRkJSU3g1UWtGQlZ5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRekZGTEV0QlFVc3NSVUZCUlN4NVFrRkJWeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeFhRVUZYTEVWQlFVVXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXh2UWtGQmIwSXNRMEZCUXp0VFFVTjBTQ3hEUVVGRE8xRkJSVVlzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnp0WlFVTllMRkZCUVZFc1JVRkJSU3hEUVVGRE8xbEJRMWdzVDBGQlR5eEZRVUZGTEVOQlFVTTdVMEZEWWl4RFFVRkRPMUZCUlVZc1NVRkJTU3hEUVVGRExGbEJRVmtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMR2xDUVVGcFFpeEZRVUZGTEVOQlFVTTdVVUZEZEVRc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eGxRVUZsTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE8xRkJRMnBFTEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRenRSUVVOdVFpeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMR1ZCUVdVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU53UXl4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVWQlFVVXNRMEZCUXp0UlFVTXhRaXhKUVVGSkxFTkJRVU1zV1VGQldTeEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc2FVSkJRV2xDTEVWQlFVVXNRMEZCUXp0UlFVTjBSQ3hKUVVGSkxFTkJRVU1zVTBGQlV5eEhRVUZITEhsQ1FVRlhMRU5CUVVNc1lVRkJZU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMUZCUXpWR0xFbEJRVWtzUTBGQlF5eFRRVUZUTEVkQlFVY3NlVUpCUVZjc1EwRkJReXhoUVVGaExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlN4SlFVRkpMRlZCUVZVc1EwRkJReXhUUVVGVExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1NVRkRNMGNzUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxHRkJRV0U3VVVGRGFFSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRE8wbEJRelZDTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeE5RVUZOTzFGQlExUXNUMEZCVHl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRE8wbEJRM0pDTEVOQlFVTTdTVUZGUkRzN096czdUMEZMUnp0SlFVTkpMRlZCUVZVc1EwRkJReXhKUVVGWkxFVkJRVVVzU1VGQldTeEZRVUZGTEVkQlFVY3NVVUZCYTBJN1VVRkRMMFFzVFVGQlRTeGpRVUZqTEVkQlFVY3NTVUZCU1N4RFFVRkRMRzlDUVVGdlFpeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTNaRUxFMUJRVTBzVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1lVRkJZU3hGUVVGRkxFTkJRVU03VVVGRk9VTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1EwRkJRenRSUVVONFJDeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRmxCUVZrc1EwRkJReXhQUVVGUExFVkJRVVVzWTBGQll5eERRVUZETEVOQlFVTTdVVUZEY0VRc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhQUVVGUExFVkJRVVVzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4UlFVRlJMRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU03VVVGRE4wVXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4UFFVRlBMRVZCUVVVc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVWQlFVVXNVMEZCVXl4RFFVRkRMRU5CUVVNN1VVRkRNMFVzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03VVVGRGJrTXNUVUZCVFN4WFFVRlhMRWRCUVVjc1NVRkJTU3hIUVVGSExFVkJRV2RETEVOQlFVTTdVVUZETlVRc1MwRkJTeXhOUVVGTkxGRkJRVkVzU1VGQlNTeFJRVUZSTEVWQlFVVTdXVUZETjBJc1YwRkJWeXhEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4UFFVRlBMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU5zUmp0UlFVTkVMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NSVUZCUlN4RlFVRkZMRTlCUVU4c1JVRkJSU3hYUVVGWExFVkJRVVVzUTBGQlF5eERRVUZETzBsQlEzWkVMRU5CUVVNN1NVRkZSRHM3T3pzN1QwRkxSenRKUVVOSkxGVkJRVlVzUTBGQlF5eEpRVUZaTEVWQlFVVXNTMEZCWVN4RlFVRkZMRWRCUVVjc1VVRkJkVU03VVVGRGNrWXNUVUZCVFN4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRkRU1zVFVGQlRTeFBRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJRenRSUVVVM1FpeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXh0UWtGQmJVSXNRMEZCUXl4UFFVRlBMRVZCUVVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNSVUZCUlR0WlFVTjRSU3hOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4clEwRkJhME1zUTBGQlF5eERRVUZETzFOQlF6ZEVPMUZCUlVRc1RVRkJUU3hYUVVGWExFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXp0UlFVTnlReXhOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMR3RDUVVGclFpeERRVUZETEU5QlFVOHNSVUZCUlN4WFFVRlhMRU5CUVVNc1EwRkJRenRSUVVONFJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFJRVVZzUXl4SlFVRkpMRlZCUVZVc1IwRkJSeXhMUVVGTExFTkJRVU03VVVGRGRrSXNUMEZCVHl4VlFVRlZMRVZCUVVVc1IwRkJSeXhEUVVGRExFVkJRVVU3V1VGRGNrSXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRVZCUVVVc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETzFsQlEzQkZMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03V1VGRGNFUXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhUUVVGVExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUlhKRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnlSU3g1UWtGQlZ5eERRVUZETEhGQ1FVRnhRaXhEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNTVUZCU1N4RFFVRkRMRmxCUVZrc1JVRkJSU3hKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdXVUZEY0VZc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eGxRVUZsTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE8xbEJRMnBFTEV0QlFVc3NUVUZCVFN4TFFVRkxMRWxCUVVrc1VVRkJVU3hGUVVGRk8yZENRVU14UWl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGTkJRVk1zUTBGQlF5eFhRVUZYTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1lVRkRja1U3V1VGRFJDeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eGpRVUZqTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkZlRVlzVFVGQlRTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJRenRaUVVNMVFpeEpRVUZKTEVOQlFVTXNVMEZCVXl4SFFVRkhMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU03V1VGRGFFTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1IwRkJSeXhKUVVGSkxFTkJRVU03VTBGRGVrSTdVVUZGUkN4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU03U1VGRGNrSXNRMEZCUXp0SlFVVkVPenM3T3pzN08wOUJUMGM3U1VGRFNTeFJRVUZSTEVOQlFVTXNRMEZCVXl4RlFVRkZMRU5CUVZNc1JVRkJSU3hEUVVGVExFVkJRVVVzUTBGQlV6dFJRVU4wUkN4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExHVkJRV1VzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRmRCUVZjc1JVRkJSU3hKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdVVUZETlVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1dVRkJXU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVVUZEY0Vjc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eGxRVUZsTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhYUVVGWExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdVVUZETDBRc1QwRkJUeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1NVRkRlRVFzUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxGTkJRVk1zUTBGQlF5eEpRVUZ4UWp0UlFVTnNReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGVkJRVlVzUlVGQlJTeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1VVRkRjRVVzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVWQlFVVXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZsQlFWa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTTNTeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGVkJRVlVzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0SlFVTTVSQ3hEUVVGRE8wbEJSVVFzWlVGQlpUdEpRVU5RTEZkQlFWYzdVVUZEWml4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRmxCUVZrc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMUZCUXpWRkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNkVUpCUVhWQ0xFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRSUVVNMVJDeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRzFDUVVGdFFpeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1JVRkJSU3hMUVVGTExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUXpkR0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zV1VGQldTeEZRVUZGTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03VVVGRE4wVXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXgxUWtGQmRVSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzFGQlF6ZEVMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zYlVKQlFXMUNMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eEZRVUZGTEV0QlFVc3NSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRE9VWXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4dlFrRkJiMElzUlVGQlJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRM1JHTEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTFBc2EwSkJRV3RDTzFGQlEzUkNMRWxCUVVrc1EwRkJReXhoUVVGaExFZEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNRMEZCUXp0UlFVTTNSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1lVRkJZU3hGUVVGRkxEQkNRVUZuUWl4RFFVRkRMRU5CUVVNN1VVRkRha1VzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETzFGQlJXaEVMSGRDUVVGM1FqdFJRVU40UWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhKUVVGSkxFTkJRVU1zWVVGQllTeEZRVUZGTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1kwRkJZeXhEUVVGRExFVkJRVVU3V1VGRGNrWXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRMnBDT3p0dFFrRkZSeXd3UWtGQlowSTdPenRGUVVkcVF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMR2RDUVVGblFpeERRVUZETEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1JVRkJSU3hEUVVONlF5eERRVUZETzFOQlEwdzdTVUZEVEN4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxHOUNRVUZ2UWl4RFFVRkRMRWxCUVZrN1VVRkRja01zVFVGQlRTeGpRVUZqTEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4bFFVRmxMRU5CUVVNc1EwRkJRenRSUVVWcVJpeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRmxCUVZrc1EwRkJReXhqUVVGakxFVkJRVVVzWjBKQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVVeFJDeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhqUVVGakxFTkJRVU1zUTBGQlF6dFJRVVUxUXl4elEwRkJjME03VVVGRGRFTXNNRVZCUVRCRk8xRkJRekZGTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExHdENRVUZyUWl4RFFVRkRMR05CUVdNc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEdOQlFXTXNRMEZCUXl4RlFVRkZPMWxCUTJwR0xFMUJRVTBzVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRGJrTXNTVUZCU1N4TlFVRk5MRWRCUVVjc09FWkJRVGhHTEVOQlFVTTdXVUZGTlVjc1MwRkJTeXhKUVVGSkxFVkJRVVVzUjBGQlJ5eERRVUZETEVWQlFVVXNSVUZCUlN4SFFVRkhMRk5CUVZNc1EwRkJReXhOUVVGTkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVTdaMEpCUXpGRExFMUJRVTBzU1VGQlNTeEhRVUZITEdkQ1FVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEUxQlFVMHNSMEZCUnl4RlFVRkZMRXRCUVVzc1UwRkJVeXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTTdZVUZEY2tVN1dVRkZSQ3hOUVVGTkxFbEJRVWtzTmtSQlFUWkVMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1kwRkJZeXhEUVVGRExFVkJRVVVzUTBGQlF6dFpRVVY0U0N4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0VFFVTnFRenRSUVVORUxFOUJRVThzWTBGQll5eERRVUZETzBsQlF6RkNMRU5CUVVNN1NVRkZSQ3hsUVVGbE8wbEJRMUFzVTBGQlV6dFJRVU5pTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1pVRkJaU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFGQlEzQkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzFGQlF6RkVMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zWlVGQlpTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1YwRkJWeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzBsQlEyNUZMRU5CUVVNN1EwRkRTanRCUVhSUFJDeHJRMEZ6VDBNaWZRPT0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4vLyBUaGlzIG1ldGhvZCBvZiBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QgbmVlZHMgdG8gYmVcbi8vIGtlcHQgaWRlbnRpY2FsIHRvIHRoZSB3YXkgaXQgaXMgb2J0YWluZWQgaW4gcnVudGltZS5qc1xudmFyIGcgPSAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xuXG4vLyBVc2UgYGdldE93blByb3BlcnR5TmFtZXNgIGJlY2F1c2Ugbm90IGFsbCBicm93c2VycyBzdXBwb3J0IGNhbGxpbmdcbi8vIGBoYXNPd25Qcm9wZXJ0eWAgb24gdGhlIGdsb2JhbCBgc2VsZmAgb2JqZWN0IGluIGEgd29ya2VyLiBTZWUgIzE4My5cbnZhciBoYWRSdW50aW1lID0gZy5yZWdlbmVyYXRvclJ1bnRpbWUgJiZcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZykuaW5kZXhPZihcInJlZ2VuZXJhdG9yUnVudGltZVwiKSA+PSAwO1xuXG4vLyBTYXZlIHRoZSBvbGQgcmVnZW5lcmF0b3JSdW50aW1lIGluIGNhc2UgaXQgbmVlZHMgdG8gYmUgcmVzdG9yZWQgbGF0ZXIuXG52YXIgb2xkUnVudGltZSA9IGhhZFJ1bnRpbWUgJiYgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG5cbi8vIEZvcmNlIHJlZXZhbHV0YXRpb24gb2YgcnVudGltZS5qcy5cbmcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3J1bnRpbWVcIik7XG5cbmlmIChoYWRSdW50aW1lKSB7XG4gIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHJ1bnRpbWUuXG4gIGcucmVnZW5lcmF0b3JSdW50aW1lID0gb2xkUnVudGltZTtcbn0gZWxzZSB7XG4gIC8vIFJlbW92ZSB0aGUgZ2xvYmFsIHByb3BlcnR5IGFkZGVkIGJ5IHJ1bnRpbWUuanMuXG4gIHRyeSB7XG4gICAgZGVsZXRlIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuICB9IGNhdGNoKGUpIHtcbiAgICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4hKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIHZhciBpbk1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCI7XG4gIHZhciBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgaWYgKHJ1bnRpbWUpIHtcbiAgICBpZiAoaW5Nb2R1bGUpIHtcbiAgICAgIC8vIElmIHJlZ2VuZXJhdG9yUnVudGltZSBpcyBkZWZpbmVkIGdsb2JhbGx5IGFuZCB3ZSdyZSBpbiBhIG1vZHVsZSxcbiAgICAgIC8vIG1ha2UgdGhlIGV4cG9ydHMgb2JqZWN0IGlkZW50aWNhbCB0byByZWdlbmVyYXRvclJ1bnRpbWUuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG4gICAgfVxuICAgIC8vIERvbid0IGJvdGhlciBldmFsdWF0aW5nIHRoZSByZXN0IG9mIHRoaXMgZmlsZSBpZiB0aGUgcnVudGltZSB3YXNcbiAgICAvLyBhbHJlYWR5IGRlZmluZWQgZ2xvYmFsbHkuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRGVmaW5lIHRoZSBydW50aW1lIGdsb2JhbGx5IChhcyBleHBlY3RlZCBieSBnZW5lcmF0ZWQgY29kZSkgYXMgZWl0aGVyXG4gIC8vIG1vZHVsZS5leHBvcnRzIChpZiB3ZSdyZSBpbiBhIG1vZHVsZSkgb3IgYSBuZXcsIGVtcHR5IG9iamVjdC5cbiAgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWUgPSBpbk1vZHVsZSA/IG1vZHVsZS5leHBvcnRzIDoge307XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgcnVudGltZS53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBydW50aW1lLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgcnVudGltZS5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uIElmIHRoZSBQcm9taXNlIGlzIHJlamVjdGVkLCBob3dldmVyLCB0aGVcbiAgICAgICAgICAvLyByZXN1bHQgZm9yIHRoaXMgaXRlcmF0aW9uIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aCB0aGUgc2FtZVxuICAgICAgICAgIC8vIHJlYXNvbi4gTm90ZSB0aGF0IHJlamVjdGlvbnMgb2YgeWllbGRlZCBQcm9taXNlcyBhcmUgbm90XG4gICAgICAgICAgLy8gdGhyb3duIGJhY2sgaW50byB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBhcyBpcyB0aGUgY2FzZVxuICAgICAgICAgIC8vIHdoZW4gYW4gYXdhaXRlZCBQcm9taXNlIGlzIHJlamVjdGVkLiBUaGlzIGRpZmZlcmVuY2UgaW5cbiAgICAgICAgICAvLyBiZWhhdmlvciBiZXR3ZWVuIHlpZWxkIGFuZCBhd2FpdCBpcyBpbXBvcnRhbnQsIGJlY2F1c2UgaXRcbiAgICAgICAgICAvLyBhbGxvd3MgdGhlIGNvbnN1bWVyIHRvIGRlY2lkZSB3aGF0IHRvIGRvIHdpdGggdGhlIHlpZWxkZWRcbiAgICAgICAgICAvLyByZWplY3Rpb24gKHN3YWxsb3cgaXQgYW5kIGNvbnRpbnVlLCBtYW51YWxseSAudGhyb3cgaXQgYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGdlbmVyYXRvciwgYWJhbmRvbiBpdGVyYXRpb24sIHdoYXRldmVyKS4gV2l0aFxuICAgICAgICAgIC8vIGF3YWl0LCBieSBjb250cmFzdCwgdGhlcmUgaXMgbm8gb3Bwb3J0dW5pdHkgdG8gZXhhbWluZSB0aGVcbiAgICAgICAgICAvLyByZWplY3Rpb24gcmVhc29uIG91dHNpZGUgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgc28gdGhlXG4gICAgICAgICAgLy8gb25seSBvcHRpb24gaXMgdG8gdGhyb3cgaXQgZnJvbSB0aGUgYXdhaXQgZXhwcmVzc2lvbiwgYW5kXG4gICAgICAgICAgLy8gbGV0IHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24gaGFuZGxlIHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBydW50aW1lLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBydW50aW1lLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIHJ1bnRpbWUua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBydW50aW1lLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xufSkoXG4gIC8vIEluIHNsb3BweSBtb2RlLCB1bmJvdW5kIGB0aGlzYCByZWZlcnMgdG8gdGhlIGdsb2JhbCBvYmplY3QsIGZhbGxiYWNrIHRvXG4gIC8vIEZ1bmN0aW9uIGNvbnN0cnVjdG9yIGlmIHdlJ3JlIGluIGdsb2JhbCBzdHJpY3QgbW9kZS4gVGhhdCBpcyBzYWRseSBhIGZvcm1cbiAgLy8gb2YgaW5kaXJlY3QgZXZhbCB3aGljaCB2aW9sYXRlcyBDb250ZW50IFNlY3VyaXR5IFBvbGljeS5cbiAgKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKVxuKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=