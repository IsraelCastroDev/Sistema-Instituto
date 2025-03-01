import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { AcademicCycle } from '../academic-cycles/entities/academic-cycle.entity';
import { User } from 'src/modules/user/users/entities/user.entity';
import { Campus } from 'src/modules/campus/entities/campus.entity';
import { CareersLevel } from 'src/modules/career/careers-levels/entities/careers-level.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Course,
      User,
      Campus,
      CareersLevel,
      AcademicCycle,
    ]),
  ],
  controllers: [CoursesController],
  providers: [CoursesService],
  exports: [CoursesService],
})
export class CoursesModule {}
