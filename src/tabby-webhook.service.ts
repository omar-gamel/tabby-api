import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { TabbyTabbyWebhookFeedbackStatusEnum } from './tabby.enum';

/*
    What are the Webhooks ?
        Webhooks are user-defined HTTPS callbacks.
        tabby uses the Webhooks as an additional way of notifying you about payment-related and token-related events.
        A Webhook endpoint is the URL which you are using to listen to the callbacks.
        Once you register a URL as a Webhook endpoint, tabby sends notifications to that URL whenever an event related to your account occurs.

    How does it work ?
        1- The registration process should be done only once for the whole store.
           You are using your secret key an merchant_code to authorize the request and define the URL for the Webhooks receiving.
           The boolean parameter "is_test" helps you to identify the opertaional environment;
        2- Once the Webhooks are registered, you receive from us notifications as soon as the payment status change takes place.
           We notify you when the payment gets authorized, captured and closed.
           Therefore, overall you receieve three Webhook notifications by default for each payment.
           You can check the Webhook payload below for your reference.
           The request can be signed by an arbitrary auth header if you set up this header (optional).
        3- You need to confirm the reception of a Webhook by returning a 200 HTTP status code.
           Check the auth header to verify the authenticity of the request.
           No response or a response other than 200 indicates an error to tabby.
*/

@Injectable()
export class TabbyWebhookService {
  async tabbyWebhooksFeedback(tabbyWebhooksFeedbackDto: {
    payment_id: string;
    reference_id: string;
    status: TabbyTabbyWebhookFeedbackStatusEnum;
  }) {}

  async retrievePaymentRequest(payment_id: string) {
    return await axios({
      method: 'GET',
      url: process.env.TABBY_RETRIEVE_PAYMENT_URL + payment_id,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.TABBY_SECRET_KEY}`
      }
    });
  }

  async createRegisterWebhookRequest() {
    await axios({
      method: 'POST',
      url: process.env.TABBY_REGISTER_WEBHOOK_FEEDBACK_URL,
      headers: {
        'Content-Type': 'application/json',
        'X-Merchant-Code': process.env.TABBY_MERCHANT_CODE,
        Authorization: `Bearer ${process.env.TABBY_SECRET_KEY}`
      },
      data: {
        url: process.env.TABBY_WEBHOOK_FEEDBACK_URL,
        is_test: true
      }
    });
  }

  async retrieveWebhookRequest(webHookId: string) {
    await axios({
      method: 'GET',
      url: process.env.TABBY_RETRIEVE_WEBHOOK_URL + webHookId,
      headers: {
        'Content-Type': 'application/json',
        'X-Merchant-Code': process.env.TABBY_MERCHANT_CODE,
        Authorization: `Bearer ${process.env.TABBY_SECRET_KEY}`
      }
    });
  }

  async retrieveAllWebhooksRequest() {
    await axios({
      method: 'GET',
      url: process.env.TABBY_RETRIEVE_ALL_WEBHOOKS_URL,
      headers: {
        'Content-Type': 'application/json',
        'X-Merchant-Code': process.env.TABBY_MERCHANT_CODE,
        Authorization: `Bearer ${process.env.TABBY_SECRET_KEY}`
      }
    });
  }

  async updateWebhookRequest(webHookId: string) {
    await axios({
      method: 'PUT',
      url: process.env.TABBY_UPDATE_WEBHOOK_URL + webHookId,
      headers: {
        'Content-Type': 'application/json',
        'X-Merchant-Code': process.env.TABBY_MERCHANT_CODE,
        Authorization: `Bearer ${process.env.TABBY_SECRET_KEY}`
      },
      data: {
        url: process.env.TABBY_WEBHOOK_FEEDBACK_URL,
        is_test: true
      }
    });
  }

  async removeWebhookRequest(webHookId: string) {
    await axios({
      method: 'DELETE',
      url: process.env.TABBY_DELETE_WEBHOOK_URL + webHookId,
      headers: {
        'Content-Type': 'application/json',
        'X-Merchant-Code': process.env.TABBY_MERCHANT_CODE,
        Authorization: `Bearer ${process.env.TABBY_SECRET_KEY}`
      }
    });
  }
}
