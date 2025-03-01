import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { validatePassword } from 'common/helpers/user';
import { SignInDto } from './dto/sign-in-dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(signInDto: SignInDto) {
    const { dni, password } = signInDto;

    const user = await this.userService.findUserByDni(dni);

    const isCorrectPassword = await validatePassword(password, user.password);

    if (!isCorrectPassword) {
      throw new UnauthorizedException('Contraseña incorrecta');
    }

    const payload = { sub: user.id };

    return { access_token: await this.jwtService.signAsync(payload) };
  }
}
