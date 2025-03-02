import { Course } from 'modules/academic/courses/entities/course.entity';
import { Schedule } from 'modules/academic/schedules/entities/schedule.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('academicsCycles')
export class AcademicCycle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'date' })
  startDate: Date;

  @Column({ type: 'date' })
  endDate: Date;

  @Column({ type: 'boolean' })
  active: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @OneToMany(() => Course, (course) => course.academicCycle)
  courses: Course[];

  @OneToMany(() => Schedule, (schedule) => schedule.academicCycle)
  schedules: Schedule[];
}
