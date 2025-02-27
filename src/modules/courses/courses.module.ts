import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { User } from '../users/entities/user.entity';
import { Campus } from '../campus/entities/campus.entity';
import { CareersLevel } from '../careers-levels/entities/careers-level.entity';
import { AcademicCycle } from '../academic-cycles/entities/academic-cycle.entity';

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
})
export class CoursesModule {}
