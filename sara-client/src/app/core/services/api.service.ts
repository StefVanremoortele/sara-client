import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BASE_URL: string = 'http://localhost';

  constructor(private http: HttpClient) { }

  get(resource: string, urlParam?: string) {
    let url = this.BASE_URL;

    if (resource == 'CUSTOMER_DETAILS') {
      url += '/api/customers'  
    }

    if (resource == 'CUSTOMER_LIST') {
      url += '/api/customers'  
    }

    if (urlParam) {
      url += '/' + urlParam
    }

    return this.http.get(url);
  }
}
