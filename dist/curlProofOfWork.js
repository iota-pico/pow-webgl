"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pearlDiver_1 = require("./pearlDiver/pearlDiver");
/**
 * CurlProofOfWork implementation using WebGL.
 */
class CurlProofOfWork {
    /**
     * Allow the proof of work to perform any initialization.
     * Will throw an exception if the implementation is not supported.
     */
    initialize() {
        pearlDiver_1.PearlDiver.initialize();
    }
    /**
     * Perform a proof of work on the data.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */
    async pow(trytes, minWeightMagnitude) {
        return pearlDiver_1.PearlDiver.instance.searchWithTrytes(trytes, minWeightMagnitude);
    }
}
exports.CurlProofOfWork = CurlProofOfWork;
