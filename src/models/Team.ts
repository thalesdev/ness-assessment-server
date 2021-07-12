import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { PlayerTeam } from "./PlayerTeam";

@Entity('teams')
export class Team {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  abbr: string;

  @Column({ nullable: true })
  description: string;

  @OneToMany(() => PlayerTeam, playerTeam => playerTeam.team)
  players: PlayerTeam[];


  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ name: "foundation_at", nullable: true })
  foundationAt: Date;

}
