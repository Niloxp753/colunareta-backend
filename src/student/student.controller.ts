import { Body, Controller, Post } from '@nestjs/common';
import { StudentsService } from './student.service';
// import { CreateStudantDto } from './dto/create-studant.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateStudentDto } from './dto/create-student.dto';

@ApiTags('students')
@Controller('student')
export class StudantsController {
  constructor(private readonly studantsService: StudentsService) {}

  @Post()
  @ApiOperation({
    summary: 'Cadastrar um aluno',
  })
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studantsService.create(createStudentDto);
  }

  // @Get()
  // @ApiOperation({
  //   summary: 'Vizualizar todos os alunos cadastrados',
  // })
  // findAll() {
  //   return this.studantsService.findAll();
  // }

  // @Get(':id')
  // @ApiOperation({
  //   summary: 'Vizualiza um aluno pelo ID',
  // })
  // findOne(@Param('id') id: string) {
  //   return this.studantsService.findOne(id);
  // }

  // @Patch(':id')
  // @ApiOperation({
  //   summary: 'Atulizar um aluno pelo ID',
  // })
  // update(@Param('id') id: string, @Body() updateStudantDto: UpdateStudantDto) {
  //   return this.studantsService.update(id, updateStudantDto);
  // }

  // @Delete(':id')
  // @HttpCode(HttpStatus.NO_CONTENT)
  // @ApiOperation({
  //   summary: 'Deletar um aluno pelo ID',
  // })
  // delete(@Param('id') id: string) {
  //   return this.studantsService.delete(id);
  // }
}
