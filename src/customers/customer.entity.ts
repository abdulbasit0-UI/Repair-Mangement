import {
  Column,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  Unique,
  BaseEntity,
} from 'typeorm';

@Unique(['email'])
@Entity()
export class Customer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;
}




