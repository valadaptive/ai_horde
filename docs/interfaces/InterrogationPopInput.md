[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / InterrogationPopInput

# Interface: InterrogationPopInput

## Table of contents

### Properties

- [amount](InterrogationPopInput.md#amount)
- [bridge\_version](InterrogationPopInput.md#bridge_version)
- [forms](InterrogationPopInput.md#forms)
- [name](InterrogationPopInput.md#name)
- [priority\_usernames](InterrogationPopInput.md#priority_usernames)
- [threads](InterrogationPopInput.md#threads)

## Properties

### amount

• `Optional` **amount**: `number`

The amount of forms to pop at the same time

**`Default`**

```ts
1
```

#### Defined in

[index.ts:2539](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2539)

___

### bridge\_version

• `Optional` **bridge\_version**: `number`

The version of the bridge used by this worker

**`Default`**

```ts
1
```

#### Defined in

[index.ts:2544](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2544)

___

### forms

• `Optional` **forms**: (``"GFPGAN"`` \| ``"RealESRGAN_x4plus"`` \| ``"RealESRGAN_x4plus_anime_6B"`` \| ``"NMKD_Siax"`` \| ``"4x_AnimeSharp"`` \| ``"strip_background"`` \| ``"CodeFormers"`` \| ``"caption"`` \| ``"interrogation"`` \| ``"nsfw"``)[]

The type of interrogation this worker can fulfull

#### Defined in

[index.ts:2534](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2534)

___

### name

• `Optional` **name**: `string`

The Name of the Worker

#### Defined in

[index.ts:2530](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2530)

___

### priority\_usernames

• `Optional` **priority\_usernames**: `string`[]

Users with priority to use this worker

#### Defined in

[index.ts:2532](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2532)

___

### threads

• `Optional` **threads**: `number`

How many threads this worker is running. This is used to accurately estimate the power available in the horde.

**`Default`**

```ts
1
```

**`Minimum`**

1

**`Maximum`**

10

#### Defined in

[index.ts:2551](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2551)
