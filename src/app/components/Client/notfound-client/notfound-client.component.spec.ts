import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoundClientComponent } from './notfound-client.component';

describe('NotfoundClientComponent', () => {
  let component: NotfoundClientComponent;
  let fixture: ComponentFixture<NotfoundClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotfoundClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotfoundClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
