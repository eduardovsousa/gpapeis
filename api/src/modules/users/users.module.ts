import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';

@Module({
  providers: [UsersRepository, UsersService],
  exports: [UsersRepository, UsersService],
  controllers: [UsersController],
})
export class UsersModule { }
