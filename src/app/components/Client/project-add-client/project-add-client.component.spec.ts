import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAddClientComponent } from './project-add-client.component';

describe('ProjectAddClientComponent', () => {
  let component: ProjectAddClientComponent;
  let fixture: ComponentFixture<ProjectAddClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectAddClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectAddClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
