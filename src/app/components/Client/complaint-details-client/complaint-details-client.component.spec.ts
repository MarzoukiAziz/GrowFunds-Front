import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintDetailsClientComponent } from './complaint-details-client.component';

describe('ComplaintDetailsClientComponent', () => {
  let component: ComplaintDetailsClientComponent;
  let fixture: ComponentFixture<ComplaintDetailsClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintDetailsClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplaintDetailsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
