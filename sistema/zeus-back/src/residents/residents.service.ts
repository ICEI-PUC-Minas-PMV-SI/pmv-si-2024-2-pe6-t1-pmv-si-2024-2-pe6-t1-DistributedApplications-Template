import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UpdateResidentDto } from './dto/update-resident.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User, UserRole } from '../entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ResidentsService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  findAll() {
    return this.repo.find({ where: { role: UserRole.MORADOR } });
  }

  async findOne(id: number) {
    const resident = await this.repo.findOne({
      where: { id, role: UserRole.MORADOR },
      relations: ['apartment']
    });

    if (!resident) {
      throw new NotFoundException('Morador not found');
    }
  
    return resident;
  }

  async update(id: number, body: UpdateResidentDto) {
    const resident = await this.findOne(id);

    if(!resident) {
      throw new NotFoundException('Morador not found');
    }

    if(resident.role !== 'MORADOR') {
      throw new BadRequestException('O usuário deve ser do tipo MORADOR para ser atualizado.');
    }

    Object.assign(resident, body);
    return this.repo.save(resident);
  }

  async remove(id: number) {
    const resident = await this.findOne(id);
    if(!resident) {
      throw new NotFoundException('Morador not found');
    }
    return this.repo.remove(resident);
  }
}
