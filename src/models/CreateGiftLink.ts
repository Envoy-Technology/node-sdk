import { ContentSetting, CreateContentSettingToJSON } from "./CreateContentSetting";

type LifespanAfterClick = {
  value: Number,
  unit: string,
}

type Label = {
  id: Number,
  text: string,
  color: string,
}

export interface GiftLinksParams {
  contentSetting: ContentSetting,
  autoplay?: Boolean,
  lifespanAfterClick?: LifespanAfterClick,
  openQuota?: Number,
  extra?: any,
  title?: string,
  sharerId?: string,
  isSandbox?: Boolean,
  labels?: Array<Label>,
}

export function CreateGiftLinkToJSON(value: GiftLinksParams) {
  if (!value) return value;

  return {
    'content_setting': CreateContentSettingToJSON(value.contentSetting),
    'autoplay': value.autoplay,
    'lifespan_after_click': value.lifespanAfterClick,
    'open_quota': value.openQuota,
    'extra': value.extra,
    'title': value.title,
    'sharer_id': value.sharerId,
    'is_sandbox': value.isSandbox,
    'labels': value.labels,
  }
}
