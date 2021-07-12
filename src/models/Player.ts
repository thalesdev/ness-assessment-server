import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from "typeorm";
import { Position } from './Position'
import { PlayerTeam } from "./PlayerTeam";


@Entity('players')
export class Player {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;


  @ManyToOne(() => Position, pos => pos.players)
  position: Position;

  @OneToMany(() => PlayerTeam, playerTeam => playerTeam.player)
  contracts: PlayerTeam[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;


}
