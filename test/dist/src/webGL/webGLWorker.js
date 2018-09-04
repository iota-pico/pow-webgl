var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cryptoError_1 = require("@iota-pico/crypto/dist/error/cryptoError");
const stdlib_1 = __importDefault(require("./stdlib"));
const vertexShaderCode_1 = __importDefault(require("./vertexShaderCode"));
const webGLHelper_1 = require("./webGLHelper");
/**
 * WebGLWorker.
 */
class WebGLWorker {
    /**
     * Initialize the web GL Worker.
     * @param webGLPlatform The webGL platform.
     * @param stateLength The length of the state.
     * @param texelSize The texel size.
     */
    initialize(webGLPlatform, stateLength, texelSize) {
        this._context = webGLHelper_1.WebGLHelper.createContext(webGLPlatform);
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
     * @returns The ipt.
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
        if (!this._context.getProgramParameter(program, this._context.LINK_STATUS)) {
            throw new cryptoError_1.CryptoError("Failed to link GLSL program code");
        }
        const uniformVars = info.uniformVars;
        const uTexture = this._context.getUniformLocation(program, "u_texture");
        this._context.useProgram(program);
        let localCount = count;
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
     * @param n The width position to read from.
     * @param m The height position to read from.
     * @returns The data at the requested position.
     */
    readData(x, y, n, m) {
        this._context.bindFramebuffer(this._context.FRAMEBUFFER, this._frameBuffer);
        this._context.readPixels(x, y, n, m, this._context.RGBA_INTEGER, this._context.INT, this._ipt.data);
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
            throw new cryptoError_1.CryptoError(`Could not build vertex shader.

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
            const codeLines = code.split("\n");
            let dbgMsg = "Could not build fragment shader.\n\n------------------ KERNEL CODE DUMP ------------------\n";
            for (let nl = 0; nl < codeLines.length; nl++) {
                dbgMsg += `${stdlib_1.default.split("\n").length + nl}> ${codeLines[nl]}\n`;
            }
            dbgMsg += `\n--------------------- ERROR  LOG ---------------------\n${this._context.getShaderInfoLog(fragmentShader)}`;
            throw new cryptoError_1.CryptoError(dbgMsg);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViR0xXb3JrZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvd2ViR0wvd2ViR0xXb3JrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDBFQUF1RTtBQUV2RSxzREFBOEI7QUFDOUIsMEVBQWtEO0FBQ2xELCtDQUE0QztBQUk1Qzs7R0FFRztBQUNILE1BQWEsV0FBVztJQXdCcEI7Ozs7O09BS0c7SUFDSSxVQUFVLENBQUMsYUFBNkIsRUFBRSxXQUFtQixFQUFFLFNBQWlCO1FBQ25GLElBQUksQ0FBQyxRQUFRLEdBQUcseUJBQVcsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBRTVDLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDdkUsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDO1FBQzdHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUM7UUFFaEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUc7WUFDUixJQUFJLEVBQUUsSUFBSSxVQUFVLENBQUMsU0FBUyxDQUFDO1lBQy9CLE1BQU0sRUFBRSxTQUFTO1NBQ3BCLENBQUM7UUFFRiwyQ0FBMkM7UUFDM0MsSUFBSSxDQUFDLFFB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Q0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTO1FBQ3RELElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksU0FBUyxDQUFDLElBQXFCO1FBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdLLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFR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