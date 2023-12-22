import { BaseAPI, RequiredError } from "../runtime";
import { ClaimUserRewardParams, ClaimUserRewardToJSON } from "../models";

export class RewardsApi extends BaseAPI {
  async getUserRewards(userId: string) {
    if (!userId) throw new RequiredError("userId");

    const response = await this.request({
      path: `/user-rewards/${encodeURIComponent(userId)}`,
      method: "GET"
    });
    return response;
  }

  async getCurrentUserRewards(userId: string) {
    if (!userId) throw new RequiredError("userId");

    const response = await this.request({
      path: `/user-current-rewards/${encodeURIComponent(userId)}`,
      method: "GET"
    });
    return response;
  }

  async claimUserReward(userParams: ClaimUserRewardParams) {
    if (!userParams) throw new RequiredError("userParams");
    if (!userParams.userId) throw new RequiredError("userParams.userId");
    if (!userParams.paypalReceiver) throw new RequiredError("userParams.paypalReceiver");

    const response = await this.request({
      path: "/user-rewards",
      method: "POST",
      body: ClaimUserRewardToJSON(userParams),
    });
    return response;
  }
}
