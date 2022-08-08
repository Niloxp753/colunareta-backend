import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

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
}
