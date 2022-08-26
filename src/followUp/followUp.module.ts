import { Module } from '@nestjs/common';
import { FollowUpService } from './followUp.service';
import { FollowUpController } from './followUp.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { FollowUpRepository } from './followUp.repository';

@Module({
  imports: [PrismaModule],
  controllers: [FollowUpController],
  providers: [FollowUpService, FollowUpRepository],
})
export class ConsultModule {}
