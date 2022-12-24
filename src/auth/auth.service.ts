import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.post.req.dto';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(login: LoginDto): Promise<any> {
    const user = await this.usersRepository.findOneBy({
      username: login.username,
      password: login.password,
    });

    let result;
    if (user) {
      const access_token = this.jwtService.sign({
        username: user.username,
        sub: {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
        },
      });
      result = { date: new Date().toISOString(), status: 'pass', access_token };
    } else {
      result = { status: 'fail' };
    }
    return result;
  }
}
