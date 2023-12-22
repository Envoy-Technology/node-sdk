### Initialization

```js
const tracking = envoyClient.tracking
```

### Create Pixel Event

```js
async createPixelEvent(pixelEvent)
```

#### Parameters

| Parameter | Type | Required | Description|
|-----------|------|----------|------------|
| pixelEvent | [`PixelEvent`](/doc/models/PixelEvent.md) | Yes | Object containing the fields required for the POST request |


#### Example Usage

```js
const pixelEvent = {
  eventName: 'envoy_link_view',
  leadUuid: 12345,
  sharerUserId: 12345,
  extra: {
    campaign: 'christmas',
    userType: 'premium',
  },
};

await envoyClient.tracking.createPixelEvent(pixelEvent);
```