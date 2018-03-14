import { ArrayHelper } from "@iota-pico/core/dist/helpers/arrayHelper";
import { NumberHelper } from "@iota-pico/core/dist/helpers/numberHelper";
import { ObjectHelper } from "@iota-pico/core/dist/helpers/objectHelper";
import { CryptoError } from "@iota-pico/crypto/dist/error/cryptoError";
import { IProofOfWork } from "@iota-pico/crypto/dist/interfaces/IProofOfWork";
import { Hash } from "@iota-pico/data/dist/data/hash";
import { Trytes } from "@iota-pico/data/dist/data/trytes";
import { IWebGLPlatform } from "./IWebGLPlatform";
import { PearlDiver } from "./pearlDiver/pearlDiver";
import { WebGLRenderingContextExt } from "./webGL/webGLRenderingContextExt";

/**
 * ProofOfWork implementation using WebGL.
 */
export class ProofOfWorkWebGl implements IProofOfWork {
    /* @internal */
    private readonly _webGLPlatform: IWebGLPlatform;

    /* @internal */
    private _isInitialized: boolean;

    /**
     * Create a new instance of ProofOfWork.
     * @param webGLPlatform Provides platform specific functions, optional mostly used for testing.
     */
    constructor(webGLPlatform?: IWebGLPlatform) {
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
     */
    public async initialize(): Promise<void> {
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
     * Performs single conversion per pow call.
     * @returns True if pow only does one conversion.
     */
    public performsSingle(): boolean {
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
    public async pow(trunkTransaction: Hash, branchTransaction: Hash, trytes: Trytes[], minWeightMagnitude: number): Promise<Trytes[]> {
        if (!this._isInitialized) {
            throw new CryptoError("WebGL is not initialized, have you called initialize");
        }
        if (!ArrayHelper.isTyped(trytes, Trytes)) {
            throw new CryptoError("The trytes must be an array of type Trytes");
        }
        if (!NumberHelper.isInteger(minWeightMagnitude) || minWeightMagnitude <= 0) {
            throw new CryptoError("The minWeightMagnitude must be > 0");
        }

        const singleTrytes = trytes[0];

        const nonce = await PearlDiver.instance.searchWithTrytes(singleTrytes, minWeightMagnitude);

        const trytesString = singleTrytes.toString();
        const nonceString = nonce.toString();
        return [ Trytes.fromString(trytesString.substr(0, trytesString.length - nonceString.length).concat(nonceString)) ];
    }
}
