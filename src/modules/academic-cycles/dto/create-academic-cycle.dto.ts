import { IsBoolean, IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateAcademicCycleDto {
  @IsNotEmpty({ message: 'El nombre es requerido' })
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  name: string;

  @IsNotEmpty({ message: 'Fecha de inicio es requerida' })
  @IsDateString({}, { message: 'Fecha de inicio inválida' })
  startDate: Date;

  @IsNotEmpty({ message: 'Fecha de fin es requerida' })
  @IsDateString({}, { message: 'Fecha de fin inválida' })
  endDate: Date;

  @IsNotEmpty({ message: 'Estado es requerido' })
  @IsBoolean({ message: 'Active debe ser un boolean' })
  active: boolean;
}
