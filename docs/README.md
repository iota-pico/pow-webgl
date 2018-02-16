


#  @iota-pico/pow-webgl

## Index

### Enumerations

* [PearlDiverState](enums/pearldiverstate.md)


### Classes

* [CurlProofOfWork](classes/curlproofofwork.md)
* [PearlDiver](classes/pearldiver.md)
* [WebGLHelper](classes/webglhelper.md)
* [WebGLWorker](classes/webglworker.md)


### Interfaces

* [WebGLRenderingContextExt](interfaces/webglrenderingcontextext.md)
* [WebGLVertexArrayObject](interfaces/webglvertexarrayobject.md)


### Type aliases

* [PearlDiverSearchObject](#pearldiversearchobject)
* [PearlDiverSearchStates](#pearldiversearchstates)



---
# Type aliases
<a id="pearldiversearchobject"></a>

###  PearlDiverSearchObject

**Τ PearlDiverSearchObject**:  *`object`* 

*Defined in [pearlDiver/pearlDiverSearchObject.ts:7](https://github.com/iotaeco/iota-pico-pow-webgl/blob/d351a73/src/pearlDiver/pearlDiverSearchObject.ts#L7)*



PearlDiverSearchObject to maintain information during search.

#### Type declaration




 minWeightMagnitude: `number`






 states: [PearlDiverSearchStates](#pearldiversearchstates)





 callback : function
► **callback**(nonce: *`Trytes`*): `void`



*Defined in [pearlDiver/pearlDiverSearchObject.ts:10](https://github.com/iotaeco/iota-pico-pow-webgl/blob/d351a73/src/pearlDiver/pearlDiverSearchObject.ts#L10)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| nonce | `Trytes`   |  - |





**Returns:** `void`







___

<a id="pearldiversearchstates"></a>

###  PearlDiverSearchStates

**Τ PearlDiverSearchStates**:  *`object`* 

*Defined in [pearlDiver/pearlDiverSearchStates.ts:5](https://github.com/iotaeco/iota-pico-pow-webgl/blob/d351a73/src/pearlDiver/pearlDiverSearchStates.ts#L5)*



PearDiverSearchStates for storing states during search. Converted from [https://github.com/iotaledger/curl.lib.js/blob/master/src/pearldiver.js](https://github.com/iotaledger/curl.lib.js/blob/master/src/pearldiver.js)

#### Type declaration




 high: `Int32Array`






 low: `Int32Array`







___


