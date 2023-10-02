import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxSelectModule } from 'ngx-select-ex';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { PinFormComponent } from './pin-form/pin-form.component';
import { PinListComponent } from './pin-list/pin-list.component';
import { CustomerService } from './customer.service';
import { PinService } from './pin.service';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,
    CustomerFormComponent,
    PinFormComponent,
    PinListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxSelectModule,
    FileUploadModule,
    HttpClientModule
  ],
  providers: [CustomerService,PinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
