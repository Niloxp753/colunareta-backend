import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Matches } from 'class-validator';
import { Student } from 'src/student/entities/student.entity';
import { Institution } from '../entities/institution.entity';

export class CreateInstitutionDto implements Institution {
  id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nome completo da instituição',
    example: 'CE Joaquim Tavora',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/, {
    message: 'escreva um número válido.',
  })
  @ApiProperty({
    description: 'Número de telefone da instituição',
    example: '(21)2203-0000',
  })
  phone: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^[0-9]{5}-[0-9]{3}$/, {
    message: 'escreva um cep válido.',
  })
  @ApiProperty({
    description: 'Cep do endereço da instituição',
    example: '24220-000',
  })
  cep: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Número do endereço da instituição',
    example: 'SN',
  })
  adressNumber: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Endereço onde fica a instituição',
    example: 'Praça Prefeito Ferraz',
  })
  street: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Bairro onde fica a instituição',
    example: 'Icaraí',
  })
  district: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Cidade onde fica a instituição',
    example: 'Niterói',
  })
  city: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Estado onde fica a instituição',
    example: 'RJ',
  })
  state: string;

  @IsString()
  @ApiProperty({
    description: 'Complemento onde fica a instituição',
    example: 'Instituição próxima ao campo São Bento',
  })
  complement: string;

  // @IsString()
  @ApiProperty({
    description: 'Alunos da Instituição cadastrada',
    example: 'Thiago Ventura',
  })
  students?: Student[];
}
