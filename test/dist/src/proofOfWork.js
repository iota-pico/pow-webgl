var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const arrayHelper_1 = require("@iota-pico/core/dist/helpers/arrayHelper");
const numberHelper_1 = require("@iota-pico/core/dist/helpers/numberHelper");
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
const cryptoError_1 = require("@iota-pico/crypto/dist/error/cryptoError");
const trytes_1 = require("@iota-pico/data/dist/data/trytes");
const pearlDiver_1 = require("./pearlDiver/pearlDiver");
/**
 * ProofOfWork implementation using WebGL.
 */
class ProofOfWork {
    /**
     * Create a new instance of ProofOfWork.
     */
    constructor(webGLPlatform) {
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
     */
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
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
     * Performs single conversion per pow call.
     * @returns True if pow only does one conversion.
     */
    performsSingle() {
        return true;
    }
    /**
     * Perform a proof of work on the data.
     * @param trunkTransaction The trunkTransaction to use for the pow.
     * @param branchTransaction The branchTransaction to use for the pow.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */
    pow(trunkTransaction, branchTransaction, trytes, minWeightMagnitude) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._isInitialized) {
                throw new cryptoError_1.CryptoError("WebGL is not initialized, have you called initialize");
            }
            if (!arrayHelper_1.ArrayHelper.isTyped(trytes, trytes_1.Trytes)) {
                throw new cryptoError_1.CryptoError("The trytes must be an array of type Trytes");
            }
            if (!numberHelper_1.NumberHelper.isInteger(minWeightMagnitude) || minWeightMagnitude <= 0) {
                throw new cryptoError_1.CryptoError("The minWeightMagnitude must be > 0");
            }
            const nonce = yield pearlDiver_1.PearlDiver.instance.searchWithTrytes(trytes[0], minWeightMagnitude);
            const trytesString = trytes.toString();
            const nonceString = nonce.toString();
            return [trytes_1.Trytes.fromString(trytesString.substr(0, trytesString.length - nonceString.length).concat(nonceString))];
        });
    }
}
exports.ProofOfWork = ProofOfWork;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvb2ZPZldvcmsuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcHJvb2ZPZldvcmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMEVBQXVFO0FBQ3ZFLDRFQUF5RTtBQUN6RSw0RUFBeUU7QUFDekUsMEVBQXVFO0FBR3ZFLDZEQUEwRDtBQUUxRCx3REFBcUQ7QUFHckQ7O0dBRUc7QUFDSDtJQU9JOztPQUVHO0lBQ0gsWUFBWSxhQUE4QjtRQUN0QyxFQUFFLENBQUMsQ0FBQywyQkFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLGNBQWMsR0FBRztnQkFDbEIsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU07Z0JBQ3ZCLFdBQVcsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVE7Z0JBQ3hDLFNBQVMsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7Z0JBQ3pELFFBQVEsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFO29CQUNqQixNQUFNLElBQUksR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDO29CQUNoRCxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDN0MsTUFBTSxDQUEyQixFQUFFLENBQUM7Z0JBQ3hDLENBQUM7YUFDSixDQUFDO1FBQ04sQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7UUFDeEMsQ0FBQztJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDVSxVQUFVOztZQUNuQixNQUFNLENBQUMsSUFBSSxPQUFPLENBQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQztvQkFDRCx1QkFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQzNDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO29CQUMzQixPQUFPLEVBQUUsQ0FBQztnQkFDZCxDQUFDO2dCQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ1gsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQixDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0tBQUE7SUFFRDs7O09BR0c7SUFDSSxjQUFjO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDVSxHQUFHLENBQUMsZ0JBQXNCLEVBQUUsaUJBQXVCLEVBQUUsTUFBZ0IsRUFBRSxrQkFBMEI7O1lBQzFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLE1BQU0sSUFBSSx5QkFBVyxDQUFDLHNEQUFzRCxDQUFDLENBQUM7WUFDbEYsQ0FBQztZQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMseUJBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLGVBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkMsTUFBTSxJQUFJLHlCQUFXLENBQUMsNENBQTRDLENBQUMsQ0FBQztZQUN4RSxDQUFDO1lBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQywyQkFBWSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLGtCQUFrQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pFLE1BQU0sSUFBSSx5QkFBVyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7WUFDaEUsQ0FBQztZQUVELE1BQU0sS0FBSyxHQUFHLE1BQU0sdUJBQVUsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLGtCQUFrQixDQUFDLENBQUM7WUFFeEYsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3ZDLE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNyQyxNQUFNLENBQUMsQ0FBRSxlQUFNLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFFLENBQUM7UUFDdkgsQ0FBQztLQUFBO0NBQ0o7QUE1RUQsa0NBNEVDIn0=