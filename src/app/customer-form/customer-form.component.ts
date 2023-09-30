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
    // Load regions data on component initialization
    this.customerService.getRegions().subscribe(data => {
      this.regions = data.data; // Assuming the API response contains a 'data' property with regions
    });
  }

  // Implement the createCustomer function for creating a customer
  createCustomer() {
    // Your create customer logic here
  }

  // Function to fetch countries based on the selected region
  onRegionSelected() {
    const selectedRegion = this.customer.region;
    if (selectedRegion) {
      this.customerService.getCountriesByRegion(selectedRegion).subscribe(data => {
        this.countries = data.data; // Assuming the API response contains a 'data' property with countries
      });
    }
  }
}
