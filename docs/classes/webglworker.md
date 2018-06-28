[@iota-pico/pow-webgl](../README.md) > [WebGLWorker](../classes/webglworker.md)

# Class: WebGLWorker

WebGLWorker.

## Hierarchy

**WebGLWorker**

## Index

### Methods

* [addProgram](webglworker.md#addprogram)
* [getDimensions](webglworker.md#getdimensions)
* [getIpt](webglworker.md#getipt)
* [initialize](webglworker.md#initialize)
* [readData](webglworker.md#readdata)
* [runProgram](webglworker.md#runprogram)
* [writeData](webglworker.md#writedata)

---

## Methods

<a id="addprogram"></a>

###  addProgram

▸ **addProgram**(name: *`string`*, code: *`string`*, ...uniforms: *`string`[]*): `void`

*Defined in [webGL/webGLWorker.ts:100](https://github.com/iota-pico/pow-webgl/blob/64ad2a2/src/webGL/webGLWorker.ts#L100)*

Add a program to the worker.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  The name of the program to add. |
| code | `string` |  The code for the program. |
| `Rest` uniforms | `string`[] |  Additional uniform locations. |

**Returns:** `void`

___
<a id="getdimensions"></a>

###  getDimensions

▸ **getDimensions**(): `object`

*Defined in [webGL/webGLWorker.ts:82](https://github.com/iota-pico/pow-webgl/blob/64ad2a2/src/webGL/webGLWorker.ts#L82)*

Get the dimensions from the worker.

**Returns:** `object`
The dimensions.

___
<a id="getipt"></a>

###  getIpt

▸ **getIpt**(): `object`

*Defined in [webGL/webGLWorker.ts:90](https://github.com/iota-pico/pow-webgl/blob/64ad2a2/src/webGL/webGLWorker.ts#L90)*

Get the IPT from the worker.

**Returns:** `object`
The ipt.

___
<a id="initialize"></a>

###  initialize

▸ **initialize**(webGLPlatform: *[IWebGLPlatform](../interfaces/iwebglplatform.md)*, stateLength: *`number`*, texelSize: *`number`*): `void`

*Defined in [webGL/webGLWorker.ts:42](https://github.com/iota-pico/pow-webgl/blob/64ad2a2/src/webGL/webGLWorker.ts#L42)*

Initialize the web GL Worker.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| webGLPlatform | [IWebGLPlatform](../interfaces/iwebglplatform.md) |  The webGL platform. |
| stateLength | `number` |  The length of the state. |
| texelSize | `number` |  The texel size. |

**Returns:** `void`

___
<a id="readdata"></a>

###  readData

▸ **readData**(x: *`number`*, y: *`number`*, n: *`number`*, m: *`number`*): `Int32Array`

*Defined in [webGL/webGLWorker.ts:164](https://github.com/iota-pico/pow-webgl/blob/64ad2a2/src/webGL/webGLWorker.ts#L164)*

Read data from the worker.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| x | `number` |  The x position to read from. |
| y | `number` |  The y position to read from. |
| n | `number` |  The width position to read from. |
| m | `number` |  The height position to read from. |

**Returns:** `Int32Array`
The data at the requested position.

___
<a id="runprogram"></a>

###  runProgram

▸ **runProgram**(name: *`string`*, count: *`number`*, ...uniforms: *`object`[]*): `void`

*Defined in [webGL/webGLWorker.ts:122](https://github.com/iota-pico/pow-webgl/blob/64ad2a2/src/webGL/webGLWorker.ts#L122)*

Run the program in the web worker.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  The name of the program to run. |
| count | `number` |  The number of times to run it. |
| `Rest` uniforms | `object`[] |  Additional uniform locations to use. |

**Returns:** `void`

___
<a id="writedata"></a>

###  writeData

▸ **writeData**(data: *`ArrayBufferView`*): `void`

*Defined in [webGL/webGLWorker.ts:175](https://github.com/iota-pico/pow-webgl/blob/64ad2a2/src/webGL/webGLWorker.ts#L175)*

Write data to the worker.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `ArrayBufferView` |  The data to write. |

**Returns:** `void`

___

