import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { type Prisma } from '@prisma/client';

@Injectable()
export class BankAccountsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findMany(findManyDto: Prisma.BankAccountFindManyArgs) {
    return await this.prisma.bankAccount.findMany(findManyDto);
  }

  async findFirst(findManyDto: Prisma.BankAccountFindFirstArgs) {
    return await this.prisma.bankAccount.findFirst(findManyDto);
  }

  async create(createDto: Prisma.BankAccountCreateArgs) {
    return await this.prisma.bankAccount.create(createDto);
  }

  async update(updateDto: Prisma.BankAccountUpdateArgs) {
    return await this.prisma.bankAccount.update(updateDto);
  }

  async delete(deleteDto: Prisma.BankAccountDeleteArgs) {
    return await this.prisma.bankAccount.delete(deleteDto);
  }
}
