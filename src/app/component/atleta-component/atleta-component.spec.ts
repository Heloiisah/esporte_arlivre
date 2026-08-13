import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEsporteComponent } from './atleta-component';

describe('CardEsporteComponent', () => {
  let component: CardEsporteComponent;
  let fixture: ComponentFixture<CardEsporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardEsporteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardEsporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
