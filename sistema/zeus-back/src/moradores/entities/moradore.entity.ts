import { Entity, Column, PrimaryGeneratedColumn  } from "typeorm";

@Entity()
export class Moradore {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    cpf: string;

    @Column()
    apartamento: string;

    @Column({ nullable: true })
    bloco: string;

    @Column()
    telefone: string;

    @Column({ nullable: true })
    email: string;

    @Column()
    status: string;
}
