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
var coreError_1 = require("@iota-pico/core/dist/error/coreError");
var numberHelper_1 = require("@iota-pico/core/dist/helpers/numberHelper");
var trytes_1 = require("@iota-pico/data/dist/data/trytes");
var pearlDiver_1 = require("./pearlDiver/pearlDiver");
/**
 * CurlProofOfWork implementation using WebGL.
 */
var CurlProofOfWork = /** @class */ (function () {
    function CurlProofOfWork() {
    }
    /**
     * Allow the proof of work to perform any initialization.
     * Will throw an exception if the implementation is not supported.
     */
    CurlProofOfWork.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        try {
                            pearlDiver_1.PearlDiver.initialize();
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
    CurlProofOfWork.prototype.pow = function (trytes, minWeightMagnitude) {
        return __awaiter(this, void 0, void 0, function () {
            var nonce, trytesString, nonceString;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (trytes === undefined || trytes === null) {
                            throw new coreError_1.CoreError("Trytes can not be null or undefined");
                        }
                        if (!numberHelper_1.NumberHelper.isInteger(minWeightMagnitude)) {
                            throw new coreError_1.CoreError("The minWeightMagnitude value is not an integer");
                        }
                        return [4 /*yield*/, pearlDiver_1.PearlDiver.instance.searchWithTrytes(trytes, minWeightMagnitude)];
                    case 1:
                        nonce = _a.sent();
                        trytesString = trytes.toString();
                        nonceString = nonce.toString();
                        return [2 /*return*/, trytes_1.Trytes.create(trytesString.substr(0, trytesString.length - nonceString.length).concat(nonceString))];
                }
            });
        });
    };
    return CurlProofOfWork;
}());
exports.CurlProofOfWork = CurlProofOfWork;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VybFByb29mT2ZXb3JrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2N1cmxQcm9vZk9mV29yay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrRUFBaUU7QUFDakUsMEVBQXlFO0FBRXpFLDJEQUEwRDtBQUMxRCxzREFBcUQ7QUFFckQ7O0dBRUc7QUFDSDtJQUFBO0lBbUNBLENBQUM7SUFsQ0c7OztPQUdHO0lBQ1Usb0NBQVUsR0FBdkI7OztnQkFDSSxzQkFBTyxJQUFJLE9BQU8sQ0FBTyxVQUFDLE9BQU8sRUFBRSxNQUFNO3dCQUNyQyxJQUFJLENBQUM7NEJBQ0QsdUJBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQzs0QkFDeEIsT0FBTyxFQUFFLENBQUM7d0JBQ2QsQ0FBQzt3QkFBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOzRCQUNYLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDaEIsQ0FBQztvQkFDTCxDQUFDLENBQUMsRUFBQzs7O0tBQ047SUFFRDs7Ozs7T0FLRztJQUNVLDZCQUFHLEdBQWhCLFVBQWlCLE1BQWMsRUFBRSxrQkFBMEI7Ozs7Ozt3QkFDdkQsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQzs0QkFDMUMsTUFBTSxJQUFJLHFCQUFTLENBQUMscUNBQXFDLENBQUMsQ0FBQzt3QkFDL0QsQ0FBQzt3QkFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLDJCQUFZLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUM5QyxNQUFNLElBQUkscUJBQVMsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO3dCQUMxRSxDQUFDO3dCQUNhLHFCQUFNLHVCQUFVLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxrQkFBa0IsQ0FBQyxFQUFBOzt3QkFBOUUsS0FBSyxHQUFHLFNBQXNFO3dCQUU5RSxZQUFZLEdBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO3dCQUNqQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO3dCQUNyQyxzQkFBTyxlQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFDOzs7O0tBQzlHO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBbkNELElBbUNDO0FBbkNZLDBDQUFlIn0=