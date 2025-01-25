import { ChangeDetectorRef, Component, HostBinding, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-building-details-dialog',
  standalone: false,

  templateUrl: './building-details-dialog.component.html',
  styleUrl: './building-details-dialog.component.scss'
})
export class BuildingDetailsDialogComponent {
  @HostBinding('@.disabled')
  animationsDisabled = true;
  data = inject(MAT_DIALOG_DATA);

  constructor(private cd: ChangeDetectorRef) {
  }
}
