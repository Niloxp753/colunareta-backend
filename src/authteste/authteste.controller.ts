import { Controller, Get } from '@nestjs/common';

@Controller('authteste')
export class AuthtesteController {
  @Get()
  getHello(): string {
    return 'Hello Word';
  }
}
