import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';
import { User } from '../users/entities/user.entity';
import { Campus } from '../campus/entities/campus.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Campus)
    private readonly campusRepository: Repository<Campus>,
  ) {}

  async create(createCourseDto: CreateCourseDto) {
    const { userId, campusId, name } = createCourseDto;

    const user = await this.userRepository
      .findOneOrFail({ where: { id: userId } })
      .catch(() => {
        throw new NotFoundException({ message: 'Usuario no encontrado' });
      });

    const campus = await this.campusRepository
      .findOneOrFail({
        where: { id: campusId },
      })
      .catch(() => {
        throw new NotFoundException({ message: 'Campus no encontrado' });
      });

    const courseExists = await this.courseRepository.findOne({
      where: { campusId, userId, name },
    });

    if (courseExists) {
      throw new ConflictException({ message: 'Curso ya registrado' });
    }

    const course = this.courseRepository.create({
      ...createCourseDto,
      user,
      campus,
    });
    await this.courseRepository.save(course);

    return { message: 'Curso registrado exitosamente', course };
  }

  findAll() {
    return `This action returns all courses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} course`;
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
