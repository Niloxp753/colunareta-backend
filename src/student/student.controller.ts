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
import { StudentsService } from './student.service';
// import { CreateStudantDto } from './dto/create-studant.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@ApiTags('students')
@Controller('student')
export class StudentsController {
  constructor(private readonly studantsService: StudentsService) {}

  @Post()
  @ApiOperation({
    summary: 'Cria um novo aluno',
  })
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studantsService.create(createStudentDto);
  }

  @Get('find-all')
  @ApiOperation({
    summary: 'Lista todos os alunos cadastrados',
  })
  findAll() {
    return this.studantsService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualiza um aluno pelo ID',
  })
  findOne(@Param('id') id: string) {
    return this.studantsService.findById(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualiza um aluno pelo ID',
  })
  update(@Param('id') id: string, @Body() dto: UpdateStudentDto) {
    return this.studantsService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Deleta um aluno pelo ID',
  })
  delete(@Param('id') id: string) {
    return this.studantsService.delete(id);
  }
}
