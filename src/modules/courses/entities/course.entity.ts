import { Campus } from 'src/modules/campus/entities/campus.entity';
import { User } from 'src/modules/users/entities/user.entity';
import {
  Column,
  Entity,
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

  @Column({ type: 'integer' })
  userId: number;

  @ManyToOne(() => Campus)
  campus: Campus;

  @Column({ type: 'integer' })
  campusId: number;
}
