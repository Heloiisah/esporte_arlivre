import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EsporteService } from '../../services/esporte.service';

@Component({
  selector: 'app-corrida',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './corrida.component.html',
  styleUrl: './corrida.component.css'
})
export class CorridaComponent {

  corrida: any = {
    id: 0,
    descricao: '',
    data: '',
    distancias: []
  };

  mensagem: string = '';

  constructor(private esporteService: EsporteService) {
  }

  selecionarDistancia(distancia: string) {

    if (this.corrida.distancias.includes(distancia)) {

      this.corrida.distancias = this.corrida.distancias.filter(
        (item: string) => item != distancia
      );

    } else {

      this.corrida.distancias.push(distancia);

    }

  }

  cadastrar() {

    if (
      this.corrida.descricao == '' ||
      this.corrida.data == '' ||
      this.corrida.distancias.length == 0
    ) {

      alert('Preencha todos os campos!');
      return;

    }

    this.esporteService.cadastrarCorrida(this.corrida);

    this.mensagem = 'Corrida cadastrada com sucesso!';

    this.corrida = {
      id: 0,
      descricao: '',
      data: '',
      distancias: []
    };

  }

}