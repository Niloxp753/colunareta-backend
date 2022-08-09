import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InstitutionService } from './institution.service';
import { CreateInstitutionDto } from './dto/create-institution.dto';
import { UpdateInstitutionDto } from './dto/update-institution.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('institutions')
@Controller('institutions')
export class InstitutionController {
  constructor(private readonly institutionService: InstitutionService) {}

  @Post('create')
  @ApiOperation({
    summary: 'Cria uma nova instituição',
  })
  create(@Body() createInstitutionDto: CreateInstitutionDto) {
    return this.institutionService.create(createInstitutionDto);
  }

  @Get('find-all')
  @ApiOperation({
    summary: 'visualiza todas as instituições',
  })
  findAll() {
    return this.institutionService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualiza uma instituição pelo ID',
  })
  findOne(@Param('id') id: string) {
    return this.institutionService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualiza uma instituição pelo ID',
  })
  update(
    @Param('id') id: string,
    @Body() updateInstitutionDto: UpdateInstitutionDto,
  ) {
    return this.institutionService.update(id, updateInstitutionDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Deleta uma instituição pelo ID',
  })
  delete(@Param('id') id: string) {
    return this.institutionService.delete(id);
  }
}
