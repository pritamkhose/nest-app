import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/user.post.req.dto';
import { UpdateUserDto } from './dto/user.put.req.dto';
import { FindUserDto } from './dto/user_find.post.req.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    return this.usersRepository.save(createUserDto);
  }

  async save(updateUserDto: UpdateUserDto): Promise<any> {
    await this.usersRepository.update(updateUserDto.id, updateUserDto);
    return updateUserDto;
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findByProp(findUserDto: FindUserDto): Promise<User[]> {
    return this.usersRepository.findBy(findUserDto);
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id: id });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
