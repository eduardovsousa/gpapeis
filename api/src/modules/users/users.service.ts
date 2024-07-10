import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepo: UsersRepository) {}

  getUserByEmail(email: string, password: string) {
    return this.usersRepo.findUnique({
      where: { email, password },
    });
  }
}
