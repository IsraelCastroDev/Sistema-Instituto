import { Module } from '@nestjs/common';
import { EnrollmentsCoursesService } from './enrollments-courses.service';
import { EnrollmentsCoursesController } from './enrollments-courses.controller';

@Module({
  controllers: [EnrollmentsCoursesController],
  providers: [EnrollmentsCoursesService],
})
export class EnrollmentsCoursesModule {}
