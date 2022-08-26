import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Role } from 'src/auth/models/role.enum';

import { CreateFollowUpDto } from './dto/create-followUp.dto';
import { UpdateFollowUpDto } from './dto/update-followUp.dto';
import { FollowUpService } from './followUp.service';

@ApiTags('followUps')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
@Controller('followUps')
export class FollowUpController {
  constructor(private readonly followUpService: FollowUpService) {}

  @Roles(Role.ADMIN, Role.BACKOFFICE, Role.CAMPO)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Post()
  @ApiOperation({
    summary: 'Cadastra um novo acompanhamento',
  })
  create(@Body() createFollowUpDto: CreateFollowUpDto) {
    return this.followUpService.create(createFollowUpDto);
  }
  @Roles(Role.ADMIN, Role.BACKOFFICE)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get('find-all')
  @ApiOperation({
    summary: 'Lista todos os acompanhamentos cadastrados',
  })
  findAll() {
    return this.followUpService.findAll();
  }

  @Roles(Role.ADMIN, Role.BACKOFFICE, Role.CAMPO)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get(':id')
  @ApiOperation({
    summary: 'Visualiza um acompanhamento pelo ID',
  })
  findOne(@Param('id') id: string) {
    return this.followUpService.findById(id);
  }

  @Roles(Role.ADMIN, Role.BACKOFFICE, Role.CAMPO)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Patch(':id')
  @ApiOperation({
    summary: 'Atualiza um acompanhamento pelo ID',
  })
  update(@Param('id') id: string, @Body() dto: UpdateFollowUpDto) {
    return this.followUpService.update(id, dto);
  }

  @Roles(Role.ADMIN, Role.BACKOFFICE, Role.CAMPO)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Deleta um acompanhamento pelo ID',
  })
  delete(@Param('id') id: string) {
    return this.followUpService.delete(id);
  }
}
