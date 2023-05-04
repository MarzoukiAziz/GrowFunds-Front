import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerProposalAdminComponent } from './answer-proposal-admin.component';

describe('AnswerProposalAdminComponent', () => {
  let component: AnswerProposalAdminComponent;
  let fixture: ComponentFixture<AnswerProposalAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerProposalAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswerProposalAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
