import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSavingsVisitorComponent } from './account-savings-visitor.component';

describe('AccountSavingsVisitorComponent', () => {
  let component: AccountSavingsVisitorComponent;
  let fixture: ComponentFixture<AccountSavingsVisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSavingsVisitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountSavingsVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
