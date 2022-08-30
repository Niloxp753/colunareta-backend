import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { FollowUp } from '../entities/followUp.entity';
import { Forwarding } from '../model/followUp.enum';

export class CreateFollowUpDto implements FollowUp {
  id?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Data de inicio do acompanhamento',
    example: '26/05/2022',
  })
  startDate: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Primeira foto do acompanhamento via link',
    example: 'https://placeimg.com/640/480/any',
  })
  firstPhoto: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Segunda foto do acompanhamento via link',
    example: 'https://placeimg.com/640/480/any',
  })
  secondPhoto: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Data de retorno do acompanhamento',
    example: '26/06/2022',
  })
  returnDate: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Observações sobre o acompanhamento',
    example: 'Os ombros ou os quadris se mostram assimétricos',
  })
  note: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Encaminhamento do aluno para as áreas responsáveis',
    example: 'Fisioterapia',
  })
  forwarding: Forwarding[];

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'ID do aluno',
    example: 'c20ca255-15b2-489c-ab69-5ed167fb1dd7',
  })
  studentId: string;
}
