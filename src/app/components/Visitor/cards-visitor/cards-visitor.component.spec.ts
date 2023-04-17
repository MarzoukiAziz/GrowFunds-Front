import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsVisitorComponent } from './cards-visitor.component';

describe('CardsVisitorComponent', () => {
  let component: CardsVisitorComponent;
  let fixture: ComponentFixture<CardsVisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsVisitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
