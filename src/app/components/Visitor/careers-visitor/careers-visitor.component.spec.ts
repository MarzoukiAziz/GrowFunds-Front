import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersVisitorComponent } from './careers-visitor.component';

describe('CareersVisitorComponent', () => {
  let component: CareersVisitorComponent;
  let fixture: ComponentFixture<CareersVisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareersVisitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareersVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
