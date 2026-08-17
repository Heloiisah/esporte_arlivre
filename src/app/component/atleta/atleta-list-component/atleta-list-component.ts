import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AtletaService } from '../../../services/atleta-service';
import { Pessoa } from '../../../models/Pessoa';

@Component({
  selector: 'app-atleta-list-component',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './atleta-list-component.html',
  styleUrl: './atleta-list-component.css'
})
export class AtletaListComponent implements OnInit {
  atletas: Pessoa[] = [];

  constructor(private atletaService: AtletaService) {}

  ngOnInit(): void {
    this.carregarAtletas();
  }

  carregarAtletas(): void {
    this.atletaService.listarAtletas().subscribe({
      next: (dados) => {
        this.atletas = dados;
      },
      error: (erro) => {
        console.error('Erro ao carregar atletas', erro);
      }
    });
  }
}
