### Initialization

```js
const rewards = envoyClient.rewards
```

### Get User Rewards

```js
async getUserRewards(userId)
```

#### Parameters

| Parameter | Type | Required | Description|
|-----------|------|----------|------------|
| userId | `string \| Number` | Yes | Internal Id of the user for which the rewards information is requested |


#### Example Usage

```js
const userRewards = await envoyClient.rewards.getUserRewards(12345);
```

### Claim User Reward

```js
async claimUserReward(user);
```

#### Parameters

| Parameter | Type | Required | Description|
|-----------|------|----------|------------|
| userParams | [`ClaimUserRewardParams`](/doc/models/ClaimUserRewardParams.md) | Yes | Object containing the fields required for the POST request |


#### Example Usage

```js
const user = {
  userId: 12345,
  paypalReceiver: 'user@example.com',
};

await envoyClient.rewards.claimUserReward(user);
```

### Get Current User Rewards

```js
async getCurrentUserRewards(userId)
```

#### Parameters

| Parameter | Type | Required | Description|
|-----------|------|----------|------------|
| userId | `string \| Number` | Yes | Internal Id of the user for which the rewards information is requested |


#### Example Usage

```js
const userRewards = await envoyClient.rewards.getCurrentUserRewards(12345);
```