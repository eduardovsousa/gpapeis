import { Controller, Get } from '@nestjs/common';
import { ActiveUserEmail } from '../../shared/decorators/ActiveUserEmail';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get('/me')
  me(@ActiveUserEmail() email: string, password: string) {
    return this.usersService.getUserByEmail(email, password);
  }
}