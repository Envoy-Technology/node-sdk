export type ContentProtectionDrmPlayer = {
  serverName: String,
  serverCertificate: String
}

export function CreateContentProtectionDrmPlayerToJSON(value: ContentProtectionDrmPlayer) {
  if (!value) return value;

  return {
    'server_name': value.serverName,
    'server_certificate': value.serverCertificate,
  }
}
