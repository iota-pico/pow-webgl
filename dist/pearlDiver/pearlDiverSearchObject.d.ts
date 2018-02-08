import { Trytes } from "@iota-pico/data/dist/data/trytes";
import { PearlDiverSearchStates } from "./pearlDiverSearchStates";
/**
 * PearlDiverSearchObject to maintain information during search.
 */
export declare type PearlDiverSearchObject = {
    states: PearlDiverSearchStates;
    minWeightMagnitude: number;
    callback(nonce: Trytes): void;
};
