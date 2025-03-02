import { IsEnum, IsInt, IsNotEmpty, IsString, Matches } from 'class-validator';
import { DayOfWeek } from '../interfaces';

export class CreateScheduleDto {
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

  @IsNotEmpty({ message: 'Día de la semana es requerido' })
  @IsEnum(DayOfWeek, {
    message: 'Ingresa un día válido, desde lunes - viernes',
  })
  dayOfWeek: DayOfWeek;

  @IsNotEmpty({ message: 'courseId es requerido' })
  @IsInt({ message: 'courseId debe ser un entero' })
  courseId: number;

  @IsNotEmpty({ message: 'academicCycleId es requerido' })
  @IsInt({ message: 'academicCycleId debe ser un entero' })
  academicCycleId: number;

  @IsNotEmpty({ message: 'campusId es requerido' })
  @IsInt({ message: 'campusId debe ser un entero' })
  campusId: number;
}
