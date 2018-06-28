[@iota-pico/pow-webgl](../README.md) > [WebGLHelper](../classes/webglhelper.md)

# Class: WebGLHelper

Helper functions for use with WebGL.

## Hierarchy

**WebGLHelper**

## Index

### Methods

* [createBuffer](webglhelper.md#createbuffer)
* [createContext](webglhelper.md#createcontext)
* [createTexture](webglhelper.md#createtexture)
* [frameBufferSetTexture](webglhelper.md#framebuffersettexture)

---

## Methods

<a id="createbuffer"></a>

### `<Static>` createBuffer

▸ **createBuffer**(gl: *[WebGLRenderingContextExt](../interfaces/webglrenderingcontextext.md)*, data: *`WebGLBuffer`*, arrayType?: *`any`*, target?: *`number`*): `WebGLBuffer`

*Defined in [webGL/webGLHelper.ts:51](https://github.com/iota-pico/pow-webgl/tree/master/src/webGL/webGLHelper.ts#L51*

Create a new WebGL buffer.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| gl | [WebGLRenderingContextExt](../interfaces/webglrenderingcontextext.md) |  The WebGL rendering context. |
| data | `WebGLBuffer` |  The data to add to the buffer. |
| `Optional` arrayType | `any` |  The data type for the buffer. |
| `Optional` target | `number` |  A GL Enum specifying the binding point (target). |

**Returns:** `WebGLBuffer`
The WebGL buffer.

___
<a id="createcontext"></a>

### `<Static>` createContext

▸ **createContext**(webGLPlatform: *[IWebGLPlatform](../interfaces/iwebglplatform.md)*): [WebGLRenderingContextExt](../interfaces/webglrenderingcontextext.md)

*Defined in [webGL/webGLHelper.ts:15](https://github.com/iota-pico/pow-webgl/tree/master/src/webGL/webGLHelper.ts#L15*

Create a WebGL Context.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| webGLPlatform | [IWebGLPlatform](../interfaces/iwebglplatform.md) |  The platform to create the context with. |

**Returns:** [WebGLRenderingContextExt](../interfaces/webglrenderingcontextext.md)
The context if successfuly or throws an error if it cannot be created.

___
<a id="createtexture"></a>

### `<Static>` createTexture

▸ **createTexture**(gl: *[WebGLRenderingContextExt](../interfaces/webglrenderingcontextext.md)*, pixelData: *`ArrayBufferView`*, dimensions: *`object`*): `WebGLTexture`

*Defined in [webGL/webGLHelper.ts:67](https://github.com/iota-pico/pow-webgl/tree/master/src/webGL/webGLHelper.ts#L67*

Transfer data onto clamped texture and turn off any filtering

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| gl | [WebGLRenderingContextExt](../interfaces/webglrenderingcontextext.md) |  The WebGL rendering context. |
| pixelData | `ArrayBufferView` |  The pixel data to create the view from. |
| dimensions | `object` |  The dimensions to create the texture. |

**Returns:** `WebGLTexture`
The texture.

___
<a id="framebuffersettexture"></a>

### `<Static>` frameBufferSetTexture

▸ **frameBufferSetTexture**(gl: *[WebGLRenderingContextExt](../interfaces/webglrenderingcontextext.md)*, frameBuffer: *`WebGLFramebuffer`*, texture: *`WebGLTexture`*): `void`

*Defined in [webGL/webGLHelper.ts:87](https://github.com/iota-pico/pow-webgl/tree/master/src/webGL/webGLHelper.ts#L87*

Set the texure into the framebuffer.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| gl | [WebGLRenderingContextExt](../interfaces/webglrenderingcontextext.md) |  The WebGL rendering context. |
| frameBuffer | `WebGLFramebuffer` |  The frame buffer to set the text in to. |
| texture | `WebGLTexture` |  The texture to set in to the framebuffer. |

**Returns:** `void`

___

