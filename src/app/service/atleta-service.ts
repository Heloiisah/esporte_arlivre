import { Injectable } from '@angular/core';
import { Atleta } from '../models/Atleta';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AtletaService {

  constructor(private http: HttpClient) { }

  listarAtletas(): Observable<Atleta[]> {
    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta`;

    return this.http.get<Atleta[]>(urlApi);
  }

  listarAtleta(id: number): Observable<Atleta> {
    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/${id}`;

    return this.http.get<Atleta>(urlApi);
  }

  salvarAtleta(atleta: Atleta): Observable<Atleta> {
    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta`;

    return this.http.post<Atleta>(urlApi, atleta);
  }

  excluirAtleta(id: number): Observable<Atleta> {
    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/${id}`;

    return this.http.delete<Atleta>(urlApi);
  }
}
