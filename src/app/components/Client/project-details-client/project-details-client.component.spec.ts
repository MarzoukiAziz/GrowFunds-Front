import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailsClientComponent } from './project-details-client.component';

describe('ProjectDetailsClientComponent', () => {
  let component: ProjectDetailsClientComponent;
  let fixture: ComponentFixture<ProjectDetailsClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDetailsClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDetailsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
