import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacksEditAdminComponent } from './packs-edit-admin.component';

describe('PacksEditAdminComponent', () => {
  let component: PacksEditAdminComponent;
  let fixture: ComponentFixture<PacksEditAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacksEditAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacksEditAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
