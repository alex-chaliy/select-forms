import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFormsPageComponent } from './select-forms-page.component';

describe('SelectFormsPageComponent', () => {
  let component: SelectFormsPageComponent;
  let fixture: ComponentFixture<SelectFormsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectFormsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFormsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
