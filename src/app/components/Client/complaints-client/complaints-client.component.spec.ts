import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintsClientComponent } from './complaints-client.component';

describe('ComplaintsClientComponent', () => {
  let component: ComplaintsClientComponent;
  let fixture: ComponentFixture<ComplaintsClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintsClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplaintsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
