[@iota-pico/pow-webgl](../README.md) > [ProofOfWorkWebGl](../classes/proofofworkwebgl.md)



# Class: ProofOfWorkWebGl


ProofOfWork implementation using WebGL.

## Implements

* `IProofOfWork`

## Index

### Constructors

* [constructor](proofofworkwebgl.md#constructor)


### Methods

* [initialize](proofofworkwebgl.md#initialize)
* [performsSingle](proofofworkwebgl.md#performssingle)
* [pow](proofofworkwebgl.md#pow)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new ProofOfWorkWebGl**(webGLPlatform?: *[IWebGLPlatform](../interfaces/iwebglplatform.md)*): [ProofOfWorkWebGl](proofofworkwebgl.md)


*Defined in [proofOfWorkWebGl.ts:20](https://github.com/iotaeco/iota-pico-pow-webgl/blob/ed51bf0/src/proofOfWorkWebGl.ts#L20)*



Create a new instance of ProofOfWork.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| webGLPlatform | [IWebGLPlatform](../interfaces/iwebglplatform.md)   |  Provides platform specific functions, optional mostly used for testing. |





**Returns:** [ProofOfWorkWebGl](proofofworkwebgl.md)

---


## Methods
<a id="initialize"></a>

###  initialize

► **initialize**(): `Promise`.<`void`>



*Defined in [proofOfWorkWebGl.ts:47](https://github.com/iotaeco/iota-pico-pow-webgl/blob/ed51bf0/src/proofOfWorkWebGl.ts#L47)*



Allow the proof of work to perform any initialization. Will throw an exception if the implementation is not supported.




**Returns:** `Promise`.<`void`>





___

<a id="performssingle"></a>

###  performsSingle

► **performsSingle**(): `boolean`



*Defined in [proofOfWorkWebGl.ts:63](https://github.com/iotaeco/iota-pico-pow-webgl/blob/ed51bf0/src/proofOfWorkWebGl.ts#L63)*



Performs single conversion per pow call.




**Returns:** `boolean`
True if pow only does one conversion.






___

<a id="pow"></a>

###  pow

► **pow**(trunkTransaction: *`Hash`*, branchTransaction: *`Hash`*, trytes: *`Trytes`[]*, minWeightMagnitude: *`number`*): `Promise`.<`Trytes`[]>



*Defined in [proofOfWorkWebGl.ts:75](https://github.com/iotaeco/iota-pico-pow-webgl/blob/ed51bf0/src/proofOfWorkWebGl.ts#L75)*



Perform a proof of work on the data.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trunkTransaction | `Hash`   |  The trunkTransaction to use for the pow. |
| branchTransaction | `Hash`   |  The branchTransaction to use for the pow. |
| trytes | `Trytes`[]   |  The trytes to perform the pow on. |
| minWeightMagnitude | `number`   |  The minimum weight magnitude. |





**Returns:** `Promise`.<`Trytes`[]>
The trytes produced by the proof of work.






___


