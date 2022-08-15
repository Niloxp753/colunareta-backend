import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createStudent(data: Student): Promise<Student> {
    const PrismaInst = await this.prisma.student.create({
      data: {
        id: data.id,
        name: data.name,
        age: data.age,
        phone: data.phone,
        institutionId: data.institutionId,
      },
    });
    return PrismaInst;
  }
}
