import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from '../models/Pessoa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AtletaService {

  private atletas: Pessoa[] = [];

  // Lista de corridas cadastradas
  private corridas: any[] = [];

  constructor(private http: HttpClient) {}

  // =========================
  // MÉTODOS DOS ATLETAS
  // =========================

  listarAtletas(): Observable<Pessoa[]> {
    const urlApi =
      'https://a67f6d923183f5d88b41a61.mockapi.io/esportearlivre/atleta';

    return this.http.get<Pessoa[]>(urlApi);
  }

  listarAtleta(idAtleta: number): Observable<Pessoa> {
    const urlApi =
      `https://a67f6d923183f5d88b41a61.mockapi.io/esportearlivre/atleta/${idAtleta}`;

    return this.http.get<Pessoa>(urlApi);
  }

  salvarAtleta(pessoa: Pessoa): Observable<Pessoa> {
    const urlApi =
      'https://a67f6d923183f5d88b41a61.mockapi.io/esportearlivre/atleta';

    return this.http.post<Pessoa>(urlApi, pessoa);
  }

  excluirAtleta(idAtleta: number): Observable<Pessoa> {
    const urlApi =
      `https://a67f6d923183f5d88b41a61.mockapi.io/esportearlivre/atleta/${idAtleta}`;

    return this.http.delete<Pessoa>(urlApi);
  }

  alterarAtleta(pessoa: Pessoa): Observable<Pessoa> {
    const urlApi =
      `https://a67f6d923183f5d88b41a61.mockapi.io/esportearlivre/atleta/${pessoa.id}`;

    return this.http.put<Pessoa>(urlApi, pessoa);
  }

  // =========================
  // MÉTODOS ANTIGOS
  // =========================

  adicionar(pessoa: Pessoa) {
    // ARRRMENGUEEEE PARA GERAR O ID
    pessoa.id = this.atletas.length + 1;

    this.atletas.push(pessoa);
  }

  listar() {
    console.table(this.atletas);
    return this.atletas;
  }

  private localizarAtleta(idAtleta: number) {
    return this.atletas.findIndex(elem => elem.id === idAtleta);
  }

  remover(posicaoArray: number) {
    this.atletas.splice(1, posicaoArray);
  }

  remover2(pessoa: Pessoa) {
    this.atletas = this.atletas.filter(elem => elem.id !== pessoa.id);
  }

  alterar(pessoa: Pessoa) {
    let posArray = this.localizarAtleta(pessoa.id);

    if (posArray >= 0) {
      this.atletas[posArray] = pessoa;
    }
  }

  // =========================
  // CORRIDAS
  // =========================

  // CADASTRAR CORRIDA
  cadastrarCorrida(corrida: any) {
    corrida.id = this.corridas.length + 1;

    this.corridas.push(corrida);

    console.table(this.corridas);
  }

  // LISTAR CORRIDAS
  listarCorridas() {
    return this.corridas;
  }
}
