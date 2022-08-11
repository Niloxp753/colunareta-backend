import { ApiProperty } from '@nestjs/swagger';
import { IsString, Matches, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: 'Nome completo',
    example: 'Alex Faria',
  })
  nome: string;

  @IsString()
  @Matches(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i, {
    message: 'escreva um email valido',
  })
  @ApiProperty({
    description: 'Email para cadastro',
    example: 'alexcaras1@hotmail.com',
  })
  email: string;

  @IsString()
  @ApiProperty({
    description: 'Cargo do usuário',
    example: 'Admin',
  })
  cargo: string;

  @ApiProperty({
    description: 'Instituição do usuário',
    example: 'instituição x',
  })
  instituicaoId: [];

  @IsString()
  @MinLength(6)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca',
  })
  @ApiProperty({
    description: 'Senha do usuario',
    example: 'Alex@123456',
  })
  senha: string;

  @ApiProperty({
    description: 'Confirmação de senha deve ser igual',
    example: 'Alex@123456',
  })
  confirmaSenha: string;
}
