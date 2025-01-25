import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CustomerService } from './customer.service';
import { BaseComponent } from '@syndicus/shared/base.component';
import { DialogService } from '@syndicus/core/services/dialog.service';
import { MockService } from '@syndicus/shared/mock.service';

@Component({
  selector: 'app-customers',
  standalone: false,

  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss',
})
export class CustomersComponent extends BaseComponent {
  customers: Observable<any[]> = of([]);
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'address', 'actions'];

  constructor(
    private _dialog: DialogService,
    private _customer: CustomerService, 
    private _mock: MockService
  ) {
    super();
    this.customers = this._mock.getCustomers();
  }


  openCustomerDetailsDialog(customerId: any) {
    this._customer.getCustomer(customerId).subscribe((response) => {
      let customerData = response;
      this._dialog.openCustomerDetailDialog(customerData);
    });
  }


  viewCustomer(customer: any): void {
    console.log('View customer', customer);

    this._customer.getCustomer(customer.id).subscribe((d) => {
      // let customerData = response;
      this._dialog.openCustomerDetailDialog(d);
    });
  }

  deleteCustomer(customer: any): void {
    console.log('Delete customer', customer);
  }
}
