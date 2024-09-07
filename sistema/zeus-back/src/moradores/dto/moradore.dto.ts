import { Expose } from "class-transformer";

export class CreateMoradoreDto {

    @Expose()
    nome: string;

    @Expose()
    apartamento: string;

    @Expose()
    bloco: string;

    @Expose()
    telefone: string;

    @Expose()
    email: string;

    @Expose()
    cpf: string;

    @Expose()
    status: string;
}