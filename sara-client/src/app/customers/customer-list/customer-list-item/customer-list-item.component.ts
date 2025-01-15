import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogService } from '../../../core/services/dialog.service';

@Component({
  selector: 'app-customer-list-item',
  standalone: false,

  templateUrl: './customer-list-item.component.html',
  styleUrl: './customer-list-item.component.scss',
})
export class CustomerListItemComponent {
  @Input() id: number;
  @Input() name: string = '';
  @Output() viewCustomerDetails = new EventEmitter<number>();

  openCustomerDetails() {
    this.viewCustomerDetails.emit(this.id);
  }
}
