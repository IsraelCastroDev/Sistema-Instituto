import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateCampusDto {
  @IsNotEmpty({ message: 'El nombre es requerido' })
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  name: string;

  @IsNotEmpty({ message: 'La ciudad es requerida' })
  @IsString({ message: 'La ciudad debe ser una cadena de texto' })
  city: string;

  @IsNotEmpty({ message: 'La dirección es requerida' })
  @IsString({ message: 'La dirección debe ser una cadena de texto' })
  address: string;

  @IsOptional()
  @IsString({ message: 'La descripción debe ser una cadena de texto' })
  description: string;

  @IsOptional()
  @IsDateString(
    {},
    { message: 'La fecha de creación debe ser una fecha válida' },
  )
  createdAt: Date;
}
