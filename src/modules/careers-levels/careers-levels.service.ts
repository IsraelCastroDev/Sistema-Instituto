import { Injectable } from '@nestjs/common';
import { CreateCareersLevelDto } from './dto/create-careers-level.dto';
import { UpdateCareersLevelDto } from './dto/update-careers-level.dto';

@Injectable()
export class CareersLevelsService {
  create(createCareersLevelDto: CreateCareersLevelDto) {
    return 'This action adds a new careersLevel';
  }

  findAll() {
    return `This action returns all careersLevels`;
  }

  findOne(id: number) {
    return `This action returns a #${id} careersLevel`;
  }

  update(id: number, updateCareersLevelDto: UpdateCareersLevelDto) {
    return `This action updates a #${id} careersLevel`;
  }

  remove(id: number) {
    return `This action removes a #${id} careersLevel`;
  }
}
