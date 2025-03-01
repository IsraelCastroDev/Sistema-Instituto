import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator';
import { AuthRoles } from 'common/enums';

export class CreateUserDto {
  @IsNotEmpty({ message: 'El nombre es requerido' })
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  name: string;

  @IsNotEmpty({ message: 'El apellido es requerido' })
  @IsString({ message: 'El apellido debe ser una cadena de texto' })
  lastname: string;

  @IsNotEmpty({ message: 'El DNI es requerido' })
  @Matches(/^[0-9]{8}$/, {
    message: 'El DNI debe tener 8 números',
  })
  dni: string;

  @IsOptional()
  @IsNotEmpty({ message: 'El teléfono es requerido' })
  @Matches(/^[0-9]{9}$/, { message: 'El teléfono debe tener 9 números' })
  phone: string;

  @IsOptional()
  @IsNotEmpty({ message: 'El correo electrónico es requerido' })
  @IsEmail({}, { message: 'El correo electrónico debe ser válido' })
  email: string;

  @IsNotEmpty({ message: 'La contraseña es requerida' })
  @IsString({ message: 'La contraseña debe ser una cadena de texto' })
  password: string;

  @IsNotEmpty({ message: 'El rol es requerido' })
  @IsEnum(AuthRoles, {
    message: 'El rol debe ser: admin, estudiante o profesor',
  })
  role: AuthRoles;

  @IsOptional()
  @IsDateString(
    {},
    { message: 'La fecha de creación debe ser una fecha válida' },
  )
  createdAt: Date;
}
