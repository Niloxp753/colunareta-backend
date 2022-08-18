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
import { CreateInstitutionDto } from './dto/create-institution.dto';
import { InstitutionService } from './institution.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdateInstitutionDto } from './dto/update-institution.dto';

@ApiTags('institutions')
@Controller('institutions')
export class InstitutionController {
  constructor(private readonly institutionService: InstitutionService) {}

  @Post()
  @ApiOperation({
    summary: 'Cria uma nova instituição',
  })
  create(@Body() createInstitutionDto: CreateInstitutionDto) {
    return this.institutionService.create(createInstitutionDto);
  }

  @Get('find-all')
  @ApiOperation({
    summary: 'Lista todas as instituições',
  })
  findAll() {
    return this.institutionService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualiza uma instituição pelo ID',
  })
  findOne(@Param('id') id: string) {
    return this.institutionService.findById(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualiza uma instituição pelo ID',
  })
  update(
    @Param('id') id: string,
    @Body()
    dto: UpdateInstitutionDto,
  ) {
    return this.institutionService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Deleta uma instituição pelo ID',
  })
  delete(@Param('id') id: string) {
    return this.institutionService.delete(id);
  }
}
