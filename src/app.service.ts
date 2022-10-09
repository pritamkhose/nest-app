import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return {
      title: 'Nest App',
      date: new Date().toISOString(),
      status: 'UP',
      env:
        process.env.NODE_ENV_DEBUG == 'Ture'
          ? process.env
          : process.env.NODE_ENV || 'NA',
    };
  }
}
