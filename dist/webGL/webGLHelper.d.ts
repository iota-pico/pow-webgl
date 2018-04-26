import { IWebGLPlatform } from "../IWebGLPlatform";
import { WebGLRenderingContextExt } from "./webGLRenderingContextExt";
/**
 * Helper functions for use with WebGL.
 */
export declare class WebGLHelper {
    /**
     * Create a WebGL Context.
     * @param webGLPlatform The platform to create the context with.
     * @returns The context if successfuly or throws an error if it cannot be created.
     */
    static createContext(webGLPlatform: IWebGLPlatform): WebGLRenderingContextExt;
    /**
     * Create a new WebGL buffer.
     * @param gl The WebGL rendering context.
     * @param data The data to add to the buffer.
     * @param arrayType The data type for the buffer.
     * @param target A GL Enum specifying the binding point (target).
     * @returns The WebGL buffer.
     */
    static createBuffer(gl: WebGLRenderingContextExt, data: WebGLBuffer, arrayType?: any, target?: number): WebGLBuffer;
    /**
     * Transfer data onto clamped texture and turn off any filtering
     * @param gl The WebGL rendering context.
     * @param pixelData The pixel data to create the view from.
     * @param dimensions The dimensions to create the texture.
     * @returns The texture.
     */
    static createTexture(gl: WebGLRenderingContextExt, pixelData: ArrayBufferView, dimensions: {
        x: number;
        y: number;
    }): WebGLTexture;
    /**
     * Set the texure into the framebuffer.
     * @param gl The WebGL rendering context.
     * @param frameBuffer The frame buffer to set the text in to.
     * @param texture The texture to set in to the framebuffer.
     */
    static frameBufferSetTexture(gl: WebGLRenderingContextExt, frameBuffer: WebGLFramebuffer, texture: WebGLTexture): void;
}
