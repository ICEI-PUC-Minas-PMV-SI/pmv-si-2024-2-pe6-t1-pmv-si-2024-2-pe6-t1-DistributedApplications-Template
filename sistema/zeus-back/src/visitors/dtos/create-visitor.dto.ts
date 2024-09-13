import {IsNumber, IsString } from "class-validator";

export class CreateVisitorDto {

    @IsString() 
    name: string;

    @IsString()
    cellphone: string;

    @IsNumber()
    cpf: number;
   
}
