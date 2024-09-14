import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { ResidentsController } from './employees.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [ResidentsController],
  providers: [EmployeesService],
})
export class ResidentsModule {}
