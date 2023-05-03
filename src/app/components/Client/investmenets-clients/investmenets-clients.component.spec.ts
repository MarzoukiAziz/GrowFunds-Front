import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmenetsClientsComponent } from './investmenets-clients.component';

describe('InvestmenetsClientsComponent', () => {
  let component: InvestmenetsClientsComponent;
  let fixture: ComponentFixture<InvestmenetsClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmenetsClientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmenetsClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
