Object.defineProperty(exports, "__esModule", { value: true });
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
const cryptoError_1 = require("@iota-pico/crypto/dist/error/cryptoError");
/**
 * Helper functions for use with WebGL.
 */
class WebGLHelper {
    /**
     * Create a WebGL Context.
     * @param webGLPlatform The platform to create the context with.
     * @returns The context if successfuly or throws an error if it cannot be created.
     */
    static createContext(webGLPlatform) {
        const window = webGLPlatform.getWindow();
        if (!objectHelper_1.ObjectHelper.isEmpty(window) && typeof window !== "undefined") {
            const document = webGLPlatform.getDocument(window);
            if (!objectHelper_1.ObjectHelper.isEmpty(document)) {
                const canvas = webGLPlatform.getCanvas(document);
                if (!objectHelper_1.ObjectHelper.isEmpty(canvas)) {
                    const gl = webGLPlatform.getWebGL(canvas);
                    if (objectHelper_1.ObjectHelper.isEmpty(gl)) {
                        throw new cryptoError_1.CryptoError("Can not create a WebGL context on a <canvas> element.", { userAgent: window.navigator.userAgent });
                    }
                    return gl;
                }
                else {
                    throw new cryptoError_1.CryptoError("The HTML5 <canvas> element is not available in your browser.", { userAgent: window.navigator.userAgent });
                }
            }
            else {
                throw new cryptoError_1.CryptoError("window.document is not available, you must be running in an environment with WebGL.");
            }
        }
        else {
            throw new cryptoError_1.CryptoError("window is not available, you must be running in an environment with WebGL.");
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
    static createBuffer(gl, data, arrayType, target) {
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
    static createTexture(gl, pixelData, dimensions) {
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
    static frameBufferSetTexture(gl, frameBuffer, texture) {
        gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
        // Test for mobile bug MDN->WebGL_best_practices, bullet 7
        const frameBufferStatus = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
        if (frameBufferStatus !== gl.FRAMEBUFFER_COMPLETE) {
            throw new cryptoError_1.CryptoError("Error attaching float texture to framebuffer. Your device is probably incompatible.");
        }
    }
}
exports.WebGLHelper = WebGLHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViR0xIZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvd2ViR0wvd2ViR0xIZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDRFQUF5RTtBQUN6RSwwRUFBdUU7QUFJdkU7O0dBRUc7QUFDSDtJQUNJOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsYUFBYSxDQUFDLGFBQTZCO1FBQ3JELE1BQU0sTUFBTSxHQUFHLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUV6QyxJQUFJLENBQUMsMkJBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO1lBQ2hFLE1BQU0sUUFBUSxHQUFHLGFBQWEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFbkQsSUFBSSxDQUFDLDJCQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNqQyxNQUFNLE1BQU0sR0FBRyxhQUFhLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUVqRCxJQUFJLENBQUMsMkJBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7b0JBQy9CLE1BQU0sRUFBRSxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBRTFDLElBQUksMkJBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUU7d0JBQzFCLE1BQU0sSUFBSSx5QkFBVyxDQUFDLHVEQUF1RCxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztxQkFDN0g7b0JBRUQsT0FBTyxFQUFFLENBQUM7aUJBQ2I7cUJBQU07b0JBQ0gsTUFBTSxJQUFJLHlCQUFXLENBQUMsOERBQThELEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO2lCQUNwSTthQUNKO2lCQUFN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