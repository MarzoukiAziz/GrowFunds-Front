import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDetailsClientComponent } from './account-details-client.component';

describe('AccountDetailsClientComponent', () => {
  let component: AccountDetailsClientComponent;
  let fixture: ComponentFixture<AccountDetailsClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountDetailsClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountDetailsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
