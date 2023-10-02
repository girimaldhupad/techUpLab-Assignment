import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PinService } from '../pin.service';

@Component({
  selector: 'app-pin-form',
  templateUrl: './pin-form.component.html',
  styleUrls: ['./pin-form.component.scss']
})
export class PinFormComponent implements OnInit {

  pin: any = {};
  customers: any = [];

  constructor(private router: Router, private pinService: PinService) { }

  ngOnInit(): void {
    this.customers = JSON.parse(localStorage.getItem('customer') || '[]');
  }

  createPin() {
    this.router.navigate([''], {
      queryParams: {
        title: this.pin.title,
        collaborator: this.pin.collaborator,
        privacy: this.pin.privacy
      }
    });
    // console.log('quary paramssssssss');
    this.pinService.addPin(this.pin);
    this.pin = {}; // Reset the form
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      console.log('Selected File:', file);
    }
  }
}
