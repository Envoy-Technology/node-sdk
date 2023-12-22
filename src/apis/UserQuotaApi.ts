import { BaseAPI, RequiredError } from "../runtime";

export class UserQuotaApi extends BaseAPI {
  async getUserQuota(userId: string) {
    if (!userId) throw new RequiredError("userId");

    const response = await this.request({
      path: `/user-quota/${encodeURIComponent(userId)}`,
      method: "GET"
    });
    return response;
  }
}
