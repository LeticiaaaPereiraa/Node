
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgendamentoModule } from './agendamento/agendamento.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(), 
    AgendamentoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
