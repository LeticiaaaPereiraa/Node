import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { AgendamentoService } from './agendamento.service';
import { Agendamento } from './agendamento.entity';

@Controller('agendamentos')
export class AgendamentoController {
  constructor(private readonly agendamentoService: AgendamentoService) {}

  @Get()
  findAll(): Promise<Agendamento[]> {
    return this.agendamentoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Agendamento> {
    return this.agendamentoService.findOne(+id);
  }

  @Post()
  create(@Body() agendamento: Agendamento): Promise<Agendamento> {
    return this.agendamentoService.create(agendamento);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() agendamento: Agendamento): Promise<void> {
    return this.agendamentoService.update(+id, agendamento);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.agendamentoService.remove(+id);
  }
}
