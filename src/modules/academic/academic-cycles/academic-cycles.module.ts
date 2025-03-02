import { Module } from '@nestjs/common';
import { AcademicCyclesService } from './academic-cycles.service';
import { AcademicCyclesController } from './academic-cycles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AcademicCycle } from './entities/academic-cycle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AcademicCycle])],
  controllers: [AcademicCyclesController],
  providers: [AcademicCyclesService],
  exports: [AcademicCyclesService],
})
export class AcademicCyclesModule {}
