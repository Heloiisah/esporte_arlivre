import { Component, ChangeDetectorRef, signal, ChangeDetectionStrategy } from '@angular/core';
import { Atleta } from '../../../models/Atleta';
import { AtletaService } from '../../../service/atleta-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atleta-list-component',
  imports: [],
  templateUrl: './atleta-list-component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './atleta-list-component.css'
})
export class AtletaListComponent {

  listaAtletas = signal<Atleta[]>([]);

  constructor(
    private listaService: AtletaService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {

    this.listar();

  }

  listar() {

    this.listaService.listarAtletas()
      .subscribe({

        next: (dadosAtletas) => {

          // MOSTRA NO CONSOLE OS DADOS QUE VIERAM DA API
          console.log('DADOS QUE VIERAM DA API:', dadosAtletas);

          this.listaAtletas.set(
            [...dadosAtletas].sort(
              (a, b) => a.nome.localeCompare(b.nome)
            )
          );

          this.cdr.detectChanges();

        },

        error: (msgErro) => {

          console.log(
            'Erro ao listar Atletas ',
            msgErro
          );

        }

      });

  }

  calcularIMC(
    peso: number | undefined,
    altura: number | undefined
  ): string {

    if (
      !peso ||
      !altura ||
      peso <= 0 ||
      altura <= 0
    ) {
      return '-';
    }

    let alturaReal = altura;
    if (alturaReal > 3) {
      alturaReal = alturaReal / 100;
    }

    const imc = peso / (alturaReal * alturaReal);

    return imc.toFixed(2);

  }

  verificarSobrepeso(
    peso: number | undefined,
    altura: number | undefined
  ): string {

    if (
      !peso ||
      !altura ||
      peso <= 0 ||
      altura <= 0
    ) {
      return '-';
    }

    let alturaReal = altura;
    if (alturaReal > 3) {
      alturaReal = alturaReal / 100;
    }

    const imc = peso / (alturaReal * alturaReal);

    if (imc >= 25) {
      return 'Sim';
    }

    return 'Não';

  }

  calcIdade(data_nascimento: string) {

    return this.listaService.calcularIdade(
      data_nascimento
    );

  }

  excluir(id: number) {

    if (confirm('Deseja Excluir o Atleta?')) {

      this.listaService.excluirAtleta(id)
        .subscribe({

          next: (resposta) => {

            console.log(
              'Excluído com Sucesso!!! ',
              resposta
            );

            this.listar();

          },

          error: (msgErro) => {

            console.log(
              'Erro ao excluir Atleta ',
              msgErro
            );

          }

        });

    }

  }

  carregaDadosAtletaForm(atleta: Atleta) {

    this.router.navigate([
      '/cadastroAtleta',
      atleta.id
    ]);

  }

}