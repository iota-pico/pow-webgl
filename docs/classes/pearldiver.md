[@iota-pico/pow-webgl](../README.md) > [PearlDiver](../classes/pearldiver.md)



# Class: PearlDiver


PearlDiver. Converted from [https://github.com/iotaledger/curl.lib.js/blob/master/src/pearldiver.js](https://github.com/iotaledger/curl.lib.js/blob/master/src/pearldiver.js)

## Index

### Properties

* [instance](pearldiver.md#instance)


### Methods

* [interrupt](pearldiver.md#interrupt)
* [remove](pearldiver.md#remove)
* [resume](pearldiver.md#resume)
* [searchWithTrytes](pearldiver.md#searchwithtrytes)
* [setOffset](pearldiver.md#setoffset)
* [initialize](pearldiver.md#initialize)



---
## Properties
<a id="instance"></a>

### «Static» instance

**●  instance**:  *[PearlDiver](pearldiver.md)* 

*Defined in [pearlDiver/pearlDiver.ts:23](https://github.com/iotaeco/iota-pico-pow-webgl/blob/a044908/src/pearlDiver/pearlDiver.ts#L23)*





___


## Methods
<a id="interrupt"></a>

###  interrupt

► **interrupt**(): `void`



*Defined in [pearlDiver/pearlDiver.ts:128](https://github.com/iotaeco/iota-pico-pow-webgl/blob/a044908/src/pearlDiver/pearlDiver.ts#L128)*



Interrupts the currently running proof-of-work function.




**Returns:** `void`





___

<a id="remove"></a>

###  remove

► **remove**(): `void`



*Defined in [pearlDiver/pearlDiver.ts:144](https://github.com/iotaeco/iota-pico-pow-webgl/blob/a044908/src/pearlDiver/pearlDiver.ts#L144)*



Removes the proof-of-work job that you had previously queued.




**Returns:** `void`





___

<a id="resume"></a>

###  resume

► **resume**(): `void`



*Defined in [pearlDiver/pearlDiver.ts:137](https://github.com/iotaeco/iota-pico-pow-webgl/blob/a044908/src/pearlDiver/pearlDiver.ts#L137)*



Continues the proof-of-work that you just interrupted.




**Returns:** `void`





___

<a id="searchwithtrytes"></a>

###  searchWithTrytes

► **searchWithTrytes**(trytes: *`Trytes`*, minWeightMagnitude: *`number`*): `Promise`.<`Trytes`>



*Defined in [pearlDiver/pearlDiver.ts:112](https://github.com/iotaeco/iota-pico-pow-webgl/blob/a044908/src/pearlDiver/pearlDiver.ts#L112)*



Perform a search using trytes.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trytes | `Trytes`   |  The trytes to perform the search on. |
| minWeightMagnitude | `number`   |  The minimum weight magnitude. |





**Returns:** `Promise`.<`Trytes`>
Promise which resolves to the trytes from the search.






___

<a id="setoffset"></a>

###  setOffset

► **setOffset**(offset: *`number`*): `void`



*Defined in [pearlDiver/pearlDiver.ts:121](https://github.com/iotaeco/iota-pico-pow-webgl/blob/a044908/src/pearlDiver/pearlDiver.ts#L121)*



Sets an offset to start pow search from


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| offset | `number`   |  The offset to start the search from. |





**Returns:** `void`





___

<a id="initialize"></a>

### «Static» initialize

► **initialize**(): `void`



*Defined in [pearlDiver/pearlDiver.ts:100](https://github.com/iotaeco/iota-pico-pow-webgl/blob/a044908/src/pearlDiver/pearlDiver.ts#L100)*



Intialize the PearlDiver main instance.




**Returns:** `void`





___


