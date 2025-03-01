import { ConflictException, Injectable } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Session } from './entities/session.entity';
import { Between, Repository } from 'typeorm';
import { CoursesService } from '../courses/courses.service';

@Injectable()
export class SessionsService {
  constructor(
    @InjectRepository(Session)
    private readonly sessionRepository: Repository<Session>,
    private courseService: CoursesService,
  ) {}

  async create(createSessionDto: CreateSessionDto) {
    const { courseId, sessionDate, startTime, endTime } = createSessionDto;
    const course = await this.courseService.findOne(courseId);

    const overlappingSession = await this.sessionRepository.findOne({
      where: {
        course: { id: course.id },
        sessionDate,
        startTime: Between(startTime, endTime),
        endTime: Between(startTime, endTime),
      },
    });

    if (overlappingSession) {
      throw new ConflictException('La sesión se solapa con otra ya existente.');
    }

    const newSession = this.sessionRepository.create({
      ...createSessionDto,
      course,
    });
    await this.sessionRepository.save(newSession);

    return { message: 'Sesión creada correctamente', session: newSession };
  }

  findAll() {
    return `This action returns all sessions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} session`;
  }

  update(id: number, updateSessionDto: UpdateSessionDto) {
    return `This action updates a #${id} session`;
  }

  remove(id: number) {
    return `This action removes a #${id} session`;
  }
}
