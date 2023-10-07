import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['catName'])
export class Categories extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  catName: string;




  
}
