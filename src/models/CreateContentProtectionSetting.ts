import { ContentProtectionDrmPlayer, CreateContentProtectionDrmPlayerToJSON } from "./CreateContentProtectionDrmPlayer";
import { ContentMediaSetting } from "./CreateContentSetting"

export type ContentProtectionSetting = {
  media: ContentMediaSetting,
  drmHeaders?: Object,
  drmPlayer: ContentProtectionDrmPlayer,
  player: "widevine" | "fairPlay" | "playReady"
}

export function CreateContentProtectionSettingToJSON(value: ContentProtectionSetting) {
  if (!value) return value;

  return {
    'media': value.media,
    'drm_headers': value.drmHeaders,
    'drm_player': CreateContentProtectionDrmPlayerToJSON(value.drmPlayer),
    'player': value.player,
  }
}
