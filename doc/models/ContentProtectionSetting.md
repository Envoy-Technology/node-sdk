## Content Protection Setting

### Fields

| Name | Type | Required | Description|
|-----------|------|----------|------------|
| media | [`ContentMediaSetting`](/doc/models/ContentMediaSetting.md) | Yes | Media content protection configuration |
| drmHeaders | `Object<[key: string]: string>` | Yes | Dictionary with headers for DRM auth flow |
| drmPlayer | [`ContentProtectionDrmPlayer`](/doc/models/ContentProtectionDrmPlayer.md) | Yes | Specifications of the DRM player |
| player | `"widevine" \| "fairPlay" \| "playReady"` | No | DRM player type |

### Example

```json
{
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
```
