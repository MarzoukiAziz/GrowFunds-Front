import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditDetailsAdminComponent } from './credit-details-admin.component';

describe('CreditDetailsAdminComponent', () => {
  let component: CreditDetailsAdminComponent;
  let fixture: ComponentFixture<CreditDetailsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditDetailsAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditDetailsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
