import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MoradoresService } from './moradores.service';
import { CreateMoradoreDto } from './dto/create-moradore.dto';
import { UpdateMoradoreDto } from './dto/update-moradore.dto';

@Controller('moradores')
export class MoradoresController {
  constructor(
    private readonly moradoresService: MoradoresService) {}

  @Post('/')
  async create(@Body() body: CreateMoradoreDto) {
    const moradore = await this.moradoresService.create(body.nome, body.apartamento, body.bloco, body.telefone, body.email, body.cpf, body.status);

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

  @Patch('/alterarMorador=:id')
  update(@Param('id') id: string, @Body() body: UpdateMoradoreDto) {
    return this.moradoresService.update(+id, body);
  }

  @Delete('/deletarMorador=:id')
  remove(@Param('id') id: string) {
    return this.moradoresService.remove(+id);
  }
}