import { Injectable } from '@nestjs/common';
import { CreatePublicationDto } from '../dtos/create-publication.dto';

@Injectable()
export class PublicationsService {
  create(createPublicationDto: CreatePublicationDto) {
    return 'This action adds a new publication';
  }

  findAll() {
    return `This action returns all publications`;
  }
}
