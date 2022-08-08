import { Module } from '@nestjs/common';
import { StudantsService } from './studants.service';
import { StudantsController } from './studants.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
  ],
  controllers: [StudantsController],
  providers: [StudantsService]
})
export class StudantsModule {}
