import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserBodyDTO } from './dto/createUserBodyDTO';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  addUser(@Body() body: CreateUserBodyDTO) {
    return this.usersService.addUser(body);
  }
}
