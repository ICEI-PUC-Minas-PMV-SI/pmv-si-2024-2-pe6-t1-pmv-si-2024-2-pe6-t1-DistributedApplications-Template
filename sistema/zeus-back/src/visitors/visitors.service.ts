import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateVisitorsDto } from './dtos/update-visitor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Visitor } from 'src/entities/visitor.entity';

@Injectable()
export class VisitorsService {
  constructor(@InjectRepository(Visitor) private repo: Repository<Visitor>) {}

  create(name: string, cellphone: string, cpf: number) {
    const visitor = this.repo.create({ name, cellphone, cpf});
    return this.repo.save(visitor);
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

  async update(id: number, body: UpdateVisitorsDto) {
    const visitor = await this.findOne(id);
    if(!visitor) {
      throw new NotFoundException('visitor not found');
    }
    Object.assign(visitor, body);
    return this.repo.save(visitor);
  }

  async remove(id: number) {
    const visitor = await this.findOne(id);
    if(!visitor) {
      throw new NotFoundException('visitor not found');
    }
    return this.repo.remove([visitor]);
  }
}
