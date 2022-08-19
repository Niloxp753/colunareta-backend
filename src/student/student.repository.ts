import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
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

  async findAllStudent(): Promise<Student[]> {
    const studentList = await this.prisma.student.findMany({include:{
      institution:{
        select:{
          name:true
        }
      }
    }});
    return studentList;
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
        consult: true,
        institution:{
          select:{
            name: true
          }
        }
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
