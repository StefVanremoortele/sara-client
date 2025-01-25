import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MockService } from '@syndicus/shared/mock.service';

@Component({
  selector: 'app-building-detail',
  standalone: false,

  templateUrl: './building-detail.component.html',
  styleUrl: './building-detail.component.scss'
})
export class BuildingDetailComponent {
  building: any; // Replace with an actual Building model/interface
  privatives: any[] = []; // Replace with actual Perivative model/interface
  newPerivative = {
    name: '',
    type: '',
    description: '',
  };

  buildingId!: string;

  constructor(private route: ActivatedRoute, private mockService: MockService) { }

  ngOnInit() {
    this.buildingId = this.route.snapshot.paramMap.get('id')!;
    // Or subscribe for dynamic changes:
    // this.route.paramMap.subscribe(params => {
    //   this.buildingId = params.get('id')!;
    // });
    this.loadBuilding(this.buildingId);
    this.loadPerivatives(this.buildingId);

  }

  loadBuilding(id: string | null) {
    // Mock loading logic, replace with a real API call
    this.building = {
      id,
      name: 'Sample Building',
      address: '123 Main Street',
      owner: 'John Doe',
      constructionYear: 1995,
    };
  }

  loadPerivatives(buildingId: string | null) {
    // Mock loading logic, replace with a real API call
    this.privatives = [
      {
        name: 'Fire Alarm',
        type: 'Safety Equipment',
        description: 'Installed in all hallways and rooms.',
      },
      {
        name: 'Elevator',
        type: 'Facility',
        description: 'Supports up to 15 passengers.',
      },
    ];

    this.mockService.getPrivatives().subscribe((privatives: any[]) => {
      this.privatives = privatives;
    });
  }

  addPrivative() {
    // Mock addition logic, replace with API call
    // this.perivatives.push({ ...this.newPerivative });
    // this.newPerivative = { name: '', type: '', description: '' };
  }
}
