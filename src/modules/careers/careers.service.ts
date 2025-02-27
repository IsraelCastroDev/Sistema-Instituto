import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCareerDto } from './dto/create-career.dto';
import { UpdateCareerDto } from './dto/update-career.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Career } from './entities/career.entity';
import { Repository } from 'typeorm';
import { UpdateStatusCareerDto } from './dto/update-status-career.dto';

@Injectable()
export class CareersService {
  constructor(
    @InjectRepository(Career)
    private readonly careerRepository: Repository<Career>,
  ) {}

  async create(createCareerDto: CreateCareerDto) {
    const career = await this.careerRepository.findOne({
      where: { name: createCareerDto.name },
    });

    if (career) {
      throw new ConflictException({ message: 'Carrera ya existe' });
    }

    const newCareer = this.careerRepository.create(createCareerDto);
    await this.careerRepository.save(newCareer);

    return { message: 'Carrera creada', career: newCareer };
  }

  async findAll() {
    const [careers, total] = await this.careerRepository.findAndCount();
    return { careers, total };
  }

  async findOne(id: number) {
    const career = await this.careerRepository.findOne({ where: { id } });
    if (!career) {
      throw new NotFoundException({ message: 'Carrera no encontrada' });
    }
    return career;
  }

  async update(id: number, updateCareerDto: UpdateCareerDto) {
    const career = await this.findOne(id);
    Object.assign(career, updateCareerDto);
    await this.careerRepository.save(career);

    return { message: 'Carrera actualizada' };
  }

  async updateStatus(id: number, updateStatusCareerDto: UpdateStatusCareerDto) {
    const career = await this.findOne(id);
    Object.assign(career, updateStatusCareerDto);
    await this.careerRepository.save(career);

    return { message: `Estado de la carrera ${career.name} actualizada` };
  }

  async remove(id: number) {
    const career = await this.findOne(id);
    await this.careerRepository.remove(career);
    return { message: 'Carrera eliminada' };
  }
}
