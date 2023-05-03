import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetairementPlanVisitorComponent } from './retairement-plan-visitor.component';

describe('RetairementPlanVisitorComponent', () => {
  let component: RetairementPlanVisitorComponent;
  let fixture: ComponentFixture<RetairementPlanVisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetairementPlanVisitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetairementPlanVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
