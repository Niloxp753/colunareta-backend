import { ApiProperty } from '@nestjs/swagger';
import { IsDataURI, IsNotEmpty, IsString } from 'class-validator';
import { Consult } from '../entities/consult.entity';

export class CreateConsultDto implements Consult {
  id?: string;

  @IsString()
  @IsNotEmpty()
  @IsDataURI()
  @ApiProperty({
    description: 'Data das consultas',
    example: '26/05/2022',
  })
  schedule: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Horário das consultas',
    example: '13:00',
  })
  hour: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'ID do Aluno que fará a consulta',
    example: '070f1cc1-b571-409c-ab69-66cc970a20bd',
  })
  studentId: string;
}
