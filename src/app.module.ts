import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { typeOrmConfig } from './config/typeOrmConfig';
import { CoursesModule } from './modules/courses/courses.module';
import { CampusModule } from './modules/campus/campus.module';
import { EnrollmentsModule } from './modules/enrollments/enrollments.module';
import { EnrollmentsCoursesModule } from './enrollments-courses/enrollments-courses.module';
import { CareersModule } from './careers/careers.module';
import { CareersLevelsModule } from './careers-levels/careers-levels.module';
import { AcademicCyclesModule } from './academic-cycles/academic-cycles.module';
import { CareersEnrollmentsModule } from './careers-enrollments/careers-enrollments.module';
import { AttendancesModule } from './attendances/attendances.module';
import { SessionsModule } from './sessions/sessions.module';
import { SchedulesModule } from './schedules/schedules.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useFactory: typeOrmConfig,
      inject: [ConfigService],
    }),
    UsersModule,
    AuthModule,
    CoursesModule,
    CampusModule,
    EnrollmentsModule,
    EnrollmentsCoursesModule,
    CareersModule,
    CareersLevelsModule,
    AcademicCyclesModule,
    CareersEnrollmentsModule,
    AttendancesModule,
    SessionsModule,
    SchedulesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
