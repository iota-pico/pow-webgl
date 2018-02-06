/**
 * WebGLWorker.
 */
export declare class WebGLWorker {
    /**
     * Initialize the web GL Worker.
     * @param stateLength The length of the state.
     * @param texelSize The texel size.
     */
    initialize(stateLength: number, texelSize: number): void;
    /**
     * Get the dimensions from the worker.
     * @returns The dimensions.
     */
    getDimensions(): {
        x: number;
        y: number;
    };
    /**
     * Get the IPT from the worker.
     * @return The ipt.
     */
    getIpt(): {
        data: Int32Array;
        length: number;
    };
    /**
     * Add a program to the worker.
     * @param name The name of the program to add.
     * @param code The code for the program.
     * @param uniforms Additional uniform locations.
     */
    addProgram(name: string, code: string, ...uniforms: string[]): void;
    /**
     * Run the program in the web worker.
     * @param name The name of the program to run.
     * @param count The number of times to run it.
     * @param uniforms Additional uniform locations to use.
     */
    runProgram(name: string, count: number, ...uniforms: {
        name: string;
        value: any;
    }[]): void;
    /**
     * Read data from the worker.
     * @param x The x position to read from.
     * @param y The y position to read from.
     * @param N The width position to read from.
     * @param M The height position to read from.
     */
    readData(x: number, y: number, N: number, M: number): Int32Array;
    /**
     * Write data to the worker.
     * @param data The data to write.
     */
    writeData(data: ArrayBufferView): void;
}
