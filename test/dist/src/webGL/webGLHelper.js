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
                throw new cryptoError_1.CryptoError("The HTML5 <canvas> element is not available in your browser.", { userAgent: window.navigator.userAgent });
            }
            throw new cryptoError_1.CryptoError("window.document is not available, you must be running in an environment with WebGL.");
        }
        throw new cryptoError_1.CryptoError("window is not available, you must be running in an environment with WebGL.");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViR0xIZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvd2ViR0wvd2ViR0xIZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDRFQUF5RTtBQUN6RSwwRUFBdUU7QUFJdkU7O0dBRUc7QUFDSCxNQUFhLFdBQVc7SUFDcEI7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxhQUFhLENBQUMsYUFBNkI7UUFDckQsTUFBTSxNQUFNLEdBQUcsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRXpDLElBQUksQ0FBQywyQkFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7WUFDaEUsTUFBTSxRQUFRLEdBQUcsYUFBYSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUVuRCxJQUFJLENBQUMsMkJBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ2pDLE1BQU0sTUFBTSxHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBRWpELElBQUksQ0FBQywyQkFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDL0IsTUFBTSxFQUFFLEdBQUcsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFFMUMsSUFBSSwyQkFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRTt3QkFDMUIsTUFBTSxJQUFJLHlCQUFXLENBQUMsdURBQXVELEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO3FCQUM3SDtvQkFFRCxPQUFPLEVBQUUsQ0FBQztpQkFDYjtnQkFFRCxNQUFNLElBQUkseUJBQVcsQ0FBQyw4REFBOEQsRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7YUFDcEk7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