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

  // static async getByUserKey(ukey: string): Promise<Users | undefined> {
  //   const db = new Database<Users>(Users);
  //   return await db.get({ ukey });
  // }
}

