import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./Users";

@Entity()
export class Video extends BaseEntity {
  @PrimaryGeneratedColumn()
  videoID!: number;

  @Column()
  appropiatePHQSeverity!: string;

  @Column({length:10000})
  title!: string;

  @Column({length:1000})
  pictureUrl!: string;

  @Column()
  createAt!: string;

  @Column({length:1000})
  videoUrl!: string;

  @ManyToOne(()=> Users, (user)=> user.video)
  user!:Users;

  @Column({nullable:true})
  userId!: string;
}