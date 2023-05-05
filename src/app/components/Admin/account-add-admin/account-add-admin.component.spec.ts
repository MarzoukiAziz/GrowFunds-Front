import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountAddAdminComponent } from './account-add-admin.component';

describe('AccountAddAdminComponent', () => {
  let component: AccountAddAdminComponent;
  let fixture: ComponentFixture<AccountAddAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountAddAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountAddAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
