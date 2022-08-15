import { Module } from '@nestjs/common';
import { ConsultService } from './consult.service';
import { ConsultController } from './consult.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ConsultRepository } from './consult.repository';

@Module({
  imports: [PrismaModule],
  controllers: [ConsultController],
  providers: [ConsultService, ConsultRepository],
})
export class ConsultModule {}
