import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/food')
  enqueueFood(@Body() data) {
    this.appService.enqueueFood(data);
  }

  @Post('/beverage')
  enqueueBeverage(@Body() data) {
    this.appService.enqueueBeverage(data);
  }
}
