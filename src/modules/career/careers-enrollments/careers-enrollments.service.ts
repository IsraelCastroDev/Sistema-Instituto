import { Injectable } from '@nestjs/common';
import { CreateCareersEnrollmentDto } from './dto/create-careers-enrollment.dto';
import { UpdateCareersEnrollmentDto } from './dto/update-careers-enrollment.dto';

@Injectable()
export class CareersEnrollmentsService {
  create(createCareersEnrollmentDto: CreateCareersEnrollmentDto) {
    return 'This action adds a new careersEnrollment';
  }

  findAll() {
    return `This action returns all careersEnrollments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} careersEnrollment`;
  }

  update(id: number, updateCareersEnrollmentDto: UpdateCareersEnrollmentDto) {
    return `This action updates a #${id} careersEnrollment`;
  }

  remove(id: number) {
    return `This action removes a #${id} careersEnrollment`;
  }
}
