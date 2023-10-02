// customer-form.component.ts
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {
  customer: any = {};
  regions: any[] = [];
  countries: any[] = [];
  customerTitle: string = '';

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getRegions().subscribe(data => {
      this.regions = Object.values(data.data);
    });
  }

  createCustomer() {
    let existingData: string[] = JSON.parse(localStorage.getItem('customer') || '[]');
    if (this.customerTitle.trim() !== '') {
      existingData.push(this.customerTitle);

      localStorage.setItem('customer', JSON.stringify(existingData));
      console.log('Customer title added to localStorage:', this.customerTitle);
    }
  }

  onRegionSelected() {
    const selectedRegion = this.customer.region;
    if (selectedRegion) {
      this.customerService.getCountriesByRegion(selectedRegion).subscribe(data => {
        this.countries = data.data;
      });
    }
  }

  isValidEmail(email: string): boolean {
    const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/;
    return emailPattern.test(email);
  }
  
}
