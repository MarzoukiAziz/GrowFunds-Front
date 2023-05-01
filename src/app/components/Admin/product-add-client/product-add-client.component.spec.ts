import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddClientComponent } from './product-add-client.component';

describe('ProductAddClientComponent', () => {
  let component: ProductAddClientComponent;
  let fixture: ComponentFixture<ProductAddClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAddClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductAddClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
