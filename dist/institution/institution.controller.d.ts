import { InstitutionService } from './institution.service';
import { CreateInstitutionDto } from './dto/create-institution.dto';
import { UpdateInstitutionDto } from './dto/update-institution.dto';
export declare class InstitutionController {
    private readonly institutionService;
    constructor(institutionService: InstitutionService);
    create(createInstitutionDto: CreateInstitutionDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateInstitutionDto: UpdateInstitutionDto): string;
    remove(id: string): string;
}
