import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PinService {
  private pins: any[] = [];
  private pinListSubject = new BehaviorSubject<any[]>([]);

  constructor() {
    // Load pins from local storage during service initialization
    const savedPins = localStorage.getItem('pins');
    if (savedPins) {
      this.pins = JSON.parse(savedPins);
      this.pinListSubject.next([...this.pins]);
    }
  }

  getPinList() {
    return this.pinListSubject.asObservable();
  }

  addPin(pin: any) {
    this.pins.push(pin);
    this.pinListSubject.next([...this.pins]);
    
    localStorage.setItem('pins', JSON.stringify(this.pins));
  }

  //if user wants to clear/remove an added PIN
  clearPins() {
    this.pins = [];
    this.pinListSubject.next([]);
    
    // Clear local storage
    localStorage.removeItem('pins');
  }
}
