import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';
import { AuthRoles } from 'src/common/enums';
import { AcademicCycle } from '../academic-cycles/entities/academic-cycle.entity';
import { User } from 'src/modules/user/users/entities/user.entity';
import { Campus } from 'src/modules/campus/entities/campus.entity';
import { CareersLevel } from 'src/modules/career/careers-levels/entities/careers-level.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Campus)
    private readonly campusRepository: Repository<Campus>,
    @InjectRepository(CareersLevel)
    private readonly careersLevelRepository: Repository<CareersLevel>,
    @InjectRepository(AcademicCycle)
    private readonly academicCycleRepository: Repository<AcademicCycle>,
  ) {}

  async create(createCourseDto: CreateCourseDto) {
    const { userId, campusId, careersLevelId, academicCycleId, name } =
      createCourseDto;

    const [user, campus, careersLevel, academicCycle] = await Promise.all([
      this.userRepository.findOne({ where: { id: userId } }),
      this.campusRepository.findOne({ where: { id: campusId } }),
      this.careersLevelRepository.findOne({ where: { id: careersLevelId } }),
      this.academicCycleRepository.findOne({ where: { id: academicCycleId } }),
    ]);

    if (!user)
      throw new NotFoundException({ message: 'Usuario no encontrado' });
    if (!campus)
      throw new NotFoundException({ message: 'Campus no encontrado' });
    if (!careersLevel)
      throw new NotFoundException({
        message: 'Nivel de carrera no encontrado',
      });
    if (!academicCycle)
      throw new NotFoundException({ message: 'Ciclo académico no encontrado' });

    if (user.role !== AuthRoles.TEACHER) {
      throw new ForbiddenException('El userId debe ser del rol profesor');
    }

    const courseExists = await this.courseRepository.findOne({
      where: { name, campusId, userId, academicCycleId },
    });

    if (courseExists) {
      throw new ConflictException('Curso ya registrado');
    }

    const course = this.courseRepository.create({
      ...createCourseDto,
      user,
      campus,
      careersLevel,
      academicCycle,
    });

    await this.courseRepository.save(course);

    return { message: 'Curso registrado exitosamente', course };
  }

  findAll() {
    return `This action returns all courses`;
  }

  async findOne(id: number) {
    const course = await this.courseRepository.findOne({ where: { id } });
    if (!course) {
      throw new NotFoundException('Curso no encontrado');
    }
    return course;
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
