import { Module } from '@nestjs/common';
import { StudantsService } from './studants.service';
import { StudantsController } from './studants.controller';

@Module({
  controllers: [StudantsController],
  providers: [StudantsService]
})
export class StudantsModule {}
