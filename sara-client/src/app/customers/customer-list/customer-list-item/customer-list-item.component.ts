import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-customer-list-item',
  standalone: false,
  
  templateUrl: './customer-list-item.component.html',
  styleUrl: './customer-list-item.component.scss'
})
export class CustomerListItemComponent {
  @Input() name:string = '';

}
