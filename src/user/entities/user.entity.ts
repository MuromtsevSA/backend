import { Field, ID, ObjectType } from '@nestjs/graphql';
import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, Entity } from 'typeorm'

@ObjectType()
@Entity("users")
export class UserEntity {

  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @CreateDateColumn()
  createdAt: Date

  @Field()
  @UpdateDateColumn()
  updatedAt: Date

  @Field({ nullable: true })
  @Column({ nullable: true })
  name: string

  @Field()
  @Column()
  email: string

}