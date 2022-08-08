import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudantsService } from './studants.service';
import { CreateStudantDto } from './dto/create-studant.dto';
import { UpdateStudantDto } from './dto/update-studant.dto';

@Controller('studants')
export class StudantsController {
  constructor(private readonly studantsService: StudantsService) {}

  @Post()
  create(@Body() createStudantDto: CreateStudantDto) {
    return this.studantsService.create(createStudantDto);
  }

  @Get()
  findAll() {
    return this.studantsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studantsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudantDto: UpdateStudantDto) {
    return this.studantsService.update(+id, updateStudantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studantsService.remove(+id);
  }
}
