import { Component, signal } from '@angular/core';
import { Atleta } from '../../../models/Atleta';
import { AtletaService } from '../../../service/atleta-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atleta-list-component',
  standalone: true,
  imports: [],
  templateUrl: './atleta-list-component.html',
  styleUrl: './atleta-list-component.css',
})
export class AtletaListComponent {

  // Lista de atletas
  listaAtletas = signal<Atleta[]>([]);

  constructor(
    private listaService: AtletaService,
    private router: Router
  ) {}

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.listaService.listarAtletas()
      .subscribe({
        next: (dadosAtletas) => {

          this.listaAtletas.set(
            [...dadosAtletas].sort((a, b) =>
              a.nome.localeCompare(b.nome)
            )
          );

          console.table(this.listaAtletas());
        },

        error: (msgErro) => {
          console.log('Erro ao listar Atletas ', msgErro);
        }
      });
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
