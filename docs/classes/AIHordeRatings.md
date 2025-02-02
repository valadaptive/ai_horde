[@zeldafan0225/ai_horde](../README.md) / [Exports](../modules.md) / AIHordeRatings

# Class: AIHordeRatings

## Table of contents

### Constructors

- [constructor](AIHordeRatings.md#constructor)

### Methods

- [getDatasets](AIHordeRatings.md#getdatasets)
- [getNewRating](AIHordeRatings.md#getnewrating)
- [getTeams](AIHordeRatings.md#getteams)
- [postRating](AIHordeRatings.md#postrating)

## Constructors

### constructor

• **new AIHordeRatings**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`AIHordeRatingsInitOptions`](../interfaces/AIHordeRatingsInitOptions.md) |

#### Defined in

[index.ts:2838](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2838)

## Methods

### getDatasets

▸ **getDatasets**<`T`\>(`options?`): `Promise`<`Pick`<[`DatasetGetResponse`](../interfaces/DatasetGetResponse.md), `T`\>[]\>

Display all datasets

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`DatasetGetResponse`](../interfaces/DatasetGetResponse.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |

#### Returns

`Promise`<`Pick`<[`DatasetGetResponse`](../interfaces/DatasetGetResponse.md), `T`\>[]\>

RatingsDatasetResponse - The datasets

#### Defined in

[index.ts:2876](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2876)

___

### getNewRating

▸ **getNewRating**<`T`\>(`image_options?`, `options?`): `Promise`<`Pick`<[`DatasetImagePopResponse`](../interfaces/DatasetImagePopResponse.md), `T`\>\>

Retrieve an image to rate from the default dataset

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`DatasetImagePopResponse`](../interfaces/DatasetImagePopResponse.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `image_options?` | `Object` | - |
| `image_options.dataset_id` | `string` | The ID of the dataset to get an image from |
| `image_options.model_name?` | `string` | The model name to get an image from |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.token?` | `string` | The token of the requesting user |

#### Returns

`Promise`<`Pick`<[`DatasetImagePopResponse`](../interfaces/DatasetImagePopResponse.md), `T`\>\>

DatasetImagePopResponse - An images data to rate

#### Defined in

[index.ts:2907](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2907)

___

### getTeams

▸ **getTeams**<`T`\>(`options?`): `Promise`<`Pick`<[`TeamsGetResponse`](../interfaces/TeamsGetResponse.md), `T`\>[]\>

Display all public teams

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`TeamsGetResponse`](../interfaces/TeamsGetResponse.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |

#### Returns

`Promise`<`Pick`<[`TeamsGetResponse`](../interfaces/TeamsGetResponse.md), `T`\>[]\>

RatingsTeamsResponse - The datasets

#### Defined in

[index.ts:2890](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2890)

___

### postRating

▸ **postRating**<`T`\>(`image_id`, `rating`, `options?`): `Promise`<`Pick`<[`RatePostResponse`](../interfaces/RatePostResponse.md), `T`\>\>

Check if there are interrogation requests queued for fulfillment
This endpoint is used by registered workers only

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`RatePostResponse`](../interfaces/RatePostResponse.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `image_id` | `string` | The ID if the Image you want to rate |
| `rating` | [`RatePostInput`](../interfaces/RatePostInput.md) |  |
| `options?` | `Object` | - |
| `options.fields?` | `T`[] | Array of fields that will be included in the returned data |
| `options.token?` | `string` | The token of the requesting user |

#### Returns

`Promise`<`Pick`<[`RatePostResponse`](../interfaces/RatePostResponse.md), `T`\>\>

InterrogationPopPayload

#### Defined in

[index.ts:2931](https://github.com/ZeldaFan0225/ai_horde/blob/d340ba6/index.ts#L2931)
