import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, IsUrl } from "class-validator";
import { StringifyOptions } from "querystring";

export class CreateStudantDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do aluno',
    example: 'Alex Faria',
  })
  nome: string;

  @IsNumber()
  @ApiProperty({
    description: 'Idade do aluno',
    example: 25,
  })
  idade: number;

  @IsString()
  @ApiProperty({
    description: 'Telefone de contato do aluno',
    example: '62921212121',
  })
  telefone?: string;

  @IsString()
  @ApiProperty({
    description: 'CPF do aluno',
    example: '00000000000',
  })
  cpf: string;

  @IsString()
  @ApiProperty({
    description: 'CEP de onde o aluno residi',
    example: '74820610',
  })
  cep: string;

  @IsString()
  @ApiProperty({
    description: 'Nome do logradouro onde o aluno residi',
    example: 'Rua José Silva Tavares',
  })
  logradouro: string;

  @IsString()
  @ApiProperty({
    description: 'Nome do bairro onde o aluno residi',
    example: 'Lagoinha',
  })
  bairro: string;

  @IsString()
  @ApiProperty({
    description: 'Nome da cidade onde o aluno residi',
    example: 'Alex Faria',
  })
  cidade: string;

  @IsString()
  @ApiProperty({
    description: 'Nome do estado onde o aluno residi',
    example: 'São Paulo',
  })
  estado: string;

  @IsUrl()
  @ApiProperty({
    description: 'Imagem URL do aluno',
    example: 'https://st2.depositphotos.com/6544740/9337/i/600/depositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg',
  })
  url_image?: string;

  @IsString()
  @ApiProperty({
    description: 'Consultas agendadas para o aluno',
    example: '...',
  })
  consultas: string;

  @IsString()
  @ApiProperty({
    description: 'Agendar consulta para o aluno',
    example: '...',
  })
  agConsultas: string;

  @IsString()
  @ApiProperty({
    description: 'Id da instituição onde o aluno estuda',
    example: '074ac01e-ec6d-4277-b09f-bcdea2820a12',
  })
  instituicaoId: string;
}
