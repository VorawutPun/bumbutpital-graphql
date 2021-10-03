import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Promotion extends BaseEntity {
  @PrimaryGeneratedColumn()
  promotionId!: number;

  @Column()
  hospitalId!: String;

  // @Column()
  // userId!: String;

  @Column()
  createAt!: string;

  @Column({length:1000})
  title!: string;

  @Column({length:1000})
  hospitalDetail!: string;

  @Column()
  couponCode!: string;

  @Column()
  Url!: string;

  @Column({length:1000})
  expiredDate!:String;

}