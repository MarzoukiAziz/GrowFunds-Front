import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterVisitorComponent } from './footer-visitor.component';

describe('FooterVisitorComponent', () => {
  let component: FooterVisitorComponent;
  let fixture: ComponentFixture<FooterVisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterVisitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
