import { Component } from '@angular/core';

@Component({
  selector: 'app-pin-list',
  templateUrl: './pin-list.component.html',
  styleUrls: ['./pin-list.component.scss']
})
export class PinListComponent {
  pins: any[] = [
    {
      title: 'Pin 1',
      image: 'https://example.com/pin1.jpg',
      collaborators: ['Collab 1', 'Collab 2'],
      privacy: 'Private'
    },
    {
      title: 'Pin 2',
      image: 'https://example.com/pin2.jpg',
      collaborators: ['Collab 3', 'Collab 4'],
      privacy: 'Public'
    },
    // Add more pin data as needed
  ];

  // Function to navigate to the "+ Add Customer" page
  navigateToAddCustomer() {
    // Implement navigation logic here
  }

  // Function to navigate to the "+ Add Pin" page
  navigateToAddPin() {
    // Implement navigation logic here
  }
}
