import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacksAddAdminComponent } from './packs-add-admin.component';

describe('PacksAddAdminComponent', () => {
  let component: PacksAddAdminComponent;
  let fixture: ComponentFixture<PacksAddAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacksAddAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacksAddAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
