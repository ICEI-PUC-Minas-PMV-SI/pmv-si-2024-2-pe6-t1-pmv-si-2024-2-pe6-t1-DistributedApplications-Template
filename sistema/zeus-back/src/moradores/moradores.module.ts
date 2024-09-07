import { Module } from '@nestjs/common';
import { MoradoresService } from './moradores.service';
import { MoradoresController } from './moradores.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Moradore } from './entities/Moradore.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Moradore])],
  controllers: [MoradoresController],
  providers: [MoradoresService],
})
export class MoradoresModule {}
