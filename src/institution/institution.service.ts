import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utility/handle-error.utility';
import { CreateInstitutionDto } from './dto/create-institution.dto';
import { UpdateInstitutionDto } from './dto/update-institution.dto';

@Injectable()
export class InstitutionService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateInstitutionDto) {
    if (dto.usuariosId) {
      return await this.prisma.institution
        .create({
          data: {
            nome: dto.nome,
            telefone: dto.telefone,
            cep: dto.cep,
            logradouro: dto.logradouro,
            bairro: dto.bairro,
            cidade: dto.cidade,
            estado: dto.estado,
            numero: dto.numero,
            complemento: dto.complemento,
            usuarios: {
              connect: {
                id: dto.usuariosId,
              },
            },
          },
          include: {
            usuarios: true,
          },
        })
        .catch(handleError);
    }
  }

  findAll() {
    return `This action returns all institution`;
  }

  findOne(id: string) {
    return `This action returns a #${id} institution`;
  }

  update(id: string, dto: UpdateInstitutionDto) {
    return `This action updates a #${id} institution`;
  }

  delete(id: string) {
    return `This action removes a #${id} institution`;
  }
}
