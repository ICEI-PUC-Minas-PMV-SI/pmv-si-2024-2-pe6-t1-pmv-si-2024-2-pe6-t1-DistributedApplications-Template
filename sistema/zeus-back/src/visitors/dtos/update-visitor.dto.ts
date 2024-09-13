import {IsString, IsOptional, IsNumber } from 'class-validator';

export class UpdateVisitorsDto{
    @IsString() 
    @IsOptional()
    name: string;

    @IsString()
    @IsOptional()
    cellphone: string;

    @IsNumber()
    @IsOptional()
    cpf: number;
}
