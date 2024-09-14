import {
  Controller,
  Get,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { JwtSessionGuard } from '../auth/guards/jwt-auth.guard';
import { EmployeeDto } from './dto/employee.dto';
import { Serialize } from '../interceptors/serialize.interceptor';

@Controller('employee')
@Serialize(EmployeeDto)
export class EmployeesController {
  constructor(private readonly residentsService: EmployeesService) {}

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
  update(@Param('id') id: string, @Body() body: UpdateEmployeeDto) {
    return this.residentsService.update(+id, { ...body, role: 'PORTEIRO' });
  }

  @Delete(':id')
  @UseGuards(JwtSessionGuard)
  remove(@Param('id') id: string) {
    return this.residentsService.remove(+id);
  }
}
