import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AcademicCycle } from '../../academic-cycles/entities/academic-cycle.entity';
import { Session } from '../../sessions/entities/session.entity';
import { User } from 'modules/user/users/entities/user.entity';
import { Campus } from 'modules/campus/entities/campus.entity';
import { CareersLevel } from 'modules/career/careers-levels/entities/careers-level.entity';
import { Schedule } from 'modules/academic/schedules/entities/schedule.entity';

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

  @OneToMany(() => Session, (session) => session.course)
  sessions: Session[];

  @OneToMany(() => Schedule, (schedule) => schedule.course)
  schedules: Schedule[];
}
