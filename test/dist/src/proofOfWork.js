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
Object.defineProperty(exports, "__esModule", { value: true });
var numberHelper_1 = require("@iota-pico/core/dist/helpers/numberHelper");
var objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
var cryptoError_1 = require("@iota-pico/crypto/dist/error/cryptoError");
var trytes_1 = require("@iota-pico/data/dist/data/trytes");
var pearlDiver_1 = require("./pearlDiver/pearlDiver");
/**
 * ProofOfWork implementation using WebGL.
 */
var ProofOfWork = /** @class */ (function () {
    function ProofOfWork() {
    }
    /**
     * Allow the proof of work to perform any initialization.
     * Will throw an exception if the implementation is not supported.
     */
    ProofOfWork.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        try {
                            pearlDiver_1.PearlDiver.initialize();
                            _this._isInitialized = true;
                            resolve();
                        }
                        catch (err) {
                            reject(err);
                        }
                    })];
            });
        });
    };
    /**
     * Perform a proof of work on the data.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */
    ProofOfWork.prototype.pow = function (trytes, minWeightMagnitude) {
        return __awaiter(this, void 0, void 0, function () {
            var nonce, trytesString, nonceString;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._isInitialized) {
                            throw new cryptoError_1.CryptoError("WebGL is no initialized, have you called initialize");
                        }
                        if (!objectHelper_1.ObjectHelper.isType(trytes, trytes_1.Trytes)) {
                            throw new cryptoError_1.CryptoError("The trytes must be an object of type Trytes");
                        }
                        if (!numberHelper_1.NumberHelper.isInteger(minWeightMagnitude)) {
                            throw new cryptoError_1.CryptoError("The minWeightMagnitude value is not an integer");
                        }
                        return [4 /*yield*/, pearlDiver_1.PearlDiver.instance.searchWithTrytes(trytes, minWeightMagnitude)];
                    case 1:
                        nonce = _a.sent();
                        trytesString = trytes.toString();
                        nonceString = nonce.toString();
                        return [2 /*return*/, trytes_1.Trytes.fromString(trytesString.substr(0, trytesString.length - nonceString.length).concat(nonceString))];
                }
            });
        });
    };
    return ProofOfWork;
}());
exports.ProofOfWork = ProofOfWork;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvb2ZPZldvcmsuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcHJvb2ZPZldvcmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEVBQXlFO0FBQ3pFLDBFQUF5RTtBQUN6RSx3RUFBdUU7QUFFdkUsMkRBQTBEO0FBQzFELHNEQUFxRDtBQUVyRDs7R0FFRztBQUNIO0lBQUE7SUEyQ0EsQ0FBQztJQXZDRzs7O09BR0c7SUFDVSxnQ0FBVSxHQUF2Qjs7OztnQkFDSSxzQkFBTyxJQUFJLE9BQU8sQ0FBTyxVQUFDLE9BQU8sRUFBRSxNQUFNO3dCQUNyQyxJQUFJLENBQUM7NEJBQ0QsdUJBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQzs0QkFDeEIsS0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7NEJBQzNCLE9BQU8sRUFBRSxDQUFDO3dCQUNkLENBQUM7d0JBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDWCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ2hCLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLEVBQUM7OztLQUNOO0lBRUQ7Ozs7O09BS0c7SUFDVSx5QkFBRyxHQUFoQixVQUFpQixNQUFjLEVBQUUsa0JBQTBCOzs7Ozs7d0JBQ3ZELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7NEJBQ3ZCLE1BQU0sSUFBSSx5QkFBVyxDQUFDLHFEQUFxRCxDQUFDLENBQUM7d0JBQ2pGLENBQUM7d0JBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQywyQkFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsZUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUN2QyxNQUFNLElBQUkseUJBQVcsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO3dCQUN6RSxDQUFDO3dCQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsMkJBQVksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQzlDLE1BQU0sSUFBSSx5QkFBVyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7d0JBQzVFLENBQUM7d0JBRWEscUJBQU0sdUJBQVUsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLGtCQUFrQixDQUFDLEVBQUE7O3dCQUE5RSxLQUFLLEdBQUcsU0FBc0U7d0JBRTlFLFlBQVksR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7d0JBQ2pDLFdBQVcsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7d0JBQ3JDLHNCQUFPLGVBQU0sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUM7Ozs7S0FDbEg7SUFDTCxrQkFBQztBQUFELENBQUMsQUEzQ0QsSUEyQ0M7QUEzQ1ksa0NBQVcifQ==