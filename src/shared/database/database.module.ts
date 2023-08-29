import { Global, Module } from '@nestjs/common';
import { UsersRepository } from './repositories/users.repositories';
import { PrismaService } from './prisma.service';
import { ProfilesRepository } from './repositories/profiles.repositories';
import { CustomersRepository } from './repositories/customers.repositories';

@Global()
@Module({
  providers: [
    PrismaService,
    UsersRepository,
    ProfilesRepository,
    CustomersRepository,
  ],
  exports: [UsersRepository, ProfilesRepository, CustomersRepository],
})
export class DatabaseModule {}
