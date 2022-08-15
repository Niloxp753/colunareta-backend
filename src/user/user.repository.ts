import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from './entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(data: User): Promise<User> {
    const PrismaInst = await this.prisma.user.create({
      data: {
        id: data.id,
        name: data.name,
        email: data.email,
        password: data.password,
        role: data.role,
        confirmPassword: data.confirmPassword,
      },
    });
    return PrismaInst;
  }

  async findAllUser(): Promise<User[]> {
    const userList = await this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        role: true,
      },
    });
    return userList;
  }
}
