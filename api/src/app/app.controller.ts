import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/teste')
  getStatus(): string {
    return 'running api Nest';
  }

  @Post('/teste')
  testPost() {
    return 'ROTA POST FUNCIONANDO';
  }
}
