import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDefaultComponent } from './card-default.component';

describe('CardDefaultComponent', () => {
  let component: CardDefaultComponent;
  let fixture: ComponentFixture<CardDefaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDefaultComponent]
    });
    fixture = TestBed.createComponent(CardDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
