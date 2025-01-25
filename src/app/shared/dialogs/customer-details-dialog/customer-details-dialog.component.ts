import {
  ChangeDetectorRef,
  Component,
  HostBinding,
  inject,
} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-customer-details-dialog',
  standalone: false,

  templateUrl: './customer-details-dialog.component.html',
  styleUrl: './customer-details-dialog.component.scss',
})
export class CustomerDetailsDialogComponent {
  @HostBinding('@.disabled')
  animationsDisabled = true;
  data = inject(MAT_DIALOG_DATA);

  constructor(private cd: ChangeDetectorRef) {
  }
}
