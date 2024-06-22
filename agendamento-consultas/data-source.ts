import { DataSource } from 'typeorm';
import { Agendamento } from './src/agendamento/agendamento.entity';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'banco_hackathon',
    entities: [Agendamento],
    synchronize: false,
    migrations: ['src/migrations/*.ts'],
});

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err);
    });
