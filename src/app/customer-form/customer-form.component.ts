import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router,private customerService: CustomerService) { }

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
    }
    this.router.navigate(['']);
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
