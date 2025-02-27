import { Test, TestingModule } from '@nestjs/testing';
import { CareersEnrollmentsService } from './careers-enrollments.service';

describe('CareersEnrollmentsService', () => {
  let service: CareersEnrollmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CareersEnrollmentsService],
    }).compile();

    service = module.get<CareersEnrollmentsService>(CareersEnrollmentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
