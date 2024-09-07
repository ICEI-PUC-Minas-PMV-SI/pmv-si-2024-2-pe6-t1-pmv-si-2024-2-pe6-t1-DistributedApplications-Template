import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne } from 'typeorm';
import { Exclude } from 'class-transformer';
import { Apartment } from 'src/apartments/entities/apartment.entity';

export enum UserRole {
  ADMIN = 'ADMIN',
  SINDICO = 'SINDICO',
  MORADOR = 'MORADOR',
  PORTEIRO = 'PORTEIRO',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  cellphone: string;

  @Column({ nullable: true })
  cpf: string;

  @Column()
  @Exclude()
  password: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.MORADOR,
  })
  role: UserRole;

  @OneToOne(() => Apartment)
  @JoinColumn({ name: 'apartmentId' })
  apartment: Apartment;

  @Column({ nullable: true })
  apartmentId: number;
}