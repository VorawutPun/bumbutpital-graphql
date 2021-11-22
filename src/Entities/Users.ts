import { Hospital } from './Hospital';
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Content } from "./Content";
import { EncryptionTransformer } from "typeorm-encrypted";
import { Video } from "./Video";

@Entity()
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  username!: string;

  @Column()
  password!: string;

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
  name!: string | undefined;

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
  surname!: string | undefined;

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
  email!: string | undefined;

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
  phoneNumber!: string | undefined;

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
  appropiatePHQSeverity!: string | undefined;

  //   @Column({
  //     type: "varchar",
  //   nullable: true,
  //   transformer: new EncryptionTransformer({
  //     key: 'e41c966f21f9e1577802463f8924e6a3fe3e9751f201304213b2f845d8841d61',
  //     algorithm: 'aes-256-cbc',
  //     ivLength: 16,
  //     iv: 'ff5ac19190424b1d88f9419ef949ae56'
  //   })
  // })
  //   appropiatePHQSeverityScore!: string | undefined;

 

 

  @Column({ nullable: true })
  appropiatePHQSeverityScore!: string;

  @Column({ nullable: true })
  permissionPHQSeverity!: string;

  @OneToMany(() => Content, (content) => content.user)
  content!: Content[];

  @OneToMany(() => Video, (video) => video.user)
  video!: Video[];

  @OneToMany(() => Hospital, (hospital) => hospital.user)
  hospital!: Hospital[];

  @Column({ nullable: true })
  role!: string;
  
}

