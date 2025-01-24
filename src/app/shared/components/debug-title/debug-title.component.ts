import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-debug-title',
  standalone: false,

  templateUrl: './debug-title.component.html',
  styleUrl: './debug-title.component.scss'
})
export class DebugTitleComponent {
  @Input() inDevMode: boolean = false;
  @Input() componentName: string = '';
}
