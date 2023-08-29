import { Global, Module } from '@nestjs/common';
import { UsersRepository } from './repositories/users.repositories';
import { PrismaService } from './prisma.service';
import { ProfilesRepository } from './repositories/profiles.repositories';

@Global()
@Module({
  providers: [PrismaService, UsersRepository, ProfilesRepository],
  exports: [UsersRepository, ProfilesRepository],
})
export class DatabaseModule {}
