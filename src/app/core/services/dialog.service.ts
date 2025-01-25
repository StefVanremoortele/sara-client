import { inject, Injectable } from '@angular/core';
import { ComponentType } from '@angular/cdk/overlay';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CustomerDetailsDialogComponent } from '@syndicus/shared/dialogs/customer-details-dialog/customer-details-dialog.component';
import { BuildingDetailsDialogComponent } from '@syndicus/shared/dialogs/building-details-dialog/building-details-dialog.component';

export interface DialogOptions {
  hasCloseButton?: boolean;
  [key: string]: any; // Allows passing additional custom options
}
const defaultDialogConfig = {
  position: {
    right: '0',
    bottom: '0',
  },
  maxHeight: '100vh',
  minHeight: '100vh',
  enterAnimationDuration: 0,
};

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  readonly dialog = inject(MatDialog);
  dialogConfig = new MatDialogConfig();

  constructor() {
    this.dialogConfig = defaultDialogConfig;
  }

    open<T>(component: ComponentType<T>, options: DialogOptions = {}) {
    return this.dialog.open(component, {
      data: options,
      width: options?.['width'] || '400px',
      disableClose: options?.hasCloseButton === false,
    });
  }

  openBuildingDialog(buildingDetails) {
    this.dialogConfig.data = buildingDetails;
    this.dialogConfig.width = '500px';
    this.dialogConfig.height = '10px';

    console.log(this.dialogConfig.height)

    this.dialog.open(BuildingDetailsDialogComponent, this.dialogConfig);
  }

  openCustomerDetailDialog(customerDetails) {
    this.dialogConfig.data = customerDetails;

    this.dialog.open(CustomerDetailsDialogComponent, this.dialogConfig);
  }

  openSupplierDialog(supplierDetails) {
    // this.dialogConfig.data = supplierDetails;
    // this.dialogConfig.clo

    // this.dialog.open(DialogComponent, this.dialogConfig);
  }
}
