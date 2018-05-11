import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SelectFormsPageModule } from './select-forms-page/select-forms-page.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SelectFormsPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
