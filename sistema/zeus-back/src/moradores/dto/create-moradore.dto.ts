import {IsNumber, IsOptional, IsString } from "class-validator";

export class CreateMoradoreDto {

    @IsString() 
    nome: string;

    @IsString()
    apartamento: string;

    @IsString()
    @IsOptional()
    bloco: string;

    @IsString()
    telefone: string;

    @IsString()
    @IsOptional()
    email: string;

    @IsNumber()
    cpf: string;

    @IsString()
    status: string;
    
}
