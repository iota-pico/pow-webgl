[@iota-pico/pow-webgl](../README.md) > [PearlDiver](../classes/pearldiver.md)



# Class: PearlDiver


PearlDiver. Converted from [https://github.com/iotaledger/curl.lib.js/blob/master/src/pearldiver.js](https://github.com/iotaledger/curl.lib.js/blob/master/src/pearldiver.js)

## Index

### Properties

* [instance](pearldiver.md#instance)


### Methods

* [searchWithTrytes](pearldiver.md#searchwithtrytes)
* [closedown](pearldiver.md#closedown)
* [initialize](pearldiver.md#initialize)



---
## Properties
<a id="instance"></a>

### «Static» instance

**●  instance**:  *[PearlDiver](pearldiver.md)* 

*Defined in [pearlDiver/pearlDiver.ts:24](https://github.com/iotaeco/iota-pico-pow-webgl/blob/3d877b6/src/pearlDiver/pearlDiver.ts#L24)*





___


## Methods
<a id="searchwithtrytes"></a>

###  searchWithTrytes

► **searchWithTrytes**(trytes: *`Trytes`*, minWeightMagnitude: *`number`*): `Promise`.<`Trytes`>



*Defined in [pearlDiver/pearlDiver.ts:118](https://github.com/iotaeco/iota-pico-pow-webgl/blob/3d877b6/src/pearlDiver/pearlDiver.ts#L118)*



Perform a search using trytes.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trytes | `Trytes`   |  The trytes to perform the search on. |
| minWeightMagnitude | `number`   |  The minimum weight magnitude. |





**Returns:** `Promise`.<`Trytes`>
Promise which resolves to the trytes from the search.






___

<a id="closedown"></a>

### «Static» closedown

► **closedown**(): `void`



*Defined in [pearlDiver/pearlDiver.ts:106](https://github.com/iotaeco/iota-pico-pow-webgl/blob/3d877b6/src/pearlDiver/pearlDiver.ts#L106)*



Closedown the PearlDiver main instance.




**Returns:** `void`





___

<a id="initialize"></a>

### «Static» initialize

► **initialize**(webGLPlatform: *[IWebGLPlatform](../interfaces/iwebglplatform.md)*): `void`



*Defined in [pearlDiver/pearlDiver.ts:97](https://github.com/iotaeco/iota-pico-pow-webgl/blob/3d877b6/src/pearlDiver/pearlDiver.ts#L97)*



Initialize the PearlDiver main instance.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| webGLPlatform | [IWebGLPlatform](../interfaces/iwebglplatform.md)   |  - |





**Returns:** `void`





___


