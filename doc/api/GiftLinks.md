### Initialization

```js
const giftLinks = envoyClient.giftLinks
```

### Create Gift Link

```js
async createGiftLink(giftLink)
```

#### Parameters

| Parameter | Type | Required | Description|
|-----------|------|----------|------------|
| giftLink | [`GiftLink`](/doc/models/GiftLink.md) | Yes | Object containing the fields required for the POST request |

#### Example Usage

```js
const giftLink = {
  "contentSetting": {
    {
      "contentType": "VIDEO",
      "contentName": "Content",
      "contentDescription": "user@example.com",
      "common": {
        "source": "example.com/media_url",
        "sourceisRedirect": false,
        "poster": "example.com/image_url"
      },
      "timeLimit": 0,
      "timeStart": 0,
      "availableFrom": "2023-12-11T20:01:32.195Z",
      "availableTo": "2023-12-11T20:01:32.195Z",
      "videoOrientation": 1,
      "previewTitle": "Gift link preview title",
      "previewDescription": "Gift link preview description",
      "previewImage": "example.com/image_url",
      "mandatoryEmail": true,
      "modalTitle": "Enter email",
      "buttonText": "Enter your email to unlock the gift content",
      "contentProtection": {
        "media": {
          "source": "example.com/media_url",
          "sourceisRedirect": false,
          "poster": "example.com/image_url"
        },
        "drmHeaders": {
          "header": "example"
        },
        "drmPlayer": {
          "serverName": "server name",
          "serverCertificate": "server certificate"
        },
        "player": "widevine"
      }
    }
  },
  "autoplay": false,
  "lifespanAfterClick": {
    "value": "4",
    "unit": "minutes"
  },
  "openQuota": 10,
  "extra": "extra",
  "sharerId": 12345,
  "isSandbox": false,
  "labels": [
    {
      "id": 1,
      "text": "Label 1",
      "color": "#FFFFFF"
    },
    {
      "id": 2,
      "text": "Label 2",
      "color": "#000000"
    },
  ],
};

await envoyClient.giftLinks.createGiftLink(giftLink);
```