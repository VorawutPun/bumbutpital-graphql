import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Content extends BaseEntity {
  @PrimaryGeneratedColumn()
  contentID!: number;

  @Column({length:10000})
  description!: string;

  @Column()
  updateTime!: string;

  @Column({length:5000})
  pictureUrl!: string;

  @Column()
  createAt!: string;

  @Column()
  appropiatePHQSeverity!: string;

  @Column()
  title!: string;


}