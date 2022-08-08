import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utility/handle-error.utility';
import { CreateStudantDto } from './dto/create-studant.dto';
import { UpdateStudantDto } from './dto/update-studant.dto';
import { Studant } from './entities/studant.entity';

@Injectable()
export class StudantsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createStudantDto: CreateStudantDto): Promise<Studant> {
    const data: Prisma.StudantCreateInput = {

    }
    return await this.prisma.studant.create({ data }).catch(handleError);
  }

  findAll(): Promise<Studant[]> {
    return this.prisma.studant.findMany();
  }

  async findById(id: string): Promise<Studant> {
    const record = await this.prisma.studant.findUnique({ where: { id } });
    if (!record) {
      throw new NotFoundException(`Registro com o ID '${id}' não encontrado`);
    }
    return record;
  }

  findOne(id: string): Promise<Studant> {
    return this.findById(id);
  }

  async update(id: string, dto: UpdateStudantDto): Promise<Studant> {
    await this.findById(id);

    const data: Partial<Prisma.StudantCreateInput> = {

    }
    return this.prisma.studant.update({
      where: { id },
      data
    }).catch(handleError);
  }

  async delete(id: string) {
    await this.findById(id);
    await this.prisma.studant.delete({ where: { id } });
  }
}
