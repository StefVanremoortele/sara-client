// import { ViewEncapsulation } from '@angular/compiler';
import { trigger, transition, style, animate } from '@angular/animations';
import { Component, HostBinding, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BaseComponent } from '../../base.component';

@Component({
  selector: 'app-dialog',
  standalone: false,
  
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
  // encapsulation: ViewEncapsulation.None // Disable view encapsulation to apply global styles
    animations: [
    trigger('dialogAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('4000ms', style({ opacity: 1 })) // Disable animation on enter
      ]),
      transition(':leave', [
        animate('0ms', style({ opacity: 0 })) // Disable animation on leave
      ])
    ])
  ]
})
export class BaseDialogComponent extends BaseComponent {
  @HostBinding('@.disabled')
  animationsDisabled = true;
  data = inject(MAT_DIALOG_DATA);

  constructor(
    public dialogRef: MatDialogRef<BaseDialogComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    super()
  }

  close() {
    this.dialogRef.close();
  }
}
