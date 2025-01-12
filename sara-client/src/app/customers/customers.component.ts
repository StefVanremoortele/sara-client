import { Component } from '@angular/core';
import { BaseComponent } from '../common/base.component';

@Component({
  selector: 'app-customers',
  standalone: false,

  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent extends BaseComponent{

}
