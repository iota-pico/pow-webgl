/**
 * Extension to the current definition of WebGLRenderingContext.
 */
export interface WebGLRenderingContextExt extends WebGLRenderingContext {
    readonly RGBA_INTEGER: number;
    readonly RGBA32I: number;
    createVertexArray(): WebGLVertexArrayObject;
    bindVertexArray(vertexAray: WebGLVertexArrayObject): void;
    deleteVertexArray(vertexArray: WebGLVertexArrayObject): void;
    isVertexArray(vertexArray: WebGLVertexArrayObject): boolean;
}
export interface WebGLVertexArrayObject extends WebGLObject {
}
