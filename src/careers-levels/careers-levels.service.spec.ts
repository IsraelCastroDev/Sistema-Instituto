import { Test, TestingModule } from '@nestjs/testing';
import { CareersLevelsService } from './careers-levels.service';

describe('CareersLevelsService', () => {
  let service: CareersLevelsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CareersLevelsService],
    }).compile();

    service = module.get<CareersLevelsService>(CareersLevelsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
