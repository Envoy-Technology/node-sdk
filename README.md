# envoy-partner-node-sdk

## Description

Node JS SDK available for accessing the partner APIs provided by Envoy.

### Requirements

 - Node.js 18 or higher

## Installation
Use your preferred package manager of choice to add this package to your project:
```sh
npm install @envoy/node-sdk
```

```sh
yarn add @envoy/node-sdk
```

## Getting Started

#### Initialization

You can access your secret access key through the Envoy dashboard, under the security settings section.

```js
//ES5
const envoy = require('@envoy/node-sdk');

const envoyClient = new envoy.EnvoyClientApi('SECRET_ACCESS_KEY');
```

```js
//ES6+
import { EnvoyClientApi } from '@envoy/node-sdk';

const envoyClient = new EnvoyClientApi('SECRET_ACCESS_KEY');
```

#### Usage
After initializing the client instance you can then call the methods available in the SDK, provided inside their containing classes to access the Envoy API:

| API | SDK accessor | Available methods |
|-----|----------------|-------------------|
| Gift Links | `giftLinks` | `createGiftLink(giftLinkParams)` `createSandboxGiftLink(giftLinkParams)` |
| User Quota | `userQuota` | `getUserQuota(userId)` |
| Tracking | `tracking` | `createPixelEvent(pixelEvent)` |
| Rewards | `rewards` | `createGiftLink(giftLinkParams)` `createSandboxGiftLink(giftLinkParams)` |

## API-specific documentations

[Gift Links Api](/doc/api/GiftLinks.md)
[User Quota Api](/doc/api/UserQuota.md)
[Tracking Api](/doc/api/Tracking.md)
[Rewards Api](/doc/api/Rewards.md)

## License

This SDK is distributed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0), see LICENSE.txt for more information.