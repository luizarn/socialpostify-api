import { User } from '@prisma/client';
import { CreateUserBodyDTO } from '../dto/createUserBodyDTO';

export abstract class UsersRepository {
  abstract addUser(data: CreateUserBodyDTO): Promise<User>;
  abstract findUserByEmail(email: string): Promise<User>;
}
