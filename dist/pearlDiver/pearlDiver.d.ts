import { Trytes } from "@iota-pico/data/dist/data/trytes";
import { IWebGLPlatform } from "../IWebGLPlatform";
/**
 * PearlDiver.
 * Converted from https://github.com/iotaledger/curl.lib.js/blob/master/src/pearldiver.js
 */
export declare class PearlDiver {
    static instance: PearlDiver;
    /**
     * Initialize the PearlDiver main instance.
     * @param webGLPlatform The platform so initialize the pearl diver with.
     */
    static initialize(webGLPlatform: IWebGLPlatform): void;
    /**
     * Closedown the PearlDiver main instance.
     */
    static closedown(): void;
    /**
     * Perform a search using trytes.
     * @param trytes The trytes to perform the search on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns Promise which resolves to the trytes from the search.
     */
    searchWithTrytes(trytes: Trytes, minWeightMagnitude: number): Promise<Trytes>;
}
