import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { User } from './user.entity'; // ajuste o caminho se necessário

@Entity()
export class Apartment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  number: number;

  @Column({ nullable: true })
  block: string;

  @OneToMany(() => User, (user) => user.apartment)
  residents: User[];
}