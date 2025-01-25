import { ChangeDetectorRef, Component, HostBinding, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-supplier-details-dialog',
  standalone: false,
  
  templateUrl: './supplier-details-dialog.component.html',
  styleUrl: './supplier-details-dialog.component.scss'
})
export class SupplierDetailsDialogComponent {
  @HostBinding('@.disabled')
  animationsDisabled = true;
  data = inject(MAT_DIALOG_DATA);

  constructor(private cd: ChangeDetectorRef) {
  }
}
