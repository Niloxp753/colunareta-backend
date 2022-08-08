import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { StudantsService } from './studants.service';
import { CreateStudantDto } from './dto/create-studant.dto';
import { UpdateStudantDto } from './dto/update-studant.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('studants')
@ApiBearerAuth()
@Controller('studant')
export class StudantsController {
  constructor(private readonly studantsService: StudantsService) {}

  @Post()
  @ApiOperation({
    summary: 'Cadastrar um aluno',
  })
  create(@Body() createStudantDto: CreateStudantDto) {
    return this.studantsService.create(createStudantDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Vizualizar todos os alunos cadastrados',
  })
  findAll() {
    return this.studantsService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Vizualiza um aluno pelo ID',
  })
  findOne(@Param('id') id: string) {
    return this.studantsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atulizar um aluno pelo ID',
  })
  update(@Param('id') id: string, @Body() updateStudantDto: UpdateStudantDto) {
    return this.studantsService.update(id, updateStudantDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Deletar um aluno pelo ID',
  })
  delete(@Param('id') id: string) {
    return this.studantsService.delete(id);
  }
}
