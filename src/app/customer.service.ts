import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'https://api.first.org/data/v1/countries';

  constructor(private http: HttpClient) { }

  getRegions(): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get(`${this.apiUrl}`, {headers: headers});
  }

  getCountriesByRegion(region: string): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get(`${this.apiUrl}?region=${region}`, {headers: headers});
  }
}
