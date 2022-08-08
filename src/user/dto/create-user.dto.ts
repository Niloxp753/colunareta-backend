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
  @ApiProperty({
    description: 'Nome de usuário',
    example: "AlexF"
  })
  nome_usuario: string;

  @IsString()
  @ApiProperty({
    description: 'Email para cadastro',
    example: "alexcaras1@hotmail.com"
  })
  email: string

  @IsString()
  @MinLength(8)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca',
  })
  @ApiProperty({
    description: "Senha do usuário",
    example: "Alex@123456"
  })
  senha: string

  @ApiProperty({
    description: 'Confirmação de senha deve ser igual',
    example: 'Alex@123456',
  })
  confirmaSenha: string;

  @IsString()
  @ApiProperty({
    description: "Cargo do usuário",
    example: "Médico"
  })
  cargo: string

  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: "Hierarquia do usuário dentro do sistema",
    example: 1
  })
  admin: number
}
