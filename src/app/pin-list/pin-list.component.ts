import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PinService } from '../pin.service';

@Component({
  selector: 'app-pin-list',
  templateUrl: './pin-list.component.html',
  styleUrls: ['./pin-list.component.scss']
})
export class PinListComponent implements OnInit {
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

  constructor(private router: Router, private pinService: PinService) { }

  ngOnInit(): void {
    this.pinService.getPinList().subscribe((pins) => {
      this.pins = pins;
    });
  }

  // Function to navigate to the "+ Add Customer" page
  navigateToAddCustomer() {
   this.router.navigate(['/addCustomer']);
  }

  // Function to navigate to the "+ Add Pin" page
  navigateToAddPin() {
    this.router.navigate(['/addPin']);
  }

  //if user wants to clear/remove an added PIN
  clearPins() {
    this.pinService.clearPins();
  }
}
