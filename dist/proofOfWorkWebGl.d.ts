import { ITimeService } from "@iota-pico/core/dist/interfaces/ITimeService";
import { ProofOfWorkBase } from "@iota-pico/crypto/dist/proofOfWork/proofOfWorkBase";
import { Trytes } from "@iota-pico/data/dist/data/trytes";
import { IWebGLPlatform } from "./IWebGLPlatform";
/**
 * ProofOfWork implementation using WebGL.
 */
export declare class ProofOfWorkWebGl extends ProofOfWorkBase {
    /**
     * Create a new instance of ProofOfWork.
     * @param webGLPlatform Provides platform specific functions, optional mostly used for testing.
     * @param timeService Service to get the time for attachments.
     */
    constructor(webGLPlatform?: IWebGLPlatform, timeService?: ITimeService);
    /**
     * Allow the proof of work to perform any initialization.
     * Will throw an exception if the implementation is not supported.
     * @returns Promise.
     */
    initialize(): Promise<void>;
    /**
     * Perform a proof of work on a single item.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */
    singlePow(trytes: Trytes, minWeightMagnitude: number): Promise<Trytes>;
}
