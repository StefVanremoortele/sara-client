import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-title',
  standalone: false,
  
  templateUrl: './view-title.component.html',
  styleUrl: './view-title.component.scss'
})
export class ViewTitleComponent {
  @Input() title: string = '';
}
