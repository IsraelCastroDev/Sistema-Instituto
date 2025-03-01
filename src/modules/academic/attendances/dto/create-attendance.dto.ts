import { IsDate, IsEnum, IsInt, IsNotEmpty, IsOptional } from 'class-validator';
import { AttendancesStatus } from '../interfaces';

export class CreateAttendanceDto {
  @IsNotEmpty({ message: 'userId es requerido' })
  @IsInt({ message: 'userId inválido' })
  userId: number;

  @IsNotEmpty({ message: 'sessionId es requerido' })
  @IsInt({ message: 'sessionId inválido' })
  sessionId: number;

  @IsNotEmpty({ message: 'El estado es requerido' })
  @IsEnum(AttendancesStatus, {
    message: `El estado debe ser ${AttendancesStatus.PRESENT},
    ${AttendancesStatus.ABSENT} o ${AttendancesStatus.LATE}`,
  })
  status: AttendancesStatus;

  @IsOptional()
  @IsNotEmpty({ message: 'createdAt es requerido' })
  @IsDate({ message: 'Fecha de creación inválida' })
  createdAt: Date;
}
