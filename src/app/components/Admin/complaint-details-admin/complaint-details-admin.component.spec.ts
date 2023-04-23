import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintDetailsAdminComponent } from './complaint-details-admin.component';

describe('ComplaintDetailsAdminComponent', () => {
  let component: ComplaintDetailsAdminComponent;
  let fixture: ComponentFixture<ComplaintDetailsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintDetailsAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplaintDetailsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
