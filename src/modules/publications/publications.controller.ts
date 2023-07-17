import { Controller, Post, Body, UseGuards, HttpStatus } from '@nestjs/common';
import { CreatePublicationBodyDTO } from './dto/create-publication.dto';
import { PublicationsService } from './publications.service';
import { AuthGuard } from '../auth/authGuard/auth.guard';
import { UserRequest } from '../auth/decorators/user.decorator';
import { User } from '@prisma/client';

@Controller('publications')
export class PublicationsController {
  constructor(private readonly publicationsService: PublicationsService) {}

  @UseGuards(AuthGuard)
  @Post()
  async createPublication(
    @UserRequest() user: User,
    @Body() createPublicationDto: CreatePublicationBodyDTO,
  ) {
    const publication = await this.publicationsService.createPublication(
      user.id,
      createPublicationDto,
    );
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Post created successfully',
      data: publication,
    };
  }
}
