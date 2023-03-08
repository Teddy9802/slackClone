import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// 요청, 응답을 안다.
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    console.log('hello');
    return this.appService.getHello;
  }
}
