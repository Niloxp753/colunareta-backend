import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { handleError } from 'src/utility/handle-error.utility';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';
import { FindUserModel } from './dto/findUserModel.dto';

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
      password: await bcrypt.hash(dto.password, 10),
      confirmPassword: await bcrypt.hash(dto.confirmPassword, 10),
    };

    delete dto.confirmPassword;
    return await this.repository.createUser(data).catch(handleError);
  }

  async findAll(page: number): Promise<FindUserModel> {
    const userExist = await this.repository
      .findAllUser(page)
      .catch(handleError);

    if (userExist.users.length < 0) {
      throw new BadRequestException('Nenhum usuário cadastrado');
    }
    return userExist;
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
      if (dto.password !== dto.confirmPassword) {
        throw new BadRequestException('As senhas informadas não são iguais');
      }
    }

    const data: Partial<User> = {
      ...dto,
      password: await bcrypt.hash(dto.password, 10),
      confirmPassword: await bcrypt.hash(dto.confirmPassword, 10),
    };

    delete dto.confirmPassword;

    return this.repository.updateUser(id, data).catch(handleError);
  }

  async updateEmail(id: string, dto: UpdateUserDto): Promise<User> {
    await this.repository.findByUserEmailId(id).catch(handleError);

    if (dto.password) {
      if (dto.password !== dto.confirmPassword) {
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
}
