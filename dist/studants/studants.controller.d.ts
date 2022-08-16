import { StudantsService } from './studants.service';
import { CreateStudantDto } from './dto/create-studant.dto';
import { UpdateStudantDto } from './dto/update-studant.dto';
export declare class StudantsController {
    private readonly studantsService;
    constructor(studantsService: StudantsService);
    create(createStudantDto: CreateStudantDto): Promise<import("./entities/studant.entity").Studant>;
    findAll(): Promise<import("./entities/studant.entity").Studant[]>;
    findOne(id: string): Promise<import("./entities/studant.entity").Studant>;
    update(id: string, updateStudantDto: UpdateStudantDto): Promise<import("./entities/studant.entity").Studant>;
    delete(id: string): Promise<void>;
}
