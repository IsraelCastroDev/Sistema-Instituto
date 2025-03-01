import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AttendancesStatus } from '../interfaces';
import { User } from 'modules/user/users/entities/user.entity';
import { Session } from 'modules/academic/sessions/entities/session.entity';

@Entity('attendances')
export class Attendance {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  user: User;

  @Column({ type: 'int' })
  userId: number;

  @ManyToOne(() => Session)
  session: Session;

  @Column({ type: 'int' })
  sessionId: number;

  @Column({ type: 'enum', enum: AttendancesStatus })
  status: AttendancesStatus;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
