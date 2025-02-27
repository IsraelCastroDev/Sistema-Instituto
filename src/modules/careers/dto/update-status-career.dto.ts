import { IsBoolean, IsNotEmpty } from 'class-validator';

export class UpdateStatusCareerDto {
  @IsNotEmpty()
  @IsBoolean({ message: 'active debe ser un boolean' })
  active: boolean;
}
