import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Apartment } from '../entities/apartment.entity';

@Injectable()
export class ApartmentsService {
  constructor(@InjectRepository(Apartment) private repo: Repository<Apartment>) {}

  create(number: number, block?: string) {
    const apartment = this.repo.create({ 
      number, 
      block: block ?? null
    });

    return this.repo.save(apartment);
  }

  findOne(id: number) {
    if(!id) {
      return null;
    }
    return this.repo.findOneBy({ id });
  }

  find(number: number) {
    return this.repo.find({ where: { number } });
  }

  async update(id: number, attrs: Partial<Apartment>) {
    const apartment = await this.findOne(id);
    if(!apartment) {
      throw new NotFoundException('apartment not found');
    }
    Object.assign(apartment, attrs);
    return this.repo.save(apartment);
  }

  async remove(id: number) {
    const apartment = await this.findOne(id);
    if(!apartment) {
      throw new NotFoundException('apartment not found');
    }
    return this.repo.remove(apartment);
  }
}
