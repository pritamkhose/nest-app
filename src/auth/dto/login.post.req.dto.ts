import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, Matches } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'username', description: 'The username of the user' })
  @IsString()
  @Length(2, 50)
  @Matches(/^[a-zA-Z0-9_]+$/)
  username: string;

  @ApiProperty({
    example: 'Password@1',
    description:
      'The password of the user where minimum eight characters, at least one uppercase letter, one lowercase letter and one number',
  })
  @IsString()
  @Length(2, 50)
  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
  password: string;
}
