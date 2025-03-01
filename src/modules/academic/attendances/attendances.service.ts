import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import { Attendance } from './entities/attendance.entity';
import { UsersService } from 'modules/user/users/users.service';
import { SessionsService } from '../sessions/sessions.service';
import { AttendancesStatus } from './interfaces';

@Injectable()
export class AttendancesService {
  constructor(
    @InjectRepository(Attendance)
    private readonly attendanceRepository: Repository<Attendance>,
    private usersService: UsersService,
    private sessionsService: SessionsService,
  ) {}

  async create(createAttendanceDto: CreateAttendanceDto) {
    const { userId, sessionId } = createAttendanceDto;

    const [user, session] = await Promise.all([
      this.usersService.findOne(userId),
      this.sessionsService.findOne(sessionId),
    ]);

    const findAttendance = await this.attendanceRepository.findOne({
      where: {
        userId: user.id,
        sessionId: session.id,
      },
    });

    if (findAttendance) {
      throw new ConflictException('El estudiante ya marcó su asistencia');
    }

    const currentTime = new Date();
    const sessionStartDate = new Date(
      `${session.sessionDate}T${session.startTime}`,
    );

    const lateThreshold = new Date(sessionStartDate);
    lateThreshold.setMinutes(lateThreshold.getMinutes() + 15);

    let status = AttendancesStatus.PRESENT;
    if (currentTime > lateThreshold) {
      status = AttendancesStatus.LATE;
    }

    const newAttendance = this.attendanceRepository.create({
      userId,
      sessionId,
      status,
    });

    await this.attendanceRepository.save(newAttendance);

    return { message: 'Asistencia marcada' };
  }

  findAll() {
    return `This action returns all attendances`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attendance`;
  }

  update(id: number, updateAttendanceDto: UpdateAttendanceDto) {
    return `This action updates a #${id} attendance`;
  }

  remove(id: number) {
    return `This action removes a #${id} attendance`;
  }
}
