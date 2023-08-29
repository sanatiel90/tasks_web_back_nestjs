import * as bcrypt from 'bcrypt';
import {
  Injectable,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { UsersRepository } from '../../shared/database/repositories/users.repositories';
import { CreateUserDTO } from './dtos/CreateUser.dto';
import { ProfilesRepository } from '../../shared/database/repositories/profiles.repositories';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly profilesRepository: ProfilesRepository,
  ) {}

  async store(createUserDTO: CreateUserDTO) {
    const { name, email, password, profileId } = createUserDTO;

    const emailTaken = await this.findByEmail(email);
    if (emailTaken) {
      throw new ConflictException('E-mail already in use');
    }
    const validProfile = await this.profilesRepository.findFirst({
      where: {
        id: profileId,
      },
    });
    if (!validProfile) {
      throw new BadRequestException('Profile does not exist');
    }

    const hashPassword = await bcrypt.hash(password, 12);

    const user = this.usersRepository.store({
      data: {
        name,
        email,
        password: hashPassword,
        profileId: profileId,
      },
    });

    return user;
  }

  findByEmail(email: string) {
    return this.usersRepository.findFirst({
      where: {
        email,
      },
      select: {
        id: true,
      },
    });
  }
}
