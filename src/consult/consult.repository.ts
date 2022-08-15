import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ConsultRepository {
  constructor(private readonly prisma: PrismaService) {}

  // async createConsult(data: Consult): Promise<Consult> {
  //   const PrismaInst = await this.prisma.consult.create({
  //     data: {
  //       id: data.id,
  //       schedule: data.schedule,
  //       hour: data.hour,
  //       studentId: data.studentId,
  //     },
  //   });
  //   return PrismaInst;
  // }
}
