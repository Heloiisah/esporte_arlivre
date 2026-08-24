import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { AtletaComponent } from './atleta-component';

describe('AtletaComponent', () => {
  let component: AtletaComponent;
  let fixture: ComponentFixture<AtletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtletaComponent],
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

    fixture = TestBed.createComponent(AtletaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});