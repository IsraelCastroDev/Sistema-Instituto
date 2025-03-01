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

  async findAll() {
    const [careersLevels, total] =
      await this.careersLevelRepository.findAndCount({
        relations: ['career'],
      });

    return {
      message: 'Niveles de carrera obtenidos exitosamente',
      careersLevels,
      total,
    };
  }

  async findOne(id: number) {
    const careersLevel = await this.careersLevelRepository.findOne({
      where: { id },
      relations: ['career'],
    });

    if (!careersLevel) {
      throw new NotFoundException('Nivel de carrera no encontrado');
    }

    return {
      message: 'Nivel de carrera obtenido exitosamente',
      careersLevel,
    };
  }

  async update(id: number, updateCareersLevelDto: UpdateCareersLevelDto) {
    const findCareersLevel = await this.findOne(id);
    const { careersLevel } = findCareersLevel;

    try {
      Object.assign(careersLevel, updateCareersLevelDto);
      await this.careersLevelRepository.save(careersLevel);
      return {
        message: 'Nivel de carrera actualizado exitosamente',
        careersLevel,
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
      throw error;
    }
  }

  async remove(id: number) {
    const findCareersLevel = await this.findOne(id);
    const { careersLevel } = findCareersLevel;

    await this.careersLevelRepository.remove(careersLevel);

    return {
      message: 'Nivel de carrera eliminado exitosamente',
      careersLevel,
    };
  }
}
