import { Module } from '@nestjs/common';
// import { APP_GUARD } from '@nestjs/core';
import { CacheModule, CacheInterceptor } from '@nestjs/cache-manager';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksService } from './corn/task.service';

import { AuthModule } from './auth/auth.module';
import { BirdsModule } from './birds/birds.module';
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';
import { AddressModule } from './address/address.module';
import { EventsModule } from './events/events.module';

import { AcceptLanguageResolver, I18nModule, QueryResolver } from 'nestjs-i18n';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      // ignoreEnvFile: process.env.NODE_ENV === 'production',
    }),
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: path.join(__dirname, '/i18n/'),
        watch: true,
      },
      resolvers: [
        { use: QueryResolver, options: ['lang'] },
        AcceptLanguageResolver,
      ],
    }),
    TypeOrmModule.forRoot(
      process.env.DB_TYPE === 'postgres'
        ? {
            type: 'postgres',
            host: process.env.POSTGRES_DB_HOST || 'localhost',
            port: parseInt(process.env.POSTGRES_DB_PORT, 5432) || 5432,
            username: process.env.POSTGRES_DB_USERNAME || '',
            password: process.env.POSTGRES_DB_PASSWORD || '',
            database: process.env.POSTGRES_DB_NAME || 'nestapp',
            autoLoadEntities: true,
            synchronize: true,
            logging: true,
            // entities: ['entity/*.js'],
            // logger: new MyCustomLogger(),
          }
        : {
            type: 'mysql',
            host: process.env.DB_HOST || 'localhost',
            port: parseInt(process.env.DB_PORT, 3306) || 3306,
            username: process.env.DB_USERNAME || 'root',
            password: process.env.DB_PASSWORD || 'password',
            database: process.env.DB_NAME || 'nestapp',
            autoLoadEntities: true,
            synchronize: true,
            logging: true,
            // entities: ['entity/*.js'],
            // logger: new MyCustomLogger(),
          },
    ),
    ScheduleModule.forRoot(),
    AuthModule,
    UsersModule,
    CatsModule,
    AddressModule,
    MongooseModule.forRoot(
      process.env.MANGODB_HOST || 'mongodb://localhost:27017/nestapp',
    ),
    BirdsModule,
    EventsModule,
    CacheModule.register({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    TasksService,
    // {
    //   provide: APP_GUARD,
    //   useClass: RolesGuard,
    // },
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {}
