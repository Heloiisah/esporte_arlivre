import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AtletaService } from '../../services/atleta-service';

@Component({
  selector: 'app-corridas-disponiveis',
  standalone: true,
  imports: [],
  templateUrl: './corridas-disponiveis.component.html',
  styleUrl: './corridas-disponiveis.component.css'
})
export class CorridasDisponiveisComponent {

  corridas: any[] = [];

  constructor(
    private atletaService: AtletaService,
    private router: Router
  ) {
    this.listarCorridas();
  }

  listarCorridas(): void {
    this.corridas = this.atletaService.listarCorridas();
  }

  inscrever(corrida: any): void {

    this.router.navigate(
      ['/inscricao'],
      {
        state: {
          corrida: corrida
        }
      }
    );

  }

}