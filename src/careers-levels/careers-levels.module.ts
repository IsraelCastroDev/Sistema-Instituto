import { Module } from '@nestjs/common';
import { CareersLevelsService } from './careers-levels.service';
import { CareersLevelsController } from './careers-levels.controller';

@Module({
  controllers: [CareersLevelsController],
  providers: [CareersLevelsService],
})
export class CareersLevelsModule {}
