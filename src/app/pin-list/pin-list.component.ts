import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pin-list',
  templateUrl: './pin-list.component.html',
  styleUrls: ['./pin-list.component.scss']
})
export class PinListComponent {
  pins: any[] = [];
  // pins: any[] = [
  //   {
  //     title: 'Pin 1',
  //     image: 'https://example.com/pin1.jpg',
  //     collaborators: ['Customer 1', 'Customer 2'],
  //     privacy: 'Private'
  //   },
  //   {
  //     title: 'Pin 2',
  //     image: 'https://example.com/pin2.jpg',
  //     collaborators: ['Customer 3', 'Customer 4'],
  //     privacy: 'Public'
  //   },
  // ];

  constructor(private router: Router) { }

  // Function to navigate to the "+ Add Customer" page
  navigateToAddCustomer() {
   this.router.navigate(['/addCustomer']);
  }

  // Function to navigate to the "+ Add Pin" page
  navigateToAddPin() {
    this.router.navigate(['/addPin']);
  }
}
