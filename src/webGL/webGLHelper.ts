import { ObjectHelper } from "@iota-pico/core/dist/helpers/objectHelper";
import { CryptoError } from "@iota-pico/crypto/dist/error/cryptoError";
import { IWebGLPlatform } from "../IWebGLPlatform";
import { WebGLRenderingContextExt } from "./webGLRenderingContextExt";

/**
 * Helper functions for use with WebGL.
 */
export class WebGLHelper {
    /**
     * Create a WebGL Context.
     * @returns The context if successfuly or throws an error if it cannot be created.
     */
    public static createContext(webGLPlatform: IWebGLPlatform): WebGLRenderingContextExt {
        const window = webGLPlatform.getWindow();

        if (!ObjectHelper.isEmpty(window) && typeof window !== "undefined") {
            const document = webGLPlatform.getDocument(window);

            if (!ObjectHelper.isEmpty(document)) {
                const canvas = webGLPlatform.getCanvas(document);

                if (!ObjectHelper.isEmpty(canvas)) {
                    const gl = webGLPlatform.getWebGL(canvas);

                    if (ObjectHelper.isEmpty(gl)) {
                        throw new CryptoError("Can not create a WebGL context on a <canvas> element.", { userAgent: window.navigator.userAgent });
                    }

                    return gl;
                } else {
                    throw new CryptoError("The HTML5 <canvas> element is not available in your browser.", { userAgent: window.navigator.userAgent });
                }
            } else {
                throw new CryptoError("window.document is not available, you must be running in an environment with WebGL.");
            }
        } else {
            throw new CryptoError("window is not available, you must be running in an environment with WebGL.");
        }
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
    public static createTexture(gl: WebGLRenderingContextExt, pixelData: ArrayBufferView, dimensions: { x: number; y: number }): WebGLTexture {
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
            throw new CryptoError("Error attaching float texture to framebuffer. Your device is probably incompatible.");
        }
    }
}
