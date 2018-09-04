var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const numberHelper_1 = require("@iota-pico/core/dist/helpers/numberHelper");
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
const cryptoError_1 = require("@iota-pico/crypto/dist/error/cryptoError");
const proofOfWorkBase_1 = require("@iota-pico/crypto/dist/proofOfWork/proofOfWorkBase");
const trytes_1 = require("@iota-pico/data/dist/data/trytes");
const pearlDiver_1 = require("./pearlDiver/pearlDiver");
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvb2ZPZldvcmtXZWJHbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wcm9vZk9mV29ya1dlYkdsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDRFQUF5RTtBQUN6RSw0RUFBeUU7QUFFekUsMEVBQXVFO0FBQ3ZFLHdGQUFxRjtBQUNyRiw2REFBMEQ7QUFFMUQsd0RBQXFEO0FBR3JEOztHQUVHO0FBQ0gsTUFBYSxnQkFBaUIsU0FBUSxpQ0FBZTtJQU9qRDs7OztPQUlHO0lBQ0gsWUFBWSxhQUE4QixFQUFFLFdBQTBCO1FBQ2xFLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVuQixJQUFJLDJCQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxjQUFjLEdBQUc7Z0JBQ2xCLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNO2dCQUN2QixXQUFXLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRO2dCQUN4QyxTQUFTLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO2dCQUN6RCxRQUFRLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRTtvQkFDakIsTUFBTSxJQUFJLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQztvQkFDaEQsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQzdDLE9BQWlDLEVBQUUsQ0FBQztnQkFDeEMsQ0FBQzthQUNKLENBQUM7U0FDTDthQUFNO1lBQ0gsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7U0FDdkM7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNVLFVBQVU7OztZQUNuQixNQUFNLG9CQUFnQixXQUFFLENBQUM7WUFDekIsT0FBTyxJQUFJLE9BQU8sQ0FBTyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDekMsSUFBSTtvQkFDQSx1QkFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQzNDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO29CQUMzQixPQUFPLEVBQUUsQ0FBQztpQkFDYjtnQkFBQyxPQUFPLEdBQUcsRUFBRTtvQkFDVixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ2Y7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7S0FBQTtJQUVEOzs7OztPQUtHO0lBQ1UsU0FBUyxDQUFDLE1BQWMsRUFBRSxrQkFBMEI7O1lBQzdELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUN0QixNQUFNLElBQUkseUJBQVcsQ0FBQyxzREFBc0QsQ0FBQyxDQUFDO2FBQ2pGO1lBQ0QsSUFBSSxDQUFDLDJCQUFZLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxlQUFNLENBQUMsRUFBRTtnQkFDdEMsTUFBTSxJQUFJLHlCQUFXLENBQUMsNkNBQTZDLENBQUMsQ0FBQzthQUN4RTtZQUNELElBQUksQ0FBQywyQkFBWSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLGtCQUFrQixJQUFJLENBQUMsRUFBRTtnQkFDeEUsTUFBTSxJQUFJLHlCQUFXLENBQUMsb0NBQW9DLENBQUMsQ0FBQzthQUMvRDtZQUVELE1BQU0sS0FBSyxHQUFHLE1BQU0sdUJBQVUsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLGtCQUFrQixDQUFDLENBQUM7WUFFckYsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3ZDLE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNyQyxPQUFPLGVBQU0sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDbkgsQ0FBQztLQUFBO0NBQ0o7QUF4RUQsNENBd0VDIn0=