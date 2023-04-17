import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanProductVisitorComponent } from './loan-product-visitor.component';

describe('LoanProductVisitorComponent', () => {
  let component: LoanProductVisitorComponent;
  let fixture: ComponentFixture<LoanProductVisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanProductVisitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanProductVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
