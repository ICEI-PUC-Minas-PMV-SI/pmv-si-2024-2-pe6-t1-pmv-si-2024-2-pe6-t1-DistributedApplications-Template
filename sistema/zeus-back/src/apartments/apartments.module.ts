import { Module } from '@nestjs/common'
import { ApartmentsService } from './apartments.service'
import { ApartmentsController } from './apartments.controller'
import { Apartment } from '../entities/apartment.entity'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Apartment])],
  providers: [ApartmentsService],
  controllers: [ApartmentsController]
})
export class ApartmentsModule {}
