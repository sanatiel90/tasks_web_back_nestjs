import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  store(@Body() createUserDTO: CreateUserDTO) {
    return this.usersService.store(createUserDTO);
  }
}
