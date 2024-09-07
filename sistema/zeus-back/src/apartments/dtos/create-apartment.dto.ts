import { IsNumber, IsOptional, IsString } from "class-validator"; 

export class CreateApartmentDto {
  @IsNumber()
  number: number;

  @IsString()
  @IsOptional()
  block: string;
}