import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Video extends BaseEntity {
  @PrimaryGeneratedColumn()
  videoID!: number;

  @Column()
  staffID!: string;

  @Column()
  appropiatePHQSeverity!: string;

  @Column({length:10000})
  title!: string;

  @Column({length:1000})
  pictureUrl!: string;

  @Column()
  createAt!: string;

  @Column({length:1000})
  videoUrl!: string;

  @Column({length:1000})
  VideoType!: string;
}