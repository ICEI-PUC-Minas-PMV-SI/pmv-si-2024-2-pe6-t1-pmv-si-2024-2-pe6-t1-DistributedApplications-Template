import { IsNumber, IsOptional, IsString } from "class-validator"; 

export class UpdateApartmentDto {
  @IsNumber()
  @IsOptional()
  number: number;

  @IsString()
  @IsOptional()
  block: string;
}