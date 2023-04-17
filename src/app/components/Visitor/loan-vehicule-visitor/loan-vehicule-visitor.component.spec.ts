import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanVehiculeVisitorComponent } from './loan-vehicule-visitor.component';

describe('LoanVehiculeVisitorComponent', () => {
  let component: LoanVehiculeVisitorComponent;
  let fixture: ComponentFixture<LoanVehiculeVisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanVehiculeVisitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanVehiculeVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
