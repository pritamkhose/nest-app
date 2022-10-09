import { ApiProperty } from '@nestjs/swagger';

export class Cat {
  /**
   * The name of the Cat
   * @example Kitty
   */
  @ApiProperty({ example: '20221010111134', description: 'The id of the Cat' })
  id: string;

  @ApiProperty({ example: 'Kitty', description: 'The name of the Cat' })
  name: string;

  @ApiProperty({ example: 1, description: 'The age of the Cat' })
  age: number;

  @ApiProperty({
    example: 'Maine Coon',
    description: 'The breed of the Cat',
  })
  breed: string;
}
