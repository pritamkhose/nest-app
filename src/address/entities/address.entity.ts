import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column({ length: 250, default: '' })
  line1: string;

  @Column({ length: 250, default: '' })
  line2: string;

  @Column({ length: 50, default: '' })
  city: string;

  @Column({ length: 50, default: '' })
  district: string;

  @Column({ length: 50, default: '' })
  state: string;

  @Column({ length: 50, default: '' })
  country: string;

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
