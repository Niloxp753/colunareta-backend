import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateInstitutionDto } from './dto/update-institution.dto';
import { Institution } from './entities/institution.entity';

@Injectable()
export class InstitutionRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createInstitution(data: Institution): Promise<Institution> {
    const PrismaInst = await this.prisma.institution.create({
      data: {
        id: data.id,
        name: data.name,
        cep: data.cep,
        phone: data.phone,
        street: data.street,
        adressNumber: data.adressNumber,
        district: data.district,
        city: data.city,
        state: data.state,
        complement: data.complement,
      },
    });
    return PrismaInst;
  }

  async findAllInstitution(): Promise<Institution[]> {
    const institutionList = await this.prisma.institution.findMany();
    return institutionList;
  }

  async findByInstitutionId(id: string): Promise<Institution> {
    const record = await this.prisma.institution.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        phone: true,
        cep: true,
        street: true,
        district: true,
        city: true,
        state: true,
        adressNumber: true,
        complement: true,
        students: true,
      },
    });
    return record;
  }

  async updateInstitution(
    id: string,
    data: UpdateInstitutionDto,
  ): Promise<Institution> {
    return await this.prisma.institution.update({
      where: { id },
      data,
      include: {
        students: true,
      },
    });
  }

  async deleteInstitution(id: string): Promise<Institution> {
    return await this.prisma.institution.delete({ where: { id } });
  }
}
