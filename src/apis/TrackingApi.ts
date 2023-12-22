import { BaseAPI, RequiredError } from "../runtime";
import { PixelEvent, CreatePixelEventToJSON } from "../models";

export class TrackingApi extends BaseAPI {
  async createPixelEvent(pixelEvent: PixelEvent) {
    if (!pixelEvent) throw new RequiredError("pixelEvent")
    if (!pixelEvent.eventName) throw new RequiredError("pixelEvent.eventName");

    const response = await this.request({
      path: "/pixel-event",
      method: "POST",
      body: CreatePixelEventToJSON(pixelEvent),
    });
    return response;
  }
}
