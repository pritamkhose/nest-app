import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, Length, Matches } from 'class-validator';

export class CreateBirdDto {
  @ApiProperty({ example: 'Parrot', description: 'The name of the Bird' })
  @IsString()
  @Length(2, 50)
  @Matches(/^[a-zA-Z ]+$/)
  readonly name: string;

  @ApiProperty({ example: 1, description: 'The age of the Bird' })
  @IsInt()
  readonly age: number;

  @ApiProperty({
    example: 'Amazon',
    description: 'The breed of the Bird',
  })
  @IsString()
  @Length(2, 50)
  @Matches(/^[a-zA-Z ]+$/)
  readonly breed: string;
}
