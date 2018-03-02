[@iota-pico/pow-webgl](../README.md) > [WebGLWorker](../classes/webglworker.md)



# Class: WebGLWorker


WebGLWorker.

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

► **addProgram**(name: *`string`*, code: *`string`*, ...uniforms: *`string`[]*): `void`



*Defined in [webGL/webGLWorker.ts:97](https://github.com/iotaeco/iota-pico-pow-webgl/blob/39f1e3a/src/webGL/webGLWorker.ts#L97)*



Add a program to the worker.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  The name of the program to add. |
| code | `string`   |  The code for the program. |
| uniforms | `string`[]   |  Additional uniform locations. |





**Returns:** `void`





___

<a id="getdimensions"></a>

###  getDimensions

► **getDimensions**(): `object`



*Defined in [webGL/webGLWorker.ts:79](https://github.com/iotaeco/iota-pico-pow-webgl/blob/39f1e3a/src/webGL/webGLWorker.ts#L79)*



Get the dimensions from the worker.




**Returns:** `object`
The dimensions.






___

<a id="getipt"></a>

###  getIpt

► **getIpt**(): `object`



*Defined in [webGL/webGLWorker.ts:87](https://github.com/iotaeco/iota-pico-pow-webgl/blob/39f1e3a/src/webGL/webGLWorker.ts#L87)*



Get the IPT from the worker.




**Returns:** `object`
The ipt.






___

<a id="initialize"></a>

###  initialize

► **initialize**(stateLength: *`number`*, texelSize: *`number`*): `void`



*Defined in [webGL/webGLWorker.ts:39](https://github.com/iotaeco/iota-pico-pow-webgl/blob/39f1e3a/src/webGL/webGLWorker.ts#L39)*



Initialize the web GL Worker.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| stateLength | `number`   |  The length of the state. |
| texelSize | `number`   |  The texel size. |





**Returns:** `void`





___

<a id="readdata"></a>

###  readData

► **readData**(x: *`number`*, y: *`number`*, N: *`number`*, M: *`number`*): `Int32Array`



*Defined in [webGL/webGLWorker.ts:163](https://github.com/iotaeco/iota-pico-pow-webgl/blob/39f1e3a/src/webGL/webGLWorker.ts#L163)*



Read data from the worker.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| x | `number`   |  The x position to read from. |
| y | `number`   |  The y position to read from. |
| N | `number`   |  The width position to read from. |
| M | `number`   |  The height position to read from. |





**Returns:** `Int32Array`





___

<a id="runprogram"></a>

###  runProgram

► **runProgram**(name: *`string`*, count: *`number`*, ...uniforms: *`object`[]*): `void`



*Defined in [webGL/webGLWorker.ts:119](https://github.com/iotaeco/iota-pico-pow-webgl/blob/39f1e3a/src/webGL/webGLWorker.ts#L119)*



Run the program in the web worker.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  The name of the program to run. |
| count | `number`   |  The number of times to run it. |
| uniforms | `object`[]   |  Additional uniform locations to use. |





**Returns:** `void`





___

<a id="writedata"></a>

###  writeData

► **writeData**(data: *`ArrayBufferView`*): `void`



*Defined in [webGL/webGLWorker.ts:174](https://github.com/iotaeco/iota-pico-pow-webgl/blob/39f1e3a/src/webGL/webGLWorker.ts#L174)*



Write data to the worker.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `ArrayBufferView`   |  The data to write. |





**Returns:** `void`





___


