import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanEducationVisitorComponent } from './loan-education-visitor.component';

describe('LoanEducationVisitorComponent', () => {
  let component: LoanEducationVisitorComponent;
  let fixture: ComponentFixture<LoanEducationVisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanEducationVisitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanEducationVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
