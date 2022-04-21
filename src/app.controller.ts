import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //This is the way to create a endpoint in Nest
  @Get('new')
  newEndpoint() {
    return 'Este es un nuevo endpoint';
  }
}
