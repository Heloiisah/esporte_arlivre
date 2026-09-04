import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Corrida } from '../../models/Corrida';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CorridaService {

  private readonly urlApi = 'http://127.0.0.1:8000/corrida/';

  constructor(private http: HttpClient) { }

  // SALVAR CORRIDA
  salvarCorrida(corrida: Corrida): Observable<Corrida> {
    const payload = this.formatarParaBackend(corrida);
    return this.http.post<Corrida>(this.urlApi, payload);
  }

  // LISTAR TODAS AS CORRIDAS
  listarCorridas(): Observable<Corrida[]> {
    return this.http.get<Corrida[]>(this.urlApi).pipe(
      map((corridas) => corridas.map((c) => this.normalizarCorrida(c)))
    );
  }

  // LISTAR UMA CORRIDA
  listarCorrida(idCorrida: number): Observable<Corrida> {
    return this.http.get<Corrida>(`${this.urlApi}${idCorrida}`).pipe(
      map((c) => this.normalizarCorrida(c))
    );
  }

  // EXCLUIR CORRIDA
  excluirCorrida(idCorrida: number): Observable<any> {
    return this.http.delete(`${this.urlApi}${idCorrida}`);
  }

  // ALTERAR CORRIDA
  alterarCorrida(corrida: Corrida): Observable<Corrida> {
    const id = corrida.id || corrida.idcorrida;
    const payload = this.formatarParaBackend(corrida);
    return this.http.put<Corrida>(`${this.urlApi}${id}`, payload);
  }

  private formatarParaBackend(corrida: Corrida) {
    return {
      descricao_corrida: corrida.descricao_corrida,
      data_corrida: corrida.data_corrida,
      distancia_5km: Boolean(corrida.distancia_5km ?? corrida.distancia5km),
      distancia_10km: Boolean(corrida.distancia_10km ?? corrida.distancia10km),
      distancia_25km: Boolean(corrida.distancia_25km ?? corrida.distancia25km),
      distancia5km: Boolean(corrida.distancia5km ?? corrida.distancia_5km),
      distancia10km: Boolean(corrida.distancia10km ?? corrida.distancia_10km),
      distancia25km: Boolean(corrida.distancia25km ?? corrida.distancia_25km),
    };
  }

  private normalizarCorrida(corrida: any): Corrida {
    return {
      id: corrida.id ?? corrida.idcorrida ?? 0,
      idcorrida: corrida.idcorrida ?? corrida.id ?? 0,
      descricao_corrida: corrida.descricao_corrida ?? '',
      data_corrida: corrida.data_corrida ?? '',
      distancia5km: Boolean(corrida.distancia5km ?? corrida.distancia_5km),
      distancia10km: Boolean(corrida.distancia10km ?? corrida.distancia_10km),
      distancia25km: Boolean(corrida.distancia25km ?? corrida.distancia_25km),
      distancia_5km: Boolean(corrida.distancia_5km ?? corrida.distancia5km),
      distancia_10km: Boolean(corrida.distancia_10km ?? corrida.distancia10km),
      distancia_25km: Boolean(corrida.distancia_25km ?? corrida.distancia25km),
    };
  }
}
