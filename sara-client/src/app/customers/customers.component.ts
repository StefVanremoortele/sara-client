import { Component } from '@angular/core';
import { BaseComponent } from '../common/base.component';
import { DialogService } from '../core/services/dialog.service';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customers',
  standalone: false,

  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss',
})
export class CustomersComponent extends BaseComponent {
  customers = [
    { id: 1, name: 'George' },
    { id: 2, name: 'Bernadette' },
  ];

  constructor(
    private _dialog: DialogService,
    private _customer: CustomerService
  ) {
    super();
  }

  openCustomerDetailsDialog(customerId: number) {
    this._customer.getCustomer(customerId).subscribe((response) => {
      let customerData = response;
      this._dialog.openCustomerDetailDialog(customerData);
    });
  }
}
