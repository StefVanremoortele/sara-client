import { ChangeDetectorRef, Component } from '@angular/core';
import { BaseComponent } from '../shared/base.component';
import { MockService } from '../shared/mock.service';
import { Observable, of } from 'rxjs';
import { DialogService } from '../core/services/dialog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buildings',
  standalone: false,

  templateUrl: './buildings.component.html',
  styleUrl: './buildings.component.scss'
})
export class BuildingsComponent extends BaseComponent {
  buildings: Observable<any[]> = of([]);
  displayedColumns: string[] = ['name', 'address', 'actions'];


  constructor(private _dialog: DialogService, private mockService: MockService, private router: Router) {
    super();
    this.buildings = mockService.getBuildings();

    // remove after testing
    // this._dialog.openBuildingDialog({});
    // this.router.navigate(['/buildings', '1']);
  }

  viewBuilding(building: any): void {
    console.log('View building', building);

    this._dialog.openBuildingDialog({});
  }

  deleteBuilding(building: any): void {
    console.log('Delete building', building);
  }

  applyFilter(searchQuery: string): void {
    // this.dataSource = new MatTableDataSource([]);
    // this.buildings = this.dataSouce.data.filter((item) =>
    //   Object.values(item).some((val) =>
    //     String(val).toLowerCase().includes(searchQuery.toLowerCase())
    //   )
    // );
  }
}
