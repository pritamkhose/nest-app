import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Pritam', description: 'The first name of the user' })
  @Length(2, 50)
  @IsString()
  firstName: string;

  @ApiProperty({ example: 'Khose', description: 'The last name of the user' })
  @Length(2, 50)
  @IsString()
  lastName: string;
}
