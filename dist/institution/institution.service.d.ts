import { CreateInstitutionDto } from './dto/create-institution.dto';
import { UpdateInstitutionDto } from './dto/update-institution.dto';
export declare class InstitutionService {
    create(createInstitutionDto: CreateInstitutionDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateInstitutionDto: UpdateInstitutionDto): string;
    remove(id: number): string;
}
