import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  private readonly logger = new Logger('pub-logger');
  constructor(
    @Inject('RESTAURANT_SERVICE') private readonly client: ClientProxy,
  ) {}

  async enqueueFood(data: any) {
    this.logger.log('');
    try {
      this.logger.log('SENDING food');
      const result = await firstValueFrom(this.client.send('food_queue', data));
      this.logger.log('result from send:', JSON.stringify(result));
    } catch (err) {
      this.logger.error(err);
    }
    this.logger.log('');
  }

  async enqueueSalad(data: any) {
    this.logger.log('');
    try {
      this.logger.log('EMITTING salad');
      const result = await firstValueFrom(this.client.emit('food_queue', data));
      this.logger.log('result from emit:', JSON.stringify(result));
    } catch (err) {
      this.logger.error(err);
    }
    this.logger.log('');
  }

  async enqueueBeverage(data: any) {
    this.logger.log('');
    try {
      this.logger.log('EMITTING beverage');
      const result = await firstValueFrom(
        this.client.emit('beverage_queue', data),
      );

      this.logger.log('result from emit:');
      this.logger.log(JSON.stringify(result));
    } catch (err) {
      this.logger.error(err);
    }
    this.logger.log('');
  }

  async enqueueWine(data: any) {
    this.logger.log('');
    try {
      this.logger.log('SENDING wine');
      const result = await firstValueFrom(
        this.client.send('beverage_queue', data),
      );

      this.logger.log('result from send:');
      this.logger.log(JSON.stringify(result));
    } catch (err) {
      this.logger.error(err);
    }
    this.logger.log('');
  }
}
