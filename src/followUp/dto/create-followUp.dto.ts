import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { FollowUp } from '../entities/followUp.entity';

export class CreateFollowUpDto implements FollowUp {
  id?: string;

  @IsString()
  @IsNotEmpty()
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
    description: 'ID do aluno',
    example: 'c20ca255-15b2-489c-ab69-5ed167fb1dd7',
  })
  studentId: string;
}
