import { inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BaseDialogComponent } from '../../common/dialogs/dialog/dialog.component';
import { CustomerDetailsDialogComponent } from '../../common/dialogs/customer-details-dialog/customer-details-dialog.component';

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

  constructor() {}

  open(customerId?: any) {
    this.dialogConfig.data = { id: customerId };
    this.dialogConfig.position = {
      right: '0',
      bottom: '0',
    };
    this.dialogConfig.maxHeight = '100vh';
    this.dialogConfig.enterAnimationDuration = 0; // needed to auto scroll top

    this.dialog.open(BaseDialogComponent, this.dialogConfig);
  }

  openCustomerDetailDialog(customerDetails) {
    this.dialogConfig = defaultDialogConfig;
    this.dialogConfig.data = customerDetails;

    this.dialog.open(CustomerDetailsDialogComponent, this.dialogConfig);
  }
}
