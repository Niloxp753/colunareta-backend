import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from 'src/user/entities/user.entity';
import { handleError } from 'src/utility/handle-error.utility';
import { CreateInstitutionDto } from './dto/create-institution.dto';
import { UpdateInstitutionDto } from './dto/update-institution.dto';

@Injectable()
export class InstitutionService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: string, dto: CreateInstitutionDto) {
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

  async findAll(user: User) {
    const institutionList = await this.prisma.institution.findMany({
      where: {
        usuarios: {
          every: {
            id: user.id,
          },
        },
      },
      select: {
        id: true,
        nome: true,
        telefone: true,
        cep: true,
        cidade: true,
        estado: true,
        logradouro: true,
        bairro: true,
        numero: true,
        complemento: true,
        alunos: true,
      },
    });

    if (institutionList.length === 0) {
      throw new NotFoundException(
        'Não existe insituições cadastrados para esse usuário.',
      );
    }
    return institutionList;
  }

  async findById(id: string) {
    const record = await this.prisma.institution.findUnique({
      where: { id },
      include: {
        alunos: true,
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
        nome: true,
        telefone: true,
        cep: true,
        cidade: true,
        estado: true,
        logradouro: true,
        bairro: true,
        numero: true,
        complemento: true,
        alunos: {
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

  async update(userId: string, id: string, dto: UpdateInstitutionDto) {
    const InstitutionUser = await this.findById(id);

    if (dto.alunosId) {
      let existAluno = false;
      InstitutionUser.alunos.map((aluno) => {
        if (aluno.id == dto.alunosId) {
          existAluno = true;
        }
      });

      if (existAluno) {
        return this.prisma.institution
          .update({
            where: { id: id },
            data: {
              nome: dto.nome,
              telefone: dto.telefone,
              cep: dto.cep,
              cidade: dto.cidade,
              estado: dto.estado,
              logradouro: dto.logradouro,
              bairro: dto.bairro,
              numero: dto.numero,
              complemento: dto.complemento,
              alunos: {
                disconnect: {
                  id: dto.alunosId,
                },
              },
            },
            include: {
              alunos: true,
            },
          })
          .catch(handleError);
      } else {
        return this.prisma.institution
          .update({
            where: { id: id },
            data: {
              nome: dto.nome,
              telefone: dto.telefone,
              cep: dto.cep,
              cidade: dto.cidade,
              estado: dto.estado,
              logradouro: dto.logradouro,
              bairro: dto.bairro,
              numero: dto.numero,
              complemento: dto.complemento,
              alunos: {
                connect: {
                  id: dto.alunosId,
                },
              },
            },
            include: {
              alunos: true,
            },
          })
          .catch(handleError);
      }
    }
  }

  async delete(id: string) {
    await this.findById(id);
    await this.prisma.institution.delete({ where: { id } });
  }
}
