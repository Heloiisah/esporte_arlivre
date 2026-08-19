import { Injectable } from '@angular/core';
import { Atleta } from '../models/Atleta';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AtletaService {

  constructor(private http: HttpClient) { }


  // ==========================================
  // LISTAR TODOS OS ATLETAS
  // ==========================================

  listarAtletas(): Observable<Atleta[]> {

    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta`;

    return this.http.get<Atleta[]>(urlApi);
  }


  // ==========================================
  // LISTAR UM ATLETA
  // ==========================================

  listarAtleta(id: number): Observable<Atleta> {

    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/${id}`;

    return this.http.get<Atleta>(urlApi);
  }


  // ==========================================
  // SALVAR ATLETA
  // ==========================================

  salvarAtleta(atleta: Atleta): Observable<Atleta> {

    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta`;

    return this.http.post<Atleta>(urlApi, atleta);
  }


  // ==========================================
  // ALTERAR ATLETA
  // ==========================================

  alterarAtleta(atleta: Atleta): Observable<Atleta> {

    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/${atleta.id}`;

    return this.http.put<Atleta>(urlApi, atleta);
  }


  // ==========================================
  // EXCLUIR ATLETA
  // ==========================================

  excluirAtleta(id: number): Observable<Atleta> {

    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/${id}`;

    return this.http.delete<Atleta>(urlApi);
  }
}