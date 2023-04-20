import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoundAdminComponent } from './notfound-admin.component';

describe('NotfoundAdminComponent', () => {
  let component: NotfoundAdminComponent;
  let fixture: ComponentFixture<NotfoundAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotfoundAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotfoundAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
