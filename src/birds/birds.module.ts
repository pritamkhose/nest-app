import { Module } from '@nestjs/common';
import { BirdsService } from './birds.service';
import { BirdsController } from './birds.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Bird, BirdSchema } from './schemas/bird.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Bird.name, schema: BirdSchema }]),
  ],
  providers: [BirdsService],
  exports: [BirdsService],
  controllers: [BirdsController],
})
export class BirdsModule {}
