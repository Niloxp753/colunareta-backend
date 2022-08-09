import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsPositive, IsString, Matches, MinLength } from "class-validator";

export class CreateUserDto {

  @IsString()
  @ApiProperty({
    description: 'Nome completo',
    example: "Alex Faria"
  })
  nome: string;

  @IsString()
  @Matches(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i,{
    message: "escreva um email valido"
  })
  @ApiProperty({
    description: 'Email para cadastro',
    example: "alexcaras1@hotmail.com"
  })
  email: string

  @IsString()
  @ApiProperty({
    description: "Cargo do usuário",
    example: "Admin"
  })
  cargo: string

  @IsString()
  @ApiProperty({
    description: "Instituição do usuário",
    example: 'instituição x'
  })
  instituicaoId: string
}
