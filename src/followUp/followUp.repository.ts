import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utility/handle-error.utility';
import { UpdateFollowUpDto } from './dto/update-followUp.dto';
import { FollowUp } from './entities/followUp.entity';
@Injectable()
export class FollowUpRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createFollowUp(data: FollowUp): Promise<FollowUp> {
    const PrismaInst = await this.prisma.followUp
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

  async findAllFollowUp(): Promise<FollowUp[]> {
    const followUpList = await this.prisma.followUp.findMany();
    return followUpList;
  }

  async findByFollowUpId(id: string): Promise<FollowUp> {
    const record = await this.prisma.followUp.findUnique({
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

  async updateFollowUp(id: string, data: UpdateFollowUpDto): Promise<FollowUp> {
    const followUp = await this.prisma.followUp.update({
      where: { id },
      data,
    });
    return followUp;
  }

  async deleteFollowUp(id: string): Promise<FollowUp> {
    return await this.prisma.followUp.delete({
      where: { id },
    });
  }
}
