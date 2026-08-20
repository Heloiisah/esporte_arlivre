import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Corrida } from '../../models/Corrida';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CorridaService {

  constructor(private http: HttpClient) { }

  // SALVAR CORRIDA
  salvarCorrida(corrida: Corrida) {

    const urlApi =
      'https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida';

    this.http.post<Corrida>(urlApi, corrida)
      .subscribe({
        next: (respostaAPI) => {
          console.log('Corrida salva com sucesso:', respostaAPI);
        },

        error: (msgErro) => {
          console.log('Erro ao salvar corrida:', msgErro);
        }
      });
  }

  // LISTAR TODAS AS CORRIDAS
  listarCorridas(): Observable<Corrida[]> {

    const urlApi =
      'https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida';

    return this.http.get<Corrida[]>(urlApi);
  }

  // LISTAR UMA CORRIDA
  listarCorrida(idCorrida: number): Observable<Corrida> {

    const urlApi =
      `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/${idCorrida}`;

    return this.http.get<Corrida>(urlApi);
  }

  // EXCLUIR CORRIDA
  excluirCorrida(idCorrida: number): Observable<Corrida> {

    const urlApi =
      `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/${idCorrida}`;

    return this.http.delete<Corrida>(urlApi);
  }

  // ALTERAR CORRIDA
  alterarCorrida(corrida: Corrida) {

    const urlApi =
      `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/${corrida.id}`;

    this.http.put<Corrida>(urlApi, corrida)
      .subscribe({
        next: (respostaAPI) => {
          console.log('Corrida alterada com sucesso:', respostaAPI);
        },

        error: (msgErro) => {
          console.log('Erro ao alterar corrida:', msgErro);
        }
      });
  }

}
