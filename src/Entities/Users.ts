import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

  @Column({nullable:true})
  appropiatePHQSeverity!: string;

  @Column({nullable:true})
  appropiatePHQSeverityScore!: string;

  @Column({nullable:true})
  permissionPHQSeverity!: string;
}

