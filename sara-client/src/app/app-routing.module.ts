import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BuildingsComponent} from './buildings/buildings.component';
import {CustomersComponent} from './customers/customers.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page',
    },
    {
      path: 'buildings',
      component: BuildingsComponent,
      title: 'Buildings page',
    },
    {
      path: 'customers',
      component: CustomersComponent,
      title: 'Customers page',
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
