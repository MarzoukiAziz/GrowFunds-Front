import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacksAdminComponent } from './packs-admin.component';

describe('PacksAdminComponent', () => {
  let component: PacksAdminComponent;
  let fixture: ComponentFixture<PacksAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacksAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacksAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
