import { Expose } from "class-transformer";
import { User } from 'src/entities/user.entity';

export class ApartmentDto {

  @Expose()
  id: number;

  @Expose()
  number: number;

  @Expose()
  block: string;

  @Expose()
  users: User[];
}