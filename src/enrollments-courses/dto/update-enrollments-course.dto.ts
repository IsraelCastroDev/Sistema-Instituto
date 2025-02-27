import { PartialType } from '@nestjs/mapped-types';
import { CreateEnrollmentsCourseDto } from './create-enrollments-course.dto';

export class UpdateEnrollmentsCourseDto extends PartialType(CreateEnrollmentsCourseDto) {}
