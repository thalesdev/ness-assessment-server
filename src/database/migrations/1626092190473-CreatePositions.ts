import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePositions1626092190473 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "positions",
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
          name: 'section',
          type: 'enum',
          enum: ['goalkeeper', 'middle', 'defense', 'attack'],
          isNullable: false,
        },
        {
          name: 'description',
          type: 'varchar',
          isNullable: true,
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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('positions')
  }

}
