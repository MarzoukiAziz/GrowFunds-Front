import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamVisitorComponent } from './team-visitor.component';

describe('TeamVisitorComponent', () => {
  let component: TeamVisitorComponent;
  let fixture: ComponentFixture<TeamVisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamVisitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
