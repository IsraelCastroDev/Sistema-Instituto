import { Test, TestingModule } from '@nestjs/testing';
import { CareersEnrollmentsController } from './careers-enrollments.controller';
import { CareersEnrollmentsService } from './careers-enrollments.service';

describe('CareersEnrollmentsController', () => {
  let controller: CareersEnrollmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CareersEnrollmentsController],
      providers: [CareersEnrollmentsService],
    }).compile();

    controller = module.get<CareersEnrollmentsController>(CareersEnrollmentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
