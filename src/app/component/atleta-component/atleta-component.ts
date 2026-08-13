import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EsporteService } from '../../services/esporte.service';

@Component({
  selector: 'app-atleta-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './atleta-component.html',
  styleUrl: './atleta-component.css',
})
export class AtletaComponent {

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

  constructor(private esporteService: EsporteService) {

  }

  cadastrarAtleta() {

    if (
      this.atleta.nome == '' ||
      this.atleta.cpf == '' ||
      this.atleta.sexo == '' ||
      this.atleta.cep == ''
    ) {
      alert('Preencha os campos obrigatórios!');
      return;
    }

    this.esporteService.cadastrarAtleta(this.atleta);

    alert('Atleta cadastrado com sucesso!');

    this.limpar();

  }

  limpar() {

    this.atleta = {
      nome: '',
      cpf: '',
      sexo: '',
      cep: '',
      rua: '',
      bairro: '',
      cidade: '',
      uf: ''
    };

  }

  formatarCPF() {

    let cpf = this.atleta.cpf.replace(/\D/g, '');

    cpf = cpf.substring(0, 11);

    if (cpf.length > 9) {
      cpf = cpf.replace(
        /(\d{3})(\d{3})(\d{3})(\d{2})/,
        '$1.$2.$3-$4'
      );
    } else if (cpf.length > 6) {
      cpf = cpf.replace(
        /(\d{3})(\d{3})(\d{1,3})/,
        '$1.$2.$3'
      );
    } else if (cpf.length > 3) {
      cpf = cpf.replace(
        /(\d{3})(\d{1,3})/,
        '$1.$2'
      );
    }

    this.atleta.cpf = cpf;
  }

  formatarCEP() {

    let cep = this.atleta.cep.replace(/\D/g, '');

    cep = cep.substring(0, 8);

    if (cep.length > 5) {
      cep = cep.replace(
        /(\d{5})(\d{3})/,
        '$1-$2'
      );
    }

    this.atleta.cep = cep;
  }

}