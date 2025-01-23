import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-privative-detail',
  standalone: false,
  
  templateUrl: './privative-detail.component.html',
  styleUrl: './privative-detail.component.scss'
})
export class PrivativeDetailComponent {
  @Input() privative: any;

}
