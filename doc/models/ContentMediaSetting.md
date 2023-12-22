## Content Media Setting

### Fields

| Name | Type | Required | Description|
|-----------|------|----------|------------|
| source | `string` | Yes | URI to content, may be Manifest or Link to file or file stream in case of audio or video content type, plain html or source to public html |
| sourceIsRedirect | `Boolean` | No | If True, envoy will use `source` to get URL for the player from the redirect response |
| poster | `string` | No | URI to the image used as video/audio poster |

### Example

```json
{
  "source": "example.com/media_url",
  "sourceisRedirect": false,
  "poster": "example.com/image_url"
}
```