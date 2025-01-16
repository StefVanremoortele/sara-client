import { ChangeDetectorRef, Component } from '@angular/core';
import { BaseComponent } from '../common/base.component';

@Component({
  selector: 'app-buildings',
  standalone: false,
  
  templateUrl: './buildings.component.html',
  styleUrl: './buildings.component.scss'
})
export class BuildingsComponent extends BaseComponent {
  constructor(private cd: ChangeDetectorRef) {
    super();
  }

}
