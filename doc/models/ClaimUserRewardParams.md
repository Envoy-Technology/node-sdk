## Claim User Reward Params

### Fields

| Name | Type | Required | Description|
|-----------|------|----------|------------|
| userId | `string \| Number` | Yes | Internal Id of the user for which the user quota is requesed |
| paypalReceiver | `string` | Yes | Paypal account to which the rewards will be transferred |

### Example

```json
{
  "userId": 12345,
  "paypalReceiver": "user@example.com"
}
```