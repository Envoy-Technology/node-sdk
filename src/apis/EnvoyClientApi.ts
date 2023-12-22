import { GiftLinksApi } from "./GiftLinksApi";
import { RewardsApi } from "./RewardsApi";
import { TrackingApi } from "./TrackingApi";
import { UserQuotaApi } from "./UserQuotaApi";

export interface SDKConfiguration {
  apiKey: string,
  basePath: string,
}

export class EnvoyClientApi {
  private configuration: SDKConfiguration;

  public giftLinks: GiftLinksApi;
  public rewards: RewardsApi;
  public tracking: TrackingApi;
  public userQuota: UserQuotaApi;

  constructor(apiKey: string) {
    this.configuration = {
      apiKey,
      basePath: 'https://api.envoy.is/partner',
    }

    this.giftLinks = new GiftLinksApi(this.configuration);
    this.rewards = new RewardsApi(this.configuration);
    this.tracking = new TrackingApi(this.configuration);
    this.userQuota = new UserQuotaApi(this.configuration);
  }
}
