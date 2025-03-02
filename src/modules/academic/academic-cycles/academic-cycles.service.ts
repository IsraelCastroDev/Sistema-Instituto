import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateAcademicCycleDto } from './dto/create-academic-cycle.dto';
import { UpdateAcademicCycleDto } from './dto/update-academic-cycle.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AcademicCycle } from './entities/academic-cycle.entity';
import { Between, LessThan, MoreThan, Repository } from 'typeorm';

@Injectable()
export class AcademicCyclesService {
  constructor(
    @InjectRepository(AcademicCycle)
    private readonly academicCycleRepository: Repository<AcademicCycle>,
  ) {}

  async create(createAcademicCycleDto: CreateAcademicCycleDto) {
    const { startDate, endDate } = createAcademicCycleDto;

    if (startDate > endDate) {
      throw new ConflictException(
        'La fecha de inicio debe ser anterior a la fecha de fin',
      );
    }

    const overlappingCycle = await this.academicCycleRepository.findOne({
      where: [
        { startDate: Between(startDate, endDate) }, // Si el inicio está dentro de otro ciclo
        { endDate: Between(startDate, endDate) }, // Si el fin está dentro de otro ciclo
        { startDate: LessThan(startDate), endDate: MoreThan(endDate) }, // Si el ciclo envuelve completamente otro
      ],
    });

    if (overlappingCycle) {
      throw new ConflictException(
        'Ya existe un ciclo académico que se superpone con el nuevo ciclo',
      );
    }

    const newAcademicCycle = this.academicCycleRepository.create(
      createAcademicCycleDto,
    );
    await this.academicCycleRepository.save(newAcademicCycle);

    return {
      message: 'Ciclo académico creado exitosamente',
      academicCycle: newAcademicCycle,
    };
  }

  findAll() {
    return `This action returns all academicCycles`;
  }

  async findOne(id: number) {
    const academicCycle = await this.academicCycleRepository.findOne({
      where: { id },
    });
    if (!academicCycle) {
      throw new NotFoundException(`Ciclo académico con id ${id} no encontrado`);
    }

    return academicCycle;
  }

  update(id: number, updateAcademicCycleDto: UpdateAcademicCycleDto) {
    return `This action updates a #${id} academicCycle`;
  }

  remove(id: number) {
    return `This action removes a #${id} academicCycle`;
  }
}
