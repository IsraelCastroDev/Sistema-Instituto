import { Test, TestingModule } from '@nestjs/testing';
import { AcademicCyclesController } from './academic-cycles.controller';
import { AcademicCyclesService } from './academic-cycles.service';

describe('AcademicCyclesController', () => {
  let controller: AcademicCyclesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AcademicCyclesController],
      providers: [AcademicCyclesService],
    }).compile();

    controller = module.get<AcademicCyclesController>(AcademicCyclesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
