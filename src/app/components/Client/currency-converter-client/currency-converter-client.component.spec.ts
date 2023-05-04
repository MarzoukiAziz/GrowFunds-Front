import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyConverterClientComponent } from './currency-converter-client.component';

describe('CurrencyConverterClientComponent', () => {
  let component: CurrencyConverterClientComponent;
  let fixture: ComponentFixture<CurrencyConverterClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyConverterClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyConverterClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
