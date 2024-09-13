import { Expose } from "class-transformer";
import { Apartment } from 'src/entities/apartment.entity';

export class ResidentDto {

  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  email: string;

  @Expose()
  cellphone: string;

  @Expose()
  cpf: string;

  @Expose()
  role: string;

  @Expose()
  apartmentId: string;

  @Expose()
  apartment: Apartment
}