import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAdminsAdminComponent } from './users-admins-admin.component';

describe('UsersAdminsAdminComponent', () => {
  let component: UsersAdminsAdminComponent;
  let fixture: ComponentFixture<UsersAdminsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersAdminsAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersAdminsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
