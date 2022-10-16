import { Optional } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class FindBirdDto {
  @ApiProperty({ example: 'Parrot', description: 'The name of the Bird' })
  @Optional()
  readonly name: string;

  @ApiProperty({ example: 1, description: 'The age of the Bird' })
  @Optional()
  readonly age: number;

  @ApiProperty({
    example: 'Amazon',
    description: 'The breed of the Bird',
  })
  @Optional()
  readonly breed: string;
}
