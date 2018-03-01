import { NumberHelper } from "@iota-pico/core/dist/helpers/numberHelper";
import { CryptoError } from "@iota-pico/crypto/dist/error/cryptoError";
import { IProofOfWork } from "@iota-pico/crypto/dist/interfaces/IProofOfWork";
import { Trytes } from "@iota-pico/data/dist/data/trytes";
import { PearlDiver } from "./pearlDiver/pearlDiver";

/**
 * ProofOfWork implementation using WebGL.
 */
export class ProofOfWork implements IProofOfWork {
    /**
     * Allow the proof of work to perform any initialization.
     * Will throw an exception if the implementation is not supported.
     */
    public async initialize(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            try {
                PearlDiver.initialize();
                resolve();
            } catch (err) {
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
    public async pow(trytes: Trytes, minWeightMagnitude: number): Promise<Trytes> {
        if (trytes === undefined || trytes === null) {
            throw new CryptoError("Trytes can not be null or undefined");
        }
        if (!NumberHelper.isInteger(minWeightMagnitude)) {
            throw new CryptoError("The minWeightMagnitude value is not an integer");
        }
        const nonce = await PearlDiver.instance.searchWithTrytes(trytes, minWeightMagnitude);

        const trytesString = trytes.toString();
        const nonceString = nonce.toString();
        return Trytes.fromString(trytesString.substr(0, trytesString.length - nonceString.length).concat(nonceString));
    }
}
