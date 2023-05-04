import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacksDetailsAdminComponent } from './packs-details-admin.component';

describe('PacksDetailsAdminComponent', () => {
  let component: PacksDetailsAdminComponent;
  let fixture: ComponentFixture<PacksDetailsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacksDetailsAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacksDetailsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
