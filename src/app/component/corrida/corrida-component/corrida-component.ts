import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Corrida } from '../../../models/Corrida';
import { CorridaService } from '../../../service/corrida/corrida-service';

@Component({
  selector: 'app-corrida-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './corrida-component.html',
  styleUrl: './corrida-component.css',
})
export class CorridaComponent {

  id = 0;

  descricao_corrida = '';

  data_corrida = '';

  distancia5km = false;

  distancia10km = false;

  distancia25km = false;

  editar = false;


  constructor(
    private corridaService: CorridaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {

      this.id = Number(id);

      this.editar = true;

      this.carregarCorrida(this.id);

    }

  }


  // CARREGAR CORRIDA
  carregarCorrida(id: number) {

    this.corridaService
      .listarCorrida(id)
      .subscribe({

        next: (corrida) => {

          console.log(
            'Corrida carregada:',
            corrida
          );

          this.id =
            Number(corrida.id);

          this.descricao_corrida =
            corrida.descricao_corrida;

          this.data_corrida =
            corrida.data_corrida;

          this.distancia5km =
            corrida.distancia5km;

          this.distancia10km =
            corrida.distancia10km;

          this.distancia25km =
            corrida.distancia25km;

        },

        error: (msgErro) => {

          console.log(
            'Erro ao carregar corrida:',
            msgErro
          );

        }

      });

  }


  // SALVAR OU ALTERAR
  dadosFormulario() {

    const corrida =
      new Corrida();


    corrida.descricao_corrida =
      this.descricao_corrida;


    corrida.data_corrida =
      this.data_corrida;


    corrida.distancia5km =
      this.distancia5km;


    corrida.distancia10km =
      this.distancia10km;


    corrida.distancia25km =
      this.distancia25km;


    // ALTERAR
    if (this.editar) {

      corrida.id =
        this.id;

      this.corridaService
        .alterarCorrida(corrida);

      console.log(
        'Corrida alterada com sucesso!'
      );

    }

    // CADASTRAR
    else {

      this.corridaService
        .salvarCorrida(corrida);

      console.log(
        'Corrida cadastrada com sucesso!'
      );

    }


    this.limparAtributos();

  }


  // LIMPAR
  limparAtributos() {

    this.id = 0;

    this.descricao_corrida = '';

    this.data_corrida = '';

    this.distancia5km = false;

    this.distancia10km = false;

    this.distancia25km = false;

  }

}
