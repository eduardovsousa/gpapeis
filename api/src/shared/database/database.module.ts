import { Global, Module } from '@nestjs/common';
import { UsersRepository } from './repositories/users.repositories';

@Global()
@Module({
  providers: [
    UsersRepository,
  ],
  exports: [
    UsersRepository,
  ],
})
export class DatabaseModule {}