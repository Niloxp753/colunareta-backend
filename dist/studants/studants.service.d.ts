import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStudantDto } from './dto/create-studant.dto';
import { UpdateStudantDto } from './dto/update-studant.dto';
import { Studant } from './entities/studant.entity';
export declare class StudantsService {
    private readonly prisma;
    private studantsSelect;
    constructor(prisma: PrismaService);
    create(dto: CreateStudantDto): Promise<Studant>;
    findAll(): Promise<Studant[]>;
    findById(id: string): Promise<Studant>;
    findOne(id: string): Promise<Studant>;
    update(id: string, dto: UpdateStudantDto): Promise<Studant>;
    delete(id: string): Promise<void>;
}
