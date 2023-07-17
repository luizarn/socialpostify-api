import { IsDateString, IsNotEmpty, IsString } from 'class-validator';
import { parseISO } from 'date-fns';

export class CreatePublicationBodyDTO {
  @IsNotEmpty()
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

  get parsedDateToPublish(): Date {
    return parseISO(this.dateToPublish);
  }
}
