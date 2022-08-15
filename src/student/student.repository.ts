import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findAllStudent(): Promise<Student[]> {
    const studentList = await this.prisma.student.findMany({
      select: {
        id: true,
        name: true,
        age: true,
        phone: true,
        institutionId: true,
        consult: true,
      },
    });
    return studentList;
  }

  async findOneStudent(id: string): Promise<Student> {
    const record = await this.prisma.student.findUnique({
      where: { id },
    });

    if (!record) {
      throw new NotFoundException(`Registro com o ID '${id}' não encontrado`);
    }
    return record;
  }
}
