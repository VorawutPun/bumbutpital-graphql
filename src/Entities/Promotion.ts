import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Content extends BaseEntity {
  @PrimaryGeneratedColumn()
  contentID!: number;

  @Column()
  description!: string;

  @Column()
  updateTime!: string;

  @Column()
  pictureUrl!: string;

  @Column()
  createAt!: string;

  @Column()
  appropiatePHQSeverity!: string;

  @Column()
  title!: string;


}