import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AtletaService } from '../../../service/atleta-service';
import { Atleta } from '../../../models/Atleta';

@Component({
  selector: 'app-atleta-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './atleta-component.html',
  styleUrl: './atleta-component.css',
})
export class AtletaComponent {
  // DECLARANDO ATRIBUTOS
  nome = '';
  cpf = 0;
  sexo = '';
  cep = 0;
  ruaLogradouro = '';
  bairro = '';
  cidade = '';
  uf = '';

  // DECLARAÇÃO DO CONSTRUTOR
  constructor(private atletaService: AtletaService) { }

  // DECLARAÇÃO DE FUNÇÕES
  exibirDados() {
    console.log(this.nome, this.cpf, this.sexo, this.cep, this.ruaLogradouro, this.bairro, this.cidade, this.uf);
    this.limparDados();
  }

  limparDados() {
    this.nome = '';
    this.cpf = 0;
    this.sexo = '';
    this.cep = 0;
    this.ruaLogradouro = '';
    this.bairro = '';
    this.cidade = '';
    this.uf = '';
  }

 enviarDadosAtleta() {
    const atleta = new Atleta();
    atleta.nome = this.nome;
    atleta.cpf = this.cpf;
    atleta.sexo = this.sexo;
    atleta.cep = this.cep;
    atleta.ruaLogradouro = this.ruaLogradouro;
    atleta.bairro = this.bairro;
    atleta.cidade = this.cidade;
    atleta.uf = this.uf;
    
    this.atletaService.salvarAtleta(atleta)
      .subscribe({
        next: (resposta) => {
          console.log('Atleta cadastrado com sucesso:', resposta);
        },
        error: (msgErro) => {
          console.error('Erro ao cadastrar atleta:', msgErro);
        }
      });
    
    this.limparDados();
    this.atletaService.listarAtletas();
  }
}
