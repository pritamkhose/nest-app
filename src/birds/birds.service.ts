import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBirdDto } from './dto/bird.post.req.dto';
import { UpdateBirdDto } from './dto/bird.put.req.dto';
import { FindBirdDto } from './dto/bird_find.post.req.dto';
import { Bird, BirdDocument } from './schemas/bird.schema';

@Injectable()
export class BirdsService {
  constructor(@InjectModel(Bird.name) private birdModel: Model<BirdDocument>) {}

  create(createBirdDto: CreateBirdDto): Promise<Bird> {
    return new this.birdModel(createBirdDto).save();
  }

  async findAll(): Promise<Bird[]> {
    return this.birdModel.find().exec();
  }

  async save(updateBirdDto: UpdateBirdDto) {
    return await this.birdModel
      .findByIdAndUpdate({ _id: updateBirdDto.id, updateBirdDto })
      .exec();
  }

  async findByProp(findBirdDto: FindBirdDto): Promise<any[]> {
    return await this.birdModel.find(findBirdDto);
  }

  findOne(id: string): any {
    return this.birdModel.findOne({ _id: id }).exec();
  }

  async remove(id: string) {
    const deletedObj = await this.birdModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedObj;
  }
}
