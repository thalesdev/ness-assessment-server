import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreatePlayers1626093659557 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "players",
      columns: [
        {
          name: 'id',
          type: 'varchar',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()',
        },
        {
          name: 'name',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'positionId',
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
    }))
    await queryRunner.createForeignKey(
      'players',
      new TableForeignKey({
        name: 'fk_players_positions',
        columnNames: ['positionId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'positions',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('players', 'fk_players_positions');
    await queryRunner.dropTable('players')
  }

}
