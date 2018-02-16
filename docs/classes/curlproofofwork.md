[@iota-pico/pow-webgl](../README.md) > [CurlProofOfWork](../classes/curlproofofwork.md)



# Class: CurlProofOfWork


CurlProofOfWork implementation using WebGL.

## Implements

* `ICurlProofOfWork`

## Index

### Methods

* [initialize](curlproofofwork.md#initialize)
* [pow](curlproofofwork.md#pow)



---
## Methods
<a id="initialize"></a>

###  initialize

► **initialize**(): `Promise`.<`void`>



*Defined in [curlProofOfWork.ts:15](https://github.com/iotaeco/iota-pico-pow-webgl/blob/d351a73/src/curlProofOfWork.ts#L15)*



Allow the proof of work to perform any initialization. Will throw an exception if the implementation is not supported.




**Returns:** `Promise`.<`void`>





___

<a id="pow"></a>

###  pow

► **pow**(trytes: *`Trytes`*, minWeightMagnitude: *`number`*): `Promise`.<`Trytes`>



*Defined in [curlProofOfWork.ts:32](https://github.com/iotaeco/iota-pico-pow-webgl/blob/d351a73/src/curlProofOfWork.ts#L32)*



Perform a proof of work on the data.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trytes | `Trytes`   |  The trytes to perform the pow on. |
| minWeightMagnitude | `number`   |  The minimum weight magnitude. |





**Returns:** `Promise`.<`Trytes`>
The trytes produced by the proof of work.






___


