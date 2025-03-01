import { Attendance } from 'modules/academic/attendances/entities/attendance.entity';
import { Course } from 'modules/academic/courses/entities/course.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('sessions')
export class Session {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  sessionDate: Date;

  @Column({ type: 'time' })
  startTime: string;

  @Column({ type: 'time' })
  endTime: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @ManyToOne(() => Course)
  course: Course;

  @Column({ type: 'number' })
  courseId: number;

  @OneToMany(() => Attendance, (attendance) => attendance.session)
  attendances: Attendance[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
