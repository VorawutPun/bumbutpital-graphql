import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Staff extends BaseEntity {
  @PrimaryGeneratedColumn()
  staffId!: number;

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
  role!:string;
}
