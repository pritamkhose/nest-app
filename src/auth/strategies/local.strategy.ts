import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { User } from '../../users/entities/user.entity';
import { AuthService } from '../auth.service';
import { LoginDto } from '../dto/login.post.req.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(login: LoginDto): Promise<User> {
    const user = await this.authService.validateUser(login);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
