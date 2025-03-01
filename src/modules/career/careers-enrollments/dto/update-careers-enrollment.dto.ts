import { PartialType } from '@nestjs/mapped-types';
import { CreateCareersEnrollmentDto } from './create-careers-enrollment.dto';

export class UpdateCareersEnrollmentDto extends PartialType(CreateCareersEnrollmentDto) {}
