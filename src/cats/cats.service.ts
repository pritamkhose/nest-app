import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: CreateCatDto): Cat {
    cat.id = new Date().getTime().toString();
    this.cats.push(cat);
    return cat;
  }

  fineByID(id: string): Cat {
    const c = this.cats.filter((itemInArray) => itemInArray.id === id);
    return c === undefined ? new Cat() : c[0];
  }

  findOne(id: number): Cat {
    return this.cats[id];
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
