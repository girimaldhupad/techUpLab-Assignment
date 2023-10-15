import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PinService } from '../pin.service';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-pin-form',
  templateUrl: './pin-form.component.html',
  styleUrls: ['./pin-form.component.scss']
})
export class PinFormComponent implements OnInit {

  pin: any = {};
  customers: any = [];
  imageUrlAPI = 'https://github.com/valor-software/ng2-file-upload';
  
  public uploader: FileUploader = new FileUploader({ url: this.imageUrlAPI, itemAlias:'photo' });

  constructor(private router: Router, private pinService: PinService) {}

  ngOnInit(): void {
    this.customers = JSON.parse(localStorage.getItem('customer') || '[]');

    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      console.log('File uploaded:', status);
    };
  }

  createPin() {
    this.router.navigate([''], {
      queryParams: {
        title: this.pin.title,
        collaborator: this.pin.collaborator,
        privacy: this.pin.privacy
      }
    });
    this.pinService.addPin(this.pin);
    this.pin = {};
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      console.log('Selected File:', file);
    }
  }
}
