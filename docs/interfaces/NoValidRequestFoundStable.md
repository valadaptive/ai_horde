[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / NoValidRequestFoundStable

# Interface: NoValidRequestFoundStable

## Hierarchy

- [`NoValidRequestFound`](NoValidRequestFound.md)

  ↳ **`NoValidRequestFoundStable`**

## Table of contents

### Properties

- [blacklist](NoValidRequestFoundStable.md#blacklist)
- [bridge\_version](NoValidRequestFoundStable.md#bridge_version)
- [max\_pixels](NoValidRequestFoundStable.md#max_pixels)
- [models](NoValidRequestFoundStable.md#models)
- [nsfw](NoValidRequestFoundStable.md#nsfw)
- [performance](NoValidRequestFoundStable.md#performance)
- [untrusted](NoValidRequestFoundStable.md#untrusted)
- [worker\_id](NoValidRequestFoundStable.md#worker_id)

## Properties

### blacklist

• `Optional` **blacklist**: `number`

How many waiting requests were skipped because they demanded a generation with a word that this worker does not accept

#### Inherited from

[NoValidRequestFound](NoValidRequestFound.md).[blacklist](NoValidRequestFound.md#blacklist)

#### Defined in

[index.ts:2046](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2046)

___

### bridge\_version

• `Optional` **bridge\_version**: `number`

How many waiting requests were skipped because they require a higher version of the bridge than this worker is running (upgrade if you see this in your skipped list)

#### Inherited from

[NoValidRequestFound](NoValidRequestFound.md).[bridge_version](NoValidRequestFound.md#bridge_version)

#### Defined in

[index.ts:2052](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2052)

___

### max\_pixels

• `Optional` **max\_pixels**: `number`

How many waiting requests were skipped because they demanded a higher size than this worker provides

#### Defined in

[index.ts:2035](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2035)

___

### models

• `Optional` **models**: `number`

How many waiting requests were skipped because they demanded a different model than what this worker provides

#### Inherited from

[NoValidRequestFound](NoValidRequestFound.md).[models](NoValidRequestFound.md#models)

#### Defined in

[index.ts:2050](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2050)

___

### nsfw

• `Optional` **nsfw**: `number`

How many waiting requests were skipped because they demanded a nsfw generation which this worker does not provide

#### Inherited from

[NoValidRequestFound](NoValidRequestFound.md).[nsfw](NoValidRequestFound.md#nsfw)

#### Defined in

[index.ts:2044](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2044)

___

### performance

• `Optional` **performance**: `number`

How many waiting requests were skipped because they required higher performance

#### Inherited from

[NoValidRequestFound](NoValidRequestFound.md).[performance](NoValidRequestFound.md#performance)

#### Defined in

[index.ts:2042](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2042)

___

### untrusted

• `Optional` **untrusted**: `number`

How many waiting requests were skipped because they demanded a trusted worker which this worker is not

#### Inherited from

[NoValidRequestFound](NoValidRequestFound.md).[untrusted](NoValidRequestFound.md#untrusted)

#### Defined in

[index.ts:2048](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2048)

___

### worker\_id

• `Optional` **worker\_id**: `number`

How many waiting requests were skipped because they demanded a specific worker

#### Inherited from

[NoValidRequestFound](NoValidRequestFound.md).[worker_id](NoValidRequestFound.md#worker_id)

#### Defined in

[index.ts:2040](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2040)
