"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * PearlDiver State.
 */
var PearlDiverState;
(function (PearlDiverState) {
    PearlDiverState[PearlDiverState["ready"] = 0] = "ready";
    PearlDiverState[PearlDiverState["searching"] = 1] = "searching";
    PearlDiverState[PearlDiverState["interrupted"] = -1] = "interrupted";
})(PearlDiverState = exports.PearlDiverState || (exports.PearlDiverState = {}));
