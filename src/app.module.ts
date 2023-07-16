import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './modules/users/users.module';
import { PublicationsModule } from './modules/publications/publications.module';

@Module({
  imports: [PrismaModule, UsersModule, PublicationsModule],
})
export class AppModule {}
