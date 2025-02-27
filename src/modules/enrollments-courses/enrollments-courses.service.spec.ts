import { Test, TestingModule } from '@nestjs/testing';
import { EnrollmentsCoursesService } from './enrollments-courses.service';

describe('EnrollmentsCoursesService', () => {
  let service: EnrollmentsCoursesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnrollmentsCoursesService],
    }).compile();

    service = module.get<EnrollmentsCoursesService>(EnrollmentsCoursesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
