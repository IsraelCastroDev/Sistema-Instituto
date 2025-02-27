import { Injectable } from '@nestjs/common';
import { CreateAcademicCycleDto } from './dto/create-academic-cycle.dto';
import { UpdateAcademicCycleDto } from './dto/update-academic-cycle.dto';

@Injectable()
export class AcademicCyclesService {
  create(createAcademicCycleDto: CreateAcademicCycleDto) {
    return 'This action adds a new academicCycle';
  }

  findAll() {
    return `This action returns all academicCycles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} academicCycle`;
  }

  update(id: number, updateAcademicCycleDto: UpdateAcademicCycleDto) {
    return `This action updates a #${id} academicCycle`;
  }

  remove(id: number) {
    return `This action removes a #${id} academicCycle`;
  }
}
