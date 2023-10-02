// customer-form.component.ts
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {
  customer: any = {}; // Initialize your customer object
  regions: any[] = []; // Initialize regions array
  countries: any[] = []; // Initialize countries array

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getRegions().subscribe(data => {
      this.regions = data.data; 
    });
  }

  
  createCustomer() {
  }

  onRegionSelected() {
    const selectedRegion = this.customer.region;
    if (selectedRegion) {
      this.customerService.getCountriesByRegion(selectedRegion).subscribe(data => {
        this.countries = data.data;
      });
    }
  }
}
