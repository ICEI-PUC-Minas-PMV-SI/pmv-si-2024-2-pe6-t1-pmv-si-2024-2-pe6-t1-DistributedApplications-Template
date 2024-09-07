import {IsString, IsOptional } from 'class-validator';

export class UpdateMoradoreDto{
    @IsString() 
    @IsOptional()
    nome: string;

    @IsString()
    @IsOptional()
    apartamento: string;

    @IsString()
    @IsOptional()
    bloco: string;

    @IsString()
    @IsOptional()
    telefone: string;

    @IsString()
    @IsOptional()
    email: string;

    @IsString()
    @IsOptional()
    cpf: string;

    @IsString()
    @IsOptional()
    status: string;
}
