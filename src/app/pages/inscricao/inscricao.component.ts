import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EsporteService } from '../../services/esporte.service';

@Component({
  selector: 'app-inscricao',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './inscricao.component.html',
  styleUrl: './inscricao.component.css'
})
export class InscricaoComponent {

  atletas: any[] = [];
  corridas: any[] = [];

  inscricao: any = {
    atleta: '',
    corrida: '',
    distancia: ''
  };

  mensagem: string = '';

  constructor(private esporteService: EsporteService) {

    this.atletas = this.esporteService.listarAtletas();

    this.corridas = this.esporteService.listarCorridas();

  }

  inscrever() {

    if (
      this.inscricao.atleta == '' ||
      this.inscricao.corrida == '' ||
      this.inscricao.distancia == ''
    ) {

      alert('Preencha todos os campos!');
      return;

    }

    this.esporteService.cadastrarInscricao({
      ...this.inscricao
    });

    this.mensagem = 'Inscrição realizada com sucesso!';

    this.inscricao = {
      atleta: '',
      corrida: '',
      distancia: ''
    };

  }

}