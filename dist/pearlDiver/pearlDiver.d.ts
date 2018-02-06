import { Trytes } from "@iota-pico/data/dist/data/trytes";
/**
 * PearlDiver.
 * Converted from https://github.com/iotaledger/curl.lib.js/blob/master/src/pearldiver.js
 */
export declare class PearlDiver {
    static instance: PearlDiver;
    /**
     * Intialize the PearlDiver main instance.
     */
    static initialize(): void;
    /**
     * Perform a search using trytes.
     * @param trytes The trytes to perform the search on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns Promise which resolves to the trytes from the search.
     */
    searchWithTrytes(trytes: Trytes, minWeightMagnitude: number): Promise<Trytes>;
    /**
     * Sets an offset to start pow search from
     * @param offset The offset to start the search from.
     */
    setOffset(offset: number): void;
    /**
     * Interrupts the currently running proof-of-work function.
     */
    interrupt(): void;
    /**
     * Continues the proof-of-work that you just interrupted.
     */
    resume(): void;
    /**
     * Removes the proof-of-work job that you had previously queued.
     */
    remove(): void;
}
