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
     */
    async initialize() {
        await super.initialize();
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
    }
    /**
     * Perform a proof of work on a single item.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */
    async singlePow(trytes, minWeightMagnitude) {
        if (!this._isInitialized) {
            throw new cryptoError_1.CryptoError("WebGL is not initialized, have you called initialize");
        }
        if (!objectHelper_1.ObjectHelper.isType(trytes, trytes_1.Trytes)) {
            throw new cryptoError_1.CryptoError("The trytes must be an object of type Trytes");
        }
        if (!numberHelper_1.NumberHelper.isInteger(minWeightMagnitude) || minWeightMagnitude <= 0) {
            throw new cryptoError_1.CryptoError("The minWeightMagnitude must be > 0");
        }
        const nonce = await pearlDiver_1.PearlDiver.instance.searchWithTrytes(trytes, minWeightMagnitude);
        const trytesString = trytes.toString();
        const nonceString = nonce.toString();
        return trytes_1.Trytes.fromString(trytesString.substr(0, trytesString.length - nonceString.length).concat(nonceString));
    }
}
exports.ProofOfWorkWebGl = ProofOfWorkWebGl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvb2ZPZldvcmtXZWJHbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9vZk9mV29ya1dlYkdsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw0RUFBeUU7QUFDekUsNEVBQXlFO0FBRXpFLDBFQUF1RTtBQUN2RSx3RkFBcUY7QUFDckYsNkRBQTBEO0FBRTFELHdEQUFxRDtBQUdyRDs7R0FFRztBQUNILHNCQUE4QixTQUFRLGlDQUFlO0lBT2pEOzs7O09BSUc7SUFDSCxZQUFZLGFBQThCLEVBQUUsV0FBMEI7UUFDbEUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRW5CLElBQUksMkJBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDckMsSUFBSSxDQUFDLGNBQWMsR0FBRztnQkFDbEIsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU07Z0JBQ3ZCLFdBQVcsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVE7Z0JBQ3hDLFNBQVMsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7Z0JBQ3pELFFBQVEsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFO29CQUNqQixNQUFNLElBQUksR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDO29CQUNoRCxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDN0MsT0FBaUMsRUFBRSxDQUFDO2dCQUN4QyxDQUFDO2FBQ0osQ0FBQztTQUNMO2FBQU07WUFDSCxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztTQUN2QztJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSSxLQUFLLENBQUMsVUFBVTtRQUNuQixNQUFNLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN6QixPQUFPLElBQUksT0FBTyxDQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3pDLElBQUk7Z0JBQ0EsdUJBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztnQkFDM0IsT0FBTyxFQUFFLENBQUM7YUFDYjtZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNWLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNmO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQWMsRUFBRSxrQkFBMEI7UUFDN0QsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdEIsTUFBTSxJQUFJLHlCQUFXLENBQUMsc0RBQXNELENBQUMsQ0FBQztTQUNqRjtRQUNELElBQUksQ0FBQywyQkFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsZUFBTSxDQUFDLEVBQUU7WUFDdEMsTUFBTSxJQUFJLHlCQUFXLENBQUMsNkNBQTZDLENBQUMsQ0FBQztTQUN4RTtRQUNELElBQUksQ0FBQywyQkFBWSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLGtCQUFrQixJQUFJLENBQUMsRUFBRTtZQUN4RSxNQUFNLElBQUkseUJBQVcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1NBQy9EO1FBRUQsTUFBTSxLQUFLLEdBQUcsTUFBTSx1QkFBVSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUVyRixNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkMsTUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3JDLE9BQU8sZUFBTSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNuSCxDQUFDO0NBQ0o7QUF2RUQsNENBdUVDIn0=