import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { CorridaService } from './corrida-service';

describe('CorridaService', () => {

  let service: CorridaService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        CorridaService,
        provideHttpClient()
      ]
    });

    service = TestBed.inject(CorridaService);

  });

  it('should be created', () => {

    expect(service).toBeTruthy();

  });

});