import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Forum extends BaseEntity {
  @PrimaryGeneratedColumn()
  forumID!: number;

  @Column()
  userID!:number;
  
  @Column()
  staffID!:number;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column()
  createAt!: string;

  @Column()
  answer!: string;



}