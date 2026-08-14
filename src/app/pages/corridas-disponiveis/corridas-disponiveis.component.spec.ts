import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorridasDisponiveisComponent } from './corridas-disponiveis.component';

describe('CorridasDisponiveisComponent', () => {
  let component: CorridasDisponiveisComponent;
  let fixture: ComponentFixture<CorridasDisponiveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorridasDisponiveisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorridasDisponiveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
