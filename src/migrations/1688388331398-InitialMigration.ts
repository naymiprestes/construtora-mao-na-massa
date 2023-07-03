import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1688388331398 implements MigrationInterface {
    name = 'InitialMigration1688388331398'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "house_data" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "buildingArea" integer NOT NULL, "numberRooms" integer NOT NULL, "numberBathrooms" integer NOT NULL, "amountFloors" integer NOT NULL, CONSTRAINT "PK_23728c8bfc59acbf465040d4e16" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "materials" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying(500) NOT NULL, "unitMeasurement" character varying(10) NOT NULL, "value" integer NOT NULL, CONSTRAINT "PK_2fd1a93ecb222a28bef28663fa0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "list_materials_materials" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "materialsQuantity" integer NOT NULL, "materialsId" uuid, "listMaterialsId" uuid, CONSTRAINT "PK_57004a6f09c10313a9d3e4f00c6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "list_materials" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "subtotal" integer NOT NULL DEFAULT '0', "quantity" integer NOT NULL DEFAULT '0', CONSTRAINT "PK_d5d4036d58a43c76644dc892256" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "project" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying(300) NOT NULL, "engineerId" uuid, "houseDataId" uuid, "listMaterialsId" uuid, CONSTRAINT "REL_672f4e1a3509eb451aefbc6662" UNIQUE ("houseDataId"), CONSTRAINT "REL_741f96eff00d34d4384066c0c3" UNIQUE ("listMaterialsId"), CONSTRAINT "PK_4d68b1358bb5b766d3e78f32f57" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "engineer" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(127) NOT NULL, "CPF" character varying(15) NOT NULL, "CREA" character varying(25) NOT NULL, "cellphone" character varying(20) NOT NULL, "email" character varying(60) NOT NULL, CONSTRAINT "PK_304a175a2a86af10ad774a64349" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "list_materials_materials" ADD CONSTRAINT "FK_e26469812e96e26016ca67a4ff9" FOREIGN KEY ("materialsId") REFERENCES "materials"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "list_materials_materials" ADD CONSTRAINT "FK_988aee9431be4f03bfbbc278858" FOREIGN KEY ("listMaterialsId") REFERENCES "list_materials"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "project" ADD CONSTRAINT "FK_cd131fb036099ed30767ff9bf30" FOREIGN KEY ("engineerId") REFERENCES "engineer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "project" ADD CONSTRAINT "FK_672f4e1a3509eb451aefbc66624" FOREIGN KEY ("houseDataId") REFERENCES "house_data"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "project" ADD CONSTRAINT "FK_741f96eff00d34d4384066c0c36" FOREIGN KEY ("listMaterialsId") REFERENCES "list_materials"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project" DROP CONSTRAINT "FK_741f96eff00d34d4384066c0c36"`);
        await queryRunner.query(`ALTER TABLE "project" DROP CONSTRAINT "FK_672f4e1a3509eb451aefbc66624"`);
        await queryRunner.query(`ALTER TABLE "project" DROP CONSTRAINT "FK_cd131fb036099ed30767ff9bf30"`);
        await queryRunner.query(`ALTER TABLE "list_materials_materials" DROP CONSTRAINT "FK_988aee9431be4f03bfbbc278858"`);
        await queryRunner.query(`ALTER TABLE "list_materials_materials" DROP CONSTRAINT "FK_e26469812e96e26016ca67a4ff9"`);
        await queryRunner.query(`DROP TABLE "engineer"`);
        await queryRunner.query(`DROP TABLE "project"`);
        await queryRunner.query(`DROP TABLE "list_materials"`);
        await queryRunner.query(`DROP TABLE "list_materials_materials"`);
        await queryRunner.query(`DROP TABLE "materials"`);
        await queryRunner.query(`DROP TABLE "house_data"`);
    }

}
