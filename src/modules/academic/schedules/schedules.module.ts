import { Module } from '@nestjs/common';
import { SchedulesService } from './schedules.service';
import { SchedulesController } from './schedules.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Schedule } from './entities/schedule.entity';
import { CoursesModule } from '../courses/courses.module';
import { AcademicCyclesModule } from '../academic-cycles/academic-cycles.module';
import { CampusModule } from 'modules/campus/campus.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Schedule]),
    CoursesModule,
    AcademicCyclesModule,
    CampusModule,
  ],
  controllers: [SchedulesController],
  providers: [SchedulesService],
})
export class SchedulesModule {}
