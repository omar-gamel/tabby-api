import { Injectable } from '@nestjs/common';
import axios from 'axios';
/*
    When an order is delivered and you are ready to charge a buyer, you perform a capture request.
    When you capture the full amount of the order, the payment will be automatically closed.
    If only a part of the order is delivered,
    you need to capture this part amount and close the payment – it means that another part of the order is not going to be delivered to the customer.
*/
@Injectable()
export class TabbyCaptureService {
  async createCaptureRequest(paymentId: string) {
    await axios({
      method: 'POST',
      url: `https://api.tabby.ai/api/v1/payments/${paymentId}/captures`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.TABBY_SECRET_KEY}`
      },
      data: {
        amount: '0.00',
        tax_amount: '0.00',
        shipping_amount: '0.00',
        discount_amount: '0.00',
        created_at: new Date(),
        items: []
      }
    });
  }
}
