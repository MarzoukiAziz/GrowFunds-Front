import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCurrentVisitorComponent } from './account-current-visitor.component';

describe('AccountCurrentVisitorComponent', () => {
  let component: AccountCurrentVisitorComponent;
  let fixture: ComponentFixture<AccountCurrentVisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountCurrentVisitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountCurrentVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
