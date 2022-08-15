import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ConsultService } from './consult.service';

@ApiTags('consults')
@Controller('consult')
export class ConsultController {
  constructor(private readonly consultService: ConsultService) {}

  // @Post()
  // @ApiOperation({
  //   summary: 'Cria uma nova consulta',
  // })
  // create(@Body() createConsultDto: CreateConsultDto) {
  //   return this.consultService.create(createConsultDto);
  // }

  // @Get()
  // findAll() {
  //   return this.consultService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.consultService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateConsultDto: UpdateConsultDto) {
  //   return this.consultService.update(+id, updateConsultDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.consultService.remove(+id);
  // }
}
