import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AtletaService } from '../../services/atleta-service';

@Component({
  selector: 'app-corrida',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './corrida.component.html',
  styleUrl: './corrida.component.css'
})
export class CorridaComponent {

  corrida = {
    id: 0,
    descricao: '',
    data: '',
    distancias: [] as string[]
  };

  mensagem = '';
  mensagemErro = '';


  constructor(
    private atletaService: AtletaService
  ) {}


  // =========================================
  // SELECIONAR DISTÂNCIA
  // =========================================

  selecionarDistancia(
    distancia: string
  ): void {

    if (this.corrida.distancias.includes(distancia)) {

      this.corrida.distancias =
        this.corrida.distancias.filter(
          item => item !== distancia
        );

    } else {

      this.corrida.distancias.push(
        distancia
      );

    }

  }


  // =========================================
  // CADASTRAR CORRIDA
  // =========================================

  cadastrar(
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


    // Verifica se uma distância foi selecionada

    if (this.corrida.distancias.length === 0) {

      this.mensagemErro =
        'Selecione uma distância para a corrida.';

      return;

    }


    // =========================================
    // CRIA UMA CÓPIA DA CORRIDA
    // =========================================

    const novaCorrida = {

      id: 0,

      descricao:
        this.corrida.descricao,

      data:
        this.corrida.data,

      distancias:
        [...this.corrida.distancias]

    };


    // =========================================
    // SALVA A CORRIDA
    // =========================================

    this.atletaService.cadastrarCorrida(
      novaCorrida
    );


    // =========================================
    // MENSAGEM
    // =========================================

    this.mensagem =
      'Corrida cadastrada com sucesso!';


    // =========================================
    // LIMPA O FORMULÁRIO
    // =========================================

    formulario.resetForm();


    this.corrida = {

      id: 0,

      descricao: '',

      data: '',

      distancias: []

    };

  }


  // =========================================
  // LIMPAR
  // =========================================

  limpar(): void {

    this.corrida = {

      id: 0,

      descricao: '',

      data: '',

      distancias: []

    };


    this.mensagem = '';

    this.mensagemErro = '';

  }

}