import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { EncryptionTransformer } from "typeorm-encrypted";
@Entity()
export class PHQ9Log extends BaseEntity {
  @PrimaryGeneratedColumn()
  PHQ9LogID!: string;

  @Column()
  userID!:string;

  @Column({
    type: "varchar",
  nullable: true,
  transformer: new EncryptionTransformer({
    key: 'e41c966f21f9e1577802463f8924e6a3fe3e9751f201304213b2f845d8841d61',
    algorithm: 'aes-256-cbc',
    ivLength: 16,
    iv: 'ff5ac19190424b1d88f9419ef949ae56'
  })
})
  appropiatePHQSeverityLog!: string | undefined;

  @Column({
    type: "longtext",
  nullable: true,
  transformer: new EncryptionTransformer({
    key: 'e41c966f21f9e1577802463f8924e6a3fe3e9751f201304213b2f845d8841d61',
    algorithm: 'aes-256-cbc',
    ivLength: 16,
    iv: 'ff5ac19190424b1d88f9419ef949ae56'
  })
})
  appropiatePHQSeverityScoreLog!: string | undefined;

  @Column()
  date!:string;

}