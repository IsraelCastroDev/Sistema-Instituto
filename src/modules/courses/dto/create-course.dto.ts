import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateCourseDto {
  @IsNotEmpty({ message: 'El nombre es requerido' })
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  name: string;

  @IsInt({ message: 'El userId debe ser un entero' })
  userId: number;

  @IsInt({ message: 'El campusId debe ser un entero' })
  campusId: number;
}
