import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateAddressDto {
  @ApiProperty({ example: '1', description: 'The user id of the addr' })
  @IsNumber()
  user_id: number;

  @ApiProperty({ example: '1 Square', description: 'The line1 of the addr' })
  @IsString()
  line1: string;

  @ApiProperty({ example: 'My Road', description: 'The line2 of the addr' })
  @IsString()
  line2: string;

  @ApiProperty({ example: 'Pune', description: 'The city of the addr' })
  @IsString()
  city: string;

  @ApiProperty({ example: 'Pune', description: 'The district of the addr' })
  @IsString()
  district: string;

  @ApiProperty({ example: 'Goa', description: 'The state of the addr' })
  @IsString()
  state: string;

  @ApiProperty({ example: 'India', description: 'The state of the addr' })
  @IsString()
  country: string;
}
