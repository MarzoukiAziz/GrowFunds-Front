import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsCashbackVisitorComponent } from './cards-cashback-visitor.component';

describe('CardsCashbackVisitorComponent', () => {
  let component: CardsCashbackVisitorComponent;
  let fixture: ComponentFixture<CardsCashbackVisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsCashbackVisitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsCashbackVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
