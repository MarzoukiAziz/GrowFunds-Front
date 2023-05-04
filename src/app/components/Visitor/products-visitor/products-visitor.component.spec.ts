import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsVisitorComponent } from './products-visitor.component';

describe('ProductsVisitorComponent', () => {
  let component: ProductsVisitorComponent;
  let fixture: ComponentFixture<ProductsVisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsVisitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
