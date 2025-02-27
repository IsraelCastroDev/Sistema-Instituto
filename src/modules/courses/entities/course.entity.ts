import { AcademicCycle } from 'src/modules/academic-cycles/entities/academic-cycle.entity';
import { Campus } from 'src/modules/campus/entities/campus.entity';
import { CareersLevel } from 'src/modules/careers-levels/entities/careers-level.entity';
import { User } from 'src/modules/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @ManyToOne(() => User)
  user: User;

  @Column({ type: 'int' })
  userId: number;

  @ManyToOne(() => Campus)
  campus: Campus;

  @Column({ type: 'int' })
  campusId: number;

  @ManyToOne(() => AcademicCycle)
  academicCycle: AcademicCycle;

  @Column({ type: 'int' })
  academicCycleId: number;

  @ManyToOne(() => CareersLevel, (careersLevel) => careersLevel.courses)
  @JoinColumn({ name: 'careersLevelId' })
  careersLevel: CareersLevel;

  @Column({ type: 'int' })
  careersLevelId: number;
}
