import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPasswordClientComponent } from './forget-password-client.component';

describe('ForgetPasswordClientComponent', () => {
  let component: ForgetPasswordClientComponent;
  let fixture: ComponentFixture<ForgetPasswordClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetPasswordClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetPasswordClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
