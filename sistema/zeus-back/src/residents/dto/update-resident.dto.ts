import { IsEmail, IsString, IsOptional } from 'class-validator';
import { IsResident } from '../decorators/is-resident.decorator';

export class UpdateResidentDto {
  @IsString()
  @IsOptional()
  name: string;
  
  @IsEmail()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  cellphone: string;

  @IsString()
  @IsOptional()
  cpf: string;

  @IsResident({ message: 'O tipo de usuário deve ser "MORADOR".' })
  role: string;
}