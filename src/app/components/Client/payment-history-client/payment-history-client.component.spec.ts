import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentHistoryClientComponent } from './payment-history-client.component';

describe('PaymentHistoryClientComponent', () => {
  let component: PaymentHistoryClientComponent;
  let fixture: ComponentFixture<PaymentHistoryClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentHistoryClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentHistoryClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
