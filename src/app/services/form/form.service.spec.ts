import { TestBed, inject } from '@angular/core/testing';

import { FormService } from './form.service';
import { Form } from '../../models/form/Form';
import { Observable } from 'rxjs/Observable';

describe('FormService', () => {
  let service: FormService;

  beforeEach(() => {
    service = new FormService();
    TestBed.configureTestingModule({
      providers: [FormService]
    });
  });

  it('should be created', inject([FormService], (service: FormService) => {
    expect(service).toBeTruthy();
  }));


  it('getForms() should return forms array from observable.', () => {
    service.getForms()
      .subscribe(forms => {
        console.log('FormService.getForms() - forms: \n ', forms);
        expect(Array.isArray(forms)).toBe(true);
      });
  });

  it('getValues() should return all values of all forms from observable. Values should be array of strings.', () => {
    service.getValues()
      .subscribe(values => {
        console.log('FormService.getValues() - all values of all forms \n ', values);
        if (values[0]) {
          expect(typeof values[0]).toBe('string');
        }
      });
  });
});
