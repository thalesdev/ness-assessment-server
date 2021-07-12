import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { Player } from "./Player";
import { Team } from "./Team";

@Entity('players_teams')
export class PlayerTeam {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  salary: number;

  @Column({ name: "start_at", default: new Date() })
  startAt: Date;

  @Column({ name: "end_at" })
  endAt: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => Player, player => player.contracts)
  player: Player;

  @ManyToOne(() => Team, team => team.players)
  team: Team;

}
