import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CareersLevel } from '../../careers-levels/entities/careers-level.entity';

@Entity('careers')
export class Career {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  description?: string;

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @OneToMany(() => CareersLevel, (careerLevel) => careerLevel.career)
  careerLevels: CareersLevel[];
}
