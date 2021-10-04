import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Hospital extends BaseEntity {
  @PrimaryGeneratedColumn()
  hospitalID!: number;

  @Column()
  staffID!: number;

  @Column()
  hospitalName!: string;

  @Column({length:10000})
  hospitalDescription!: string;

  @Column({length:5000})
  imageUrl!: string;

}