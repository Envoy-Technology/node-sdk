### Initialization

```js
const userQuota = envoyClient.userQuota
```

### Get User Quota

```js
async getUserQuota(userId)
```

#### Parameters

| Parameter | Type | Required | Description|
|-----------|------|----------|------------|
| userId | `string \| Number` | Yes | Internal Id of the user for which the user quota is requested |


#### Example Usage

```js
const userQuota = envoyClient.userQuota.getUserQuota(12345)
```