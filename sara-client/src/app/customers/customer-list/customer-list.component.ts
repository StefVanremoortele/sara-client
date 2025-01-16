import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  standalone: false,

  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss',
})
export class CustomerListComponent {
  @Input() customers: any = [];
  @Output() viewCustomerDetails = new EventEmitter<number>();

  openCustomerDetailsPage(id: any) {
    this.viewCustomerDetails.emit(id)
  }
}
