import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { PrismaService } from 'src/prisma/prisma.service';
import { FindUserModel } from './dto/findUserModel.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(data: User): Promise<User> {
    const PrismaInst = await this.prisma.user.create({
      data: {
        id: randomUUID(),
        name: data.name,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
      },
    });
    return PrismaInst;
  }

  async findAllUser(page: number): Promise<FindUserModel> {
    const countUser = await this.prisma.user.count();
    const totalPages = Math.ceil(countUser / 20);
    const skip = (page - 1) * 20;
    const userList = await this.prisma.user.findMany({
      take: 20,
      skip: skip,
      orderBy: {
        name: 'asc',
      },
    });
    return { users: userList, totalPages: totalPages };
  }

  async findByUserId(id: string): Promise<User> {
    const record = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        role: true,
      },
    });
    return record;
  }

  async updateUser(id: string, data: UpdateUserDto): Promise<User> {
    return await this.prisma.user.update({
      where: { id },
      data: data,
    });
  }

  async updateUserEmail(id: string, data: UpdateUserDto): Promise<User> {
    return await this.prisma.user.update({
      where: { id },
      data: data,
    });
  }

  async deleteUser(id: string): Promise<User> {
    return await this.prisma.user.delete({
      where: { id },
    });
  }
}
