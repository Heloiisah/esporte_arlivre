import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { AtletaService } from '../../../service/atleta-service';
import { Atleta } from '../../../models/Atleta';

@Component({
  selector: 'app-atleta-component',
  imports: [FormsModule],
  templateUrl: './atleta-component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './atleta-component.css'
})
export class AtletaComponent {

  nome = '';
  dataNascimento = '';
  cpf = 0;
  sexo = '';
  cep = 0;
  ruaLogradouro = '';
  bairro = '';
  cidade = '';
  uf = '';

  peso = 0;
  altura = 0;

  idAtleta = 0;
  editar = false;

  constructor(
    private atletaService: AtletaService,
    private http: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {

    this.idAtleta = Number(
      this.http.snapshot.paramMap.get('id')
    );

    if (this.idAtleta > 0) {
      this.editar = true;
      this.carregaDados(this.idAtleta);
    }

  }

  limparDados() {

    this.nome = '';
    this.dataNascimento = '';
    this.cpf = 0;
    this.sexo = '';
    this.cep = 0;
    this.ruaLogradouro = '';
    this.bairro = '';
    this.cidade = '';
    this.uf = '';

    this.peso = 0;
    this.altura = 0;

  }

  carregaDados(idAtleta: number) {

    this.atletaService.listarAtleta(idAtleta)
      .subscribe({

        next: (dadosAtleta) => {

          this.nome = dadosAtleta.nome;
          this.dataNascimento = dadosAtleta.data_nascimento;
          this.cpf = dadosAtleta.cpf;
          this.sexo = dadosAtleta.sexo;
          this.cep = dadosAtleta.cep;
          this.ruaLogradouro = dadosAtleta.ruaLogradouro;
          this.bairro = dadosAtleta.bairro;
          this.cidade = dadosAtleta.cidade;
          this.uf = dadosAtleta.uf;

          this.peso = dadosAtleta.peso ?? 0;
          this.altura = dadosAtleta.altura ?? 0;

          this.cdr.detectChanges();

        },

        error: (msgErro) => {

          console.log(
            'ERRO AO LISTAR ATLETA',
            msgErro
          );

        }

      });

  }

  enviarDadosAtleta() {

    const atleta = new Atleta();

    atleta.nome = this.nome;
    atleta.data_nascimento = this.dataNascimento;
    atleta.cpf = this.cpf;
    atleta.sexo = this.sexo;
    atleta.cep = this.cep;
    atleta.ruaLogradouro = this.ruaLogradouro;
    atleta.bairro = this.bairro;
    atleta.cidade = this.cidade;
    atleta.uf = this.uf;

    atleta.peso = this.peso;
    atleta.altura = this.altura;

    if (this.editar) {

      atleta.id = this.idAtleta;

      this.atletaService.alterarAtleta(atleta)
        .subscribe({

          next: (resposta) => {
            console.log(resposta);
          },

          error: (msgErro) => {
            console.log(msgErro);
          }

        });

    } else {

      this.atletaService.salvarAtleta(atleta)
        .subscribe({

          next: (resposta) => {
            console.log(resposta);
          },

          error: (msgErro) => {
            console.log(msgErro);
          }

        });

    }

    this.limparDados();

  }

}
