import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CustomersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  store(store: Prisma.CustomerCreateArgs) {
    return this.prismaService.customer.create(store);
  }

  findUnique(findUnique: Prisma.CustomerFindUniqueArgs) {
    return this.prismaService.customer.findUnique(findUnique);
  }

  findFirst(findFirst: Prisma.CustomerFindFirstArgs) {
    return this.prismaService.customer.findFirst(findFirst);
  }

  findMany() {
    return this.prismaService.customer.findMany();
  }

  update(update: Prisma.CustomerUpdateArgs) {
    return this.prismaService.customer.update(update);
  }
}
