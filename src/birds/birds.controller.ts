import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BirdsService } from './birds.service';
import { CreateBirdDto } from './dto/bird.post.req.dto';
import { FindBirdDto } from './dto/bird_find.post.req.dto';
import { UpdateBirdDto } from './dto/bird.put.req.dto';
import { Bird } from './schemas/bird.schema';

@Controller('birds')
@ApiTags('Birds')
export class BirdsController {
  constructor(private readonly birdsService: BirdsService) {}

  @Post()
  create(@Body() createBirdDto: CreateBirdDto) {
    return this.birdsService.create(createBirdDto);
  }

  @Get()
  findAll(): Promise<Bird[]> {
    return this.birdsService.findAll();
  }

  @Post('/find')
  findByProp(@Body() findBirdDto: FindBirdDto): Promise<Bird[]> {
    return this.birdsService.findByProp(findBirdDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.birdsService.findOne(id);
  }

  @Patch()
  update(@Body() updateBirdDto: UpdateBirdDto) {
    return this.birdsService.save(updateBirdDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.birdsService.remove(id);
  }
}
