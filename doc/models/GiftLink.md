## Gift Link

### Fields

| Name | Type | Required | Description|
|-----------|------|----------|------------|
| contentSetting | [`ContentSetting`](/doc/models/ContentSetting.md) | Yes | Object containing relevant content configuration |
| autoplay | `Boolean` | No | Enables autoplay on landing page for content that this is applicable for (video, audio) |
| lifespanAfterClick | [`LifespanAfterClick`](/doc/models/LifespanAfterClick.md) | No | Time metric that measures how long share link will be active after first click  |
| openQuota | `Number` | No | How many times share link may be opened |
| extra | `Object<[key: string]: string>` | No | Use this field to pass additional info about your users or the context, like in example payload. You'll then have those breakdowns available in your analytics section |
| sharerId | `string` | Yes | Internal Id of the user that is sharing the link |
| isSandbox | `Boolean` | No | Determine if the shared link is a sandbox one |
| labels | Array<[`Label`](/doc/models/Label.md)> | No | Labels to be displayed on gift landing |

### Example

```json
{
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
}
```
