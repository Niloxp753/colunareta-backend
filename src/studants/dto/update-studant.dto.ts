import { PartialType } from '@nestjs/mapped-types';
import { CreateStudantDto } from './create-studant.dto';

export class UpdateStudantDto extends PartialType(CreateStudantDto) {}
