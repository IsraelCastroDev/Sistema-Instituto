import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, LessThan, MoreThan, Repository } from 'typeorm';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { Schedule } from './entities/schedule.entity';
import { CoursesService } from '../courses/courses.service';
import { AcademicCyclesService } from '../academic-cycles/academic-cycles.service';
import { CampusService } from 'modules/campus/campus.service';

@Injectable()
export class SchedulesService {
  constructor(
    @InjectRepository(Schedule)
    private readonly schedulesRepository: Repository<Schedule>,
    private coursesService: CoursesService,
    private academicCyclesService: AcademicCyclesService,
    private campusService: CampusService,
  ) {}

  async create(createScheduleDto: CreateScheduleDto) {
    const {
      campusId,
      academicCycleId,
      courseId,
      startTime,
      endTime,
      dayOfWeek,
    } = createScheduleDto;

    const [course, academicCycle, campus] = await Promise.all([
      await this.coursesService.findOne(courseId),
      await this.academicCyclesService.findOne(academicCycleId),
      await this.campusService.findOne(campusId),
    ]);

    const overlappingSchedules = await this.schedulesRepository.count({
      where: [
        {
          courseId,
          academicCycleId,
          campusId,
          dayOfWeek,
          startTime: Between(startTime, endTime),
        },
        {
          courseId,
          academicCycleId,
          campusId,
          dayOfWeek,
          endTime: Between(startTime, endTime),
        },
        {
          courseId,
          academicCycleId,
          campusId,
          dayOfWeek,
          startTime: LessThan(startTime),
          endTime: MoreThan(endTime),
        },
      ],
    });

    if (overlappingSchedules > 0) {
      throw new ConflictException('El horario se solapa con otro ya existente');
    }

    const newSchedule = this.schedulesRepository.create({
      ...createScheduleDto,
      campus,
      course,
      academicCycle,
    });
    await this.schedulesRepository.save(newSchedule);

    return { message: 'Horario creado exitosamente', schedule: newSchedule };
  }

  findAll() {
    return `This action returns all schedules`;
  }

  findOne(id: number) {
    return `This action returns a #${id} schedule`;
  }

  update(id: number, updateScheduleDto: UpdateScheduleDto) {
    return `This action updates a #${id} schedule`;
  }

  remove(id: number) {
    return `This action removes a #${id} schedule`;
  }
}
function GreaterThan(
  startTime: string,
): string | import('typeorm').FindOperator<string> | undefined {
  throw new Error('Function not implemented.');
}
