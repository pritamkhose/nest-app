import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsNumber,
  IsString,
  Length,
  Matches,
} from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({ example: '1', description: 'The id of the user' })
  @IsNumber()
  id: number;

  @ApiProperty({ example: 'Pritam', description: 'The first name of the user' })
  @IsString()
  @Length(2, 50)
  @Matches(/^[a-zA-Z]+$/)
  firstName: string;

  @ApiProperty({ example: 'Khose', description: 'The last name of the user' })
  @IsString()
  @Length(2, 50)
  @Matches(/^[a-zA-Z ]+$/)
  lastName: string;

  @ApiProperty({
    example: 'pritam@gmail.com',
    description: 'The email of the user',
  })
  @IsEmail()
  @Length(2, 100)
  @Matches(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/)
  email: string;

  @ApiProperty({
    example: 'true or false',
    description: 'The of the user is active',
  })
  @IsBoolean()
  isActive: boolean;
}
