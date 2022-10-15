import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length, Matches } from 'class-validator';

export class CreateUserDto {
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
}
