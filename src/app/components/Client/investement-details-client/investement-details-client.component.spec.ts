import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestementDetailsClientComponent } from './investement-details-client.component';

describe('InvestementDetailsClientComponent', () => {
  let component: InvestementDetailsClientComponent;
  let fixture: ComponentFixture<InvestementDetailsClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestementDetailsClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestementDetailsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
