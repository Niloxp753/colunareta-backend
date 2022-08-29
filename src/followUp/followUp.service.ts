import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { handleError } from 'src/utility/handle-error.utility';
import { FollowUpRepository } from './followUp.repository';
import { CreateFollowUpDto } from './dto/create-followUp.dto';
import { UpdateFollowUpDto } from './dto/update-followUp.dto';
import { FollowUp } from './entities/followUp.entity';
import { FindFollowUpModel } from './dto/findFollowUpModel.dto';

@Injectable()
export class FollowUpService {
  constructor(private readonly repository: FollowUpRepository) {}

  async create(dto: CreateFollowUpDto): Promise<FollowUp> {
    return await this.repository.createFollowUp(dto).catch(handleError);
  }

  async findAll(page: number): Promise<FindFollowUpModel> {
    const followUpExist = await this.repository.findAllFollowUp(page);

    if (followUpExist.followUps.length <= 0) {
      throw new BadRequestException('Nenhum acompanhamento cadastrado');
    }
    return followUpExist;
  }

  async findById(id: string): Promise<FollowUp> {
    const record = await this.repository.findByFollowUpId(id);
    if (!record) {
      throw new NotFoundException(`Registro com o ID '${id}' não encontrado`);
    }
    return record;
  }

  async update(id: string, dto: UpdateFollowUpDto): Promise<FollowUp> {
    await this.repository.findByFollowUpId(id).catch(handleError);

    const data: Partial<FollowUp> = { ...dto };

    return await this.repository.updateFollowUp(id, data).catch(handleError);
  }

  async delete(id: string): Promise<FollowUp> {
    const record = await this.repository.deleteFollowUp(id).catch(handleError);
    if (!record) {
      throw new NotFoundException(`Registro com o ID '${id}' não encontrado`);
    }
    return record;
  }
}
