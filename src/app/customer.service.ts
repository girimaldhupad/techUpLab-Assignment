import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'https://api.first.org/data/v1/countries';

  constructor(private http: HttpClient) { }

  getRegions(): Observable<any> {
    return this.http.get(`${this.apiUrl}/regions`);
  }

  getCountriesByRegion(region: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/countries?region=${region}`);
  }
}
