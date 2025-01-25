import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildingsComponent } from './buildings/buildings.component';
import { CustomersComponent } from './customers/customers.component';
import { HomeComponent } from './home/home.component';
import { EffectsModule } from '@ngrx/effects';
import { SuppliersListComponent } from './suppliers/suppliers-list/suppliers-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'buildings',
    loadChildren: () => import('./buildings/buildings.module').then(m => m.BuildingsModule),
    // component: BuildingsComponent,
    title: 'Buildings page',
  },
  {
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule),
    component: CustomersComponent,
    title: 'Customers page',
  },
  {
    path: 'suppliers',
    loadChildren: () => import('./suppliers/suppliers.module').then(m => m.SuppliersModule),
    component: SuppliersListComponent,
    title: 'Suppliers page',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    EffectsModule.forRoot([]), // Register feature effects
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
