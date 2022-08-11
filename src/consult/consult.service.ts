import { Injectable } from '@nestjs/common';
import { CreateConsultDto } from './dto/create-consult.dto';
import { UpdateConsultDto } from './dto/update-consult.dto';

@Injectable()
export class ConsultService {
  create(createConsultDto: CreateConsultDto) {
    return 'This action adds a new consult';
  }

  findAll() {
    return `This action returns all consult`;
  }

  findOne(id: number) {
    return `This action returns a #${id} consult`;
  }

  update(id: number, updateConsultDto: UpdateConsultDto) {
    return `This action updates a #${id} consult`;
  }

  remove(id: number) {
    return `This action removes a #${id} consult`;
  }
}
