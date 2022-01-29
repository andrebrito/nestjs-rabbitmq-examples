import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  private readonly logger = new Logger('pub-logger');
  constructor(
    @Inject('RESTAURANT_SERVICE') private readonly client: ClientProxy,
  ) {}

  enqueueFood(data: any) {
    this.logger.log('enqueueing food...');
    this.logger.log(data);

    const result = this.client.emit('food_queue', data);
    this.logger.log('result from emit:');
    this.logger.log(result);

    this.logger.log('food enqueued!');
  }

  enqueueBeverage(data: any) {
    this.logger.log('enqueueing beverage...');
    this.logger.log(data);

    const result = this.client.emit('beverage_queue', data);
    this.logger.log('result from emit:');
    this.logger.log(result);

    this.logger.log('beverage enqueued!');
  }
}
