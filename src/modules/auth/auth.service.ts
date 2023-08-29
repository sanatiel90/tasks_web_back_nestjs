import * as bcrypt from 'bcrypt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDTO } from './dtos/login.dto';
import { JwtService } from '@nestjs/jwt';
import { UsersRepository } from '../../shared/database/repositories/users.repositories';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDTO: LoginDTO) {
    const { email, password } = loginDTO;
    const user = await this.usersRepository.findFirst({
      where: {
        email,
      },
    });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const passwordOK = await bcrypt.compare(password, user.password);
    if (!passwordOK) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { sub: user.id };
    const accessToken = await this.jwtService.signAsync(payload);
    return {
      accessToken,
    };
  }
}
