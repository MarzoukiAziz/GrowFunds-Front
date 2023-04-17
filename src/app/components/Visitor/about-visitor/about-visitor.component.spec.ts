import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutVisitorComponent } from './about-visitor.component';

describe('AboutVisitorComponent', () => {
  let component: AboutVisitorComponent;
  let fixture: ComponentFixture<AboutVisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutVisitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
