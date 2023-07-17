import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePublicationBodyDTO } from './dto/create-publication.dto';
import { PublicationsRepository } from './repository/publications.repository';

@Injectable()
export class PublicationsService {
  constructor(private readonly publicationRepository: PublicationsRepository) {}

  async createPublication(userId: number, data: CreatePublicationBodyDTO) {
    const existingPublication =
      await this.publicationRepository.getPublicationWithTitle(data.title);
    if (existingPublication) {
      throw new HttpException('Title already exists', HttpStatus.CONFLICT);
    }

    const publication = await this.publicationRepository.createPublication(
      data,
      userId,
    );

    return publication;
  }

  async findAllPublications(userId: number) {
    return await this.publicationRepository.getPublicationsByUser(userId);
  }
}
