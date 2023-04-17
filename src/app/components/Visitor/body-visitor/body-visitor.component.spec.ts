import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyVisitorComponent } from './body-visitor.component';

describe('BodyVisitorComponent', () => {
  let component: BodyVisitorComponent;
  let fixture: ComponentFixture<BodyVisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyVisitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
