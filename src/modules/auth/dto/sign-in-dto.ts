import { IsNotEmpty } from 'class-validator';

export class SignInDto {
  @IsNotEmpty({ message: 'DNI es requerido' })
  dni: string;

  @IsNotEmpty({ message: 'Contraseña es requerida' })
  password: string;
}
