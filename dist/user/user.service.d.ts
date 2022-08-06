import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
export declare class UserService {
    private readonly prisma;
    private userSelect;
    constructor(prisma: PrismaService);
    findAll(): Promise<User[]>;
    findOne(id: string): string;
    create(createUserDto: CreateUserDto): string;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
}
