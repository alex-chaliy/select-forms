import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Form } from '../../../models/form/Form';
import * as _ from 'lodash';

@Component({
  selector: 'app-select-form',
  templateUrl: './select-form.component.html',
  styleUrls: ['./select-form.component.scss']
})
export class SelectFormComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Check Add Operation availability when data comes to the component');
    this.checkAddOperationAvailability();
  }

  @Input('selectedForms') _selectedForms: Form[] = [];
  @Input('forms') _forms: Form[];

  isAddOperationAvailable: boolean = true;
  statusMessage: string;

  constructor() { }

  onSelectChanged() {
    this.checkAddOperationAvailability();
  }

  addNew() {
    let values: string[] = [];
    _.forEach(this._forms, form => {
      if (!form.required && ! form.selectedValue) {
        values.push(...form.values);
      }
    });
    let newForm: Form = new Form({
      name: 'Unselected Values',
      required: false,
      selectedValue: '',
      values: values
    });
    this._forms.push(newForm);

    this.statusMessage = 'Created a new form with all unselected values.';
    this.isAddOperationAvailable = false;
  }

  removeLast() {
    const [last] = this._forms.slice(-1);
    if (last.required) {
      alert('Cannot remove required item.');
    } else {
      this._forms.pop();
    }
    this.checkAddOperationAvailability();
  }

  private checkAddOperationAvailability() {
    _.forEach(this._forms, form => {
      if (form.selectedValue) {
        this.isAddOperationAvailable = false;
        this.statusMessage = 'Add operation is not available because all forms are selected.';
      } else {
        this.isAddOperationAvailable = true;
        this.statusMessage = '';
        return false;
      }
    });
  }

}
