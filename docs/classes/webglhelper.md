[@iota-pico/pow-webgl](../README.md) > [WebGLHelper](../classes/webglhelper.md)



# Class: WebGLHelper


Helper functions for use with WebGL.

## Index

### Methods

* [createBuffer](webglhelper.md#createbuffer)
* [createContext](webglhelper.md#createcontext)
* [createProgram](webglhelper.md#createprogram)
* [createShader](webglhelper.md#createshader)
* [createTexture](webglhelper.md#createtexture)
* [frameBufferSetTexture](webglhelper.md#framebuffersettexture)
* [getShaderSource](webglhelper.md#getshadersource)



---
## Methods
<a id="createbuffer"></a>

### «Static» createBuffer

► **createBuffer**(gl: *[WebGLRenderingContextExt](../interfaces/webglrenderingcontextext.md)*, data: *`WebGLBuffer`*, arrayType?: *`any`*, target?: *`number`*): `WebGLBuffer`



*Defined in [webGL/webGLHelper.ts:42](https://github.com/iotaeco/iota-pico-pow-webgl/blob/39f1e3a/src/webGL/webGLHelper.ts#L42)*



Create a new WebGL buffer.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| gl | [WebGLRenderingContextExt](../interfaces/webglrenderingcontextext.md)   |  The WebGL rendering context. |
| data | `WebGLBuffer`   |  The data to add to the buffer. |
| arrayType | `any`   |  The data type for the buffer. |
| target | `number`   |  A GL Enum specifying the binding point (target). |





**Returns:** `WebGLBuffer`
The WebGL buffer.






___

<a id="createcontext"></a>

### «Static» createContext

► **createContext**(): [WebGLRenderingContextExt](../interfaces/webglrenderingcontextext.md)



*Defined in [webGL/webGLHelper.ts:12](https://github.com/iotaeco/iota-pico-pow-webgl/blob/39f1e3a/src/webGL/webGLHelper.ts#L12)*



Create a WebGL Context.




**Returns:** [WebGLRenderingContextExt](../interfaces/webglrenderingcontextext.md)
The context if successfuly or throws an error if it cannot be created.






___

<a id="createprogram"></a>

### «Static» createProgram

► **createProgram**(gl: *[WebGLRenderingContextExt](../interfaces/webglrenderingcontextext.md)*, vertexShaderSource: *`string`*, fragmentShaderSource: *`string`*, debugLog?: *`function`*): `WebGLProgram`



*Defined in [webGL/webGLHelper.ts:103](https://github.com/iotaeco/iota-pico-pow-webgl/blob/39f1e3a/src/webGL/webGLHelper.ts#L103)*



Create a program on the WebGL context.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| gl | [WebGLRenderingContextExt](../interfaces/webglrenderingcontextext.md)   |  The WebGL rendering context. |
| vertexShaderSource | `string`   |  The source for the vertex shader. |
| fragmentShaderSource | `string`   |  The source for the fragment shader. |
| debugLog | `function`   |  Output the information to a debug log. |





**Returns:** `WebGLProgram`
A WebGL Program.






___

<a id="createshader"></a>

### «Static» createShader

► **createShader**(gl: *[WebGLRenderingContextExt](../interfaces/webglrenderingcontextext.md)*, source: *`string`*, type: *`number`*): `WebGLShader`



*Defined in [webGL/webGLHelper.ts:88](https://github.com/iotaeco/iota-pico-pow-webgl/blob/39f1e3a/src/webGL/webGLHelper.ts#L88)*



Create a shader.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| gl | [WebGLRenderingContextExt](../interfaces/webglrenderingcontextext.md)   |  The WebGL rendering context. |
| source | `string`   |  The source for the shader. |
| type | `number`   |  Either gl.VERTEX_SHADER or gl.FRAGMENT_SHADER. |





**Returns:** `WebGLShader`
The shader.






___

<a id="createtexture"></a>

### «Static» createTexture

► **createTexture**(gl: *[WebGLRenderingContextExt](../interfaces/webglrenderingcontextext.md)*, pixelData: *`ArrayBufferView`*, dimensions: *`object`*): `WebGLTexture`



*Defined in [webGL/webGLHelper.ts:58](https://github.com/iotaeco/iota-pico-pow-webgl/blob/39f1e3a/src/webGL/webGLHelper.ts#L58)*



Transfer data onto clamped texture and turn off any filtering


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| gl | [WebGLRenderingContextExt](../interfaces/webglrenderingcontextext.md)   |  The WebGL rendering context. |
| pixelData | `ArrayBufferView`   |  The pixel data to create the view from. |
| dimensions | `object`   |  The dimensions to create the texture. |





**Returns:** `WebGLTexture`
The texture.






___

<a id="framebuffersettexture"></a>

### «Static» frameBufferSetTexture

► **frameBufferSetTexture**(gl: *[WebGLRenderingContextExt](../interfaces/webglrenderingcontextext.md)*, frameBuffer: *`WebGLFramebuffer`*, texture: *`WebGLTexture`*): `void`



*Defined in [webGL/webGLHelper.ts:139](https://github.com/iotaeco/iota-pico-pow-webgl/blob/39f1e3a/src/webGL/webGLHelper.ts#L139)*



Set the texure into the framebuffer.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| gl | [WebGLRenderingContextExt](../interfaces/webglrenderingcontextext.md)   |  The WebGL rendering context. |
| frameBuffer | `WebGLFramebuffer`   |  The frame buffer to set the text in to. |
| texture | `WebGLTexture`   |  The texture to set in to the framebuffer. |





**Returns:** `void`





___

<a id="getshadersource"></a>

### «Static» getShaderSource

► **getShaderSource**(id: *`string`*): `string`



*Defined in [webGL/webGLHelper.ts:77](https://github.com/iotaeco/iota-pico-pow-webgl/blob/39f1e3a/src/webGL/webGLHelper.ts#L77)*



Get a shader source from the dom element.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  The id of the dom element. |





**Returns:** `string`
The shader source from the dom element.






___


