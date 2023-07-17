import { IsDateString, IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { parseISO } from 'date-fns';

export class CreatePublicationBodyDTO {
  @IsNotEmpty()
  @IsUrl()
  image: string;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  text: string;

  @IsString()
  @IsDateString()
  dateToPublish: string;

  @IsNotEmpty()
  published: boolean;

  @IsNotEmpty()
  socialMedia: string;
}
