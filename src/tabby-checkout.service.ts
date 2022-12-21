import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class TabbyCheckoutService {
  public async tabbyCheckoutRequest() {
    const data = {
      payment: {
        amount: 1000,
        currency: 'SAR',
        description: 'The order From',
        buyer: {
          phone: process.env.TABBY_PHONE || '',
          email: process.env.TABBY_EMAIL || '',
          name: ''
        },
        buyer_history: {
          registered_since: new Date().toISOString(),
          loyalty_level: 0,
          is_phone_number_verified: true,
          is_email_verified: true
        },
        order: {
          updated_at: new Date().toISOString(),
          reference_id: '',
          items: [
            {
              title: '',
              unit_price: 1000,
              quantity: 1,
              category: ''
            }
          ]
        },
        order_history: [
          {
            purchased_at: new Date().toISOString(),
            amount: 1000,
            status: 'new'
          }
        ]
      },
      lang: 'en',
      merchant_code: process.env.TABBY_MERCHANT_CODE,
      merchant_urls: {
        success: process.env.TABBY_CHECKOUT_SUCCESS_FEEDBACK_URL,
        cancel: process.env.TABBY_CHECKOUT_CANCEL_FEEDBACK_URL,
        failure: process.env.TABBY_CHECKOUT_FAILURE_FEEDBACK_URL
      }
    };
    await axios({
      method: 'POST',
      url: process.env.TABBY_CHECKOUT_URL,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.TABBY_PUBLICE_KEY}`
      },
      data
    });
  }
}
