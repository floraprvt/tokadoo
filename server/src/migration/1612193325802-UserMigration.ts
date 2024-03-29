import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1612193325802 implements MigrationInterface {
    name = 'UserMigration1612193325802'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `email` `email` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD UNIQUE INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`)");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP INDEX `IDX_e12875dfb3b1d92d7d7c5377e2`");
        await queryRunner.query("ALTER TABLE `user` CHANGE `email` `email` varchar(255) NOT NULL");
    }

}
