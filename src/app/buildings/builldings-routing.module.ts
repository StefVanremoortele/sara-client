import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildingsComponent } from './buildings.component';
import { BuildingDetailComponent } from './building-detail/building-detail.component';

const routes: Routes = [
  {
    path: '',
    component: BuildingsComponent, // Parent component for /buildings
  },
  {
    path: ':id', // Route for /buildings/:id
    component: BuildingDetailComponent, // Component to handle the detail view
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuildingsRoutingModule {}