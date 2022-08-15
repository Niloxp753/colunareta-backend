import { Module } from '@nestjs/common';
import { StudentsService } from './student.service';
import { StudantsController } from './student.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { StudentRepository } from './student.repository';

@Module({
  imports: [PrismaModule],
  controllers: [StudantsController],
  providers: [StudentsService, StudentRepository],
})
export class StudantsModule {}
