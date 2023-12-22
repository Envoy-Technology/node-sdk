## Content Setting

### Fields

| Name | Type | Required | Description|
|-----------|------|----------|------------|
| contentType | `"VIDEO" \| "AUDIO" \| "HTML_PLAIN" \| "HTML_SOURCE" \| "SCREENSHOT"` | Yes | Type of content that is being shared |
| contentName | `string` | Yes | Name of the content that is being shared, will be displayed on gift landing |
| contentDescription | `string` | Yes | Description for content, will be displayed on gift landing |
| common | [`ContentMediaSetting`](/doc/models/ContentMediaSetting.md) | No | Media object configuration |
| timeLimit | `Number` | No | Time limit configuration in seconds. Determines the length of playable content, from the beginning by default (or timeStart if defined) |
| timeStart | `Number` | No | Timestsamp of start (in seconds) for playable media type on gift landing page. If used player on lading page will start from given timestamp |
| availableFrom | `Date` | No | Datetime in ISO 8601 format. Values without explicit timezone will be treated as UTC. Determines since when content will be available to user. Before that date lading page will show proper information and countdown |
| availableTo | `Date` | No | Datetime in ISO 8601 format. Values without explicit timezone will be treated as UTC. Determines untill when content will be available to user. After that date lading page will show proper information |
| videoOrientation | `"vertical" \| "horizontal"` | No | Determines orientation of the player in case of VIDEO contents.This field may be overwritten in case of m3u8 video contents |
| previewTitle | `string` | No | Will be used as webpage title on gift landing. It will also appear as title on any link preview like facebook, messenger, slack etc |
| previewDescription | `string` | No | Will be used as webpage description on gift landing. It will also appear as description on any link preview like facebook, messenger, slack etc |
| previewImage | `string` | No | Will be userd as og:image in website metadata. It will appear as image on any link preview like facebook, messenger, slack etc. To work correctly image should be smaller than 300KB |
| isSandbox | `Boolean` | No | Determine if the shared link is a sandbox one |
| mandatoryEmail | `Boolean` | No | Restrict access to the shared content until the user has provided an email address |
| modalTitle | `string` | No | Title displayed on the modal that requests user email |
| buttonText | `string` | No | Text displayedon the button on the bottom of the modal that requests user email |
| contentProtection | [`ContentProtectionSetting`](/doc/models/ContentProtectionSetting.md) | No | Content protection configs |

### Example

```json
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
  "videoOrientation": "vertical",
  "previewTitle": "Gift link preview title",
  "previewDescription": "Gift link preview description",
  "previewImage": "example.com/image_url",
  "isSandbox": false,
  "mandatoryEmail": true,
  "modalTitle": "Enter email",
  "buttonText": "Enter your email to unlock the gift content",
  "contentProtection": {
    "source": "example.com/media_url",
    "sourceisRedirect": false,
    "poster": "example.com/image_url"
  },
}
```
