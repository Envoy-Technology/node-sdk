export interface PixelEvent {
  eventName: string,
  leadUuid?: string,
  sharerUserId?: string,
  shareLinkHash?: string,
  extra?: any
}

export function CreatePixelEventToJSON(value: PixelEvent) {
  if (!value) return value;

  return {
    'event_name': value.eventName,
    'lead_uuid': value.leadUuid,
    'sharer_user_id': value.sharerUserId,
    'share_link_hash': value.shareLinkHash,
    'extra': value.extra
  }
}
