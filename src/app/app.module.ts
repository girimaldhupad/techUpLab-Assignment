import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxSelectModule } from 'ngx-select-ex';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { PinFormComponent } from './pin-form/pin-form.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { PinListComponent } from './pin-list/pin-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerFormComponent,
    PinFormComponent,
    CustomerListComponent,
    PinListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
