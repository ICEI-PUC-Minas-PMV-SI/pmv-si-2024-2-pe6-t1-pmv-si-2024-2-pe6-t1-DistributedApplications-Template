import { Body, Controller, Post } from '@nestjs/common';
import { ApartmentsService } from './apartments.service';
import { CreateApartmentDto } from './dtos/create-apartment.dto';

@Controller('apartments')
export class ApartmentsController {
  constructor(
    private apartmentsService: ApartmentsService,
  ) {}

  @Post('/')
  async createUser(@Body() body: CreateApartmentDto) {
    const user = await this.apartmentsService.create(body.number, body.block);

    return user;
  }
}
