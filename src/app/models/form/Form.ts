import { IForm } from './IForm';

export class Form implements IForm {
  name: string;
  required: boolean;
  selectedValue: string;
  values: string[];

  constructor(o: Form = <Form>{}) {
    this.name = o.name || '';
    this.required = o.required || false;
    this.selectedValue = o.selectedValue || '';
    this.values = o.values || [];
  }
}