import {
  //   ExecutionContext,
  Injectable,
  //   UnauthorizedException,
} from '@nestjs/common';
// import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
// import { SetMetadata } from '@nestjs/common';
// import { Observable } from 'rxjs';

// export const IS_PUBLIC_KEY = 'isPublic';
// export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  //   constructor(private reflector: Reflector) {
  //     super();
  //   }
  //   canActivate(
  //     context: ExecutionContext,
  //   ): boolean | Promise<boolean> | Observable<boolean> {
  //     const request = context.switchToHttp().getRequest();
  //     return request;
  //   }
  //   canActivate(context: ExecutionContext) {
  //     // const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
  //     //   context.getHandler(),
  //     //   context.getClass(),
  //     // ]);
  //     // if (isPublic) {
  //     //   return true;
  //     // }
  //     return super.canActivate(context);
  //   }
  //   handleRequest(err, user, info) {
  //     // You can throw an exception based on either "info" or "err" arguments
  //     if (err || !user) {
  //       throw err || new UnauthorizedException();
  //     }
  //     return user;
  //   }
}
