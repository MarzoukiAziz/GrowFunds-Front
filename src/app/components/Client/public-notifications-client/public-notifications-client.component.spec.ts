import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicNotificationsClientComponent } from './public-notifications-client.component';

describe('PublicNotificationsClientComponent', () => {
  let component: PublicNotificationsClientComponent;
  let fixture: ComponentFixture<PublicNotificationsClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicNotificationsClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicNotificationsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
