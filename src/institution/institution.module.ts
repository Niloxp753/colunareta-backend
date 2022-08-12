import { Module } from '@nestjs/common';
import { InstitutionService } from './institution.service';
import { InstitutionController } from './institution.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { InstitutionRepository } from './institution.repository';

@Module({
  imports: [PrismaModule],
  controllers: [InstitutionController],
  providers: [InstitutionService, InstitutionRepository],
})
export class InstitutionModule {}
