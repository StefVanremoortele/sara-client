import { Injectable } from '@angular/core';
import { ApiService } from '../core/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private _api: ApiService) { }

  getCustomer(customerId: number) {
    return this._api.get('CUSTOMER_DETAIL', String(customerId));
    // return this._api.get('CUSTOMER_LIST');
  }
}
