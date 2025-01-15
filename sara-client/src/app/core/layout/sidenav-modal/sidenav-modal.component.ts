import { ChangeDetectorRef, Component } from '@angular/core';
import { BaseComponent } from '../../../common/base.component';

@Component({
  selector: 'app-sidenav-modal',
  standalone: false,
  
  templateUrl: './sidenav-modal.component.html',
  styleUrl: './sidenav-modal.component.scss'
})
export class SidenavModalComponent extends BaseComponent {

  constructor(private cd: ChangeDetectorRef) {
    super();
  }
}
