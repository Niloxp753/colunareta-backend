import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthtesteController } from 'src/authteste/authteste.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AuthtesteController],
})
export class AuthorizationModule {}
