import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utility/handle-error.utility';
import { FindFollowUpModel } from './dto/findFollowUpModel.dto';
import { UpdateFollowUpDto } from './dto/update-followUp.dto';
import { FollowUp } from './entities/followUp.entity';
@Injectable()
export class FollowUpRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createFollowUp(data: FollowUp): Promise<FollowUp> {
    const PrismaInst = await this.prisma.followUp.create({
      data: {
        id: data.id,
        firstPhoto: data.firstPhoto,
        secondPhoto: data.secondPhoto,
        note: data.note,
        startDate: data.startDate,
        returnDate: data.returnDate,
        forwarding: data.forwarding,
        studentId: data.studentId,
      },
    });
    return PrismaInst;
  }

  async findAllFollowUp(page: number): Promise<FindFollowUpModel> {
    const countFollowUp = await this.prisma.followUp.count();
    const totalPages = Math.ceil(countFollowUp / 20);
    const skip = (page - 1) * 20;
    const followUpList = await this.prisma.followUp.findMany({
      take: 20,
      skip: skip,
      orderBy: {
        startDate: 'asc',
      },
    });
    return { followUps: followUpList, totalPages: totalPages };
  }

  async findByFollowUpId(id: string): Promise<FollowUp> {
    const record = await this.prisma.followUp.findUnique({
      where: { id },
      select: {
        id: true,
        firstPhoto: true,
        secondPhoto: true,
        startDate: true,
        returnDate: true,
        note: true,
        forwarding: true,
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
