import { Student } from '../entities/student.entity';

export class FindStudentModel {
  students: Student[];
  totalPages: number;
}
