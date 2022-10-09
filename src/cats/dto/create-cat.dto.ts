import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreateCatDto {
  @ApiProperty({ example: '20221010111134', description: 'The id of the Cat' })
  id: string;

  @ApiProperty({ example: 'Kitty', description: 'The name of the Cat' })
  @IsString()
  readonly name: string;

  @ApiProperty({ example: 1, description: 'The age of the Cat' })
  @IsInt()
  readonly age: number;

  @ApiProperty({
    example: 'Maine Coon',
    description: 'The breed of the Cat',
  })
  @IsString()
  readonly breed: string;
}
