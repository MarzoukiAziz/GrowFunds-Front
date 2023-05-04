import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacksDetailsClientComponent } from './packs-details-client.component';

describe('PacksDetailsClientComponent', () => {
  let component: PacksDetailsClientComponent;
  let fixture: ComponentFixture<PacksDetailsClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacksDetailsClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacksDetailsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
