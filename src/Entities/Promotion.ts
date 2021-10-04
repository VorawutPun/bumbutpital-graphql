import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Promotion extends BaseEntity {
  @PrimaryGeneratedColumn()
  promotionId!: number;

  @Column()
  hospitalId!: string;

  @Column()
  userId!: string;

  @Column()
  createAt!: string;

  @Column({length:5000})
  title!: string;

  @Column({length:5000})
  hospitalDetail!: string;

  @Column()
  couponCode!: string;

  @Column()
  Url!: string;

  @Column({length:1000})
  expiredDate!: string;

}