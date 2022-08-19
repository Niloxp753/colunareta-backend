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
import { ConsultService } from './consult.service';
import { CreateConsultDto } from './dto/create-consult.dto';
import { UpdateConsultDto } from './dto/update-consult.dto';

@ApiTags('consults')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
@Controller('consult')
export class ConsultController {
  constructor(private readonly consultService: ConsultService) {}

  @Roles(Role.ADMIN, Role.BACKOFFICE, Role.CAMPO)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Post()
  @ApiOperation({
    summary: 'Cria uma nova consulta',
  })
  create(@Body() createConsultDto: CreateConsultDto) {
    return this.consultService.create(createConsultDto);
  }
  @Roles(Role.ADMIN, Role.BACKOFFICE)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get('find-all')
  @ApiOperation({
    summary: 'Lista todas as consultas cadastradas',
  })
  findAll() {
    return this.consultService.findAll();
  }

  @Roles(Role.ADMIN, Role.BACKOFFICE, Role.CAMPO)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get(':id')
  @ApiOperation({
    summary: 'Visualiza uma consulta pelo ID',
  })
  findOne(@Param('id') id: string) {
    return this.consultService.findById(id);
  }

  @Roles(Role.ADMIN, Role.BACKOFFICE, Role.CAMPO)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Patch(':id')
  @ApiOperation({
    summary: 'Atualiza uma consulta pelo ID',
  })
  update(@Param('id') id: string, @Body() dto: UpdateConsultDto) {
    return this.consultService.update(id, dto);
  }

  @Roles(Role.ADMIN, Role.BACKOFFICE, Role.CAMPO)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Deleta uma consulta pelo ID',
  })
  delete(@Param('id') id: string) {
    return this.consultService.delete(id);
  }
}
