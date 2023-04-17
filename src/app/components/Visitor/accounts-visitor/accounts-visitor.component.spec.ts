import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsVisitorComponent } from './accounts-visitor.component';

describe('AccountsVisitorComponent', () => {
  let component: AccountsVisitorComponent;
  let fixture: ComponentFixture<AccountsVisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsVisitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountsVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
