import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersRepository } from '../user.repository';
import { CreateUserBodyDTO } from '../../dto/createUserBodyDTO';

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async addUser(data: CreateUserBodyDTO) {
    return await this.prisma.user.create({ data: data });
  }
  async findUserByEmail(email: string) {
    return await this.prisma.user.findUnique({ where: { email } });
  }
}
