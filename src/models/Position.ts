import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Player } from "./Player";

export enum PositionSectionType {
  goalkeeper,
  middle,
  defense,
  attack,
}


@Entity('positions')
export class Position {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  abbr: string;

  @Column({ enum: PositionSectionType })
  section: PositionSectionType;

  @Column({ nullable: true })
  description: string;

  @OneToMany(() => Player, player => player.position)
  players: Player[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
