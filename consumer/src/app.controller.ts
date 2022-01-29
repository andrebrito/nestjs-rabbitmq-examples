import { Controller, Logger } from '@nestjs/common';
import {
  Ctx,
  EventPattern,
  MessagePattern,
  Payload,
  RmqContext
} from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly logger = new Logger('app-logger');

  constructor(private readonly appService: AppService) {}

  @EventPattern('food_queue')
  processFoodQueue(@Payload() data: string, @Ctx() context: RmqContext) {
    this.logger.log('processing foods queue...');
    this.logger.log('data', data);
    this.logger.log('context', context);
    this.logger.log('finish processing foods queue!');
  }

  @MessagePattern('beverage_queue')
  processBevQueue(@Payload() data: string, @Ctx() context: RmqContext) {
    this.logger.log('processing beverages queue...');
    this.logger.log('data', data);
    this.logger.log('context', context);
    this.logger.log('finish processing beverages queue!');
  }
}
