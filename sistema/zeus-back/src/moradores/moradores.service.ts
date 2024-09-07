import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMoradoreDto } from './dto/create-moradore.dto';
import { UpdateMoradoreDto } from './dto/update-moradore.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Moradore } from './entities/Moradore.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MoradoresService {
  constructor(@InjectRepository(Moradore) private repo: Repository<Moradore>) {}

  create(nome: string, apartamento: string, telefone: string, cpf: string, status: string, email?: string, bloco?: string) {
    console.log(nome, apartamento, bloco, telefone, email, cpf, status);

    const moradore = this.repo.create({ nome, apartamento, bloco, telefone, email, cpf, status });

    return this.repo.save(moradore);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    if(!id) {
      return null;
    }
    return this.repo.findOne({ where: { id } });
  }

  async update(id: number, body: UpdateMoradoreDto) {
    const moradores = await this.findOne(id);
    if(!moradores) {
      throw new NotFoundException('moradore not found');
    }
    Object.assign(moradores, body);
    return this.repo.save(moradores);
  }

  async remove(id: number) {
    const moradore = await this.findOne(id);
    if(!moradore) {
      throw new NotFoundException('moradore not found');
    }
    return this.repo.remove([moradore]);
  }
}
