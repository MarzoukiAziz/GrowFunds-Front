import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsClientComponent } from './product-details-client.component';

describe('ProductDetailsClientComponent', () => {
  let component: ProductDetailsClientComponent;
  let fixture: ComponentFixture<ProductDetailsClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
