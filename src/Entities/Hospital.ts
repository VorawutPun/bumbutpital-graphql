import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./Users";

@Entity()
export class Hospital extends BaseEntity {
  @PrimaryGeneratedColumn()
  hospitalID!: number;

  @Column()
  hospitalName!: string;

  @Column({length:10000})
  hospitalDescription!: string;

  @Column({length:5000})
  imageUrl!: string;

  @ManyToOne(()=> Users, (user)=> user.hospital)
  user!:Users;

  @Column({nullable:true})
  userId!: string;

}