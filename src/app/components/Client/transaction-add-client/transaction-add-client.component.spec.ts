import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionAddClientComponent } from './transaction-add-client.component';

describe('TransactionAddClientComponent', () => {
  let component: TransactionAddClientComponent;
  let fixture: ComponentFixture<TransactionAddClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionAddClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionAddClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
