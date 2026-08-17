import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { AtletaService } from '../../../services/atleta-service';
import { Pessoa } from '../../../models/Pessoa';

interface Estado {
  sigla: string;
  nome: string;
}

interface Municipio {
  id: number;
  nome: string;
}

@Component({
  selector: 'app-atleta-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './atleta-component.html',
  styleUrl: './atleta-component.css',
})
export class AtletaComponent implements OnInit {

  idEdicao = 0;

  nome = '';
  cpf = '';
  sexo = '';
  cep = '';
  ruaLogradouro = '';
  bairro = '';
  cidade = '';
  uf = '';

  mensagemSucesso = '';
  mensagemErro = '';

  estados: Estado[] = [
    { sigla: 'AC', nome: 'Acre' },
    { sigla: 'AL', nome: 'Alagoas' },
    { sigla: 'AP', nome: 'Amapá' },
    { sigla: 'AM', nome: 'Amazonas' },
    { sigla: 'BA', nome: 'Bahia' },
    { sigla: 'CE', nome: 'Ceará' },
    { sigla: 'DF', nome: 'Distrito Federal' },
    { sigla: 'ES', nome: 'Espírito Santo' },
    { sigla: 'GO', nome: 'Goiás' },
    { sigla: 'MA', nome: 'Maranhão' },
    { sigla: 'MT', nome: 'Mato Grosso' },
    { sigla: 'MS', nome: 'Mato Grosso do Sul' },
    { sigla: 'MG', nome: 'Minas Gerais' },
    { sigla: 'PA', nome: 'Pará' },
    { sigla: 'PB', nome: 'Paraíba' },
    { sigla: 'PR', nome: 'Paraná' },
    { sigla: 'PE', nome: 'Pernambuco' },
    { sigla: 'PI', nome: 'Piauí' },
    { sigla: 'RJ', nome: 'Rio de Janeiro' },
    { sigla: 'RN', nome: 'Rio Grande do Norte' },
    { sigla: 'RS', nome: 'Rio Grande do Sul' },
    { sigla: 'RO', nome: 'Rondônia' },
    { sigla: 'RR', nome: 'Roraima' },
    { sigla: 'SC', nome: 'Santa Catarina' },
    { sigla: 'SP', nome: 'São Paulo' },
    { sigla: 'SE', nome: 'Sergipe' },
    { sigla: 'TO', nome: 'Tocantins' }
  ];

  municipios: Municipio[] = [];

  constructor(
    private atletaService: AtletaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.idEdicao = Number(id);
      this.carregarAtletaEdicao(this.idEdicao);
    }
  }

  carregarAtletaEdicao(id: number): void {
    this.atletaService.listarAtleta(id).subscribe({
      next: (atleta) => {
        this.nome = atleta.nome;
        this.cpf = atleta.cpf;
        this.sexo = atleta.sexo;
        this.cep = atleta.cep;
        this.ruaLogradouro = atleta.ruaLogradoro;
        this.bairro = atleta.bairro;
        this.cidade = atleta.cidade;
        this.uf = atleta.uf;
        
        if (this.uf) {
          this.carregarMunicipios();
        }
      },
      error: (erro) => {
        console.error('Erro ao buscar atleta para edição', erro);
        this.mensagemErro = 'Não foi possível carregar os dados do atleta.';
      }
    });
  }

  mascararCPF(): void {
    let valor = this.cpf.replace(/\D/g, '');

    if (valor.length > 11) {
      valor = valor.substring(0, 11);
    }

    if (valor.length > 9) {
      valor = valor.replace(
        /(\d{3})(\d{3})(\d{3})(\d{1,2})/,
        '$1.$2.$3-$4'
      );
    } else if (valor.length > 6) {
      valor = valor.replace(
        /(\d{3})(\d{3})(\d{1,3})/,
        '$1.$2.$3'
      );
    } else if (valor.length > 3) {
      valor = valor.replace(
        /(\d{3})(\d{1,3})/,
        '$1.$2'
      );
    }

    this.cpf = valor;
  }

  mascararCEP(): void {
    let valor = this.cep.replace(/\D/g, '');

    if (valor.length > 8) {
      valor = valor.substring(0, 8);
    }

    if (valor.length > 5) {
      valor = valor.replace(
        /(\d{5})(\d{1,3})/,
        '$1-$2'
      );
    }

    this.cep = valor;
  }

  carregarMunicipios(): void {
    this.cidade = '';
    this.municipios = [];

    if (!this.uf) {
      return;
    }

    fetch(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${this.uf}/municipios`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao carregar municípios.');
        }

        return response.json();
      })
      .then(dados => {
        this.municipios = dados;
      })
      .catch(erro => {
        console.error('Erro ao carregar municípios:', erro);

        this.mensagemErro =
          'Não foi possível carregar os municípios.';
      });
  }

  exibeDados(): void {
    console.log(
      this.nome,
      this.cpf,
      this.sexo,
      this.cep,
      this.ruaLogradouro,
      this.bairro,
      this.cidade,
      this.uf
    );
  }

  salvarAtleta(formulario: NgForm): void {

    this.mensagemSucesso = '';
    this.mensagemErro = '';

    if (formulario.invalid) {

      this.mensagemErro =
        'Por favor, preencha todos os campos obrigatórios.';

      formulario.control.markAllAsTouched();

      return;
    }

    if (this.cpf.length !== 14) {

      this.mensagemErro =
        'Digite um CPF completo.';

      return;
    }

    if (this.cep.length !== 9) {

      this.mensagemErro =
        'Digite um CEP completo.';

      return;
    }

    const pessoaAtleta = new Pessoa();

    pessoaAtleta.nome = this.nome;
    pessoaAtleta.cpf = this.cpf;
    pessoaAtleta.sexo = this.sexo;
    pessoaAtleta.cep = this.cep;
    pessoaAtleta.ruaLogradoro = this.ruaLogradouro;
    pessoaAtleta.bairro = this.bairro;
    pessoaAtleta.cidade = this.cidade;
    if (this.idEdicao > 0) {
      pessoaAtleta.id = this.idEdicao;
      this.atletaService.alterarAtleta(pessoaAtleta).subscribe({
        next: () => {
          this.mensagemSucesso = 'Atleta atualizado com sucesso!';
          formulario.resetForm();
          this.limparAtributos();
          this.idEdicao = 0;
        },
        error: () => {
          this.mensagemErro = 'Erro ao atualizar atleta.';
        }
      });
    } else {
      this.atletaService.salvarAtleta(pessoaAtleta).subscribe({
        next: () => {
          this.mensagemSucesso = 'Atleta cadastrado com sucesso!';
          formulario.resetForm();
          this.limparAtributos();
        },
        error: () => {
          this.mensagemErro = 'Erro ao cadastrar atleta.';
        }
      });
    }

    console.log('Operação de salvamento solicitada.');
  }

  limparAtributos(): void {

    this.nome = '';
    this.cpf = '';
    this.sexo = '';
    this.cep = '';
    this.ruaLogradouro = '';
    this.bairro = '';
    this.cidade = '';
    this.uf = '';

    this.municipios = [];

    this.mensagemSucesso = '';
    this.mensagemErro = '';
  }
}
