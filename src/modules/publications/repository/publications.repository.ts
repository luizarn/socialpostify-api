import { Publication } from '@prisma/client';
import { CreatePublicationBodyDTO } from '../dto/create-publication.dto';

export abstract class PublicationsRepository {
  abstract createPublication(
    data: CreatePublicationBodyDTO,
    userId: number,
  ): Promise<void>;
  abstract getPublicationWithTitle(title: string): Promise<Publication>;
  abstract getPublicationsByUser(userId: number): Promise<Publication[]>;
}
