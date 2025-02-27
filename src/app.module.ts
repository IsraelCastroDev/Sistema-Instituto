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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
