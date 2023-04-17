import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanHomeVisitorComponent } from './loan-home-visitor.component';

describe('LoanHomeVisitorComponent', () => {
  let component: LoanHomeVisitorComponent;
  let fixture: ComponentFixture<LoanHomeVisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanHomeVisitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanHomeVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
