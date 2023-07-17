import { Injectable } from '@nestjs/common';
import { CreatePublicationBodyDTO } from './dto/create-publication.dto';

@Injectable()
export class PublicationsService {
  create(createPublicationDto: CreatePublicationBodyDTO) {
    return 'This action adds a new publication';
  }

  findAll() {
    return `This action returns all publications`;
  }
}
