import { BadRequestException, Injectable } from '@nestjs/common';
import { handleError } from 'src/utility/handle-error.utility';
import { Student } from './entities/student.entity';
import { StudentRepository } from './student.repository';
import { CreateStudentDto } from './dto/create-Student.dto';

@Injectable()
export class StudentsService {
  constructor(private readonly repository: StudentRepository) {}

  async create(dto: CreateStudentDto): Promise<Student> {
    return await this.repository.createStudent(dto).catch(handleError);
  }

  async findAll(): Promise<Student[]> {
    const studentExist = await this.repository.findAllStudent();

    if (studentExist.length <= 0) {
      throw new BadRequestException('Nenhum aluno cadastrado');
    }
    return await this.repository.findAllStudent();
  }

  // async findById(id: string): Promise<Student> {
  //   const record = await this.prisma.Student.findUnique({
  //     where: { id },
  //     select: this.StudentsSelect,
  //   });
  //   if (!record) {
  //     throw new NotFoundException(`Registro com o ID '${id}' não encontrado`);
  //   }
  //   return record;
  // }

  // findOne(id: string): Promise<Student> {
  //   return this.findById(id);
  // }

  // async update(id: string, dto: UpdateStudentDto): Promise<Student> {
  //   await this.findById(id);

  //   const data: Partial<Student> = {
  //     ...dto,
  //   };
  //   return this.prisma.Student
  //     .update({
  //       where: { id },
  //       data,
  //       select: this.StudentsSelect,
  //     })
  //     .catch(handleError);
  // }

  // async delete(id: string) {
  //   await this.findById(id);
  //   await this.prisma.Student.delete({ where: { id } });
  // }
}
