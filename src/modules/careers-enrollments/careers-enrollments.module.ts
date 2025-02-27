import { Module } from '@nestjs/common';
import { CareersEnrollmentsService } from './careers-enrollments.service';
import { CareersEnrollmentsController } from './careers-enrollments.controller';

@Module({
  controllers: [CareersEnrollmentsController],
  providers: [CareersEnrollmentsService],
})
export class CareersEnrollmentsModule {}
