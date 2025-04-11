import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarCooperadoComponent } from './consultar-cooperado.component';

describe('ConsultarCooperadoComponent', () => {
  let component: ConsultarCooperadoComponent;
  let fixture: ComponentFixture<ConsultarCooperadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarCooperadoComponent]
    });
    fixture = TestBed.createComponent(ConsultarCooperadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
