import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateEngineers1687747121508 implements MigrationInterface {
    name = 'CreateEngineers1687747121508'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "materials" DROP COLUMN "unitMeasurement"`);
        await queryRunner.query(`ALTER TABLE "materials" ADD "unitMeasurement" character varying(10) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "materials" DROP COLUMN "unitMeasurement"`);
        await queryRunner.query(`ALTER TABLE "materials" ADD "unitMeasurement" integer NOT NULL`);
    }

}
