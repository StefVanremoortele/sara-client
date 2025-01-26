import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivativesOverviewComponent } from './privatives-overview/privatives-overview.component';
import { PrivativeDetailComponent } from './privative-detail/privative-detail.component';


const routes: Routes = [
	{
		path: '',
		component: PrivativesOverviewComponent, // Parent component for /buildings
	},
	{
		path: ':id', // Route for /buildings/:id
		component: PrivativeDetailComponent, // Component to handle the detail view
	},
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [RouterModule],
})
export class PrivativesRoutingModule { }