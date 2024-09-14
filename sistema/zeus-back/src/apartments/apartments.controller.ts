import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ApartmentsService } from './apartments.service';
import { CreateApartmentDto } from './dtos/create-apartment.dto';
import { JwtSessionGuard } from 'src/auth/guards/jwt-auth.guard';
import { UpdateApartmentDto } from './dtos/update-apartment.dto';
import { ApartmentDto } from './dtos/apartment.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';

@Serialize(ApartmentDto)
@Controller('apartment')
export class ApartmentsController {
  constructor(private apartmentsService: ApartmentsService) {}

  @Post()
  async create(@Body() body: CreateApartmentDto) {
    return await this.apartmentsService.create(body.number, body.block);
  }

  @Get()
  async findAll() {
    return await this.apartmentsService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtSessionGuard)
  async findOne(@Param('id') id: string) {
    return await this.apartmentsService.findOne(+id);
  }

  @Get()
  @UseGuards(JwtSessionGuard)
  findByNumber(@Query('number') number: number) {
    return this.apartmentsService.findByNumber(number);
  }

  @Put(':id')
  @UseGuards(JwtSessionGuard)
  update(@Param('id') id: string, @Body() body: UpdateApartmentDto) {
    return this.apartmentsService.update(+id, body);
  }

  @Delete(':id')
  @UseGuards(JwtSessionGuard)
  remove(@Param('id') id: string) {
    return this.apartmentsService.remove(+id);
  }
}
