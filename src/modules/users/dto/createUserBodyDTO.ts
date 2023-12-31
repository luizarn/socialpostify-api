import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserBodyDTO {
  @IsNotEmpty()
  @Length(3, 100)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 20)
  password: string;

  @IsNotEmpty()
  avatar: string;
}
