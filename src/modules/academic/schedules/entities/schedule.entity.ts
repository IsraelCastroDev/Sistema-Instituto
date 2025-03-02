import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { DayOfWeek } from '../interfaces';
import { Course } from 'modules/academic/courses/entities/course.entity';
import { AcademicCycle } from 'modules/academic/academic-cycles/entities/academic-cycle.entity';
import { Campus } from 'modules/campus/entities/campus.entity';

@Entity('schedules')
export class Schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'time' })
  startTime: string;

  @Column({ type: 'time' })
  endTime: string;

  @Column({ type: 'enum', enum: DayOfWeek })
  dayOfWeek: DayOfWeek;

  @ManyToOne(() => Course)
  course: Course;

  @Column({ type: 'int' })
  courseId: number;

  @ManyToOne(() => AcademicCycle)
  academicCycle: AcademicCycle;

  @Column({ type: 'int' })
  academicCycleId: number;

  @ManyToOne(() => Campus)
  campus: Campus;

  @Column({ type: 'int' })
  campusId: number;
}
