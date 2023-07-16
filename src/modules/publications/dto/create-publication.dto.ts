import { IsNotEmpty } from 'class-validator';

export class CreatePublicationBodyDTO {
  @IsNotEmpty()
  image: string;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  text: string;

  @IsNotEmpty()
  dateToPublish: Date;

  @IsNotEmpty()
  published: boolean;

  @IsNotEmpty()
  socialMedia: string;
}
