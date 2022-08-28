import { ApiProperty } from '@nestjs/swagger';
import { IsString, Matches, MinLength } from 'class-validator';
import { User } from '../entities/user.entity';

export class CreateUserDto implements User {
  id?: string;

  @IsString()
  @ApiProperty({
    description: 'Nome completo',
    example: 'Alex Faria',
  })
  name: string;

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
  @MinLength(6)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca',
  })
  @ApiProperty({
    description: 'Senha do usuario',
    example: 'Alex@123456',
  })
  password: string;

  @ApiProperty({
    description: 'Confirmação de senha deve ser igual',
    example: 'Alex@123456',
  })
  confirmPassword: string;
}
