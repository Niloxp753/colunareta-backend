import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FindStudentModel } from './dto/findStudentModel.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
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

  async findAllStudent(page: number): Promise<FindStudentModel> {
    const countStudent = await this.prisma.student.count();
    const totalPages = Math.ceil(countStudent / 20);
    const skip = (page - 1) * 20;
    const studentList = await this.prisma.student.findMany({
      take: 20,
      skip: skip,
      orderBy: {
        name: 'asc',
      },
      include: {
        institution: {
          select: {
            name: true,
          },
        },
      },
    });
    return { students: studentList, totalPages: totalPages };
  }

  async findAllFilterStudent(
    page: number,
    search?: string,
  ): Promise<FindStudentModel> {
    const countStudent = await this.prisma.student.count();
    const totalPages = Math.ceil(countStudent / 20);
    const skip = (page - 1) * 20;
    const studentListInstitution = (
      await this.prisma.student.findMany({
        where: {
          institutionId: search,
        },
        take: 20,
        skip: skip,
        orderBy: {
          name: 'asc',
        },
      })
    ).filter((student) => student.institutionId.includes(search));
    return {
      students: studentListInstitution,
      totalPages: totalPages,
    };
  }

  async findByStudentId(id: string): Promise<Student> {
    const record = await this.prisma.student.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        age: true,
        phone: true,
        institutionId: true,
        followUp: true,
        institution: {
          select: {
            name: true,
          },
        },
      },
    });
    return record;
  }

  async updateStudent(id: string, data: UpdateStudentDto): Promise<Student> {
    return await this.prisma.student.update({
      where: { id },
      data,
    });
  }

  async deleteStudent(id: string): Promise<Student> {
    return await this.prisma.student.delete({
      where: { id },
    });
  }
}
