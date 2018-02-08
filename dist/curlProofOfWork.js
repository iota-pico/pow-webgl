"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
const numberHelper_1 = require("@iota-pico/core/dist/helpers/numberHelper");
const trytes_1 = require("@iota-pico/data/dist/data/trytes");
const pearlDiver_1 = require("./pearlDiver/pearlDiver");
/**
 * CurlProofOfWork implementation using WebGL.
 */
class CurlProofOfWork {
    /**
     * Allow the proof of work to perform any initialization.
     * Will throw an exception if the implementation is not supported.
     */
    async initialize() {
        return new Promise((resolve, reject) => {
            try {
                pearlDiver_1.PearlDiver.initialize();
                resolve();
            }
            catch (err) {
                reject(err);
            }
        });
    }
    /**
     * Perform a proof of work on the data.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */
    async pow(trytes, minWeightMagnitude) {
        if (trytes === undefined || trytes === null) {
            throw new coreError_1.CoreError("Trytes can not be null or undefined");
        }
        if (!numberHelper_1.NumberHelper.isInteger(minWeightMagnitude)) {
            throw new coreError_1.CoreError("The minWeightMagnitude value is not an integer");
        }
        const nonce = await pearlDiver_1.PearlDiver.instance.searchWithTrytes(trytes, minWeightMagnitude);
        const trytesString = trytes.toString();
        const nonceString = nonce.toString();
        return trytes_1.Trytes.create(trytesString.substr(0, trytesString.length - nonceString.length).concat(nonceString));
    }
}
exports.CurlProofOfWork = CurlProofOfWork;
