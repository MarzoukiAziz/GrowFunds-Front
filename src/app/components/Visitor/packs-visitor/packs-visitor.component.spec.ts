import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacksVisitorComponent } from './packs-visitor.component';

describe('PacksVisitorComponent', () => {
  let component: PacksVisitorComponent;
  let fixture: ComponentFixture<PacksVisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacksVisitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacksVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
