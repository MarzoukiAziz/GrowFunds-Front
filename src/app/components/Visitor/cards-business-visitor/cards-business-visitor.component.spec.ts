import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsBusinessVisitorComponent } from './cards-business-visitor.component';

describe('CardsBusinessVisitorComponent', () => {
  let component: CardsBusinessVisitorComponent;
  let fixture: ComponentFixture<CardsBusinessVisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsBusinessVisitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsBusinessVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
