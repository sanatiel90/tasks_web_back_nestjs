import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CustomersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  store(store: Prisma.CustomerCreateArgs) {
    this.prismaService.customer.create(store);
  }
}
