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
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ConsultService } from './consult.service';
import { CreateConsultDto } from './dto/create-consult.dto';
import { UpdateConsultDto } from './dto/update-consult.dto';

@ApiTags('consults')
@Controller('consult')
export class ConsultController {
  constructor(private readonly consultService: ConsultService) {}

  @Post()
  @ApiOperation({
    summary: 'Cria uma nova consulta',
  })
  create(@Body() createConsultDto: CreateConsultDto) {
    return this.consultService.create(createConsultDto);
  }

  @Get('find-all')
  @ApiOperation({
    summary: 'Lista todas as consultas cadastrados',
  })
  findAll() {
    return this.consultService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualiza uma consulta pelo ID',
  })
  findOne(@Param('id') id: string) {
    return this.consultService.findById(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualiza uma consulta pelo ID',
  })
  update(@Param('id') id: string, @Body() dto: UpdateConsultDto) {
    return this.consultService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Deleta uma consulta pelo ID',
  })
  delete(@Param('id') id: string) {
    return this.consultService.delete(id);
  }
}
