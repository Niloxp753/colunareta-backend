import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { handleError } from 'src/utility/handle-error.utility';
import { ConsultRepository } from './consult.repository';
import { CreateConsultDto } from './dto/create-consult.dto';
import { UpdateConsultDto } from './dto/update-consult.dto';
import { Consult } from './entities/consult.entity';

@Injectable()
export class ConsultService {
  constructor(private readonly repository: ConsultRepository) {}

  async create(dto: CreateConsultDto) {
    return await this.repository.createConsult(dto).catch(handleError);
  }

  async findAll(): Promise<Consult[]> {
    const consultExist = await this.repository.findAllConsult();

    if (consultExist.length <= 0) {
      throw new BadRequestException('Nenhuma consulta cadastrado');
    }
    return consultExist;
  }

  async findById(id: string): Promise<Consult> {
    const record = await this.repository.findByConsultId(id);
    if (!record) {
      throw new NotFoundException(`Registro com o ID '${id}' não encontrado`);
    }
    return record;
  }

  async update(id: string, dto: UpdateConsultDto): Promise<Consult> {
    await this.repository.findByConsultId(id).catch(handleError);

    const data: Partial<Consult> = { ...dto };

    return this.repository.updateConsult(id, data).catch(handleError);
  }

  async delete(id: string): Promise<Consult> {
    const record = await this.repository.deleteConsult(id).catch(handleError);
    if (!record) {
      throw new NotFoundException(`Registro com o ID '${id}' não encontrado`);
    }
    return record;
  }
}
