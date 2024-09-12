import { CreateVisitorDto } from './dtos/create-visitor.dto';
import { UpdateVisitorsDto } from './dtos/update-visitor.dto';
import { VisitorsService } from './visitors.service';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('visitor')
export class VisitorsController {

  constructor(private readonly visitorsService: VisitorsService) {}

  @Post()
  async create(@Body() body: CreateVisitorDto) {
    const visitor = await this.visitorsService.create(body.name, body.cellphone, body.cpf);

    return visitor;
  }

  @Get()
  findAll() {
    return this.visitorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.visitorsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateVisitorsDto) {
    return this.visitorsService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.visitorsService.remove(+id);
  }

}
