import { Injectable } from '@nestjs/common';

export interface IUserProps {
  email: string;
  password: string;
}

@Injectable()
export class UsersRepository {
  private users: IUserProps[] = [
    { email: 'guapipapeis@mail.com', password: '123123123' }
  ];

  findUnique(findUniqueDto: { where: { email?: string, password?: string } }): IUserProps | undefined {
    const { email, password } = findUniqueDto.where;
    return this.users.find(user => user.email === email && user.password === password);
  }
}
