import { Trytes } from "@iota-pico/data/dist/data/trytes";
import { PearlDiverSearchStates } from "./pearlDiverSearchStates";

/**
 * PearlDiverSearchObject to maintain information during search.
 */
export type PearlDiverSearchObject = {
    states: PearlDiverSearchStates;
    minWeightMagnitude: number;
    callback(result: Trytes): void;
};
