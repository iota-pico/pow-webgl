[@iota-pico/pow-webgl](../README.md) > [ProofOfWorkWebGl](../classes/proofofworkwebgl.md)

# Class: ProofOfWorkWebGl

ProofOfWork implementation using WebGL.

## Hierarchy

 `ProofOfWorkBase`

**↳ ProofOfWorkWebGl**

## Implements

* `IProofOfWork`

## Index

### Constructors

* [constructor](proofofworkwebgl.md#constructor)

### Properties

* [MAX_TIMESTAMP_VALUE](proofofworkwebgl.md#max_timestamp_value)

### Methods

* [initialize](proofofworkwebgl.md#initialize)
* [pow](proofofworkwebgl.md#pow)
* [singlePow](proofofworkwebgl.md#singlepow)

---

## Constructors

<a id="constructor"></a>

### ⊕ **new ProofOfWorkWebGl**(webGLPlatform?: *[IWebGLPlatform](../interfaces/iwebglplatform.md)*, timeService?: *`ITimeService`*): [ProofOfWorkWebGl](proofofworkwebgl.md)

*Overrides ProofOfWorkBase.__constructor*

*Defined in [proofOfWorkWebGl.ts:19](https://github.com/iota-pico/pow-webgl/blob/8ad7827/src/proofOfWorkWebGl.ts#L19)*

Create a new instance of ProofOfWork.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| webGLPlatform | [IWebGLPlatform](../interfaces/iwebglplatform.md)   |  Provides platform specific functions, optional mostly used for testing. |
| timeService | `ITimeService`   |  Service to get the time for attachments. |

**Returns:** [ProofOfWorkWebGl](proofofworkwebgl.md)

---

## Properties

<a id="max_timestamp_value"></a>

### `<Static>` MAX_TIMESTAMP_VALUE

**●  MAX_TIMESTAMP_VALUE**:  *`number`* 

*Inherited from ProofOfWorkBase.MAX_TIMESTAMP_VALUE*

*Defined in D:/Workarea/iota-pico/pow-webgl/node_modules/@iota-pico/crypto/dist/proofOfWork/proofOfWorkBase.d.ts:12*

The maximum timestamp value used in proof of work.

___

## Methods

<a id="initialize"></a>

###  initialize

▸ **initialize**(): `Promise`.<`void`>

*Overrides ProofOfWorkBase.initialize*

*Defined in [proofOfWorkWebGl.ts:49](https://github.com/iota-pico/pow-webgl/blob/8ad7827/src/proofOfWorkWebGl.ts#L49)*

Allow the proof of work to perform any initialization. Will throw an exception if the implementation is not supported.

**Returns:** `Promise`.<`void`>

___

<a id="pow"></a>

###  pow

▸ **pow**(trunkTransaction: *`Hash`*, branchTransaction: *`Hash`*, trytes: *`Trytes`[]*, minWeightMagnitude: *`number`*): `Promise`.<`Trytes`[]>

*Inherited from ProofOfWorkBase.pow*

*Defined in D:/Workarea/iota-pico/pow-webgl/node_modules/@iota-pico/crypto/dist/proofOfWork/proofOfWorkBase.d.ts:31*

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

<a id="singlepow"></a>

###  singlePow

▸ **singlePow**(trytes: *`Trytes`*, minWeightMagnitude: *`number`*): `Promise`.<`Trytes`>

*Overrides ProofOfWorkBase.singlePow*

*Defined in [proofOfWorkWebGl.ts:68](https://github.com/iota-pico/pow-webgl/blob/8ad7827/src/proofOfWorkWebGl.ts#L68)*

Perform a proof of work on a single item.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trytes | `Trytes`   |  The trytes to perform the pow on. |
| minWeightMagnitude | `number`   |  The minimum weight magnitude. |

**Returns:** `Promise`.<`Trytes`>
The trytes produced by the proof of work.

___

