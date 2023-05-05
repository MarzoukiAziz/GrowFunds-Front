import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicNotificationAdminComponent } from './public-notification-admin.component';

describe('PublicNotificationAdminComponent', () => {
  let component: PublicNotificationAdminComponent;
  let fixture: ComponentFixture<PublicNotificationAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicNotificationAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicNotificationAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
