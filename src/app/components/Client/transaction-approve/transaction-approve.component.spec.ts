import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionApproveComponent } from './transaction-approve.component';

describe('TransactionApproveComponent', () => {
  let component: TransactionApproveComponent;
  let fixture: ComponentFixture<TransactionApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionApproveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
