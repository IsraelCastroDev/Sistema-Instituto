import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateCareerDto {
  @IsNotEmpty({ message: 'El nombre de la carrera es requerido' })
  @IsString({ message: 'Nombre de carrera inválido' })
  name: string;

  @IsOptional()
  @IsString({ message: 'Descripción de carrera inválida' })
  description?: string;

  @IsBoolean({ message: 'Estado de carrera inválido' })
  active: boolean;

  @IsOptional()
  @IsDateString({}, { message: 'Fecha inválida' })
  createdAt?: Date;
}
