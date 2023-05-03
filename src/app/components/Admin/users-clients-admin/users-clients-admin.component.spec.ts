import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersClientsAdminComponent } from './users-clients-admin.component';

describe('UsersClientsAdminComponent', () => {
  let component: UsersClientsAdminComponent;
  let fixture: ComponentFixture<UsersClientsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersClientsAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersClientsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
