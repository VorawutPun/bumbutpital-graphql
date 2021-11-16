import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { EncryptionTransformer } from "typeorm-encrypted";
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