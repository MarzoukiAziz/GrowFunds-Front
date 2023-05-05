import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditAddClientComponent } from './credit-add-client.component';

describe('CreditAddClientComponent', () => {
  let component: CreditAddClientComponent;
  let fixture: ComponentFixture<CreditAddClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditAddClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditAddClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
