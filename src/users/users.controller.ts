import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AddressService } from '../address/address.service';
import { CreateUserDto } from './dto/user.post.req.dto';
import { UpdateUserDto } from './dto/user.put.req.dto';
import { FindUserDto } from './dto/user_find.post.req.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  @Inject(AddressService)
  private readonly addressService: AddressService;
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 201, description: 'Success.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Post('/find')
  findByProp(@Body() findUserDto: FindUserDto): Promise<User[]> {
    return this.usersService.findByProp(findUserDto);
  }

  @Put()
  update(@Body() updateUserDto: UpdateUserDto): Promise<User> {
    return this.usersService.save(updateUserDto);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id/address')
  async finduserIDAddr(@Param('id', ParseIntPipe) id: number): Promise<object> {
    const user = await this.usersService.findOne(id);
    const addr = await this.addressService.finduserIDAddr(id);
    return {
      user,
      addr,
    };
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(id);
  }
}
