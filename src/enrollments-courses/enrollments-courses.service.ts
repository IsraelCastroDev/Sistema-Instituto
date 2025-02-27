import { Injectable } from '@nestjs/common';
import { CreateEnrollmentsCourseDto } from './dto/create-enrollments-course.dto';
import { UpdateEnrollmentsCourseDto } from './dto/update-enrollments-course.dto';

@Injectable()
export class EnrollmentsCoursesService {
  create(createEnrollmentsCourseDto: CreateEnrollmentsCourseDto) {
    return 'This action adds a new enrollmentsCourse';
  }

  findAll() {
    return `This action returns all enrollmentsCourses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} enrollmentsCourse`;
  }

  update(id: number, updateEnrollmentsCourseDto: UpdateEnrollmentsCourseDto) {
    return `This action updates a #${id} enrollmentsCourse`;
  }

  remove(id: number) {
    return `This action removes a #${id} enrollmentsCourse`;
  }
}
