"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
const stdlib_1 = __importDefault(require("./stdlib"));
const vertexShaderCode_1 = __importDefault(require("./vertexShaderCode"));
const webGLHelper_1 = require("./webGLHelper");
/**
 * WebGLWorker.
 */
class WebGLWorker {
    /**
     * Initialize the web GL Worker.
     * @param stateLength The length of the state.
     * @param texelSize The texel size.
     */
    initialize(stateLength, texelSize) {
        this._context = webGLHelper_1.WebGLHelper.createContext();
        this._dimensions = { x: stateLength, y: 0 };
        const maxImageSize = Math.pow(this._context.MAX_TEXTURE_SIZE, 2) * 0.5;
        const imageSize = Math.floor(maxImageSize / this._dimensions.x / texelSize) * this._dimensions.x * texelSize;
        this._dimensions.y = imageSize / this._dimensions.x / texelSize;
        this._programs = new Map();
        this._ipt = {
            data: new Int32Array(imageSize),
            length: imageSize
        };
        // GPU texture buffer = from JS typed array
        this._buffers = {
            position: webGLHelper_1.WebGLHelper.createBuffer(this._context, [-1, -1, 1, -1, 1, 1, -1, 1]),
            texture: webGLHelper_1.WebGLHelper.createBuffer(this._context, [0, 0, 1, 0, 1, 1, 0, 1]),
            index: webGLHelper_1.WebGLHelper.createBuffer(this._context, [1, 2, 0, 3, 0, 2], Uint16Array, this._context.ELEMENT_ARRAY_BUFFER)
        };
        this._attrib = {
            position: 0,
            texture: 1
        };
        this._vertexArray = this._context.createVertexArray();
        this._context.bindVertexArray(this._vertexArray);
        this.bindBuffers();
        this._context.bindVertexArray(null);
        this.createVertexShader();
        this._frameBuffer = this._context.createFramebuffer();
        this._texture0 = webGLHelper_1.WebGLHelper.createTexture(this._context, this._ipt.data, this._dimensions);
        this._texture1 = webGLHelper_1.WebGLHelper.createTexture(this._context, new Int32Array(imageSize), this._dimensions);
    }
    /**
     * Get the dimensions from the worker.
     * @returns The dimensions.
     */
    getDimensions() {
        return this._dimensions;
    }
    /**
     * Get the IPT from the worker.
     * @return The ipt.
     */
    getIpt() {
        return this._ipt;
    }
    /**
     * Add a program to the worker.
     * @param name The name of the program to add.
     * @param code The code for the program.
     * @param uniforms Additional uniform locations.
     */
    addProgram(name, code, ...uniforms) {
        const fragmentShader = this.createFragmentShader(code);
        const program = this._context.createProgram();
        this._context.attachShader(program, this._vertexShader);
        this._context.attachShader(program, fragmentShader);
        this._context.bindAttribLocation(program, this._attrib.position, "position");
        this._context.bindAttribLocation(program, this._attrib.texture, "texture");
        this._context.linkProgram(program);
        const uniformVars = new Map();
        for (const variable of uniforms) {
            uniformVars.set(variable, this._context.getUniformLocation(program, variable));
        }
        this._programs.set(name, { program, uniformVars });
    }
    /**
     * Run the program in the web worker.
     * @param name The name of the program to run.
     * @param count The number of times to run it.
     * @param uniforms Additional uniform locations to use.
     */
    runProgram(name, count, ...uniforms) {
        const info = this._programs.get(name);
        const program = info.program;
        if (!program) {
            throw new coreError_1.CoreError("Run program does not exist", { name });
        }
        if (!this._context.getProgramParameter(program, this._context.LINK_STATUS)) {
            throw new coreError_1.CoreError("Failed to link GLSL program code");
        }
        const uniformVars = info.uniformVars;
        const uTexture = this._context.getUniformLocation(program, "u_texture");
        this._context.useProgram(program);
        let localCount = count || 0;
        while (localCount-- > 0) {
            this._context.bindTexture(this._context.TEXTURE_2D, this._texture0);
            this._context.activeTexture(this._context.TEXTURE0);
            this._context.uniform1i(uTexture, 0);
            this._context.viewport(0, 0, this._dimensions.x, this._dimensions.y);
            webGLHelper_1.WebGLHelper.frameBufferSetTexture(this._context, this._frameBuffer, this._texture1);
            this._context.bindVertexArray(this._vertexArray);
            for (const uVars of uniforms) {
                this._context.uniform1i(uniformVars.get(uVars.name), uVars.value);
            }
            this._context.drawElements(this._context.TRIANGLES, 6, this._context.UNSIGNED_SHORT, 0);
            const tex0 = this._texture0;
            this._texture0 = this._texture1;
            this._texture1 = tex0;
        }
        this.finishRun();
    }
    /**
     * Read data from the worker.
     * @param x The x position to read from.
     * @param y The y position to read from.
     * @param N The width position to read from.
     * @param M The height position to read from.
     */
    readData(x, y, N, M) {
        this._context.bindFramebuffer(this._context.FRAMEBUFFER, this._frameBuffer);
        this._context.readPixels(x || 0, y || 0, N || this._dimensions.x, M || this._dimensions.y, this._context.RGBA_INTEGER, this._context.INT, this._ipt.data);
        this._context.bindFramebuffer(this._context.FRAMEBUFFER, null);
        return this._ipt.data.subarray(0, this._ipt.length);
    }
    /**
     * Write data to the worker.
     * @param data The data to write.
     */
    writeData(data) {
        this._context.bindTexture(this._context.TEXTURE_2D, this._texture0);
        this._context.texImage2D(this._context.TEXTURE_2D, 0, this._context.RGBA32I, this._dimensions.x, this._dimensions.y, 0, this._context.RGBA_INTEGER, this._context.INT, data);
        this._context.bindTexture(this._context.TEXTURE_2D, null);
    }
    /* @internal */
    bindBuffers() {
        this._context.bindBuffer(this._context.ARRAY_BUFFER, this._buffers.texture);
        this._context.enableVertexAttribArray(this._attrib.texture);
        this._context.vertexAttribPointer(this._attrib.texture, 2, this._context.FLOAT, false, 0, 0);
        this._context.bindBuffer(this._context.ARRAY_BUFFER, this._buffers.position);
        this._context.enableVertexAttribArray(this._attrib.position);
        this._context.vertexAttribPointer(this._attrib.position, 2, this._context.FLOAT, false, 0, 0);
        this._context.bindBuffer(this._context.ELEMENT_ARRAY_BUFFER, this._buffers.index);
    }
    /* @internal */
    createVertexShader() {
        this._vertexShader = this._context.createShader(this._context.VERTEX_SHADER);
        this._context.shaderSource(this._vertexShader, vertexShaderCode_1.default);
        this._context.compileShader(this._vertexShader);
        // This should not fail.
        if (!this._context.getShaderParameter(this._vertexShader, this._context.COMPILE_STATUS)) {
            throw new coreError_1.CoreError(`Could not build internal vertex shader (fatal).

--- CODE DUMP ---${vertexShaderCode_1.default}

--- ERROR LOG ---
${this._context.getShaderInfoLog(this._vertexShader)}`);
        }
    }
    /* @internal */
    createFragmentShader(code) {
        const fragmentShader = this._context.createShader(this._context.FRAGMENT_SHADER);
        this._context.shaderSource(fragmentShader, stdlib_1.default + code);
        this._context.compileShader(fragmentShader);
        // Use this output to debug the shader
        // Keep in mind that WebGL GLSL is **much** stricter than e.g. OpenGL GLSL
        if (!this._context.getShaderParameter(fragmentShader, this._context.COMPILE_STATUS)) {
            const LOC = code.split("\n");
            let dbgMsg = "Could not build shader (fatal).\n\n------------------ KERNEL CODE DUMP ------------------\n";
            for (let nl = 0; nl < LOC.length; nl++) {
                dbgMsg += `${stdlib_1.default.split("\n").length + nl}> ${LOC[nl]}\n`;
            }
            dbgMsg += `\n--------------------- ERROR  LOG ---------------------\n${this._context.getShaderInfoLog(fragmentShader)}`;
            throw new Error(dbgMsg);
        }
        return fragmentShader;
    }
    /* @internal */
    finishRun() {
        this._context.bindVertexArray(null);
        this._context.bindTexture(this._context.TEXTURE_2D, null);
        this._context.bindFramebuffer(this._context.FRAMEBUFFER, null);
    }
}
exports.WebGLWorker = WebGLWorker;
