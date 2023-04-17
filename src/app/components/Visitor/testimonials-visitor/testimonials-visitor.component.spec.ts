import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsVisitorComponent } from './testimonials-visitor.component';

describe('TestimonialsVisitorComponent', () => {
  let component: TestimonialsVisitorComponent;
  let fixture: ComponentFixture<TestimonialsVisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonialsVisitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonialsVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
