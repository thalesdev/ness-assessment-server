import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreatePlayerTeams1626095832761 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'players_teams',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'salary',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'start_at',
            type: 'date',
            isNullable: false,
            default: "now()"
          },

          {
            name: 'end_at',
            type: 'date',
            isNullable: false,
          },
          {
            name: 'playerId',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'teamId',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            isNullable: false,
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            isNullable: false,
          },
        ],
      }),
    );
    await queryRunner.createForeignKey(
      'players_teams',
      new TableForeignKey({
        name: 'fk_players_teams_players',
        columnNames: ['playerId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'players',
        onDelete: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'players_teams',
      new TableForeignKey({
        name: 'fk_players_teams_teams',
        columnNames: ['teamId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'teams',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.dropForeignKey(
      'players_teams',
      'fk_players_teams_teams',
    );
    await queryRunner.dropForeignKey(
      'players_teams',
      'fk_players_teams_players',
    );
    await queryRunner.dropTable('players_teams');
  }

}
