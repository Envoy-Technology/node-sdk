## Content Protection Setting

### Fields

| Name | Type | Required | Description|
|-----------|------|----------|------------|
| media | [`ContentMediaSetting`](/doc/models/ContentMediaSetting.md) | Yes | Media content protection configuration |
| drm_headers | `Object<[key: string]: string>` | Yes | Dictionary with headers for DRM auth flow |
| player | `"widevine" \| "fairPlay" \| "playReady"` | No | DRM player type |

### Example

```json
{
  "media": {
    "source": "example.com/media_url",
    "sourceisRedirect": false,
    "poster": "example.com/image_url"
  },
  "drm_headers": {
    "header": "example"
  },
  "player": "widevine"
}
```