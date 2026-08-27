import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient, withXhr } from '@angular/common/http';
import { of } from 'rxjs';
import { describe, it, expect, beforeEach, vi } from 'vitest';

import { CorridaListaComponent } from './corrida-lista-component';
import { CorridaService } from '../../../service/corrida/corrida-service';
import { Corrida } from '../../../models/Corrida';

describe('CorridaListaComponent', () => {

  let component: CorridaListaComponent;
  let service: CorridaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CorridaListaComponent],
      providers: [
        CorridaService,
        provideHttpClient(withXhr())
      ]
    });

    component = TestBed.createComponent(
      CorridaListaComponent
    ).componentInstance;

    service = TestBed.inject(CorridaService);
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve carregar a lista de corridas', () => {

    // Arrange
    const corridas: Corrida[] = [
      { id: 1, descricao_corrida: 'Corrida de Aracaju' } as Corrida,
      { id: 2, descricao_corrida: 'Corrida de Sergipe' } as Corrida
    ];

    vi.spyOn(service, 'listarCorridas')
      .mockReturnValue(of(corridas));

    // Act
    component.listar();

    // Assert
    expect(component.listaCorridas()).toHaveLength(2);
    expect(component.listaCorridas()[0].descricao_corrida)
      .toBe('Corrida de Aracaju');
    expect(component.listaCorridas()[1].descricao_corrida)
      .toBe('Corrida de Sergipe');
  });

});