import { NumberHelper } from "@iota-pico/core/dist/helpers/numberHelper";
import { ObjectHelper } from "@iota-pico/core/dist/helpers/objectHelper";
import { ITimeService } from "@iota-pico/core/dist/interfaces/ITimeService";
import { CryptoError } from "@iota-pico/crypto/dist/error/cryptoError";
import { ProofOfWorkBase } from "@iota-pico/crypto/dist/proofOfWork/proofOfWorkBase";
import { Trytes } from "@iota-pico/data/dist/data/trytes";
import { IWebGLPlatform } from "./IWebGLPlatform";
import { PearlDiver } from "./pearlDiver/pearlDiver";
import { WebGLRenderingContextExt } from "./webGL/webGLRenderingContextExt";

/**
 * ProofOfWork implementation using WebGL.
 */
export class ProofOfWorkWebGl extends ProofOfWorkBase {
    /* @internal */
    private readonly _webGLPlatform: IWebGLPlatform;

    /* @internal */
    private _isInitialized: boolean;

    /**
     * Create a new instance of ProofOfWork.
     * @param webGLPlatform Provides platform specific functions, optional mostly used for testing.
     * @param timeService Service to get the time for attachments.
     */
    constructor(webGLPlatform?: IWebGLPlatform, timeService?: ITimeService) {
        super(timeService);

        if (ObjectHelper.isEmpty(webGLPlatform)) {
            this._webGLPlatform = {
                getWindow: () => window,
                getDocument: (window) => window.document,
                getCanvas: (document) => document.createElement("canvas"),
                getWebGL: (canvas) => {
                    const attr = { alpha: false, antialias: false };
                    const gl = canvas.getContext("webgl2", attr);
                    return <WebGLRenderingContextExt>gl;
                }
            };
        } else {
            this._webGLPlatform = webGLPlatform;
        }
    }

    /**
     * Allow the proof of work to perform any initialization.
     * Will throw an exception if the implementation is not supported.
     * @returns Promise.
     */
    public async initialize(): Promise<void> {
        await super.initialize();
        return new Promise<void>((resolve, reject) => {
            try {
                PearlDiver.initialize(this._webGLPlatform);
                this._isInitialized = true;
                resolve();
            } catch (err) {
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
    public async singlePow(trytes: Trytes, minWeightMagnitude: number): Promise<Trytes> {
        if (!this._isInitialized) {
            throw new CryptoError("WebGL is not initialized, have you called initialize");
        }
        if (!ObjectHelper.isType(trytes, Trytes)) {
            throw new CryptoError("The trytes must be an object of type Trytes");
        }
        if (!NumberHelper.isInteger(minWeightMagnitude) || minWeightMagnitude <= 0) {
            throw new CryptoError("The minWeightMagnitude must be > 0");
        }

        const nonce = await PearlDiver.instance.searchWithTrytes(trytes, minWeightMagnitude);

        const trytesString = trytes.toString();
        const nonceString = nonce.toString();
        return Trytes.fromString(trytesString.substr(0, trytesString.length - nonceString.length).concat(nonceString));
    }
}
