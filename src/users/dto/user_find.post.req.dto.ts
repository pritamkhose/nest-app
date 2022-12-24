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

  @ApiProperty({ example: 'username', description: 'The username of the user' })
  username: string;

  @ApiProperty({
    example: 'password',
    description:
      'The password of the user where minimum eight characters, at least one uppercase letter, one lowercase letter and one number',
  })
  password: string;
}
