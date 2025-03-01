import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { typeOrmConfig } from './config/typeOrmConfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/user/users/users.module';
import { AuthModule } from './modules/user/auth/auth.module';
import { CoursesModule } from './modules/academic/courses/courses.module';
import { CampusModule } from './modules/campus/campus.module';
import { EnrollmentsModule } from './modules/user/enrollments/enrollments.module';
import { EnrollmentsCoursesModule } from './modules/enrollments-courses/enrollments-courses.module';
import { CareersModule } from './modules/career/careers/careers.module';
import { CareersLevelsModule } from './modules/career/careers-levels/careers-levels.module';
import { AcademicCyclesModule } from './modules/academic/academic-cycles/academic-cycles.module';
import { CareersEnrollmentsModule } from './modules/career/careers-enrollments/careers-enrollments.module';
import { AttendancesModule } from './modules/user/attendances/attendances.module';
import { SessionsModule } from './modules/academic/sessions/sessions.module';
import { SchedulesModule } from './modules/academic/schedules/schedules.module';
import { AttendancesModule } from './modules/academic/attendances/attendances.module';

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
