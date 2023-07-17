import { Controller, Get, Post, Body } from '@nestjs/common';
import { PublicationsService } from './publications.service';
import { CreatePublicationBodyDTO } from './dto/create-publication.dto';

@Controller('publications')
export class PublicationsController {
  constructor(private readonly publicationsService: PublicationsService) {}

  @Post()
  create(@Body() createPublicationDto: CreatePublicationBodyDTO) {
    return this.publicationsService.create(createPublicationDto);
  }

  @Get()
  findAll() {
    return this.publicationsService.findAll();
  }
}
