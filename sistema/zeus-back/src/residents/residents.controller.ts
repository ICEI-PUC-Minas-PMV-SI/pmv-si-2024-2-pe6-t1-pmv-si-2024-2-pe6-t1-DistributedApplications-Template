import { Controller, Get, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { ResidentsService } from './residents.service';
import { UpdateResidentDto } from './dto/update-resident.dto';
import { JwtSessionGuard } from 'src/auth/guards/jwt-auth.guard';
import { ResidentDto } from './dto/resident.dto';
import { Serialize } from '../interceptors/serialize.interceptor';

@Controller('resident')
@Serialize(ResidentDto)
export class ResidentsController {
  constructor(
    private readonly residentsService: ResidentsService) {}

  @Get()
  @UseGuards(JwtSessionGuard)
  findAll() {
    return this.residentsService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtSessionGuard)
  findOne(@Param('id') id: string) {
    return this.residentsService.findOne(+id);
  }

  @Put(':id')
  @UseGuards(JwtSessionGuard)
  update(@Param('id') id: string, @Body() body: UpdateResidentDto) {
    return this.residentsService.update(+id, {...body, role: 'MORADOR'});
  }

  @Delete(':id')
  @UseGuards(JwtSessionGuard)
  remove(@Param('id') id: string) {
    return this.residentsService.remove(+id);
  }
}