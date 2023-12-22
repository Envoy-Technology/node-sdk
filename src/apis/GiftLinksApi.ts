import { BaseAPI, RequiredError } from "../runtime";
import { GiftLinksParams, CreateGiftLinkToJSON } from "../models";

export class GiftLinksApi extends BaseAPI {
  async createGiftLink(giftLinkParams: GiftLinksParams) {
    this.#checkRequiredGiftLinkParams(giftLinkParams);

    const response = await this.request({
      path: "/create-link",
      method: "POST",
      body: CreateGiftLinkToJSON(giftLinkParams),
    });
    return response;
  }

  async createSandboxGiftLink(giftLinkParams: GiftLinksParams) {
    this.#checkRequiredGiftLinkParams(giftLinkParams);

    const response = await this.request({
      path: "/create-sandbox-link",
      method: "POST",
      body: CreateGiftLinkToJSON(giftLinkParams),
    });
    return response;
  }

  #checkRequiredGiftLinkParams(giftLinkParams: GiftLinksParams) {
    if (!giftLinkParams) throw new RequiredError("giftLinkParams");
    if (!giftLinkParams.contentSetting) throw new RequiredError("giftLinkParams.contentSetting");
    if (!giftLinkParams.contentSetting.contentType) throw new RequiredError("giftLinkParams.contentSetting.contentType");
    if (!giftLinkParams.contentSetting.contentName) throw new RequiredError("giftLinkParams.contentSetting.contentName");
    if (!giftLinkParams.contentSetting.contentDescription) throw new RequiredError("giftLinkParams.contentSetting.contentDescription");
  }
}
