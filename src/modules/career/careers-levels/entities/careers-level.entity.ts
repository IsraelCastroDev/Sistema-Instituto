import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Career } from '../../careers/entities/career.entity';
import { Course } from 'src/modules/academic/courses/entities/course.entity';

@Entity('careersLevel')
@Unique(['name', 'careerId'])
@Unique(['sequenceOrder', 'careerId'])
export class CareersLevel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'int' })
  careerId: number;

  @Column({ type: 'int' })
  sequenceOrder: number;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @ManyToOne(() => Career)
  career: Career;

  @OneToMany(() => Course, (course) => course.careersLevel)
  courses: Course[];
}
