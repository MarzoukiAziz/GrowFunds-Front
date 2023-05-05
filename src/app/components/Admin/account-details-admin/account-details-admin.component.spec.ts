import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDetailsAdminComponent } from './account-details-admin.component';

describe('AccountDetailsAdminComponent', () => {
  let component: AccountDetailsAdminComponent;
  let fixture: ComponentFixture<AccountDetailsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountDetailsAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountDetailsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
