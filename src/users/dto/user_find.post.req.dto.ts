import { Optional } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class FindUserDto {
  @ApiProperty({ example: 'Pritam', description: 'The first name of the user' })
  @Optional()
  firstName: string;

  @ApiProperty({ example: 'Khose', description: 'The last name of the user' })
  @Optional()
  lastName: string;

  @ApiProperty({
    example: 'pritam@gmail.com',
    description: 'The email of the user',
  })
  @Optional()
  email: string;

  @ApiProperty({
    example: 'true or false',
    description: 'The of the user is active',
  })
  @Optional()
  isActive: boolean;
}
