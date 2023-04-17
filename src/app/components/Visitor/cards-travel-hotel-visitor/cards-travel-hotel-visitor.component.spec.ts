import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsTravelHotelVisitorComponent } from './cards-travel-hotel-visitor.component';

describe('CardsTravelHotelVisitorComponent', () => {
  let component: CardsTravelHotelVisitorComponent;
  let fixture: ComponentFixture<CardsTravelHotelVisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsTravelHotelVisitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsTravelHotelVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
