import { PrismaService } from 'src/prisma/prisma.service';
import { PublicationsRepository } from '../publications.repository';
import { Publication } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { CreatePublicationBodyDTO } from '../../dto/create-publication.dto';

@Injectable()
export class PublicationsPrismaRepository implements PublicationsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getPublicationWithTitle(title: string): Promise<Publication> {
    return await this.prisma.publication.findFirst({ where: { title } });
  }

  async createPublication(
    data: CreatePublicationBodyDTO,
    userId: number,
  ): Promise<void> {
    await this.prisma.publication.create({
      data: {
        image: data.image,
        title: data.title,
        text: data.text,
        dateToPublish: new Date(data.dateToPublish),
        published: data.published,
        socialMedia: data.socialMedia,
        userId,
      },
    });
  }
}
