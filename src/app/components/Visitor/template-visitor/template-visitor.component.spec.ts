import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateVisitorComponent } from './template-visitor.component';

describe('TemplateVisitorComponent', () => {
  let component: TemplateVisitorComponent;
  let fixture: ComponentFixture<TemplateVisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateVisitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
