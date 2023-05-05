import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacksClientComponent } from './packs-client.component';

describe('PacksClientComponent', () => {
  let component: PacksClientComponent;
  let fixture: ComponentFixture<PacksClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacksClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacksClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
