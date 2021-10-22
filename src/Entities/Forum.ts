import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Forum extends BaseEntity {
  @PrimaryGeneratedColumn()
  forumID!: string;

  @Column({nullable:true})
  userID!:string;

  @Column({nullable:true})
  staffID!:string;

  @Column({nullable:true})
  title!: string;

  @Column({nullable:true})
  description!: string;

  @Column({nullable:true})
  createAt!: string;

  @Column({nullable:true})
  answer!: string;
  
}