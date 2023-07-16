import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { PublicationsModule } from './publications/publications.module';

@Module({
  imports: [PrismaModule, UsersModule, PublicationsModule],
})
export class AppModule {}
