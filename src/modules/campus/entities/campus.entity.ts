import { Course } from 'modules/academic/courses/entities/course.entity';
import { Schedule } from 'modules/academic/schedules/entities/schedule.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('campus')
export class Campus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 150 })
  city: string;

  @Column({ type: 'varchar', length: 255 })
  address: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @OneToMany(() => Course, (course) => course.campus)
  courses: Course[];

  @OneToMany(() => Schedule, (schedule) => schedule.campus)
  schedules: Schedule[];
}
