import { PartialType } from '@nestjs/mapped-types';
import { CreateCareersLevelDto } from './create-careers-level.dto';

export class UpdateCareersLevelDto extends PartialType(CreateCareersLevelDto) {}
