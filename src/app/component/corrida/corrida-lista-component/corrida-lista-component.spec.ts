import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { of } from 'rxjs';

import { CorridaListaComponent } from './corrida-lista-component';
import { CorridaService } from '../../../service/corrida/corrida-service';
import { Corrida } from '../../../models/Corrida';


describe('CorridaListaComponent', () => {

  let component: CorridaListaComponent;
  let fixture: ComponentFixture<CorridaListaComponent>;

  let service: CorridaService;


  beforeEach(async () => {

    TestBed.configureTestingModule({

      imports: [
        CorridaListaComponent
      ],

      providers: [
        CorridaService,
        provideHttpClient()
      ]

    });

    fixture = TestBed.createComponent(
      CorridaListaComponent
    );

    component = fixture.componentInstance;

    service = TestBed.inject(
      CorridaService
    );

  });


  it('deve criar o componente', () => {

    expect(component).toBeTruthy();

  });


  it('Deve retornar as corridas', () => {

    const corridas: Corrida[] = [

      {
        id: 1,
        descricao_corrida: 'Corrida de Aracaju'
      } as Corrida,

      {
        id: 2,
        descricao_corrida: 'Corrida de Sergipe'
      } as Corrida

    ];


    spyOn(service, 'listarCorridas')
      .and.returnValue(of(corridas)); 


    component.listar();


    expect(
      component.listaCorridas().length
    ).toBe(2);


    expect(
      component.listaCorridas()[0].descricao_corrida
    ).toBe('Corrida de Aracaju');


    expect(
      component.listaCorridas()[1].descricao_corrida
    ).toBe('Corrida de Sergipe');

  });

});