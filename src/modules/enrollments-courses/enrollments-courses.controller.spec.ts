import { Test, TestingModule } from '@nestjs/testing';
import { EnrollmentsCoursesController } from './enrollments-courses.controller';
import { EnrollmentsCoursesService } from './enrollments-courses.service';

describe('EnrollmentsCoursesController', () => {
  let controller: EnrollmentsCoursesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnrollmentsCoursesController],
      providers: [EnrollmentsCoursesService],
    }).compile();

    controller = module.get<EnrollmentsCoursesController>(EnrollmentsCoursesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
