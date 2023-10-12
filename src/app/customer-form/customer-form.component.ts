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
  response: any[] = [];
  countries: any[] = [];
  customerTitle: string = '';

  constructor(private router: Router,private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getRegions().subscribe(data => {
      this.response = Object.values(data.data);
      for(let response of this.response) {
        if(!this.regions.includes(response.region)){
          this.regions.push(response.region);
        }
      }
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
      this.countries = this.response.filter(item => {
        return item.region === selectedRegion }).map(item => item.country);
    }
  }
  
}
