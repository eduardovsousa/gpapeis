import {
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { SigninDto } from './dto/signin';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepo: UsersRepository,
    private readonly jwtService: JwtService,
  ) {}

  async signin(signinDto: SigninDto) {
    const { email, password } = signinDto;

    const user = this.usersRepo.findUnique({
      where: { email, password },
    });

    if (!user) {
      throw new UnauthorizedException('Credenciais inválidas.');
    }

    if (email !== user.email || password !== user.password) {
      throw new UnauthorizedException('Credenciais inválidas.');
    }

    const accessToken = await this.generateAccessToken(user.email);

    return { accessToken };
  }

  private generateAccessToken(email: string) {
    return this.jwtService.signAsync({ sub: email });
  }
}