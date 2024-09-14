import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User, UserRole } from '../entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeesService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  findAll() {
    return this.repo.find({ where: { role: UserRole.PORTEIRO } });
  }

  async findOne(id: number) {
    const resident = await this.repo.findOne({
      where: { id, role: UserRole.PORTEIRO },
    });

    if (!resident) {
      throw new NotFoundException('Employee not found');
    }

    return resident;
  }

  async update(id: number, body: UpdateEmployeeDto) {
    const resident = await this.findOne(id);

    if (!resident) {
      throw new NotFoundException('Porteiro not found');
    }

    if (resident.role !== 'PORTEIRO') {
      throw new BadRequestException(
        'O usuário deve ser do tipo PORTEIRO para ser atualizado.',
      );
    }

    Object.assign(resident, body);
    return this.repo.save(resident);
  }

  async remove(id: number) {
    const resident = await this.findOne(id);
    if (!resident) {
      throw new NotFoundException('Porteiro not found');
    }
    return this.repo.remove(resident);
  }
}
