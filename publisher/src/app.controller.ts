import { Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/')
  async enqueueFood() {
    await this.appService.enqueueFood({ food: 'rice' });
    await this.appService.enqueueSalad({ food: 'lettuce' });
    await this.appService.enqueueBeverage({ beverage: 'water' });
    await this.appService.enqueueWine({ beverage: 'cabernet sauvignon' });
  }
}
