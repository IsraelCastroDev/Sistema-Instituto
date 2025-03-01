import {
  IsDate,
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator';

export class CreateSessionDto {
  @IsNotEmpty({ message: 'Fecha de la sesión es requerida' })
  @IsDateString({}, { message: 'Fecha de la sesión inválida' })
  sessionDate: Date;

  @IsNotEmpty({ message: 'Hora de inicio es requerida' })
  @IsString({ message: 'Hora de inicio inválida' })
  @Matches(/^([01]\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/, {
    message: 'Hora de inicio debe estar en formato HH:mm o HH:mm:ss',
  })
  startTime: string;

  @IsNotEmpty({ message: 'Hora de fin es requerida' })
  @IsString({ message: 'Hora de fin inválida' })
  @Matches(/^([01]\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/, {
    message: 'Hora de fin debe estar en formato HH:mm o HH:mm:ss',
  })
  endTime: string;

  @IsOptional()
  @IsString({ message: 'Descripción inválida' })
  description?: string;

  @IsNotEmpty({ message: 'Id del curso es requerido' })
  @IsInt({ message: 'Id del curso inválido' })
  courseId: number;

  @IsOptional()
  @IsDate({ message: 'Fecha de creación inválida' })
  createdAt?: Date;
}
