import { Module } from '@nestjs/common';
import { VisitorsService } from './visitors.service';
import { VisitorsController } from './visitors.controller';
import { Visitor } from 'src/entities/visitor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Visitor])],
  providers: [VisitorsService],
  controllers: [VisitorsController]
})
export class VisitorsModule {}
