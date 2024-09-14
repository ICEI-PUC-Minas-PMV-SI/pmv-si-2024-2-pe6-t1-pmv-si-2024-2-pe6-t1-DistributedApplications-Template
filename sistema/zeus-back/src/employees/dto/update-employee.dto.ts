import { IsEmail, IsString, IsOptional } from 'class-validator';
import { IsEmployee } from '../decorators/is-employee.decorator';

export class UpdateEmployeeDto {
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

  @IsEmployee({ message: 'O tipo de usuário deve ser "PORTEIRO".' })
  role: string;
}
