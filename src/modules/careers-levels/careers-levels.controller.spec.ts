import { Test, TestingModule } from '@nestjs/testing';
import { CareersLevelsController } from './careers-levels.controller';
import { CareersLevelsService } from './careers-levels.service';

describe('CareersLevelsController', () => {
  let controller: CareersLevelsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CareersLevelsController],
      providers: [CareersLevelsService],
    }).compile();

    controller = module.get<CareersLevelsController>(CareersLevelsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
