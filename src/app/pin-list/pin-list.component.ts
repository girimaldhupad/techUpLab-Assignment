import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PinService } from '../pin.service';

@Component({
  selector: 'app-pin-list',
  templateUrl: './pin-list.component.html',
  styleUrls: ['./pin-list.component.scss']
})
export class PinListComponent implements OnInit {
  pins: any[] = [];

  constructor(private router: Router, private pinService: PinService) { }

  ngOnInit(): void {
    this.pinService.getPinList().subscribe((pins) => {
      this.pins = pins;
    });
  }

  navigateToAddCustomer() {
    this.router.navigate(['/addCustomer']);
  }

  navigateToAddPin() {
    this.router.navigate(['/addPin']);
  }

  clearPins() {
    this.pinService.clearPins();
  }
}
