import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { handleError } from 'src/utility/handle-error.utility';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';
import { StudentRepository } from './student.repository';

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
    return studentExist;
  }

  async findById(id: string): Promise<Student> {
    const record = await this.repository.findByStudentId(id);
    if (!record) {
      throw new NotFoundException(`Registro com o ID '${id}' não encontrado`);
    }
    return record;
  }

  async update(id: string, dto: UpdateStudentDto): Promise<Student> {
    await this.repository.findByStudentId(id).catch(handleError);

    const data: Partial<Student> = { ...dto };

    return this.repository.updateStudent(id, data).catch(handleError);
  }

  async delete(id: string): Promise<Student> {
    const record = await this.repository.deleteStudent(id).catch(handleError);
    if (!record) {
      throw new NotFoundException(`Registro com o ID '${id}' não encontrado`);
    }
    return record;
  }
}
