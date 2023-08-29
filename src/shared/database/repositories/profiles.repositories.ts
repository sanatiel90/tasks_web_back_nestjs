import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProfilesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findFirst(findFirst: Prisma.ProfileFindFirstArgs) {
    return this.prismaService.profile.findFirst(findFirst);
  }
}
