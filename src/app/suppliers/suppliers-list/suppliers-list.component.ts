import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MockService } from '@syndicus/shared/mock.service';
import { DialogService } from '@syndicus/core/services/dialog.service';

@Component({
  selector: 'app-suppliers-list',
  standalone: false,
  
  templateUrl: './suppliers-list.component.html',
  styleUrl: './suppliers-list.component.scss'
})
export class SuppliersListComponent {
  suppliers: Observable<any[]> = of([]);
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'address', 'btwNumber', 'actions'];

  constructor(private _mock: MockService, private _dialog: DialogService) {
    this.suppliers = this._mock.getSuppliers();

    // remove after testing
    this._dialog.openSupplierDialog({});
  }

  viewSupplier(supplier: any): void {
    console.log('View supplier', supplier);
  }

  deleteSupplier(supplier: any): void {
    console.log('Delete supplier', supplier);
  }

}
