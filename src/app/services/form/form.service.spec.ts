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

  
  it('#getForms should return forms array from observable', () => {
    expect(service.getForms());
    // .toBe(new Observable(o => o.next()));
  });
});
