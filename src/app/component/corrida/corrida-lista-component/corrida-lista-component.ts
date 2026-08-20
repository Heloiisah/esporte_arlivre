import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

import { CorridaService } from '../../../service/corrida/corrida-service';
import { Corrida } from '../../../models/Corrida';

@Component({
  selector: 'app-corrida-lista-component',
  standalone: true,
  imports: [],
  templateUrl: './corrida-lista-component.html',
  styleUrl: './corrida-lista-component.css',
})
export class CorridaListaComponent {

  listaCorridas = signal<Corrida[]>([]);

  constructor(
    private corridaService: CorridaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.listar();
  }

  // LISTAR CORRIDAS
  listar() {

    this.corridaService.listarCorridas()
      .subscribe({

        next: (dadosCorrida) => {

          this.listaCorridas.set(
            [...dadosCorrida]
          );

        },

        error: (msgErro) => {

          console.log(
            'Erro ao listar corridas:',
            msgErro
          );

        }

      });

  }

  // EDITAR CORRIDA
  editar(id: number) {

    console.log(
      'Editando corrida ID:',
      id
    );

    this.router.navigate(
      ['/cadastrocorrida', id]
    );

  }

  // EXCLUIR CORRIDA
  excluir(objCorrida: Corrida) {

    if (
      confirm(
        `Deseja excluir a corrida ${objCorrida.descricao_corrida}?`
      )
    ) {

      this.corridaService
        .excluirCorrida(objCorrida.id)
        .subscribe({

          next: (respostaAPI) => {

            console.log(
              'Corrida excluída com sucesso:',
              respostaAPI
            );

            this.listar();

          },

          error: (msgErro) => {

            console.log(
              'Erro ao excluir corrida:',
              msgErro
            );

          }

        });

    }

  }

}
