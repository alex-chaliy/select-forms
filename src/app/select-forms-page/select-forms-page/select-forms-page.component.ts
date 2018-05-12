import { Component, OnInit } from '@angular/core';
import { Form } from '../../models/form/Form';
import { FormService } from '../../services/form/form.service';

@Component({
  selector: 'app-select-forms-page',
  templateUrl: './select-forms-page.component.html',
  styleUrls: ['./select-forms-page.component.scss']
})
export class SelectFormsPageComponent implements OnInit {

  availableForms: Form[];
  selectedForms: Form[];

  constructor(
    private formService: FormService
  ) {}

  ngOnInit() {
    this.formService.getForms()
      .subscribe(forms => this.availableForms = forms);
  }

}
