import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
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

    if (!record) {
      throw new NotFoundException(`Registro com o ID '${id}' não encontrado.`);
    }

    return record;
  }

  // async findOne(id: string) {
  //   await this.findById(id);

  //   return await this.prisma.institution.findUnique({
  //     where: { id },
  //     select: {
  //       name: true,
  //       phone: true,
  //       cep: true,
  //       city: true,
  //       state: true,
  //       street: true,
  //       district: true,
  //       adressNumber: true,
  //       complement: true,
  //       students: {
  //         select: {
  //           id: true,
  //           name: true,
  //           consult: {
  //             select: {
  //               id: true,
  //               schedule: true,
  //               hour: true,
  //             },
  //           },
  //         },
  //       },
  //     },
  //   });
  // }

  // async updateInstitution(data: UpdateInstitutionDto): Promise<Institution> {
  //   return await this.prisma.institution.update({
  //     where: {
  //       id: data.id,
  //     },
  //     data,
  //     include: {
  //       students: true,
  //     },
  //   });
  // }

  async deleteBillById(id: string): Promise<Institution> {
    return await this.prisma.institution.delete({ where: { id: id } });
  }
}
