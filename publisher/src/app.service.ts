import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  private readonly logger = new Logger('pub-logger');
  constructor(
    @Inject('RESTAURANT_SERVICE') private readonly client: ClientProxy,
  ) {}

  async all() {
    const resultFromSendingToMessage = await firstValueFrom(
      this.client.send('food_queue', 'rice'),
    );

    const resultFromEmittingToMessage = await firstValueFrom(
      this.client.send('food_queue', 'salad'),
    );

    const resultFromSendingToEvent = await firstValueFrom(
      this.client.send('beverage_queue', 'water'),
    );

    const resultFromEmittingToEvent = await firstValueFrom(
      this.client.send('beverage_queue', 'wine'),
    );

    this.logger.log(
      'resultFromSendingToMessage',
      JSON.stringify(resultFromSendingToMessage),
    );

    this.logger.log(
      'resultFromEmittingToMessage',
      JSON.stringify(resultFromEmittingToMessage),
    );

    this.logger.log(
      'resultFromSendingToEvent',
      JSON.stringify(resultFromSendingToEvent),
    );

    this.logger.log(
      'resultFromEmittingToEvent',
      JSON.stringify(resultFromEmittingToEvent),
    );
  }
}
