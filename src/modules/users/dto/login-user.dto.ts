import { IsNotEmpty } from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty({ message: 'El DNI es requerido' })
  dni: string;

  @IsNotEmpty({ message: 'La contraseña es requerida' })
  password: string;
}
