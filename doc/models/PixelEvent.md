## Pixel Event

### Fields

| Name | Type | Required | Description|
|-----------|------|----------|------------|
| eventName | `string` | Yes | Name of the event to be tracked. Custom events are permitted but Envoy offers this predefined list of events: `envoy_link_out` `envoy_link_view` `email_landing_collected` `app_downloaded` `account_created` `trial_activated` `payment_success` |
| leadUuid | `string` | No | Internal Id of the shared link |
| sharerUserId | `string` | No | Internal Id of the user that shared the link |
| shareLinkHash | `string` | No | Hash used to identify the shared link |
| extra | `Object<[key: string]: string>` | No | Object with extra parameters that are wished to be tracked |

### Example

```json
{
  "eventName": "envoy_link_view",
  "leadUuid": "12345",
  "sharerUserId": "12345",
  "shareLinkHash": "12345",
  "extra": {
    "campaign": "christmas",
    "userType": "premium",
  },
}
```