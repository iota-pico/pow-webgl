import { CryptoError } from "@iota-pico/crypto/dist/error/cryptoError";
import { IWebGLPlatform } from "../IWebGLPlatform";
import stdlib from "./stdlib";
import vertexShaderCode from "./vertexShaderCode";
import { WebGLHelper } from "./webGLHelper";
import { WebGLRenderingContextExt, WebGLVertexArrayObject } from "./webGLRenderingContextExt";

/**
 * WebGLWorker.
 */
export class WebGLWorker {
    /* @internal */
    private _context: WebGLRenderingContextExt;
    /* @internal */
    private _dimensions: { x: number; y: number };
    /* @internal */
    private _programs: Map<string, { program: WebGLProgram; uniformVars: Map<string, WebGLUniformLocation>}>;
    /* @internal */
    private _ipt: { data: Int32Array; length: number };
    /* @internal */
    private _buffers: { position: WebGLBuffer; texture: WebGLBuffer; index: WebGLBuffer };
    /* @internal */
    private _attrib: { position: number; texture: number };
    /* @internal */
    private _vertexArray: WebGLVertexArrayObject;
    /* @internal */
    private _vertexShader: WebGLShader;
    /* @internal */
    private _frameBuffer: WebGLFramebuffer;
    /* @internal */
    private _texture0: WebGLTexture;
    /* @internal */
    private _texture1: WebGLTexture;

    /**
     * Initialize the web GL Worker.
     * @param webGLPlatform The webGL platform.
     * @param stateLength The length of the state.
     * @param texelSize The texel size.
     */
    public initialize(webGLPlatform: IWebGLPlatform, stateLength: number, texelSize: number): void {
        this._context = WebGLHelper.createContext(webGLPlatform);
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
            position: WebGLHelper.createBuffer(this._context, [-1, -1, 1, -1, 1, 1, -1, 1]),
            texture: WebGLHelper.createBuffer(this._context, [0, 0, 1, 0, 1, 1, 0, 1]),
            index: WebGLHelper.createBuffer(this._context, [1, 2, 0, 3, 0, 2], Uint16Array, this._context.ELEMENT_ARRAY_BUFFER)
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
        this._texture0 = WebGLHelper.createTexture(this._context, this._ipt.data, this._dimensions);
        this._texture1 = WebGLHelper.createTexture(this._context, new Int32Array(imageSize), this._dimensions);
    }

    /**
     * Get the dimensions from the worker.
     * @returns The dimensions.
     */
    public getDimensions(): { x: number; y: number } {
        return this._dimensions;
    }

    /**
     * Get the IPT from the worker.
     * @return The ipt.
     */
    public getIpt(): { data: Int32Array; length: number } {
        return this._ipt;
    }

    /**
     * Add a program to the worker.
     * @param name The name of the program to add.
     * @param code The code for the program.
     * @param uniforms Additional uniform locations.
     */
    public addProgram(name: string, code: string, ...uniforms: string[]): void {
        const fragmentShader = this.createFragmentShader(code);
        const program = this._context.createProgram();

        this._context.attachShader(program, this._vertexShader);
        this._context.attachShader(program, fragmentShader);
        this._context.bindAttribLocation(program, this._attrib.position, "position");
        this._context.bindAttribLocation(program, this._attrib.texture, "texture");
        this._context.linkProgram(program);
        const uniformVars = new Map<string, WebGLUniformLocation>();
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
    public runProgram(name: string, count: number, ...uniforms: { name: string; value: any}[]): void {
        const info = this._programs.get(name);
        const program = info.program;

        if (!this._context.getProgramParameter(program, this._context.LINK_STATUS)) {
            throw new CryptoError("Failed to link GLSL program code");
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
            WebGLHelper.frameBufferSetTexture(this._context, this._frameBuffer, this._texture1);
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
     */
    public readData(x: number, y: number, n: number, m: number): Int32Array {
        this._context.bindFramebuffer(this._context.FRAMEBUFFER, this._frameBuffer);
        this._context.readPixels(x, y, n, m, this._context.RGBA_INTEGER, this._context.INT, this._ipt.data);
        this._context.bindFramebuffer(this._context.FRAMEBUFFER, null);
        return this._ipt.data.subarray(0, this._ipt.length);
    }

    /**
     * Write data to the worker.
     * @param data The data to write.
     */
    public writeData(data: ArrayBufferView): void {
        this._context.bindTexture(this._context.TEXTURE_2D, this._texture0);
        this._context.texImage2D(this._context.TEXTURE_2D, 0, this._context.RGBA32I, this._dimensions.x, this._dimensions.y, 0, this._context.RGBA_INTEGER, this._context.INT, data);
        this._context.bindTexture(this._context.TEXTURE_2D, null);
    }

    /* @internal */
    private bindBuffers(): void {
        this._context.bindBuffer(this._context.ARRAY_BUFFER, this._buffers.texture);
        this._context.enableVertexAttribArray(this._attrib.texture);
        this._context.vertexAttribPointer(this._attrib.texture, 2, this._context.FLOAT, false, 0, 0);
        this._context.bindBuffer(this._context.ARRAY_BUFFER, this._buffers.position);
        this._context.enableVertexAttribArray(this._attrib.position);
        this._context.vertexAttribPointer(this._attrib.position, 2, this._context.FLOAT, false, 0, 0);
        this._context.bindBuffer(this._context.ELEMENT_ARRAY_BUFFER, this._buffers.index);
    }

    /* @internal */
    private createVertexShader(): void {
        this._vertexShader = this._context.createShader(this._context.VERTEX_SHADER);
        this._context.shaderSource(this._vertexShader, vertexShaderCode);
        this._context.compileShader(this._vertexShader);

        // This should not fail.
        if (!this._context.getShaderParameter(this._vertexShader, this._context.COMPILE_STATUS)) {
            throw new CryptoError(
                `Could not build vertex shader.

--- CODE DUMP ---${vertexShaderCode}

--- ERROR LOG ---
${this._context.getShaderInfoLog(this._vertexShader)}`
            );
        }
    }

    /* @internal */
    private createFragmentShader(code: string): WebGLShader {
        const fragmentShader = this._context.createShader(this._context.FRAGMENT_SHADER);

        this._context.shaderSource(fragmentShader, stdlib + code);

        this._context.compileShader(fragmentShader);

        // Use this output to debug the shader
        // Keep in mind that WebGL GLSL is **much** stricter than e.g. OpenGL GLSL
        if (!this._context.getShaderParameter(fragmentShader, this._context.COMPILE_STATUS)) {
            const codeLines = code.split("\n");
            let dbgMsg = "Could not build fragment shader.\n\n------------------ KERNEL CODE DUMP ------------------\n";

            for (let nl = 0; nl < codeLines.length; nl++) {
                dbgMsg += `${stdlib.split("\n").length + nl}> ${codeLines[nl]}\n`;
            }

            dbgMsg += `\n--------------------- ERROR  LOG ---------------------\n${this._context.getShaderInfoLog(fragmentShader)}`;

            throw new CryptoError(dbgMsg);
        }
        return fragmentShader;
    }

    /* @internal */
    private finishRun(): void {
        this._context.bindVertexArray(null);
        this._context.bindTexture(this._context.TEXTURE_2D, null);
        this._context.bindFramebuffer(this._context.FRAMEBUFFER, null);
    }
}
