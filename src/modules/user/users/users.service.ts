import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { hashPassword } from 'src/common/helpers/user';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const userExists = await this.userRepository.findOneBy({
        dni: createUserDto.dni,
      });

      if (userExists) {
        throw new ConflictException({ message: 'Usuario ya registrado' });
      }

      const passwordHashed = await hashPassword(createUserDto.password);

      const user = this.userRepository.create({
        ...createUserDto,
        password: passwordHashed,
      });
      await this.userRepository.save(user);

      return { message: 'Usuario creado exitosamente' };
    } catch (error) {
      console.error(error);
      throw new ConflictException({ message: 'Error al crear usuario' });
    }
  }

  findAll() {
    return `This action returns all users`;
  }

  async findUserByDni(dni: string) {
    const user = await this.userRepository.findOneBy({ dni });

    if (!user) {
      throw new UnauthorizedException({ message: 'Usuario no encontrado' });
    }

    return user;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
