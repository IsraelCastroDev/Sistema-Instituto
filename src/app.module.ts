import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { typeOrmConfig } from './config/typeOrmConfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { CoursesModule } from './modules/courses/courses.module';
import { CampusModule } from './modules/campus/campus.module';
import { EnrollmentsModule } from './modules/enrollments/enrollments.module';
import { EnrollmentsCoursesModule } from './modules/enrollments-courses/enrollments-courses.module';
import { CareersModule } from './modules/careers/careers.module';
import { CareersLevelsModule } from './modules/careers-levels/careers-levels.module';
import { AcademicCyclesModule } from './modules/academic-cycles/academic-cycles.module';
import { CareersEnrollmentsModule } from './modules/careers-enrollments/careers-enrollments.module';
import { AttendancesModule } from './modules/attendances/attendances.module';
import { SessionsModule } from './modules/sessions/sessions.module';
import { SchedulesModule } from './modules/schedules/schedules.module';

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
