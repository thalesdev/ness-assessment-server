import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTeams1626088440286 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // adiciona o uuid de extensão.
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

    await queryRunner.createTable(
      new Table({
        name: 'teams',
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
            name: 'abbr',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'foundation_at',
            type: 'date',
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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('teams')
  }
}
