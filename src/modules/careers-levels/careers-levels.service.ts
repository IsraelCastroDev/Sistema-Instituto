import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCareersLevelDto } from './dto/create-careers-level.dto';
import { UpdateCareersLevelDto } from './dto/update-careers-level.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CareersLevel } from './entities/careers-level.entity';
import { Repository } from 'typeorm';
import { Career } from '../careers/entities/career.entity';

@Injectable()
export class CareersLevelsService {
  constructor(
    @InjectRepository(CareersLevel)
    private careersLevelRepository: Repository<CareersLevel>,
    @InjectRepository(Career)
    private careerRepository: Repository<Career>,
  ) {}

  async create(createCareersLevelDto: CreateCareersLevelDto) {
    const career = await this.careerRepository.findOne({
      where: { id: createCareersLevelDto.careerId },
    });

    if (!career) {
      throw new NotFoundException('Carrera no encontrada');
    }

    try {
      const newCareersLevel = this.careersLevelRepository.create({
        ...createCareersLevelDto,
        career,
      });
      await this.careersLevelRepository.save(newCareersLevel);

      return {
        message: 'Nivel de carrera creado exitosamente',
        career: newCareersLevel,
      };
    } catch (error: unknown) {
      if (error instanceof Error && 'code' in error) {
        const pgError = error as { code: string; detail?: string };

        if (pgError.code === '23505') {
          const errorMessage = pgError.detail?.includes('name')
            ? 'Ya existe un nivel con este nombre en la carrera'
            : 'El orden de nivel ya está asignado en esta carrera';

          throw new ConflictException(errorMessage);
        }
      }
      throw error; // Re-lanzamos si es otro error
    }
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
