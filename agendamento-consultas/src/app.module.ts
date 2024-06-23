import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgendamentoModule } from './agendamento/agendamento.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'banco_hackathon',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AgendamentoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
