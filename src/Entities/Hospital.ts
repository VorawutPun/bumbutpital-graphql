import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Hospital extends BaseEntity {
  @PrimaryGeneratedColumn()
  hospitalID!: number;

  @Column()
  staffID!: string;

  @Column()
  hospitalName!: string;

  @Column()
  hospitalDescription!: string;

  @Column()
  imageUrl!: string;

}