import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUUID } from "class-validator";

export class CreateStudantDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do aluno',
    example: 'Alex Faria',
  })
  nome: string;

  @IsString()
  @ApiProperty({
    description: 'Idade do aluno',
    example: 25,
  })
  data_nasc: string;

  @IsString()
  @ApiProperty({
    description: 'Telefone de contato do aluno',
    example: '62921212121',
  })
  telefone?: string;

  @IsString()
  @ApiProperty({
    description: 'Id da instituição onde o aluno estuda',
    example: '074ac01e-ec6d-4277-b09f-bcdea2820a12',
  })
  instituicaoId: string;

  @IsString()
  @ApiProperty({
    description: 'Id da consulta do aluno',
    example: '....',
  })
  consultaId: string;
}
