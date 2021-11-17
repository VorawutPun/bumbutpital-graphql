import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./Users";

@Entity()
export class Content extends BaseEntity {
  @PrimaryGeneratedColumn()
  contentID!: number;

  @Column({length:10000})
  description!: string;

  @Column()
  updateTime!: string;

  @Column({length:5000})
  pictureUrl!: string;

  @Column()
  createAt!: string;

  @Column()
  appropiatePHQSeverity!: string;

  @Column()
  title!: string;

  @ManyToOne(()=> Users, (user)=> user.content)
  user!:Users;

  @Column({nullable:true})
  userId!: string;
}