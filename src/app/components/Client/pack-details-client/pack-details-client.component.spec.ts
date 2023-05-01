import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackDetailsClientComponent } from './pack-details-client.component';

describe('PackDetailsClientComponent', () => {
  let component: PackDetailsClientComponent;
  let fixture: ComponentFixture<PackDetailsClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackDetailsClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackDetailsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
