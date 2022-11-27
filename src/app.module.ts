import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { BirdsModule } from './birds/birds.module';
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';
import { AddressModule } from './address/address.module';
import { EventsModule } from './events/events.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      // ignoreEnvFile: process.env.NODE_ENV === 'production',
    }),
    TypeOrmModule.forRoot({
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
    }),
    UsersModule,
    CatsModule,
    AddressModule,
    MongooseModule.forRoot(
      process.env.MANGODB_HOST || 'mongodb://localhost:27017/nestapp',
    ),
    BirdsModule,
    EventsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
