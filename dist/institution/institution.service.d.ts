import { PrismaService } from 'src/prisma/prisma.service';
import { CreateInstitutionDto } from './dto/create-institution.dto';
import { UpdateInstitutionDto } from './dto/update-institution.dto';
export declare class InstitutionService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateInstitutionDto): Promise<import(".prisma/client").Institution>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, dto: UpdateInstitutionDto): string;
    delete(id: string): string;
}
export declare function handleError(error: Error): undefined;
