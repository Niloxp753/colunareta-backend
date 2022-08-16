import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { handleError } from 'src/utility/handle-error.utility';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) {}

  async create(dto: CreateUserDto): Promise<User> {
    if (dto.password) {
      if (dto.password != dto.confirmPassword) {
        throw new BadRequestException('As senhas informadas não são iguais');
      }
    }

    const data: User = {
      ...dto,
      password: dto.password,
      confirmPassword: dto.confirmPassword,
    };

    return await this.repository.createUser(data).catch(handleError);
  }

  async findAll(): Promise<User[]> {
    const userExist = await this.repository.findAllUser();

    if (userExist.length < 0) {
      throw new BadRequestException('Nenhum usuário cadastrado');
    }
    return await this.repository.findAllUser().catch(handleError);
  }

  async findById(id: string): Promise<User> {
    const record = await this.repository.findByUserId(id).catch(handleError);
    if (!record) {
      throw new NotFoundException(`Registro com o ID '${id}' não encontrado`);
    }
    return record;
  }

  async update(id: string, dto: UpdateUserDto): Promise<User> {
    await this.repository.findByUserId(id).catch(handleError);

    if (dto.password) {
      if (dto.password === dto.confirmPassword) {
        throw new BadRequestException('As senhas informadas não são iguais');
      }
    }

    const data: Partial<User> = { ...dto };

    return this.repository.updateUser(id, data).catch(handleError);
  }

  async delete(id: string): Promise<User> {
    const record = await this.repository.deleteUser(id).catch(handleError);
    if (!record) {
      throw new NotFoundException(`Registro com o ID '${id}' não encontrado`);
    }
    return record;
  }

  // async findById(id: string): Promise<User> {
  //   const record = await this.prisma.user
  //     .findUnique({
  //       where: { id },
  //       select: this.userSelect,
  //     })
  //     .catch(handleError);
  //   if (!record) {
  //     throw new NotFoundException(`Registro com o ID '${id}' não encontrado`);
  //   }
  //   return record;
  // }

  // async findOne(id: string): Promise<User> {
  //   return this.findById(id).catch(handleError);
  // }

  // async update(id: string, dto: UpdateUserDto): Promise<User> {
  //   await this.findById(id);

  //   if (dto.password) {
  //     if (dto.password != dto.confirmPassword) {
  //       throw new BadRequestException('As senhas informadas não são iguais');
  //     }
  //   }

  //   delete dto.confirmPassword;

  //   const data: Partial<User> = { ...dto };

  //   return this.prisma.user
  //     .update({
  //       where: { id },
  //       data,
  //       select: this.userSelect,
  //     })
  //     .catch(handleError);
  // }

  // async delete(id: string) {
  //   await this.findById(id);
  //   await this.prisma.user.delete({ where: { id } }).catch(handleError);
  // }
}
