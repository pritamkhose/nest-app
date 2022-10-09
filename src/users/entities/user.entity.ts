import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Pritam', description: 'The first name of the user' })
  @Column()
  firstName: string;

  @ApiProperty({ example: 'Khose', description: 'The last name of the user' })
  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}
