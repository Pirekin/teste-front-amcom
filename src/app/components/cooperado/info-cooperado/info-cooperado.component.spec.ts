import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCooperadoComponent } from './info-cooperado.component';

describe('InfoCooperadoComponent', () => {
  let component: InfoCooperadoComponent;
  let fixture: ComponentFixture<InfoCooperadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoCooperadoComponent]
    });
    fixture = TestBed.createComponent(InfoCooperadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
