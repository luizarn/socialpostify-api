import { Module } from '@nestjs/common';
import { PublicationsService } from './publications.service';
import { PublicationsController } from './publications.controller';
import { UsersService } from '../users/users.service';
import { UsersRepository } from '../users/repository/user.repository';
import { PrismaUsersRepository } from '../users/repository/implementations/prismaUsers.repository';
import { AuthModule } from '../auth/auth.module';
import { PublicationsRepository } from './repository/publications.repository';
import { PublicationsPrismaRepository } from './repository/implementations/prismaPublications.repository';

@Module({
  imports: [AuthModule],
  controllers: [PublicationsController],
  providers: [
    PublicationsService,
    {
      provide: PublicationsRepository,
      useClass: PublicationsPrismaRepository,
    },
    UsersService,
    {
      provide: UsersRepository,
      useClass: PrismaUsersRepository,
    },
  ],
})
export class PublicationsModule {}
