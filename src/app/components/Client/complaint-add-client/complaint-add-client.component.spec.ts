import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintAddClientComponent } from './complaint-add-client.component';

describe('ComplaintAddClientComponent', () => {
  let component: ComplaintAddClientComponent;
  let fixture: ComponentFixture<ComplaintAddClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintAddClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplaintAddClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
