import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Consult } from 'src/consult/entities/consult.entity';
import { Student } from '../entities/student.entity';

export class CreateStudentDto implements Student {
  id?: string;

  @IsString()
  @ApiProperty({
    description: 'Nome do aluno',
    example: 'Alex Faria',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'Idade do aluno',
    example: 25,
  })
  age: string;

  @IsString()
  @ApiProperty({
    description: 'Telefone de contato do aluno',
    example: '62921212121',
  })
  phone?: string;

  @IsString()
  @ApiProperty({
    description: 'Id da instituição onde o aluno estuda',
    example: '074ac01e-ec6d-4277-b09f-bcdea2820a12',
  })
  institutionId: string;

  consult?: Consult[];
}
