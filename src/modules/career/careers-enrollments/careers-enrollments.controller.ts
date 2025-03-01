import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CareersEnrollmentsService } from './careers-enrollments.service';
import { CreateCareersEnrollmentDto } from './dto/create-careers-enrollment.dto';
import { UpdateCareersEnrollmentDto } from './dto/update-careers-enrollment.dto';

@Controller('careers-enrollments')
export class CareersEnrollmentsController {
  constructor(private readonly careersEnrollmentsService: CareersEnrollmentsService) {}

  @Post()
  create(@Body() createCareersEnrollmentDto: CreateCareersEnrollmentDto) {
    return this.careersEnrollmentsService.create(createCareersEnrollmentDto);
  }

  @Get()
  findAll() {
    return this.careersEnrollmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.careersEnrollmentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCareersEnrollmentDto: UpdateCareersEnrollmentDto) {
    return this.careersEnrollmentsService.update(+id, updateCareersEnrollmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.careersEnrollmentsService.remove(+id);
  }
}
