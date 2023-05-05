import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAgentsAdminComponent } from './users-agents-admin.component';

describe('UsersAgentsAdminComponent', () => {
  let component: UsersAgentsAdminComponent;
  let fixture: ComponentFixture<UsersAgentsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersAgentsAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersAgentsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
