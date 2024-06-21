import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Agendamento } from './agendamento.entity';

@Injectable()
export class AgendamentoService {
  constructor(
    @InjectRepository(Agendamento)
    private agendamentoRepository: Repository<Agendamento>,
  ) {}

  findAll(): Promise<Agendamento[]> {
    return this.agendamentoRepository.find();
  }

  findOne(id: number): Promise<Agendamento> {
    return this.agendamentoRepository.findOneBy({ id });
  }

  create(agendamento: Agendamento): Promise<Agendamento> {
    return this.agendamentoRepository.save(agendamento);
  }

  async update(id: number, agendamento: Agendamento): Promise<void> {
    await this.agendamentoRepository.update(id, agendamento);
  }

  async remove(id: number): Promise<void> {
    await this.agendamentoRepository.delete(id);
  }
}
