import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Role } from 'src/auth/models/role.enum';
import { EmailService } from 'src/mails/email.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private mailService: EmailService,
  ) {}

  @ApiOperation({
    summary: 'Cria um novo usuário',
  })
  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  async create(@Body() createUserDto: CreateUserDto) {
    const userCreate = await this.userService.create(createUserDto);
    await this.mailService.sendEmail(userCreate);
    return userCreate;
  }

  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get('find-all')
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Lista todos os usuários de forma ordenada e paginada',
  })
  findAll(@Query('page') page: string) {
    return this.userService.findAll(Number(page));
  }

  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Visualiza o usuário pelo ID',
  })
  findOne(@Param('id') id: string) {
    return this.userService.findById(id);
  }

  @Roles(Role.ADMIN, Role.BACKOFFICE, Role.CAMPO)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Patch(':id')
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Atualiza o usuário pelo ID',
  })
  update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.userService.update(id, dto);
  }

  @Patch('email/:id')
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Atualiza o usuário pelo ID recebido pelo email',
  })
  updateEmail(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.userService.update(id, dto);
  }

  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Deleta um usuário pelo ID',
  })
  delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
