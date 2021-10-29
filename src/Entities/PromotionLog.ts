import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PromotionLog extends BaseEntity {
  @PrimaryGeneratedColumn()
  promotionloguserId!: number;

  @Column()
  userId!: string;

  @Column()
  usedpromotionId!: string;

  @Column()
  keeppromotionId!: string;

  @Column()
  status!: string;

}
























































6