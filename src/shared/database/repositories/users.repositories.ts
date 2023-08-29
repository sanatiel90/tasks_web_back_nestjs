import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  store(createUser: Prisma.UserCreateArgs) {
    return this.prismaService.user.create(createUser);
  }

  findFirst(findFirst: Prisma.UserFindFirstArgs) {
    return this.prismaService.user.findFirst(findFirst);
  }
}
