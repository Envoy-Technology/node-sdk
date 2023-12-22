type ContentMediaSetting = {
  source: string,
  sourceIsRedirect?: Boolean,
  poster?: string,
}

export type ContentSetting = {
  contentType: "VIDEO" | "AUDIO" | "HTML_PLAIN" | "HTML_SOURCE" | "SCREENSHOT",
  contentName: string,
  contentDescription: string,
  common?: ContentMediaSetting,
  timeLimit?: Number,
  timeStart?: Number,
  availableFrom?: Date,
  availableTo?: Date,
  videoOrientation?: "horizontal" | "vertical",
  previewTitle?: string,
  previewDescription?: string,
  previewImage?: string,
  isSandbox?: Boolean,
  mandatoryEmail?: Boolean,
  modalTitle?: string,
  buttonText?: string,
  contentProtection?: ContentMediaSetting,
}

export function CreateContentSettingToJSON(value: ContentSetting) {
  if (!value) return value;

  return {
    'content_type': value.contentType,
    'content_name': value.contentName,
    'content_description': value.contentDescription,
    'common': value.common,
    'time_limit': value.timeLimit,
    'time_start': value.timeStart,
    'available_from': value.availableFrom,
    'available_to': value.availableTo,
    'video_orientation': value.videoOrientation,
    'preview_title': value.previewTitle,
    'preview_description': value.previewDescription,
    'preview_image': value.previewImage,
    'is_sandbox': value.isSandbox,
    'mandatory_email': value.mandatoryEmail,
    'modal_title': value.modalTitle,
    'button_text': value.buttonText,
    'content_protection': value.contentProtection,
  }
}
