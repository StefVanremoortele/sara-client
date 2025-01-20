import { ChangeDetectorRef, Component } from '@angular/core';
import { BaseComponent } from '../common/base.component';
import { MockService } from '../common/mock.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-buildings',
  standalone: false,
  
  templateUrl: './buildings.component.html',
  styleUrl: './buildings.component.scss'
})
export class BuildingsComponent extends BaseComponent  {
  buildings: Observable<any[]> = of([]);
  displayedColumns: string[] = ['name', 'address', 'actions'];
  
  constructor(private cd: ChangeDetectorRef, private mockService: MockService) {
    super();
    this.buildings = mockService.getBuildings();
  }

  viewBuilding(building: any): void {
    console.log('View building', building);
  }

  deleteBuilding(building: any): void {
    console.log('Delete building', building);
  }
}
