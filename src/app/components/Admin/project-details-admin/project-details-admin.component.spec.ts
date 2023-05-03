import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailsAdminComponent } from './project-details-admin.component';

describe('ProjectDetailsAdminComponent', () => {
  let component: ProjectDetailsAdminComponent;
  let fixture: ComponentFixture<ProjectDetailsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDetailsAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDetailsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
