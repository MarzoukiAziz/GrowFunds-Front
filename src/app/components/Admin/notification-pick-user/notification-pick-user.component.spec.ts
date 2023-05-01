import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationPickUserComponent } from './notification-pick-user.component';

describe('NotificationPickUserComponent', () => {
  let component: NotificationPickUserComponent;
  let fixture: ComponentFixture<NotificationPickUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationPickUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationPickUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
