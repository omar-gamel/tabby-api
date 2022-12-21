import { Module } from '@nestjs/common';
import { TabbyCaptureService } from './tabby-capture.service';
import {TabbyCheckoutService} from './tabby-checkout.service';
import { TabbyWebhookService } from './tabby-webhook.service';

@Module({
  imports: [],
  providers: [TabbyCheckoutService, TabbyWebhookService, TabbyCaptureService]
})
export class AppModule {}
