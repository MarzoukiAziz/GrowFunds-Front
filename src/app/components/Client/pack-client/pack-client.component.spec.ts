import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackClientComponent } from './pack-client.component';

describe('PackClientComponent', () => {
  let component: PackClientComponent;
  let fixture: ComponentFixture<PackClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
