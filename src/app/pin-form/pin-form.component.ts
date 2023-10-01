import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pin-form',
  templateUrl: './pin-form.component.html',
  styleUrls: ['./pin-form.component.scss']
})
export class PinFormComponent implements OnInit {

  URL = 'path_to_api';

  // public uploader:FileUploader = new FileUploader({url: URL});
  
  pin = {
    title: '',
    collaborator: '',
    privacy: 'private'
  };
customers = ['Customer1', 'Customer2']

constructor(private router: Router) {}

ngOnInit(): void {
 
}

storgeDataIntoLocal() {
  // var a = [];
  // a.push(JSON.parse(localStorage.getItem('session')));
  // localStorage.setItem('session', JSON.stringify(a));
}

  createPin() {
    console.log('Creating Pin:', this.pin);
    this.router.navigate([''], {
    queryParams: {
      title: this.pin.title,
      collaborator: this.pin.collaborator,
      privacy: this.pin.privacy
    }
  });
  console.log('quary paramssssssss');
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      console.log('Selected File:', file);
    }
  }
}
