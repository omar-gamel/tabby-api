export enum TabbyPaymentResponseStatusEnum {
  CREATED,
  AUTHORIZED,
  CLOSED,
  REJECTED,
  EXPIRED
}

export enum TabbyCheckoutResponseStatusEnum {
  CREATE,
  APPROVED,
  REJECTED,
  EXPIRED
}

export enum TabbyTabbyWebhookFeedbackStatusEnum {
  AUTHORIZED,
  CAPTURED,
  CLOSED
}

export enum TabbyCurrencyTypeEnum {
  SAR = 'SAR'
}

export enum TabbyFeedbackTypeEnum {
  SUCCESS = 'SUCCESS',
  CANCEL = 'CANCEL',
  FAILURE = 'FAILURE'
}
