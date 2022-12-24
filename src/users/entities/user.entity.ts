import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ width: 50 })
  firstName: string;

  @Column({ width: 50 })
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ width: 100 })
  email: string;

  @Column({ width: 50 })
  username: string;

  @Column({ width: 50 })
  password: string;

  @CreateDateColumn({
    nullable: false,
    name: 'dt_create',
  })
  createdOn: Date;

  @UpdateDateColumn({
    nullable: false,
    name: 'dt_modified',
  })
  modifiedOn: Date;
}
