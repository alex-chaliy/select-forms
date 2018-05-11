import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SelectFormsPageComponent } from '../select-forms-page/select-forms-page/select-forms-page.component';

const routes: Routes = [
    { path: '', redirectTo: '/select-forms', pathMatch: 'full' },
    { path: 'select-forms', component: SelectFormsPageComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
