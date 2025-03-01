import { Module } from '@nestjs/common';
import { CareersLevelsService } from './careers-levels.service';
import { CareersLevelsController } from './careers-levels.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CareersLevel } from './entities/careers-level.entity';
import { Career } from 'modules/career/careers/entities/career.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CareersLevel, Career])],
  controllers: [CareersLevelsController],
  providers: [CareersLevelsService],
})
export class CareersLevelsModule {}
