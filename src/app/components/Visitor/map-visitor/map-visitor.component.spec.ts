import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapVisitorComponent } from './map-visitor.component';

describe('MapVisitorComponent', () => {
  let component: MapVisitorComponent;
  let fixture: ComponentFixture<MapVisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapVisitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
