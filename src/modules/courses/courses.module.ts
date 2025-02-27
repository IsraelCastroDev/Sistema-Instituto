import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { User } from '../users/entities/user.entity';
import { Campus } from '../campus/entities/campus.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Course, User, Campus])],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}
