import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAgendamentoTable1622564564560 implements MigrationInterface {
    name = 'CreateAgendamentoTable1622564564560'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE \`agendamento\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`nomeCompleto\` varchar(255) NOT NULL,
                \`email\` varchar(255) NOT NULL,
                \`telefone\` varchar(255) NOT NULL,
                \`dataConsulta\` datetime NOT NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE=InnoDB
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`agendamento\``);
    }
}
