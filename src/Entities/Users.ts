import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Content } from "./Content";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { EncryptionTransformer } from "typeorm-encrypted";

@Entity()
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  username!: string;

  @Column()
  password!: string;

  @Column()
  name!: string;

  @Column()
  surname!: string;

  @Column()
  email!: string;

  @Column()
  phoneNumber!: string;

  @Column({ nullable: true })
  appropiatePHQSeverity!: string;

  @Column({ nullable: true })
  appropiatePHQSeverityScore!: string;

  @Column({ nullable: true })
  permissionPHQSeverity!: string;

  @OneToMany(()=>Content,(content)=>content.user)
  content!:Content[];

  @Column()
  role!:string;
}

