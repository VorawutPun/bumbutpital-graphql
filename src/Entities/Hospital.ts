import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./Users";

@Entity()
export class Hospital extends BaseEntity {
  @PrimaryGeneratedColumn()
  hospitalID!: number;

  @Column("longtext")
  hospitalName!: string;

  @Column("longtext")
  hospitalDescription!: string;

  @Column({length:5000})
  imageUrl!: string;

  @ManyToOne(()=> Users, (user)=> user.hospital)
  user!:Users;

  @Column({nullable:true})
  userId!: string;

}