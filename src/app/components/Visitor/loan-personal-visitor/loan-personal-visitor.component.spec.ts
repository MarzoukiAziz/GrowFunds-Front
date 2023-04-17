import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanPersonalVisitorComponent } from './loan-personal-visitor.component';

describe('LoanPersonalVisitorComponent', () => {
  let component: LoanPersonalVisitorComponent;
  let fixture: ComponentFixture<LoanPersonalVisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanPersonalVisitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanPersonalVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
