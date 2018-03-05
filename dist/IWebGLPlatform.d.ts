import { WebGLRenderingContextExt } from "./webGL/webGLRenderingContextExt";
/**
 * IWebGLPlatform interface.
 */
export interface IWebGLPlatform {
    getWindow(): Window;
    getDocument(window: Window): Document;
    getCanvas(document: Document): HTMLCanvasElement;
    getWebGL(canvas: HTMLCanvasElement): WebGLRenderingContextExt;
}
