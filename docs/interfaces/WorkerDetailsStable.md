[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / WorkerDetailsStable

# Interface: WorkerDetailsStable

## Hierarchy

- [`WorkerDetails`](WorkerDetails.md)

  ↳ **`WorkerDetailsStable`**

## Table of contents

### Properties

- [bridge\_agent](WorkerDetailsStable.md#bridge_agent)
- [contact](WorkerDetailsStable.md#contact)
- [id](WorkerDetailsStable.md#id)
- [img2img](WorkerDetailsStable.md#img2img)
- [info](WorkerDetailsStable.md#info)
- [kudos\_details](WorkerDetailsStable.md#kudos_details)
- [kudos\_rewards](WorkerDetailsStable.md#kudos_rewards)
- [maintenance\_mode](WorkerDetailsStable.md#maintenance_mode)
- [max\_pixels](WorkerDetailsStable.md#max_pixels)
- [megapixelsteps\_generated](WorkerDetailsStable.md#megapixelsteps_generated)
- [models](WorkerDetailsStable.md#models)
- [name](WorkerDetailsStable.md#name)
- [nsfw](WorkerDetailsStable.md#nsfw)
- [online](WorkerDetailsStable.md#online)
- [owner](WorkerDetailsStable.md#owner)
- [painting](WorkerDetailsStable.md#painting)
- [paused](WorkerDetailsStable.md#paused)
- [performance](WorkerDetailsStable.md#performance)
- [post-processing](WorkerDetailsStable.md#post-processing)
- [requests\_fulfilled](WorkerDetailsStable.md#requests_fulfilled)
- [suspicious](WorkerDetailsStable.md#suspicious)
- [team](WorkerDetailsStable.md#team)
- [threads](WorkerDetailsStable.md#threads)
- [trusted](WorkerDetailsStable.md#trusted)
- [uncompleted\_jobs](WorkerDetailsStable.md#uncompleted_jobs)
- [uptime](WorkerDetailsStable.md#uptime)

## Properties

### bridge\_agent

• `Optional` **bridge\_agent**: `string`

The bridge agent name, version and website
@default: unknown:0:unknown
@example: AI Horde Worker:11:https://github.com/db0/AI-Horde-Worker
@maxLength: 1000

#### Inherited from

[WorkerDetails](WorkerDetails.md).[bridge_agent](WorkerDetails.md#bridge_agent)

#### Defined in

[index.ts:2299](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2299)

___

### contact

• `Optional` **contact**: `string`

(Privileged) Contact details for the horde admins to reach the owner of this worker in emergencies.

**`Example`**

```ts
email@example.com
```

**`Min Length`**

5

**`Max Length`**

500

#### Inherited from

[WorkerDetails](WorkerDetails.md).[contact](WorkerDetails.md#contact)

#### Defined in

[index.ts:2292](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2292)

___

### id

• `Optional` **id**: `string`

The UUID of this worker.

#### Inherited from

[WorkerDetails](WorkerDetails.md).[id](WorkerDetails.md#id)

#### Defined in

[index.ts:2306](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2306)

___

### img2img

• `Optional` **img2img**: `boolean`

If True, this worker supports and allows img2img requests.

#### Defined in

[index.ts:2245](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2245)

___

### info

• `Optional` **info**: `string`

Extra information or comments about this worker provided by its owner.

#### Inherited from

[WorkerDetails](WorkerDetails.md).[info](WorkerDetails.md#info)

#### Defined in

[index.ts:2269](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2269)

___

### kudos\_details

• `Optional` **kudos\_details**: [`WorkerKudosDetails`](WorkerKudosDetails.md)

#### Inherited from

[WorkerDetails](WorkerDetails.md).[kudos_details](WorkerDetails.md#kudos_details)

#### Defined in

[index.ts:2257](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2257)

___

### kudos\_rewards

• `Optional` **kudos\_rewards**: `number`

How many Kudos this worker has been rewarded in total.

#### Inherited from

[WorkerDetails](WorkerDetails.md).[kudos_rewards](WorkerDetails.md#kudos_rewards)

#### Defined in

[index.ts:2256](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2256)

___

### maintenance\_mode

• `Optional` **maintenance\_mode**: `boolean`

When True, this worker will not pick up any new requests

#### Inherited from

[WorkerDetails](WorkerDetails.md).[maintenance_mode](WorkerDetails.md#maintenance_mode)

#### Defined in

[index.ts:2265](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2265)

___

### max\_pixels

• `Optional` **max\_pixels**: `number`

The maximum pixels in resolution this workr can generate

#### Defined in

[index.ts:2241](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2241)

___

### megapixelsteps\_generated

• `Optional` **megapixelsteps\_generated**: `number`

How many megapixelsteps this worker has generated until now

#### Defined in

[index.ts:2243](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2243)

___

### models

• `Optional` **models**: `string`[]

Which models this worker if offerring

#### Inherited from

[WorkerDetails](WorkerDetails.md).[models](WorkerDetails.md#models)

#### Defined in

[index.ts:2284](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2284)

___

### name

• `Optional` **name**: `string`

The Name given to this worker.

#### Inherited from

[WorkerDetails](WorkerDetails.md).[name](WorkerDetails.md#name)

#### Defined in

[index.ts:2304](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2304)

___

### nsfw

• `Optional` **nsfw**: `boolean`

Whether this worker can generate NSFW requests or not.

#### Inherited from

[WorkerDetails](WorkerDetails.md).[nsfw](WorkerDetails.md#nsfw)

#### Defined in

[index.ts:2271](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2271)

___

### online

• `Optional` **online**: `boolean`

True if the worker has checked-in the past 5 minutes.

#### Inherited from

[WorkerDetails](WorkerDetails.md).[online](WorkerDetails.md#online)

#### Defined in

[index.ts:2308](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2308)

___

### owner

• `Optional` **owner**: `string`

Privileged or public if the owner has allowed it. The alias of the owner of this worker.

#### Inherited from

[WorkerDetails](WorkerDetails.md).[owner](WorkerDetails.md#owner)

#### Defined in

[index.ts:2273](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2273)

___

### painting

• `Optional` **painting**: `boolean`

If True, this worker supports and allows inpainting requests.

#### Defined in

[index.ts:2247](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2247)

___

### paused

• `Optional` **paused**: `boolean`

(Privileged) When True, this worker not be given any new requests.

#### Inherited from

[WorkerDetails](WorkerDetails.md).[paused](WorkerDetails.md#paused)

#### Defined in

[index.ts:2267](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2267)

___

### performance

• `Optional` **performance**: `string`

The average performance of this worker in human readable form.

#### Inherited from

[WorkerDetails](WorkerDetails.md).[performance](WorkerDetails.md#performance)

#### Defined in

[index.ts:2259](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2259)

___

### post-processing

• `Optional` **post-processing**: `boolean`

If True, this worker supports and allows post-processing requests.

#### Defined in

[index.ts:2249](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2249)

___

### requests\_fulfilled

• `Optional` **requests\_fulfilled**: `number`

How many images this worker has generated.

#### Inherited from

[WorkerDetails](WorkerDetails.md).[requests_fulfilled](WorkerDetails.md#requests_fulfilled)

#### Defined in

[index.ts:2254](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2254)

___

### suspicious

• `Optional` **suspicious**: `number`

(Privileged) How much suspicion this worker has accumulated

#### Inherited from

[WorkerDetails](WorkerDetails.md).[suspicious](WorkerDetails.md#suspicious)

#### Defined in

[index.ts:2277](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2277)

___

### team

• `Optional` **team**: [`TeamDetailsLite`](TeamDetailsLite.md)

#### Inherited from

[WorkerDetails](WorkerDetails.md).[team](WorkerDetails.md#team)

#### Defined in

[index.ts:2285](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2285)

___

### threads

• `Optional` **threads**: `number`

How many threads this worker is running.

#### Inherited from

[WorkerDetails](WorkerDetails.md).[threads](WorkerDetails.md#threads)

#### Defined in

[index.ts:2261](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2261)

___

### trusted

• `Optional` **trusted**: `boolean`

The worker is trusted to return valid generations.

#### Inherited from

[WorkerDetails](WorkerDetails.md).[trusted](WorkerDetails.md#trusted)

#### Defined in

[index.ts:2275](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2275)

___

### uncompleted\_jobs

• `Optional` **uncompleted\_jobs**: `number`

How many jobs this worker has left uncompleted after it started them.

**`Example`**

```ts
0
```

#### Inherited from

[WorkerDetails](WorkerDetails.md).[uncompleted_jobs](WorkerDetails.md#uncompleted_jobs)

#### Defined in

[index.ts:2282](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2282)

___

### uptime

• `Optional` **uptime**: `number`

The amount of seconds this worker has been online for this Horde.

#### Inherited from

[WorkerDetails](WorkerDetails.md).[uptime](WorkerDetails.md#uptime)

#### Defined in

[index.ts:2263](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2263)
