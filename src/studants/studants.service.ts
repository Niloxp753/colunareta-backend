import { Injectable } from '@nestjs/common';
import { CreateStudantDto } from './dto/create-studant.dto';
import { UpdateStudantDto } from './dto/update-studant.dto';

@Injectable()
export class StudantsService {
  create(createStudantDto: CreateStudantDto) {
    return 'This action adds a new studant';
  }

  findAll() {
    return `This action returns all studants`;
  }

  findOne(id: string) {
    return `This action returns a #${id} studant`;
  }

  update(id: string, updateStudantDto: UpdateStudantDto) {
    return `This action updates a #${id} studant`;
  }

  delete(id: string) {
    return `This action removes a #${id} studant`;
  }
}
