import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackAdminComponent } from './pack-admin.component';

describe('PackAdminComponent', () => {
  let component: PackAdminComponent;
  let fixture: ComponentFixture<PackAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
