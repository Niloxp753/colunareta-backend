import { Injectable, NotFoundException } from '@nestjs/common';
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
        adressNumber: data.street,
        district: data.district,
        city: data.city,
        state: data.state,
        complement: data.complement,
      },
    });
    return PrismaInst;
  }

  async findById(id: string): Promise<Institution> {
    const record = await this.prisma.institution.findUnique({
      where: { id },
      include: {
        students: true,
      },
    });

    if (!record) {
      throw new NotFoundException(`Registro com o ID '${id}' não encontrado.`);
    }

    return record;
  }

  async findOne(id: string) {
    await this.findById(id);

    return await this.prisma.institution.findUnique({
      where: { id },
      select: {
        name: true,
        phone: true,
        cep: true,
        city: true,
        state: true,
        street: true,
        district: true,
        adressNumber: true,
        complement: true,
        students: {
          select: {
            id: true,
            nome: true,
            consultas: {
              select: {
                id: true,
                agenda: true,
                hora: true,
              },
            },
          },
        },
      },
    });
  }

  async updateInstitution(data: UpdateInstitutionDto): Promise<Institution> {
    return await this.prisma.institution.update({
      where: {
        id: data.id,
      },
      data,
      include: {
        students: true,
      },
    });
  }

  async deleteBillById(id: string): Promise<Institution> {
    return await this.prisma.institution.delete({ where: { id: id } });
  }
}
