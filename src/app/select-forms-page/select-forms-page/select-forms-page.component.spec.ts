import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFormsPageComponent } from './select-forms-page.component';
import { SelectFormModule } from '../../ui-elements/select-form/select-form.module';
import { FormService } from '../../services/form/form.service';

describe('SelectFormsPageComponent', () => {
  let component: SelectFormsPageComponent;
  let fixture: ComponentFixture<SelectFormsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectFormsPageComponent ],
      imports: [SelectFormModule],
      providers: [FormService]
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

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Forms');
  }));
});
