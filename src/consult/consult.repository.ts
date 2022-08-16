import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utility/handle-error.utility';
import { Consult } from './entities/consult.entity';

@Injectable()
export class ConsultRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createConsult(data: Consult): Promise<Consult> {
    const PrismaInst = await this.prisma.consult
      .create({
        data: {
          id: data.id,
          schedule: data.schedule,
          hour: data.hour,
          studentId: data.studentId,
        },
      })
      .catch(handleError);
    return PrismaInst;
  }
}
