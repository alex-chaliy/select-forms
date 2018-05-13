import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectFormsPageComponent } from './select-forms-page/select-forms-page.component';
import { SelectFormModule } from '../ui-elements/select-form/select-form.module';

@NgModule({
  imports: [
    CommonModule,
    SelectFormModule
  ],
  declarations: [SelectFormsPageComponent]
})
export class SelectFormsPageModule { }
