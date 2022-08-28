import { Institution } from '../entities/institution.entity';

export class FindInstitutionModel {
  institutions: Institution[];
  totalPages: number;
}
