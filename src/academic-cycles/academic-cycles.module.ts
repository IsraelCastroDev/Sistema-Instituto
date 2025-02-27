import { Module } from '@nestjs/common';
import { AcademicCyclesService } from './academic-cycles.service';
import { AcademicCyclesController } from './academic-cycles.controller';

@Module({
  controllers: [AcademicCyclesController],
  providers: [AcademicCyclesService],
})
export class AcademicCyclesModule {}
