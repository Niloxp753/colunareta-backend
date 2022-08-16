import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { handleError } from 'src/utility/handle-error.utility';
// import { PrismaService } from 'src/prisma/prisma.service';
// import { User } from 'src/user/entities/user.entity';
// import { handleError } from 'src/utility/handle-error.utility';
import { CreateInstitutionDto } from './dto/create-institution.dto';
import { UpdateInstitutionDto } from './dto/update-institution.dto';
// import { UpdateInstitutionDto } from './dto/update-institution.dto';
import { Institution } from './entities/institution.entity';
import { InstitutionRepository } from './institution.repository';

@Injectable()
export class InstitutionService {
  constructor(private readonly repository: InstitutionRepository) {}

  async create(dto: CreateInstitutionDto): Promise<Institution> {
    return await this.repository.createInstitution(dto).catch(handleError);
  }

  async findAll(): Promise<Institution[]> {
    const institutionExist = await this.repository.findAllInstitution();

    if (institutionExist.length <= 0) {
      throw new BadRequestException('Nenhuma instituição cadastrada');
    }
    return await this.repository.findAllInstitution();
  }

  async findById(id: string): Promise<Institution> {
    const record = await this.repository.findByInstitutionId(id);
    if (!record) {
      throw new NotFoundException(`Registro com o ID '${id}' não encontrado`);
    }
    return record;
  }

  async update(id: string, dto: UpdateInstitutionDto): Promise<Institution> {
    await this.repository.findByInstitutionId(id).catch(handleError);

    const data: Partial<Institution> = { ...dto };

    return this.repository.updateInstitution(id, data).catch(handleError);
  }

  async delete(id: string): Promise<Institution> {
    const record = await this.repository
      .deleteInstitution(id)
      .catch(handleError);
    if (!record) {
      throw new NotFoundException(`Registro com o ID '${id}' não encontrado`);
    }
    return record;
  }
}
