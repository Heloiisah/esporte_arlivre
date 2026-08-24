import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { CorridaComponent } from './corrida-component';

describe('CorridaComponent', () => {
  let component: CorridaComponent;
  let fixture: ComponentFixture<CorridaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorridaComponent],
      providers: [
        provideHttpClient(),
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}),
            snapshot: {
              params: {}
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CorridaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});