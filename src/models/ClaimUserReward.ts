export interface ClaimUserRewardParams {
  userId: string,
  paypalReceiver: string
}

export function ClaimUserRewardToJSON(value: ClaimUserRewardParams) {
  if (!value) return value;

  return {
    'user_id': value.userId,
    'paypal_receiver': value.paypalReceiver,
  }
}
