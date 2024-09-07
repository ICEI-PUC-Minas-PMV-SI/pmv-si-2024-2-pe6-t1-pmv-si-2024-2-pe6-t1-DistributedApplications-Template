import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MoradoresService } from './moradores.service';
import { CreateMoradoreDto } from './dto/create-moradore.dto';
import { UpdateMoradoreDto } from './dto/update-moradore.dto';

@Controller('moradores')
export class MoradoresController {
  constructor(
    private readonly moradoresService: MoradoresService) {}

  @Post()
  async create(@Body() body: CreateMoradoreDto) {
    console.log(body);
    const moradore = await this.moradoresService.create(body.nome, body.apartamento, body.telefone, body.cpf, body.status, body.email, body.bloco);

    return moradore;
  }

  @Get()
  findAll() {
    return this.moradoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.moradoresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateMoradoreDto) {
    console.log(body);

    return this.moradoresService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moradoresService.remove(+id);
  }
}