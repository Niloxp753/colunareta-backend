import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utility/handle-error.utility';
import { UpdateConsultDto } from './dto/update-consult.dto';
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

  async findAllConsult(): Promise<Consult[]> {
    const consultList = await this.prisma.consult.findMany();
    return consultList;
  }

  async findByConsultId(id: string): Promise<Consult> {
    const record = await this.prisma.consult.findUnique({
      where: { id },
      select: {
        id: true,
        schedule: true,
        hour: true,
        studentId: true,
        students: {
          select: {
            name: true,
            age: true,
            phone: true,
            institutionId: true,
          },
        },
      },
    });
    return record;
  }

  async updateConsult(id: string, data: UpdateConsultDto): Promise<Consult> {
    return await this.prisma.consult.update({
      where: { id },
      data,
    });
  }

  async deleteConsult(id: string): Promise<Consult> {
    return await this.prisma.consult.delete({
      where: { id },
    });
  }
}
