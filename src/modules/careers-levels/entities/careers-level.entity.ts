import { Career } from 'src/modules/careers/entities/career.entity';
import { Course } from 'src/modules/courses/entities/course.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('careersLevel')
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
