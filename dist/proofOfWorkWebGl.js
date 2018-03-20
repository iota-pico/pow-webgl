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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvb2ZPZldvcmtXZWJHbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9vZk9mV29ya1dlYkdsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw0RUFBeUU7QUFDekUsNEVBQXlFO0FBRXpFLDBFQUF1RTtBQUN2RSx3RkFBcUY7QUFDckYsNkRBQTBEO0FBRTFELHdEQUFxRDtBQUdyRDs7R0FFRztBQUNILHNCQUE4QixTQUFRLGlDQUFlO0lBT2pEOzs7O09BSUc7SUFDSCxZQUFZLGFBQThCLEVBQUUsV0FBMEI7UUFDbEUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRW5CLEVBQUUsQ0FBQyxDQUFDLDJCQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsY0FBYyxHQUFHO2dCQUNsQixTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBTTtnQkFDdkIsV0FBVyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUTtnQkFDeEMsU0FBUyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztnQkFDekQsUUFBUSxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUU7b0JBQ2pCLE1BQU0sSUFBSSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUM7b0JBQ2hELE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUM3QyxNQUFNLENBQTJCLEVBQUUsQ0FBQztnQkFDeEMsQ0FBQzthQUNKLENBQUM7UUFDTixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztRQUN4QyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNJLEtBQUssQ0FBQyxVQUFVO1FBQ25CLE1BQU0sS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBTyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUN6QyxJQUFJLENBQUM7Z0JBQ0QsdUJBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztnQkFDM0IsT0FBTyxFQUFFLENBQUM7WUFDZCxDQUFDO1lBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDWCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEIsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFjLEVBQUUsa0JBQTBCO1FBQzdELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDdkIsTUFBTSxJQUFJLHlCQUFXLENBQUMsc0RBQXNELENBQUMsQ0FBQztRQUNsRixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQywyQkFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsZUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sSUFBSSx5QkFBVyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7UUFDekUsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsMkJBQVksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsSUFBSSxrQkFBa0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pFLE1BQU0sSUFBSSx5QkFBVyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7UUFDaEUsQ0FBQztRQUVELE1BQU0sS0FBSyxHQUFHLE1BQU0sdUJBQVUsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFFckYsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3ZDLE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNyQyxNQUFNLENBQUMsZUFBTSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNuSCxDQUFDO0NBQ0o7QUF2RUQsNENBdUVDIn0=