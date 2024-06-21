import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Agendamento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nomeCompleto: string;

  @Column()
  email: string;

  @Column()
  telefone: string;

  @Column('date')
  dataConsulta: string;
}
