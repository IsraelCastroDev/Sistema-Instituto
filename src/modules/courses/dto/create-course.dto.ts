import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateCourseDto {
  @IsNotEmpty({ message: 'El nombre es requerido' })
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  name: string;

  @IsNotEmpty({ message: 'El userId es requerido' })
  @IsInt({ message: 'El userId debe ser un entero' })
  userId: number;

  @IsNotEmpty({ message: 'El campusId es requerido' })
  @IsInt({ message: 'El campusId debe ser un entero' })
  campusId: number;

  @IsNotEmpty({ message: 'El academicCycleId es requerido' })
  @IsInt({ message: 'El academicCycleId debe ser un entero' })
  academicCycleId: number;
}
