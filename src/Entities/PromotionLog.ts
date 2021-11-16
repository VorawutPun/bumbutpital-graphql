import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { EncryptionTransformer } from "typeorm-encrypted";
@Entity()
export class PromotionLog extends BaseEntity {
  @PrimaryGeneratedColumn()
  promotionloguserId!: number;

  @Column({
    type: "varchar",
  nullable: false,
  transformer: new EncryptionTransformer({
    key: 'e41c966f21f9e1577802463f8924e6a3fe3e9751f201304213b2f845d8841d61',
    algorithm: 'aes-256-cbc',
    ivLength: 16,
    iv: 'ff5ac19190424b1d88f9419ef949ae56'
  })
})
  userId!: string | undefined;

  @Column()
  usedpromotionId!: string;

  @Column()
  keeppromotionId!: string;

  @Column()
  status!: string;

}
























































6