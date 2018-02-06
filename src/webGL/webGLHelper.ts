import { CoreError } from "@iota-pico/core/dist/error/coreError";
import { WebGLRenderingContextExt } from "./webGLRenderingContextExt";

/**
 * Helper functions for use with WebGL.
 */
export class WebGLHelper {
    /**
     * Create a WebGL Context.
     * @returns The context if successfuly or throws an error if it cannot be created.
     */
    public static createContext(): WebGLRenderingContextExt {
        const canvas = document.createElement("canvas");
        const attr = { alpha: false, antialias: false };

        const gl = canvas.getContext("webgl2", attr) || canvas.getContext("experimental-webgl2", attr);

        if (!gl) {
            throw new CoreError("Unable to initialize WebGL.", { userAgent: window.navigator.userAgent });
        }

        return <WebGLRenderingContextExt>gl;
    }

    /**
     * Create a new WebGL buffer.
     * @param gl The WebGL rendering context.
     * @param data The data to add to the buffer.
     * @param arrayType The data type for the buffer.
     * @param target A GL Enum specifying the binding point (target).
     * @returns The WebGL buffer.
     */
    public static createBuffer(gl: WebGLRenderingContextExt, data: WebGLBuffer, arrayType?: any, target?: number): WebGLBuffer {
        const buf = gl.createBuffer();

        gl.bindBuffer((target || gl.ARRAY_BUFFER), buf);
        gl.bufferData((target || gl.ARRAY_BUFFER), new (arrayType || Float32Array)(data), gl.STATIC_DRAW);

        return buf;
    }

    /**
     * Transfer data onto clamped texture and turn off any filtering
     * @param gl The WebGL rendering context.
     * @param pixelData The pixel data to create the view from.
     * @param dimensions The dimensions to create the texture.
     * @returns The texture.
     */
    public static createTexture(gl: WebGLRenderingContextExt, pixelData: ArrayBufferView, dimensions: { x: number; y: number}): WebGLTexture {
        const texture = gl.createTexture();

        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32I, dimensions.x, dimensions.y, 0, gl.RGBA_INTEGER, gl.INT, pixelData);
        gl.bindTexture(gl.TEXTURE_2D, null);

        return texture;
    }

    /**
     * Get a shader source from the dom element.
     * @param id The id of the dom element.
     * @returns The shader source from the dom element.
     */
    public static getShaderSource(id: string): string {
        return document.getElementById(id).textContent.replace(/^\s+|\s+$/g, "");
    }

    /**
     * Create a shader.
     * @param gl The WebGL rendering context.
     * @param source The source for the shader.
     * @param type Either gl.VERTEX_SHADER or gl.FRAGMENT_SHADER.
     * @returns The shader.
     */
    public static createShader(gl: WebGLRenderingContextExt, source: string, type: number): WebGLShader {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        return shader;
    }

    /**
     * Create a program on the WebGL context.
     * @param gl The WebGL rendering context.
     * @param vertexShaderSource The source for the vertex shader.
     * @param fragmentShaderSource The source for the fragment shader.
     * @param debugLog Output the information to a debug log.
     * @returns A WebGL Program.
     */
    public static createProgram(gl: WebGLRenderingContextExt, vertexShaderSource: string, fragmentShaderSource: string, debugLog?: (message: string) => void): WebGLProgram {
        const program = gl.createProgram();
        const vshader = WebGLHelper.createShader(gl, vertexShaderSource, gl.VERTEX_SHADER);
        const fshader = WebGLHelper.createShader(gl, fragmentShaderSource, gl.FRAGMENT_SHADER);
        gl.attachShader(program, vshader);
        gl.deleteShader(vshader);
        gl.attachShader(program, fshader);
        gl.deleteShader(fshader);
        gl.linkProgram(program);

        if (debugLog) {
            let log = gl.getProgramInfoLog(program);
            if (log) {
                debugLog(log);
            }

            log = gl.getShaderInfoLog(vshader);
            if (log) {
                debugLog(log);
            }

            log = gl.getShaderInfoLog(fshader);
            if (log) {
                debugLog(log);
            }
        }

        return program;
    }

    /**
     * Set the texure into the framebuffer.
     * @param gl The WebGL rendering context.
     * @param frameBuffer The frame buffer to set the text in to.
     * @param texture The texture to set in to the framebuffer.
     */
    public static frameBufferSetTexture(gl: WebGLRenderingContextExt, frameBuffer: WebGLFramebuffer, texture: WebGLTexture): void {
        gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);

        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);

        // Test for mobile bug MDN->WebGL_best_practices, bullet 7
        const frameBufferStatus = gl.checkFramebufferStatus(gl.FRAMEBUFFER);

        if (frameBufferStatus !== gl.FRAMEBUFFER_COMPLETE) {
            throw new CoreError("Error attaching float texture to framebuffer. Your device is probably incompatible.");
        }
    }
}
