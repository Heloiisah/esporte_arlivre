import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EsporteService {

  atletas: any[] = [];

  corridas: any[] = [
    {
      id: 1,
      descricao: 'Circuito das Estações - Etapa Verão',
      data: '15/11/2026',
      distancias: ['5km', '10km']
    },
    {
      id: 2,
      descricao: 'Desafio das Montanhas',
      data: '05/12/2026',
      distancias: ['5km', '10km', '25km']
    }
  ];

  inscricoes: any[] = [];

  atleta: any = {
    nome: '',
    cpf: '',
    sexo: '',
    cep: '',
    rua: '',
    bairro: '',
    cidade: '',
    uf: ''
  };

  corrida: any = {
    id: 0,
    descricao: '',
    data: '',
    distancias: []
  };

  cadastrarAtleta(atleta: any) {
    this.atletas.push(atleta);
  }

  cadastrarCorrida(corrida: any) {
    corrida.id = this.corridas.length + 1;
    this.corridas.push(corrida);
  }

  cadastrarInscricao(inscricao: any) {
    this.inscricoes.push(inscricao);
  }

  listarAtletas() {
    return this.atletas;
  }

  listarCorridas() {
    return this.corridas;
  }

  listarInscricoes() {
    return this.inscricoes;
  }

}