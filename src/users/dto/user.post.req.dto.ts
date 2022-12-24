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

  @ApiProperty({ example: 'username', description: 'The username of the user' })
  @IsString()
  @Length(2, 50)
  @Matches(/^[a-zA-Z]+$/)
  username: string;

  @ApiProperty({
    example: 'password',
    description:
      'The password of the user where minimum eight characters, at least one uppercase letter, one lowercase letter and one number',
  })
  @IsString()
  @Length(2, 50)
  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
  password: string;
}
