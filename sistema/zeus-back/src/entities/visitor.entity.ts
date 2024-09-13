import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Visitor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  cellphone: string;

  @Column()
  cpf: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
