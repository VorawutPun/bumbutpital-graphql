import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class promotioninhospitaldetail_card extends BaseEntity {
  @PrimaryGeneratedColumn()
  promotionId!: number;

  @Column()
  hospitalId!: string;

  @Column()
  userId!: string;

  @Column()
  createAt!: string;

  @Column()
  title!: string;

  @Column()
  hospitalDetail!: string;

  @Column()
  couponCode!: string;


  @Column()
  Url!: string;

}