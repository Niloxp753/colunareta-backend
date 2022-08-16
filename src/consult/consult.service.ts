import { Injectable } from '@nestjs/common';
import { ConsultRepository } from './consult.repository';
import { CreateConsultDto } from './dto/create-consult.dto';

@Injectable()
export class ConsultService {
  constructor(private readonly repository: ConsultRepository) {}

  async create(dto: CreateConsultDto) {
    return await this.repository.createConsult(dto);
  }

  // findAll() {
  //   return `This action returns all consult`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} consult`;
  // }

  // update(id: number, updateConsultDto: UpdateConsultDto) {
  //   return `This action updates a #${id} consult`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} consult`;
  // }
}
