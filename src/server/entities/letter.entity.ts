import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  OneToMany,
  UpdateDateColumn
} from 'typeorm'
import { Receiver } from './receiver.entity'

@Entity()
export class Letter extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number

  @Column('text')
  public content

  @Column('datetime', {
    nullable: true
  })
  public sendTime

  @Column('boolean')
  public isPublic: boolean

  @OneToOne(type => Receiver)
  @JoinColumn()
  public receiver: Receiver
}
