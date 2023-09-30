import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { PinListComponent } from './pin-list/pin-list.component';
import { PinFormComponent } from './pin-form/pin-form.component';

const routes: Routes = [
  {path: '', component: PinListComponent},  //main page UI
  {path: 'addCustomer', component: CustomerFormComponent},  //add customer page UI
  {path: 'addPin', component: PinFormComponent},  //add pin page UI
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
