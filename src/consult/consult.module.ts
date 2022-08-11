import { Module } from '@nestjs/common';
import { ConsultService } from './consult.service';
import { ConsultController } from './consult.controller';

@Module({
  controllers: [ConsultController],
  providers: [ConsultService]
})
export class ConsultModule {}
