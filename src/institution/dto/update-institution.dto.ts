import { CreateInstitutionDto } from './create-institution.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateInstitutionDto extends PartialType(CreateInstitutionDto) {}
