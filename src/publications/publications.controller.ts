import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PublicationsService } from './publications.service';
import { CreatePublicationDto } from '../dtos/create-publication.dto';
import { UpdatePublicationDto } from './dto/update-publication.dto';

@Controller('publications')
export class PublicationsController {
  constructor(private readonly publicationsService: PublicationsService) {}

  @Post()
  create(@Body() createPublicationDto: CreatePublicationDto) {
    return this.publicationsService.create(createPublicationDto);
  }

  @Get()
  findAll() {
    return this.publicationsService.findAll();
  }
}
