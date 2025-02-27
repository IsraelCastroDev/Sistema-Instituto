import { Test, TestingModule } from '@nestjs/testing';
import { AcademicCyclesService } from './academic-cycles.service';

describe('AcademicCyclesService', () => {
  let service: AcademicCyclesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AcademicCyclesService],
    }).compile();

    service = module.get<AcademicCyclesService>(AcademicCyclesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
