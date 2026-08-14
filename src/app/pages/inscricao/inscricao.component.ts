import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AtletaService } from '../../services/atleta-service';

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


  inscricao = {

    atleta: '',

    corrida: '',

    distancia: '',

    tamanhoKit: '',

    categoria: '',

    valor: 80,

    regulamento: false,

    declaracaoSaude: false

  };


  mensagem = '';

  mensagemErro = '';


  constructor(
    private atletaService: AtletaService
  ) {

    this.atletas =
      this.atletaService.listar();

    this.corridas =
      this.atletaService.listarCorridas();

  }


  // =========================================
  // FINALIZAR INSCRIÇÃO
  // =========================================

  inscrever(
    formulario: NgForm
  ): void {

    this.mensagem = '';

    this.mensagemErro = '';


    // Verifica os campos obrigatórios

    if (formulario.invalid) {

      this.mensagemErro =
        'Preencha todos os campos obrigatórios.';

      formulario.control.markAllAsTouched();

      return;

    }


    // Verifica o regulamento

    if (!this.inscricao.regulamento) {

      this.mensagemErro =
        'Leia e aceite os termos do regulamento da prova.';

      return;

    }


    // Verifica a declaração de saúde

    if (!this.inscricao.declaracaoSaude) {

      this.mensagemErro =
        'Aceite a declaração de saúde.';

      return;

    }


    // Mostra a inscrição no console

    console.log(
      'Inscrição realizada:',
      this.inscricao
    );


    // Mensagem de sucesso

    this.mensagem =
      'Inscrição realizada com sucesso!';


    // Limpa o formulário

    formulario.resetForm();


    this.inscricao = {

      atleta: '',

      corrida: '',

      distancia: '',

      tamanhoKit: '',

      categoria: '',

      valor: 80,

      regulamento: false,

      declaracaoSaude: false

    };

  }


  // =========================================
  // LIMPAR
  // =========================================

  limpar(): void {

    this.inscricao = {

      atleta: '',

      corrida: '',

      distancia: '',

      tamanhoKit: '',

      categoria: '',

      valor: 80,

      regulamento: false,

      declaracaoSaude: false

    };


    this.mensagem = '';

    this.mensagemErro = '';

  }

}