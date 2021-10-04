import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Forum extends BaseEntity {
  @PrimaryGeneratedColumn()
  forumID!: string;

  @Column({nullable:true})
  userID!:string;

  @Column({nullable:true})
  staffID!:string;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column()
  createAt!: string;

  @Column({nullable:true})
  answer!: string;
  
}