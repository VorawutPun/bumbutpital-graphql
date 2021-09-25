import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Video extends BaseEntity {
  @PrimaryGeneratedColumn()
  videoID!: number;

  @Column()
  staffID!: string;

  @Column()
  appropiatePHQSeverity!: string;

  @Column()
  title!: string;

  @Column()
  pictureUrl!: string;

  @Column()
  createAt!: string;

  @Column()
  videoUrl!: string;
}