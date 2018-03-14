import { WebGLVertexArrayObject } from "./webGLVertexArrayObject";

/**
 * Extension to the current definition of WebGLRenderingContext.
 * @interface
 */

// tslint:disable-next-line:interface-name
export interface WebGLRenderingContextExt extends WebGLRenderingContext {
    readonly RGBA_INTEGER: number; // 0x8D99
    readonly RGBA32I: number; // 0x8D82

    createVertexArray(): WebGLVertexArrayObject;
    bindVertexArray(vertexAray: WebGLVertexArrayObject): void;
    deleteVertexArray(vertexArray: WebGLVertexArrayObject): void;
    isVertexArray(vertexArray: WebGLVertexArrayObject): boolean;
}
