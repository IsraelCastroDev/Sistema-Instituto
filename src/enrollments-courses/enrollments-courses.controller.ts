import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EnrollmentsCoursesService } from './enrollments-courses.service';
import { CreateEnrollmentsCourseDto } from './dto/create-enrollments-course.dto';
import { UpdateEnrollmentsCourseDto } from './dto/update-enrollments-course.dto';

@Controller('enrollments-courses')
export class EnrollmentsCoursesController {
  constructor(private readonly enrollmentsCoursesService: EnrollmentsCoursesService) {}

  @Post()
  create(@Body() createEnrollmentsCourseDto: CreateEnrollmentsCourseDto) {
    return this.enrollmentsCoursesService.create(createEnrollmentsCourseDto);
  }

  @Get()
  findAll() {
    return this.enrollmentsCoursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.enrollmentsCoursesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEnrollmentsCourseDto: UpdateEnrollmentsCourseDto) {
    return this.enrollmentsCoursesService.update(+id, updateEnrollmentsCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enrollmentsCoursesService.remove(+id);
  }
}
