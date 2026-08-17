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

    salvarAtleta(atleta: Atleta): Observable<Atleta> {
        const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta`;
        return this.http.post<Atleta>(urlApi, atleta);
    }

    /*
    //DECLARANDO ARRAY atletas
    private atletas: Atleta[] = []

    //DECLARAÇÃO DAS FUNÇÕES DE MANIPULAÇÃO DO ARRAY
    //ADICIONANDO ELEMENTO
    adicionarAtleta(atleta: Atleta){
        //ARRRRRMMMMMENNGUE PARA GERAR ID
        atleta.id = this.atletas.length + 1
        this.atletas.push(atleta)
    }

    //LISTAR ELEMENTOS
    listarAtletasArray(){
        console.table(this.atletas)
        return this.atletas
    }

    //REMOVER ELEMENTO
    removerElemento(idAtleta: number){
        this.atletas = this.atletas.filter(elem=>elem.id !== idAtleta)
    }

    //REMOVER ELEMENTO2
    removerElemento2(atleta: Atleta){
        let posArray = this.atletas.findIndex(elem=>elem.id !== atleta.id)
        this.atletas.splice(1,posArray)
    }

    //ALTERANDO ELEMENTO DO ARRAY
    alterarElemento(atleta: Atleta){
        let posArray = this.atletas.findIndex(elem=>elem.id !== atleta.id)
        this.atletas[posArray] = atleta
    }*/
}
