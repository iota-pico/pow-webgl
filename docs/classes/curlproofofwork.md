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

► **initialize**(): `void`



*Defined in curlProofOfWork.ts:13*



Allow the proof of work to perform any initialization. Will throw an exception if the implementation is not supported.




**Returns:** `void`





___

<a id="pow"></a>

###  pow

► **pow**(trytes: *`Trytes`*, minWeightMagnitude: *`number`*): `Promise`.<`Trytes`>



*Defined in curlProofOfWork.ts:23*



Perform a proof of work on the data.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trytes | `Trytes`   |  The trytes to perform the pow on. |
| minWeightMagnitude | `number`   |  The minimum weight magnitude. |





**Returns:** `Promise`.<`Trytes`>
The trytes produced by the proof of work.






___


