import { ChangeDetectorRef, Component } from '@angular/core';
import { BaseComponent } from '../../common/base.component';

@Component({
  selector: 'app-building-list-item',
  standalone: false,
  
  templateUrl: './building-list-item.component.html',
  styleUrl: './building-list-item.component.scss'
})
export class BuildingListItemComponent extends BaseComponent{
  address = "Middenlaan 45"

  constructor(private cd: ChangeDetectorRef) {
    super();
  }
  
  

}
