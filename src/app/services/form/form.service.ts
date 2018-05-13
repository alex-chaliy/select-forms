import { Injectable } from '@angular/core';
import { Form } from '../../models/form/Form';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FormService {

  constructor() { }

  getForms(): Observable<Form[]> {
    return new Observable(observer => {
      const data = [
        new Form({
          name: 'Title & Reg App',
          required: true,
          selectedValue: 'title 1',
          values: [
            'title 2',
            'title 3',
            'title 4'
          ]
        }),
        new Form({
          name: 'Odometer Statement',
          required: true,
          selectedValue: 'statement 1',
          values: [
            'statement 2',
            'statement 3',
            'statement 4'
          ]
        }),
        new Form({
          name: 'Power of Attorney',
          required: false,
          selectedValue: '',
          values: [
            'power 1',
            'power 2',
            'power 3'
          ]
        }),
      ];
      observer.next(data);
    });
  }

}
